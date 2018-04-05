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
var currentPlayerMark = "O"

function switchPlayer() {
  if (currentPlayerMark === "O") {
    currentPlayerMark = "X";
  } else {
    currentPlayerMark = "O";
  }
}

function mark(number){
  board[number].spaceMark = currentPlayerMark;
  console.log(board[number]);
}

function checkWin() {
  for (var i = 0; i < 3; i +=1 ) {
    if ((board[i].spaceMark !== 0) && (board[i].spaceMark === board[i+3].spaceMark) && (board[i].spaceMark === board[i+6].spaceMark)) {
      alert(currentPlayerMark + " wins!");
      location.reload();
    }
  }
  for (var i = 0; i < 9; i +=3 ) {
    if ((board[i].spaceMark !== 0) && (board[i].spaceMark === board[i+1].spaceMark) && (board[i].spaceMark === board[i+2].spaceMark)){
      alert(currentPlayerMark + " wins!");
      location.reload();
    }
  }
  if ((board[0].spaceMark !== 0) && (board[0].spaceMark === board[4].spaceMark) && (board[0].spaceMark === board[8].spaceMark)) {
      alert(currentPlayerMark + " wins!");
      location.reload();
  } else if ((board[2].spaceMark !== 0) && (board[2].spaceMark === board[4].spaceMark) && (board[2].spaceMark === board[6].spaceMark)) {
    alert(currentPlayerMark + " wins!");
    location.reload();
  }
}

//frontend logic
$(document).ready(function(){

  for (var i = 0; i <= 9; i++) { //create spaces
    var space = new Space(0, i);
    board.push(space);
    }

    $("#currentPlayer").text("X");

  $("#playerX").submit(function(e){
    var playerX = $("#p1InputName").val();
    $("#playerX").hide();
    $("#playerXCol").text("Player X: " + playerX);
    var player =new Player (playerX, "X")
    e.preventDefault();
  });
  $("#playerO").submit(function(e){
    var playerO = $("#p2InputName").val();
    $("#playerO").hide();
    $("#playerOCol").text("Player O: " + playerO);
    var player =new Player (playerO, "O")
    e.preventDefault();
  });

  $(".space-btn").click(function() {
    $("#currentPlayer").text(currentPlayerMark);
    var spaceValue = $(this).val();
    switchPlayer($(this).val());
    mark(spaceValue);
    $("#" + spaceValue + " .img" + currentPlayerMark).show();
    $("#" + spaceValue + " .space-btn").hide();
    checkWin();
  });
});
