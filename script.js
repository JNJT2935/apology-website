const enterButton = document.getElementById("enterButton");

enterButton.addEventListener("click", () => {

    enterButton.disabled = true;

    enterButton.innerHTML = `
        <span>ACCESSING FILE...</span>
        <span class="arrow">→</span>
    `;

    setTimeout(() => {

        window.location.href = "pages/apology.html";

    }, 1200);

});