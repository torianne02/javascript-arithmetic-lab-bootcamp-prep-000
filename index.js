function add(n1, n2) {
  return n1 + n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

function inc(n) {
  var output = n++;
  return output;
}

function dec(n) {
  var output = n--;
  return output;
}

function makeInt(n) {
  return parseInt(n, 10);
}

function preserveDecimal(n) {
  return parseFloat(n);
}