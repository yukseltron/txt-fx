import Constants from "../util/constants.js";
import { sleep } from "../util/helper.js";


// Reveals each character left to right. Before settling, each character
// cycles through random symbols like a slot machine.
class SlowReveal {
    async reveal(
        element,
        delay=Constants.delay,
        scramblePerChar=3,
        items=Constants.items,
    ) {
        const text = element.innerHTML;
        const arr = text.split("").map(c =>
            c === " " ? " " : items[Math.floor(Math.random() * items.length)]
        );
        element.innerHTML = arr.join("");

        for (let i = 0; i < arr.length; i++) {
            if (text[i] === " ") continue;

            for (let j = 0; j < scramblePerChar; j++) {
                await sleep(delay);
                arr[i] = items[Math.floor(Math.random() * items.length)];
                element.innerHTML = arr.join("");
            }

            await sleep(delay);
            arr[i] = text[i];
            element.innerHTML = arr.join("");
        }
    }
}

export default SlowReveal;
