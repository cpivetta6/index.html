function sendEmail() {
  var params = {
    from_name: document.getElementById("fullname").value,
    email_id: "",
    message: document.getElementById("message").value,
  };

  var emailValue = document.getElementById("email_id").value;
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var valid = false;

  console.log(params);
  console.log(emailValue);

  if (emailValue !== "") {
    if (emailPattern.test(emailValue)) {
      valid = true;
      console.log(valid);

      params.email_id = emailValue;

      emailjs
        .send("service_a1k7qtd", "template_1uyimi5", params)
        .then(function (res) {
          alert("Message Sent: " + res.status);
        });

      document.getElementById("fullname").value = "";
      document.getElementById("email_id").value = "";
      document.getElementById("message").value = "";
    } else {
      console.log(valid);
      // Email is invalid
      alert("Invalid email format");
    }
  }
}
