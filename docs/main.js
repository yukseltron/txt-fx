import TextFX from 'txt-fx';

const scrambleEl     = document.querySelector('#scramble');
const shuffleEl      = document.querySelector('#shuffle');
const censorEl       = document.querySelector('#censor');
const reverseCensorEl = document.querySelector('#reverse-censor');
const glitchEl       = document.querySelector('#glitch');
const slowRevealEl   = document.querySelector('#slow-reveal');

const scrambler     = new TextFX.Scrambler();
const shuffler      = new TextFX.Shuffler();
const replacer      = new TextFX.Replacer();
const reverseCensor = new TextFX.ReverseCensor();
const glitch        = new TextFX.Glitch();
const slowReveal    = new TextFX.SlowReveal();

scrambler.scramble(scrambleEl, 100, 20, true);
shuffler.shuffle(shuffleEl, 200, 10, true);
replacer.replace(censorEl, 100, '█', true);
reverseCensor.reveal(reverseCensorEl, 100);
glitch.glitch(glitchEl, 60, 20, true, 0.6);
slowReveal.reveal(slowRevealEl, 80, 3);
