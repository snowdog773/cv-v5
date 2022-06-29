function sendForm(name, org, phone, email, message) {
  if (
    document.getElementById("name").value &&
    document.getElementById("email").value &&
    document.getElementById("message").value
  ) {
    fetch("https://portfolioformapi.pitans.co.uk/formHandler", {
      method: "POST",
      body: JSON.stringify({
        name: document.getElementById("name").value,
        org: document.getElementById("org").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(
      alert(
        "Form submission successful. I aim to reply to messages within 24 hours"
      )
    );
  } else {
    alert("please complete all required fields");
  }
}
const submit = document.getElementById("button");
submit.addEventListener("click", sendForm);
