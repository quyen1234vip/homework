1.//ex1
// for(let i=0;i<=10;i++){
//   console.log(i)
// }
import { countries } from "./countries.js";
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];
export {webTechs};
// // cach 2 
// let i=0;
// while(i<=10){
//   console.log(i)
//   i++;
// }
// // cach3
// do{
//   console.log(i)
//   i++
// }while (i<=10)
2.
// for (let i=10;i>=0;i--){
//    console.log(i)
// }
// cach2
// let i=10;
// while(i>=0){
//   console.log(i)
//   i--;
// }
// cach3
// let i=10;
// do{
//     console.log(i)
//     i--
// }while (i>=0)
3.
// let n=100;
// for (let i=0;i<n;i++){
//     console.log(i)
// }
//cach2 let i=0;
// let n=100;
// while (i<n){
//     console.log(i)
//     i++
// }
//cach3 
// let i=0;
// let n=100;
// do{
//     console.log(i)
//     i++;
// }while(i<n)

4.//
//  for (let i=1;i<=7;i++){
//     console.log('#'.repeat(i));
// }

// let i=1;
// while(i<=7){
//     console.log('#'.repeat(i));
//     i++;
// }

// let i=1;
// do{
//     console.log('#'.repeat(i));
//     i++;
// }while(i<=7)
5.
// for(let i=0;i<=10;i++){
//     console.log(i + " x " + i + " = " + (i * i));
// }
// let i=0;
// while(i<=10){
// console.log(i + " x" + i + " = " + (i*i));
// i++;
// }
// 6.
// console.log("i   i^2   i^3");
// for (let i=0;i<=10;i++){
//     console.log(i,i**2,i**3)
// }
7.
// for(let i=0;i<=100;i++){
//   if( i % 2 ==0){
//     console.log(i)
//   }
// }
8.
// for(let i=0;i<100;i++){
//     if(i %2 !==0){
//         console.log(i)
//     }
// }
9.
for (let i = 2; i <= 100; i++) { 
  let isPrime = true; 

  for (let j = 2; j <= Math.sqrt(i); j++) { 
      if (i % j === 0) { 
          isPrime = false; 
          break; 
      }
  }

  if (isPrime) {
      // console.log(i);
  }
}


10.
let sum=0;
for(let i=0; i<=100;i++){
  sum = sum +i
}
// console.log(sum)

11.
// let sumOdds=0;
// let sumEvens = 0;
// for(let i=0;i<=100;i++){
//     if( i % 2 ==0){
//     sumEvens=sumEvens +i
// }else{
//     sumOdds=sumOdds +i
// }
// }
// console.log(sumEvens)
// console.log(sumOdds)
// 12.
// console.log([sumEvens,sumOdds]);
// 13.
// const randomNumbers=[]
// for (let i = 0; i < 5; i++) {
//     const randomNum=Math.floor(Math.random()*10)
//     randomNumbers.push(randomNum)
// }
// console.log(randomNumbers)
14.
// const randomNumbers = [];
// for (let i = 0; i < 5; i++) {
//     let randomNum;
//     do {
//     randomNum = Math.floor(Math.random() * 10) ;
//     } while (randomNumbers.includes(randomNum));
//     randomNumbers.push(randomNum);
// }

// console.log(randomNumbers);
15.
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// let idLength = 6; 
// let randomId = ""; 

// for (let i = 0; i < idLength; i++) {
//     let randomIndex = Math.floor(Math.random() * characters.length); 
//     randomId += characters[randomIndex]; 
// }

// console.log(randomId);
//ex2
1.
// let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// let length = 12;  
// let randomId = ""; 

// for (let i = 0; i < length; i++) {
//     let randomIndex = Math.floor(Math.random() * characters.length);
//     randomId = randomId +characters[randomIndex]; 
// }
// console.log(randomId);

// let length2 = 22;
// let randomId2 = "";
// for (let i = 0; i < length2; i++) {
//     let randomIndex = Math.floor(Math.random() * characters.length);
//     randomId2 = randomId2 + characters[randomIndex]; 
// }
// console.log(randomId2)
2.
// let hexCharacters = "0123456789ABCDEF"; 
// let hexColor = "#"; 

// for (let i = 0; i < 6; i++) {
//     let randomIndex = Math.floor(Math.random() * hexCharacters.length);
//     hexColor =hexColor+ hexCharacters[randomIndex]; 
// }

// console.log(hexColor);
3.
// let red = Math.floor(Math.random() * 256);
// let green = Math.floor(Math.random() * 256);
// let blue = Math.floor(Math.random() * 256);

// let rgbColor = "rgb(" + red + "," + green + "," + blue + ")";

// console.log(rgbColor);
// 4.
// let upperCaseCountries = []; 
// for (let i = 0; i < countries.length; i++) {
//   upperCaseCountries.push(countries[i].toUpperCase());
// }

// console.log(upperCaseCountries);
5.
// let countryLengths = []; 

// for (let i = 0; i < countries.length; i++) {
//     let lengthOfCountry = countries[i].length;  
//     countryLengths.push(lengthOfCountry); 
// }

// console.log("contry length",countryLengths);
6.
// let countryDetails = [];  

