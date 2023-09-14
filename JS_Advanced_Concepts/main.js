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


