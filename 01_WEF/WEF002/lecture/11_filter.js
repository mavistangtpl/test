const numberArray = [1, 2, 3, 4, 5, 6, 7];

const evenNumber = numberArray.filter((element)=>{ return element%2 == 0})
// const evenNumber = numberArray.filter((element)=>element%2 == 0)

console.log("check evenNumber content",evenNumber)

const smallThanFour = numberArray.filter((elem)=>{
    return elem < 4
})

console.log(smallThanFour)