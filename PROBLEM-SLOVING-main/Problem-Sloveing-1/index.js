// Time complexity of an array and object 

const arr = [];
const arrToObj = {}
for (let i = 0; i < 5000000; i++) {
    const o = {
        id: i,
        value: i,
    }
    arr.push(o);
    arrToObj[i] = 0;

    //   arr.push({
    //       id:i,
    //       value:i,
    //   });
}

// it's for array
console.time("array")
const index = arr.findIndex((item) => item.id === 4000000);
arr.splice(index, 1);
console.timeEnd("array")

// it's for obj
console.time("obj")
delete arrToObj[4000000];
console.timeEnd("obj")



console.time('find');
let id =4999999;
const obj=arr.find((item) => item.id === id);
obj.value=555;
console.timeEnd('find');





