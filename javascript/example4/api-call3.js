function addElements(items){
    items.forEach( (data) => {
        // let newPostcontainer = document.createElement('div');
        // newPostcontainer.className = 'post-container';

        let newContainer = document.createElement('div');
        newContainer.className = 'classdiv';

        let newImage = document.createElement('img')
        newImage.src = data.image;

        let newTitle = document.createElement('h1')
        newTitle.textContent = `Title : ${data.title}`;

        let newPrice = document.createElement('h2')
        newPrice.textContent = `Price : ${data.price}`;

        let newDescription = document.createElement('p')
        newDescription.textContent = `Description : ${data.description}`;

        let newCategory = document.createElement('p')
        newCategory.textContent = `Category: ${data.category}`;
        
        let newRating = document.createElement('p')
        newRating.textContent = `Rating: \n Count : ${data.rating.count} and Rate : ${data.rating.rate}`;

        newContainer.appendChild(newTitle);
        newContainer.appendChild(newPrice);
        newContainer.appendChild(newDescription);
        newContainer.appendChild(newCategory);
        newContainer.appendChild(newImage);
        newContainer.appendChild(newRating);

        document.getElementById('post-container').appendChild(newContainer);
        // newPostcontainer.appendChild(newContainer);

    });
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