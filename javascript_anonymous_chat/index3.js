console.log("Javascript DOMS");
// let a=document;
// console.log(a);
// console.log(typeof a);

// type of element selector
// there are two type of element selector
// 1. single element selector
// 2. multi element selector

// single element selector
let element=document.getElementById('myfirst');
//element = element.className;
//element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red';
element.innerText = 'rishabh is a good boy';
element.innerHTML = '<b>rishabh is a good boy</b>';
//console.log(element);

let sel = document.querySelector('myfirst');
sel=document.querySelector('child');
sel=document.querySelector('div');
sel.style.color = 'green';
//console.log(sel);

let elems= document.getElementsByClassName('child');
//console.log(elems[1]);

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
    element.style.color = 'blue';
}