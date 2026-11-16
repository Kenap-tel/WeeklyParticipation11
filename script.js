$(document).ready(function() {

    $("#emailForm").submit(function(event) {

        event.preventDefault();

        let email = $("#email").val();
        let confirmEmail = $("#confirmEmail").val();

        if (email === "" || confirmEmail === "") {

            $("#message").text("Please enter both email addresses.");

        } 
        else if (email !== confirmEmail) {

            $("#message").text("Email addresses do not match.");

        } 
        else {

            $("#message").text("");

            alert("Email has been confirmed!");

        }

    });

});
