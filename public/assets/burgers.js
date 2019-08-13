$(function () {
    $("#feed-him").on("click", function (event) {
        var id = $(this).data("id");
        var newMeal = $(this).data("newmeal");

        var newMealCondition = {
            eaten: newMeal
        };

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

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newMeal = {
          name: $("#food-name").val().trim(),
          eaten: false
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newMeal
        }).then(
          function() {
            console.log("created new meal");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

})