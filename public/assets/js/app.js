console.log("Hey I loaded!");

M.AutoInit();

const burgerButton = $("#burgerButton");
const burgerName = $("#burgerName");
const burgerIngredients = $("#burgerIngredients")
const burgerPic = $(".burgerPic");
const burgerForm = $("#burgerForm");

const updateBurgers = (route) => {
    $.get(route, function(data) {
        console.log(data);
    })
}

//Hacky way to get a more responsive form
$(document).ready(() => {
    document.body.clientWidth > 600 ? burgerForm.addClass("valign-wrapper") : burgerForm.removeClass("valign-wrapper")
});

$(window).resize(() => {
    if (document.body.clientWidth > 600) {
        burgerForm.addClass("valign-wrapper");
    } else {
        burgerForm.removeClass("valign-wrapper")
    }
});

//Add Burgers on button click from form
burgerButton.click(function(event) {
    if (burgerName.val().trim()) {
        let burgers = {
            name: burgerName.val().trim(),
            ingredients: burgerIngredients.val().trim()
        };
        $.post("/api/postburger", burgers, function(data) {
            // console.log(data);
            window.location.reload(true);
            // burgerPic.animate({height: "50%"}, 2000)
            // burgerPic.hide();


        });
    } else {
        M.toast({html: "Oops, looks like something's not quite right. Make sure you have a name for your burger!", displayLength: 4000, classes: "red rounded"})
    }
});


//Remove button event for dynamically added burgers
$("button").on("click", function(event) {
    let id = {id: $(this).attr("data-id")};
        switch (true) {
            //mark burger as eaten
            case $(this).hasClass("eatButton"):
                $.post("/api/eatburger", id, function(data) {
                    // console.log(data);
                    if (data) { window.location.reload(true) }
                });
                break;
            //remove already eaten burger
            case $(this).hasClass("removeButton"):
                $.post("/api/removeburger", id, function(data) {
                    if (data) { window.location.reload(true) }
                });
                break;
            case $(this).hasClass("burgerButton"):
                console.log("hi?")
            if (burgerName.val().trim()) {
                let burgers = {
                    name: burgerName.val().trim(),
                    ingredients: burgerIngredients.val().trim()
                };
                $.post("/api/postburger", burgers, function(data) {
                    // console.log(data);
                    window.location.reload(true);
                    console.log("Hellooo " + data)
                    // burgerPic.animate({height: "50%"}, 2000)
                    // burgerPic.hide();
                });
            } else {
                M.toast({html: "Oops, looks like something's not quite right. Make sure you have a name for your burger!", displayLength: 4000, classes: "red rounded"})
            };
            break;
        };     
});