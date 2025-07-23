// Helper function

// =============================================

// Slice
// This helper function returns a portion of an existing array without modifying the array
//
// const array = [1, 2, 3];
// const newArray = array.slice(1)
//
// console.log('array', array);
// console.log('newArray', newArray);


// -----------------------------------------------

// ===============================================
// Splice
// This helper function returns and changes the contents of an array by removing existing element
// const array = [1, 2, 3];
// const newArray = array.splice(0, 2, ...[11,22,33]);
// console.log(array);
// console.log(newArray);

// ------------------------------------------------

// EXERCISES

// Find	Two	Array Elements in an Array That Add	Up to a Number
// problem: Given the array arr, find and return two indices of the array that add up to weight or return -1 if there is no combination that add up to weight
// For example, in an array like [1,2,3,4,5] what number add up to 9?

// const number = [1,2,3,4,5]
// const weight = 9

// function findSum(number, weight) {
//     for(let i = 0; i < number.length; i++){
//         for(let j = i + 1; j < number.length; j++){
//             const sumNumber = number[i] + number[j]
//             if(sumNumber === weight){
//                 return [number[i], number[j]]
//             }
//         }
//     }
// }

// console.log(findSum(number, weight))

// above solution
// Time Complexity: 0(n2)
// Space Complexity: 0(1)

// function findSumBetter(number, weight) {
//     let hashtable = {}
//
//     for (let i = 0; i < number.length; i++) {
//         let currentElement = number[i]
//
//         let difference = weight - currentElement
//         if (hashtable[difference] !== undefined) {
//             return [hashtable[difference], i]
//         }
//
//         hashtable[currentElement] = i
//     }
//
//     return -1
// }
// // 1: 0
// // 2: 1
// // 3: 2
// // 4: 3
// let number = [1,2,3,4,5]
// let weight = 8
// console.log(findSumBetter(number, weight))


// ---------------------------------------------------------------------

//=======================================================================
// Implement the Array.Slice() Function from Scratch

// const array = [1,2,3,4,5,6]
// function ArraySlice(array, begin, end) {
//     if(!begin && !end) return array
//
//     if(!end || end > array.length) {
//         end = array.length
//     }
//     let partArray = []
//
//     for(let i = begin; i < end; i++) {
//         partArray.push(array[i])
//     }
//
//     return partArray
// }
//
// console.log(ArraySlice(array, 2))

// ------------------------------------------------------------------

// ==================================================================

// Find	the	Median of Two Sorted Arrays of the Same Size
// problem: Recall the median is an even number of a set is the average of the two middle numbers. if the array is sorted,

function medianOfArray(arr) {
    let length = arr.length;
    // odd
    if(length % 2 === 1) {
        return arr[Math.floor(length / 2)];
    } else {
    //  Even
        return (arr[length / 2] + arr[length / 2 - 1]) / 2;
    }
}

console.log(medianOfArray([1,2,3,4,5,6]));
