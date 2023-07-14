import Scrambler from './scramble.js';
import TextFX from './index.js';


const fx1 = new TextFX.Scrambler('HELLO WORLD');
const fx2 = new TextFX.Scrambler('A..BRAVE__NEW___WORLD');
const fx3 = new TextFX.Scrambler('THE EVENING SUN NEVER IMPOSES ON YOU MY LOVE');
const scramble4 = new TextFX.Scrambler('EVENING SUN NEVER STOPS TO IMPOSE ON YOU MY LOVE');

const element1 = document.querySelector('#headline');
const element2 = document.querySelector('#headline2');
const element3 = document.querySelector('#headline3');
const element4 = document.querySelector('#headline4');



fx1.randomize(element1);
fx2.scramble(element2);
fx3.censor(element3);