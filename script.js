// using save/click function 
$(".save").on("click",function(){
var input = $(this).siblings(".description").val()
var time = $(this).parent().attr("id")
localStorage.setItem(input,time)
})
// storing day / time, putting in p tag in HTML
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
// created timechecker function with else/if to see current time and see whether it is past, present or future 
function timechecker () {
var currentTime = moment().hours()
$(".time-block").each(function(){
var compareHour = parseInt($(this).attr("id"))
if(compareHour<currentTime){
  $(this).addClass("past")

} else if(compareHour === currentTime){
  $(this).removeClass("past")
  $(this).addClass("present")


} else {
  $(this).removeClass("past")
  $(this).removeClass("present")
  $(this).addClass("future")
}
}) 

}
// running timechecker function here
timechecker()

// attempting to store values that user puts in to the text box by each specific box
$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#1 .description").val(localStorage.getItem("1"))
$("#2 .description").val(localStorage.getItem("2"))
$("#3 .description").val(localStorage.getItem("3"))
$("#4 .description").val(localStorage.getItem("4"))
$("#5 .description").val(localStorage.getItem("5"))

























