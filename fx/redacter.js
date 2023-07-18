import Constants from "../util/constants.js";
import {sleep, fix} from "../util/helper.js";


function Redacter() {

    //Censor █ █ █
    this.censor = async function(
        element, 
        delay=Constants.delay,
        char="█",
        restore=true
    ) {
        const text = element.innerHTML;
        let arr = element.innerHTML.split("");

        for (let i = 0; i < arr.length; i++) {
            await sleep(delay);
            let item = char;
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

export default Redacter;
