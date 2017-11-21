$(function () {



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