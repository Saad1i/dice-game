const openNameModal = function () {
  btnCloseNameModal.classList.remove('hidden');
  modal0El.classList.remove('modal1-hidden');
  overlay0El.classList.remove('overlay1-hidden');
};

const closeNameModal = function () {
  modal0El.classList.add('modal1-hidden');
  overlay0El.classList.add('overlay1-hidden');
};

const toggleModal = () => {
  modal0El.classList.add('modal1--hidden');
  overlay0El.classList.add('overlay1--hidden');
};
for (let i = 0; i < btnOpenNameModal.length; i++)
  btnOpenNameModal.addEventListener('click', openNameModal);

overlay0El.addEventListener('click', toggleModal);
document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal0El.classList.add('modal1--hidden')) {
    toggleModal();
  }
});

btnOpenNameModal.addEventListener('click');

overlay0El.addEventListener('click', toggleModal);

btnDone.addEventListener('click', playerNames);
