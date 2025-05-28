// function greet(name){
//     console.log(name);
// }

// let a = 'Ochir';
// greet(a);

// function add(a,b){
    
//     return a + b;
// }

// console.log(add(9,8));


// function avg(a,b,c){
//     return (a+b+c)/3;
// }

// let b = Number(prompt("1r too oruul"));
// let c = Number(prompt("2r too oruul"));
// let d = Number(prompt("3r too oruul"));

// console.log(avg(b,c,d))


function pass(a){
    if(a>=60 && a<=100){
        return console.log("tentssen");
    }
    else if(a>=0 && a<=59){
        return console.log("tentseegu");
    }
    else{
        return console.log("0-100 onoo oruul");
    }
}

let onoo = prompt("onoo oruul");
pass(onoo);

