// fayaznasrati10@gmail.com

const mysetofitem = new Set([])

mysetofitem.forEach((v)=>{
    console.log(v)
})

console.log('-------------------------')

mysetofitem.add('pin')
mysetofitem.add('computer')
mysetofitem.add('morker')
mysetofitem.add('mobile')
mysetofitem.add('bag')
mysetofitem.add('tree')
mysetofitem.add('hat')

var hea = document.getElementById('h1')

mysetofitem.forEach((v)=>{
   console.log(v)
})

console.log('-------------------------')

mysetofitem.delete('pin')
mysetofitem.delete('morker')
mysetofitem.delete('bag')

var text = "";
for (const x of mysetofitem.values()){
    hea.innerHTML=(text += x)
}
console.log(mysetofitem.size)

console.log('-------------------------')

