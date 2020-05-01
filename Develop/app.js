var currentDate = moment().format("dddd" + ", " + "LL");

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

var currentHour = moment().hours();

// This loop makes it so that the event descriptions stay on screen when  we refresh
for (i = 9; i <= 17; i++) {
  $(`#${i}-input`).val(localStorage.getItem(i));
  if (i < currentHour) {
    $(`#${i}-row`).addClass("past");
  } else if (i === currentHour) {
    $(`#${i}-row`).addClass("present");
  } else {
    $(`#${i}-row`).addClass("future");
  }
}
