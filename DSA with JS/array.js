/*let data = [1,5,6,8,7,2,4,6,9,0]
for (let i = 0; i < data.length; i++) {
    console.log(`array ${i} element is ${data[i]}`) 
}*/

// insert element in array
 /*
let data = [60,30,3,9,10,50]

let newEl = 90
let position = 5

for (let i = data.length -1; i >= 0; i--) {
    if(i>=position){
        data[i+1] = data[i];
        if(i==position){
            data[i]=newEl
        }
    }
    
}
console.log(data)
*/
// insert using splice method 
/*
let data = [60,30,3,9,10,50]
console.log(data)
 data.splice(2,0,9000)

 console.log(data)
 */

// delete element in array
/*
let data = [60,30,3,9,10,50]

let dltPosition = 3 ;

for (let i = dltPosition; i <= data.length-1; i++) {
    data[i]= data[i+1]
}
data.length = data.length-1

console.log(data)
*/

// dlt element using splice 
/*
let data = [60,30,3,9,10,50]

data.splice(3,1)
console.log(data)
*/

// search element in array
/*
let data = [60,30,3,9,10,50]
let item = 10
for(let i=0;i<=data.length-1;i++){
    if(data[i]===item){
        index=i
    }
}
// console.log(index)

console.log(data.indexOf(2) )  
*/

// merge array
/*
let data1 = [60,30,3,9,10,50]
let data2 = [68,35,13,90,1,5]

let data3 = data1.concat(data2)

console.log(data3)
*/
/*
let data1 = [60,30,3,9,10,50]
let data2 = [68,35,13,90,1,5]
let data3 = [...data1,...data2]
console.log(data3)
*/




  