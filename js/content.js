/* global createInput, createDiv, pizzas, createLi, ingredientsData */

document.body.children[0].insertAdjacentHTML('afterEnd', '<main>');
let main = document.body.children[1];
main.classList.add('container');

let firstRowDiv = createDiv('firstRow');
main.appendChild(firstRowDiv);

//switch options creation - table/list/basket:
let tableInput = createInput('radio');
firstRowDiv.appendChild(tableInput);
let tableId = 'table';
tableInput.id = tableId;
tableInput.checked = true;

let listInput = createInput('radio');
firstRowDiv.appendChild(listInput);
let listId = 'list';
listInput.id = listId;

let basketInput = createInput('radio');
firstRowDiv.appendChild(basketInput);
let basketId = 'basket';
basketInput.id = basketId;


let optionControls = createDiv('controls');
firstRowDiv.appendChild(optionControls);

let tableLabel = document.createElement('label');
optionControls.appendChild(tableLabel).setAttribute('for', tableId);

let tableLabel_name = document.createTextNode('Таблица');
tableLabel.appendChild(tableLabel_name);

let listLabel = document.createElement('label');
optionControls.appendChild(listLabel).setAttribute('for', listId);
let listLabel_name = document.createTextNode('Список');
listLabel.appendChild(listLabel_name);

let basketLabel = document.createElement('label');
optionControls.appendChild(basketLabel).setAttribute('for', basketId);
let basketLabel_name = document.createTextNode('Корзина');
basketLabel.appendChild(basketLabel_name);

let optionsDiv = createDiv('options');
main.appendChild(optionsDiv);

let tableOption = createDiv('table');
optionsDiv.appendChild(tableOption);

let listOption = createDiv('list');
optionsDiv.appendChild(listOption);
listOption.hidden = true;

let basketOption = createDiv('basket');
optionsDiv.appendChild(basketOption);
basketOption.hidden = true;

tableInput.onclick = function () {
    tableInput.checked = true;
    listInput.checked = false;
    basketInput.checked = false;

    tableOption.hidden = false;
    listOption.hidden = true;
    basketOption.hidden = true;
};

listInput.onclick = function () {
    tableInput.checked = false;
    listInput.checked = true;
    basketInput.checked = false;

    listOption.hidden = false;
    tableOption.hidden = true;
    basketOption.hidden = true;
};

basketInput.onclick = function () {
    tableInput.checked = false;
    listInput.checked = false;
    basketInput.checked = true;

    listOption.hidden = true;
    tableOption.hidden = true;
    basketOption.hidden = false;
};

// table creation:
// table pages creation:
let pizzaWrappers = [];

for (let i = 0; i < pizzas.length; i++) {
    pizzaWrappers[i] = { name: pizzas[i].name, wrapper: createPizzaDiv(pizzas[i], i) };
}


//list creation:
let listWrapper = document.createElement('ul');
listOption.appendChild(listWrapper).classList.add('pizza_list');

for (let i = 0; i < pizzas.length; i++) {
    createPizzaLi(pizzas[i]);
}

//basket content:

let orderInfoDiv = createDiv('orderInfo');
basketOption.appendChild(orderInfoDiv);

let clearBasketInput = createInput('button');
clearBasketInput.value = 'Очистить корзину';
clearBasketInput.classList.add('clearBasket');
basketOption.appendChild(clearBasketInput);


basketInput.addEventListener('click', openbasket);
clearBasketInput.addEventListener('click', function () {
    localStorage.clear();
    orderInfoDiv.innerHTML = 'Корзина очищена.';
});



function getbasketData() {
    return JSON.parse(localStorage.getItem('basket'));
}

function setbasketData(obj) {
    localStorage.setItem('basket', JSON.stringify(obj));
}

function addTobasket() {
    this.disabled = true; // блокируем кнопку на время операции с корзиной
    let basketData = getbasketData() || {},
        parentBox = this.parentNode,
        productId = this.getAttribute('data-id'),
        productTitle = parentBox.querySelector('.name').innerHTML,
        productPrice = parentBox.querySelector('.price').innerHTML;

    if (basketData.hasOwnProperty(productId)) {
        basketData[productId][2] += 1;
    } else {
        basketData[productId] = [productTitle, productPrice, 1];
    }
    if (!setbasketData(basketData)) { // Обновляем данные в LocalStorage
        this.disabled = false; // разблокируем кнопку после обновления LS
    }
}

function openbasket() {
    let basketData = getbasketData(),
        productTable = '';

    if (basketData !== null) {
        productTable = '<table class="shopping_list"><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th></tr>';
        for (let product in basketData) {
            productTable += '<tr>';
            for (let i = 0; i < basketData[product].length; i++) {
                productTable += '<td>' + basketData[product][i] + '</td>';

            }
            productTable += '<td><input type = "button" value = "+" class = "addProduct" data-id="' + product + '"></td><td><input type = "button" value = "-" class = "removeProduct" data-id="' + product + '"></td>';
            productTable += '</tr>';
        }
        productTable += '<tr><td>Итого:</td><td colspan = "4">' + getPriceOrder() + ' грн.</td></tr>';
        productTable += '</table>';
        orderInfoDiv.innerHTML = productTable;
        let addbuttons = orderInfoDiv.querySelectorAll('.addProduct');
        for (let i = 0; i < addbuttons.length; i++) {
            addbuttons[i].addEventListener('click', addProduct);
        }
        let removebuttons = orderInfoDiv.querySelectorAll('.removeProduct');
        for (let i = 0; i < removebuttons.length; i++) {
            removebuttons[i].addEventListener('click', removeProduct);
        }

    } else {
        orderInfoDiv.innerHTML = 'В корзине пусто!';
    }
}

function addProduct() {
    let basketData = getbasketData();
    let productId = this.getAttribute('data-id');
    basketData[productId][2] += 1;
    setbasketData(basketData);
    openbasket();
}

function removeProduct() {
    let basketData = getbasketData();
    let productId = this.getAttribute('data-id');
    basketData[productId][2] -= 1;
    if (basketData[productId][2] < 0) {
        delete basketData[productId];
    }
    setbasketData(basketData);
    openbasket();
}

function getPriceOrder() {
    let basketData = getbasketData();
    let sum = 0;

    for (let product in basketData) {
        let productPrice = basketData[product][1].split('<');
        let pricePerQuantity = +productPrice[0] * basketData[product][2];
        sum += pricePerQuantity;
    }

    return sum;
}

function createPizzaDiv(pizza, number) {
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

    let buyButton = createInput('button');
    buyButton.value = 'В корзину';
    buyButton.dataset.id = number;
    buyButton.classList.add('tobasket');
    descDiv.appendChild(buyButton);

    buyButton.addEventListener('click', addTobasket);


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

    let targetSelector = 'label[name=' + ingredientName + ']';
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