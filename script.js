$(document).ready(function() {
  $('button').click(function() {
    var toAdd = $('input[name=toDoList]').val();
    $('ol').append('<li class="item">' + toAdd + '</li>');
  });
});