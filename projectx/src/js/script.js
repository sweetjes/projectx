var selected = document.addEventListener('click', function (event) {
    if (event.target.classList.contains('content-hallseats-row-seat')) {
        event.toElement.classList.add('color');
        document.querySelector('.buy-button').style.visibility = 'visible';
    }
});



var bighall = [
    { seat: 1, row: 1, booked: true },
    { seat: 2, row: 1, booked: false },
    { seat: 3, row: 1, booked: false },
    { seat: 4, row: 1, booked: false },
    { seat: 5, row: 1, booked: false },
    { seat: 6, row: 1, booked: false },
    { seat: 7, row: 1, booked: false },
    { seat: 8, row: 1, booked: false },
    { seat: 9, row: 1, booked: true },
    { seat: 10, row: 1, booked: false },
    { seat: 11, row: 1, booked: false },
    { seat: 12, row: 1, booked: false },
    { seat: 13, row: 1, booked: false },
    { seat: 14, row: 1, booked: false },
    { seat: 15, row: 1, booked: false },

    { seat: 1, row: 2, booked: false },
    { seat: 2, row: 2, booked: false },
    { seat: 3, row: 2, booked: false },
    { seat: 4, row: 2, booked: false },
    { seat: 5, row: 2, booked: false },
    { seat: 6, row: 2, booked: false },
    { seat: 7, row: 2, booked: false },
    { seat: 8, row: 2, booked: false },
    { seat: 9, row: 2, booked: true },
    { seat: 10, row: 2, booked: false },
    { seat: 11, row: 2, booked: false },
    { seat: 12, row: 2, booked: false },
    { seat: 13, row: 2, booked: false },
    { seat: 14, row: 2, booked: false },
    { seat: 15, row: 2, booked: false },
    { seat: 16, row: 2, booked: false },
    { seat: 17, row: 2, booked: false },

    { seat: 1, row: 3, booked: false },
    { seat: 2, row: 3, booked: false },
    { seat: 3, row: 3, booked: false },
    { seat: 4, row: 3, booked: true },
    { seat: 5, row: 3, booked: false },
    { seat: 6, row: 3, booked: false },
    { seat: 7, row: 3, booked: false },
    { seat: 8, row: 3, booked: false },
    { seat: 9, row: 3, booked: false },
    { seat: 10, row: 3, booked: false },
    { seat: 11, row: 3, booked: false },
    { seat: 12, row: 3, booked: true },
    { seat: 13, row: 3, booked: false },
    { seat: 14, row: 3, booked: false },
    { seat: 15, row: 3, booked: false },
    { seat: 16, row: 3, booked: false },
    { seat: 17, row: 3, booked: false },

    { seat: 1, row: 4, booked: false },
    { seat: 2, row: 4, booked: false },
    { seat: 3, row: 4, booked: false },
    { seat: 4, row: 4, booked: false },
    { seat: 5, row: 4, booked: false },
    { seat: 6, row: 4, booked: false },
    { seat: 7, row: 4, booked: false },
    { seat: 8, row: 4, booked: false },
    { seat: 9, row: 4, booked: false },
    { seat: 10, row: 4, booked: false },
    { seat: 11, row: 4, booked: false },
    { seat: 12, row: 4, booked: false },
    { seat: 13, row: 4, booked: false },
    { seat: 14, row: 4, booked: false },
    { seat: 15, row: 4, booked: false },
    { seat: 16, row: 4, booked: false },
    { seat: 17, row: 4, booked: false },

    { seat: 1, row: 5, booked: false },
    { seat: 2, row: 5, booked: false },
    { seat: 3, row: 5, booked: false },
    { seat: 4, row: 5, booked: true },
    { seat: 5, row: 5, booked: false },
    { seat: 6, row: 5, booked: false },
    { seat: 7, row: 5, booked: false },
    { seat: 8, row: 5, booked: false },
    { seat: 9, row: 5, booked: false },
    { seat: 10, row: 5, booked: false },
    { seat: 11, row: 5, booked: true },
    { seat: 12, row: 5, booked: false },
    { seat: 13, row: 5, booked: false },
    { seat: 14, row: 5, booked: false },
    { seat: 15, row: 5, booked: false },
    { seat: 16, row: 5, booked: false },
    { seat: 17, row: 5, booked: false },
    { seat: 18, row: 5, booked: false },
    { seat: 19, row: 5, booked: false },

    { seat: 1, row: 6, booked: true },
    { seat: 2, row: 6, booked: true },
    { seat: 3, row: 6, booked: false },
    { seat: 4, row: 6, booked: false },
    { seat: 5, row: 6, booked: false },
    { seat: 6, row: 6, booked: false },
    { seat: 7, row: 6, booked: false },
    { seat: 8, row: 6, booked: false },
    { seat: 9, row: 6, booked: false },
    { seat: 10, row: 6, booked: false },
    { seat: 11, row: 6, booked: true },
    { seat: 12, row: 6, booked: false },
    { seat: 13, row: 6, booked: true },
    { seat: 14, row: 6, booked: true },
    { seat: 15, row: 6, booked: false },
    { seat: 16, row: 6, booked: false },
    { seat: 17, row: 6, booked: false },
    { seat: 18, row: 6, booked: false },
    { seat: 19, row: 6, booked: false },

    { seat: 1, row: 7, booked: false },
    { seat: 2, row: 7, booked: false },
    { seat: 3, row: 7, booked: false },
    { seat: 4, row: 7, booked: true },
    { seat: 5, row: 7, booked: true },
    { seat: 6, row: 7, booked: false },
    { seat: 7, row: 7, booked: false },
    { seat: 8, row: 7, booked: false },
    { seat: 9, row: 7, booked: false },
    { seat: 10, row: 7, booked: false },
    { seat: 11, row: 7, booked: false },
    { seat: 12, row: 7, booked: false },
    { seat: 13, row: 7, booked: false },
    { seat: 14, row: 7, booked: false },
    { seat: 15, row: 7, booked: false },
    { seat: 16, row: 7, booked: true },
    { seat: 17, row: 7, booked: true },
    { seat: 18, row: 7, booked: false },
    { seat: 19, row: 7, booked: false }
];

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
    { seat: 4, row: 2, booked: false },
    { seat: 5, row: 2, booked: false },
    { seat: 6, row: 2, booked: true },
    { seat: 7, row: 2, booked: true },

    { seat: 1, row: 3, booked: false },
    { seat: 2, row: 3, booked: true },
    { seat: 3, row: 3, booked: true },
    { seat: 4, row: 3, booked: true },
    { seat: 5, row: 3, booked: true },
    { seat: 6, row: 3, booked: false },
    { seat: 7, row: 3, booked: false },
     
    { seat: 1, row: 4, booked: false },
    { seat: 2, row: 4, booked: true },
    { seat: 3, row: 4, booked: false },
    { seat: 4, row: 4, booked: false },
    { seat: 5, row: 4, booked: false },
    { seat: 6, row: 4, booked: true },
    { seat: 7, row: 4, booked: false },
    { seat: 8, row: 4, booked: true },

    { seat: 1, row: 5, booked: false },
    { seat: 2, row: 5, booked: true },
    { seat: 3, row: 5, booked: true },
    { seat: 4, row: 5, booked: false },
    { seat: 5, row: 5, booked: false },
    { seat: 6, row: 5, booked: false },
    { seat: 7, row: 5, booked: true },
    { seat: 8, row: 5, booked: true },

];

let hallseat = document.querySelectorAll('.content-hallseats-row-seat');
for (i = 0; i < bighall.length; i++) {
    if (bighall[i].booked == true) {
        hallseat[i].style.background = 'red';
    }
};




let seat = document.querySelectorAll('.content-hallseats-row-seat'), 
buyButton = document.querySelector('.buy-button');

buyButton.addEventListener('click', function () {
    for (i = 0; i < seat.length; i++) {
        if (seat[i].classList.contains('color')) {
            seat[i].style.background = 'red'; 
        }
    }
});




