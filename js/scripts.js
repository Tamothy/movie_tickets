//business_logic



function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Ticket.prototype.price = function () {
  if (this.movie) {
    return 9;
  } else if (this.age) {
    return 6;
  } else if (this.senior) {
    return 4;
  }
}

//user_interface_logic
$(document).ready(function(event) {
  event.preventDefault();

  var input_movie = $("select.movies").val();
  var input_time = $("select.time").val();
  var input_age = $("select.age").val();

  var new_movie = new Ticket(input_movie, input_time, input_age);



});
