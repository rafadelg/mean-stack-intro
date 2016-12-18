import { JwtAppPage } from './app.po';

describe('jwt-app App', function() {
  let page: JwtAppPage;

  beforeEach(() => {
    page = new JwtAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
