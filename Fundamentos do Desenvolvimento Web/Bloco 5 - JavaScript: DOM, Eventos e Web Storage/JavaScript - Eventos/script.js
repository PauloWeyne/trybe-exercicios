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
  let decemberDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

  function createDaysOfMonth() {
    let decemberDaysOfMonth = document.querySelector('#days');

    for (let index = 0; index < decemberDays.length; index += 1) {
        let daysMonth = decemberDays[index];
        let daysMonthListItem = document.createElement('li');
        daysMonthListItem.innerHTML = daysMonth;

        decemberDaysOfMonth.appendChild(daysMonthListItem);
    }
}
createDaysOfMonth();

function createLiClass () {
    let liClass = document.getElementsByTagName('li');

    for (let index = 9; index <= liClass.length; index += 1) {
        liClass[index].className = 'day'
    }
}
createLiClass();
