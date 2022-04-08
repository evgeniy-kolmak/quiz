$('.form-quiz-items').validate({
  messages: {
    user_name: {
      required: "Пожалуйста, заполните это поле",
      minlength: "Имя не менее 2 символов",
      maxlength: "Имя не более 11 символов",
    },

    user_phone: {
      required: "Пожалуйста, заполните это поле",
      minlength: "Телефон не менее 11 символов",
      maxlength: "Поле содержит более 14 символов",
      number: "Некорректный ввод (только цифры)"

    },
  },
});