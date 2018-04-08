var socket = io();
var playerNo = "";

// Socket.io Code related

socket.on('connect', function(){
  console.log('Client is connected !');
  console.log(`This is join id: ${socket.id}`);
});

socket.on('joinSucceed', function(msg){
  var messages = document.getElementById("joined");
  messages.innerHTML = msg;
});

socket.on('toNextPage', function(msg){
  toCharMobile();
});

// Socket.io Code Ends Here

function requestToJoin(){
  $('form').submit(function(e){
    e.preventDefault();
    socket.emit('requestToJoin', {
      id: socket.id,
      room: $('#code').val()
    }, function(){
      $('#code'.val(''))
    });
    return false;
  });
}

function toCharMobile(){
  var charMobileHtml = $("#charMobile").html();
  bg.html(charMobileHtml);
}
