// higher-order function

function transform(arr, callback){

    let transArray = [];
    for(let i = 0; i < arr.length; i++){
        transArray.push(callback(arr[i]));
    }
    
    return transArray;
}

// callbacks

const double = (num) => {
    return num * 2;
}

const numToStrings = (num) => `$${num}`;

const discriminateShort = (num) => {
    if(num < 3){
        return "small";
    }
    else{
        return num;
    }
}

// test

let list = [1,-1, 2, 3, 6];

console.log(transform(list, double));
console.log(transform(list, numToStrings));
console.log(transform(list, discriminateShort));
