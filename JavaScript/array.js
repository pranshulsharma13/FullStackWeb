let fruits = new Array("apple" ,"oranges", "banana");
// console.log(fruits);
// console.log(fruits[1]);

// let name = ["pranshul" , "ritik", "ayush"];
// console.log(name);


//for of loop
// for(let items of fruits){
//     console.log(items); //value 
// }

//for in loop
// for(let items in fruits ){
//     console.log(items); //index
// }



//FOR EACH
// fruits.forEach((currelem , index ,arr)=>{
//     console.log(`${currelem} ${index} ${arr}` );

// })


// var a = fruits.forEach((currelem , index ,arr)=>{
//     // console.log(`${currelem} ${index} ${arr}` );
//     return `${currelem} ${index}`;
// })
// console.log(a);//undefined



// MAP
// fruits.map((currelem , index ,arr)=>{
//     console.log(`${currelem} ${index} ` );

// })

// var a = fruits.map((currelem , index ,arr)=>{
//     // console.log(`${currelem} ${index} ${arr}` );
//     return `${currelem} ${index}`;
// })
// console.log(a)

//SPLICE
//splice(start, deletecount , item1, item2...,)

// console.log(fruits.splice());
// console.log(fruits.splice(0));
// console.log(fruits.splice(1));  //[ 'oranges', 'banana' ]
// console.log(fruits.splice(2));
// console.log(fruits.splice(1,1));  //[ 'oranges' ]
// console.log(fruits.splice(1,1, "graphs"));
// console.log(fruits);

//INCLUDES
// const numbers = [1,2,3,4,5,6,7];
// const result = numbers.includes(0);
// console.log(result);

//FIND
// const prices = [200,300,400,500,600,700];
// const result = prices.find((curr) => {
//     return curr < 500;
// });
// console.log(result);

//FINDINDEX
// const prices = [200,300,400,500,600,700];
// const result = prices.findIndex((curr) => {
//     return curr < 500;
// });
// console.log(result);



//FILTER
// const prices = [200,300,400,500,600,700];
// const result = prices.filter ((curr) => {
//     return curr < 500;
// });
// console.log(result);
 