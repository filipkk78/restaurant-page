const pizzas = [];

class pizza {
    constructor(name, toppings, price) {
    this.name = name;
    this.toppings = toppings;
    this.price = price;
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
    14
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
    23
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
    32
);

const diavola = new pizza (
    "Pizza Diavola",
    [
        "kalamata olives",
        "mozzarella cheese",
        "tomato sauce",
        "chili peppers"
    ],
    19
);

const hawaiian = new pizza (
    "Hawaiian Pizza",
    [
        "ham",
        "mozzarella cheese",
        "tomato sauce",
        "pineapple"
    ],
    26
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
    21
)

// console.log(pizzas);

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
    const pepperoni = document.createElement("option");
    pepperoni.setAttribute("value", "pepperoni");
    pepperoni.textContent = "Pepperoni Pizza";
    select.appendChild(pepperoni);
    //
    const burrata = document.createElement("option");
    burrata.setAttribute("value", "burrata");
    burrata.textContent = "Burrata Pizza";
    select.appendChild(burrata);
    //
    const jalapeno = document.createElement("option");
    jalapeno.setAttribute("value", "jalapeno");
    jalapeno.textContent = "Jalapeno Pizza";
    select.appendChild(jalapeno);
    // 
    const diavola = document.createElement("option");
    diavola.setAttribute("value", "diavola");
    diavola.textContent = "Pizza Diavola";
    select.appendChild(diavola);
    // 
    const hawaiian = document.createElement("option");
    hawaiian.setAttribute("value", "hawaiian");
    hawaiian.textContent = "Hawaiian Pizza";
    select.appendChild(hawaiian);
    // 
    const taco = document.createElement("option");
    taco.setAttribute("value", "taco");
    taco.textContent = "Taco Pizza";
    select.appendChild(taco);
    // 
    const radios = document.createElement("div");
    radios.classList.add("radios");
    form.appendChild(radios);
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
    //
    const menu = document.createElement("div");
    menu.classList.add("menu");
    menuContainer.appendChild(menu);
    //
    for (let i = 0; i < 6 ; i++) {
    const menuCard = document.createElement("div");
    menuCard.classList.add("menu-card");
    menuCard.setAttribute("id", `card${i}`);
    menu.appendChild(menuCard);
    }
    for(let i = 0; i < 6 ; i++) {
        const currentPizza = pizzas[i];
        const currentCard = document.querySelector(`#card${i}`);
        console.log(`Current pizza is ${currentPizza.name}`);
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