// This File Return The Object To the Current Directory (stores array of Exports object Of All The JS Files In The Directory).

let a=require("./apple");
let b=require("./banana");
let c=require("./mango");

let arr=[a,b,c];

module.exports=arr;