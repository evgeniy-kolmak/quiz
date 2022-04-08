import { getChecked, getScroll, isActive, formValidate } from "./functions.js";

// Кнопки
const btnStart = document.querySelector('.btn-start');
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');
const btnSend = document.querySelector('.btn-send')

// Секции
const header = document.querySelector('.header');
const formQuiz = document.querySelector('.form-quiz');

// Шаг квиза
const progressBarItems = document.querySelectorAll('.progress-bar__item');
const progressBarImage = document.querySelectorAll('.progress-bar__img');
let index = 0;

// Прогресс
const progressSuccess = document.querySelector('.progress-success');

// Первый шаг
const firstStepCard = document.querySelectorAll('.first-step-card');
const typeDesign = document.querySelectorAll('.type-design');
const formQuizItem = document.querySelectorAll('.form-quiz-item');
getChecked(firstStepCard, typeDesign, btnNext);


// Второй шаг
const budgetSlider = document.querySelector('.budget-content__slider');
const budgetOutput = document.querySelector('.budget-content__output');
getScroll(budgetSlider, budgetOutput, btnNext)

// Третий шаг
const thirdStepCard = document.querySelectorAll('.third-step-card');
const typeLevel = document.querySelectorAll('.type-level');
getChecked(thirdStepCard, typeLevel, btnNext);

//Четвертый шаг
const fourthStepCard = document.querySelectorAll('.fourth-step-card');
const typeSite = document.querySelectorAll('.type-site');
getChecked(fourthStepCard, typeSite, btnNext);

//Шаг пятый
const inputPhone = document.querySelector('.fifth-step-input__phone');
formValidate(inputPhone, btnSend)


btnStart.addEventListener('click', function () {
  header.classList.remove('visible');
  formQuiz.classList.add('visible');
  progressBarItems[index].classList.add('active-progress')
  progressBarImage[index].classList.add('active-progress__img');
  formQuizItem[index].classList.add('step-visible');
  index = 1;
  isActive(false, btnNext)
});

btnNext.addEventListener('click', function (event) {
  event.preventDefault();
  if (index === progressBarItems.length - 1) {
    btnNext.style.display = 'none';
    btnSend.style.display = 'inline-block';
    isActive(false, btnSend);
  }

  progressBarItems[index].classList.add('active-progress');
  progressBarImage[index].classList.add('active-progress__img');
  formQuizItem[index].classList.add('step-visible');
  formQuizItem[index - 1].classList.remove('step-visible');
  index += 1;

  const activeProgress = document.querySelectorAll('.active-progress');
  const persentNext = ((activeProgress.length - 1) / (progressBarItems.length - 1)) * 100 + '%';
  progressSuccess.style.width = persentNext;
  isActive(false, btnNext)
});

btnPrev.addEventListener('click', function (event) {
  event.preventDefault();
  index -= 1;
  const activeProgress = document.querySelectorAll('.active-progress');
  const persentPrev = ((activeProgress.length - 1) / (progressBarItems.length - 1)) * 100 - 25 + '%';
  progressSuccess.style.width = persentPrev;
  if (index < 1) {
    header.classList.add('visible');
    formQuiz.classList.remove('visible');
  } else if (index === progressBarItems.length - 1) {
    btnNext.style.display = 'inline-block';
    btnSend.style.display = '';
  }

  progressBarItems[index].classList.remove('active-progress');
  progressBarImage[index].classList.remove('active-progress__img');
  formQuizItem[index - 1].classList.add('step-visible');
  formQuizItem[index].classList.remove('step-visible');

  document.querySelectorAll('.form-quiz-card').forEach(item => item.classList.remove('focus'));
  isActive(false, btnNext)

});

