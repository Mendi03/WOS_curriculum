function transform(arr, callback){
    const transArr = [];
    for (const num of arr) {
        transArr.push(callback(num));
    }
    return transArr;
}

let nums = [1,2,3,4,5];

console.log(transform(nums, function (num){
    return num * 2;
}));
console.log(transform(nums, function (num){
    return "$"+ num;
}));
console.log(transform(nums, function (num){
    if(num < 3) return "small";
    return num;
}));

