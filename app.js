const formData = document.querySelector(".form__data");
const ageOutput = document.querySelector(".age__output");

formData.addEventListener("submit", (e) => {
  e.preventDefault();
  const currentYear = new Date().getFullYear();
  const value = e.target[0].value;
  const bornYear = parseInt(value.split("-")[0]);
  const sum = currentYear - bornYear;

  ageOutput.textContent = `Age:${sum}`;
});
