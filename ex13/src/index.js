function inverseWhile() {

    var fiveNumbers = "";
    var i = 5;
    while (i >= 0) {
        if (fiveNumbers.length == 0) {
            fiveNumbers += i;
        }else {
            fiveNumbers += ", " + i;
        }
        i--;
    }

    return fiveNumbers;
}
console.log(inverseWhile());
module.exports = inverseWhile;
