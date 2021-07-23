'use strict';
// https://developer.mozilla.org/ko/docs/Web/API/Window/requestAnimationFrame

/* requestAnimationFrame
브라우저에게 수행하기를 원하는 애니메이션을 알리고 다음 리페인트가 진행되기 전에 해당 애니메이션을 업데이트하는 함수를 호출하게 합니다. 이 메소드는 리페인트 이전에 실행할 콜백을 인자로 받습니다. */

window.requestAnimationFrame(callback);

const button = document.querySelector('button');
button.addEventListener('click', () => {
  requestAnimationFrame(() => {
    document.body.style.backgroundColor = 'blue';
  });
  requestAnimationFrame(() => {
    document.body.style.backgroundColor = 'green';
  });
});

let start = null;
let element = document.getElementById('SomeElementYouWantToAnimate');
element.style.position = 'absolute';

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  element.style.left = Math.min(progress / 10, 200) + 'px';
  if (progress < 2000) {
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
