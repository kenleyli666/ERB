// var btn = document.getElementById('submit-btn');
// var firstNumberInput = document.getElementById('first-number');
// var secondNumberInput = document.getElementById('second-number');

// btn.addEventListener('click', function() {
//     console.log('firstNumberInput.value', firstNumberInput.value)
//     console.log('secondNumberInput.value', secondNumberInput.value)

//     var fisrtValue = parseInt(firstNumberInput.value);
//     var secondValue = parseInt(secondNumberInput.value);
//     var fisrtValue = Number(firstNumberInput.value);
//     var secondValue = Number(secondNumberInput.value);
//     var result = sum(fisrtValue, secondValue);
//     alert('The sum result is: ' + result);
// });

// function sum(a, b) {
//     return a + b;
// }

// 1 loop to show the *
// let msg = "";
// for(let i = 1; i < 6; i++){ 
//     msg = msg+"*";
//     console.log(msg);
// }

// 2 loop to show the *
// for(let i= 1; i <= 5; i++){
//     msg = '';
// for (let j = 0; j < i; j++){
//     msg += "*";
// }
// console.log(msg);
// }

// for (var i = 5; i >= 1; i--) {
//     msg = '';
//     for (var j = i; j > 0 ; j--) {
//         msg += '*';
//     }
//     document.write(msg);
//     document.write('<br>');
//     console.log(msg);
// },

let book = {
    name: 'New Hello world',
    year:2025

}

let bookStore = [
    // book,
    {
        name: 'Hello world',
        year:2024,
        isbn: {
            name: '123'
        }
    },
    {
        name: 'Hello world 2',
        year:2026,
        isbn: {
            name: '123'
        }
    },
    {
        name: 'Sun',
        year:2023,
        isbn: {
            name: '123'
        }
    },
    {
        name: 'Sun2',
        year:2006,
        isbn: {
            name: '123'
        }
    },
    {
        name: 'Car',
        year:2013,
        isbn: {
            name: '123'
        }
    },
];

for(let i = 1; i < bookStore.lenght; i++){
    console.log(bookStore[i].name + ':' + bookStore[i].year);
}

bookStore.forEach(function(abc) {
    console.log(abc.name + ':' +abc.year+ ':' +abc.isbn.name);
})

/*
// for each example
bookStore.forEach(function(abc) {
    if (abc.isbn) {
        console.log(abc.isbn.name);   
    } else {
        console.log('no isbn value');
    }
});
*/

// Sample array of user objects
const users = [
    { id: 1, name: "John Doe", email: "john@example.com", age: 30 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", age: 25 },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", age: 35 }
  ];
  
  // Function to format user data
  const formatUserData = (user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      age: user.age,
      profileUrl: `https://example.com/profile/${user.id}`
    };
  };
  
  // Use map() to format user data
  const formattedUsers = users.map(formatUserData);
  
  // Output the formatted user data
  console.log(formattedUsers);
  console.log(JSON.stringify(formattedUsers));
  console.log(JSON.parse(JSON.stringify(formattedUsers)));
