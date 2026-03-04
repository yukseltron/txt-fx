import Glitch from '../src/glitch';
import { sleep, fix } from '../util/helper';

jest.mock('../util/helper', () => ({
  sleep: jest.fn(() => Promise.resolve()),
  fix: jest.fn(),
}));

describe('Glitch', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call sleep once per frame (count)', async () => {
    const element = { innerHTML: 'Hello' };
    const glitch = new Glitch();
    await glitch.glitch(element, 50, 8, false);
    expect(sleep).toHaveBeenCalledTimes(8);
    expect(sleep).toHaveBeenCalledWith(50);
  });

  it('should call fix when restore is true', async () => {
    const element = { innerHTML: 'Hello' };
    const glitch = new Glitch();
    await glitch.glitch(element, 50, 5, true);
    expect(fix).toHaveBeenCalledWith(element, 50, 'Hello');
  });

  it('should not call fix when restore is false', async () => {
    const element = { innerHTML: 'Hello' };
    const glitch = new Glitch();
    await glitch.glitch(element, 50, 5, false);
    expect(fix).not.toHaveBeenCalled();
  });

  it('should corrupt the text during glitching with intensity 1', async () => {
    const element = { innerHTML: 'Hello' };
    const glitch = new Glitch();
    const states = [];
    const proxy = new Proxy(element, {
      set(target, key, value) {
        if (key === 'innerHTML') states.push(value);
        target[key] = value;
        return true;
      }
    });
    await glitch.glitch(proxy, 50, 3, false, 1.0);
    // At intensity 1.0, every non-space character gets replaced each frame
    expect(states.some(s => s !== 'Hello')).toBe(true);
  });
});
