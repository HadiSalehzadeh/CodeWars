/*
Find the sum of all multiples of n below m
*/

function sumMul (n, m) {
    let sum = 0
    if(n <= 0 || m <= 0){
        return 'INVALID'
    }else{
        for(let i = n; i < m; i+=n){
            sum += i;
        }
        return sum
    }
}