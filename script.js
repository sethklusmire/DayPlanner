// This line is show what time it is and the current day using moment.
document.getElementById("currentDay").innerHTML = moment().format(
  "dddd MMM Do YYYY"
);

let rows = document.getElementsByClassName("appointmentInput");
// Using moment tripped me up at first. But once I got it it was fairly easy to get the past present and future to show up using an if else statement. At first I was doing row by row then realized that a for loop would capture all of it.
for (let index = 0; index < rows.length; index++) {
  let now = moment();
  let hour = index + 9
  if (hour < now.hour()) {
    rows[index].classList.add("past");
  } else if (hour === now.hour()) {
    rows[index].classList.add("present");
  }
  else {
    rows[index].classList.add("future");
  }
  
}
// Same idea here. Was first using each row to enter the local storage, but turned it into a for loop. The power of arrays.
let textareas = document.getElementsByClassName("textarea");
let saveBtns = document.getElementsByClassName("saveBtn");

for (let index = 0; index < saveBtns.length; index++) {
  let saveBtnsElement = saveBtns[index];
  let textareasElement = textareas[index];
  saveBtnsElement.addEventListener("click", function () {
    localStorage.setItem("text" + index, textareasElement.value);
    console.log(textareasElement.value);
  });
  textareasElement.value = localStorage.getItem("text" + index);
}


