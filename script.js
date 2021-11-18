const date = new Date();

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const beginYear = 2019;
const endYear = 2044;

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector('.days');

  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  document.querySelector('.date h1').innerHTML = months[date.getMonth()] + ' ' + date.getFullYear();

  document.querySelector('#currentDate').innerHTML = '<button class="todayBtn" onclick=location.reload()>Today</button> is: ' + new Date().toLocaleDateString({ month: 'long' });

  let days = '';

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth() &&
      date.getFullYear() === new Date().getFullYear()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }

  if (lastDay + nextDays < 36) {
    const expanded = document.querySelectorAll(".days div");
    for (let e = 0; e < expanded.length; e++) {
      expanded[e].classList.add('expanded');
    }
  }

};

const selectMonthEl = document.querySelector('#monthList');
let monthOptions = '';
for (let m = 0; m < months.length; m++) {
  let currentMonth = '';
  if (m === date.getMonth()) {
    currentMonth = 'selected';
  }
  monthOptions += '<option value=' + m + ' ' + currentMonth + ' >' + months[m] + '</option>';
}
selectMonthEl.innerHTML = monthOptions;

const selectYearEl = document.querySelector('#yearList');
let yearOptions = '';
for (let y = beginYear; y <= endYear; y++) {
  let currentYear = '';
  if (y === date.getFullYear()) {
    currentYear = 'selected'
  }
  yearOptions += '<option value="' + y + '" ' + currentYear + ' >' + y + '</option>';
}
selectYearEl.innerHTML = yearOptions;

document.querySelector('.prev').addEventListener('click', () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
  for (i = 0; i < months.length; i++) {
    selectMonthEl.children[i].removeAttribute('selected');
  }
  newMonth = date.getMonth();
  selectMonthEl.children[newMonth].setAttribute('selected', 'selected');
  const totalYears = endYear - beginYear;
  for (j = 0; j < totalYears; j++) {
    selectYearEl.children[j].removeAttribute('selected');
  }
  newYear = date.getFullYear() - beginYear;
  selectYearEl.children[newYear].setAttribute('selected', 'selected');
  console.log(newYear);
});

document.querySelector('.next').addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
  for (i = 0; i < months.length; i++) {
    selectMonthEl.children[i].removeAttribute('selected');
  }
  newMonth = date.getMonth();
  selectMonthEl.children[newMonth].setAttribute('selected', 'selected');
  const totalYears = endYear - beginYear;
  for (j = 0; j < totalYears; j++) {
    selectYearEl.children[j].removeAttribute('selected');
  }
  newYear = date.getFullYear() - beginYear;
  selectYearEl.children[newYear].setAttribute('selected', 'selected');
});

function getSelectedMonth() {
  const select = document.querySelector('#monthList');
  const selectedMonth = select.options[select.selectedIndex].value;
  date.setMonth(selectedMonth);
  renderCalendar();
}

function getSelectedYear() {
  const select = document.querySelector('#yearList');
  const selectedYear = select.options[select.selectedIndex].textContent;
  date.setFullYear(selectedYear);
  renderCalendar();
}

renderCalendar();
