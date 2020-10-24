$(".save").on("click",function(){
var input = $(this).siblings(".description").val()
var time = $(this).parent().attr("id")
localStorage.setItem(input,time)
})
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

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
timechecker()

$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#1 .description").val(localStorage.getItem("1"))
$("#2 .description").val(localStorage.getItem("2"))
$("#3 .description").val(localStorage.getItem("3"))
$("#4 .description").val(localStorage.getItem("4"))
$("#5 .description").val(localStorage.getItem("5"))



// if(compareHour<currentTime){
//   $(this).addClass("past")

// } else if(compareHour === currentTime){
//   $(this).removeClass("past")
//   $(this).addClass("present")


// } else {
//   $(this).removeClass("past")
//   $(this).removeClass("present")
//   $(this).addClass("future")
// }
// }) 

// }
// timechecker()

// $("#9 .description").val(localStorage.getItem("9"))
// $("#10 .description").val(localStorage.getItem("10"))
// $("#11 .description").val(localStorage.getItem("11"))
// $("#12 .description").val(localStorage.getItem("12"))
// $("#1 .description").val(localStorage.getItem("1"))
// $("#2 .description").val(localStorage.getItem("2"))
// $("#3 .description").val(localStorage.getItem("3"))
// $("#4 .description").val(localStorage.getItem("4"))
// $("#5 .description").val(localStorage.getItem("5"))























