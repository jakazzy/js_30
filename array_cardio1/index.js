const inventors = [{
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955
}, {
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727
}, {
    first: 'Galileo',
    last: 'Galilei',
    year: 1564,
    passed: 1642
}, {
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934
}, {
    first: 'Johannes',
    last: 'Kepler',
    year: 1571,
    passed: 1630
}, {
    first: 'Nicolaus',
    last: 'Copernicus',
    year: 1473,
    passed: 1543
}, {
    first: 'Max',
    last: 'Planck',
    year: 1858,
    passed: 1947
}, {
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979
}, {
    first: 'Ada',
    last: 'Lovelace',
    year: 1815,
    passed: 1852
}, {
    first: 'Sarah E.',
    last: 'Goode',
    year: 1855,
    passed: 1905
}, {
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968
}, {
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909
}];
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const Boulevards = [
    'Boulevard Auguste-Blanqui',
    "Boulevard Barbès",
    "Boulevard Beaumarchais",
    "Boulevard de l'Amiral-Bruix",
    "Boulevard des Capucines",
    "Boulevard de la Chapelle",
    "Boulevard de Clichy",
    "Boulevard du Crime",
    "Boulevard Haussmann",
    "Boulevard de l'Hôpital",
    "Boulevard des Italiens",
    "Boulevard de la Madeleine",
    "Boulevard de Magenta",
    "Boulevard Montmartre",
    "Boulevard du Montparnasse",
    "Boulevard Raspail",
    "Boulevard Richard-Lenoir",
    "Boulevard de Rochechouart",
    "Boulevard Saint-Germain",
    "Boulevard Saint-Michel",
    "Boulevard de Sébastopol",
    "Boulevard de Strasbourg",
    "Boulevard du Temple",
    "Boulevard Voltaire",
    "Boulevard de la Zone"
]




// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
//Answer

const fifteen = inventors.filter(inventor => {
    return inventor.year >= 1500 && inventor.year < 1600;
})
console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
//Answer
const fullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
console.table(fullName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
//Answer
const ageOldToYoung = inventors.map(inventor => ({
    first: inventor.first,
    last: inventor.last,
    year: inventor.year
})).sort(function(a, b) { return a.year - b.year; });
console.table(ageOldToYoung);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
// const agesLived = inventors.map(inventor => inventor.passed - inventor.year);
const totalAge = inventors.reduce((accumulator, inventor) => { return accumulator + (inventor.passed - inventor.year) }, 0)
console.log("totalAge: ", totalAge);

// 5. Sort the inventors by years lived
const ageLived = inventors.map(inventor => ({
    first: inventor.first,
    last: inventor.last,
    year: inventor.passed - inventor.year
})).sort(function(a, b) { return a.year - b.year })
console.table(ageLived);

// Sort the people alphabetically by last name
const sortByLastName = people.sort();
console.table(sortByLastName);


//count instances
// const countedData = data.reduce(function(allVehicles, vehicle) {
//     if (vehicle in allVehicles) { allVehicles[vehicle]++; } else { allVehicles[vehicle] = 1 }
//     return allVehicles;
// }, {})
// console.table(countedData);

const transportation = data.reduce(function(obj, item) {
    if (!obj[item]) {
        obj[item] = 0;
        // console.log("set to 0: ", obj);
    }
    obj[item]++;
    // console.log("set to incremental", obj);
    return obj;
}, {})
console.table(transportation);


//Retrieve Boulevard with De
const BoulevardWithDe = Boulevards.filter(boulevard => {
    return boulevard.includes("de");
});
console.log(BoulevardWithDe);


//alt
// const category = document.querySelector(".mw-category");
// const all = category.querySelectorAll("a");
// const all_ = Array.from(all);
// const boule = all_.map(link => link.textContent);
// const boulevardsWithDe = boule.filter(link => link.includes("de"));
// console.log(BoulevardWithDe);
//Questions

// 1. Filter the list of inventors for those who were born in the 1500's
// Array.prototype.map()

// 2. Give us an array of the inventors' first and last names
// Array.prototype.sort()

// 3. Sort the inventors by birthdate, oldest to youngest
// Array.prototype.reduce()

// 4. How many years did all the inventors live?

// 5. Sort the inventors by years lived

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// 7. sort Exercise
// Sort the people alphabetically by last name
// 8. Reduce Exercise