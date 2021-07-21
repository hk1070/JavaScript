'use strict';

// https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API
// Intersection Observer API는 타겟 요소와 상위 요소 또는
// 최상위 document 의 viewport 사이의 intersection 내의 변화를 비동기적으로 관찰하는 방법

let options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0,
};

let observer = new IntersectionObserver(callback, options);
// threshold: 1.0 은 대상 요소가 root 에 지정된 요소 내에서 100% 보여질 때 콜백이 호출될 것을 의미

// root : 대상 객체의 가시성을 확인할 때 사용되는 뷰포트 요소
//        기본값은 브라우저 뷰포트이며, root 값이 null 이거나 지정되지 않을 때 기본값으로 설정
// rootMargin : root 가 가진 여백. 이 속성의 값은 CSS의 margin 속성과 유사
// threshold : observer의 콜백이 실행될 대상 요소의 가시성 퍼센티지를 나타내는 단일 숫자 혹은 숫자 배열
//             기본값은 0이며(이는 요소가 1픽셀이라도 보이자 마자 콜백이 실행됨을 의미).
//             1.0은 요소의 모든 픽셀이 화면에 노출되기 전에는 콜백을 실행시키지 않음을 의미
