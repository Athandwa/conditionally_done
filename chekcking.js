function fromWhere(regNumber) {
  if(regNumber.startsWith('CY')){
    return "Bellville"
  }
  else if (regNumber.startsWith('CJ')) {
    return "Paarl"
  }
  else if (regNumber.startsWith('CA')) {
    return "Cape Town"
  }
  else {
    return "Some other place"
  }
}
console.log(fromWhere('CY 100115'));
console.log(fromWhere('CJ 114000'));
console.log(fromWhere('CA 114002'));
