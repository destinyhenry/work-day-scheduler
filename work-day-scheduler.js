$(document).ready(function () {
    //displays current day & time.
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); // use of moment.js
    //assigns saveBtn and click listener
    $(".saveBtn").on("click", function () {
        //gets nearby values.
        console.log(this);
        var text = $(this).siblings(".description").val(); // changes from the sibling (html description)
        var time = $(this).parent().attr("id"); // changes from the parent (html id)
        //sets items in local storage.
        localStorage.setItem(time, text);
    })
    //loads any saved data from LocalStorage (do this for each hour created)
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    function hourTracker() {
        //gets current number of hours.
        var currentHour = moment().hour(); // use of moment.js

        // loops over time blocks
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log( blockHour, currentHour)

            //allows you to click into css/html (past, present, or future)
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker(); //re-runs function
})
