
//ex1
let setArr = new Set()


setArr.add("office@gmail.com")
setArr.add("moshe@gmail.com")
setArr.add("ishay@gmail.com")
setArr.add("desktop@gmail.com")
setArr.add("maneg@gmail.com")
setArr.add("desktop@gmail.com")
setArr.add("maneg@gmail.com")

const run = () => {

    console.log(setArr)
    for( let item of setArr){
        console.log(item)
    }
    if(setArr.has("moshe@gmail.com")){
        alert("email exists!")
    }else {
        alert("email is not exists!")
    }
}

//ex2
let setArr2 = new Set()
const get = () => {

setArr2.add(prompt("name"))
setArr2.add(prompt("name"))
setArr2.add(prompt("name"))
setArr2.add(prompt("name"))
setArr2.add(prompt("name"))
}

const run2 = () => {
    console.log(setArr2)
    for( let item of setArr2){
        console.log(item)
    }
}

//ex3
let products = new Map()
products.set(1, "כיסא")
products.set(2, "שולחן")
products.set(3, "ארון")
products.set(4, "מקרר ")

const run3 = () => {
    console.log(products.get(4))
    console.log(products.keys())
    console.log(products.values())
    console.log(products.entries())

    for(const [key, value] of products.entries()){
        console.log(key, value)
 
    }
    if(products.has(7)){
        alert("new")
    }else{
        alert("empty")
    }

}

//ex4
let cars = new Map()
cars.set(1, {
   neme: 'ford',
   model: "mustang",
   id: "52377789",
   color: "blue"
})
cars.set(2, {
    neme: 'ferrari',
    model: "monza",
    id: "34552333",
    color: "red"
 })
 cars.set(3, {
    neme: 'mercedes',
    model: "sls",
    id: "989977464",
    color: "black"
 })
 cars.set(4, {
    neme: 'porcshe',
    model: "kayan",
    id: "33455677",
    color: "gray"
 })

const run4 = () => {
    console.log(cars.get(4))
    console.log(cars.keys())
    console.log(cars.values())
    console.log(cars.entries())

    for(const [key, value] of cars.entries()){
        console.log(key, value)
 
    }
    if(cars.has(7)){
        alert("new")
    }else{
        alert("empty")
    }

}

//ex5
let arr = [23, 35, 40,60, 77,50, 18 ]

const run5 = () =>{
   for (const item of arr) {
       console.log(item);
   }
   evenNumber = arr.find(item => item % 2 === 0)
   console.log(evenNumber + " is even number");
   big50 = arr.find(item => item > 50)
   console.log(big50 + " is bigger from 50");
   
   let pairsNumbers = []
   pairsNumbers =arr.filter(num => num % 2  > 0 )
   console.log(pairsNumbers + " is pair number");
  

   big = arr.findIndex(item => item > 50)
   console.log(big);

   arr.forEach(element => {
       if(element % 2 === 0){
           console.log("even");
       }else{
           console.log("pair");
       }
   });

   let bignum = arr.reduce((a,b)=> b > a ? b : a ); 
   console.log(bignum);

   let minnum = arr.reduce((a,b)=> b < a ? b : a ); 
   console.log(minnum);
}