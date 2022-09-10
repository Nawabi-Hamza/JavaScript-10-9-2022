
const items_price = new Map([
    ['tv', 100],
    [12 ,'pc'],
    ['pin' ,10]
]);// key , value

console.log(items_price.get('tv'))
console.log(items_price.get(12))

console.log('-------------------------')

items_price.set("car","BMW")
console.log(items_price.get('car'))

console.log('-------------------------')

items_price.forEach((key,value)=>{
    console.log(value+" : "+key)
})

console.log('-------------------------')

items_price.set("bike" , "chiana")

for(let x of items_price.entries()){
    console.log(x)

}

console.log('-------------------------')

items_price.set("glass","cap")
console.log(items_price.has("glass"))
items_price.delete("glass")
console.log(items_price.has("glass"))


console.log('-------------------------')

function MyC(){
    const theMass = document.getElementById('h1')
        let x = document.getElementById("inpVa").value
        try {
            if (x == " ") throw "Empty input box!";
            if (isNaN(x)) throw "Only number is valid";
            x = parseInt(x)
            if (x < 5) throw "It is small number 5"
            else if (x >10 ) throw "It is to big"
        } 
        catch (error) {
            theMass.innerHTML= error
            // in sometimes we use error.name
        }
        finally {
            document.getElementById('inpVa').value = " ";
        }
      }

      console.log('-------------------------')

