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

export const createPromocode = () => {
  const firsNumber = new Date().getDay();
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let result = 'W' + firsNumber;
  for (let i = 0; i < 6; i++) {
    const index = Math.round(Math.random() * 50);
    if (index > alphabet.length - 1) {
      result += index;
    } else {
      result += alphabet[index].toUpperCase();
    }
  }
  return result
}