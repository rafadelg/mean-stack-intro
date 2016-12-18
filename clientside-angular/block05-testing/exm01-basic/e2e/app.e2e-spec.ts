import { EjmTestingAngularPage } from './app.po';

describe('ejm-testing-angular App', function() {
  let page: EjmTestingAngularPage;

  beforeEach(() => {
    page = new EjmTestingAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
