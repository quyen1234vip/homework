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
// const users = {
//     Alex: {
//       email: 'alex@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript'],
//       age: 20,
//       isLoggedIn: false,
//       points: 30
//     },
//     Asab: {
//       email: 'asab@asab.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 25,
//       isLoggedIn: false,
//       points: 50
//     },
//     Brook: {
//       email: 'daniel@daniel.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//       age: 30,
//       isLoggedIn: true,
//       points: 50
//     },
//     Daniel: {
//       email: 'daniel@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     John: {
//       email: 'john@john.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//       age: 20,
//       isLoggedIn: true,
//       points: 50
//     },
//     Thomas: {
//       email: 'thomas@thomas.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     Paul: {
//       email: 'paul@paul.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     }
//   }
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
const users = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
];
// function signIn(email, password) {
//   let user = null;
//   for (let i = 0; i < users.length; i++) {
//       if (users[i].email === email) {
//           user = users[i];
//           break; 
//       }
//   }
//   if (user === null) {
//       return "Khong tim thay tai khoan: " + email;
//   }
//   if (user.password !== password) {
//       return "sai mat khau cua tai khoan: " + user.username;
//   }
//   if (user.isLoggedIn) {
//       return  + user.username + " da dang nhap";
//   }
//   user.isLoggedIn = true;
//   return  + user.username + " da dang nhap thanh cong";
// }
// console.log(signIn('alex@alex.com', '123123')); 
// console.log(signIn('thomas@thomas.com', 'wrongpass')); 
const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]



// 3.
// function rateProduct(productId, userId, rating) {
//   if (rating < 1 || rating > 5) {
//       return "Danh gia phai nam trong khoang tu 1 den 5!";
//   }
//   let product = products[productId];
//   if (!product) {
//       return "Khong tim thay san pham!";
//   }
//   let ratingFound = false;
//   for (let i = 0; i < product.ratings.length; i++) {
//       if (product.ratings[i].userId === userId) {
//           product.ratings[i].rate = rating; 
//           ratingFound = true;
//           break;
//       }
//   }
//   if (!ratingFound) {
//       product.ratings.push({ userId: userId, rate: rating });
//   }
//   return "Ban da danh gia san pham " + product.name + " voi so diem: " + rating;
// }
// console.log(rateProduct("eedfcf", "fg12cy", 5)); 
// function averageRating(productId) {
//   let product = products[productId];
//   if (!product) {
//       return "Khong tim thay san pham!";
//   }
//   if (product.ratings.length === 0) {
//       return "San pham chua co danh gia!";
//   }
//   let total = 0;
//   for (let i = 0; i < product.ratings.length; i++) {
//       total += product.ratings[i].rate;
//   }
//   let average = Math.floor(total / product.ratings.length);
//   return "Diem trung binh cua san pham " + product.name + " la: " + average;
// }
// console.log(averageRating("eedfcf")); 
// console.log(averageRating("p2")); 
4.
function likeProduct(productId, userId) {
  let product = null;
  for (let i = 0; i < products.length; i++) {
      if (products[i]._id === productId) {
          product = products[i];
          break;
      }
  }
  if (!product) {
      return "Khong tim thay san pham!";
  }
  let index = -1;
  for (let i = 0; i < product.likes.length; i++) {
      if (product.likes[i] === userId) {
          index = i;
          break;
      }
  }

  if (index !== -1) {
      product.likes.splice(index, 1); 
      return "Ban da bo like san pham " + product.name;
  }

  product.likes.push(userId); 
  return "Ban da like san pham " + product.name;
}
console.log(likeProduct("aegfal", "ab12ex"));
console.log(likeProduct("aegfal", "fg12cy")); 