//ex1
// 1.
// let dog = {};
// 2.
// console.log(dog);
3.
// const dog = {
//     name: "Dog",
//     legs: 4,
//     color: "Black",
//     age: 3,
//     bark: function() {
//         return "woof woof";
//     }
// };
// 4.
// console.log(dog.name);   
// console.log(dog.legs);   
// console.log(dog.color);  
// console.log(dog.age);    
// console.log(dog.bark());
// 5.
// const dog = {
//     name: "Dog",
//     legs: 4,
//     color: "Black",
//     age: 3,
//     bark: function() {
//         return "woof woof";
//     },
//     breed: "Puddle",
//     getDogInfo: function() {
//         return "Name: " + dog.name + ", Breed: " + dog.breed + 
//                ", Color: " + dog.color + ", Age: " + dog.age + 
//                ", Legs: " + dog.legs;
//     }
// };
// console.log(dog.getDogInfo());
//ex2
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
1.

// let mostSkilledPerson = "";
// let maxSkills = 0;
// for (let user in users) {
//   if (users[user].skills.length > maxSkills) {
//     maxSkills = users[user].skills.length;
//     mostSkilledPerson = user;
//   }
// }
// console.log( mostSkilledPerson);
// console.log( maxSkills);
2.
// let loggedInCount = 0;
// let highPointsCount = 0;
// for (let user in users) {
//     if (users[user].isLoggedIn) {
//         loggedInCount++;
//     }
//     if (users[user].points > 50) {
//         highPointsCount++;
//     }
// }
// console.log( loggedInCount);
// console.log( highPointsCount);
3.
// const mernStackDevelopers = [];
// for (let user in users) {
//     const skills = users[user].skills;
//     if (skills.includes("MongoDB") && skills.includes("Express") && 
//         skills.includes("React") && skills.includes("Node")) {
//         mernStackDevelopers.push(user);
//     }
// }
// console.log( mernStackDevelopers);
// 4.
// const myName = "ngo quyen"; 
// const newUsers = Object.assign({}, users, {
//     [myName]: {
//         email: 'yourname@gmail.com',
//         skills: ['HTML', 'CSS', 'JavaScript'],
//         age: 20,
//         isLoggedIn: true,
//         points: 45
//     }
// });
// console.log(newUsers);
// 5.
// const userKeys = Object.keys(users);
// console.log(userKeys);
// 6.
// const userValues = Object.values(users);
// console.log(userValues);
// 7.
// const countries = {
//     Vietnam: { capital: "Hanoi", population: 97_00, languages: ["Vietnamese"] },
// };
// for (let country in countries) {
//     console.log("Country: " + country);
//     console.log("Capital: " + countries[country].capital);
//     console.log("Population: " + countries[country].population);
//     console.log("Languages: " + countries[country].languages);
// }
//ex3
1
// const firstName = "quyen";   
// const lastName = "quyen";    
// let totalIncome = 0;       
// let totalExpense = 0;
    
// function addIncome(money) {
//     totalIncome = totalIncome + money;
// }
// function addExpense(money) {
//     totalExpense = totalExpense + money;
// }
// function accountBalance() {
//     return totalIncome - totalExpense;
// }
// function accountInfo() {
//     console.log( firstName + " " + lastName);
//     console.log( totalIncome);
//     console.log( totalExpense);
//     console.log(accountBalance());
// }
// addIncome(50000);
// addExpense(100000);
// accountInfo();

