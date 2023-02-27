// for of
var MMW =[{brand:"BMW",name:"7",price:"$15m"},{brand:"BMW",name:"1",price:"$15m"},{brand:"BENZ",name:"7",price:"$50m"},{brand:"Tesla",name:"S",price:"$5m"},{brand:"Tesla",name:"3",price:"$5m"},{brand:"BMW",name:"7",price:"$15m",passenger:[{name:"adams",age:"18"},{name:"bruce",age:"18"}]}]

let count = 0;
for (let car of MMW){
   
    count++;
    console.log(`car ${count} is `,car)

}







// for in
var a = {age:1,gender:"male",name:"adams"}
count = 0;
for (let field in a){
    console.log("check field key ",field)
    count++
    console.log(`properties ${field} is at  ${count},value: `, a[field])
}
