function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Ex. 1

function createDaysOfDec() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const monthDaysList = document.querySelector('#days');
  for (let i = 0; i < dezDaysList.length; i += 1) {
    const monthDay = dezDaysList[i];
    const monthDayItem = document.createElement('li');
    monthDayItem.innerHTML = monthDay;
    monthDayItem.setAttribute('class', 'day');
    if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31) {
      monthDayItem.classList.add('holiday');
    }
    if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25) {
      monthDayItem.classList.add('friday');
    }
    monthDaysList.appendChild(monthDayItem);
  }
}

createDaysOfDec();

// Ex. 2

function createBtnHoliday(string) {
  const btnHoliday = document.createElement('button');
  btnHoliday.setAttribute('id', 'btn-holiday')
  btnHoliday.innerHTML = string;
  const btnsCointainer = document.querySelector('.buttons-container')
  btnsCointainer.appendChild(btnHoliday);
}

createBtnHoliday('Feriados')

// Ex. 3

function displayHolidays() {
  let getBtnHoliday = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';
  getBtnHoliday.addEventListener('click', function () {
    for (let i = 0; i < getHolidays.length; i += 1) {
      if (getHolidays[i].style.backgroundColor === setNewColor) {
        getHolidays[i].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[i].style.backgroundColor = setNewColor;
      }
    }
  })
}

displayHolidays();

// Ex. 4

function createBtnFriday(string) {
  const btnFridays = document.createElement('button');
  btnFridays.setAttribute('id', 'btn-friday')
  btnFridays.innerHTML = string;
  const btnsCointainer = document.querySelector('.buttons-container');
  btnsCointainer.appendChild(btnFridays);
}

createBtnFriday('Sexta-feira');

// Ex. 5

function displayFridays(fridays) {
  let getBtnFridays = document.getElementById('btn-friday');
  let getFridays = document.getElementsByClassName('friday');
  let fridayText = 'Sexta-feira';
  getBtnFridays.addEventListener('click', function () {
    for (let i = 0; i < getFridays.length; i += 1) {
      if (getFridays[i].innerHTML === fridayText) {
        getFridays[i].innerHTML = fridays[i];
      } else {
        getFridays[i].innerHTML = fridayText;
      }
    }
  })
}
let fridays = [4, 11, 18, 25];
displayFridays(fridays);

// Ex. 6

function zoomIn() {
  let day = document.querySelectorAll('.day');
  for (let i = 0; i < day.length; i += 1) {
    day[i].addEventListener('mouseover', function (event) {
      event.target.style.fontSize = '23px';
      event.target.style.fontWeight = '600';
    })
  }
}

function zoomOut() {
  let day = document.querySelectorAll('.day');
  for (let i = 0; i < day.length; i += 1) {
    day[i].addEventListener('mouseleave', function (event) {
      event.target.style.fontSize = '20px';
      event.target.style.fontWeight = '200';
    })
  }
}

zoomIn();
zoomOut();

// Ex. 7

function createTask(string) {
  const myTasks = document.getElementsByClassName('my-tasks')[0];
  const task = document.createElement('span');
  task.innerHTML = string;
  myTasks.appendChild(task);
}

createTask('Fazer o calendário Trybe');

// Ex. 8

function applyColorToTask(string) {
  const myTasks = document.getElementsByClassName('my-tasks')[0];
  const taskDiv = document.createElement('div');
  taskDiv.setAttribute('id', 'taskDiv');
  taskDiv.classList.add('task');
  taskDiv.style.backgroundColor = string;
  myTasks.appendChild(taskDiv);
}

applyColorToTask('red');

// Ex. 9

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let tasks = document.querySelector('.task');

  tasks.addEventListener('click', function (event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();

// Ex. 10

function changeDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;

  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (selectedTask.length !== 0 && eventTargetColor === taskColor) {
      event.target.style.color = 'rgb(119,119,119)'
    }
  })
}

changeDayColor();

// Ex. Bonus (not done);

// function addNewTask() {
//   let getInputField = document.querySelector('#task-input');
//   let addInputButton = document.querySelector('#btn-add');
//   let getTaskList = document.querySelector('.task-list');

//   addInputButton.addEventListener('click', function() {
//     if (getInputField.value.length > 0) {
//       let newLi = document.createElement('li');
//       newLi.innerText = getInputField.value;

//       getTaskList.appendChild(newLi);
//       getInputField.value = '';
//     } else {
//       alert('Error: Digite ao menos 1 caractere.');
//     }
//   })

//   getInputField.addEventListener('keyup', function(event) {
//     if (event.key === 'Enter' && getInputField.value.length > 0) {
//       let newLi = document.createElement('li');
//       newLi.innerText = getInputField.value;

//       getTaskList.appendChild(newLi);
//       getInputField.value = '';
//     }
//   });
// };

// addNewTask();