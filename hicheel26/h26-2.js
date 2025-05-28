let fruits = ['apple','orange','banana'];
console.log(fruits);
console.log(fruits[0]);

fruits.push('grape')
console.log(fruits);

fruits.pop();
fruits.pop();
console.log(fruits.length);

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// let drinks = ['pepsi','cola','water','milk','coffee'];
// let search = 'water';

// if(drinks.includes(search)){
//     alert('us baina');
// }
// else{
//     alert('us bhgu');
// }

// let nums = [5,10,15];
// let sum = 0;
// for(let j=0; j<nums.length; j++){
//     sum+=nums[j];
// }
// console.log(sum);

let foods = ['tsuivan','plov','pizza','burger','chicken'];
let food = prompt('haih hooloo oruul');

if(foods.includes(food)){
    console.log(food);
}
else{
    console.log('naad hool chini alga');
}

let nums = [2,5,1,98,7];
let max = nums[0];
for(let i = 0; i<nums.length; i++){
    if(max<=nums[i]){
        max = nums[i];
    }
}

console.log(max);

