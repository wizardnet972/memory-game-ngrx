import { MemoryGameNgrxPage } from './app.po';

describe('memory-game-ngrx App', function() {
  let page: MemoryGameNgrxPage;

  beforeEach(() => {
    page = new MemoryGameNgrxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
