
export class Scramble {
    static get PARAM() {
        return {
            COUNT: Infinity,
            SPEED: 400,
        };
    };

    constructor() {
    }

    scramble(element, count=Scramble.PARAM.COUNT, speed=Scramble.PARAM.SPEED) {
        window.addEventListener('load', () => {
            this._loop(element.innerHTML, element, count, speed);
        });
    }

    hoverScramble(element, count=5, speed=Scramble.PARAM.SPEED) {
        element.addEventListener('mouseover', (event) => {
            this._loop(event.target.innerHTML, element, count, speed);
        });
    }

    _sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    async _loop(text, element, count=Scramble.PARAM.COUNT, speed=Scramble.PARAM.SPEED) {

        for (let i = 0 ; i < count; i++) {
            await this._sleep(speed);
            let shuffled = text.split('').sort(function(){return 0.5-Math.random()}).join('');
            element.innerHTML = shuffled;
        }
    }


}

export default Scramble;