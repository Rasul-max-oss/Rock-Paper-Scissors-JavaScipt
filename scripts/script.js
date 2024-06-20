const titleGame = document.getElementById('title_game')
const computerChoice = document.getElementById('computerChoice')
const userChoice = document.getElementById('userChoice')
const stoneButton = document.getElementById('stoneButton')
const paperButton = document.getElementById('paperButton')
const scissorsButton = document.getElementById('scissorsButton')
const inputName = document.getElementById('inputName')
const userName = document.getElementById('userName')
const play = document.getElementById('play')
const wrappermain = document.getElementById('main')

play.addEventListener('click', function () {
  var dialog = document.getElementById('dialog')
  //проверка на пустую строку
  if (inputName.value === '') {
    let error = document.getElementById('dialog-error')
    error.style.display = 'block'
  } else {
    //принимаем имя пользователя
    userName.innerHTML = inputName.value
    dialog.classList.add('fadeOut')
    setTimeout(function () {
      //загружаем остальной контент
      dialog.style.display = 'none'
      dialog.classList.remove('fadeOut')
      wrappermain.style.display = 'block'
    }, 300) // Время анимации в миллисекундах (0.3 секунды)
  }
})

//Функция для случайного выбора компьютера
function getComputerChoice() {
  var choices = ['камень', 'ножницы', 'бумага']
  var computerChoice = choices[Math.floor(Math.random() * choices.length)]
  return computerChoice
}

//Данный метод determineWinner используется для определения победителя в игре
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    titleGame.innerHTML = 'Ничья!'
  } else if (
    (userChoice === 'камень' && computerChoice === 'ножницы') ||
    (userChoice === 'ножницы' && computerChoice === 'бумага') ||
    (userChoice === 'бумага' && computerChoice === 'камень')
  ) {
    titleGame.style.color = 'green'
    titleGame.innerHTML = 'Победа Игрока'
  } else {
    titleGame.style.color = 'red'
    titleGame.innerHTML = 'Победа компьютера'
  }
}

//Метод выбирает изображение в зависимости от выбора компьютера.
function distribution_image(computer) {
  if (computer === 'бумага') {
    computerChoice.src = '../images/paper.png'
  } else if (computer === 'ножницы') {
    computerChoice.src = '../images/scicess.png'
  } else {
    computerChoice.src = '../images/stone.png'
  }
}

function animation_buttons() {
  computerChoice.classList.add('button-animation')
  userChoice.classList.add('button-animation')

  // Добавляем класс с анимацией на короткий период времени и удаляем его после окончания
  setTimeout(() => {
    computerChoice.classList.remove('button-animation')
    userChoice.classList.remove('button-animation')
  }, 300) // Указываем время анимации в миллисекундах
}

paperButton.addEventListener('click', function () {
  //границы при выборе
  paperButton.style.border = '3px solid black'
  scissorsButton.style.border = 'none'
  stoneButton.style.border = 'none'

  userChoice.src = '../images/paper.png'
  let user = 'бумага'
  let computer = getComputerChoice()
  animation_buttons()
  distribution_image(computer)
  determineWinner(user, computer)
})

stoneButton.addEventListener('click', function () {
  //границы при выборе
  stoneButton.style.border = '3px solid black'
  scissorsButton.style.border = 'none'
  paperButton.style.border = 'none'

  userChoice.src = '../images/stone.png'
  let user = 'камень'
  let computer = getComputerChoice()
  animation_buttons()
  distribution_image(computer)
  determineWinner(user, computer)
})

scissorsButton.addEventListener('click', function () {
  //границы при выборе
  stoneButton.style.border = 'none'
  scissorsButton.style.border = '3px solid black'
  paperButton.style.border = 'none'

  userChoice.src = '../images/scicess.png'
  let user = 'ножницы'
  let computer = getComputerChoice()
  animation_buttons()
  distribution_image(computer)
  determineWinner(user, computer)
})
