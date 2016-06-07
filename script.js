
//jQuery
$(document).ready(function() {
  //when button is clicked add text to list
  $('button').click(function() {
    //text from input to add to lsit
    var toAdd = $('input[name=toDoList]').val();
    $('input[name=toDoList]').val('');
    $('ol').append('<li class="item">' + toAdd + '</li>');
  });
  //when enter key is press text is entered into list
  $('#input').keypress(function(e) {
    if(e.keyCode == 13) {
      var toAdd = $('input[name=toDoList]').val();
      $('ol').append('<li class="item">' + toAdd + '</li>');
      event.currentTarget.value = "";
      return false; //stops the default event triggering so list doesnt clear
    };
  });
});