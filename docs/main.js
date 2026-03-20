import TextFX from 'txt-fx';

// ---- Dark mode toggle ----
const html = document.documentElement;
const toggleBtn = document.querySelector('#theme-toggle');

// Determine initial state: honour saved pref, then system pref
const saved = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const isDark = saved ? saved === 'dark' : prefersDark;
if (isDark) { html.classList.add('dark'); html.classList.remove('light'); }
else         { html.classList.add('light'); html.classList.remove('dark'); }
toggleBtn.textContent = isDark ? 'Light' : 'Dark';

toggleBtn.addEventListener('click', () => {
  const goingDark = !html.classList.contains('dark');
  html.classList.toggle('dark', goingDark);
  html.classList.toggle('light', !goingDark);
  toggleBtn.textContent = goingDark ? 'Light' : 'Dark';
  localStorage.setItem('theme', goingDark ? 'dark' : 'light');
});

const fx = {
  scrambler:     new TextFX.Scrambler(),
  shuffler:      new TextFX.Shuffler(),
  replacer:      new TextFX.Replacer(),
  reverseCensor: new TextFX.ReverseCensor(),
  glitch:        new TextFX.Glitch(),
  slowReveal:    new TextFX.SlowReveal(),
};

// Store original text so we can reset before replaying
const originals = new Map();
const store = el => originals.set(el, el.innerHTML);
const reset = el => { el.innerHTML = originals.get(el); };

// Wrap an effect: disable button while running, re-enable when done
function guard(btn, fn) {
  return async () => {
    if (btn.disabled) return;
    btn.disabled = true;
    await fn();
    btn.disabled = false;
  };
}

// Elements
const els = {
  header:        document.querySelector('#header-title'),
  glitch:        document.querySelector('#glitch'),
  slowReveal:    document.querySelector('#slow-reveal'),
  scramble:      document.querySelector('#scramble'),
  reverseCensor: document.querySelector('#reverse-censor'),
  censor:        document.querySelector('#censor'),
  shuffle:       document.querySelector('#shuffle'),
};

Object.values(els).forEach(store);

// Effects
async function runHeaderGlitch() {
  reset(els.header);
  await fx.glitch.glitch(els.header, 55, 14, true, 0.5);
}

async function runGlitch() {
  reset(els.glitch);
  await fx.glitch.glitch(els.glitch, 55, 22, true, 0.7);
}

async function runSlowReveal() {
  reset(els.slowReveal);
  await fx.slowReveal.reveal(els.slowReveal, 55, 3);
}

async function runScramble() {
  reset(els.scramble);
  await fx.scrambler.scramble(els.scramble, 75, 28, true);
}

async function runReverseCensor() {
  reset(els.reverseCensor);
  await fx.reverseCensor.reveal(els.reverseCensor, 18);
}

async function runCensor() {
  reset(els.censor);
  await fx.replacer.replace(els.censor, 25, '█', false);
}

async function runShuffle() {
  reset(els.shuffle);
  await fx.shuffler.shuffle(els.shuffle, 110, 14, true);
}

// Replay buttons
const btns = {
  glitch:        document.querySelector('#replay-glitch'),
  slowReveal:    document.querySelector('#replay-slow-reveal'),
  scramble:      document.querySelector('#replay-scramble'),
  reverseCensor: document.querySelector('#replay-reverse-censor'),
  censor:        document.querySelector('#replay-censor'),
  shuffle:       document.querySelector('#replay-shuffle'),
};

btns.glitch.addEventListener('click',        guard(btns.glitch,        runGlitch));
btns.slowReveal.addEventListener('click',    guard(btns.slowReveal,    runSlowReveal));
btns.scramble.addEventListener('click',      guard(btns.scramble,      runScramble));
btns.reverseCensor.addEventListener('click', guard(btns.reverseCensor, runReverseCensor));
btns.censor.addEventListener('click',        guard(btns.censor,        runCensor));
btns.shuffle.addEventListener('click',       guard(btns.shuffle,       runShuffle));

// Header glitch on click
els.header.addEventListener('click', runHeaderGlitch);

// Run all on page load, staggered slightly
runHeaderGlitch();
setTimeout(runGlitch,        150);
setTimeout(runSlowReveal,    300);
setTimeout(runScramble,      450);
setTimeout(runReverseCensor, 600);
setTimeout(runCensor,        750);
setTimeout(runShuffle,       900);
