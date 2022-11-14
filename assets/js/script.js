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


//Retrieve storage - restores input once page is reloaded
function retrieveStorage(){
  var nine = localStorage.getItem('9');
  $("#9 .desc").val(nine)

  var ten = localStorage.getItem('10');
  $("#10 .desc").val(ten)

  var eleven = localStorage.getItem('11');
  $("#11 .desc").val(eleven)

  var twelve = localStorage.getItem('12');
  $("#12 .desc").val(twelve)

  var thirteen = localStorage.getItem('13');
  $("#13 .desc").val(thirteen)

  var fourteen = localStorage.getItem('14');
  $("#14 .desc").val(fourteen)

  var fifteen = localStorage.getItem('15');
  $("#15 .desc").val(fifteen)

  var sixteen = localStorage.getItem('16');
  $("#16 .desc").val(sixteen)

  var seventeen = localStorage.getItem('17');
  $("#17 .desc").val(seventeen)
}


plannerFunction()
retrieveStorage()

