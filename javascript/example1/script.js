/* Example 1 */
/* var chinesesubjectscore = 80;
var englishsubjectscore = 80;

if( chinesesubjectscore > englishsubjectscore ) {
    console.log("chinese subject is higher than english subject");
}
else if ( englishsubjectscore > chinesesubjectscore ) {
    console.log("english subject is higher than chinese subject");
}
else {
    console.log("chinese subject equal to english subject");
} */

/*  Example 2 */
/* var gradeF = score >= 40 && score < 50;
var gradeE = score >= 50 && score < 60;
var gradeD = score >= 60 && score < 70;
var gradeC = score >= 70 && score < 80;
var gradeB = score >= 80 && score < 90;
var gradeA = score >= 90;

var score = 50.01;

if (score >= 80)
{   
    console.log(gradeA, gradeB)
    console.log("student score is good");
}
else if (score >= 60)
{
    console.log(gradeC, gradeD)
    console.log("student score is normal");
}
else
{
    console.log(gradeE, gradeF)
    console.log("student score is fail");
}


if(score >= 40 && score < 50) {
    console.log('gradeF');
}
else if(score >= 50 && score < 60){
    console.log('gradeE');
}
else if(score >= 60 && score < 70){
    console.log('gradeD');
}
else if(score >= 70 && score < 80){
    console.log('gradeC');
}
else if(score >= 80 && score < 90){
    console.log('gradeB');
}
else{
    console.log('gradeA');
}
 */

/* Example 3 */
/* for(var i = 0 ; i < 10; i++){
    console.log(i);
} */
/* output: 0 1 2 3 4 5 6 7 8 9 */


/* for(var i = 1; i < 11; i++){
    i = i + 1;
    console.log(i)
} */
/* output: 2 4 6 8 10 12 */

/* Example 4 */
/* var saveUser = null;
var firstName = "";
var lastName = "";

function saveUser(firstName, lastName) {
    console.log('savename')
}

saveUser(firstName, lastName) */

/* function sum(a, b){
    console.log("sum")
    console.log("a:"+a )
    console.log("b:"+b )
    return a + b
}
 */
/* console.log(sum(1, 2)) */
/* 
sum
a:1 
b:2
3
*/
/* var sumValue = sum(3, 4); */
/* 
sum
a:3
b:4
*/

/* Array */
/* var by_array = [
    1, 23, 456, sumValue, sum(5, 20), add() 
    ];

    console.log(add(10.5));
    function add(a =5, b =123) { return a + b }
    add(7);
    console.log(by_array) */
/* 
output: 133.5 
[ 1, 23, 456, 7, 25, 128 ]
*/

/* function clickme(val){
    alert(val)
}

function helpme() {
    for(var i = 0; i < 5 ; i++){
    {
    clickme(i)
    }
    }
} */


/* var counter = 0;
var btn = document.getElementById('pressme');
btn.addEventListener("click", function() {
    counter++;
    if(counter === 3){
    alert("you already clicked 3 time button")
    counter = 0;
    }
})

var counter = 0;
var btn = document.getElementById('fingerme');
btn.addEventListener("click", function() {
    counter++;
    if( counter % 3 === 0){
    alert("you already clicked 3 time button")
    counter = 0;
    }
    btn.click
})

function changeText(text){
    document.getElementById("demo").innerHTML = text;
}
 */

/* function inputcontent(event){
   document.getElementById('ptext').innerHTML =
   document.getElementById('content').value
} */

/* function inputcontent(event){
    
    var val = event.target.value;
    document.getElementById('ptext').innerHTML = val ;
    console.log(event)
} */
/* var text = "";
var btn = document.getElementById('submit-btn');
btn.addEventListener('click', () => {
   alert('you sent the message is'+ "" + text)
})
var input = document.getElementById('inputbox');
input.addEventListener("input", () => {
    {text = input.value 
    
    function caller(){
    document.getElementById('whatsappbox').innerHTML =
    input.value ;
    }
}   
}) */

/* var text = "";
var btn = document.getElementById('submit-btn');
btn.addEventListener('click', () => {
    alert('You sent the message: ' + text);
    document.getElementById('whatsappbox').innerHTML = text;
    input.value = ""; // Clear the input box
});

var input = document.getElementById('inputbox');
    input.addEventListener("input", () => {
    text = input.value;
}); */


/* next example */
/*     var btn = document.getElementById('submit-btn');
    var inputBox = document.getElementById('input-box');
    var statusTyping = document.getElementById('status');
    var inputtedText = '';

    inputBox.addEventListener('input', function(event) {
        statusTyping.innerHTML = 'Typing...';
        console.log('input?', event.target.value);
        inputtedText = event.target.value;
    });

    btn.addEventListener('click', function() {    
        alert('You clicked the button ' + inputtedText);
    });

    inputBox.addEventListener('blur', function() {
        document.getElementById('status').innerHTML = '';
    }); */

// next example
var btn = document.getElementById('submit-btn');
btn.addEventListener('click', function() {
    alert('we will calucate the sum function');
    var result = 0;
    for (let index = 0; index < 10; index++) {
        // this is keep repeat to assign the same value sum(1, 2)
        //result = sum(1, 2);

        // eigther 1 syntax to do the sum all
        result = result + sum(1, 2);
        // result += sum(1, 2);
    }
    alert('result is ' + result);
    // console.log('result is ', result);
});

function sum(a, b) {
    return a + b;
}
function sum(a, b) {
    return a + b;
}



