$(function () {
  $(".feed-him").on("click", function (event) {
    $("#masterpic").attr("src", "/master.gif");
    var id = $(this).data("id");
    var newMeal = true;

    var newMealCondition = {
      eaten: newMeal
    };
    console.log(newMealCondition);
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newMealCondition
    }).then(
      function () {
        console.log("changed meal to", newMealCondition);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  })

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("create form submitted");
    var newMeal = {
      name: $("#food-name").val().trim(),
      eaten: false
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newMeal
    }).then(
      function () {
        console.log("created new meal");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

})