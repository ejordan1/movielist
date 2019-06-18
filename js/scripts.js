var Ticket = function(movie, age, time, firstRelease){
  this.movie = movie;
  this.age = age;
  this.time = time;
  this.firstRelease = true;
}

var hiddenFormJRef;
var moviesExpanded = [0, 0, 0, 0, 0]

function expandMovie(id){



  // if ($(document.getElementById("movieBody2").hasChildNodes())){
  //   console.log("has");
  // }
  var movieNum = parseInt(id.substring(5));
  if (moviesExpanded[movieNum] === 0){

  $("#movieBody" + movieNum).append(hiddenFormJRef);
  $(".movieBody.hiddenForm").removeClass("hidden");
   moviesExpanded[movieNum] = 1;
  }

  //$("hiddenForm").addClass("hiddenForm");

  $(".hiddenForm").submit(function(event){
    event.preventDefault();
    console.log(id);
  });
  // $(".movieBody").each(function(movieBod){
  //   if (movieBod.hasChildNodes()){
  //     console.log("true");
  //   }
  // });
}

Ticket.prototype.getPrice = function(id){

  console.log(id);
  return;
  var price = 17;
  if (!firstRelease){
    price -= 2;
  }
  if (age > 65){
    price -= 2;
  }
  if (time < 3){
    price -=2;
  }
  return price;
}

$(function(){
  hiddenFormJRef = $(".hiddenForm").html();
  $(".movies").on("click", ".movie", function(){
    expandMovie(this.id);
  });



});

//checks if a form is already there, if its the same movie

//TODO: make form go backup ifclick onanother movie.
