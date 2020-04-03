const { VisualDiffEnvironment }= require('../common');

let environment = new VisualDiffEnvironment();

beforeAll(async () => await environment.setup());
afterAll(async () => await environment.teardown());

environment.navigateAndCapture('test', '/test');
environment.navigateAndCapture('home', '/pixelart');
environment.navigateAndCapture('blog-post', '/pixelart/2020/04/03/melon.html');
environment.navigateAndCapture('tags', '/pixelart/tags?tag=pixel');
environment.navigateAndCapture('404', '/pixelart/404');
environment.navigateAndCapture('gallery', '/pixelart/gallery');
