export class CalcPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('calc-app h1')).getText();
  }
}
