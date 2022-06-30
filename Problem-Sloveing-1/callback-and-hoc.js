// difference between call back function and higher order function

//what is higher order function?
//Ans:function which take's another function as ***argument*** is called HOF

//and what is Callback function?
//Ans:function which get padded as an argument to another function is call CBF

// let's saw a quick example 

// Basically, it was adding  function --->

 const add=(a,b)=>{
         return a+b
 };
 
//   console.log(add(10,4));
//We right more like multiplication, subtraction  but the problem  was every time  we write a new function;
 const subs=(a,b)=>{
    return Math.abs(a-b)
 }
//  console.log(subs(10,4));

 const mult=(a,b)=>{
    return (a*b)
 }
//  console.log(mult(10,4));


// So the concept was to write a Master function and pass those functions as an argument,
 


//Master function
const MasterFunction =(sum1,sum2,funk)=>{
      return funk(sum1,sum2)
}
console.log(MasterFunction(5,6,add));
console.log(MasterFunction(5,6,subs));
console.log(MasterFunction(5,6,mult));


//  Master function is our higher order function and  that HOF function  argument that take another function it  was our Call-Back Function