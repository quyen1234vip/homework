// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']

// import { countries } from "./countries";

// import { countries } from "./countries";

//  const backEnd = ['Node','Express', 'MongoDB']
//  const fullStack = [
//     ["HTML", "CSS", "JS", "React", "Redux"], 
//     ["Node", "Express", "MongoDB"]
// ]
//  console.log(fullStack[1][2])


 //ex1
//  1.
const emptyArray = [];
// console.log(emptyArray);
// 2.
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100,];
// console.log(numbers);



3.
// console.log(numbers.length);

// 4.
// let lastIndex=numbers.length-1;
// console.log("so cuoi", numbers[lastIndex])

// let middleIndex = Math.floor(numbers.length/2)

// if (numbers.length % 2 ===0 ){

//     console.log("2 so chinh giua", numbers[middleIndex-1], numbers[middleIndex])
// }else{
//     console.log("SO chinh giua", numbers[middleIndex])

// }

5.

// const mixedDataTypes = [42, "Hello", true, { name: "Alice" }, [1, 2, 3], null, undefined];
// console.log(mixedDataTypes.length)
6.
//  const itCompaines=[
//     'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle and Amazon', 'minatik'
//  ]
7.
// console.log(itCompaines)
8.
// console.log(itCompaines.length)

// 9.
// const firstCompany=itCompaines[0]
// const middleIndex=Math.floor(itCompaines.length/2)
// const middleCompany=itCompaines[middleIndex]


// const lastCompany=itCompaines[itCompaines.length-1]
// console.log(firstCompany)
// console.log(lastCompany)
// console.log(middleCompany)
// 10.
// for(let i=0;i<itCompaines.length;i++){
//     // console.log(itCompaines[i]);
// }
11.
// const itCompaines=["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
// for(let i=0;i<itCompaines.length;i++){
//     itCompaines[i] = itCompaines[i].toUpperCase()
//     console.log(itCompaines[i].toUpperCase());
// }




// 12.
// const itCompaines=[
//     'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle'
// ];
// // const sentence=itCompaines.slice(0, -1)+ ' and ' + itCompaines[itCompaines.length-1]+'are big IT companies.';
// const sentence=itCompaines.join(' ,') +' and '  +'Amazon are big IT companies.' 
//  console.log(sentence)


13.
// const itCompanies=[
//     'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'
// ]
// const companyToFind="Google";
// const indexPosition=itCompanies.indexOf(companyToFind)

// if(indexPosition !==-1){
//     console.log(itCompanies[indexPosition]);

// }else{
//     console.log('This company is not found');
// }
// const found = itCompaines.find((element) => {
//     return element === companyToFind;
// })

// if(found){
//     console.log("found", found)
// }else{
//     console.log('This company is not found');
// }
// console.log(itCompanies.includes('ab'))
// console.log(itCompanies)

14.
15.
// const itCompaines=[
//     'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'
//     ]
// itCompaines.sort()
// console.log(itCompaines)

16.
// const itCompanies=[
//     'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'
// ]
// itCompanies.reverse()
// console.log(itCompanies)
17.
// const itCompaines=[
//     'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'
// ]
// console.log(itCompaines.slice(0,3))
18
// const itCompaines=[
//     'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon',
//     'Facebook', 'Google', 'Microsoft', 'Google', 'Microsoft', 'Apple', 'IBM'
    
//  ]
// itCompanies.pop(); 
// itCompanies.pop(); 
// itCompanies.pop();

// const companies_cut = 5;
// const start = itCompaines.length-companies_cut
// const end = itCompaines.length
// console.log('start', start)
// console.log(itCompaines.slice(start,end) );


// console.log(itCompanies);
// console.log(itCompaines.slice(4,7) );

// console.log(itCompaines.splice(-3,3))
    


19
// const itCompaines=[
//     'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon', 'IBM', 'Oracle', 'Amazon', 
// ]
// // let middleIndex=Math.floor(itCompaines.length/2)
// if(itCompaines.length %2 ===0){
//     console.warn(itCompaines.splice(middleIndex-1, 2))
//     console.warn(itCompaines[middleIndex])

//     console.log('itCompaines', itCompaines)


// }








// console.log(itCompaines.slice(2,4));
// const middleCompanies = itCompanies.splice(3, 1); 
// console.log(middleCompanies);


20
// const itCompaines=[
//     'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'
//  ]
//  console.log(itCompaines.splice(0,1, 'abc'))
//  console.log(itCompaines)
// itCompaines.shift()
// console.log(itCompaines)

