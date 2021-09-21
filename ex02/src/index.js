function myFunction(myParameter) {

    if (myParameter == true) {
        return "The parameter is true!";
    } else {
        return "The parameter is false!";
    }
    
}

console.log(myFunction(false));
console.log(myFunction(true));

module.exports = myFunction;