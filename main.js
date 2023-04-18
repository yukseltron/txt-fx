import Scramble from './scramble.js';

const scramble = new Scramble('hello');

const element1 = document.querySelector('#headline');
const element2 = document.querySelector('#headline2');
scramble.scramble(element1, 10);
scramble.scramble(element2);


const element3 = document.querySelector('#headline3');
scramble.hoverScramble(element3);