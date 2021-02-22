'use strict';

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shotNames = names.filter(function (name) {    
//     return name.length < 5;
// });

// console.log(shotNames);

let answers = ['IvAn', 'AnnA', 'Hello'];

// const result = answers.map(item => item.toLowerCase());

// console.log(result);

// every/some 

// const some = [4, 'qwq', 'sdawfawaf'];

// console.log(some.some(item => typeof (item) === 'number'));
// console.log(some.every(item => typeof(item) === 'number'));

// reduce 

// const arr = [4, 5, 1, 3, 2, 6];
//                     //     0     4    
//                     //     4     5
//                     //     9     1
//                     //    10      3             
// const res = arr.reduce((sum, current) => sum + current);
// console.log(res);


// const arr = ['appel', 'pear', 'plum'];
//                     //     0     4    
//                     //     4     5
//                     //     9     1
//                     //    10      3             
// const res = arr.reduce((sum, current) => `${sum}, ${current}`, 3);
// console.log(res);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);