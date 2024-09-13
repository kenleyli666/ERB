<<<<<<< HEAD

/**
 * reference to call api in javascript
 * https://www.geeksforgeeks.org/ways-to-make-an-api-call-in-javascript/
 */

/**
 * call the api with api docs
 * https://app.beeceptor.com/mock-server/json-placeholder
 * 
 * call the /posts to retrive all the posts then show in console
 */



let postsData = null;

fetch('https://json-placeholder.mock.beeceptor.com/posts')
.then(function (postsResponse) {
    return postsResponse.json();
})
.then(function (data) {
    // console.log('data', data);
    // postsData = data;
    // it will update the postsData and you can do the futher actions
    console.log('data', data);
});

/*
function getPostsData() {
    return new Promise((resolve, reject) => {
        fetch('https://json-placeholder.mock.beeceptor.com/posts')
        .then(function (postsResponse) {
            return postsResponse.json();
        })
        .then(function (data) {
            resolve(data);
        });
    });
}

getPostsData().then(function(postData) {
    console.log('getPostsData postData', postData)
})
*/

// 新增元素的函數
function addElements(items) {
    items.forEach(function(data) {
        const newLiElement = document.createElement('li');
        newLiElement.className = 'post';

        // create the a tag
        const newLinkElement = document.createElement('a');
        // add the data in href (link)
        newLinkElement.href = data.link;
    
        // create the h6 tag
        const newH6Element = document.createElement('h6');

        // add title form api data
        newH6Element.textContent = data.title;
        
        const newDivElement = document.createElement('div');
        newDivElement.textContent = data.body;

        // add the content in link
        newLinkElement.appendChild(newH6Element);

        // add the link content in li
        newLiElement.appendChild(newLinkElement);
        newLiElement.appendChild(newDivElement);
        
        // add the li content in ul
        document.getElementById('post-list').appendChild(newLiElement);
    });
}

function addElementsForLoopVersion(data) {
    for (let i = 0 ; i < data.length ; i++) {
        const newLiElement = document.createElement('li');
        newLiElement.className = 'post';

        // create the a tag
        const newLinkElement = document.createElement('a');
        // add the data in href (link)
        newLinkElement.href = data[i].link;
    
        // create the h6 tag
        const newH6Element = document.createElement('h6');

        // add title form api data
        newH6Element.textContent = data[i].title;
        
        const newDivElement = document.createElement('div');
        newDivElement.textContent = data[i].body;

        // add the content in link
        newLinkElement.appendChild(newH6Element);

        // add the link content in li
        newLiElement.appendChild(newLinkElement);
        newLiElement.appendChild(newDivElement);
        
        // add the li content in ul
        document.getElementById('post-list').appendChild(newLiElement);
    }
}

function getApisCall (url) {
  return new Promise((resolve, reject) => {
    fetch(url)
    .then(function (response) {
        if (response.status !== 200) {
            reject('Error exist! check your server');
        }

        return response.json();
    })
    .then(function (data) {
        resolve(data);
    });
  });
}

getApisCall('https://fakestoreapi.com/products')
.then(function(data) {
    console.log('getApisCall', data);
    addElements(data);
}).catch(function(error) {
    console.log('error', error);
})

  
  getApisCall('https://json-placeholder.mock.beeceptor.com/posts')
  .then(function(data) {
      console.log('getApisCall', data);
  }).catch(function(error) {
      console.log('error', error);
  })
  
  getApisCall('https://json-placeholder.mock.beeceptor.com/posts/2')
  .then(function(data) {
      console.log('getApisCall', data);
  }).catch(function(error) {
      console.log('error', error);
  })
  // it will show null
  console.log('postsData', postsData);
  

=======

/**
 * reference to call api in javascript
 * https://www.geeksforgeeks.org/ways-to-make-an-api-call-in-javascript/
 */

/**
 * call the api with api docs
 * https://app.beeceptor.com/mock-server/json-placeholder
 * 
 * call the /posts to retrive all the posts then show in console
 */



let postsData = null;

fetch('https://json-placeholder.mock.beeceptor.com/posts')
.then(function (postsResponse) {
    return postsResponse.json();
})
.then(function (data) {
    // console.log('data', data);
    // postsData = data;
    // it will update the postsData and you can do the futher actions
    console.log('data', data);
});

/*
function getPostsData() {
    return new Promise((resolve, reject) => {
        fetch('https://json-placeholder.mock.beeceptor.com/posts')
        .then(function (postsResponse) {
            return postsResponse.json();
        })
        .then(function (data) {
            resolve(data);
        });
    });
}

getPostsData().then(function(postData) {
    console.log('getPostsData postData', postData)
})
*/

// 新增元素的函數
function addElements(items) {
    items.forEach(function(data) {
        const newLiElement = document.createElement('li');
        newLiElement.className = 'post';

        // create the a tag
        const newLinkElement = document.createElement('a');
        // add the data in href (link)
        newLinkElement.href = data.link;
    
        // create the h6 tag
        const newH6Element = document.createElement('h6');

        // add title form api data
        newH6Element.textContent = data.title;
        
        const newDivElement = document.createElement('div');
        newDivElement.textContent = data.body;

        // add the content in link
        newLinkElement.appendChild(newH6Element);

        // add the link content in li
        newLiElement.appendChild(newLinkElement);
        newLiElement.appendChild(newDivElement);
        
        // add the li content in ul
        document.getElementById('post-list').appendChild(newLiElement);
    });
}

function addElementsForLoopVersion(data) {
    for (let i = 0 ; i < data.length ; i++) {
        const newLiElement = document.createElement('li');
        newLiElement.className = 'post';

        // create the a tag
        const newLinkElement = document.createElement('a');
        // add the data in href (link)
        newLinkElement.href = data[i].link;
    
        // create the h6 tag
        const newH6Element = document.createElement('h6');

        // add title form api data
        newH6Element.textContent = data[i].title;
        
        const newDivElement = document.createElement('div');
        newDivElement.textContent = data[i].body;

        // add the content in link
        newLinkElement.appendChild(newH6Element);

        // add the link content in li
        newLiElement.appendChild(newLinkElement);
        newLiElement.appendChild(newDivElement);
        
        // add the li content in ul
        document.getElementById('post-list').appendChild(newLiElement);
    }
}

function getApisCall (url) {
  return new Promise((resolve, reject) => {
    fetch(url)
    .then(function (response) {
        if (response.status !== 200) {
            reject('Error exist! check your server');
        }

        return response.json();
    })
    .then(function (data) {
        resolve(data);
    });
  });
}

getApisCall('https://fakestoreapi.com/products')
.then(function(data) {
    console.log('getApisCall', data);
    addElements(data);
}).catch(function(error) {
    console.log('error', error);
})

  
  getApisCall('https://json-placeholder.mock.beeceptor.com/posts')
  .then(function(data) {
      console.log('getApisCall', data);
  }).catch(function(error) {
      console.log('error', error);
  })
  
  getApisCall('https://json-placeholder.mock.beeceptor.com/posts/2')
  .then(function(data) {
      console.log('getApisCall', data);
  }).catch(function(error) {
      console.log('error', error);
  })
  // it will show null
  console.log('postsData', postsData);
  

>>>>>>> refs/remotes/origin/main
