
Scrambler.speed = 400;
Scrambler.count = Infinity


function Scrambler(text='') {
    this.text = text;

    function sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    this.loop = async function(element, count=Scrambler.count, speed=Scrambler.speed) {
        for (let i = 0 ; i < count; i++) {
            await sleep(speed);
            element.innerHTML = this.text.split('')
                .sort(() => 0.5 - Math.random())
                .join('');
        }
        this.deloop(element, speed);
    };

    this.deloop = async function(element, speed=Scrambler.speed) {  
        for (let i = 0; i < element.innerHTML.length; i++)  {
            await sleep(speed);
            element.innerHTML = element.innerHTML.substring(0, i) + this.text[i] + element.innerHTML.substring(i+1, element.innerHTML.length);
        }
    };
}

Scrambler.prototype.scramble = function(element, count=Scrambler.count, speed=Scrambler.speed) {
    window.addEventListener('load', () => {
        this.loop(element, count, speed);
    });
};

Scrambler.prototype.hoverScramble = function(element, count=5, speed=Scrambler.speed) {
    element.addEventListener('mouseover', () => {
        this.loop(element, count, speed);
    });
};

export default Scrambler;
