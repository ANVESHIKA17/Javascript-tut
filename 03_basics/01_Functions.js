function mynewfunc(){
    console.log("hi this is anveshika");
}
mynewfunc();


//in the below code when we print res it will give output as undefined because we are not returning answer in res
// function addtwonum(num1,num2){
//     console.log(num1+num2);
    
// }
// const res=addtwonum(10,15);
// console.log(res);

//to fix the above , we will retrun res in the function itself
//anything written inside function after return statement is not executed

function addtwonum(num1,num2){
    //no need to declare variable in js func
    return(num1+num2);
    
}
const res=addtwonum(10,15);
console.log(res);

function func(user){
    return `${user}, hi welcome `;
}
console.log(func("anveshika singh"));
//in below if we dont pass any argument it will return undefined
console.log(func());


//to avoid the sitation of undefined args and give a message to user to enter username 
function func1(username){
    if(username===undefined) //(!username)
    {
        console.log("please enter a username");
        return //this will stop the func to go further below in the code
    }
    return `${username}, hi welcome `;
}
console.log(func1("anurag"));



//using rest operator to get any num of inputs eg cart of a shopping website
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,2556,700,56));

//dealing with objects in fucntion
const myobj={
    username:"anurag",
    price:900
}
function letstest(anyobj){
    console.log(`Username is ${anyobj.username} and the amount to be paid is ${anyobj.price}`);
}
letstest(myobj);


//now lets pass array inside a function
const arr=[200,567,43,6,789,999]
function arrtest(newasrr){
    return newasrr[4];
}
console.log(arrtest(arr));