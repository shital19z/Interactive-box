const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    boxes.forEach(b => {
      if (b !== box) b.classList.remove('expanded');
    });
    box.classList.toggle('expanded');
  });
});
