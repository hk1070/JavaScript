'use strict';

document.addEventListener('wheel', event => {
  console.log('scrolling');
  //event.preventDefault();
},  {passive: true});
// 만약 스크롤을 취소하고 싶다면 passive:false라는 옵션을 사용
// passive: true일 경우, listener에서 지정한 함수가 preventDefault()를 호출하지 않음을 나타내는 Boolean입니다. 
// passive listener 가 preventDefault()를 호출하면 user agent는 콘솔 경고를 생성하는 것 외의 작업은 수행하지 않습니다.
// https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener


checkbox.addEventListener('click', event => {
  console.log('checked');
  event.preventDefault();
});


