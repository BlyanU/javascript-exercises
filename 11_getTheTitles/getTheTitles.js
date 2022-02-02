const getTheTitles = function(array) {
  const title = [];
  for (const obj of array) {
    title.push(obj.title);
  }
  return title;
};

// Do not edit below this line
module.exports = getTheTitles;
