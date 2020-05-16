var selected = document.addEventListener("click", function (event) {
    if (event.target.classList.contains("content-hallseats-row-seat")) {
        event.toElement.classList.add("color");
        document.querySelector(".buy-button").style.visibility = "visible";
    }
});

var smallhall = [
    { seat: 1, row: 1, booked: false },
    { seat: 2, row: 1, booked: false },
    { seat: 3, row: 1, booked: false },
    { seat: 4, row: 1, booked: false },
    { seat: 5, row: 1, booked: false },
    { seat: 6, row: 1, booked: true },
    

    { seat: 1, row: 2, booked: false },
    { seat: 2, row: 2, booked: false },
    { seat: 3, row: 2, booked: false },
    { seat: 4, row: 2, booked: true },
    { seat: 5, row: 2, booked: false },
    { seat: 6, row: 2, booked: false },
    { seat: 7, row: 2, booked: false },

    { seat: 1, row: 3, booked: false },
    { seat: 2, row: 3, booked: true },
    { seat: 3, row: 3, booked: false },
    { seat: 4, row: 3, booked: false },
    { seat: 5, row: 3, booked: true },
    { seat: 6, row: 3, booked: false },
    { seat: 7, row: 3, booked: false },
     
    { seat: 1, row: 4, booked: false },
    { seat: 2, row: 4, booked: true },
    { seat: 3, row: 4, booked: false },
    { seat: 4, row: 4, booked: false },
    { seat: 5, row: 4, booked: false },
    { seat: 6, row: 4, booked: false },
    { seat: 7, row: 4, booked: false },
    { seat: 8, row: 4, booked: true },

    { seat: 1, row: 5, booked: false },
    { seat: 2, row: 5, booked: true },
    { seat: 3, row: 5, booked: true },
    { seat: 4, row: 5, booked: false },
    { seat: 5, row: 5, booked: false },
    { seat: 6, row: 5, booked: false },
    { seat: 7, row: 5, booked: true },
    { seat: 8, row: 5, booked: false },

];

let hallseat = document.querySelectorAll(".content-hallseats-row-seat");
for (i = 0; i < smallhall.length; i++) {
    if (smallhall[i].booked == true) {
        hallseat[i].style.background = "red";
    }
}



let seat = document.querySelectorAll('.content-hallseats-row-seat'), 
buyButton = document.querySelector('.buy-button');

buyButton.addEventListener('click', function () {
    for (i = 0; i < seat.length; i++) {
        if (seat[i].classList.contains('color')) {
            seat[i].style.background = 'red'; 
        }
    }
});
