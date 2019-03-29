
//создание объекта
var singular_object = {
    x: 6,
    y: 15,
    z: 4,
}
// объявление функций
function f1() {
    singular_object.x += singular_object.y - singular_object.x++ * singular_object.z;
    document.getElementById("f1").textContent = singular_object.x;
}
function f2(){
    singular_object.z = --singular_object.x - singular_object.y * 5; 
    document.getElementById("f2").textContent = singular_object.z;
    
}
function f3(){
    singular_object.y /= singular_object.x + 5 % singular_object.z; 
    document.getElementById("f3").textContent = singular_object.y;
    
}
function f4(){
    singular_object.z = singular_object.x ++ + singular_object.y * 5; 
    document.getElementById("f4").textContent = singular_object.z;
    
}
function f5(){
    singular_object.x = singular_object.y - singular_object.x++ * singular_object.z; 
    document.getElementById("f5").textContent = singular_object.x;
}
// вызовы функций 
f1()
f2()
f3()
f4()
f5()
