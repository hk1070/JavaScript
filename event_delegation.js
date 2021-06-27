    'use strict';

    // Bad
    /* 
    const lis = document.querySelectorAll('li');
    lis.forEach(li => {
      li.addEventListener('click', ()=>{
        li.classList.add('selected');
      });
    });
 */
    // Good
    // 일일이 이벤트 리스너를 자식 노드에 추가하는 것보다 부모에 등록하는 것이 좋음
    // event에는 target과 currentTarget이라는 정보가 있으므로 유용하게 쓸 수 있음
    const ul = document.querySelector('ul');
    ul.addEventListener('click', event => {
        if (event.target.tagName == 'LI') {
            event.target.classList.add('selected');
        }
    });