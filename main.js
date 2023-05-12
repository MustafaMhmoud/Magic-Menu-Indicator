const lest = document.querySelectorAll('.list');

function activ() {
  lest.forEach((item) =>
  item.classList.remove('active'));
  this.classList.add('active');
}
  lest.forEach((item) =>
  item.addEventListener('click',activ));