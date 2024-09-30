function greet(name){
    console.log(`Hello ${name}`);
}

function makeTea(typeOfTea){
    return `Making ${typeOfTea}`;
}





function orderTea(typeOfTea){
    function confirmOrder(){
        return `Order confirm for chai`;
    }
    return confirmOrder();
}

let greenTea = orderTea("greenTea");

console.log(greenTea);
