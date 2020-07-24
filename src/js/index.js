import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */


const textarea = document.querySelector('.textarea-js');
const load = document.querySelector('.load-js');
const save = document.querySelector('.save-js');

save.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('entry', textarea.value);
});


load.addEventListener('click', (e) => {
    e.preventDefault();
    textarea.value = localStorage.getItem('entry');
});
