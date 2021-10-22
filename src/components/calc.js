function add(a,b){
    let sum=a+b;
    return sum;
}
function sub(a,b){
    let min=a-b;
    return min;
}
function mult(a,b){
    let mul=a*b;
    return mul;
}
function divi(a,b){
    let div=a/b;
    div=div.toFixed(2);
    return div;
}

function mod(a,b){
    let modu=a%b;
    return modu;
}
export {add,sub,mult,divi,mod};