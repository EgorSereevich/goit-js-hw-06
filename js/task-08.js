const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  if (
    event.currentTarget.elements.password.value === "" ||
    event.currentTarget.elements.email.value === ""
  ) {
    alert("Усі поля повинні бути заповнені!!!");
  } else {
    const objekt = {
      email: event.currentTarget.elements.email.value,
      password: event.currentTarget.elements.password.value,
    };
    console.log(objekt);
  }

  event.target.reset();
}
