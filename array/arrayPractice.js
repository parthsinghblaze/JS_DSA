/**
 * SPIRAL PRINT
 */

const array = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
]

function spiralPrint(arr) {
    let top = 0
    let bottom = arr.length - 1
    let right = arr[0].length - 1
    let left = 0
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[top][i])
    }
    top++
    console.log(arr[top])

}

spiralPrint(array)

/**
 * FIND COMMON ELEMENTS IN K-SORTED ARRAYS
 */

// const array1 = [1,5,5,10]
// const array2 = [3,4,5,5,10]
// const array3 = [5,5,10,20]
//
// function findCommonElements(arrays) {
//     let hashMap = {}
//     let answer = []
//
//     for(let i = 0; i < arrays.length; i++) {
//         const currentArray = arrays[i]
//         for(let j = 0; j < currentArray.length; j++) {
//             if(currentArray[j - 1] !== currentArray[j]) {
//                 if(hashMap[currentArray[j]]) {
//                    hashMap[currentArray[j]] = hashMap[currentArray[j]] + 1
//                 } else {
//                      hashMap[currentArray[j]] = 1
//                 }
//             }
//         }
//     }
//
//     for(const hash in hashMap) {
//         if (hashMap[hash] === arrays.length) {
//             answer.push(hash)
//         }
//     }
//
//     return answer
// }
//
// console.log(findCommonElements([array1, array2, array3]))

// function findCommonElements(arrays) {
//     let hashMap = {}
//
//     for (let i = 0; i < arrays.length; i++) {
//         if(hashMap[arrays[i]] !== undefined) {
//             hashMap[arrays[i]] = hashMap[arrays[i]] + 1
//         } else {
//             hashMap[arrays[i]] = 1
//         }
//     }
//
//     return hashMap
// }
//
// console.log(findCommonElements([1,5,5,10]))



/**
 * FIND THE MEDIAN OF TWO SORTED ARRAYS OF THE SAME SIZE
 */

// recalling the median formula
// const array = [1,2,3,4,5,6,7,8,9,10]
//
// function solve(arr) {
//     let length = arr.length
//
//     if(length % 2 === 1){
//         return arr[Math.floor(length / 2)]
//     } else {
//         return (arr[length / 2 - 1] + arr[length / 2]) / 2
//     }
// }
//
// console.log(solve(array))


/**
 * IMPLEMENT THE ARRAY.SLICE() FUNCTION FROM SCRATCH
 */

// const array = [5,4,6,7,1,4,2]
//
// // const newArray = array.slice(1)
// // console.log(newArray)
//
// function arraySlice(arr, beginIndex, endIndex = arr.length) {
//     if(!beginIndex && !endIndex) return arr
//
//     let newArray = []
//
//     if(endIndex > arr.length) {
//         endIndex = arr.length
//     }
//
//     for(let i = beginIndex; i < endIndex; i++) {
//         newArray.push(arr[i])
//     }
//
//     return newArray
//
// }
// console.log(arraySlice(array, 3, 10))
//

/**
 * FIND TWO ARRAY ELEMENTS IN AN ARRAY THAT ADD UP TO A NUMBER
 * For example, in an array like [1,2,3,4,5], what numbers add up to 9?
 */

// const array = [5,4,6,7,1,4,2]
// const weight = 10
// function findSum(array, weight) {
//     const seen = {}
//
//     for(let i = 0; i < array.length; i++) {
//         console.log({i})
//         const num = array[i]
//         const needed = weight - num
//
//         if(seen[needed] !== undefined) {
//             return [seen[needed], i]
//         } else {
//             seen[num] = i
//         }
//     }
// }
//
// console.log(findSum(array, weight))

// function findSum(array, weight) {
//     for(let i = 0; i < array.length; i++) {
//         for(let j = i + 1; j < array.length; j++) {
//             if((array[i] + array[j]) === weight){
//                 return [array[i], array[j]]
//             }
//         }
//     }
//     return "Not found"
// }
//
// console.log(findSum(array, weight))

// const array = [1,2,5]
//
// const array2 = [3,4,6]
//
// array.splice(2, 0, ...array2)
//
// const arrayData = array.slice(0,1)
// console.log("arrayData", arrayData)
// console.log("array", array)
//
// const arr = [[1,2,3, [6,7,8,9, [1,2,3,4,5,6,8,9]]], [4,5,6], [7,8,9]]
//
// const result = arr.flatMap((item, index) => item)
// console.log("result", result)
