// Q- using generators write a function that in theory can run an infinite for loop

function* loopGen(){
    let i = 0;
    
    while(true){
        yield i++;
    }
}

const gen = loopGen();
console.log(gen.next());
console.log(gen.next());