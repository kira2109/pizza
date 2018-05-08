/* global createInput, createDiv, pizzas, createLi, ingredientsData */

document.body.children[0].insertAdjacentHTML('afterEnd', '<main>');
let main = document.body.children[1];
main.classList.add('container');

//switch options creation - table or list:
let tableInput = createInput('radio');
main.appendChild(tableInput);
let tableId = 'table';
tableInput.id = tableId;
tableInput.checked = true;

let listInput = createInput('radio');
main.appendChild(listInput);
let listId = 'list';
listInput.id = listId;

let optionControls = createDiv('controls');
main.appendChild(optionControls);

let tableLabel = document.createElement('label');
optionControls.appendChild(tableLabel).setAttribute('for', tableId);

let tableLabel_name = document.createTextNode('Таблица');
tableLabel.appendChild(tableLabel_name);

let listLabel = document.createElement('label');
optionControls.appendChild(listLabel).setAttribute('for', listId);
let listLabel_name = document.createTextNode('Список');
listLabel.appendChild(listLabel_name);

let optionsDiv = createDiv('options');
main.appendChild(optionsDiv);

let tableOption = createDiv('table');
optionsDiv.appendChild(tableOption);

let listOption = createDiv('list');
optionsDiv.appendChild(listOption);
listOption.hidden = true;

tableInput.onclick = function () {
    tableInput.checked = true;
    listInput.checked = false;

    tableOption.hidden = false;
    listOption.hidden = true;
};

listInput.onclick = function () {
    tableInput.checked = false;
    listInput.checked = true;

    listOption.hidden = false;
    tableOption.hidden = true;
};

// table creation:
// table pages creation:
let pizzaWrappers = [];

for (let i = 0; i < pizzas.length; i++) {
    pizzaWrappers[i] = { name: pizzas[i].name, wrapper: createPizzaDiv(pizzas[i]) };
}


//list creation:
let listWrapper = document.createElement('ul');
listOption.appendChild(listWrapper).classList.add('pizza_list');

for (let i = 0; i < pizzas.length; i++) {
    createPizzaLi(pizzas[i]);
}

function createPizzaDiv(pizza) {
    let pizzaDiv = createDiv('pizza-layout');
    pizzaDiv.dataset.name = pizza.name;
    tableOption.appendChild(pizzaDiv);

    let imageDiv = createDiv('image');
    pizzaDiv.appendChild(imageDiv);

    let img = document.createElement('img');
    imageDiv.appendChild(img).setAttribute('src', pizza.picture);

    let descDiv = createDiv('desc');
    pizzaDiv.appendChild(descDiv);

    let nameDiv = createDiv('name');
    descDiv.appendChild(nameDiv);
    let name_content = document.createTextNode(pizza.name);
    nameDiv.appendChild(name_content);

    let ingredients = createDiv('ingredientsList');
    descDiv.appendChild(ingredients);
    for (let j = 0; j < pizza.ingredientsList.length; j++) {
        let ingredientWrapperDiv = createDiv('ingredientWrapper');

        let labelIngredient = document.createElement('label');
        labelIngredient.setAttribute('name', pizza.ingredientsList[j]);
        labelIngredient.dataset.click = 1;
        
        let ingredientsListContent = document.createTextNode(pizza.ingredientsList[j]);
        labelIngredient.appendChild(ingredientsListContent);
        ingredientWrapperDiv.appendChild(labelIngredient);

        let ingredient = pizza.ingredientsList[j];

        let plusInput = createInput('button');
        plusInput.value = '+';
        plusInput.dataset.ingredient = ingredient;
        plusInput.dataset.pizza = pizza.name;

        ingredientWrapperDiv.appendChild(plusInput);

        plusInput.addEventListener('click', addIngredient);


        let minusInput = createInput('button');
        minusInput.value = '-';
        minusInput.dataset.ingredient = ingredient;
        minusInput.dataset.pizza = pizza.name;

        ingredientWrapperDiv.appendChild(minusInput);

        minusInput.addEventListener('click', removeIngredient);

        ingredients.appendChild(ingredientWrapperDiv);
    }

    let priceDiv = createDiv('price');
    descDiv.appendChild(priceDiv);
    let priceContent = document.createTextNode(pizza.price);
    priceDiv.appendChild(priceContent);

    let priceUnitSpan = document.createElement('span');
    let priceUnitSpanContent = document.createTextNode(' грн.');
    priceUnitSpan.appendChild(priceUnitSpanContent);
    priceDiv.appendChild(priceUnitSpan);

    let weightDiv = createDiv('weight');
    descDiv.appendChild(weightDiv);
    let weightContent = document.createTextNode(pizza.weight);
    weightDiv.appendChild(weightContent);

    let weightUnitSpan = document.createElement('span');
    let weightUnitSpanContent = document.createTextNode(' г.');
    weightUnitSpan.appendChild(weightUnitSpanContent);
    weightDiv.appendChild(weightUnitSpan);

    return pizzaDiv;
}

