'use strict';

const special = document.querySelector('.special');

const scrollBy = document.querySelector('.scroll-by');
const scrollTo = document.querySelector('.scroll-to');
const scrollInto = document.querySelector('.scroll-into');

scrollBy.addEventListener('click', () => {
    // window.scrollBy(x-coord, y-coord) 지정된 값만큼 이동
    // window.scrollBy(0, 100);
    window.scrollBy({
        top: 100,
        left: 0,
        behavior: 'smooth'
    });
});

scrollTo.addEventListener('click', () => {
    // window.scrollTo(x-coord, y-coord) 지정된 위치로 이동
    window.scrollTo(0, 100);
});
scrollInto.addEventListener('click', () => {
    // element.scrollIntoView() 특정 요소 위치로 이동
    special.scrollIntoView();
});