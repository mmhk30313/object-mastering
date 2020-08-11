 function doSomething(N){
     console.log(N,"fun")
 }
 console.log(1111);
 console.log(2222);
 doSomething(3333);
 setTimeout(function(){
     doSomething(5555);
 },1000);
 console.log(4444);
 setInterval(() => {
     doSomething(404);
 },2000);