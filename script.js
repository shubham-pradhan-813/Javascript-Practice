function one(){
    const username = "Shubham";
    
    function two(){
       const website = "youtube.com";
       console.log(username);
    }
    // console.log(website);

    two();
}

one();


addOne(5);

function addOne(num){
    return num+1;
}

addTwo(5);
 
const addTwo = function(num){
    return num+2;
}

const user = {
    username: "Shubham",
    age: 25,
    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }

}
// user.welcomeMessage()
// user.username =  "Sam";
// user.welcomeMessage()
console.log(this);

const app = () => {
    let username = "shubham";
    console.log(this.username);
}
app()


const addTwo = (num1,num2) => ({username: "shubham"})
console.log(addTwo(3,2))


((name) => {
    console.log(`DB Connected TWO ${name}`);
})("shubham");
const age = 21;
if (age >= 18){
    console.log("eligible to vote");
}else{
    console.log("not eligible to vote");
}


const score = 200

if (score>100){
    var power = "fly";
}
console.log(`user power: ${power}`);
    
const bal = 1000;
if(bal > 500) console.log("test");     //implicit scope


const month = 3;
switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("Invalid month");
        break;
}


//Nullish Coalescing Operator (??): null     undefined
let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 10;
val1 = null ?? 10 ?? 20;
console.log(val1);


// Ternary Operator
const price = 100;
price > 80 ? console.log("price is greater than 80") : console.log("price is less than 80");

