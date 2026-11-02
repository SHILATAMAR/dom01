// Exercise 1 - Live Business Card
// Write all your code in this file. Read README.md for the full instructions.
// Run the tests with: npm test

// Step 1: live text (name, job, email, bio -> card), trimmed, default text when empty

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("card-form");
  const nameInput = document.getElementById("name-input");
  const jobInput = document.getElementById("job-input");
  const emailInput = document.getElementById("email-input");
  const bioInput = document.getElementById("bio-input");
  const colorSelect = document.getElementById("color-select");
  const themeBtn = document.getElementById("theme-btn");
  const resetBtn = document.getElementById("reset-btn");

  const cardName = document.getElementById("card-name");
  const cardJob = document.getElementById("card-job");
  const cardEmail = document.getElementById("card-email");
  const cardBio = document.getElementById("card-bio");
  const avatar = document.getElementById("avatar");
  const bioLeft = document.getElementById("bio-left");
  const counterElement = document.querySelector(".counter");

  const MAX_BIO_LENGTH = 80;

  // שמירת טקסט ברירת המחדל המקורי מה-HTML
  const defaults = {
    name: cardName.textContent,
    job: cardJob.textContent,
    email: cardEmail.textContent,
    bio: cardBio.textContent,
  };

  // פונקציית עדכון ראשית לכל רכיבי הכרטיס
  function updateCard() {
    const nameVal = nameInput.value.trim();
    const jobVal = jobInput.value.trim();
    const emailVal = emailInput.value.trim();
    const bioVal = bioInput.value.trim();

    // שימוש בערכים המנוקים (nameVal וכו') כדי שהכרטיס יציג את הטקסט בלי רווחים מיותרים
    cardName.textContent = nameVal !== "" ? nameVal : defaults.name;
    cardJob.textContent = jobVal !== "" ? jobVal : defaults.job;
    cardEmail.textContent = emailVal !== "" ? emailVal : defaults.email;
    cardBio.textContent = bioVal !== "" ? bioVal : defaults.bio;

    // שלב 2: אות ראשונה באווטר (באות גדולה, או סימן שאלה אם ריק)
    if (nameVal !== "") {
      avatar.textContent = nameVal.charAt(0).toUpperCase();
    } else {
      avatar.textContent = "?";
    }

    // שלב 3: מונה תווים ל-Bio
    const currentBioLength = bioInput.value.length;
    const charsLeft = MAX_BIO_LENGTH - currentBioLength;
    bioLeft.textContent = charsLeft;

    if (counterElement) {
      counterElement.classList.toggle("warning", charsLeft <= 10);
    }
  }

  form.addEventListener("input", () => {
    updateCard();
  });

  // שלב 4: שינוי צבע המסגרת והאווטר
  colorSelect.addEventListener("change", (e) => {
    const selectedColor = e.target.value;
    const cardElement = document.getElementById("card");
    
    if (cardElement) {
      cardElement.style.borderColor = selectedColor;
    }
    if (avatar) {
      avatar.style.backgroundColor = selectedColor;
    }
  });

  // שלב 5: מצב כהה (Dark / Light Mode)
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    themeBtn.textContent = isDark ? "Light mode" : "Dark mode";
  });

  // שלב 6: איפוס הטופס והכרטיס
  resetBtn.addEventListener("click", () => {
    form.reset();
    
    const cardElement = document.getElementById("card");
    if (cardElement) {
      cardElement.style.borderColor = "";
    }
    if (avatar) {
      avatar.style.backgroundColor = "";
    }

    document.body.classList.remove("dark");
    themeBtn.textContent = "Dark mode";

    updateCard();
  });

  updateCard();
});
// 

