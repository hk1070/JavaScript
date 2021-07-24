'use strict';
// https://ko.javascript.info/microtask-queue
// 비동기 작업을 처리하려면 적절한 관리가 필요.
// 이를 위해 ECMA에선 PromiseJobs라는 내부 큐(internal queue)를 명시.
//  V8 엔진에선 이를 '마이크로태스크 큐(microtask queue)'라고 부르기 때문에 이 용어가 좀 더 선호됩니다.
// 마이크로태스크 큐는 먼저 들어온 작업을 먼저 실행(FIFO, first-in-first-out).
// 실행할 것이 아무것도 남아있지 않을 때만 마이크로태스크 큐에 있는 작업이 실행되기 시작

function handleClick() {
  console.log('handleClick');
  Promise.resolve(0) //
    .then(() => {
      console.log('then');
      handleClick();
    });
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
  handleClick();
});
