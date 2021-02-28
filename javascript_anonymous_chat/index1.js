//console.clear();
console.log('conditional statement & loops');

// let age=22;
// if (age==23)
// {
//     console.log("varified");
// }
// else
// {
//     console.log("not varify");
// }
// for(let i=1;i<=10;i++)
// {
//     if(i===5)
//         break;
//     console.log(i*2);
// }
let arr=[8,3,0,3,3,9,7,4,4,1];
arr.forEach(function(params) {
   console.log(params); 
});
let obj={
    name : 'rishabh',
    age : 23,
    gender : 'male'
}
for (let x in obj)
{
    console.log(`${x} is the object of ${obj[x]}`);
}