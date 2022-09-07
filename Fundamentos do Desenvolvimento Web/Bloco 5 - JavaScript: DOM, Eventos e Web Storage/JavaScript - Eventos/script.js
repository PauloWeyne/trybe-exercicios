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
// Criando os dias com classes e id's:
  let decemberDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

  function createDaysOfMonth() {
    let decemberDaysOfMonth = document.querySelector('#days');

    for (let index = 0; index < decemberDays.length; index += 1) {

        let daysMonth = decemberDays[index];
        let daysMonthListItem = document.createElement('li');
        daysMonthListItem.innerHTML = daysMonth;

        if (daysMonth === 24 || daysMonth === 31) {
          daysMonthListItem.className = 'day holiday';
          decemberDaysOfMonth.appendChild(daysMonthListItem);
        } else if (daysMonth === 4 || daysMonth === 11 || daysMonth === 18) {
          daysMonthListItem.className = 'day friday';
          decemberDaysOfMonth.appendChild(daysMonthListItem);
        } else if (daysMonth === 25) {
          daysMonthListItem.className = 'day friday holiday';
          decemberDaysOfMonth.appendChild(daysMonthListItem);
        } else {
          daysMonthListItem.className = 'day';
          decemberDaysOfMonth.appendChild(daysMonthListItem);
        }
    }
  }
  createDaysOfMonth();

// Botão para marcar os feriados:
  function createHolidayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let buttonHoliday = document.createElement('button');
    let buttonHolidayId = 'btn-holiday';

    buttonHoliday.innerHTML = buttonName;
    buttonHoliday.id = buttonHolidayId;

    buttonContainer.appendChild(buttonHoliday)
  }
  createHolidayButton('Feriados');


  function displayHoliday() {
    let getHolidayBtn = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday');
    let holidayBackground = 'blue';
    let setNewColor = 'white';

    getHolidayBtn.addEventListener('click', function(){
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.background === setNewColor){
          getHolidays[index].style.background = holidayBackground;
        } else {
          getHolidays[index].style.background = setNewColor;
        }
      }
    })
  }
  displayHoliday();

// Botão para marcar os sextas-feiras:
  function createFridayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-friday';
  
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    buttonContainer.appendChild(newButton); 
  } 
  createFridayButton('Sexta-feira');

  function displayFridays(fridaysArray) {
    let getFridayButton = document.querySelector('#btn-friday');
    let fridays = document.getElementsByClassName('friday');
    let newFridayText = 'Sextou!';
  
    getFridayButton.addEventListener('click', function() {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newFridayText) {
          fridays[index].innerHTML = newFridayText;
      } else {
          fridays[index].innerHTML = fridaysArray[index];
        }
      }
    });
  }

  let decemberFridays = [ 4, 11, 18, 25 ];
  displayFridays(decemberFridays);

  
  

  