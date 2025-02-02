$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset"); 
    var flowersImage = $("#flowers-image");
    var teddyImage = $("#teddy-image");
    var chocolate_strawberriesImage = $("#chocolate_strawberries-image");
    var sunsetImage = $("#sunset-image");
    var sunset1Image = $("#sunset1-image");

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
        moveButtonRandomly(btn_reset);
    });

    // Function to calculate random position and move the button
    function moveButtonRandomly(button) {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const buttonWidth = button.outerWidth();
        const buttonHeight = button.outerHeight();

        // Calculate random position within the viewport
        const randomX = Math.floor(Math.random() * (windowWidth - buttonWidth));
        const randomY = Math.floor(Math.random() * (windowHeight - buttonHeight));

        // Apply the new position
        button.css({
            position: "fixed",
            left: `${randomX}px`,
            top: `${randomY}px`,
        });
    }

    function open() {
        envelope.addClass("open")
            .removeClass("close");

        flowersImage.removeClass("hidden");
        teddyImage.removeClass("hidden");
        chocolate_strawberriesImage.removeClass("hidden");
        sunsetImage.removeClass("hidden");
        sunset1Image.removeClass("hidden");
    }

    function close() {
        envelope.addClass("close")
            .removeClass("open");

        flowersImage.addClass("hidden");
        teddyImage.addClass("hidden");
        chocolate_strawberriesImage.addClass("hidden");
        sunsetImage.addClass("hidden");
        sunset1Image.addClass("hidden");
    }
});
