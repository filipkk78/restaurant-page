import clearPage from "..";
import loadHomePage from "./home";

const pizzas = [];

class pizza {
    constructor(name, toppings, price, val) {
    this.name = name;
    this.toppings = toppings;
    this.price = price;
    this.val = val
    pizzas.push(this);
}
}

const pepperoni = new pizza(
    "Pepperoni Pizza", 
    [
        "pepperoni", 
        "mozzarella cheese", 
        "tomato sauce"
    ], 
    14,
    "pepperoni"
);
const burrata = new pizza(
    "Burrata Pizza", 
    [
        "ham", 
        "burrata cheese", 
        "tomato sauce", 
        "mozzarella cheese", 
        "fresh basil"
    ], 
    23,
    "burrata"
);
const jalapeno = new pizza(
    "Jalapeno Pizza", 
    [
        "jalapeno peppers", 
        "mozzarella cheese", 
        "zucchini", 
        "sweet corn", 
        "salsa verde"
    ],
    32,
    "jalapeno"
);

const diavola = new pizza (
    "Pizza Diavola",
    [
        "kalamata olives",
        "mozzarella cheese",
        "tomato sauce",
        "chili peppers"
    ],
    19,
    "diavola"
);

const hawaiian = new pizza (
    "Hawaiian Pizza",
    [
        "ham",
        "mozzarella cheese",
        "tomato sauce",
        "pineapple"
    ],
    26,
    "hawaiian"
);

const taco = new pizza (
    "Taco Pizza",
    [
        "ground beef",
        "mozzarella cheese",
        "tomato sauce",
        "onion",
        "tortilla chips"
    ],
    21,
    "taco"
)

