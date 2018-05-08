let ingredientsData = [{ ingredientName: 'индейка', ingredientWeight: 100, ingredientPrice: 40},
{ ingredientName: 'моцарелла', ingredientWeight: 80, ingredientPrice: 30},
{ ingredientName: 'лосось', ingredientWeight: 80, ingredientPrice: 50},
{ ingredientName: 'оливки', ingredientWeight: 50, ingredientPrice: 30},
{ ingredientName: 'ветчина', ingredientWeight: 100, ingredientPrice: 30},
{ ingredientName: 'телятина', ingredientWeight: 100, ingredientPrice: 50},
{ ingredientName: 'салями', ingredientWeight: 100, ingredientPrice: 30},
{ ingredientName: 'шампиньоны', ingredientWeight: 80, ingredientPrice: 20},
{ ingredientName: 'фасоль', ingredientWeight: 80, ingredientPrice: 20},
{ ingredientName: 'перец', ingredientWeight: 80, ingredientPrice: 20},
{ ingredientName: 'курица', ingredientWeight: 80, ingredientPrice: 20},
{ ingredientName: 'пармезан', ingredientWeight: 50, ingredientPrice: 30},
{ ingredientName: 'бри', ingredientWeight: 50, ingredientPrice: 30},
{ ingredientName: 'дор-блю', ingredientWeight: 50, ingredientPrice: 30},
{ ingredientName: 'морепродукты', ingredientWeight: 80, ingredientPrice: 50},
{ ingredientName: 'сливки', ingredientWeight: 20, ingredientPrice: 10},
{ ingredientName: 'томаты', ingredientWeight: 20, ingredientPrice: 10},
{ ingredientName: 'табаско', ingredientWeight: 20, ingredientPrice: 10},
{ ingredientName: 'соус', ingredientWeight: 20, ingredientPrice: 10},
{ ingredientName: 'груша', ingredientWeight: 80, ingredientPrice: 30},
{ ingredientName: 'колбаски', ingredientWeight: 100, ingredientPrice: 40}, 
{ ingredientName: 'корнишоны', ingredientWeight: 50, ingredientPrice: 20},
{ ingredientName: 'сардины', ingredientWeight: 100, ingredientPrice: 20},
{ ingredientName: 'брокколи', ingredientWeight: 80, ingredientPrice: 20}];


