import ReverseCensor from '../src/reversecensor';
import { sleep } from '../util/helper';

jest.mock('../util/helper', () => ({
  sleep: jest.fn(() => Promise.resolve()),
  fix: jest.fn(),
}));

describe('ReverseCensor', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should start with text fully censored', async () => {
    const element = { innerHTML: 'Hello' };
    const rc = new ReverseCensor();

    // Intercept innerHTML to capture the initial censored state
    let firstSet = null;
    const original = Object.getOwnPropertyDescriptor(element, 'innerHTML');
    Object.defineProperty(element, 'innerHTML', {
      get: () => original.value,
      set: (val) => {
        if (firstSet === null) firstSet = val;
        original.value = val;
      },
      configurable: true,
    });

    await rc.reveal(element, 10, '█');
    expect(firstSet).toBe('█████');
  });

  it('should fully restore the original text after reveal', async () => {
    const element = { innerHTML: 'Hello, World!' };
    const rc = new ReverseCensor();
    await rc.reveal(element, 10, '█');
    expect(element.innerHTML).toBe('Hello, World!');
  });

  it('should preserve spaces without waiting on them', async () => {
    const element = { innerHTML: 'Hi there' };
    const rc = new ReverseCensor();
    await rc.reveal(element, 10, '█');
    expect(element.innerHTML).toBe('Hi there');
    // sleep should not have been called for the space character
    // "Hi there" = 8 chars, 1 space → 7 sleep calls
    expect(sleep).toHaveBeenCalledTimes(7);
  });

  it('should call sleep once per non-space character', async () => {
    const element = { innerHTML: 'abc' };
    const rc = new ReverseCensor();
    await rc.reveal(element, 10, '█');
    expect(sleep).toHaveBeenCalledTimes(3);
    expect(sleep).toHaveBeenCalledWith(10);
  });
});
