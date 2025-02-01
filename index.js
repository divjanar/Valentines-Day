
$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
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
    }

    function close() {
        envelope.addClass("close")
            .removeClass("open");
    }

})
