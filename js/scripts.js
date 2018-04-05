//backend logic
function Player(username, playerMark) {
  this.username = username;
  this.playerMark = playerMark;
}

function Space(spaceMark, position) {
  this.spaceMark = spaceMark;
  this.position = position;
}

var board = []


//frontend logic
$(document).ready(function(){

  for (var i = 1; i <= 9; i++) { //create spaces
    var space = new Space(0, i);
    board.push(space);
    }

  $("#playerX").submit(function(e){
    var playerX = $("#p1InputName").val();
    $("#playerX").hide();
    $("#playerXCol").text("Player X: " + playerX);
    e.preventDefault();
  });
  $("#playerO").submit(function(e){
    var playerO = $("#p2InputName").val();
    $("#playerO").hide();
    $("#playerOCol").text("Player O: " + playerO);
    e.preventDefault();
  });
});
