let items = [{ picture: '/image/takkino-600x600.jpg', name: 'ТАККИНО', description: 'Индейка, кисло-сладкий соус, моцарелла, соус сливки', weight: '420 г.', price: '140.00 грн.' },
{ picture: '/image/salmone-600x600.jpg', name: 'САЛЬМОНЕ', description: 'Лосось, оливки, моцарелла, соус сливки', weight: '420 г.', price: '170.00 грн.' },
{ picture: '/image/diablo-600x600.jpg', name: 'ДИАБЛО', description: 'Ветчина, телятина, салями, шампиньоны, моцарелла, лук, перец Пири-Пири, соус Табаско, томатный соус', weight: '595 г.', price: '140.00 грн.' },
{ picture: '/image/kalcone-600x600.jpg', name: 'КАЛЬЦОНЕ', description: 'Ветчина, шампиньоны, моцарелла, соус сливки', weight: '510 г.', price: '110.00 грн.' },
{ picture: '/image/kalcone-mi-amore-600x600.jpg', name: 'КАЛЬЦОНЕ МИ АМОРЕ', description: 'Ветчина, салями, шампиньоны, моцарелла, томатный соус, соус сливки', weight: '490 г.', price: '115.00 грн.' },
{ picture: '/image/kvatro-stadzhioni-600x600.jpg', name: 'КВАТРО СТАДЖИОНИ', description: 'Фасоль стручковая, перец сладкий, курица, шампиньоны, пармезан, сыр бри, сыр дор-блю,  моцарелла, морской коктейль  (креветки, мидии, осьминог, кальмар), томатный соус', weight: '560 г.', price: '140.00 грн.' },
{ picture: '/image/kvatro-flormadzhi-600x600.jpg', name: 'КВАТРО ФОРМАДЖИ', description: 'Моцарелла, пармезан, сыр бри, сыр дор-блю, груша, соус сливки', weight: '520 г.', price: '140.00 грн.' },
{ picture: '/image/takkino-600x600.jpg', name: 'КАРБОНАРА', description: 'Бекон, пармезан, моцарелла, соус сливки', weight: '505 г.', price: '125.00 грн.' },
{ picture: '/image/kapricheza-600x600.jpg', name: 'КАПРИЧЕЗА', description: 'Ветчина, шампиньоны, моцарелла, каперсы, оливки, томатный соус', weight: '525 г.', price: '125.00 грн.' },
{ picture: '/image/vitello-600x600.jpg', name: 'ВИТЕЛЛО', description: 'Телятина, помидоры, моцарелла, томатный соус', weight: '535 г.', price: '125.00 грн.' },
{ picture: '/image/pollo-600x600.jpg', name: 'ПОЛЛО', description: 'Курица, шампиньоны, моцарелла, помидоры, томатный соус', weight: '585 г.', price: '120.00 грн.' },
{ picture: '/image/salsicha-600x600.jpg', name: 'САЛЬСИЧЧА', description: 'Колбаски, перец сладкий, моцарелла, томатный соус', weight: '450 г.', price: '110.00 грн.' },
{ picture: '/image/sicilija-600x600.jpg', name: 'СИЦИЛИЯ', description: 'Бекон, корнишоны, моцарелла, лук, томатный соус', weight: '510 г.', price: '110.00 грн.' },
{ picture: '/image/saljami-600x600.jpg', name: 'САЛЯМИ', description: 'Салями, перец Пири-Пири, моцарелла, томатный соус', weight: '465 г.', price: '110.00 грн.' },
{ picture: '/image/olio-di-sardina-600x600.jpg', name: 'ОЛИО ДИ САРДИНА', description: 'Сардины в масле, моцарелла, лук, оливки, помидоры, соус томатный', weight: '545 г.', price: '100.00 грн.' },
{ picture: '/image/marinara-600x600.jpg', name: 'МАРИНАРА', description: 'Морской коктейль (креветки, мидии, осьминог, кальмар), моцарелла, томатный соус', weight: '485 г.', price: '140.00 грн.' },
{ picture: '/image/vegetariano-600x600.jpg', name: 'ВЕГЕТАРИАНО', description: 'Брокколи, цветная капуста, фасоль стручковая, перец сладкий, оливки, моцарелла, шампиньоны, томатный соус', weight: '625 г.', price: '100.00 грн.' },
{ picture: '/image/margarita-600x600.jpg', name: 'МАРГАРИТА', description: 'Моцарелла, помидоры, томатный соус', weight: '435 г.', price: '80.00 грн.' }];


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



tableInput.onclick = function() {
    tableInput.checked = true;
    listInput.checked = false;

    tableOption.hidden = false;
    listOption.hidden = true;
};

listInput.onclick = function() {
    tableInput.checked = false;
    listInput.checked = true;

    listOption.hidden = false;
    tableOption.hidden = true;
};


// table creation:
// table pages creation:

function createPizzaDiv(item) {
    let itemWrap = createDiv('product-layout');
    tableOption.appendChild(itemWrap);

    let imageDiv = createDiv('image');
    itemWrap.appendChild(imageDiv);

    let img = document.createElement('img');
    imageDiv.appendChild(img).setAttribute('src', item.picture);

    let descDiv = createDiv('desc');
    itemWrap.appendChild(descDiv);

    let nameDiv = createDiv('name');
    descDiv.appendChild(nameDiv);
    let name_content = document.createTextNode(item.name);
    nameDiv.appendChild(name_content);

    let description = createDiv('description');
    descDiv.appendChild(description);
    let description_content = document.createTextNode(item.description);
    description.appendChild(description_content);

    let priceDiv = createDiv('price');
    descDiv.appendChild(priceDiv);
    let price_content = document.createTextNode(item.price);
    priceDiv.appendChild(price_content);

    let weightDiv = createDiv('weight');
    descDiv.appendChild(weightDiv);
    let weight_content = document.createTextNode(item.weight);
    weightDiv.appendChild(weight_content);
}


for (let i = 0; i < items.length; i++) {
    createPizzaDiv(items[i]);
}

//list creation:
let listWrapper = document.createElement('ul');
listOption.appendChild(listWrapper).classList.add('pizza_list');


function createPizzaLi(item) {
    let pizzaListItem = createLi();
    listWrapper.appendChild(pizzaListItem);

    let nameSpan = document.createElement('span');
    let span_content = document.createTextNode(item.name);
    nameSpan.appendChild(span_content);

    let descriptionSpan = document.createElement('span');
    let descriptionSpan_content = document.createTextNode(', ' + item.weight + ', ' + item.price);
    descriptionSpan.appendChild(descriptionSpan_content);

    pizzaListItem.appendChild(nameSpan).classList.add('name');
    pizzaListItem.appendChild(descriptionSpan).classList.add('description');
}


for (let i = 0; i < items.length; i++) {
    createPizzaLi(items[i]);
}


//secondary functions:

function createDiv(className) {
    let div = document.createElement('div');
    div.classList.add(className);
    return div;
}

function createLi() {
    let li = document.createElement('li');
    return li;
}

function createInput(attrName) {
    let input = document.createElement('input');
    input.setAttribute('type', attrName);
    return input;
}