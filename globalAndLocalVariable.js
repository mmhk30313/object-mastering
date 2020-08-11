const person1 = "Mahadi";// global variable jekono jayga theke access korte parbe...
function add(N = 3){
    // var parameters = arguments.length;// parameters is a LOCAL variable...Baire theke access kora jabe na.
    console.log("person1 =",person1);
    parameters = arguments.length;// parameters is a GLOBAL variable...Baire theke access kora jabe...
    sum = 0;// global variable jekono jayga theke access korte parbe...
    for(i=0;i<arguments.length;i++){
        sum += arguments[i];// arguments declare na korleo kaj kore...
    }
    function double(){
        const d = sum;
        return d*2;
    }
    function square(n){
        return Math.pow(n,2);
    }
    console.log("N =",N,"&",N+"^2","=",square(N));
    return double();
}
console.log("Double:",add(25,23));
console.log("Number of parameter =",parameters);
console.log("sum =",sum);
console.log("Double:",add());
console.log("sum =",sum);
console.log("Number of parameter =",parameters);
console.log(add);
console.log("person1 =",person1);