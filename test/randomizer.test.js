import Randomizer from '../src/Randomizer';
import { sleep, fix } from '../util/helper';
import Constants from '../util/constants';

// Mock the sleep and fix functions
jest.mock('../util/helper', () => ({
  sleep: jest.fn((delay) => new Promise((resolve) => setTimeout(resolve, delay))),
  fix: jest.fn(),
}));

describe('Randomizer', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should randomize the text', async () => {
    const mockInnerHTML = 'Hello, World!';
    const element = {
      innerHTML: mockInnerHTML,
    };

    const randomizer = new Randomizer();
    await randomizer.randomize(element, 100, 5);

    // Ensure element's innerHTML is different from the original
    expect(element.innerHTML).not.toBe(mockInnerHTML);

    // Ensure the text was scrambled
    expect(element.innerHTML.split('').sort().join('')).not.toBe(mockInnerHTML);
  });

  it('should restore the text if restore is true', async () => {
    const mockInnerHTML = 'Hello, World!';
    const element = {
      innerHTML: mockInnerHTML,
    };

    const randomizer = new Randomizer();
    await randomizer.randomize(element, 100, 5, true);

    // Ensure fix function was called with the correct arguments
    expect(fix).toHaveBeenCalledWith(element, 100, mockInnerHTML);
  });

  it('should not restore the text if restore is false', async () => {
    const mockInnerHTML = 'Hello, World!';
    const element = {
      innerHTML: mockInnerHTML,
    };

    const randomizer = new Randomizer();
    await randomizer.randomize(element, 100, 5, false);

    // Ensure fix function was not called since restore is false
    expect(fix).not.toHaveBeenCalled();
  });

  it('should call sleep function as many times as the randomize count', async () => {
    const element = {
      innerHTML: 'Hello, World!',
    };

    const randomizer = new Randomizer();
    const count = 5;
    await randomizer.randomize(element, 100, count);

    // Ensure sleep function was called with the correct delay
    expect(sleep).toHaveBeenCalledTimes(count);
    expect(sleep).toHaveBeenCalledWith(100);
  });
});