// for (let i = 0; i < countries.length; i++) {
//     let countryName = countries[i];   
//     let countryAbbreviation = (countryName[0] + countryName[1] + countryName[2]).toUpperCase();  

//     let nameLength = countryName.length; 

//     countryDetails.push([countryName, countryAbbreviation, nameLength]); 
// }

// console.log(countryDetails);
7.
// let countriesWithLand = [];

//  for (let i = 0; i < countries.length; i++) {
//   if (countries[i].includes("land")) {  
//     countriesWithLand.push(countries[i]);
//   }
//  }
//  if(countries.length>0){
//     console.log(countriesWithLand)
//  }else{
//   console.log("All these countries are without land");
//  }
8.
// let countriesWithIa=[]
// for (let i = 0; i < countries.length; i++) {
//   if (countries[i].includes("ia")) {  
//     countriesWithIa.push(countries[i]);
//   }
//  }
//  if(countries.length>0){
//     console.log(countriesWithIa)
//  }else{
//   console.log("These are countries ends without ia");
//  }
// 9.
// let longestCountry = countries[0]; 

// for (let i = 1; i < countries.length; i++) {
//     if (countries[i].length > longestCountry.length) {
//         longestCountry = countries[i];  
//     }
// }

// console.log(longestCountry);
// 10.
// let countriesWithFiveChars = [];
// for (let i = 0; i < countries.length; i++) {
//     if (countries[i].length === 5) {  
//         countriesWithFiveChars.push(countries[i]);  
//     }
// }
// console.log(countriesWithFiveChars);
// 11.
// let longestTech = webTechs[0]; 
// for (let i = 1; i < webTechs.length; i++) {
//     if (webTechs[i].length > longestTech.length) {
//         longestTech = webTechs[i];
//     }
// }
// console.log(longestTech);
12.
let webTechsWithLength = [];

for (let i = 0; i < webTechs.length; i++) {
    webTechsWithLength.push([webTechs[i], webTechs[i].length]);
}

// console.log(webTechsWithLength);
// 13.
const mernStack = ["MongoDB", "Express", "React", "Node"];

//cach1 // let mernAcronym = mernStack[0][0] + mernStack[1][0] + mernStack[2][0] + mernStack[3][0];

//cach 2 
// let mernAcronym = []; 

// for (let i = 0; i < mernStack.length; i++) {
//   mernAcronym.push(mernStack.at(i).at(0)); 
// }
// console.log(mernAcronym);
//cach3
let mernAcronym = []; 

// for (let i = 0; i < mernStack.length; i++) {
//   mernAcronym.push(mernStack.at(i).charAt(0)); 
// }
// console.log(mernAcronym);
//cach4
for (let i = 0; i < mernStack.length; i++) {
  mernAcronym = mernAcronym + mernStack[i].substring(0, 1); 
}
// console.log(mernAcronym);
// let mernAcronym="";
// for(let i=0;i<mernStack.length;i++){
//   mernAcronym= mernAcronym+mernStack[i][0];
// }
// console.log(mernAcronym)

// console.log(mernAcronym); 
// 14.
// const technologies = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

// for (let i = 0; i < technologies.length; i++) {
//     console.log(technologies[i]);  
//   }

//   console.log("_________________")
//   for (let words of technologies) {
//       console.log(words);  
//   }
15.
// const fruits = ['banana', 'orange', 'mango', 'lemon'];
// const reversedFruits = [];

// for (let i = fruits.length - 1; i >= 0; i--) {  
//     reversedFruits.push(fruits[i]);  
// }

// console.log(reversedFruits);  
16.
// const fullStack = [
//   ['HTML', 'CSS', 'JS', 'React'],
//   ['Node', 'Express', 'MongoDB']
// ];

// for (let subArray of fullStack) {  
//   for (let element of subArray) {  
//       console.log(element.toUpperCase());
//   }
// }
//ex3
2.
// const sortedCountries = [...countries].sort();

// console.log(sortedCountries);
// console.log(countries);
3.
// console.log(webTechs.sort())
// console.log(mernStack.sort())
// 4.
// let countriesWithLand = [];

// for (let i = 0; i < countries.length; i++) {
//   if (countries[i].includes("land")) {  
//     countriesWithLand.push(countries[i]);
//   }
// }

// console.log(countriesWithLand);
5.
// let hightestCountry=countries[0]
// for (let i = 1; i < countries.length; i++) {
//   if (countries[i].length > longestCountry.length) {
//     longestCountry = countries[i];
//   }
// }

// console.log(longestCountry);
// 7.
// let fourLetterCountries=[]
// for (let i=0;i<countries.length;i++){
//   if (countries[i].length === 4) {
//     fourLetterCountries.push(countries[i]);
//   }
// }
// // console.log(fourLetterCountries);
8.
// let multiWordCountries = []; 

// for (let i = 0; i < countries.length; i++) {
//     if (countries[i].includes(" ")) { 
//         multiWordCountries.push(countries[i]);
//     }
// }
// console.log(multiWordCountries);
// 9.
// let reversedCountries = []; 
// for (let i = countries.length - 1; i >= 0; i--) { 
//   reversedCountries.push(countries[i].toUpperCase()); 
// }
// console.log(reversedCountries);