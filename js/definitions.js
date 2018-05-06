let ingredientsData = [{ ingredientName: 'индейка', ingredientWeight: 100, ingredientPrice: 40 },
{ ingredientName: 'моцарелла', ingredientWeight: 80, ingredientPrice: 30 },
{ ingredientName: 'лосось', ingredientWeight: 80, ingredientPrice: 50 },
{ ingredientName: 'оливки', ingredientWeight: 50, ingredientPrice: 30 },
{ ingredientName: 'ветчина', ingredientWeight: 100, ingredientPrice: 30 },
{ ingredientName: 'телятина', ingredientWeight: 100, ingredientPrice: 50 },
{ ingredientName: 'салями', ingredientWeight: 100, ingredientPrice: 30 },
{ ingredientName: 'шампиньоны', ingredientWeight: 80, ingredientPrice: 30 },
{ ingredientName: 'фасоль стручковая', ingredientWeight: 80, ingredientPrice: 20 },
{ ingredientName: 'перец сладкий', ingredientWeight: 80, ingredientPrice: 20 },
{ ingredientName: 'курица', ingredientWeight: 80, ingredientPrice: 20 },
{ ingredientName: 'пармезан', ingredientWeight: 50, ingredientPrice: 30 },
{ ingredientName: 'сыр бри', ingredientWeight: 50, ingredientPrice: 30 },
{ ingredientName: 'сыр дор-блю', ingredientWeight: 50, ingredientPrice: 30 },
{ ingredientName: 'морской коктейль', ingredientWeight: 80, ingredientPrice: 50 },
{ ingredientName: 'соус сливки', ingredientWeight: 20, ingredientPrice: 10 },
{ ingredientName: 'томатный соус', ingredientWeight: 20, ingredientPrice: 10 },
{ ingredientName: 'соус Табаско', ingredientWeight: 20, ingredientPrice: 10 },
{ ingredientName: 'кисло-сладкий соус', ingredientWeight: 20, ingredientPrice: 10 }];


let pizzas = [{ picture: '/image/takkino-600x600.jpg', name: 'ТАККИНО', ingredientsList: [ingredientsData[0].ingredientName, ingredientsData[18].ingredientName, ingredientsData[1].ingredientName, ingredientsData[15].ingredientName], weight: 420, price: 140.00 },
{ picture: '/image/salmone-600x600.jpg', name: 'САЛЬМОНЕ', ingredientsList: [ingredientsData[2].ingredientName, ingredientsData[3].ingredientName, ingredientsData[1].ingredientName, ingredientsData[15].ingredientName,], weight: 420, price: 170.00 }/*,
{ picture: '/image/diablo-600x600.jpg', name: 'ДИАБЛО', ingredientsList: 'Ветчина, телятина, салями, шампиньоны, моцарелла, соус Табаско, томатный соус', weight: 595 , price: 140.00 },
{ picture: '/image/kalcone-600x600.jpg', name: 'КАЛЬЦОНЕ', ingredientsList: 'Ветчина, шампиньоны, моцарелла, соус сливки', weight: 510 , price: 110.00 },
{ picture: '/image/kalcone-mi-amore-600x600.jpg', name: 'КАЛЬЦОНЕ МИ АМОРЕ', ingredientsList: 'Ветчина, салями, шампиньоны, моцарелла, томатный соус, соус сливки', weight: 490 , price: 115.00 },
{ picture: '/image/kvatro-stadzhioni-600x600.jpg', name: 'КВАТРО СТАДЖИОНИ', ingredientsList: 'Фасоль стручковая, перец сладкий, курица, шампиньоны, пармезан, сыр бри, сыр дор-блю,  моцарелла, морской коктейль, томатный соус', weight: 560 , price: 140.00 },
{ picture: '/image/kvatro-flormadzhi-600x600.jpg', name: 'КВАТРО ФОРМАДЖИ', ingredientsList: 'Моцарелла, пармезан, сыр бри, сыр дор-блю, груша, соус сливки', weight: 520 , price: 140.00 },
{ picture: '/image/takkino-600x600.jpg', name: 'КАРБОНАРА', ingredientsList: 'Бекон, пармезан, моцарелла, соус сливки', weight: 505 , price: 125.00 },
{ picture: '/image/kapricheza-600x600.jpg', name: 'КАПРИЧЕЗА', ingredientsList: 'Ветчина, шампиньоны, моцарелла, оливки, томатный соус', weight: 525 , price: 125.00 },
{ picture: '/image/vitello-600x600.jpg', name: 'ВИТЕЛЛО', ingredientsList: 'Телятина, помидоры, моцарелла, томатный соус', weight: 535 , price: 125.00 },
{ picture: '/image/pollo-600x600.jpg', name: 'ПОЛЛО', ingredientsList: 'Курица, шампиньоны, моцарелла, помидоры, томатный соус', weight: 585 , price: 120.00 },
{ picture: '/image/salsicha-600x600.jpg', name: 'САЛЬСИЧЧА', ingredientsList: 'Колбаски, перец сладкий, моцарелла, томатный соус', weight: 450 , price: 110.00 },
{ picture: '/image/sicilija-600x600.jpg', name: 'СИЦИЛИЯ', ingredientsList: 'Бекон, корнишоны, моцарелла, томатный соус', weight: 510 , price: 110.00 },
{ picture: '/image/saljami-600x600.jpg', name: 'САЛЯМИ', ingredientsList: 'Салями, моцарелла, томатный соус', weight: 465 , price: 110.00 },
{ picture: '/image/olio-di-sardina-600x600.jpg', name: 'ОЛИО ДИ САРДИНА', ingredientsList: 'Сардины в масле, моцарелла, оливки, помидоры, соус томатный', weight: 545 , price: 100.00 },
{ picture: '/image/marinara-600x600.jpg', name: 'МАРИНАРА', ingredientsList: 'Морской коктейль, моцарелла, томатный соус', weight: 485 , price: 140.00 },
{ picture: '/image/vegetariano-600x600.jpg', name: 'ВЕГЕТАРИАНО', ingredientsList: 'Брокколи, цветная капуста, фасоль стручковая, перец сладкий, оливки, моцарелла, шампиньоны, томатный соус', weight: 625 , price: 100.00 },
{ picture: '/image/margarita-600x600.jpg', name: 'МАРГАРИТА', ingredientsList: 'Моцарелла, помидоры, томатный соус', weight: 435 , price: 80.00 }*/];


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