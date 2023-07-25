import {sleep, fix} from "../util/helper.js";
import Constants from "../util/constants.js";


function Randomizer() {
    this.randomize = async function(
        element,
        delay=Constants.delay,
        count=Constants.count,
        restore=true
    ) {
        let text = element.innerHTML;

        for (let i = 0 ; i < count; i++) {
            await sleep(delay);
            element.innerHTML = text.split('')
                .sort(() => 0.5 - Math.random())
                .join('');
        }

        if (restore) fix(element, delay, text);
    };
}

export default Randomizer;
