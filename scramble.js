
Scrambler.delay = 400;
Scrambler.count = Infinity;
Scrambler.items = ['%', '$', '#']


function Scrambler(text='') {
    this.text = text;

    function sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    this.loop = async function(element, count=Scrambler.count, delay=Scrambler.delay) {
        for (let i = 0 ; i < count; i++) {
            await sleep(delay);
            element.innerHTML = this.text.split('')
                .sort(() => 0.5 - Math.random())
                .join('');
        }
        this.deloop(element, delay);
    };

    this._newloop = async function(element, delay=Scrambler.delay) {
        let arr = this.text.split("");
        for (let i = 0; i < arr.length; i++) {
            await sleep(delay/2);
            let item = Scrambler.items[Math.floor(Math.random()*Scrambler.items.length)];
            let j = Math.floor(Math.random() * arr.length);
            arr[i] = arr[j];
            element.innerHTML = arr.join("")

            await sleep(delay/2);
            arr[j] = item;
            element.innerHTML = arr.join("")

        }
        this.deloop(element, delay);
    }

    this.censorLoop = async function(element, delay=Scrambler.delay) {
        let arr = this.text.split("");
        for (let i = 0; i < arr.length; i++) {
            await sleep(delay);
            let item = "█"
            //let j = Math.floor(Math.random() * arr.length);
            //arr[i] = arr[j];
            arr[i] = item;
            element.innerHTML = arr.join("")

        }
        //this.deloop(element, delay);
    }

    this.deloop = async function(element, delay=Scrambler.delay) {  
        for (let i = 0; i < element.innerHTML.length; i++)  {
            await sleep(delay);
            element.innerHTML = element.innerHTML.substring(0, i) + this.text[i] + element.innerHTML.substring(i+1, element.innerHTML.length);
        }
    };
}

Scrambler.prototype.scramble = function(element, count=Scrambler.count, delay=Scrambler.delay) {
    window.addEventListener('load', () => {
        this.loop(element, count, delay);
    });
};

Scrambler.prototype.hoverScramble = function(element, count=5, delay=Scrambler.delay) {
    element.addEventListener('mouseover', () => {
        this.loop(element, count, delay);
    });
};

Scrambler.prototype.clickScramble = function(element, count=5, delay=Scrambler.delay) {
    element.addEventListener('click', () => {
        this.loop(element, count, delay);
    });
};

Scrambler.prototype.slowScramble = function(element, delay=Scrambler.delay) {
    element.addEventListener('mouseover', () => {
        this._newloop(element, delay);
    });
};

Scrambler.prototype.censor = function(element, delay=Scrambler.delay) {
    element.addEventListener('mouseover', () => {
        this.censorLoop(element, delay);
    }, {once: true});
};


export default Scrambler;
