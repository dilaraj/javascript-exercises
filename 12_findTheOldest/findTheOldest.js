const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const findTheOldest = function(obj) {

    //return obj.map((person) => person.name);
    // const oldest = obj.sort((a, b) => a.year > b.year ? 1 : -1);
    // return oldest;
    return obj
        .sort((a, b) => a.yearOfBirth < b.yearOfBirth ? 1 : -1)
        .map((person) => person.name);
};

//console.table(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
