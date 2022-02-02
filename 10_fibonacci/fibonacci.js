const fibonacci = function(index) {
  const seq = [];
  if (index < 0) {
    return 'OOPS';
  }
  for (let i = 0; i < index; i++) {
    if (i == 0 || i == 1) {
      seq.push(1);
    } else {
      seq.push(seq[i-2] + seq[i-1]);
    }
  } 
  return seq[index - 1];
};

// Do not edit below this line
module.exports = fibonacci;
