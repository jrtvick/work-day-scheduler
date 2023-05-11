// Established global variables for hours and the current time. These are used further down to appropriately display the hourly events in my schedule and the time at the top of the page.
var hours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
var currentHour = new Date().getHours();

// Here I created a function to display a live clock at the top of the page using dayjs and an if statement.
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

// This is a for loop that was created to display each hour of the schedule. The idea is to draw from the HTML to repeat the single row of the table nine times. 
for (var i = 0; i < hours.length; i++) {
  var outerDiv = document.createElement('div');
  outerDiv.id = hours[i];
  outerDiv.classList.add('row', 'time-block', getColor(hours[i]));
  outerDiv.innerHTML = `<div class="col-2 col-md-1 hour text-center py-3">${getHour(hours[i])}
  </div><textarea class="col-8 col-md-10 description" rows="3">${localStorage.getItem(hours[i]) || ''}</textarea><button id="${hours[i]}" class="btn saveBtn col-2 col-md-1"aria-label="save"><i class="fas fa-save" aria-hidden="true"></i></button>`;
  rowContainer.append(outerDiv);
}

// More variables made for my buttons to be individual rather than all share the same storage.
var saveButtons = document.querySelectorAll(".saveBtn");
var buttonsArray = Array.from(saveButtons);

// This switch function allows me to draw from my hours array at the top of my code and display the values in a way that makes the most sense for the user to schedule their tasks.
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

// Made a for loop with the help of my tutor to add an event listener to all of the buttons for each hour. I was running into an issue of part of the button being clicked storing the value to local storage but if I did not click on the small floppy disk image, it wouldn't save.
for (var i = 0; i < buttonsArray.length; i++) {
  buttonsArray[i].addEventListener("click", function(event) {
    var valueToStore = (event.currentTarget.previousElementSibling.value);
    localStorage.setItem(event.currentTarget.id, valueToStore);
  })
}

// This function draws the appropriate colours from the style sheet. The schedule will visually display differently depending on time of day, giving the user an understanding of when to schedule something for.
function getColor(hour) {
  if (hour < currentHour) return 'past';
  else if (hour > currentHour) return 'future';
  else return 'present';
};