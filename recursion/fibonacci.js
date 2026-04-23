
function fibo(num){
    const fiboArr = [0,1];
    for(let i = 0; i < num - 2; i++){
        fiboArr.push(fiboArr[i] + fiboArr[i + 1]) 
    }
    return fiboArr;
}
console.log(fibo(8));

const fiboArr = [0,1]
function fiboRecur(num, m){
    if(num == (m - 3)){
        fiboArr.push(fiboArr[num] + fiboArr[num + 1]);
        return fiboArr;
    }
    fiboArr.push(fiboArr[num] + fiboArr[num + 1]);
    return fiboRecur(num + 1, m)
}

console.log(fiboRecur(0, 5));
