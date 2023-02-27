// key value pair

var a = {age:1,gender:"male",name:"adams"}

console.log(a)

console.log('only age',a.age)
console.log('only age alternative',a['age'])

a["girlfriend"] = true;

console.log("check a again",a)


delete a["girlfriend"]

console.log("check a for the last time",a)