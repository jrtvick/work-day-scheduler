var hours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

var rowContainer = document.getElementById("rowContainer")

for (var i = 0; i < hours.length; i++) {
  console.log(hours[i])
  var outerDiv = document.createElement('div')
  outerDiv.id = hours[i]
  outerDiv.classList.add('row', 'time-block')
  outerDiv.innerHTML = `<div class="col-2 col-md-1 hour text-center py-3">9AM</div>
  <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
  <button class="btn saveBtn col-2 col-md-1" aria-label="save">
    <i class="fas fa-save" aria-hidden="true"></i>
  </button>`

  rowContainer.append(outerDiv);
}