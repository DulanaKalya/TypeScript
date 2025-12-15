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

let car:{brand:string;year:number}={brand:'toyota',year:2020};
car.brand = 'ford'
car.year = 2024

console.log(car.brand)
console.log(car.year)

let car1:{brand:string;year:number}={brand:'Mistzubisi',year:2020};
car1.brand = 'Lexus'
car1.year = 2024

console.log(car1.brand);
console.log(car1.year);



let pen = {title:'pen',cost: 10};
let notebook = {title:'notebook'};
let book = {title:'book',cost: 20};

let items: {title:string ; cost?:number}[]=[book,pen,notebook];
for(let i of items){
    console.log(i)
}

let items1: {readonly title:string ; cost?:number}[]=[book,pen,notebook];
//items1[0].title = 'new book'


let bike:{brand:string;year:number} = {brand:'yamaha',year:2010}
let laptop:{brand:string;year:number}={brand:'Dell',year:2020}

let product1 = {title:'shirt',price:20};
let product2 = {title:'pants'};
let products:{title:string;price?:number}[] = [product1,product2];

products.push({title:'shoes'})

for(let item of products){
    console.log(item)
}

//products.push({title:'shoes',price:'expensive'})


function sayHi(name:string){
    console.log(`Hello there ${name.toUpperCase()}`);
}

// -any
// -config
// type

sayHi('john');
// sayHi(3);

function calculateDiscount(price:number): number{
    return price * 0.9

}

const finalPrice = calculateDiscount(200);

console.log(finalPrice)

function calculateDiscount1(price:number): number{
    const hasDiscount = true;
    if(hasDiscount){
        return price * 0.9;
    }

    return price;
}


function addThree(number:any){
    let anotherNumber: number = 3;
    return number + anotherNumber;
}

const result = addThree(3);
const someValue = result;

//someValue.myMethod();



/*## Challenge

- Create a new array of names.
- Write a new function that checks if a name is in your array. This function
should take a name as a parameter and return a boolean.
- Use this function to check if various results.

*/

let Names:string[] = ['nimal','kamal','amal']
function check(name:string):boolean{
    for(let t of Names){
        if(name === t){
            return true;
            break;
        }
    }

    return false
}

console.log(check('amal'));

/*
let = can change value
const = cannot reassign value
*/

const namess:string[] = ['john','amal','kamal','bimal'];

function isNameInList(name: string):boolean{
    return namess.includes(name)
}

let nameToCheck = 'john'

if (isNameInList(nameToCheck)){
    console.log(`${nameToCheck} is in the list.`);

}

else{
    console.log(`${nameToCheck} is not in the the list`)
}


function calculatePrice(price: number,discount?:number):number{
    return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100,20)
console.log(priceAfterDiscount)




function calculateScore(initialScore:number,penaltyPoints:number = 0):number{
    return initialScore - penaltyPoints
}

let score = calculateScore(300,20)
console.log(score)




function sum(message:string,...numbers:number[]){
    const doubled = numbers.map((num)=>num*2)
    console.log(doubled)
    let total = numbers.reduce((previous,current)=>{
        return previous+current;
    },0);
    return `${message}${total}`
}

let result1 = sum('The Total is : ',1,2,3,4,5)
console.log(result1)


/*
Why use void?

To clearly say:

“This function is for actions, not results”

Example:
*/

function logMessage(msg: string): void {
    console.log(msg);
    // return 'Hello world' ===> we cant return anything void func
}


logMessage('Hello World')

/*
## Functions - Using Union Types as Function Parameters

## Challenge

Your task is to create a function named processInput that accepts a parameter of a
union type string | number. The function should behave as follows:

- If the input is of type number, the function should multiply the number by 2 and
log the result to the console.

- If the input is of type string, the function should convert the string to
uppercase and log the result to the console.

*/

function processInput(parameter:string|number):void{
    if(typeof parameter === "string"){
        logMessage("It is a string")
        return;
    }
    logMessage("It is a number");
    return;
}

processInput("test!")


function createEmployee({id}:{id:number}):{id:number;isActive:boolean}{
    
    return{id,isActive: id % 2 === 0}
};

const id1 = createEmployee({id : 200})
logMessage(JSON.stringify(id1))


function createStudent(student:{id:number;name:string}):void{
    console.log(`Welcome to the course ${student.name.toUpperCase()}`)
}

const student1 = createStudent({id:1998,name:"kamal"})

const newStudent = {
    id: 5,
    name: 'name',
    email:'anna@gmail.com'
}

createStudent(newStudent);
// above one works perfectly 

/*
createStudent(
    {
        id:1,
        name:'anna',
        email: 'anna@gmail.com',
    }
)
*/

// but this one is a issue TS consider whole line in here

/*
#:
# Challenge

Your task is to create a function named processData that accepts two parameters:

- The first parameter, input, should be a union type that can be either a string
or a number.
- The second parameter, config, should be an object with a reverse property of
type boolean, by default it "reverse" should be false

The function should behave as follows:

- If input is of type number, the function should return the square of the number.
- If input is of type string, the function should return the string in uppercase.
- If the reverse property on the config object is true, and input is a string, the
function should return the reversed string in uppercase.
*/

function processData(
    input:string|number,
    config:{reverse:boolean}={reverse:false}
): string|number{
    if(typeof input === 'number'){
        return input * input;
    }
    else{
        return config.reverse
        ? input.toUpperCase().split('').reverse().join('')
        : input.toUpperCase();
    }
}

console.log(processData(10))
console.log(processData('Hello'));
console.log(processData('Hello',{reverse:true}))

//=======================================================================
//===================== Alias and Interface============================
//=======================================================================