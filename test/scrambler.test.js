import Scrambler from '../src/Scrambler';
import { sleep, fix } from '../util/helper';

// Mock sleep function to avoid actual waiting during the test
jest.mock('../util/helper', () => ({
  sleep: jest.fn((delay) => new Promise((resolve) => setTimeout(resolve, delay))),
  fix: jest.fn(),
}));

describe('Scrambler', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should scramble the text correctly', async () => {
    // Mock the element object
    const element = {
      innerHTML: 'Hello, World!',
    };

    const originalText = element.innerHTML;

    const scrambleCount = 3;
    const delay = 100;
    const restore = true;

    const scrambler = new Scrambler();
    await scrambler.scramble(element, delay, scrambleCount, restore);

    // Ensure sleep function was called as many times as the scrambleCount
    expect(sleep).toHaveBeenCalledTimes(scrambleCount);

    // Ensure fix function was called with the correct arguments
    expect(fix).toHaveBeenCalledWith(element, delay, originalText);

    // Ensure the element's innerHTML was modified during the scramble process
    expect(element.innerHTML).not.toBe(originalText);
  });

  it('should restore the text if restore is true', async () => {
    // Mock the element object
    const element = {
      innerHTML: 'Hello, World!',
    };

    const originalText = element.innerHTML;

    const scrambleCount = 2;
    const delay = 100;
    const restore = true;

    const scrambler = new Scrambler();
    await scrambler.scramble(element, delay, scrambleCount, restore);

    // Ensure fix function was called since restore is true
    expect(fix).toHaveBeenCalledWith(element, delay, originalText);
  });

  it('should not restore the text if restore is false', async () => {
    // Mock the element object
    const element = {
      innerHTML: 'Hello, World!',
    };

    const scrambleCount = 2;
    const delay = 100;
    const restore = false;

    const scrambler = new Scrambler();
    await scrambler.scramble(element, delay, scrambleCount, restore);

    // Ensure fix function was not called since restore is false
    expect(fix).not.toHaveBeenCalled();
  });
});
