const palindromes = function (str) {
  let temp = '';
  let newStr = '';
  const lowerCase = str.toLowerCase();

  newStr = removePunct(lowerCase);
  
  for (let i = newStr.length - 1; i >= 0; i--) {
    temp += newStr.charAt(i);
  }
  return (temp === newStr) ? true : false;
};

function removePunct(str) {
  const regex = /[a-z]/g;
  let temp = '';
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    const found = char.match(regex);
    if (found === null) {
      continue;
    }
    temp += str.charAt(i);
  }
  return temp;
}

// Do not edit below this line
module.exports = palindromes;
