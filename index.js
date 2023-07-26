import Scrambler from './src/scrambler.js';
import Shuffler from './src/shuffler.js';
import Replacer from './src/replacer.js';

// Create an object that imports TextFX and future text effects and exports it all from one source like an API
const TextFX = {
    Scrambler: Scrambler,
    Shuffler: Shuffler,
    Replacer: Replacer
};

// Create an instance of the Scrambler class
export default TextFX;
