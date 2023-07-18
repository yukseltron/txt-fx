import TextFX from '../index.js';


const element1 = document.querySelector('#headline');
const element2 = document.querySelector('#headline2');
const element3 = document.querySelector('#headline3');

const fx1 = new TextFX.Scrambler();
const fx2 = new TextFX.Randomizer();
const fx3 = new TextFX.Redacter();



fx1.scramble(element1, 100, 10, true);
fx2.randomize(element2, 200, 10, true);
fx3.censor(element3, 100, "█", true);
  