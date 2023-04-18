

let count = 1000;

window.addEventListener('load', () => {
  loop('.-..:-_:', '#headline', count);
  if (count === 0) {
      count = 10;
      loop('...:-_:', '#headline', count);
  }
});

let links = document.getElementsByClassName('link');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseover', (event) => {
        loop(links[i].innerHTML + ".-.:", "#" + links[i].id, 5);
    });
};

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const loop = async (text, element, count) => {
  let hd = document.querySelector(element);
  
  for (let i = 0 ; i < count; i++) {
   await sleep(200);
   let shuffled = text.split('').sort(function(){return 0.5-Math.random()}).join('');
   hd.innerHTML = shuffled;
  }
  hd.innerHTML = hd.id;
}