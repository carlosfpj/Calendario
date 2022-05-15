function setCurrentTimePosition () {
  const currentDate = new Date();
  const currentDay = currentDate.getDay()
  const currentHour = currentDate.getHours()
  const currentMin = currentDate.getMinutes()

  const $currentTime = document.querySelector('.currentTime')

  const $calendar = document.querySelector('.calendar-week')
  let calendarBlockSize = $calendar.clientHeight
  let calendarInlineSize = $calendar.clientWidth

  const calendarTimezoneCellInlineSize = document.querySelector('.timezoneCell').clientWidth
  calendarInlineSize = calendarInlineSize - calendarTimezoneCellInlineSize

  const cellInlineSize = calendarInlineSize / 7

  const calendarDayBlockSize = document.querySelector('.calendarDay').clientHeight
  console.log(calendarDayBlockSize);

  calendarBlockSize = calendarBlockSize - calendarDayBlockSize

  const cellBlockSize = calendarBlockSize / 24

  $currentTime.style.top = `${cellBlockSize * (currentHour) + calendarDayBlockSize + (cellBlockSize / 60) * currentMin}px`
  $currentTime.style.left = `${cellInlineSize * (currentDay) + calendarTimezoneCellInlineSize + 24}px`
  console.log($currentTime.style.left);
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
