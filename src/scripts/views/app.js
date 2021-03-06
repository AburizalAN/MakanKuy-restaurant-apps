/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';

class App {
  constructor({ content }) {
    this._content = content;

    // this._initialAppShell();
  }

  // _initialAppShell() {

  // }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
