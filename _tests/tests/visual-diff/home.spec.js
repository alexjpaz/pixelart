const { VisualDiffEnvironment }= require('../common');

let environment = new VisualDiffEnvironment();

beforeAll(async () => await environment.setup());
afterAll(async () => await environment.teardown());

environment.navigateAndCapture('test', '/test');
environment.navigateAndCapture('@wip home', '/pixelart');
