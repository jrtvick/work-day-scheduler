// Established global variables for hours and the current time. These are used further down to appropriately display the hourly events in my schedule and the time at the top of the page.
var hours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
var currentHour = new Date().getHours();

function setTime() {
  var today = dayjs();
  var stopTimerFlag = false;
  var timerInterval = setInterval(function () {

      if (!stopTimerFlag) {
          today = dayjs();
          var date = today.format('MMM DD, YYYY');
          var time = today.format('hh: mm: ss a');
          var dateTime = date + ' at ' + time;
          $('#currentDay').text(dateTime);
      }

  }, 1000);
}
setTime();

// Created a global variable to call my div tags that house the schedule on the webpage.
var rowContainer = document.getElementById("rowContainer");

// 
for (var i = 0; i < hours.length; i++) {
  var outerDiv = document.createElement('div');
  outerDiv.id = hours[i];
  outerDiv.classList.add('row', 'time-block', getColor(hours[i]));
  outerDiv.innerHTML = `<div class="col-2 col-md-1 hour text-center py-3">${getHour(hours[i])}
  </div><textarea class="col-8 col-md-10 description" rows="3">${localStorage.getItem(hours[i]) || ''}</textarea><button id="${hours[i]}" class="btn saveBtn col-2 col-md-1"aria-label="save"><i class="fas fa-save" aria-hidden="true"></i></button>`;
  rowContainer.append(outerDiv);
}


var saveButtons = document.querySelectorAll(".saveBtn");
var buttonsArray = Array.from(saveButtons);

function getHour(hour) {
  switch (hour) {
    case "09":
      return "9AM"
    case "10":
      return "10AM"
    case "11":
      return "11AM"
    case "12":
      return "12PM"
    case "13":
      return "1PM"
    case "14":
      return "2PM"
    case "15":
      return "3PM"
    case "16":
      return "4PM"
    case "17":
      return "5PM"
  }
};

for (var i = 0; i < buttonsArray.length; i++) {
  buttonsArray[i].addEventListener("click", function(event){
    var valueToStore = (event.currentTarget.previousElementSibling.value);
    localStorage.setItem(event.currentTarget.id, valueToStore);
  })
}

function getColor(hour){
  if (hour < currentHour) return 'past';
  else if (hour > currentHour) return 'future';
  else return 'present';
};