function createPizzaLi(pizza) {
    let pizzaListpizza = createLi();
    listWrapper.appendChild(pizzaListpizza);

    let nameSpan = document.createElement('span');
    let span_content = document.createTextNode(pizza.name);
    nameSpan.appendChild(span_content);

    let ingredientsListSpan = document.createElement('span');
    let ingredientsListSpan_content = document.createTextNode(', ' + pizza.weight + ' г.' + ', ' + pizza.price + ' грн.');
    ingredientsListSpan.appendChild(ingredientsListSpan_content);

    pizzaListpizza.appendChild(nameSpan).classList.add('name');
    pizzaListpizza.appendChild(ingredientsListSpan).classList.add('ingredientsList');
}


function addIngredient(e) {
    let eventParent = e.path[1];
    let targetIngredient = eventParent.getElementsByTagName('label')[0];
    let clickCount = targetIngredient.dataset.click;
    clickCount += 1;

    let ingredientName = e.currentTarget.dataset.ingredient;
    let pizzaName = e.currentTarget.dataset.pizza;

    updatePizza(ingredientName, pizzaName, clickCount, function (currentValue, ingredientValue) {
        return currentValue + ingredientValue;
    });
    
}

function removeIngredient(e) {
    let eventParent = e.path[1];
    let targetIngredient = eventParent.getElementsByTagName('label')[0];
    let clickCount = targetIngredient.dataset.click;
    clickCount -= 1;

    if (clickCount < 0) {
        return;
    }

    let ingredientName = e.currentTarget.dataset.ingredient;
    let pizzaName = e.currentTarget.dataset.pizza;

    updatePizza(ingredientName, pizzaName, clickCount, function (currentValue, ingredientValue) {
        return currentValue - ingredientValue;
    });
}


function updatePizza(ingredientName, pizzaName, clickCount, changeFunc) {
    let foundIngredient = ingredientsData.find(ingredient => ingredient.ingredientName === ingredientName);
    let foundPizza = pizzaWrappers.find(pizza => pizza.name === pizzaName);

    let targetSelector = 'label[name=' + ingredientName +']';
    let targetIngredient = foundPizza.wrapper.querySelector(targetSelector);
    targetIngredient.dataset.click = clickCount;

    let weightDiv = foundPizza.wrapper.querySelector('.weight');
    let weightValue = weightDiv.firstChild.data;

    let newWeightValue = changeFunc(+weightValue, foundIngredient.ingredientWeight);
    let newWeightElement = document.createTextNode(newWeightValue);
    weightDiv.replaceChild(newWeightElement, weightDiv.firstChild);

    let priceDiv = foundPizza.wrapper.querySelector('.price');
    let priceValue = priceDiv.firstChild.data;

    let newPriceValue = changeFunc(+priceValue, foundIngredient.ingredientPrice);
    let newPriceElement = document.createTextNode(newPriceValue);
    priceDiv.replaceChild(newPriceElement, priceDiv.firstChild);
}