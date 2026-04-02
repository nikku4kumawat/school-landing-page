document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const email = document.getElementById("email").value.trim();
    const studentClass = document.getElementById("class").value;
    const messageBox = document.getElementById("message").value.trim();

    const mobilePattern = /^[6-9]\d{9}$/;

    if (!name) return alert("Please enter name");
    if (!mobilePattern.test(mobile)) return alert("Enter valid number");
    if (!email) return alert("Enter email");
    if (!studentClass) return alert("Select class");

    const text =
`Hello Radhakrishna Birla School,

Admission Enquiry:

Name: ${name}
Mobile: ${mobile}
Email: ${email}
Class: ${studentClass}
Message: ${messageBox || "N/A"}`;

    const url = "https://wa.me/918769091545?text=" + encodeURIComponent(text);

    window.open(url, "_blank");

    form.reset();
  });

});