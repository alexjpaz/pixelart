const setup = require('./setup');

const { getDocument, queries, wait } = require('pptr-testing-library')
const { getByTestId, getByLabelText } = queries;

let
  server,
  browser,
  page,
  baseUrl
;

beforeEach(async () => {
  server = await setup.startStaticHttpServer();
  ({ browser, page } = await setup.startBrowser());

  const { port } = server.address();
  baseUrl = `http://localhost:${port}`;
});

afterEach(async () => {
  const cleanup = [
    () => server.close(),
    () => browser.close(),
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
});

it('ping', async () => {
  await page.goto(`${baseUrl}/test`);

  const $document = await getDocument(page);

  const $testElement = await getByTestId($document, 'test');

  expect($testElement).toEqual(true);

  expect($document).toEqual(1);


  await page.screenshot({ path: 'example.png' });
});
