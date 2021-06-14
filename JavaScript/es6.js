'use strict';

/* 
Shorthand property names
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
*/

{
    const ellie1 = {
        name: 'Ellie',
        age: '18',
    };

    const name = 'Ellie';
    const age = '18';

    // ❌
    const ellie2 = {
        name: name,
        age: age,
    };

    // 키와 값이 동일할 때는 아래와 같이 축약해서 작성 가능
    const ellie3 = {
        name,
        age,
    };

    console.log(ellie1, ellie2, ellie3);
}

/* 
Destructuring Assignment (구조분해 할당)
배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment 
*/

{
    // object
    const student = {
        name: 'Anna',
        level: 1,
    };

    // ❌
    {
       const name = student.name;
       const level = student.level;
       console.log(name, level);

    }

    // 💡 object 키에 있는 이름을 괄호안에 적용하고 = student로 작성
    {
        const { name, level } = student;
        console.log(name, level);

    //  다른 이름으로도 선언 가능
        const {name: studentName, level: studentLevel} = student;
        console.log(studentName, studentLevel);

    }

    // 배열에서도 동일하게 사용 가능
    {
        //array
        const animals = ['🐶', '🐱'];

        // ❌
        const first = animals[0];
        const second = animals[1];
        console.log(first, second);

        // 💡
        {
            const [first, second] = animals;
            console.log(first, second);
        }
    }
}

/*
 Spread Syntax (전개구문)
 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */
 {
    const obj1 = { key: 'key1' };
    const obj2 = { key: 'key2' };
    const array = [obj1, obj2];

    // ...을 사용하여 간단하게 array 복사 가능
    const arrayCopy = [...array];
    console.log(array, arrayCopy);

    // 값 추가
    const arrayCopy2 = [...array, {key: 'key3'}];
    obj1.key = 'newKey';
    console.log(array, arrayCopy, arrayCopy2);
    // 주소의 참조 값만 복사하기 때문에
    // 원래의 object를 변경하게 되면 전부다 영향이 갈 수 있다

    // object copy
    const obj3 = {...obj1};
    console.log(obj3);

    // array concatenation
    const fruits1 = ['🍑', '🍓'];
    const fruits2 = ['🍌', '🥝'];
    const fruits = [...fruits1, ...fruits2];
    console.log(fruits);

    // object merge
    const dog1 = { dog1: '🐕' };
    const dog2 = { dog2: '🐶' };
    const dog = { ...dog1, ...dog2 };
    console.log(dog);

    
    // 동일한 키를 가지고 있을때는 가장 마지막 object의 값이 덮어 씌워진다 
    const cat1 = { cat: '🐱'};
    const cat2 = { cat: '😻'};
    const cat = { ...cat1, ...cat2 };
    console.log(cat);
    console.clear();


 }

 /* 
 Default parameters (기본값 매개변수)
 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters 
 */

 {
// ❌
{
    function printMessage(message) {
        if(message == null){
            message = 'default message';
        }
      console.log(message);
    }

    printMessage('hello');
    printMessage();
  }

 // 💡
 // 인자 다음에 기본적으로 원하는 초기값을 지정
{
    function printMessage(message = 'default message') {
      console.log(message);
    }

    printMessage('hello');
    printMessage();
}
 }

 /* 
 Ternary Operator(삼항 조건 연산자)
 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */

 {
    const isCat = true;
    // ❌
    {
      let component;
      if (isCat) {
        component = '😸';
      } else {
        component = '🐶';
      }
      console.log(component);
    }

     // 💡
  {
      const component = isCat ? '😸' : '🐶';
      console.log(component);
      console.log(isCat ? '😸' : '🐶');

  }

 }

 /* 
 Template Literals
 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals 
 */

 {
    const weather = '🌥️';
    const temparature = '16°C';

    // ❌
    console.log( 'Today weather is ' + weather + ' and temparature is ' + temparature + '.');

    // 💡
    console.log(`Today weather is ${weather} and temparature is ${temparature}.`)
 }