21
// const itCompaines=[
//        'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'
//       ]
// // console.log(itCompaines.splice(3,1))
// // const middleIndex
// let middleIndex=Math.floor(itCompaines.length/2)

// if(itCompaines.length %2 ===0){
//     console.log(itCompaines[middleIndex-1],itCompaines[middleIndex])
//     console.log(itCompaines.splice(middleIndex-1, 2))
//     console.log('itCompaines', itCompaines)
// }else{
//     console.log(itCompaines[middleIndex])
//     itCompaines.splice(middleIndex, 1)

//     console.log('itCompaines', itCompaines)


// }


22
// const itCompaines=[
//     'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'
// ]
// console.log(itCompaines.splice(6,1))
// console.log(itCompaines.pop())

// const newCompaines = itCompaines.slice(0, -1);
// console.log(newCompaines);
23
// const itCompaines=[
//       'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'
// ]
// // itCompaines = []

// console.log(itCompaines)

// console.log(itCompaines.splice(0,7))


//ex2
// let changeTheString =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// const changeTheWords=changeTheString.split(' ')
// console.log(changeTheWords.length)
// console.log(changeTheWords)



3.
//  const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// if(!shoppingCart.includes('Meat')){
//     shoppingCart.unshift('Meat')
// }
// console.log(shoppingCart)

// if(!shoppingCart.includes('Sugar')){
//     shoppingCart.push('Sugar')
// }
// console.log(shoppingCart)





// const removeHoneyIndex = shoppingCart.indexOf('Honey');

// if (removeHoneyIndex !== -1) {
//     shoppingCart.splice(removeHoneyIndex, 1);
// }

// console.log(shoppingCart);


// const modifyTea=shoppingCart.indexOf('Tea');
// if(modifyTea >=0){
//     shoppingCart[modifyTea]='Green Tea'
    
// }



// let text =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

// const words = text.split(' ');
// let wordsArray=text.split(" ")
// let newWords = wordsArray.map(word =>(word.split(".").join("")));
// console.log(newWords)

// Cach 1 
// words.forEach((word, index) => {
//     if(word.includes('.') || word.includes(',') ){
        // console.log('word', word)

        // logic in here
        // const new_word = 'html'
        // words[index] = new_word

        // word = assign nguoc lai vao bien nay
//     }
// })

// Cach 2: dung map

// console.log('words', words)

import { countries } from "./countries.js";
import { webTechs } from "./web_techs.js";

// console.log(countries);
// console.log(webTechs);


// const word_changed = 'Japan'

// if (countries.includes(word_changed)) {
// console.log(word_changed.toUpperCase());
// } else {
//     countries.push(word_changed);
//     console.log(countries);
// }

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']


// const fullStack=[...frontEnd,...backEnd]
// console.log(fullStack)


// if (webTechs.includes("Sass")) {
// console.log("Sass is a CSS preprocess");
// } else {
// webTechs.push("Sass");
// console.log( webTechs);
// }
//ex3
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// ages.sort()
// console.log(ages)
// const minAge=ages[0];
// const maxAge=ages[ages.length-1]
// console.log(ages);
// console.log(minAge);
// console.log(maxAge);

// const length = ages.length;
// let median ;
// if(length %2 ===1){
//     median=ages[Math.floor(length/2)];
// }else{
// const middle1=ages[length/2 -1];
// const middle2=ages[length/2];
// median=(middle1 + middle2) /2;
// }
// console.log(median)
// const range =maxAge - minAge;
// console.log(range)

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// ages.sort()
// const sumAges=ages

// let sum = 0;

// Cach 1

// for(let i=0; i<ages.length;i++){
//     sum += ages[i]
// }

// Cach 2
// let i = 0
// while (i< ages.length) {
//     sum += ages[i]
// }
// console.log(sum)











//const firstTenCountries=countries.slice(0,10)
//console.log(firstTenCountries);


// const length=countries.length;
// const middleIndex=Math.floor(length/2);
// let middleCountries;
// if (length %2 ===0){
//     middleCountries=[countries[middleIndex-1],countries[middleIndex]]
// }else{
//     middleCountries=[countries[middleIndex]];
// }
// console.log(middleCountries);

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// ages(sort);
// const minAge=ages[0];
// const maxAge=ages[ages.length-1]


// const middleCountries=Math.ceil(countries.length/2);
// const oneArrayCountries = countries.slice(0,middleCountries);
// const twoArrayCountries=countries.slice(middleCountries);

// console.log(oneArrayCountries);
// console.log(twoArrayCountries);

