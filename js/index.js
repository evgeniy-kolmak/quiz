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



btnStart.addEventListener('click', function () {
  header.classList.toggle('visible');
  formQuiz.classList.toggle('visible');
  progressBarItems[index].classList.add('active-progress')
  progressBarImage[index].classList.add('active-progress__img');
  index = 1;
});


btnNext.addEventListener('click', function () {
  if (index === progressBarItems.length) {
    window.location.href = '../success.html'
  } else {
    progressBarItems[index].classList.add('active-progress');
    progressBarImage[index].classList.add('active-progress__img');
    index += 1;
  }
  const activeProgress = document.querySelectorAll('.active-progress');
  const persentNext = ((activeProgress.length - 1) / (progressBarItems.length - 1)) * 100 + '%';
  progressSuccess.style.width = persentNext;

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

});

