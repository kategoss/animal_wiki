$(document).ready(function() {

  $("#formOne").click(function(event) {
  var animalInput = $("input:radio[name=animal]:checked").val();

if(animalInput === "turtles") {
  $("#turtles").show();
} else if (animalInput === "snakes") {
  $("#snakes").show();
} else if (animalInput === "monkeys") {
  $("#monkeys").show();
}

  event.preventDefault();
  });
});
