// Date today
var todayDate = dayjs().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
})

