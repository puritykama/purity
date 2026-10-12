const starsContainer = document.getElementById("stars");

// Создаём звёзды на фоне
function createStars() {
    if (!starsContainer) return;

    starsContainer.replaceChildren();

    const count = window.innerWidth < 600 ? 65 : 120;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
        const star = document.createElement("span");

        star.className = "star";
        star.style.left = ${Math.random() * 100}%;
        star.style.top = ${Math.random() * 100}%;

        const size = Math.random() < 0.15 ? 3 : 1.5;
        star.style.width = ${size}px;
        star.style.height = ${size}px;

        star.style.setProperty(
            "--duration",
            ${2 + Math.random() * 5}s
        );

        star.style.setProperty(
            "--delay",
            ${-Math.random() * 5}s
        );

        fragment.appendChild(star);
    }

    starsContainer.appendChild(fragment);
}

createStars();

// Обновляем количество звёзд при изменении размера окна
let resizeTimeout;

window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(createStars, 250);
});