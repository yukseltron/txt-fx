import Scrambler from './scramble.js';
import TextFX from './index.js';


const scramble = new TextFX.Scrambler('.-..:-_:');
const scramble2 = new TextFX.Scrambler('..B');
const scramble3 = new TextFX.Scrambler('HELLO');
const scramble4 = new TextFX.Scrambler('EVENING SUN NEVER STOPS TO IMPOSE ON YOU MY LOVE');

const element1 = document.querySelector('#headline');
const element2 = document.querySelector('#headline2');
const element3 = document.querySelector('#headline3');
const element4 = document.querySelector('#headline4');



scramble.clickScramble(element1, 5);
scramble2.scramble(element2, 5);
scramble3.hoverScramble(element3);
scramble4.slowScramble(element4, 100)