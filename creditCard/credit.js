const theForm = document.querySelector("#form-grid");
const cardNumberInput = document.querySelector("#card-number");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const errorMsg = document.querySelector("#form-error");
const successMsg = document.querySelector("#form-success");

const VALID_CARD = "1234123412341234";

// Auto-format card number
cardNumberInput.addEventListener("input", () => {
  const digits = cardNumberInput.value.replace(/\D/g, "").slice(0, 16);
  cardNumberInput.value = digits.replace(/(.{4})(?=.)/g, "$1 ");
});

// Error handling and form submission
theForm.addEventListener("submit", (e) => {
  e.preventDefault();
  errorMsg.textContent = "";

  const cardDigits = cardNumberInput.value.replace(/\s/g, "");
  const month = parseInt(monthInput.value, 10);
  const year = parseInt(yearInput.value, 10);

  const now = new Date();
  const currentYear = now.getFullYear() % 100;
  const currentMonth = now.getMonth() + 1;

  if (cardDigits !== VALID_CARD) {
    errorMsg.textContent = "Invalid card number. Please check and try again.";
    cardNumberInput.focus();
    return;
  }

  if (
    isNaN(month) || isNaN(year) ||
    month < 1 || month > 12 ||
    year < currentYear ||
    (year === currentYear && month < currentMonth)
  ) {
    errorMsg.textContent = "Your card is expired or the expiration date is invalid.";
    monthInput.focus();
    return;
  }

  theForm.hidden = true;
  successMsg.hidden = false;
});
