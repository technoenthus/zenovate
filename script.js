
function sendMail() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields!");
    return;
  }

  const params = { name, email, message };

  emailjs
    .send("service_nel7yue", "template_nhb9xft", params)
    .then(
      () => {
        alert("Email Sent Successfully!");
        document.getElementById("contactForm").reset();
      },
      (error) => {
        alert("Failed to send email: " + JSON.stringify(error));
      }
    );
}


























  

