'use strict';


// 1. Object to JSON
// Stinrgyfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banna']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'brown',
    size: 'null',
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`)
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);



// 2. JSON to Object
// parse(json)
console.clear();

json = JSON.stringify(rabbit);
console.log(json);

const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
//obj.jump(); -> error (json으로 변환되지 않았었음)

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());


// review

const cat = {
    name: 'kiki',
    color: 'yellow',
    birthDate: new Date()
}

let json1 = JSON.stringify(cat);
console.log(json1);

json1 = JSON.stringify(cat, ['name', 'birthDate']);
console.log(json1);

json1 = JSON.stringify(cat, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'color' ? 'white' : value;
});
console.log(json1);

console.log('--------------');

//json1 = JSON.parse(json1);
//console.log(json1);

const obj1 = JSON.parse(json1, (key, value)=>{
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate'? new Date(): value;
});

console.log(obj1.birthDate.getDate());