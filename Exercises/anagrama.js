function anagram(word1, word2){
    let newWord1 = word1.toLowerCase().split("").sort().join("")
    let newWord2 = word2.toLowerCase().split("").sort().join("")
    if(newWord1 === newWord2){
      return "anagram"
    }
    else{
      return "no anagram"
    }
  }
  
  let word1 = "Mary"
  let word2 = "Army"
  console.log(anagram(word1, word2))