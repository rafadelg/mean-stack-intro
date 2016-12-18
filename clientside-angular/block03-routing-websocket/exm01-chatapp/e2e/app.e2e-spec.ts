import { EjmSocketioAngularPage } from './app.po';

describe('ejm-socketio-angular App', function() {
  let page: EjmSocketioAngularPage;

  beforeEach(() => {
    page = new EjmSocketioAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