let pizzas = [{ picture: '/image/takkino-600x600.jpg', name: 'ТАККИНО', ingredientsList: [ingredientsData[0].ingredientName, ingredientsData[18].ingredientName, ingredientsData[1].ingredientName, ingredientsData[15].ingredientName], weight: 420, price: 140.00 },
{ picture: '/image/salmone-600x600.jpg', name: 'САЛЬМОНЕ', ingredientsList: [ingredientsData[2].ingredientName, ingredientsData[3].ingredientName, ingredientsData[1].ingredientName, ingredientsData[15].ingredientName,], weight: 420, price: 170.00 },
{ picture: '/image/diablo-600x600.jpg', name: 'ДИАБЛО', ingredientsList: [ingredientsData[4].ingredientName, ingredientsData[5].ingredientName, ingredientsData[6].ingredientName, ingredientsData[7].ingredientName, ingredientsData[1].ingredientName, ingredientsData[17].ingredientName], weight: 595 , price: 140.00 },
{ picture: '/image/kalcone-600x600.jpg', name: 'КАЛЬЦОНЕ', ingredientsList: [ingredientsData[4].ingredientName, ingredientsData[5].ingredientName, ingredientsData[1].ingredientName, ingredientsData[15].ingredientName], weight: 510 , price: 110.00 },
{ picture: '/image/kalcone-mi-amore-600x600.jpg', name: 'КАЛЬЦОНЕ МИ АМОРЕ', ingredientsList: [ingredientsData[4].ingredientName, ingredientsData[6].ingredientName, ingredientsData[7].ingredientName, ingredientsData[1].ingredientName, ingredientsData[16].ingredientName, ingredientsData[15].ingredientName], weight: 490 , price: 115.00 },
{ picture: '/image/kvatro-stadzhioni-600x600.jpg', name: 'КВАТРО СТАДЖИОНИ', ingredientsList: [ingredientsData[8].ingredientName, ingredientsData[9].ingredientName, ingredientsData[10].ingredientName, ingredientsData[7].ingredientName, ingredientsData[11].ingredientName, ingredientsData[12].ingredientName, ingredientsData[13].ingredientName, ingredientsData[14].ingredientName], weight: 560 , price: 140.00 },
{ picture: '/image/kvatro-flormadzhi-600x600.jpg', name: 'КВАТРО ФОРМАДЖИ', ingredientsList: [ingredientsData[1].ingredientName, ingredientsData[11].ingredientName, ingredientsData[12].ingredientName, ingredientsData[13].ingredientName, ingredientsData[19].ingredientName, ingredientsData[15].ingredientName], weight: 520 , price: 140.00 },
{ picture: '/image/takkino-600x600.jpg', name: 'КАРБОНАРА', ingredientsList: [ingredientsData[5].ingredientName, ingredientsData[11].ingredientName, ingredientsData[1].ingredientName, ingredientsData[15].ingredientName], weight: 505 , price: 125.00 },
{ picture: '/image/kapricheza-600x600.jpg', name: 'КАПРИЧЕЗА', ingredientsList: [ingredientsData[4].ingredientName, ingredientsData[7].ingredientName, ingredientsData[1].ingredientName, ingredientsData[3].ingredientName, ingredientsData[16].ingredientName], weight: 525 , price: 125.00 },
{ picture: '/image/vitello-600x600.jpg', name: 'ВИТЕЛЛО', ingredientsList: [ingredientsData[5].ingredientName, ingredientsData[16].ingredientName, ingredientsData[1].ingredientName, ingredientsData[18].ingredientName], weight: 535 , price: 125.00 },
{ picture: '/image/pollo-600x600.jpg', name: 'ПОЛЛО', ingredientsList: [ingredientsData[10].ingredientName, ingredientsData[7].ingredientName, ingredientsData[1].ingredientName, ingredientsData[16].ingredientName, ingredientsData[18].ingredientName], weight: 585 , price: 120.00 },
{ picture: '/image/salsicha-600x600.jpg', name: 'САЛЬСИЧЧА', ingredientsList: [ingredientsData[20].ingredientName, ingredientsData[9].ingredientName, ingredientsData[1].ingredientName, ingredientsData[16].ingredientName], weight: 450 , price: 110.00 },
{ picture: '/image/sicilija-600x600.jpg', name: 'СИЦИЛИЯ', ingredientsList: [ingredientsData[5].ingredientName, ingredientsData[21].ingredientName, ingredientsData[1].ingredientName, ingredientsData[16].ingredientName], weight: 510 , price: 110.00 },
{ picture: '/image/saljami-600x600.jpg', name: 'САЛЯМИ', ingredientsList: [ingredientsData[6].ingredientName, ingredientsData[1].ingredientName, ingredientsData[16].ingredientName], weight: 465 , price: 110.00 },
{ picture: '/image/olio-di-sardina-600x600.jpg', name: 'ОЛИО ДИ САРДИНА', ingredientsList: [ingredientsData[22].ingredientName, ingredientsData[1].ingredientName, ingredientsData[3].ingredientName, ingredientsData[16].ingredientName, ingredientsData[18].ingredientName], weight: 545 , price: 100.00 },
{ picture: '/image/marinara-600x600.jpg', name: 'МАРИНАРА', ingredientsList: [ingredientsData[14].ingredientName, ingredientsData[1].ingredientName, ingredientsData[16].ingredientName], weight: 485 , price: 140.00 },
{ picture: '/image/vegetariano-600x600.jpg', name: 'ВЕГЕТАРИАНО', ingredientsList: [ingredientsData[23].ingredientName, ingredientsData[8].ingredientName, ingredientsData[9].ingredientName, ingredientsData[3].ingredientName, ingredientsData[1].ingredientName, ingredientsData[7].ingredientName, ingredientsData[18].ingredientName], weight: 625 , price: 170.00 },
{ picture: '/image/margarita-600x600.jpg', name: 'МАРГАРИТА', ingredientsList: [ingredientsData[1].ingredientName, ingredientsData[16].ingredientName, ingredientsData[18].ingredientName], weight: 435 , price: 80.00 }];


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