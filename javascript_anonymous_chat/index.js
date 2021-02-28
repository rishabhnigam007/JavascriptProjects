// console.time('time');
// console.log(10+12);
// console.log(34);
// console.log(true);
// console.log([1,4,67,8]);
// console.log({rishabh : 'cool' , mark : 76});
// console.warn('this is wrong');
// console.table({rishabh : 'cool' , mark : 76});
// console.error('this is error');
// console.timeEnd('time');
var name='rishabh';
var id;
{
let id=3;
console.log(name,id);
}
console.log(name,id);
const mark=3;
{
    let mark=4;
    console.log(mark);
}
// mark=5;  const never assign twice
console.log(mark);

/* most common programming case are :

1. camelCase
2. kabab-case
3. snake_case
4. PascalCase

*/
function print(params) 
{
    console.log(params);   
}

let x=3;
print(x);

let x1="hello brother";
document.body.innerHTML = x1;
console.log("starting from here -----");
let arr=[2,4,6,'hii'];
console.log(arr.length);
console.log(arr);
console.log(arr.push(007));
console.log(arr);
console.log("unshift method" + arr.unshift(27));
// unshift method use for inserting at starting
console.log(arr);
console.log("shift method"+ arr.shift());
// shift method use for deleting at starting
console.log(arr);
console.log(arr.pop());
console.log(arr);

// object datatype
let myObj={
    fruit : 'apple',
    sport : 'cricket',
    name : 'rishabh'
};
console.log(myObj);
console.log(myObj['sport']);
console.log(myObj.name);









