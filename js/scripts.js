//business logic
function Task(name) {
  this.name = name;
}


//user interface logic

$(function() {
  $("form#item").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#task").val();

    var newTask = new Task(inputtedTask);

    $("ul").append("<li><span class='item'>" + newTask.name + "</span></li>");

  $("input#task").val("");
  });
});
