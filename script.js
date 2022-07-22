var currentHour = moment().hour();

// moment js functionality
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// once save button is clicked the data is saved
$(".saveButton").on("click", function () {
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
});

// retrieves data from local storage
for (i = 0; i < 10; i++) {
  $(".container")
    .children()
    .eq(i)
    .children()
    .eq(1)
    .val(localStorage.getItem(i + 8));

  if (currentHour < i + 8) {
    $(".container").children().eq(i).children().eq(1).addClass("future");
  } else if (currentHour == i + 8)
    $(".container").children().eq(i).children().eq(1).addClass("present");
  else {
    $(".container").children().eq(i).children().eq(1).addClass("past");
  }
}

  