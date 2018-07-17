function max(numbers){
    let max = 0;
    let i = 0;
    while(i < numbers.length) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
    i = i + 1; 
}
return max;
}

let numb = [1,2,3,4,100,45,98];

console.log(max(numb));


//==============
function max(numbers){
    let length = numbers.length;
    let min = numbers[0];
    let minumum = " ";
   
    for ( let i = 0 ; i < numbers.length ; i ++){
        if ( numbers[0] < numbers[i]){
            min = numbers[i];
        }else{
            min = numbers[0];
        }
    }
    return min;
}

let numbers = [4,9];
let mi = max(numbers);
console.log(mi);
