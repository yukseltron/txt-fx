import Constants from "../util/constants.js";
import { sleep, fix } from "../util/helper.js";


// Rapidly corrupts random characters with glitch chars, then restores.
// intensity (0–1) controls what fraction of characters get corrupted each frame.
class Glitch {
    async glitch(
        element,
        delay=50,
        count=10,
        restore=true,
        intensity=0.5,
        items=Constants.glitchItems,
    ) {
        const originalText = element.innerHTML;
        const arr = originalText.split("");

        for (let i = 0; i < count; i++) {
            await sleep(delay);
            const glitched = arr.map(c => {
                if (c === " " || Math.random() > intensity) return c;
                return items[Math.floor(Math.random() * items.length)];
            });
            element.innerHTML = glitched.join("");
        }

        if (restore) fix(element, delay, originalText);
    }
}

export default Glitch;
