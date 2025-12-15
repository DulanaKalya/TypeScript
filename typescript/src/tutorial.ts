console.log('tyscript tutorial Hey Hey')

interface someValues {
    name: string;
    id: number;
}

let someObj: someValues = {
    name : 'random',
    id : 123
};

console.log(someObj)

let awesomeName:String = "shakeAndBrake"
awesomeName = 'something'
awesomeName = awesomeName.toUpperCase()
console.log(awesomeName);

let amount: number = 20;
amount = 12-1;
// amount = 'pants'; cant do this in TS But can in JS

let isAwesome : boolean = true;
isAwesome = false;
// isAwesome = 'shakeAndBake' 

console.log(isAwesome)

let greeting: string = 'Hello, Typescript!';
greeting = greeting.toUpperCase();

let age: number = 25;
age += 5;

let isAdult: boolean = age >= 18;
console.log(isAdult)
console.log(age)

/*
greeting = 10;
age = 'thirsty'
isAdult = 'yes'

console.log(greeting,age,isAdult) 

this one work but it has errors. thats not good
*/

console.log(greeting,age,isAdult) 


let tax:number | string | boolean = 10;
tax = 100;
tax = '$10';

console.log(tax)

let requestStatus: 'pending'|'success'|'error' = 'pending';
requestStatus = 'success'
// requestStatus = 'random'

 let notSure: any = 4;
 notSure = 'maybe a string instead';
 notSure = false;

let random;
random = 10;


//===============================================================================

const books = ['1984','Brave New World','Fanrenheit 451']
let foundbook: string | undefined;

for (let book of books){
    if (book === '1984'){
        foundbook = book;
        foundbook.length;
        break;
    }
}

console.log("Found book is "+ foundbook + " " +foundbook?.length)
foundbook?.length // if is defined/string then length

 
let discount:number | string = 20;
discount = '20%';

let orderStatus:'processing'|'shipped'|'delivered' = 'processing';
orderStatus = 'shipped'


let prices:number[] = [100,75,42]
//prices.push('hello')

let fruit:string[] = ['apple','orange']
for(let f of fruit){
    console.log(f);
}


// let randomValues:[]=['hello']
let emptyValues:number[] = [];


let names = ['peter','susan',1]
for(let f of names){
    console.log(f);
}
let array:(string|boolean)[]=['apple',true,'orange',false]
for(let f of array){
    console.log(f);
}

let temperatures: number[] = [20,25,30]
// temperatures.push('hot)

let colors:string[] = ['red','green','blue'];
// colors.push(true)

let mixedArray: (number|string)[] = [1,'two',3]
for(let i of mixedArray){
    console.log(i);
}


//=======================================================================
//===================== Obeject and functions============================
//=======================================================================

