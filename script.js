$(document).ready(function() {
  $('button').click(function() {
    var toAdd = $('input[name=toDoList]').val();
    $('ol').append('<li class="item">' + toAdd + '</li>');
  });
  $('#input').keypress(function(e) {
    if(e.which == 13){
      var toAdd = $('input[name=toDoList]').val();
      $('ol').append('<li class="item">' + toAdd + '</li>');
    }
  });
});