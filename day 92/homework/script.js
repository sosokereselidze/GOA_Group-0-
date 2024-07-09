class person {
    #password;
    constructor(name, age, sex, password) {
        this.name = name, 
        this.age = age,
        this.sex = sex,
        this.#password = password
    };

    greet(){
        console.log("Hello")
    }

    get name1(){
        return this.name;
    }

    get name2(){
        return this.name.toUpperCase();
    }

    set name3(newName) {
        this.name = newName;
    }

    get password(){
        return this.#password
    }
};

const person1 = new person("soso", 15, "male");

console.log(person1.name, person1.age, person1.sex)

const person2 = new person("luka", 17, "tskhvaradze");
const person3 = new person("dato", 15, "tyeshelashvili");

const person4 = new person("soso", 15, "male", 554621)


console.log(person4.getpassword())