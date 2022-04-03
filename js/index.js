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

// Второй шаг
const budgetSlider = document.querySelector('.budget-content__slider');
const budgetOutput = document.querySelector('.budget-content__output');



btnStart.addEventListener('click', function () {
  header.classList.toggle('visible');
  formQuiz.classList.toggle('visible');
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
    header.classList.toggle('visible');
    formQuiz.classList.toggle('visible');
  } else {
    progressBarItems[index].classList.remove('active-progress');
    progressBarImage[index].classList.remove('active-progress__img');
  }

  formQuizItem[index - 1].classList.add('step-visible');
  formQuizItem[index].classList.remove('step-visible');
  firstStepCard[0].style.background = '#2A2A2A'
  firstStepCard[1].style.background = '#2A2A2A'
  btnNext.disabled = true;
  btnNext.style.opacity = '.5';

});


firstStepCard[0].addEventListener('click', function () {
  typeDesign[0].checked = 'checked';
  firstStepCard[0].style.background = '#171717'
  firstStepCard[1].style.background = '#2A2A2A'
  firstStepCard[1].style.transitionDuratio = '0.4s';
  firstStepCard[0].style.transitionDuratio = '0.4s';
  if (typeDesign[0].checked === true) {
    btnNext.disabled = false;
    btnNext.style.opacity = '1';
  }


});

firstStepCard[1].addEventListener('click', function () {
  typeDesign[1].checked = 'checked';
  firstStepCard[1].style.background = '#171717'
  firstStepCard[0].style.background = '#2A2A2A'
  firstStepCard[0].style.transitionDuration = '0.4s';
  firstStepCard[1].style.transitionDuration = '0.4s';
  if (typeDesign[1].checked === true) {
    btnNext.disabled = false;
    btnNext.style.opacity = '1';
  }

});


budgetSlider.addEventListener('input', function () {
  budgetOutput.textContent = budgetSlider.value + '$';
  if (budgetSlider.value > '1550' || budgetSlider.value < '1550') {
    btnNext.disabled = false
    btnNext.style.opacity = '1';
  }
})