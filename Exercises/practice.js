function isPalindrome(str) {
    const re = /[\W_]/g;
    const cleanStr = str.toLowerCase().replace(re, "");
    const reversedStr = cleanStr.split("").reverse().join("");
    return cleanStr === reversedStr;
}

console.log(isPalindrome("anita lava la tina"));