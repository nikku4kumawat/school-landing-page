document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("admissionForm").addEventListener("submit", function (e) {

        e.preventDefault();

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var studentClass = document.getElementById("class").value;

        var message =
            "Admission Form\n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Phone: " + phone + "\n" +
            "Class: " + studentClass;

        var whatsappNumber = "918769091545";

        var url = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);

        window.open(url, "_blank");

    });

});