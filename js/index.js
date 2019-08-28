// Your code goes here
const btns = document.querySelectorAll('.btn');
const colorchange = document.querySelector('.destination');
const hide = document.querySelector('.content-destination');
const makeBig = document.querySelector('.big');

const stopNav = document.querySelectorAll('.nav-link');

const para = document.querySelector('.selectHL');
const makeHL = document.querySelector('.selectHL');

stopNav[0].addEventListener('click', function(event) {
event.preventDefault();
})
stopNav[1].addEventListener('click', function(event) {
event.preventDefault();
})

stopNav[2].addEventListener('click', function(event) {
event.preventDefault();
})

stopNav[3].addEventListener('click', function(event) {
event.preventDefault();
})

btns[0].addEventListener('mouseover', function(event) {
colorchange.classList.toggle('tealchange');
})

btns[1].addEventListener('dblclick', function(event) {
hide.classList.toggle('hidden');
})

btns[2].addEventListener('mouseleave', function(event) {
makeBig.classList.toggle('huge');
})

para.addEventListener('select', function(event) {
makeHL.classList.toggle('tealHl');
})