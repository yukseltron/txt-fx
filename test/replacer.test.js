import Replacer from '../src/Replacer';
import { sleep, fix } from '../util/helper';

// Mock the sleep and fix functions
jest.mock('../util/helper', () => ({
  sleep: jest.fn((delay) => new Promise((resolve) => setTimeout(resolve, delay))),
  fix: jest.fn(),
}));

describe('Replacer', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should redact the text with a character', async () => {
    const mockInnerHTML = 'Hello, World!';
    const element = {
      innerHTML: mockInnerHTML,
    };
    const redactedChar = '█';
    const replacer = new Replacer();
  
    await replacer.replace(element, 10, redactedChar);
  
    // Ensure element's innerHTML contains only redacted characters and spaces
    const redactedRegex = new RegExp(`^([${redactedChar}\\s])+$`);
    expect(redactedRegex.test(element.innerHTML)).toBe(true);
  });

  it('should redact the text with a list of characters', async () => {
    const mockInnerHTML = 'Hello, World!';
    const element = {
      innerHTML: mockInnerHTML,
    };
    const redactedChars = ['█', '*', '#', '$'];
    const replacer = new Replacer();
  
    await replacer.replace(element, 10, redactedChars);
  
    // Ensure element's innerHTML contains only redacted characters and spaces
    const escapedChars = redactedChars.map((char) => char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('');
    const redactedRegex = new RegExp(`^[${escapedChars}\\s]+$`);
    expect(redactedRegex.test(element.innerHTML)).toBe(true);
  });

  it('should restore the text if restore is true', async () => {
    const mockInnerHTML = 'Hello, World!';
    const element = {
      innerHTML: mockInnerHTML,
    };
    const redactedChar = '█';
    const replacer = new Replacer();

    await replacer.replace(element, 10, true, redactedChar);

    // Ensure fix function was called with the correct arguments
    expect(fix).toHaveBeenCalledWith(element, 10, mockInnerHTML);
  });

  it('should not restore the text if restore is false', async () => {
    const mockInnerHTML = 'Hello, World!';
    const element = {
      innerHTML: mockInnerHTML,
    };
    const redactedChar = '█';
    const replacer = new Replacer();

    await replacer.replace(element, 10, false, redactedChar);

    // Ensure fix function was not called since restore is false
    expect(fix).not.toHaveBeenCalled();
  });

  it('should call sleep function as many times as the text length', async () => {
    const element = {
      innerHTML: 'Hello, World!',
    };
    const redactedChar = '█';
    const replacer = new Replacer();

    await replacer.replace(element, 10, redactedChar);

    // Ensure sleep function was called with the correct delay
    expect(sleep).toHaveBeenCalledTimes(element.innerHTML.length);
    expect(sleep).toHaveBeenCalledWith(10);
  });
});