function loadMenuPage() {
    const content = document.querySelector("#content");
    const container = document.createElement("div");
    container.classList.add("container");
    content.appendChild(container);
    // 
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    container.appendChild(menuContainer);
    // 
    const menuTitle = document.createElement("div");
    menuTitle.classList.add("menu-title");
    menuContainer.appendChild(menuTitle)
    // 
    const h1one = document.createElement("h1");
    menuTitle.appendChild(h1one);
    h1one.textContent = "Menu";
    // 
    const menuSidebar = document.createElement("div");
    menuSidebar.classList.add("menu-sidebar");
    menuContainer.appendChild(menuSidebar);
    // 
    const h1two = document.createElement("h1");
    menuSidebar.appendChild(h1two);
    h1two.textContent = "Order";
    //
    const prices = document.createElement("div");
    prices.classList.add("prices");
    menuSidebar.appendChild(prices);
    //
    const priceMultipliersTitle = document.createElement("p");
    priceMultipliersTitle.textContent = "Price multipliers";
    prices.appendChild(priceMultipliersTitle);
    //
    const priceMultipliers = document.createElement("div");
    priceMultipliers.classList.add("price-multipliers");
    prices.appendChild(priceMultipliers);  
    //
    const priceContainerS = document.createElement("div");
    priceContainerS.classList.add("price-container");
    priceMultipliers.appendChild(priceContainerS);
    const priceContainerSizeS = document.createElement("p");
    priceContainerSizeS.textContent = "S";
    priceContainerS.appendChild(priceContainerSizeS);
    const priceContainerMultiplierS = document.createElement("p");
    priceContainerMultiplierS.textContent = "x0.8";
    priceContainerS.appendChild(priceContainerMultiplierS);
    //
    const priceContainerM = document.createElement("div");
    priceContainerM.classList.add("price-container");
    priceMultipliers.appendChild(priceContainerM);
    const priceContainerSizeM = document.createElement("p");
    priceContainerSizeM.textContent = "M";
    priceContainerM.appendChild(priceContainerSizeM);
    const priceContainerMultiplierM = document.createElement("p");
    priceContainerMultiplierM.textContent = "x1.0";
    priceContainerM.appendChild(priceContainerMultiplierM);
    //
    const priceContainerL = document.createElement("div");
    priceContainerL.classList.add("price-container");
    priceMultipliers.appendChild(priceContainerL);
    const priceContainerSizeL = document.createElement("p");
    priceContainerSizeL.textContent = "L";
    priceContainerL.appendChild(priceContainerSizeL);
    const priceContainerMultiplierL = document.createElement("p");
    priceContainerMultiplierL.textContent = "x1.2";
    priceContainerL.appendChild(priceContainerMultiplierL);
    //
    const priceContainerXL = document.createElement("div");
    priceContainerXL.classList.add("price-container");
    priceMultipliers.appendChild(priceContainerXL);
    const priceContainerSizeXL = document.createElement("p");
    priceContainerSizeXL.textContent = "XL";
    priceContainerXL.appendChild(priceContainerSizeXL);
    const priceContainerMultiplierXL = document.createElement("p");
    priceContainerMultiplierXL.textContent = "x1.5";
    priceContainerXL.appendChild(priceContainerMultiplierXL);
    //
    const form = document.createElement("form");
    menuSidebar.appendChild(form);
    // 
    const selectLabel = document.createElement("label");
    selectLabel.setAttribute("for", "pizza");
    selectLabel.textContent = "Toppings"
    form.appendChild(selectLabel);
    // 
    const select = document.createElement("select");
    select.setAttribute("id", "pizza");
    select.setAttribute("name", "pizza");
    form.appendChild(select);
    // 
    const selectDefault = document.createElement("option");
    selectDefault.setAttribute("value", "");
    selectDefault.textContent = "--Select your pizza toppings--"
    select.appendChild(selectDefault);
    //
    for (let k = 0; k < pizzas.length; k++) {
        const selectOption = document.createElement("option");
        selectOption.setAttribute("value", k);
        selectOption.textContent = pizzas[k].name;
        select.appendChild(selectOption);
    }; 
    const radios = document.createElement("div");
    radios.classList.add("radios");
    form.appendChild(radios);
    //
    const size = document.createElement("p");
    size.textContent = "Size";
    radios.appendChild(size);
    //
    const radioContainerOne = document.createElement("div");
    radioContainerOne.classList.add("radio-container");
    radios.appendChild(radioContainerOne);
    //
    const radioContainerTwo = document.createElement("div");
    radioContainerTwo.classList.add("radio-container");
    radios.appendChild(radioContainerTwo);
    //
    const radioContainerThree = document.createElement("div");
    radioContainerThree.classList.add("radio-container");
    radios.appendChild(radioContainerThree);
    //
    const radioContainerFour = document.createElement("div");
    radioContainerFour.classList.add("radio-container");
    radios.appendChild(radioContainerFour);
    //
    const radioS = document.createElement("input");
    radioS.setAttribute("type", "radio");
    radioS.setAttribute("name", "size");
    radioS.setAttribute("id", "s");
    radioS.setAttribute("value", 0.8);
    radioContainerOne.appendChild(radioS);
    const radioOneLabel = document.createElement("label");
    radioOneLabel.setAttribute("for", "s");
    radioOneLabel.textContent = "S";
    radioContainerOne.appendChild(radioOneLabel);
    //
    const radioM = document.createElement("input");
    radioM.setAttribute("type", "radio");
    radioM.setAttribute("name", "size");
    radioM.setAttribute("id", "m");
    radioM.setAttribute("value", 1);
    radioContainerTwo.appendChild(radioM);
    const radioTwoLabel = document.createElement("label");
    radioTwoLabel.setAttribute("for", "m");
    radioTwoLabel.textContent = "M";
    radioContainerTwo.appendChild(radioTwoLabel);
    //
    const radioL = document.createElement("input");
    radioL.setAttribute("type", "radio");
    radioL.setAttribute("name", "size");
    radioL.setAttribute("id", "l");
    radioL.setAttribute("value", 1.2);
    radioContainerThree.appendChild(radioL);
    const radioThreeLabel = document.createElement("label");
    radioThreeLabel.setAttribute("for", "l");
    radioThreeLabel.textContent = "L";
    radioContainerThree.appendChild(radioThreeLabel);
    //
    const radioXL = document.createElement("input");
    radioXL.setAttribute("type", "radio");
    radioXL.setAttribute("name", "size");
    radioXL.setAttribute("id", "xl");
    radioXL.setAttribute("value", 1.5);
    radioContainerFour.appendChild(radioXL);
    const radioFourLabel = document.createElement("label");
    radioFourLabel.setAttribute("for", "xl");
    radioFourLabel.textContent = "XL";
    radioContainerFour.appendChild(radioFourLabel);
    //
    const addressOneLabel = document.createElement("label");
    addressOneLabel.setAttribute("for", "address1")
    addressOneLabel.textContent = "Delivery address line 1";
    form.appendChild(addressOneLabel);
    //
    const addressOne = document.createElement("input");
    addressOne.setAttribute("type", "text");
    addressOne.setAttribute("required", "");
    addressOne.setAttribute("name", "address1");
    addressOne.setAttribute("id", "address1");
    form.appendChild(addressOne);
    //
    const addressTwoLabel = document.createElement("label");
    addressTwoLabel.setAttribute("for", "address2")
    addressTwoLabel.textContent = "Delivery address line 2";
    form.appendChild(addressTwoLabel);
    //
    const addressTwo = document.createElement("input");
    addressTwo.setAttribute("type", "text");
    addressTwo.setAttribute("required", "");
    addressTwo.setAttribute("name", "address2");
    addressTwo.setAttribute("id", "address2");
    form.appendChild(addressTwo);
    //
    const cityLabel = document.createElement("label");
    cityLabel.setAttribute("for", "city")
    cityLabel.textContent = "City name";
    form.appendChild(cityLabel);
    //
    const city = document.createElement("input");
    city.setAttribute("type", "text");
    city.setAttribute("required", "");
    city.setAttribute("name", "city");
    city.setAttribute("id", "city");
    form.appendChild(city);
    //
    const btn = document.createElement("button");
    btn.setAttribute("type", "submit");
    btn.textContent = "Submit";
    form.appendChild(btn);
    btn.addEventListener("click", () => {
        const pizzaType = document.querySelector("select").value;
        const pizzaSize = document.querySelector('input[name="size"]:checked').value;
        const pizzaPrice = pizzas[pizzaType].price*pizzaSize
        //
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        };
        const h1 = document.createElement("h1");
        h1.textContent = "Thank you for placing your order";
        container.appendChild(h1);
        const p1 = document.createElement("p");
        p1.textContent = `Your price is ${pizzaPrice+2}$ (${pizzaPrice}$ + 2$ delivery fee)`;
        container.appendChild(p1);
        const p = document.createElement("p");
        p.textContent = "Please wait while we prepare your food"
        container.appendChild(p);
        const nextGoHome = document.createElement("p");
        nextGoHome.addEventListener("click", () => {
            clearPage()
            loadHomePage()
        });
        nextGoHome.classList.add("link");
        nextGoHome.textContent = "Back to home page";
        container.appendChild(nextGoHome);
    });
    //
    const menu = document.createElement("div");
    menu.classList.add("menu");
    menuContainer.appendChild(menu);
    //
    for (let i = 0; i < pizzas.length ; i++) {
    const menuCard = document.createElement("div");
    menuCard.classList.add("menu-card");
    menuCard.setAttribute("id", `card${i}`);
    menu.appendChild(menuCard);
    }
    for(let i = 0; i < pizzas.length ; i++) {
        const currentPizza = pizzas[i];
        const currentCard = document.querySelector(`#card${i}`);
        const pizzaName = document.createElement("h3");
        pizzaName.textContent = currentPizza.name;
        currentCard.appendChild(pizzaName);
        const ingredients = document.createElement("ul");
        for(let j = 0; j < currentPizza.toppings.length; j++) {
            const li = document.createElement("li");
            li.textContent = currentPizza.toppings[j];
            ingredients.appendChild(li);
        }
        currentCard.appendChild(ingredients);
        const price = document.createElement("h3");
        price.textContent = `${currentPizza.price}$`;
        price.classList.add("card-price");
        currentCard.appendChild(price);
    }
}

export default loadMenuPage;