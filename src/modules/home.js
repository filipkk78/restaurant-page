import imgPath from '../images/homepage.jpg';

function loadHomePage() {
    const content = document.querySelector("#content");
    const container = document.createElement("div");
    container.classList.add("container");
    content.appendChild(container);
    const h1 = document.createElement("h1");
    container.appendChild(h1);
    h1.textContent = "Welcome to our restaurant";
    const image = document.createElement("img");
    image.src = imgPath;
    image.alt = "Dining";
    container.appendChild(image);
    const p = document.createElement("p");
    container.appendChild(p);
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus at eligendi dicta aspernatur quo maxime, incidunt dolore illum. Libero beatae sit ducimus officiis sequi cum aliquid! Numquam, ipsam. Ab, voluptatibus."
}

export default loadHomePage;