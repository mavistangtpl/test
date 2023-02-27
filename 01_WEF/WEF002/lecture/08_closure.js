var MMW =[{brand:"BMW",name:"7",price:"$15m"},{brand:"BMW",name:"1",price:"$15m"},{brand:"BENZ",name:"7",price:"$50m"},{brand:"Tesla",name:"S",price:"$5m"},{brand:"Tesla",name:"3",price:"$5m"},{brand:"BMW",name:"7",price:"$15m",passenger:[{name:"adams",age:"18"},{name:"bruce",age:"18"}]}]

let count = 0;

let a  = "aaaaa"
for (let car of MMW){
    // local variable
    let count = 0;
    let a = "cccccccc"
    count++;
    console.log(`car ${count} is `,car)

    // a = "bbb"
    console.log("a in for loop",a)

}

console.log("try to get count",count ,a)


