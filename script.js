var hours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

var rowContainer = document.getElementById("rowContainer")

for (var i = 0; i < hours.length; i++) {

  var outerDiv = document.createElement('div')
  outerDiv.id = hours[i]
  outerDiv.classList.add('row', 'time-block')
  outerDiv.innerHTML = `<div class="col-2 col-md-1 hour text-center py-3">${getHour(hours[i])}</div>
  <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
  <button class="btn saveBtn col-2 col-md-1" aria-label="save">
    <i class="fas fa-save" aria-hidden="true"></i>
  </button>`

  rowContainer.append(outerDiv);
}

var saveButtons = document.querySelectorAll(".saveBtn")
console.log(saveButtons)
var buttonsArray = Array.from(saveButtons)
console.log(buttonsArray)


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
}

for (var i = 0; i < buttonsArray.length; i++) {
  // console.log(buttonsArray[i])
  buttonsArray[i].addEventListener("click", function(e){
    console.log(e.currentTarget.previousElementSibling.value)
  })
}