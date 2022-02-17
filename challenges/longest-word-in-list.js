function longestInList(WORDS) {
    let LONGEST = WORDS[0]
    for (let WORD of WORDS) {
        if (WORD.length > LONGEST.length) {
            LONGEST = WORD
        }
    }
    return LONGEST
}

//test cases:
//===========
console.log("longestInList([\"England\", \"Wales\", \"Scotland\", \"Northern Ireland])\" should be "+longestInList(["England", "Wales", "Scotland", "Northern Ireland"])) 
console.log("longestInList([\"the\", \"quick\", \"brown\", \"fox\"]) should be " + longestInList(["the", "quick", "brown", "fox"]))
console.log("longestInList([\"hello\", \"hi\", \"greetings\", \"hey\"]) should be "+ longestInList(["hello", "hi", "greetings", "hey"]))