const name = "unnati"
const repoCount = 50

// console.log(name + repoCount + " value");
// outdated

//modern way
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//another way to declare string
const gameName = new String('unnati-ug-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4) //cannot give negative indices
console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);

const newStringOne = "   unnati   "
console.log(newStringOne);
console.log(newStringOne.trim()); //trim removes the extra spaces

const url = "https://unnati.com/unnati%20gupta"

console.log(url.replace('%20', '_'));

console.log(url.includes('unnati'));
console.log(gameName.split('-'));
