// const dimon = {
//   name: "Dimon",
//   surname: "Petrov",
//   rate: 500,
//   days: 20

// }

// const petya = {
//   name: "Petya",
//   surname: "Petrov",
//   rate: 300,
//   days: 15
// }

// class Worker {
//   constructor ({name, surname, rate, days}) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.days = days;
//   }

//   getSalary () {
//     return this.rate * this.days;
//   }

// }

// const A = new Worker(dimon);
// console.log(A);
// console.log(A.getSalary());

// const B = new Worker(petya);
// console.log(A);
// console.log(A.getSalary());

// console.log(A.getSalary() + B.getSalary());

// =================================================

class MyString {
  // constructor (str){
  //   this.str = str;
  // } конструктор можно не задавать, если нам не нуно создавать обэкт
  
  reverse(str) {
    console.log(str.split('').reverse().join(''));
  }
  // принимает строку и возвращает в перевернутом виде

  ucFirst(str) {
    console.log(str[0].toUpperCase()+str.slice(1));
  }
  // возвращает строку и возвращает эту же строку сделав ее букву заглавной
  
  ucWords(str) {
    let results = [];
    const strArr = str.split(' ');
    for (let word of strArr){
      results.push(word[0].toUpperCase() + word.slice(1));
    }
    console.log(results.join(' '));
  } 
  // принимает строку и делает заглавной первую букву каждого слова этой строки
}

const a = new MyString();
console.log(a);

a.reverse('abcd');
a.ucFirst('abcsd');
a.ucWords('Hello my work')

// =====================================

class Validator {

  isEmail(str) {
    (str.includes("@") && str.includes("."))
    ? console.log(true)
    : console.log(false);
  }

  isDomain(str) {
    (str.includes(".net") || str.includes(".com"))
    ? console.log(true)
    : console.log(false);
  }

  isDate(date) {
    let arr = date.split('.');
    for (const item of arr){
      if (!+item){
        return false;
      }
    }
    if (
      arr[0].lenght === 3 && 
      arr[0].lenght === 2 && 
      arr[1].lenght === 2 && 
      arr[2].lenght === 4
      ){
      return true;
    } else {
      return false;
    }
  }

  isPhone(phone) {
    console.log(phone);
    return phone.match(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/);
  }
}

const validator = Validator();
validator.isEmail ("hello@.efvw");
validator.isEmail ("hello.net");
console.log(validator.isDate("12.05.2020"));
console.log(validator.isPhone("+35 2222 2222"));