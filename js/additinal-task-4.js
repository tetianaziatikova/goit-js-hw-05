const User = {
    name:'Alex',
    age: 23,
    login: 123,
    email: 'hi@gmail.com', 
};

const showPersonInfo = function ({name, age, login, email}) {
    
    console.log('Name: ', name);
    console.log('age: ', age);
    console.log('login: ', login);
    console.log('email: ', email);
}

showPersonInfo(User);