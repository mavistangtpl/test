// var d = ['1',2,'3',4,'5']

var d_array = ['1',2,'3',4,'5']


// for of (elements <number|string|object> of array)
// for in (keys in object)


d_array.map((element,index)=>{

    console.log(element,"is of type", typeof element, `is the ${index} element`)
})

// for(let element of d){
//     console.log(element,"is of type", typeof element)
// }


