import Scrambler from './scramble.js';
import TextFX from './index.js';


const scramble = new TextFX.Scrambler('HELLO WORLD');
const scramble2 = new TextFX.Scrambler('..BRAVE__NEW___WORLD');
const scramble3 = new TextFX.Scrambler('EVENING SUN NEVER STOPS TO IMPOSE ON YOU MY LOVE');
const scramble4 = new TextFX.Scrambler('EVENING SUN NEVER STOPS TO IMPOSE ON YOU MY LOVE');

const element1 = document.querySelector('#headline');
const element2 = document.querySelector('#headline2');
const element3 = document.querySelector('#headline3');
const element4 = document.querySelector('#headline4');



scramble.scramble(element1);
scramble2.slowScramble(element2);
scramble3.censor(element3);