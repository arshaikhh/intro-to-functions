function isEqual(NUM_ONE,NUM_TWO) {
    if (NUM_ONE==NUM_TWO) {
        return true
    } else {
        return false
    }
}
//test cases:
//===========
console.log("isEqual(4, 4) should be " + isEqual(4,4))
console.log("isEqual(0, 0) should be " + isEqual(0, 0))
console.log("isEqual(-4, -4) should be " + isEqual(-4, -4))
console.log("isEqual(4, -4) should be " + isEqual(4, -4))
console.log("isEqual(0, 1) should be " + isEqual(4, -4))
