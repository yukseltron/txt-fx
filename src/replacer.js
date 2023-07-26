import Constants from "../util/constants.js";
import {sleep, fix} from "../util/helper.js";


function Replacer() {
    this.replace = async function(
        element, 
        delay=Constants.delay,
        restore=false,
        char="█",
    ) {
        const text = element.innerHTML;
        let arr = element.innerHTML.split("");

        for (let i = 0; i < arr.length; i++) {
            await sleep(delay);
            let item = typeof char === 'string' ? char : char[Math.floor(Math.random() * char.length)];
            if (arr[i] === " ") {
                continue;
            } else {
                arr[i] = item;
            }
            element.innerHTML = arr.join("")
        }

        if (restore) fix(element, delay, text);
    }
}

export default Replacer;
