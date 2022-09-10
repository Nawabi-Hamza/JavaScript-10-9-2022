// RangeError
// ReferenceError
// SyntaxError
// TypeError
// 

let x = 1;
const theMass = document.getElementById('h12')
const theMass1 = document.getElementById('h13')
const theMass2 = document.getElementById('h14')
const theMass3 = document.getElementById('h15')
        // Range Error
try{
    x.toPrecision(300)
}catch(error){
    theMass.innerHTML=error.name
}
        // Refrence Error
try{
    x= y+9
}catch(error){
    theMass1.innerHTML=error.name
}
        // Type Error
var k = 4
try{
   k.toUpperCase()
}catch(error){
    theMass2.innerHTML=error.name
}

try{
    decodeURI('asldfaklsd')
 }catch(error){
     theMass3.innerHTML=error.name
 }

console.log('-------------------------')
 