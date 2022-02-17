function censorMessage(MESSAGE,BAN_LIST) {
    let RAW_WORDS = MESSAGE.split(" ")
    let SCRUBBED_WORDS = []
    for (let WORD of RAW_WORDS) {
        let LOWERCASE_WORD = WORD.toLowerCase()
        if (BAN_LIST.includes(LOWERCASE_WORD)) {
            SCRUBBED_WORDS.push("*****")
        } else {
            SCRUBBED_WORDS.push(WORD)
        }
    }
    let SCRUBBED_MESSAGE = SCRUBBED_WORDS.join(" ")
    return SCRUBBED_MESSAGE
}

//test cases:
//===========
console.log(censorMessage("don't mess with cats", ["mess"]) + " should be don't ***** with cats")
console.log(censorMessage("Are you sure that this is safe", ["are", "is"])+ " should be ***** you sure that this ***** safe")
console.log(censorMessage("I CANNOT HELP YOU", ["can", "not", "help", "you"]) + " should be I CANNOT ***** *****")