import { createPromocode } from './functions.js'

const promocode = document.querySelector('.promocode');
promocode.textContent = createPromocode();

const userName = document.querySelector('.user-name');
userName.textContent = sessionStorage.userName;

