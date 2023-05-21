const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  if (
    event.currentTarget.elements.password.value === "" ||
    eevent.currentTarget.elements.email.value === ""
  ) {
    alert("Усі поля повинні бути заповнені!!!");
  } else {
    formData.forEach((value, name) => {
      const element = [...formData];
      console.log(element);
    });
  }

  event.target.reset();
}
