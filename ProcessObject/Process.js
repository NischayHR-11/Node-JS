// process

for(let i=0;i<5;i++){

    console.log("Hello "+i);
}

console.log("bye..");

// node containds process object

console.log("COMMAND LINE ARGUMENTS.. : ");
let a=process.argv;

for(x of a){
    console.log(x);
}