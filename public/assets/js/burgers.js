$(function () {

    $(".change-devour").on("click", function (event)  {
        const id = $(this).data("id");
        const newDevour = $(this).data("newdevour");

        const newDevourState = {
            devoured: newDevour
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        })
            .then( () =>{
                console.log("changed devoured to", newDevour);

                location.reload();
            })
    });

    $('.create-form').on('submit', event => {
        event.preventDefault();

        const newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: 1

        };

        $.ajax("/api/burgers", {
                type: 'POST',
                data: newBurger
            })
            .then(
                () => {
                    console.log("new burger created");

                    location.reload();
                }
            )

    });
});