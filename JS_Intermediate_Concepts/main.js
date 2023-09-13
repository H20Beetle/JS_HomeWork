//this will point to the window in this example 
// function test(){
//     console.log(this);
// }

// test();

// this will find the near object (user in this case)
// if using a arrow function this points to the closest function to inherent
// if no function other than a arrow function is in the is in the local scope, this will point to the global scope
// const user = {
//     firstName: 'Kyle',
//     lastName: 'Wells',
//     fulllName: function() {

//     const arrowFunction = () => {
//         console.log(this)
//         console.log(this.firstName + ' ' +this.lastName)
//        } 
       
//        arrowFunction();
//     }
// }

// user.fulllName();

//with forEach you can pass in this to access the user object
// const user = {
//     firstName: 'Kyle',
//     lastName: 'Wells',
//     hobbies: ['programming', 'cooking'],
//     listHobbies: function()
//     {
//         this.hobbies.forEach(function(hobby){
//             console.log(this.firstName)
//             console.log(hobby)
//         }, this);
//     }
// }

// user.listHobbies();


// New Objects made with the new keyword will have this point to them 
// function User(name)
// {
//     this.name = name;
//     console.log(this);
// }

// const devsage = new User('DevSage'); 
// const codingpahse = new User('CodingPhase');

// Bad code (player object is already modifyed by const hanSolo)
// const player = {
//     name: '?',
//     hp: 100,
//     mp: 0,
//     items: [],
// };

// const hanSolo = player;
// hanSolo.name = 'Han Solo';
// hanSolo.hp = 80;
// hanSolo.mp = 20;
// hanSolo.items =['Blaster'];

// const darthVader = player;

// console.log(hanSolo);
// console.log(darthVader);

// slightly better code than first 
// const createPlayer = (name, hp, mp, items) => {
//     return {
//         name,
//         hp,
//         mp,
//         items,
//     };
// };

// const hanSolo = createPlayer('Han Solo',100,10,['blaster']);
// hanSolo.hp = 150;
// console.log(hanSolo);

// const darthVader = createPlayer('Darth Vader', 200, 50, ['saber']);
// console.log(darthVader);


//practice using class and constructors
class Player {
    age = 20;
    constructor(name, hp, mp,items) {

        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items =items;
        // this.age = 20;
    };

    speak(phrase){
        console.log(`${this.name} says: ${phrase}`);
    }
};

const hanSolo = new Player('Han Solo', 100, 10 ,['blaster']);
hanSolo.speak('Never tell me the odds!');
hanSolo.age = 50;
console.log(hanSolo);
console.log(Object.getOwnPropertyNames(hanSolo));
console.log(Object.getOwnPropertyNames(hanSolo.__proto__));

const nader = new Player('Nader', 10, 5, ['Computer']);
nader.speak('Monkeys are the best animal!');
console.log(nader);
console.log(Object.getOwnPropertyNames(nader));
console.log(Object.getOwnPropertyNames(nader.__proto__));

// Example of how to run same code using function 
function AnotherPlayer(name, hp, mp, items) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items =items;
}

AnotherPlayer.prototype.speak = function(phrase) {
    console.log(`${this.name} says: ${phrase}`);
}

const darthVader = new AnotherPlayer('Darth Vader', 200, 50, ['saber']);
console.log(darthVader);
darthVader.speak('I am your father!')
console.log(Object.getOwnPropertyNames(darthVader));
console.log(Object.getOwnPropertyNames(darthVader.__proto__));





