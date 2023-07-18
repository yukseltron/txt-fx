import Constants from "./constants.js";

export const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

export const fix = (element, delay, text) => {
    const originalText = text;
    const currentText = element.innerHTML.split("");
  
    const fixLetter = async (index) => {
      await sleep(delay);
      currentText[index] = originalText[index];
      element.innerHTML = currentText.join("");
  
      fixLetter(index + 1);
    };
  
    fixLetter(0);
}

export const Helper = {
    sleep: sleep,
    fix: fix
};

export default Helper;