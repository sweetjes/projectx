var selected = document.addEventListener("click", function (event) {
    if (event.target.classList.contains("content-hallseats-row-seat")) {
        event.toElement.classList.add("color");
        document.querySelector(".buy-button").style.visibility = "visible";
    }
});

var mediumhall = [
    { seat: 1, row: 1, booked: true },
    { seat: 2, row: 1, booked: false },
    { seat: 3, row: 1, booked: true },
    { seat: 4, row: 1, booked: false },
    { seat: 5, row: 1, booked: true },
    { seat: 6, row: 1, booked: false },
    { seat: 7, row: 1, booked: false },
    { seat: 8, row: 1, booked: false },
    { seat: 9, row: 1, booked: true },
    { seat: 10, row: 1, booked: false },
 

    { seat: 1, row: 2, booked: false },
    { seat: 2, row: 2, booked: false },
    { seat: 3, row: 2, booked: false },
    { seat: 4, row: 2, booked: true },
    { seat: 5, row: 2, booked: false },
    { seat: 6, row: 2, booked: false },
    { seat: 7, row: 2, booked: false },
    { seat: 8, row: 2, booked: false },
    { seat: 9, row: 2, booked: true },
    { seat: 10, row: 2, booked: true },
    { seat: 11, row: 2, booked: false },
    

    { seat: 1, row: 3, booked: false },
    { seat: 2, row: 3, booked: true },
    { seat: 3, row: 3, booked: false },
    { seat: 4, row: 3, booked: true },
    { seat: 5, row: 3, booked: false },
    { seat: 6, row: 3, booked: true },
    { seat: 7, row: 3, booked: false },
    { seat: 8, row: 3, booked: false },
    { seat: 9, row: 3, booked: false },
    { seat: 10, row: 3, booked: false },
    { seat: 11, row: 3, booked: true },
   

    { seat: 1, row: 4, booked: false },
    { seat: 2, row: 4, booked: false },
    { seat: 3, row: 4, booked: false },
    { seat: 4, row: 4, booked: false },
    { seat: 5, row: 4, booked: true },
    { seat: 6, row: 4, booked: false },
    { seat: 7, row: 4, booked: false },
    { seat: 8, row: 4, booked: false },
    { seat: 9, row: 4, booked: false },
    { seat: 10, row: 4, booked: true },
    { seat: 11, row: 4, booked: false },
    

    { seat: 1, row: 5, booked: true },
    { seat: 2, row: 5, booked: false },
    { seat: 3, row: 5, booked: false },
    { seat: 4, row: 5, booked: false },
    { seat: 5, row: 5, booked: false },
    { seat: 6, row: 5, booked: false },
    { seat: 7, row: 5, booked: true },
    { seat: 8, row: 5, booked: false },
    { seat: 9, row: 5, booked: false },
    { seat: 10, row: 5, booked: true },
    { seat: 11, row: 5, booked: true },
    { seat: 12, row: 5, booked: false },
    

    { seat: 1, row: 6, booked: true },
    { seat: 2, row: 6, booked: false },
    { seat: 3, row: 6, booked: false },
    { seat: 4, row: 6, booked: false },
    { seat: 5, row: 6, booked: false },
    { seat: 6, row: 6, booked: true },
    { seat: 7, row: 6, booked: true },
    { seat: 8, row: 6, booked: false },
    { seat: 9, row: 6, booked: false },
    { seat: 10, row: 6, booked: false },
    { seat: 11, row: 6, booked: false },
    { seat: 12, row: 6, booked: false },
];


let hallseat = document.querySelectorAll(".content-hallseats-row-seat");
for (i = 0; i < mediumhall.length; i++) {
    if (mediumhall[i].booked == true) {
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