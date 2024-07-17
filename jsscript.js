// // 3-dars O'ZGARUVCHILAR
// // console.log(age);
// let age = 22; //o'zgaruvchi o'zgaruvchilar 😃
// const name = "Ja'far"; //o'zgarmas o'zgaruvchilar😁

// const person = {
//     name: "Ja'far"
// }

// person.name = "Dovud"

// // console.log(person);
// console.log(fullName);
// // old syntaxis😂

// var fullName = "Ja'far Zokirov";



// 4-dars MA'LUMOT TURLARI

// #1 Number 
// #2 Sonlar 
// #3 Boolean 
// #4 Null 
// #5 Undifined 

// const age = 24 
// console.log(typeof age);

// const name = "Ja'far"
// console.log(typeof name);

// const mantiqiy = 3 < 2
// console.log(typeof mantiqiy);

// console.log(typeof kanka); kanka nomli o'zgaruvchi bo'lmaganligi sababli  uning type undefined chiqadi

// let abay 
// console.log(abay);


// OBJECT KOMPLEKS MA'LUMOT TURLARI

// #1 Array -Massiv
// #2 Function
// #3 Object
// #4 Muntazam iboralar
// #5 Error


// const person = {
//     name: "Ja'far",
//     surname: "Zokirov",
//     fullname: "Ja'far Hasan o'g'li"
// }

// console.log(typeof person);

// const cars = ["bmw", "mers"]
// console.log(typeof cars);



// 5-dars WINDOW INTERPOLATSIYA

// const isAccess = alert("Siz insonmisiz?")

// ok - bosilsa true qaytaradi
// cancel = bosilsa false qaytaradi


// const name = prompt("What is your name?")
// console.log(name); 


// 6-dars uyga vazida

// const numberOfSeries = +prompt("Nechta serial ko'rdingiz?")

// const seriesDB = {
//     count: numberOfSeries,
//     series: {},
//     actors: {},
//     genres: [],
//     privat: false
// }

// const a = prompt("Oxirgi ko'rgan serialingiz?", '')
// const b = prompt("Nechi baxo berasiz?", '')

// const c = prompt("Oxirgi ko'rgan serialingiz?", '')
// const d = prompt("Nechi baxo berasiz?", '')

// seriesDB.series[a] = b
// seriesDB.series[c] = d

// console.log(seriesDB);

// SHARTLI OPERATORLAR

// const svetafor =''

// if(svetafor == 'red') {
//     console.log('kutib turing')
// } else if(svetafor == 'yellow') {
//     console.log('tayyorlaning')
// } else if(svetafor == 'green') {
//     console.log("O'tishingiz mumkin")
// } else {
//     console.log("Bizning o'zbekistonda svet yo'q");
// }



//9-dars function turlari

//function decloration
// function showHelloWorld() {
//     console.log("Hello World")
// }

// function showHelloToUser(user) {
//     console.log(`Hello, ${user}`)
// }

// showHelloToUser('Jafar')

// function calc(a, b) {
//     console.log(a + b);
//     console.log(a - b);
//     console.log(a * b);
//     console.log(a / b);
// }

// calc(9, 7)

// function calc(a, b) {
//     return a + b
// }

// const ans = calc(2, 3)
// console.log(ans);

//function expression 
// showHelloWorld()

// const showHelloWorld = function() {
//     console.log("Hello world");
// } 


// arrow function 
// const calc = (a, b) => a + b


// const ansCalc = calc(2, 3)
// console.log(ansCalc);

// Metodlar

//String methods
// const text = "Hello World!"

// console.log(text.length); // tex ning uzunlgini aniqlab sonda chiqarib beradi
// console.log(text.charAt(n)); textning n-1 chi elemntini qaytaradi 


//***********  Callback and Object **************//

// callback bu bitta funksiya bajarilgandan so'ng keyin ishlaydigan function

// const firstLog = () => {
//     setTimeout(() => {
//         console.log(1);
//     }, 2000);
// }

// const secondLog = () => {
//     console.log(2);
// }

// firstLog()
// secondLog()



// function greeting(callback) {
//     console.log('Hello students!');
//     callback()
// }

// function call() {
//     console.log('Are you ready today?');
// } 
 
// greeting(call)


//Object va diskturikzatsiya 

// const person = {
//     name: "Ja'far",
//     age: 20,
//     job: "Fullstack developer",
//     hobby: {
//         sport: "Footbal",
//         games: "UFC"
//     },
//     sayHello: function() {
//         console.log('AAA');
//     }
// }

// const {name, age, job, hobby, sayHello} = person

// sayHello()

// console.log((Object.keys(person)).length)

// for in - faqatobject uchun
//for - in faqat massiv uchun

// for (let key in person) {
//     if(typeof person[key] === "object") {
//         for (let i in person[key]) {
//             console.log(`Property: ${i}, Value: ${person[key][i]}`);
//         }
//     }else {
//         console.log(`Property: ${key}, Value: ${person[key]}`);
//     }
// }

// console.log(person.hobby.sport);




//************** Massivlar **************//

// const colors = ['red', 'blue', 'green', 'blue', 'brown'];

// console.log("Massiv uzunligi:", colors.length); 
// console.log("Index yordamida element olish:", colors[2]); 
// // console.log("Masiv oxiridagi elementni o'chirish", colors.pop()); 
// console.log("Massiv ociriga elemnt qo'shish", colors.push('Sariq'));

// console.log(colors);

//pop va push 
// pop -bu massiv oxiridagi elementni o'chirish






//******************* Objectni clonlash ******************/

// let a = 10,
// b = a;

// b = b + 10

// console.log(a)
// console.log(b)

// object 

// const person = {
//     name: "Ja'far",
//     age: 20,
//     hobbies: {
//         sport: "Football",
//         games: "UFC"
//     }
// }

// const seconPerson = person 

// seconPerson.name = 'Dovud'
// seconPerson.age = 'endi dunyoga keladi nasib...'

// console.log(person)

// #1 Intteratsiyasi 
// const copyObj = (obj) => {
//     const clone = {}

//     for (let key in obj) {
//         clone[key] = obj[key]
//     }

//     return clone
// } 

// const secondPerson = copyObj(person);
// secondPerson.name = 'Dovud'
// secondPerson.age = 'Endi dunyoga keladi nasib...'
// console.log(secondPerson);
// console.log(person);


// #2 Object assign 
// const secondPerson = Object.assign({isMarried: false}, person)

// secondPerson.name = 'Azik'
// secondPerson.age = 19 

// console.log(secondPerson)
// console.log(person)

// #3 Spread 
// const secondPerson = {...person, isMarried: false}

// secondPerson.name = 'Demir'
// secondPerson.age = 18

// console.log(secondPerson)



// function Person(firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.isHuman = true
//     this.greetinig = function() {
//         console.log(this)
//     }
// }

// const firstPerson = new Person("Jafar", "Zokirov")

// console.log(firstPerson.greetinig());



// JSON va AJAX

// const person = {
//     name: "Ja'far",
//     age: 20,
//     hobbies: {
//         sporty: "Basletball",
//         games: "PUBG"
//     }
// }

// const objToJson = JSON.stringify(person)

// const jsonToObj = JSON.parse(objToJson)

// const clone = JSON.parse(JSON.stringify(person))

// clone.hobbies.sporty = "BOKS"

// console.log(person);
// console.log(clone);
















