function isEqual(NUM_ONE,NUM_TWO) {
    if (NUM_ONE==NUM_TWO) {
        return true
    } else {
        return false
    }
}
//test cases:
//===========
console.log(isEqual(4,4) + "should be true")
console.log(isEqual(0, 0) + "should be true")
console.log(isEqual(-4, -4) + "should be true")
console.log(isEqual(4, -4) + "should be false")
console.log(isEqual(0, -4) + "should be false")
