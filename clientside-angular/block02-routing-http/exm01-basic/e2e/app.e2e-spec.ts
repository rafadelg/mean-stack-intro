import { EjmRoutingAngularPage } from './app.po';

describe('ejm-routing-angular App', function() {
  let page: EjmRoutingAngularPage;

  beforeEach(() => {
    page = new EjmRoutingAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
