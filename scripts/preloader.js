//функция для загрузки прелодера с задержкой в полсекунды
window.addEventListener('load', function () {
  var preloader = document.getElementById('preloader')
  setTimeout(function () {
    preloader.style.display = 'none'
  }, 2000) //задержка в миллисекундах
})
