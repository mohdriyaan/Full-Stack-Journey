const generateBtn = document.querySelector("#generate-btn");
const paletteContainer = document.querySelector(".palette-container");
const colorBoxes = document.querySelectorAll(".color-box"); // cache DOM

generateBtn.addEventListener("click", generatePalette);

paletteContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".copy-btn");
    const colorDiv = e.target.closest(".color");

    // If copy button clicked
    if (btn) {
        const hexValue = btn.previousElementSibling.textContent;
        copyToClipboard(hexValue, btn);
    }

    // If color box clicked
    else if (colorDiv) {
        const wrapper = colorDiv.parentElement;
        const hexValue = wrapper.querySelector(".hex-value").textContent;
        const btnIcon = wrapper.querySelector(".copy-btn");

        copyToClipboard(hexValue, btnIcon);
    }
});

// Helper
function copyToClipboard(hex, iconElement) {
    navigator.clipboard.writeText(hex)
        .then(() => showCopySuccess(iconElement))
        .catch(console.error);
}

function showCopySuccess(element) {
    element.classList.remove("far", "fa-copy");
    element.classList.add("fas", "fa-check");
    element.style.color = "#48bb78";

    setTimeout(() => {
        element.classList.remove("fas", "fa-check");
        element.classList.add("far", "fa-copy");
        element.style.color = "";
    }, 1500);
}

function generatePalette() {
    const colors = [];

    // Create a color for each color-box automatically
    for (let i = 0; i < colorBoxes.length; i++) {
        colors.push(generateRandomColor());
    }

    updatePaletteDisplay(colors);
}

function generateRandomColor() {
    const letters = "0123456789ABCDEF"; // fixed missing 3
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

function updatePaletteDisplay(colors) {
    colorBoxes.forEach((box, i) => {
        const colorDiv = box.querySelector(".color");
        const hexValue = box.querySelector(".hex-value");

        colorDiv.style.backgroundColor = colors[i];
        hexValue.textContent = colors[i];
    });
}
