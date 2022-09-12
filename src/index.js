// Excercise from Chris 12.09.2022

// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// TIP: Try to use console.table() instead of console.log()

// Some data we can work with

const inventors = [
  {
    first: "Albert",
    last: "Einstein",
    year: 1879,
    passed: 1955,
    categories: ["man", "physicist"]
  },
  {
    first: "Isaac",
    last: "Newton",
    year: 1643,
    passed: 1727,
    categories: ["man", "mathematician"]
  },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  {
    first: "Marie",
    last: "Curie",
    year: 1867,
    passed: 1934,
    categories: ["woman", "physicist"]
  },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  {
    first: "Katherine",
    last: "Blodgett",
    year: 1898,
    passed: 1979,
    categories: ["woman", "physicist"]
  },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  {
    first: "Lise",
    last: "Meitner",
    year: 1878,
    passed: 1968,
    categories: ["woman", "physicist"]
  },
  {
    first: "Hanna",
    last: "Hammarström",
    year: 1829,
    passed: 1909,
    categories: ["woman", "inventor"]
  }
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank"
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen100s = (entry) => entry.year >= 1500 && entry.year < 1600;
console.table(inventors.filter(fifteen100s));

// Array.prototype.find()
// 2. Find in the list of inventors the one that has category === 'physicist'
// p.s. you will need to use both filter and find
function isPhysicist(entry) {
  if (entry.categories) {
    if (entry.categories.find((xx) => xx === "physicist")) return true;
    else return false;
  }
}
// const phys = inventors.filter(isPhysicist);
console.table(inventors.filter(isPhysicist));


// Array.prototype.map()
// 3. Give us an array of the inventors first and last names
const fullName = (entry) => entry.first + " " + entry.last;
console.table(inventors.map(fullName));


// Array.prototype.sort()
// 4. Sort the inventors by birthdate, oldest to youngest
const oldSort = inventors.sort(
  (person1, person2) => person1.year - person2.year
);
console.table(oldSort);


// Array.prototype.reduce()
// 5. How many years did all the inventors live all together?
let totalAge = 0;
for (let i = 1; i < inventors.length; i++) {
  totalAge += inventors[i].passed - inventors[i].year;
}
console.log(totalAge);


// 6. Sort the inventors by years lived
const ageSort = inventors.sort(
  (person1, person2) =>
    person1.passed - person1.year - (person2.passed - person2.year)
);
console.table(ageSort);
// 7. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


// 8. sort Exercise
// Sort the people alphabetically by last name
const lNSort = people.sort((p1, p2) =>
  p1.split(", ")[1].localeCompare(p2.split(", ")[1])
);
console.table(lNSort);


// 9. Reduce Exercise
// Sum up the instances of each of these

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck"
];

const add = (prev, neww) => (prev += neww);
const summed = data.reduce(add);

console.log(summed);
