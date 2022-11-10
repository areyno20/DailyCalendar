// Date today
var todayDate = dayjs().format('dddd, MMM D, YYYY');
$("#currentDay").html(todayDate);

//Save Button - sends input to local storage once save button is clicked
$(".saveBtn").on("click", function () {
  const row = $(this).closest(".row")

  var text = row.find(".desc").val();
  var time = row.attr('id');

  localStorage.setItem(time, text);
})

// Function for choice of past, present or future for blocks and addition of colour through CSS
function plannerFunction() {
  var timeNow = dayjs().hour();

  $(".time-block").each(function() {
      var blockEl = parseInt($(this).attr("id"));

      if (blockEl < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    }
    else if (blockEl === timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    }
})
};

plannerFunction()


