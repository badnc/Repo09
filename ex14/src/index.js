function myForLoop1() {
  var evenNumbers = "";
  for (var index = 0; index < 9; index+=2) {
    evenNumbers += index + ", ";
  }
    
    return evenNumbers.substr(0,evenNumbers.length-2);
}

function myForLoop2() {
    var evenInverseNumbers = "";
    for (var index = 8; index >= 0; index-=2) {
      evenInverseNumbers += index + ", ";
    }
      
      return evenInverseNumbers.substr(0,evenInverseNumbers.length-2);
  }

console.log(myForLoop1());
console.log(myForLoop2());

module.exports = {
    myForLoop1,
    myForLoop2
}
