<<<<<<< HEAD
/**
 * let 和 const
 * 箭頭函數
 * 模板字串
 * 解構賦值
 * 預設參數
 * 展開運算符
 * 
 * for...of 迴圈
 * Class
 * Promise
 * 模塊
 */

// let
/*
var varTest = '';
var varTest = '123';
// console.log('varTest', varTest);

let letTest = 'top level of js';

function hello() {
    letTest = '[in hello function]';
    console.log('letTest in hello function', letTest);
}

hello();
console.log('letTest out of hello function', letTest);
*/


/**
 * remove the let in hello function of the letTest
 * 
 * result:
    letTest in hello function [in hello function]
    letTest in hello function [in hello function]
 */


/**
 * add the let in hello function of the letTest
 * 
 * result:
    letTest in hello function [in hello function]
    letTest out of hello function top level of js
 */

// const
/*
const example = true;
example = false;

const objExample = {
    name: 'this is object'
};
objExample.name = 'obj';
console.log('objExample', objExample);

const aryExample = [];
aryExample.push('test');
aryExample.push('test1');
aryExample.push('test2');
console.log('aryExample', aryExample);

// if we use the let then we can also change the type!
let swithExample = 'this is string';
swithExample = 123;
console.log('swithExample', swithExample);
*/


/*
// 箭頭函數
function sum(a, b) {
    return a + b;
}

const sum1 = (a, b) => {
    return a + b;
};

const sum = (a, b) => a + b;

const response = res => res.json();

let result = sum(1, 1);
console.log('sum result', result);
*/

/*
// 模板字串
console.log('Hello' + ' ' + result + 'world');
console.log(`Hello ${result}world`);
*/

/*
// 解構賦值
const ary = [1, 2, 4];
let c = ary[1];
console.log(c);

// const [a, b] = [1, 2];
const [a, b] = ary;
console.log(b);

const {x, y, z} = {x: 1, y: 2, z: 6};
console.log(y);

const btnOption = {
    name: 'btnOption name',
    event: () => {}
};

const objExample = {
    name: 'this is object'
};

const btn = ({name}, {newName}) => {
    console.log(name, newName);
};

const anotherBtn = ({name, event}, newName) => {
    console.log(name, newName);
};

let newObj = {
    newName: objExample.name
};

btn(btnOption, newObj);

anotherBtn(btnOption, objExample.name);
*/

/*
// 預設參數
function sum (a = 8, b = 1) {
    return a + b;
}

sum();


const test = (obj = {x: 10, y: 11}, arry = [1,2,3]) => obj.x + ary[1];

// function test (obj = {x: 10, y: 11}) {
//     return obj.x;
// }

console.log(test());
*/


function sum(...par) {
    console.log(par);
}

sum(1,2,3,4,5,6,7);

// 展開運算符
const ary = [1,2,3,4,5];
const ary2 = [12,13, ...ary];
const ary3 = [12,13, ary];
console.log('ary', ary);
console.log('ary2', ary2);
console.log('ary3', ary3);
=======
/**
 * let 和 const
 * 箭頭函數
 * 模板字串
 * 解構賦值
 * 預設參數
 * 展開運算符
 * 
 * for...of 迴圈
 * Class
 * Promise
 * 模塊
 */

// let
/*
var varTest = '';
var varTest = '123';
// console.log('varTest', varTest);

let letTest = 'top level of js';

function hello() {
    letTest = '[in hello function]';
    console.log('letTest in hello function', letTest);
}

hello();
console.log('letTest out of hello function', letTest);
*/


/**
 * remove the let in hello function of the letTest
 * 
 * result:
    letTest in hello function [in hello function]
    letTest in hello function [in hello function]
 */


/**
 * add the let in hello function of the letTest
 * 
 * result:
    letTest in hello function [in hello function]
    letTest out of hello function top level of js
 */

// const
/*
const example = true;
example = false;

const objExample = {
    name: 'this is object'
};
objExample.name = 'obj';
console.log('objExample', objExample);

const aryExample = [];
aryExample.push('test');
aryExample.push('test1');
aryExample.push('test2');
console.log('aryExample', aryExample);

// if we use the let then we can also change the type!
let swithExample = 'this is string';
swithExample = 123;
console.log('swithExample', swithExample);
*/


/*
// 箭頭函數
function sum(a, b) {
    return a + b;
}

const sum1 = (a, b) => {
    return a + b;
};

const sum = (a, b) => a + b;

const response = res => res.json();

let result = sum(1, 1);
console.log('sum result', result);
*/

/*
// 模板字串
console.log('Hello' + ' ' + result + 'world');
console.log(`Hello ${result}world`);
*/

/*
// 解構賦值
const ary = [1, 2, 4];
let c = ary[1];
console.log(c);

// const [a, b] = [1, 2];
const [a, b] = ary;
console.log(b);

const {x, y, z} = {x: 1, y: 2, z: 6};
console.log(y);

const btnOption = {
    name: 'btnOption name',
    event: () => {}
};

const objExample = {
    name: 'this is object'
};

const btn = ({name}, {newName}) => {
    console.log(name, newName);
};

const anotherBtn = ({name, event}, newName) => {
    console.log(name, newName);
};

let newObj = {
    newName: objExample.name
};

btn(btnOption, newObj);

anotherBtn(btnOption, objExample.name);
*/

/*
// 預設參數
function sum (a = 8, b = 1) {
    return a + b;
}

sum();


const test = (obj = {x: 10, y: 11}, arry = [1,2,3]) => obj.x + ary[1];

// function test (obj = {x: 10, y: 11}) {
//     return obj.x;
// }

console.log(test());
*/


function sum(...par) {
    console.log(par);
}

sum(1,2,3,4,5,6,7);

// 展開運算符
const ary = [1,2,3,4,5];
const ary2 = [12,13, ...ary];
const ary3 = [12,13, ary];
console.log('ary', ary);
console.log('ary2', ary2);
console.log('ary3', ary3);
>>>>>>> refs/remotes/origin/main
