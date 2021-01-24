class User {
  static getInfo ({name, age, status, role}) {
    console.log(`name: ${name}, age: ${age}, status: ${status}, role: ${role}`)
  }

  constructor ({name, age, status = 'offline', role = 'admin'}) {
    this.name = name;
    this.age = age;
    this.status = status;
    this.role = role;
  }


  atWork() {
    this.status = 'onLine';
  }

  atHome() {
    this.status = 'offLine'

  }
}

const first = new User ({name: 'ALex', age: 23});

first.atWork();
// first.atHome();

User.getInfo(first);