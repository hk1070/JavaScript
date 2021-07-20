// 함수 바인딩
// https://ko.javascript.info/bind
// setTimeout에 메서드를 전달할 때나, 객체 메서드를 콜백으로 전달할 때 ’this 정보가 사라지는’ 문제가 발생

let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};

setTimeout(user.sayHi, 1000); // Hello, undefined!

let a = user.sayHi;
setTimeout(a,1000); // Hello, undefined! 위와 동일

// 해결방법
// 1. 래퍼함수 사용 
setTimeout(()=>user.sayHi(),1000); // Hello, John!
// setTimeout이 트리거 되기 전에(1초가 지나기 전에) user가 변경되면, 
// 변경된 객체의 메서드를 호출하게 되기 때문에 좋지 않음

// 2. bind 사용

let sayHi = user.sayHi.bind(user); 

sayHi(); // Hello, John!

setTimeout(sayHi, 1000); // Hello, John!
