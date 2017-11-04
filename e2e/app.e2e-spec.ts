import { Gtc2017Page } from './app.po';

describe('gtc2017 App', () => {
  let page: Gtc2017Page;

  beforeEach(() => {
    page = new Gtc2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
