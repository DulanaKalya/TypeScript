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

const john: {id:number;name: string;isActive:boolean}={
    id: 1,
    name: 'john',
    isActive:true,
}

const susan: {id:number;name: string;isActive:boolean}={
    id: 2,
    name: 'susan',
    isActive:false,
}

type User = {id:number;name: string;isActive:boolean}
const susan1:User={
    id: 2,
    name: 'susan',
    isActive:false,
}
function createUser(user:User):User{
    console.log(`Hello there ${user.name.toUpperCase()}`)
    return user;
} 

let p = createUser({id:1,name:"he he",isActive:false})
console.log(p)


type StringOrNumber = string|number;

let value: StringOrNumber;
value = 'hello';
value = 123;

type Theme = 'light' | 'dark';

let theme: Theme;
theme = 'dark';
theme = 'light';

function setTheme(t:Theme){
    theme = t;
}

setTheme('dark');


/*
## Challenge

- Define the Employee type: Create a type Employee with properties id (number),
name (string), and department (string).

- Define the Manager type: Create a type Manager with properties id (number), name
(string), and employees (an array of Employee).

- Create a Union Type: Define a type Staff that is a union of Employee and Manager.

- Create the printStaffDetails function: This function should accept a parameter
of type Staff. Inside the function, use a type guard to check if the 'employees'
property exists in the passed object. If it does, print a message indicating that
the person is a manager and the number of employees they manage. If it doesn't,
print a message indicating that the person is an employee and the department they
belong to.
*/

type Employee = {id:number,name:string,department:string}
type Manager = {id:number,name:string,employees:Employee[]}
type Staff = Employee | Manager

function printStaffDetails(staff:Staff):void{
    if('employees' in staff){
        console.log(`Manager Name is ${staff.name} and num of employees is ${staff.employees.length}`)
        return;
    }
    console.log(`Employee Name is ${staff.name} and department is ${staff.department} .`)

}



const em1 = {id:1900,name:"A",department:"A"}
const mn1 = {id:1,name:"MA",employees:[ {id:1900,name:"A",department:"A"},{id:1901,name:"B",department:"B"}]}

printStaffDetails(em1)
printStaffDetails(mn1)

type Book = {id:number; name:string;price:number};
type discountedBook = Book & {discount:number};

const Book:Book = {
    id:1, 
    name:"one",
    price:100
};

const discountedBook:discountedBook = {
    id:1, 
    name:"one",
    price:100,
    discount:5
};

const propName = 'age'

type Animal = {
    [propName]:number;
}
let tiger:Animal = {[propName]:5};

console.log(tiger)


interface Book_interface{
    readonly isbn:number;
    title:string;
    author:string;
    genre?:string;
} 

const deepWork = {
    isbn:123,
    title:'deep',
    author:'self-help',
    genre:'sel-help'
};



interface Book__ {
    readonly isbn:number;
    title:string;
    author:string;
    genre?: string;
    printAuthor():void
    printSomething:(someValue:number) => number;


}

const deepWork1:Book__ = {
    isbn:123,
    title:'deep',
    author:'self-help',
    genre:'sel-help',
    //price: 1000

    //methods
    printAuthor() {
        console.log(this.author);
    },
    /* 1st method
    printSomething:(someValue){
        return someValue;
    }
        
     2nd method
    */
    printSomething:(someValue) => {
    // console.log(this) this not working in arrow implementation
    return someValue
    }

};

deepWork1.printSomething(35)

/*
changed once it's set.
- Use the ? after the storage property to indicate that this property is optional
and may not exist on all objects of this type.
- Also inside the interface, define any methods that the object should have. In
this case, we have upgradeRam, which is a function that takes a number and
returns a number.
- Now that we have our interface, we can create an object that adheres to this
interface. This object should have all the properties defined in the interface
(except for optional ones, which are ... optional), and the methods should be
imp lemented.
- Finally, we can use our object. We can call its upgradeRam method to increase

## Challenge

I

- Start by defining an interface Computer using the interface keyword. This will
serve as a blueprint for objects that will be of this type.
- Inside the interface, define the properties that the object should have. In
this case, we have id, brand, ram, and storage.
- Use the readonly keyword before the id property to indicate that it cannot be
*/

interface Computer{
    readonly id:number;
    brand:string;
    ram:number;
    upgradeRam(increase:number): number;
    storage ?: number
}

const myLaptop:Computer = {
    id:1,
    brand:"hp",
    ram:32,
    upgradeRam(amount: number): number{
        this.ram+=amount;
        return this.ram;
    },
    
};

myLaptop.storage = 1;
console.log(myLaptop.storage)

interface Person {
    name:string;
    getDetails(): string;
}

interface DogOwner {
    dogName:string;
    getDogDetails(): string;
}

interface Person {
    age:number;
}


const person:Person = {
    name:'john',
    age:30,
    getDetails(){
        return `Name: ${this.name} , Age:${this.age}`
    }
}

console.log(person.getDetails())



//===============================
//Type Guards

interface Person1{
    name:string;
    getDetails():string;
}

interface DogOwner{
    name:string;
    getDogDetails():string;
}

const person1:Person1 = {
    name:'john',
    age:23,
    getDetails() {
        return `Name: ${this.name} , Age: ${this.age}`
    },
};

console.log(person1.getDetails())

interface Person1 {
    age:number,
}

interface Employee1 extends Person1{
    employeeId : number;

}

const employee: Employee1 = {
    name: 'john',
    age: 28,
    employeeId: 1,
    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
};

console.log(employee.getDetails())


interface Manager1 extends Person1,DogOwner {
    managePeople():void;
}

