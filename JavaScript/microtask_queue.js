'use strict';
// https://ko.javascript.info/microtask-queue
// 비동기 작업을 처리하려면 적절한 관리가 필요.
// 이를 위해 ECMA에선 PromiseJobs라는 내부 큐(internal queue)를 명시.
//  V8 엔진에선 이를 '마이크로태스크 큐(microtask queue)'라고 부르기 때문에 이 용어가 좀 더 선호됩니다.
// 마이크로태스크 큐는 먼저 들어온 작업을 먼저 실행(FIFO, first-in-first-out).
// 실행할 것이 아무것도 남아있지 않을 때만 마이크로태스크 큐에 있는 작업이 실행되기 시작

console.log('script start');

setTimeout(function () {
  console.log('setTimeout');
}, 0);

Promise.resolve()
  .then(function () {
    console.log('promise1');
  })
  .then(function () {
    console.log('promise2');
  });

console.log('script end');

// 출력결과
script start
script end
promise1
promise2
setTimeout

// 이벤트 루프는 마이크로태스크 큐의 모든 태스크들을 처리한 다음, 태스크 큐의 태스크들을 처리
// promise가 마이크로 태크스 큐에 등록되기 때문에 setTimeout 보다 먼저 실행됨