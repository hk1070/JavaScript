'use strict';

// async & await

// 1. async

/* async 사용전

function fetchUser() {
    return new Promise((resolve, reject) => {
        // do network request in 10 secs..
        resolve('ellie');
    });
} */

// async 사용후
async function fetchUser() {
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);


// 2. await
// async 가 붙은 함수 안에서만 사용가능
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

/*  await 사용 전

function getBanana(){
    return delay(3000)
    .then(()=>'🍌');
} */

/* 콜백지옥과 비슷함

function pickFruits() {
    return getApple()
        .then(apple => {
            return getBanana()
                .then(banana => `${apple} + ${banana}`);
        })
} */

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. Promise APIs
// all() 모든 Promise들이 병렬적으로 다 받을때까지 모아줌
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
        .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

// race() Promise 중 가장 먼저 값을 리턴하는 것만 출력
function pickOnlyONe() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyONe().then(console.log);