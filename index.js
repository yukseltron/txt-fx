import Scrambler from './src/scrambler.js';
import Randomizer from './src/randomizer.js';
import Redacter from './src/redacter.js';

// Create an object that imports TextFX and future text effects and exports it all from one source like an API
const TextFX = {
    Scrambler: Scrambler,
    Randomizer: Randomizer,
    Redacter: Redacter
};

// Create an instance of the Scrambler class
export default TextFX;
