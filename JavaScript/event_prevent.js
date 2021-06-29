'use strict';

document.addEventListener('wheel', event => {
  console.log('scrolling');
  //event.preventDefault();
},  {passive: true});
// 만약 스크롤을 취소하고 싶다면 passive:false라는 옵션을 사용
checkbox.addEventListener('click', event => {
  console.log('checked');
  event.preventDefault();
});
