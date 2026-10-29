// Exercise 1 - Live Business Card
// Write all your code in this file. Read README.md for the full instructions.
// Run the tests with: npm test

// Step 1: live text (name, job, email, bio -> card), trimmed, default text when empty

const form = document.getElementById('card-form');

form.addEventListener('input', function (event) {
    const value = event.target.value.trim();

    if (event.target.id === 'name-input') {
        document.getElementById('card-name').innerText = event.target.value || 'Your name';
        updateAvatar(event.target.value);
    }
    else if (event.target.id === 'job-input') {
        document.getElementById('card-job').innerText = event.target.value || 'Job title';
    }
    else if (event.target.id === 'email-input') {
        document.getElementById('card-email').innerText = event.target.value || 'email@example.com';
    }
    else if (event.target.id === 'bio-input') {
        const bioLeft = document.getElementById('bio-left');
        const counterElement = document.querySelector('.counter');

        document.getElementById('card-bio').innerText = event.target.value || 'Short bio about yourself...';
        const charsLeft = 80 - event.target.value.length;

        if (bioLeft) {
            bioLeft.innerText = charsLeft;
        }

        if (counterElement) {
            if (charsLeft <= 10) {
                counterElement.classList.add('warning');
            } else {
                counterElement.classList.remove('warning');
            }
        }
    }
    else if (event.target.id === 'color-select') {
        const color = event.target.value;
        const card = document.querySelector('.card');
        const avatarCard = document.getElementById('avatar');

        if (card) {
            card.style.borderColor = color;
        }

        if (avatarCard) {
            avatarCard.style.backgroundColor = color;
        }
    }
});
// Step 2: avatar letter (first letter of the name in uppercase, "?" when empty)
const avatarCard = document.getElementById('avatar');
function updateAvatar(nameText) {
    const trimmedName = nameText.trim();

    const firstLetter = trimmedName ? trimmedName[0].toUpperCase() : '?';

    avatarCard.innerText = firstLetter;
}
// Step 3: bio character counter + "warning" class when 10 or fewer are left

// Step 4: accent color (card border + avatar background)

// Step 5: dark mode button
document.addEventListener('click', function (event) {
    handleThemeToggle(event.target);
});
function handleThemeToggle(target) {
    if (!target || target.id !== 'theme-btn') return;
    const isDark = document.body.classList.toggle('dark');
    target.innerText = isDark ? 'Light mode' : 'Dark mode';
}
// Step 6: reset button
document.getElementById("reset-btn")?.addEventListener('click', function () {
    document.getElementById("card-form")?.reset();

    document.getElementById("card-name").innerText = "Your name";
    document.getElementById("card-job").innerText = "Job title";
    document.getElementById("card-email").innerText = "email@example.com";
    document.getElementById("card-bio").innerText = "Short bio about yourself...";

    document.getElementById("avatar").innerText = "?";
    document.getElementById("avatar").style.backgroundColor = "";
    document.getElementById("bio-left").innerText = "80";
    document.querySelector(".counter")?.classList.remove("warning");

    document.querySelector(".card").style.borderColor = "";
    document.body.classList.remove("dark");
    document.getElementById("theme-btn").textContent = "Dark mode";
});
// 

