const pkg = require('../../package.json');

const puppeteer = require('puppeteer');
const express = require('express');
const path = require('path');
const { once } = require('events');
const fs = require('fs').promises;
const os = require('os');

const pkgPath = path.join(__dirname, '../../');

const logger = console;

const prepareScreenshotsFolder = async () => {
  const folder = await fs.mkdtemp(path.join(os.tmpdir(), `${pkg.name}-screenshots-`));
  logger.info(folder);
  return folder;
};

const startStaticHttpServer = async () => {
  const app = express();

  app.get('/test', (req, res) => {
    res.send(`
      <html>
        <style>html, body { background-color: blue; }</style>
        <body data-testid='test'>test</body>
      </html>
    `);
  });

  const files = path.join(__dirname, '..', '..', '..','_site');
  app.use('/pixelart', express.static(files));

  const server = app.listen();

  await once(server, 'listening');

  return server;
};

const startBrowser = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  return {
    browser,
    page
  };
};

class BrowserEnvironment {
  async startStaticHttpServer() {
    const app = express();

    app.get('/test', (req, res) => {
      res.send(`
      <html>
        <style>html, body { background-color: blue; }</style>
        <body data-testid='test'>test</body>
      </html>
    `);
    });

    const files = path.join(__dirname, '..', '..', '..','_site');
    app.use('/pixelart', express.static(files));

    const server = app.listen();

    await once(server, 'listening');

    return server;
  };

  async startBrowser() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    return {
      browser,
      page
    };
  };

  async setup() {
    this.server = await this.startStaticHttpServer();
    const { browser, page } = await this.startBrowser();

    this.browser = browser;
    this.page = page;

    const { port } = this.server.address();
    this.baseUrl = `http://localhost:${port}`;
  }

  async teardown() {
    const cleanup = [
      () => this.server.close(),
      () => this.browser.close(),
    ];

    const promises = cleanup.map(async (fn) => {
      try {
        await fn();
      } catch(e) {
        throw e;
      }
    });

    try {
      await Promise.all(promises);
    } catch(e) {
      console.error(e);
    }
  }
}

class VisualDiffEnvironment extends BrowserEnvironment {
  async prepareScreenshotsFolder() {
    const folder = await fs.mkdtemp(path.join(os.tmpdir(), `${pkg.name}-screenshots-`));
    this.screenshotsFolder = folder;
  };

  async mkdir(dest) {
    try {
      await fs.access(dest);
    } catch(e) {
      await fs.mkdir(dest);
    }
  }

  async createOutputFolder() {
    const dest = path.join(pkgPath, "output");
    await this.mkdir(dest);
  }

  async renameTempToOutput() {
    const currentPath = path.join(pkgPath, "output", "current");

    await this.mkdir(currentPath);

    await fs.rename(this.screenshotsFolder, currentPath);
  }

  async archiveOldScreenshotsFolder() {
    const currentPath = path.join(pkgPath, "output", "current");

    const now = new Date().toISOString();
    const archivePath = path.join(pkgPath, "output", `archived-${now}`);

    await fs.rename(currentPath, archivePath);
  }

  async setup() {
    try {
      await super.setup();

      await this.prepareScreenshotsFolder();
      await this.createOutputFolder();
      await this.archiveOldScreenshotsFolder();
    } catch(e) {
      throw e;
    }
  }

  async teardown() {
    try {
      await super.teardown();
      await this.renameTempToOutput();
    } catch(e) {
      throw e;
    }
  }

  navigateAndCapture(name, url) {
    test(name, async () => {
      const params = [
        // Pixel 2
        { name: "pixel2", viewport: { width: 411, height: 731, deviceScaleFactor: 1 } },
        // iPhone 5/SE
        { name: "iphone5", viewport: { width: 320, height: 568, deviceScaleFactor: 1 } },
        // iPad
        { name: "ipad", viewport: { width: 768, height: 1024, deviceScaleFactor: 1 } },
        // Responsive Large
        { name: "responsive-large", viewport: { width: 1440, height: 1024, deviceScaleFactor: 1 } },
      ];

      const promises = params.map(async (param) => {
        const page = await this.browser.newPage();
        await page.goto(`${this.baseUrl}${url}`)
        await page.setViewport(param.viewport);

        const finalName = [name, param.name]
          .map(name => name.replace(/[\W]+/g,"-"))
          .join('-')
        ;
        await page.screenshot({ path: `${this.screenshotsFolder}/${finalName}.png` });
      });

      await Promise.all(promises);
    });
  }
}

module.exports = {
  BrowserEnvironment,
  VisualDiffEnvironment,
  startStaticHttpServer,
  startBrowser,
  prepareScreenshotsFolder,
};

