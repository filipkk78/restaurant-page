function loadMenuPage() {
    const content = document.querySelector("#content");
    const container = document.createElement("div");
    container.classList.add("container");
    content.appendChild(container);
    const h1 = document.createElement("h1");
    container.appendChild(h1);
    h1.textContent = "Menu";
    
}

export default loadMenuPage;