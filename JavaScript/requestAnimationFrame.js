'use strict';
// 참조
// https://developer.mozilla.org/ko/docs/Web/API/Window/requestAnimationFrame
// https://velog.io/@thms200/Event-Loop-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%A3%A8%ED%94%84
/* requestAnimationFrame
브라우저에게 수행하기를 원하는 애니메이션을 알리고 다음 리페인트가 진행되기 전에 해당 애니메이션을 업데이트하는 함수를 호출하게 합니다. 이 메소드는 리페인트 이전에 실행할 콜백을 인자로 받습니다. */

window.requestAnimationFrame(callback);
// requestAnimationFrame API가 실행되면 콜백이 Animation Frames으로 담깁니다.

const button = document.querySelector('button');
button.addEventListener('click', () => {
  requestAnimationFrame(() => {
    document.body.style.backgroundColor = 'blue';
  });
  requestAnimationFrame(() => {
    document.body.style.backgroundColor = 'green';
  });
});


console.log("script start");

setTimeout(function() {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(function() {
  console.log("promise1");
}).then(function() {
  console.log("promise2");
});

requestAnimationFrame(function() {
    console.log("requestAnimationFrame");
})
console.log("script end");

// 출력결과 
script start
script end
promise1
promise2
requestAnimationFrame
setTimeout