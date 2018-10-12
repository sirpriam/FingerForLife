var mark = 0;

// socket.io connection related starts here

socket.emit('charMobile', `Char Mobile is connecting to Socket.io with id: ${socket.id}`);

socket.on('CharMobileAccepted', function(msg){
  console.log(msg);
});

socket.on('playerDisconnected', function(playerId){
  if(!alert('Oh no, player has been disconnected! Find your partner to continue!')){
    window.location.href = "/";
  }
});

socket.on('charSent', function(msg){
  mark += 1;
  if (mark == 2) {
    mark = 0;
    toGamePlayMobile();
  }
});

// socket.io connection related ends here


function selectChar(){
  var valButton = $('input[name="radioChar"]:checked').val();
  socket.emit('selectingChar', {
    val: valButton,
    id: socket.id
  });

  //debug purpose
  console.log(`Player is choosing char number ${valButton}`);
}

function toGamePlayMobile(){
  var gpMobile = $('#gamePlayMobile').html();
  bg.html(gpMobile);
}

function sendChar(){
  var valButton = $('input[name="radioChar"]:checked').val();
  console.log(valButton);
  if (valButton === undefined) {
    alert("You have not choose a character.");
  }
  else{
    socket.emit('sendingChar', {
      val: valButton,
      id: socket.id,
      marker: 1
    });
    document.getElementById("nextButton").disabled = true;
  }
}
