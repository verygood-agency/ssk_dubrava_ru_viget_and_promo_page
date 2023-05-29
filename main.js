window.addEventListener('load', function() {
  var widget = document.querySelector('.pool-soon');
  var closeButton = document.querySelector('.pool-soon__close-btn');

  widget.classList.add('show');

  closeButton.addEventListener('click', function() {
    widget.classList.remove('show');
  });
});
