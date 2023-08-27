function sendEmail() {
  var params = {
    from_name: document.getElementById("fullname").value, // Fixed typo: "fullName" should be "fullname"
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };

  document
    .getElementById("clearButton")
    .addEventListener("click", function (e) {
      e.preventDefault();
      var emailValue = document.getElementById("email_id").value;
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      var valid = false;

      if (emailPattern.test(emailValue)) {
        valid = true;
      }

      console.log(valid);

      if (emailValue != "") {
        if (valid === true) {
          emailjs
            .send("service_a1k7qtd", "template_1uyimi5", params)
            .then(function (res) {
              alert("Message Sent: " + res.status); // Corrected the alert statement
            });

          document.getElementById("fullname").value = "";
          document.getElementById("email_id").value = "";
          document.getElementById("message").value = "";
        } else {
          alert("invalid email format");
          window.location.href = "http://127.0.0.1:5500/contact.html";
        }
      }
    });
}