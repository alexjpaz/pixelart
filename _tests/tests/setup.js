const puppeteer = require('puppeteer');
const express = require('express');
const path = require('path');
const { once } = require('events');

const startStaticHttpServer = async () => {
  const app = express();

  app.get('/test', (req, res) => {
    res.send(`
      <html>
        <body data-testid='test'></body>
      </html>
    `);
  });

  const files = path.join(__dirname, '..', '..','_site');
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

module.exports = {
  startStaticHttpServer,
  startBrowser
};
