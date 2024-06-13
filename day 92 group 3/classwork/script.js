class User {
    constructor(name, lastname, email, password) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    }
    validatePassword(password) {
        return this.password === password;
    }
}

let dataBase = [];

document.getElementById('register').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const newUser = new User(name, lastname, email, password);
    dataBase.push(newUser);


    alert('Registration Successful!');
    document.getElementById('register').reset();
    document.getElementById('registrationForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
});

document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;
    const user = dataBase.find(user => user.email === loginEmail);
    if (user && user.validatePassword(loginPassword)) {
        alert('Login Successful!');
    } else {
        alert('Invalid Email or Password!');
    }
    document.getElementById('login').reset();
});
