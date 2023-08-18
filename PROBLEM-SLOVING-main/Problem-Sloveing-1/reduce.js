// const numbers =[1,2,3,4,false,'',NaN,5,6]

// const result= numbers.reduce((acc,cur)=>{
//     acc +=cur.toString();
//   return acc;
// },'');
// console.log(result);

const numbers =[ false,1,2,3,4,false,'',NaN,5,6,'']

const result= numbers.reduce((acc,cur,index)=>{
  if (index === 0)acc+='[';
  if(cur){
    acc +=cur.toString() +(index<numbers.length-1 ?',':'');

  }
    if (index=== numbers.length-1)acc+=']';
  return acc;


},'');
console.log(result);





// output [1,2,3,4,5,6]