let x =10;
console.log(x);

let kwadraat = x*x;
console.log(kwadraat);
const tekst ="hallo";

const waarheid = true;
let y =11;
console.log(x==y);
console.log(x>y);

let tien="10";
console.log(x === tien);

console.log("apple" < "Apple");

if(x%2 ===0) console.log("even")
    else{console.log("oneven"); }

let result = x%2===0? "even" : "oneven";

let a =3, b=4;
console.log(a===3||b===0)
console.log(a<10&& b > 0);

let woord1 ="help";
let woord2="mij";
let woord= woord1 + " " + woord2
let woordAnders=`${woord1} ${woord2}`;
console.log(woordAnders);


function sum(a,b)
{
let c = a+b;
return c;
}

console.log(`de som van 4 en 5: ${som(4,5)}`);
console.log(`woorden samenvoegen : ${som("alfa", "beta")}`);

const som2 = (a,b)=>{ return a + b ;}
const  som3 =(a,b) => a+b;

let sum=0;
for(let i = 100; i<=120; i+=5){
    sum +=i;
    console.log
}
let some=0;
let iwhile = 100
while(iwhile<=120)
{
some +=iwhile;
iwhile+=5;
}