const man1:Manager1 = {
    name:'bob',
    age: 35,
    dogName:'rex',
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`;
    },
    getDogDetails(){
        return `Name: ${this.dogName}, Age: ${this.age}`;
    },
    managePeople(){
        console.log('Managing people');
    }
}


console.log(man1.getDogDetails())


/*
Challenge - Part 1

- Define the Person interface Start by defining a Person interface with a name
property of type string.
- Define the DogOwner interface Next, define a DogOwner interface that extends
Person and adds a dogName property of type string.
- Define the Manager interface Then, define a Manager interface that extends
Person and adds two methods: managePeople and delegateTasks. Both methods should
have a return type of void.
Define the getEmployee function Now, define a function called getEmployee that
returns a Person, DogOwner, or Manager. Inside this function, generate a random
number and use it to decide which type of object to return. If the number is less
than 0.33, return a Person. If it's less than 0.66, return a DogOwner. Otherwise,
return a Manager.
- Finally, create a variable called employee that can be a Person, DogOwner, or
Manager, and assign it the return value of getEmployee. Then, log employee to thes)
console.
*/

interface Person2{
    name:string;
}

interface DogOwner2 extends Person2{
    dogName:string;
}


interface Manager2 extends Person2{
    managePeople():void;
    delegateTasks():void;
}

function getEmployee():Person2|DogOwner2|Manager2 {
    const random = Math.random();
    if(random < 0.33){
        return {
            name:'john',
        };
    }
    else if (random < 0.66){
        return {
            name:'sarah',
            dogName:'rex',
        };
    }
    else {
        return {
            name:'bob',
            managePeople(){
                console.log('Managing People...')
            },
            delegateTasks(){
                console.log('Delegating Tasks...')
            }
        };
    }

}

const employee3:Person2|DogOwner2|Manager2 = getEmployee();
console.log(employee3)

function isManager(obj: Person2|DogOwner2|Manager2):obj is Manager2 {
    return 'managePeople' in obj ;
}
if(isManager(employee3)){
    employee3.delegateTasks()
} 


let person3:[string,number] = ['john',25];
let date:[number,number,number] = [12,17,2001];
date.push(37)

let date1:readonly[number,number,number] = [12,17,2001];
//date1.push(37)

function getPerson(): [string,number]{
    return ['john',25]
}

let randomPerson = getPerson();
console.log(randomPerson[0]);
console.log(randomPerson[1]);


let su:[string,number?] = ['susan'];


//================ Enums================
/*
In TypeScript, an enum (short for enumeration) is a way to define a set of named constant values.
It’s mainly used when a variable should only take one value from a fixed list.
*/

enum ServerResponseStatus {
  Success = 200,
  Error = 'Error',
}

Object.values(ServerResponseStatus).forEach((value) => {
    console.log(value);
});

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ['1st item', '2nd item'],
  };
}

const response:ServerResponse = getServerResponse()
console.log(response);


/*
- Define an enum named UserRole with members Admin, Manager, and Employee.
- Define a type alias named User with properties id (number), name (string), role
(UserRole), and contact (a tuple with two elements: email as string and phone as
string).
- Define a function named createUser that takes a User object as its parameter
and returns a User object.
- Call the createUser function with an object that matches the User type, store
the result in a variable, and log the variable to the console.

## Challenge

*/

enum UserRole{
    Admin,
    Manager,
    Employee
};

type User1 = {
    id:number;
    name:string;
    role:UserRole;
    contact:[string,string]
}

function createUser1(user:User1):User1{
    return user;
}

const User1:User1 = createUser1({
    id:1,
    name:'john',
    role:UserRole.Admin,
    contact:['1','2']
});

console.log(User1)



let someValue1:any = 'this is a string'
let strLength:number = (someValue as string).length;

type Bird = {
    name:string;
};

let birdString = '{"name":"Eagle"}';
let dogString = '{"breed":"Poodle"}';

let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);

let bird = birdObject as Bird;
let dog =  dogObject as Bird;

console.log(bird.name)
console.log(dog.name)


enum Status {
    pending = 'pending',
    declined = 'declined',
}

type User2 = {
    name:string;
    status:Status;
}

//save Status.Pending in the DB as a string
//retrieve string from the DB

const statusValue = 'Pending';
const user:User2 = {name:'john',status:statusValue as Status};











//=================type unkowns=====================
let unkownValue:unknown;
unkownValue = "Hello World";
unkownValue = [1,2,3,4];
unkownValue = 1234;


if (typeof unkownValue === 'number'){
    unkownValue.toFixed(2)
}


function runSomeCode(){
    const random = Math.random();
    if(random<0.5){
        throw new Error('there was error');
    }
    else{
        throw 'some error';
    }
}

try {
    runSomeCode()

} catch(error){
    if(error instanceof Error){
        console.log(error.message);
    }
    else{
        console.log(error);
    }
}

//let someValue: never = 0;

type Theme1 = 'light'|'dark'

function checkTheme(theme:Theme):void{
    if(theme==='light'){
        console.log('dark theme')
        return;
    }
    if(theme==='dark'){
        console.log('dark theme');
        return;
    }
    theme;
}

enum Color{
    Red,
    Blue,
    Green,
}


function getColorName(color:Color){
    switch(color){
        case Color.Red:
            return 'Red';
        case Color.Blue:
            return 'Blue';
        case Color.Green:
            return 'Grenn'
        default:
            //at build time
            let unexpectedColor: never = color;
            // at runtime
            throw new Error(`Unexpected color value: ${color}`)
    }
}

let color:Color = Color.Red;

console.log(getColorName(color))

import newStudent1,{sayHello,Person3} from "./test";
console.log(newStudent1)
console.log(person3)