const divs = document.querySelectorAll('div');

function logText(e) {
  console.log(this.classList.value);
  // stops bubbling at one each time
  // e.stopPropagation();
}

divs.forEach(div => div.addEventListener('click', logText, {
  capture: false,
  // only clicks once
  once: true,
}))

const button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log('click!');
}, {
  once: true
});
