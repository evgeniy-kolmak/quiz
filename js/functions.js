export const getChecked = (...values) => {
  const [collection, radioBtn, btn] = values;
  collection.forEach((item, i) => item.addEventListener('click', function () {
    radioBtn[i].checked = 'checked';
    collection.forEach(item => item.classList.remove('focus'));
    item.classList.add('focus')
    radioBtn.forEach(radio => {
      if (radio.checked) {
        isActive(radio, btn)
      }
    })
  }));
}

export const getScroll = (...values) => {
  const [slider, output, btn] = values;
  const defaultValue = slider.value;
  output.textContent = defaultValue + '$';
  slider.addEventListener('input', function () {
    output.textContent = slider.value + '$';
    if (slider.value > defaultValue || slider.value < defaultValue) {
      isActive(output, btn)
    }
  });

}

export const isActive = (value, btn) => {
  if (value) {
    btn.disabled = false;
    btn.style.opacity = '1';
  } else {
    btn.disabled = true;
    btn.style.opacity = '.5';
  }
}

export const formValidate = (...values) => {
  const [input, btn] = values;
  input.addEventListener('input', function () {
    if (input.value.length > input.attributes.minlength.nodeValue && input.value.length <= input.attributes.maxlength.nodeValue) {
      btn.disabled = false;
      btn.style.opacity = '1';
    } else {
      btn.disabled = true;
      btn.style.opacity = '.5';
    }
  });
}



// ФУНКЦИЯ
// const getValue = coll => {
//   for (const item of coll) {
//     if (item.checked) {
//       return item.value
//     }
//   }
// }
