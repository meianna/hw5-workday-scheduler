var currentDate = moment().format("dddd" + ", " + "LL");

// This displays the date in the header
function displayDate() {
  $("#currentDay").prepend(currentDate);
}
displayDate();
