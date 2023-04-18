
TextFX.speed = 400;
TextFX.count = Infinity


function TextFX(text='') {
    this.text = text;

    function sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    this.loop = async function(element, count=TextFX.count, speed=TextFX.speed) {
        for (let i = 0 ; i < count; i++) {
            await sleep(speed);
            element.innerHTML = this.text.split('')
                .sort(() => 0.5 - Math.random())
                .join('');
        }
        this.deloop(element, speed);
    };

    this.deloop = async function(element, speed=TextFX.speed) {  
        for (let i = 0; i < element.innerHTML.length; i++)  {
            await sleep(speed);
            element.innerHTML = element.innerHTML.substring(0, i) + this.text[i] + element.innerHTML.substring(i+1, element.innerHTML.length);
        }
    };
}

TextFX.prototype.scramble = function(element, count=TextFX.count, speed=TextFX.speed) {
    window.addEventListener('load', () => {
        this.loop(element, count, speed);
    });
};

TextFX.prototype.hoverScramble = function(element, count=5, speed=TextFX.speed) {
    element.addEventListener('mouseover', () => {
        this.loop(element, count, speed);
    });
};

export default TextFX;
