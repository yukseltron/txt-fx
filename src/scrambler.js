import Constants from "../util/constants.js";
import {sleep, fix} from "../util/helper.js";


function Scrambler() {
    this.scramble = async function(
        element, 
        delay,
        count,
        restore=true
    ) {

        const originalText = element.innerHTML;
        const textLength = originalText.length;
        const arr = originalText.split("");

        let counter = 0;
        while (true) {
            await sleep(delay);
            
            counter++;
            if (counter === count) {
                break;
            }

            const randomIndex = Math.floor(Math.random() * textLength);
            arr[randomIndex] = Constants.items[Math.floor(Math.random() * Constants.items.length)];
            element.innerHTML = arr.join("");

            if (count !== Infinity && arr.join("") === originalText) {
                break;
            }
        }
        
        if (restore) fix(element, delay, originalText);
    }
}
  

export default Scrambler;
