//Builder Pattern

// class User {
//     constructor(name) {
//         this.name = name
//     }
// }

// class UserBuilder {
//     constructor(name) {
//         this.user = new User(name)
//     }

//     setAge(age){
//         this.user.age = age
//         return this
//     }

//     setPhone(phone) {
//         this.user.phone = phone
//         return this
//     }
//     setAddress(address) {
//         this.user.address = address
//         return this
//     }

//     build() {
//         return this.user
//     }
// };

// let user = new UserBuilder('Bob').setAge(10).setPhone(11111111).build()
// console.log(user);

// class Address {
//     constructor(zip, street) {
//         this.zip = zip
//         this.street = street
//     }
// }

// class User {
//     constructor(name, { age, phone = '1234567890', address } = {}) {
//         this.name = name
//         this.age = age
//         this.phone = phone
//         this.address = address
//     }
// }

// let user = new User('Bob', {age:10, address: new Address('1', 'Main')});
// console.log(user)

// Facade Pattern
// allows to change code in future while keeping older code clean
// [[userId, 1]]
// function getFetch(url, params = {}) {
//     const queryString = Object.entries(params).map(param => {
//         return `${param[0]=${param[1]}`
//     }).join('&')
//     return fetch(`${url}?${queryString}`, {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/jason'}
//     }).then(res => res.jason())
// } 

// function getFetch(url, params = {}) {
//     return axios({
//         url: url,
//         method: 'GET',
//         params: params
//     }).then(res => res.data)
// }


//Observer Pattern
// function createObseravable() {

//     return{
//         subscribers: [],

//         subscribe(fn){
//             this.subscribers.push(fn);
//         },
    
//         unsubscribe(fn){
//             this.subscribers = this.subscribers.filter((item) => item !== fn);
//         },
    
//         broadcast(data){
//             for(let i = 0; i< this.subscribers.length; i++){
//                 this.subscribers[i](data);
//             }
//         },
//     };
// }  
   
    

// const observer = createObseravable()

// const fn = (data) =>{
// console.log('Callback was executed with data', data)
// };

// observer.subscribe(fn);

// observer.broadcast('Hello from the observable')

// Destructuring

//Access Objects w/ Destruring
// let { firstName, lastName } = person;

// firstName
// lastName

//Rename var w/ Destruring

// let { firstName: fName, lastName: lastName } = person;

// fName
// lastName

// what happens if you you destruct a property that does not exist

// let { firstName, lastName, middleName } = person
// console.log(middleName); // undefined

// Setting default when object desturcturing

// let person = {
//     firstName: 'kyle',
//     lastName: ' wells',
//     currentAge: 32,
// };

// let { firstName, lastName, middleName = '', currentAge: age = 32 } = person

// console.log(middleName); //'
// console.log(age); // 32

// const arr = [1, 2, 3];
// let [x, y, z] = arr;

// let[a, b, c, d ] = [1, 2, 3, 4];

// skipping items when arr des

// const arrValue = ['one', 'two', 'three'];

//  des assignment in arr
// const [x, , z] = arrValue

// console.log(x); // one
// console.log(z); // three

//des nested object

// let member = {
//     id: 1,
//     name: {
//         firstName: 'kyle',
//         lastName: 'wells'

//     }
// };

// des function arguments

// let { id, name: {firstName, lastName}, name } = member;

// let displayFullName = ({firstName, lastName}) => `${firstName} ${lastName}`;

// let person = {
//     firstName: 'kyle',
//     lastName: 'wells'
// };

// displayFullName(person);

// js spread operator
// ...










