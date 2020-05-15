// Practical task

// 1. 
// Є такий код:

// let arr = ["Tom", "Sam", "Ray", "Bob"];
// let [x , y,  , ...z] = arr;
// console.log(x); // "Tom"
// console.log(y); // "Sam"
// console.log(z); // ["Bob"]

// Допишіть код використовуючи деструктурування, 
// щоб в консолі браузера з'явилися рядки, 
// які написані в коментарях.


// 2. Є такий код:
// let data = {
//     names: ["Sam", "Tom", "Ray", "Bob"],
//     ages: [20, 24, 22, 26],
// };
// let { names: [, name2, , name4], ages: [, age2, , age4] } = data;
// console.log(name2); // "Tom"
// console.log(age2); // 24
// console.log(name4); // "Bob"
// console.log(age4); // 26
// Допишіть код використовуючи деструктурування, 
//щоб в консолі браузера з'явилися рядки, 
//які написані в коментарях.

  
// 3. Напишіть функцію mul(), яка приймає будь-яку
// кількість параметрів різного типу і повертає 
// добуток параметрів типу Number.
// 	Якщо параметри типу Number відсутні, повертає число 0.
// function mul() {
    function func({first, second, third}) {
        console.log(first + " " + second + " " + third);
}
const cities = {
 first: 1,
 second: "Kyivstr",
 third: "Dnipro"
};
func(cities); // "Lviv Kyiv Dnipro"

// main()
// console.log(mul(1, "str", 2, 3, true)); // 6
// console.log(mul(null, "str", false, true)); // 0
// Не можна використовувати властивість arguments, але в функцію mul() 
// можна додати один параметр.

// 4. 
// Є такий код:

// let server = {
//     data: 0,
//     convertToString: function (callback) {
//         callback(() => {
//             return this.data + "";
//         });
//     }
// };
// let client = {
//     server: server,
//     result: "",
//     calc: function (data) {
//         this.server.data = data;
//         this.server.convertToString(this.notification());

//     },
//     notification: function() {
//         return (callback => {
//             this.result = callback();
//         });
//     }
// };
// client.calc(123);
// console.log(client.result); // "123"
// console.log(typeof client.result); // "string"
// Змініть код використовуючи стрілочні функції, щоб в коді не використовувалися методи bind().


// 5. Напишіть функцію mapBuilder (keysArray, valuesArrays), яка приймає два масиви однакової довжини. Використовуючи ці масиви, функція повинна створювати об'єкт типу Map, ключами якого є значення з першого масиву, а значеннями Map - значення з другого масиву. Після цього функція повертає даний об'єкт Map.
// Приклади використання функції:
// let keys = [1, 2, 3, 4];
// let values = ["div", "span", "b", "i"];

// function mapBuilder(keys, values) {
//     let map = new Map();
//     for(let i of keys) {
//         map.set(i, values[i-1])
//     }
//     return map;
// }

// let map = mapBuilder(keys, values);
// console.log(map.size); // 4
// console.log(map.get(2)); // "span"


