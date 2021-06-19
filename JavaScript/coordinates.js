'use strict';

const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');

/* 
document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    console.log(`${x}, ${y}`);

    vertical.style.left = `${x}px`;
    horizontal.style.top = `${y}px`;
});
 */

    document.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;
        console.log(`${x}, ${y}`);

        vertical.style.transform = `translateX(${x}px)`;
        horizontal.style.transform = `translateY(${y}px)`;
    });