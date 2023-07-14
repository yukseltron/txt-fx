
Scrambler.delay = 400;
Scrambler.count = Infinity;
Scrambler.items = ['%', '$', '#']


function Scrambler(text='') {
    this.text = text;

    function sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    //Randomize
    this.randomize = async function(element, count=Scrambler.count, delay=Scrambler.delay) {
        for (let i = 0 ; i < count; i++) {
            await sleep(delay);
            element.innerHTML = this.text.split('')
                .sort(() => 0.5 - Math.random())
                .join('');
        }
        this.fix(element, delay);
    };

    //Scramble
    this.scramble = async function(element, delay=Scrambler.delay) {
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
        this.fix(element, delay);
    }

    this.censor = async function(element, delay=Scrambler.delay) {
        let arr = this.text.split("");
        for (let i = 0; i < arr.length; i++) {
            await sleep(delay);
            let item = "█"
            if (arr[i] === " ") {
                continue;
            } else {
                arr[i] = item;
            }
            element.innerHTML = arr.join("")

        }
    }

    this.fix = async function(element, delay=Scrambler.delay) {  
        for (let i = 0; i < element.innerHTML.length; i++)  {
            await sleep(delay);
            element.innerHTML = element.innerHTML.substring(0, i) + this.text[i] + element.innerHTML.substring(i+1, element.innerHTML.length);
        }
    };
}

Scrambler.prototype.randomize = function(element, count=Scrambler.count, delay=Scrambler.delay) {
    window.addEventListener('load', () => {
        this.randomize(element, count, delay);
    });
};

Scrambler.prototype.scramble = function(element, delay=Scrambler.delay) {
    window.addEventListener('load', () => {
        this.scramble(element, delay);
    });
};

Scrambler.prototype.censor = function(element, delay=Scrambler.delay) {
    window.addEventListener('load', () => {
        this.censor(element, delay);
    }, {once: true});
};


export default Scrambler;
