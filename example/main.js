import TextFX from '../index.js';


const element1 = document.querySelector('#headline');
const element2 = document.querySelector('#headline2');
const element3 = document.querySelector('#headline3');

const fx1 = new TextFX.Scrambler();
const fx2 = new TextFX.Shuffler();
const fx3 = new TextFX.Replacer();



fx1.scramble(element1, 100, 10, true);
fx2.shuffle(element2, 200, 10, true);
fx3.replace(element3, 100, "█", true);