function myDoWhile() {

    var myNumbers = ""
    var i = 0;
    do {
        if (myNumbers.length == 0) {
            myNumbers += i;
        }else {
            myNumbers += ", " + i;
        }
        i++;
    } while (i <= 9);
    
    return myNumbers;
}

console.log(myDoWhile());

module.exports = myDoWhile;