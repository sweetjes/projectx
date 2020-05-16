

// An array, object or any data (eg. from an ajax call)
let seats = ['1', '2', '3', '4', '5', '6','7',]

// Set the HTML template
let hallseatss = _.template($('#hallseatss').html());

// render the template using hte data
$('.content').html(hallseatss(seats));
