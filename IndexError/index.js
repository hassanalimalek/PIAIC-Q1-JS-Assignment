
const createArr = (...args)=>{
    return args
}

let arr = createArr('Mountain','Tree','Ocean')
console.log("Original Array -->",arr)
delete arr[5]
arr[6] = 'test element'
console.log("Array created ---",arr)
