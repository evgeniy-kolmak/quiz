export const getChecked = (...values) => {
  const [collection, radioBtn, btn] = values;
  collection.forEach((item, i) => item.addEventListener('click', function () {
    radioBtn[i].checked = 'checked';
    collection.forEach(item => item.classList.remove('focus'));
    item.classList.add('focus')
    radioBtn.forEach(radio => {
      if (radio.checked) {
        btn.disabled = false;
        btn.style.opacity = '1';
      }
    })
  }));
}

