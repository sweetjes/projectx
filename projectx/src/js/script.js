var hallseat = document.querySelectorAll(".content-hallseats-row-seat");
var bookedSeats = {
  booked: ["seat-5", "seat-13", "seat-64", "seat-43", "seat-65", "seat-78", "seat-23"]
}

var selected = document.addEventListener("click", function (event) {
  if (event.target.classList.contains('content-hallseats-row-seat')) {
    event.toElement.classList.add('color');
  }

});






