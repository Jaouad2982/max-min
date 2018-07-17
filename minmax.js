function max(numbers) {
    let max = 0;
    let i = 0;
    while (i < numbers.length) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
        i++;
    }
    return max;
}

console.log(max([1,3,10,4]));

function min(numbers) {
    let min = 0;
    let i = 0;
    while (i < numbers.length) {
        min = numbers[0];
        if (numbers[i] < min) {
            min = numbers[i];
        }
        i++;
    }
    return min;
}

console.log(min([5,8,2,1,0]));