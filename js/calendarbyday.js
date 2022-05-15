function setCurrentTimePosition() {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  console.log(currentHour);
  const currentMinutes = currentDate.getMinutes();


  const calendarDayBlockSize = document.querySelector('.calendar-day').clientHeight;
  const calendarDayInlineSize = document.querySelector('.calendar-day').clientWidth;
  const timeZoneCellBlockSize = document.querySelector('.timezoneCell').clientHeight;
  const timeZoneCellInlineSize = document.querySelector('.timezoneCell').clientWidth;
  const taskCellBlockSize = document.querySelector('.taskCell').clientHeight;
  const taskCellInlineSize = document.querySelector('.taskCell').clientWidth;

  const $currentTime = document.querySelector('.currentTime');

  let hourSize = calendarDayBlockSize - timeZoneCellBlockSize
  hourSize = hourSize / 24
  console.log(hourSize);


  $currentTime.style.top = `${((hourSize * currentHour) + timeZoneCellBlockSize + (hourSize /60) * currentMinutes)- hourSize}px`
  $currentTime.style.left = `${timeZoneCellInlineSize}px`;
  $currentTime.style.width = `${taskCellInlineSize}px`;


  console.log(timeZoneCellBlockSize + 'and' + timeZoneCellInlineSize + 'and' + taskCellBlockSize + 'and' + taskCellInlineSize);
}

window.intervalCurrentTimePosition = null

function intervalCurrentTimePosition(interval = 1000) {
  clearInterval(window.intervalCurrentTimeposition)
  setCurrentTimePosition()
  window.intervalCurrentTimeposition = setInterval(setCurrentTimePosition, interval)
}

export {
  setCurrentTimePosition,
  intervalCurrentTimePosition
}

