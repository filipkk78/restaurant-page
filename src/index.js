import "./styles.css";
import loadHomePage from "./modules/home";
import loadMenuPage from "./modules/menu";
import loadContactPage from "./modules/contact";

function clearPage() {
    const content = document.querySelector("#content");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

document.addEventListener("DOMContentLoaded", loadHomePage);

const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", () => {
    clearPage();
    loadHomePage();
});

const menuBtn = document.querySelector("#menu");
menuBtn.addEventListener("click", () => {
    clearPage();
    loadMenuPage();
});

const contactBtn = document.querySelector("#contact");
contactBtn.addEventListener("click", () => {
    clearPage();
    loadContactPage();
});

export default clearPage;