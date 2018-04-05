//backend logic
function Player(username, playerMark) {
  this.username = username;
  this.playerMark = playerMark;
}

function Space(spaceMark, position) {
  this.spaceMark = spaceMark;
  this.position = position;
}

function mark(number) {
  return board[number].spaceMark + 1
  console.log(board[number].spaceMark + 1);
}


var board = []

// var turn = 0;



//frontend logic
$(document).ready(function(){

  for (var i = 0; i <= 9; i++) { //create spaces
    var space = new Space(0, i);
    board.push(space);
    }
    console.log(board);

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

  $(".space-btn").click(function() {
    var spaceValue = $(this).val();
    console.log(spaceValue);
    mark(spaceValue);
    $("#" + spaceValue + " .imgX").show();
    $("#" + spaceValue + " .space-btn").hide();
  });
});
