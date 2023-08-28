function sendEmail() {
  var params = {
    from_name: document.getElementById("fullname").value, // Fixed typo: "fullName" should be "fullname"
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };

  var clearButton = document
    .getElementById("clearButton")
    .addEventListener("click", function (e) {
      e.preventDefault();
      var emailValue = document.getElementById("email_id").value;
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (emailValue !== "") {
        var valid = emailPattern.test(emailValue);
        console.log(valid);

        if (valid) {
          // Email is valid, perform the email sending actions
          console.log(params);
          emailjs
            .send("service_a1k7qtd", "template_1uyimi5", params)
            .then(function (res) {
              alert("Message Sent: " + res.status);
            });

          document.getElementById("fullname").value = "";
          document.getElementById("email_id").value = "";
          document.getElementById("message").value = "";
        } else {
          // Email is invalid
          alert("Invalid email format");
        }
      }
    });
}
