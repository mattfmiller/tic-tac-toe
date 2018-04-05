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
var currentPlayerMark = "X"

function switchPlayer() {
  if (currentPlayerMark === "X") {
    currentPlayerMark = "O";
    console.log("test");
  } else {
    currentPlayerMark = "X";
  }
}

function mark(number) {
  return board[number].spaceMark + 1
  console.log(board[number].spaceMark + 1);
  if (currentPlayerMark === "X") {
    currentPlayerMark = "O";
    console.log(test);
  } else {
    currentPlayerMark = "X";
  }
}


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
    switchPlayer();
    console.log(spaceValue);
    console.log(currentPlayerMark);
    $("#" + spaceValue + " .img" + currentPlayerMark).show();
    $("#" + spaceValue + " .space-btn").hide();
  });
});
