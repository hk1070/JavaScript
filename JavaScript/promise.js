'use strict';


//  Promise chaning
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));



// Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000);
    });

const getEgg = hen =>
    new Promise((resolve, reject) => {
        //setTimeout(() => resolve(`${hen}=> 🥚`), 1000);
        setTimeout(() => reject(new Error(`error! ${hen}=> 🥚`)), 1000);

    });

const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg}=> 🍳`), 1000);
    });

/* 
getHen()
.then(hen => getEgg(hen))
.then(egg => cook(egg))
.then(meal => console.log(meal)); 
*/

// 위의 코드를 간략하게 정리
getHen()
    .then(getEgg)
    // 위에서 발생한 에러를 처리할때는 바로 뒤에 catch 를 작성
    .catch(error => {
        return '🥖';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);


// review
const fetchNumber2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(5), 1000);
});

fetchNumber2
    .then(num => num * 5)
    .then(num => num + 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 2), 1000);
        });
    })
    .then(num => console.log(num));


const User = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello!'), 1000);
    });

const Username = user =>
    new Promise((resolve, reject) => {
        //setTimeout(() => resolve(`${user} Joy`), 1000);
        setTimeout(() => reject(new Error(` error! ${user} Joy`)), 1000);

    });

const Message = name =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${name} 😄`), 1000);
    });

User()
    .then(Username)
    .catch(error => {
        return 'John';
    })
    .then(Message)
    .then(console.log);