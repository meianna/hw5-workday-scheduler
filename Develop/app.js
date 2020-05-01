var currentDate = moment().format("dddd" + ", " + "LL");
var timeBlocks = $("#timeBlocks");

// This function displays current date in the header
function displayDate() {
  $("#currentDay").prepend(currentDate);
}
displayDate();

$("button").on("click", function () {
  var dataId = $(this).attr("id");
  var id = dataId.split("-")[0];
  var userData = $("#" + id + "-input").val();
  console.log(dataId, userData, "#" + id + "-input");
  localStorage.setItem(id, userData);
});

// This loop makes it so that the event descriptions stay on screen when  we refresh
for (i = 9; i <= 17; i++) {
  $(`#${i}-input`).val(localStorage.getItem(i));
}
