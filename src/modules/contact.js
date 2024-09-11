import loadHomePage from "./home";
import clearPage from "..";

function loadContactPage() {
    const content = document.querySelector("#content");
    const container = document.createElement("div");
    container.classList.add("container");
    content.appendChild(container);
    const h1 = document.createElement("h1");
    container.appendChild(h1);
    h1.textContent = "Contact us";
    const form = document.createElement("form");
    container.appendChild(form);
    const firstNameLabel = document.createElement("label");
    firstNameLabel.setAttribute("for", "firstname")
    firstNameLabel.textContent = "First name";
    form.appendChild(firstNameLabel)
    const firstName = document.createElement("input");
    firstName.setAttribute("type", "text");
    firstName.setAttribute("required", "");
    firstName.setAttribute("name", "firstname");
    firstName.setAttribute("id", "firstname");
    form.appendChild(firstName);
    const lastNameLabel = document.createElement("label");
    lastNameLabel.setAttribute("for", "lastname")
    lastNameLabel.textContent = "Last name";
    form.appendChild(lastNameLabel)
    const lastName = document.createElement("input");
    lastName.setAttribute("type", "text");
    lastName.setAttribute("required", "");
    lastName.setAttribute("name", "lastname");
    lastName.setAttribute("id", "lastname");
    form.appendChild(lastName);
    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email")
    emailLabel.textContent = "E-mail";
    form.appendChild(emailLabel)
    const email = document.createElement("input");
    email.setAttribute("type", "email")
    email.setAttribute("required", "");
    email.setAttribute("name", "email");
    email.setAttribute("id", "email");
    form.appendChild(email);
    const topicLabel = document.createElement("label");
    topicLabel.setAttribute("for", "topic")
    topicLabel.textContent = "Topic";
    form.appendChild(topicLabel)
    const topic = document.createElement("input");
    topic.setAttribute("type", "text")
    topic.setAttribute("required", "");
    topic.setAttribute("name", "topic");
    topic.setAttribute("id", "topic");
    form.appendChild(topic);
    const messageLabel = document.createElement("label");
    messageLabel.setAttribute("for", "message");
    messageLabel.textContent = "Message";
    form.appendChild(messageLabel);
    const message = document.createElement("textarea");
    message.setAttribute("required", "");
    message.setAttribute("name", "email");
    message.setAttribute("id", "email");
    message.setAttribute("maxlength", "1000");
    form.appendChild(message);
    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("id", "submitBtn");
    submitBtn.textContent = "Send";
    form.appendChild(submitBtn);
    submitBtn.addEventListener("click", () => {
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
        const nextTitle = document.createElement("h1");
        nextTitle.textContent = "Thank you for reaching out.";
        container.appendChild(nextTitle);
        const nextMessage = document.createElement("p");
        nextMessage.textContent = "We will get back to you as soon as possible."
        container.appendChild(nextMessage);
        nextMessage.style.textAlign = "center";
        const nextGoHome = document.createElement("p");
        nextGoHome.addEventListener("click", () => {
            clearPage()
            loadHomePage()
        });
        nextGoHome.classList.add("link");
        nextGoHome.textContent = "Back to home page";
        container.appendChild(nextGoHome);
    });
}

export default loadContactPage;