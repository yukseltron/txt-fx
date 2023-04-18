import TextFX from './txt-fx.js';


const scramble = new TextFX('.-..:-_:');
const scramble2 = new TextFX('..B');
const scramble3 = new TextFX('HELLO');

const element1 = document.querySelector('#headline');
const element2 = document.querySelector('#headline2');
const element3 = document.querySelector('#headline3');


scramble.scramble(element1);
scramble2.scramble(element2, 5);
scramble3.hoverScramble(element3);