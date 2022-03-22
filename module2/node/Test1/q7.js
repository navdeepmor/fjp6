function decToBin(n){
    let res = 0;
    let i=1;
    for(;parseInt(n/2)!=0;i*=10){
        res += n%2*i;
        n = parseInt(n/2);
    }
    res += n%2*i;
    console.log(res);
}

decToBin(3672); //111001011000