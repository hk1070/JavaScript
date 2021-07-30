'use strict';

// https://www.youtube.com/watch?v=_DLhUBWsRtw&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=6
// https://ko.javascript.info/property-accessors
// 접근자 프로퍼티(accessor property)
// 접근자 프로퍼티의 본질은 함수인데, 이 함수는 값을 획득(get)하고 설정(set)하는 역할을 담당하며 외부 코드에서는 함수가 아닌 일반적인 프로퍼티처럼 보입니다.

// 접근자 프로퍼티는 'getter(획득자)'와 ‘setter(설정자)’ 메서드로 표현됩니다. 객체 리터럴 안에서 getter와 setter 메서드는 get과 set으로 나타낼 수 있습니다.

// 예제 1 //////////////////////
let user = {
  name: 'John',
  surname: 'Smith',

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  },
};
// split() ->  String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눕니다.
// 주어진 값을 사용해 set fullName이 실행됩니다.
user.fullName = 'Alice Cooper';

console.log(user.name); // Alice
console.log(user.surname); // Cooper

// 예제 2 ///////////////////////
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value < 0 ? 0 : value; // -> 0
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age); // -> 0

const user2 = new User('John', 'Smith', 3);
console.log(user2.firstName);
console.log(user2.lastName);
console.log(user2.age);
