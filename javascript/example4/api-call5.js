
function addElements(items) {
    let rowItem = null;
    
    items.forEach((data, i) => {
        const containerElement = addElement(data);
        const colElement = document.createElement('div');
        colElement.className = 'col';
        colElement.appendChild(containerElement);

        if (i % 3 === 0) {
            const rowElement = document.createElement('div');
            rowElement.className = 'row';
            rowItem = rowElement;
        }

        if (rowItem) {
            rowItem.appendChild(colElement);
        }
        
        if (i !== 0 && rowItem) {
            document.getElementById('products').appendChild(rowItem);
        }
    });
}

function addElement(item) {
    const rateElement = document.createElement('div');
    rateElement.className = 'item-rate';
    rateElement.textContent = item.rating.rate;

    const countElement = document.createElement('div');
    countElement.className = 'item-count';
    countElement.textContent = item.rating.count;
    
    const rateContainterElement = document.createElement('div');

    // add the rate details in div
    rateContainterElement.appendChild(rateElement);
    rateContainterElement.appendChild(countElement);


    const rateLabelElement = document.createElement('div');
    const ratingContainterElement = document.createElement('div');
    ratingContainterElement.className = 'item-rating';
    rateLabelElement.textContent = 'rate';

    // finish all the rating elements
    ratingContainterElement.appendChild(rateLabelElement);
    ratingContainterElement.appendChild(rateContainterElement);
    
    const categoryElement = document.createElement('div');
    categoryElement.className = 'item-category';
    categoryElement.textContent = item.category;
    
    const descriptionElement = document.createElement('div');
    descriptionElement.className = 'item-description';
    descriptionElement.textContent = item.description;
    
    const priceElement = document.createElement('div');
    priceElement.className = 'item-price';
    priceElement.textContent = item.price;

    const titleElement = document.createElement('div');
    titleElement.className = 'item-title';
    titleElement.textContent = item.title;

    const imageElement = document.createElement('img');
    imageElement.className = 'item-icon';
    imageElement.src = item.image;
    imageElement.alt = item.title;

    const containerElement = document.createElement('div');
    containerElement.className = 'item-container';

    containerElement.appendChild(imageElement);
    containerElement.appendChild(titleElement);
    containerElement.appendChild(priceElement);
    containerElement.appendChild(descriptionElement);
    containerElement.appendChild(categoryElement);

    return containerElement;
}



async function getFakeinfo(url) {
    return new Promise ((resolve, reject) => {
        fetch(url)
        .then(function (res) {
            if (res.status !== 200) {
                reject('error check your server')
            }
            else{
                return res.json();
            }
        })
        .then(function (data) {
            resolve(data);
        })
    })
}

getFakeinfo('https://fakestoreapi.com/products')
.then( (data) => {
    console.log('getFakeinfo', data);
    addElements(data);
})
.catch( (err) => {
    console.log('error', err)
})