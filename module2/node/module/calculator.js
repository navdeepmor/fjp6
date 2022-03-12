function add(n1, n2){
    return n1+n2;
}

function sub(n1, n2){
    return n1-n2
}

function multi(n1, n2){
    return n1*n2
}

function div(n1, n2){
    return n1/n2;
}

module.exports = {
    addition: add,
    subtraction: sub,
    multiply: multi,
    division: div
}