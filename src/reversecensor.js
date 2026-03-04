import Constants from "../util/constants.js";
import { sleep } from "../util/helper.js";


// Starts with text fully censored, then reveals each character left to right.
function ReverseCensor() {
    this.reveal = async function(
        element,
        delay=Constants.delay,
        char="█",
    ) {
        const text = element.innerHTML;
        const arr = text.split("").map(c => c === " " ? " " : char);
        element.innerHTML = arr.join("");

        for (let i = 0; i < arr.length; i++) {
            if (text[i] === " ") continue;
            await sleep(delay);
            arr[i] = text[i];
            element.innerHTML = arr.join("");
        }
    }
}

export default ReverseCensor;
