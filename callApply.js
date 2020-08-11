const person = {
    firstName: 'Mahadi',
    lastName: 'Khan',
    salary: 15000,
    getFullName: function(){
        return this.firstName+' '+this.lastName
    } ,
    chargeBill: function(amount){
        this.salary -= amount;
        return this.salary;
    }
}
// 2nd...video

// console.log(person);
// console.log(person.getFullName);
// console.log(person.getFullName());
// console.log(person.chargeBill(5000));//15000-5000=10000
// console.log(person.chargeBill(4000));//10000 - 4000 = 6000

const heroPerson = {
    firstName: 'Sumaiya',
    lastName: 'Jahan',
    salary: 10000,
}

// 3rd video (bind -> borrow to use the method of an object by another object)

// const heroCargeBill = person.chargeBill.bind(heroPerson);
// heroCargeBill(2000);// 10000 - 2000 = 8000
// heroCargeBill(1000)// 8000 - 1000 = 7000 
// console.log(heroPerson.salary);
// const heroName = person.getFullName.bind(heroPerson);
// // heroName();
// console.log(heroPerson);// Object { firstNmae: 'Sumaiya', lastName : 'Jahan', salary: 8000 }
// console.log(heroName());// Sumaiya Jahan
// const fullName = heroName();
// console.log("Full Name:",fullName);
// console.log(heroCargeBill(1000));//7000 - 1000 = 6000

// 4th video
//(call -> direct uses of the method of an object by another object)...comma(,) will be used

// person.chargeBill.call(heroPerson, 5000);//10000 - 5000 = 5000
// console.log(heroPerson.salary);
// person.chargeBill.call(heroPerson, 1000);//5000 - 1000 = 4000
// console.log(heroPerson.salary);
// person.getFullName.call(heroPerson);
// console.log(person.getFullName.call(heroPerson));//Sumaiya Jahan

//(apply -> direct uses of the method of an object by another object)...array [...] will be used
const bill = person.chargeBill.apply(heroPerson, [2000]);//10000 - 2000 = 8000
console.log(bill);
console.log(person.getFullName.apply(heroPerson));//Sumaiya Jahan
console.log(person.getFullName.apply(heroPerson, []));//array parameter hishabe send korar thakle korte hobe, otherwise kora jabe na...