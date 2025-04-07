const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        let currentAge = (person.yearOfDeath || (new Date).getFullYear()) - person.yearOfBirth;
        let oldestAge = (oldest.yearOfDeath || (new Date).getFullYear()) - oldest.yearOfBirth;
        return currentAge > oldestAge ? person : oldest
    });
};

// Do not edit below this line
module.exports = findTheOldest;
