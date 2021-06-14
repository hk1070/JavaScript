'use strict';

/* 
Optional Chaining (ES11)
  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining
*/

{
    const person1 = {
        name: 'Ellie',
        job: {
            title: 'S/W Engineer',
            manager: {
                name: 'Bob',
            },
        },
    };
    const person2 = {
        name: 'Bob',
    };

    // ❌❌❌❌❌
    {
        function printManager(person){
            console.log(person.job.manager.name);
        }

        printManager(person1);
        // printManager(person2);

    }

    // ❌❌❌
    {
        function printManager(person) {
          console.log(
            person.job
              ? person.job.manager
                ? person.job.manager.name
                : undefined
              : undefined
          );
        }
        printManager(person1);
        printManager(person2);
      }
      // ❌
      {
        function printManager(person) {
          console.log(person.job && person.job.manager && person.job.manager.name);
        }
        printManager(person1);
        printManager(person2);
      }

      // 💡
      {
          function printManager(person){
              console.log(person.job?.manager?.name);
          }
          printManager(person1);
          printManager(person2);
      }
      console.clear();
}
/* 
Nullish Coalescing Operator (ES11)
 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
*/
{
 // Logical OR operator
  // false: false, '', 0, null, undefined
  // 앞에 있는 값이 false 일 때만 뒤의 것이 실행
  {
    const name = 'Ellie';
    const userName = name || 'Guest';
    console.log(userName);
  }

  {
      const name =null;
      const userName = name || 'Guest';
      console.log(userName);
  }

  // ❌  
  // 문자열이 비어있는 경우에도 false로 간주
  // 사용자가 아무런 이름을 쓰고 싶지 않을때에도 실행됨
  {
    const name ='';
    const userName = name || 'Guest';
    console.log(userName);

    // 0도 false로 간주되어 undefined가 할당됨
    const num =0;
    const message = num || 'undefined';
    console.log(message);
}
// 💡
{
    const name = '';
    const userName = name ?? 'Guest';
    console.log(userName);

    const num = 0;
    const message = num ?? 'Guest';
    console.log(message);
}

}