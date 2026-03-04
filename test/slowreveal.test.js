import SlowReveal from '../src/slowreveal';
import { sleep } from '../util/helper';

jest.mock('../util/helper', () => ({
  sleep: jest.fn(() => Promise.resolve()),
  fix: jest.fn(),
}));

describe('SlowReveal', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fully reveal the original text', async () => {
    const element = { innerHTML: 'Hello' };
    const sr = new SlowReveal();
    await sr.reveal(element, 50, 2);
    expect(element.innerHTML).toBe('Hello');
  });

  it('should preserve spaces', async () => {
    const element = { innerHTML: 'Hi there' };
    const sr = new SlowReveal();
    await sr.reveal(element, 50, 2);
    expect(element.innerHTML).toBe('Hi there');
  });

  it('should call sleep (scramblePerChar + 1) times per non-space character', async () => {
    // "abc" = 3 chars, scramblePerChar=2 → (2 + 1) * 3 = 9 sleeps
    const element = { innerHTML: 'abc' };
    const sr = new SlowReveal();
    const scramblePerChar = 2;
    await sr.reveal(element, 50, scramblePerChar);
    expect(sleep).toHaveBeenCalledTimes((scramblePerChar + 1) * 3);
    expect(sleep).toHaveBeenCalledWith(50);
  });

  it('should skip sleep for space characters', async () => {
    // "a b" = 3 chars, 1 space → (scramblePerChar + 1) * 2 sleeps
    const element = { innerHTML: 'a b' };
    const sr = new SlowReveal();
    const scramblePerChar = 1;
    await sr.reveal(element, 50, scramblePerChar);
    expect(sleep).toHaveBeenCalledTimes((scramblePerChar + 1) * 2);
  });
});
