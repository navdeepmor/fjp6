(function fibonacci(num){
    let n1 = 0, n2 = 1;
    let ans = [];
    while(n1 <= num){
        ans.push(n1);  
        let tmp = n2;
        n2 += n1;
        n1 = tmp;
    }
    console.log(...ans);
})(10);