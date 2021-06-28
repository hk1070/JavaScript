'use strict';

document.addEventListener('wheel', event => {
  console.log('scrolling');
  event.preventDefault();
},  {passive: false});
// 만약 스크롤을 취소하고 싶다면 passive:false라는 옵션을 사용
// 하지만 scrolling과 기본적으로  passive가 true 되어 있는 것들은
// {passive: false} 를 사용하지 않는 것이 좋음
const checkbox = document.querySelector('input');
checkbox.addEventListener('click', event => {
  console.log('checked');
  event.preventDefault();
});
