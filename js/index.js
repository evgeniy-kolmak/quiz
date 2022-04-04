import { getChecked } from "./functions.js";

// Кнопки
const btnStart = document.querySelector('.btn-start');
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');

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

// Третий шаг
const thirdStepCard = document.querySelectorAll('.third-step-card');
const typeLevel = document.querySelectorAll('.type-level');
getChecked(thirdStepCard, typeLevel, btnNext);

btnStart.addEventListener('click', function () {
  header.classList.remove('visible');
  formQuiz.classList.add('visible');
  progressBarItems[index].classList.add('active-progress')
  progressBarImage[index].classList.add('active-progress__img');
  formQuizItem[index].classList.add('step-visible');
  index = 1;
  btnNext.disabled = true;
  btnNext.style.opacity = '.5'
});

btnNext.addEventListener('click', function () {
  if (index === progressBarItems.length) {
    window.location.href = '../success.html'
  } else {
    progressBarItems[index].classList.add('active-progress');
    progressBarImage[index].classList.add('active-progress__img');
    formQuizItem[index].classList.add('step-visible');
    formQuizItem[index - 1].classList.remove('step-visible');
    index += 1;

  }
  const activeProgress = document.querySelectorAll('.active-progress');
  const persentNext = ((activeProgress.length - 1) / (progressBarItems.length - 1)) * 100 + '%';
  progressSuccess.style.width = persentNext;

  btnNext.disabled = true;
  btnNext.style.opacity = '.5';
});

btnPrev.addEventListener('click', function () {
  index -= 1;
  const activeProgress = document.querySelectorAll('.active-progress');
  const persentPrev = ((activeProgress.length - 1) / (progressBarItems.length - 1)) * 100 - 25 + '%';
  progressSuccess.style.width = persentPrev;
  if (index < 1) {
    header.classList.add('visible');
    formQuiz.classList.remove('visible');
  } else {
    progressBarItems[index].classList.remove('active-progress');
    progressBarImage[index].classList.remove('active-progress__img');
  }

  formQuizItem[index - 1].classList.add('step-visible');
  formQuizItem[index].classList.remove('step-visible');

  document.querySelectorAll('.form-quiz-card').forEach(item => item.classList.remove('focus'));

  btnNext.disabled = true;
  btnNext.style.opacity = '.5';

});


//  Второй шаг 
budgetSlider.addEventListener('input', function () {
  budgetOutput.textContent = budgetSlider.value + '$';
  if (budgetSlider.value > '1550' || budgetSlider.value < '1550') {
    btnNext.disabled = false
    btnNext.style.opacity = '1';
  }
});