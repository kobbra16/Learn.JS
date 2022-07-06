//  1.Переменные
//camelCase
// const firstName = 'Maxim'
//     // const lastName = 'koba' //string
//     // let age = 34 //Number
// const isProgrammer = true //boolean

// // ctr x -удаление целой строки в Js.

// const _ = 'private'
// const $ = 'some value'

// // const if = 'mkdir' //err
// const withName = '5'
//     // const 5 withName = 5 // err


// 2.Мутирование
// alert(' name person name: ' + firstName + ',  and person age: ' + age +
// ' person lastName: ' + lastName)
// const lastName = prompt('Enter lastName')
// alert(firstName + ' ' + lastName)

//3.Операторы
// let currentYear = 2022
// const bithday = 1987


// // const age = currentYear - bithday
// // console.log(age)

// const a = 10
// const b = 5

// let c = 32
//     // c = c + a
//     // c = c - a
//     // c = c * a
//     // c = c / a
//     // c += a
//     // c -= a
//     // c *= a
// c /= a

// // console.log(a - b)
// // console.log(a + b)
// // console.log(a * b)
// // console.log(a / b)
// // console.log(currentYear++)
// // console.log(currentYear)
// console.log(c)

//4.Типы данных

// const isProgrammer = true
// const firstName = 'Maxim'
// const age = 34
// let x
// console.log(typeof isProgrammer)
// console.log(typeof firstName)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null)


// 5. Приоритет операторов
// const fullAge = 34
// const birthday = 1987
// const currentYear = 2022

// const isFullAge = currentYear - birthday <= fullAge //35 >=36 =>true
// console.log(isFullAge)

//6.Условные операторы


// const courseStatus = pending // ready,fail,pending

// if (courseStatus == 'ready') {
//     console.log('no course')
// } else if (courseStatus == 'pending') {
//     console.log('course')
// }

// const isReady = true
// if (isReady === true) {
//     console.log('it ok')
// }

// const num1 = 42 // number
// const num2 = '42' //string


// console.log(num1 === num2)

// const isReady = false

// if (isReady) {
//     console.log('it ok')
// } else {
//     console.log('it not ok')
// }

// тернмарное выражение

// isReady ? console.log('it ok') : console.log('it not ok')

// 7.булевая логика
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators


function calculateAge(year) {
    return 2022 - year
}

// console.log(calculateAge(1993))
// console.log(calculateAge(1995))
// console.log(calculateAge(1997))

// function logInfoAbout(name, year) {
//     const age = calculateAge(year)
//     if (age > 0) {
//         console.log('  person name  ' + name + '  now age  ' + age)
//     } else {
//         console.log('This is feature')
//     }
// }

// logInfoAbout('Maxim', 1987)
// logInfoAbout('Elena', 1985)
// logInfoAbout('Maxim', 2023)

// 9 Массив
// const cars = ['Wv', 'mercedes', 'bmw']
//     // const cars = new Array['Wv', 'mercedes', 'bmw']
// console.log(cars)

// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[2])
// console.log(cars[0])


// cars[0] = 'audi'
//     // cars[3] = 'Wv'
// cars[cars.length] = 'Wv'

// console.log(cars)

// 10 Циклы
// const cars = ['audi', 'mercedes', 'bmw', 'Wv']

// // for (i = 0; i < cars.length; i++) {
// //     const car = cars[i]
// //     console.log(car)
// // }
// // for (let car of cars) {
// console.log(car)
// }
// 11 ОбЪкты

const person = {
    firstName: 'Maxim',
    lastName: 'Koba',
    year: 1987,
    languages: ['Ru', 'En', 'De'],
    hasWife: false,
    greet: function() {
        console.log('greet')
    }
}

console.log(person.lastName)
console.log(person['lastName'])
const key = 'year'
console.log(person[key])
person.greet()
person.hasWife = true
person.isProgrammer = true
console.log(person)