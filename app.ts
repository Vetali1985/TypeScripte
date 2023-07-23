const button = document.querySelector("button")!as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});
let age: number;
age = 50;

let nam: string;
nam = "kamal";
let toggle: boolean;
toggle = true;
let empty: null;
empty = null;
let notInitialize: undefined;
notInitialize = undefined;

let callback = (number) => number;
callback = (a) => { return 100 + a };
console.log(callback(10));
 
let anything:any = -20;
anything = 'Text';
anything = {};


let some:unknown;
some = 'Text';

let str:string ;
if(typeof some === 'string'){
    str = some;
}

let person : [string,number];
person = ['Max', 21];
 
let srt: 'enable' | 'disable';
srt = 'enable'



function showMessage(message:string):void {
  console.log(message);
}


function calc(num1:number, num2:number) :number{
  return num1 + num2;
}
calc(1, 5)
console.log(calc(1,2))
function customError():never {
  throw new Error('Error');
} 
customError()
const page1 = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}
type Data = {
    title: string,
    likes: number,
    accounts: string[],
    status: string,
    details?: {
    createAt: Date,
    updateAt:  Date,
  }
}