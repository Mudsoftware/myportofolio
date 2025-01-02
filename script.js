const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: { Accept: "application/json" },
  }).then((response) => {
    if (response.ok) {
      alert("Message sent!");
      form.reset();
    } else {
      alert("Failed to send message.");
    }
  });
});
