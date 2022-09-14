function palindrome(str) {
    let re = /[\W_]/g;
    let cleanStr = str.toLowerCase().replace(re, "");
    let reversedStr = cleanStr.split("").reverse().join("");
    return cleanStr === reversedStr;
}

console.log(palindrome("Anita lava la tina!!!"));
