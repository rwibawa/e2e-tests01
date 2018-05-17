import { AppPage } from './app.po';

describe('hh App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Health History title', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Health History');
  });
});
