
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