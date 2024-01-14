function sendEmail() {
  var params = {
    from_name: document.getElementById("fullname").value,
    email_id: "",
    message: document.getElementById("message").value,
  };

  var emailValue = document.getElementById("email_id").value;
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var valid = false;

  if (emailValue !== "") {
    if (emailPattern.test(emailValue)) {
      valid = true;

      params.email_id = emailValue;
      emailjs.init("Lm43tAialxB_EN1vl");

      emailjs
        //new: service_33lyqlc, template_iexb93q
        //old: service_a1k7qtd, template_1uyimi5
        .send("service_33lyqlc", "template_iexb93q", params)
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
