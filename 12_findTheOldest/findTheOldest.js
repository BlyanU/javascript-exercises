const findTheOldest = function(array) {
  const sorted = array.sort((a,b) => {
    let firstAge;
    let secondAge;
    const currYear = (new Date()).getFullYear();
    if ("yearOfDeath" in a) {
      firstAge = a.yearOfDeath - a.yearOfBirth;
    } else {
      firstAge = currYear - a.yearOfBirth;
    }

    if ("yearOfDeath" in b) {
      secondAge = b.yearOfDeath - b.yearOfBirth;
    } else {
      secondAge = currYear - b.yearOfBirth;
    }
  
    return (firstAge > secondAge) ? -1 : 1;
  });

  return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
