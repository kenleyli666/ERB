async function footBallratio(url) {  
    return new Promise((resolve, reject) =>{
    fetch(url) 

    .then( (res) => {
        if (res.status !== 200) {
            reject('error to check server')
        }
        else{
            
            return res.json();        
        }
    })
    .then((data) => {
        resolve({ message: 'successfully', data: data });
    })
    .catch((err) => {
        reject(err);
    });
});
}

footBallratio('https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=demo')
    .then((result) => {
        console.log('this is datatwo', result.message, result.data);
    })
    .catch((err) => {
        console.log(err);
    });
