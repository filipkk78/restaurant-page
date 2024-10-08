import imgPath from '../images/homepage.jpg';

function loadHomePage() {
    const content = document.querySelector("#content");
    const container = document.createElement("div");
    container.classList.add("container");
    content.appendChild(container);
    const h1 = document.createElement("h1");
    container.appendChild(h1);
    h1.textContent = "Welcome to our restaurant!";
    const image = document.createElement("img");
    image.src = imgPath;
    image.alt = "Dining";
    container.appendChild(image);
    const p = document.createElement("p");
    container.appendChild(p);
    p.textContent = "Here at our restaurant we try our best to prepare food at the highest standard. Our main selling point is pizza, but we also have other foods such as fries, burgers, hot dogs, kebab and many more."
}

export default loadHomePage;