// Array traversing and accessing
/**
 * =============Array Traversing==============
 * Traversing means visiting each element of the array one by one.
 * Example: If you have an array [10, 20, 30, 40], traversing means going through all elements (10 → 20 → 30 → 40).
 * Usually done with loops (for, while, forEach etc.).
 *
 * =============Array Accessing==============
 * Accessing means getting a specific element from the array using its index (position).
 * Array indices usually start at 0 (zero-based indexing).
 * Example:
 * arr[0] → 10 (first element)
 * arr[2] → 30 (third element)
 *
 * In short:
 * Traversing = visiting all elements
 * Accessing = reaching a specific element
 */


/**
 * Array methods
 * 1. push() → Add to the end
 * let arr = [1, 2, 3];
 * arr.push(4);
 * console.log(arr); // [1, 2, 3, 4]
 *
 *
 * 👉 Adds one or more elements at the end.
 *
 * 2. unshift() → Add to the beginning
 * let arr = [1, 2, 3];
 * arr.unshift(0);
 * console.log(arr); // [0, 1, 2, 3]
 *
 *
 * 👉 Adds elements at the start.
 *
 * 3. splice() → Add at any position
 * let arr = [1, 2, 5];
 * arr.splice(2, 0, 3, 4); // at index 2, delete 0, insert 3 & 4
 * console.log(arr); // [1, 2, 3, 4, 5]
 *
 *
 * 👉 Can insert, delete, or replace elements.
 *
 * 4. concat() → Join arrays (creates new array)
 * let arr1 = [1, 2];
 * let arr2 = [3, 4];
 * let newArr = arr1.concat(arr2);
 * console.log(newArr); // [1, 2, 3, 4]
 *
 *
 * 👉 Adds elements by merging arrays.
 *
 * 5. Spread Operator (...) → Modern way
 * let arr = [1, 3, 4];
 * let newArr = [...arr.slice(0, 1), 2, ...arr.slice(1)];
 * console.log(newArr); // [1, 2, 3, 4]
 *
 *
 * 👉 Useful for immutable insertions (React/Redux).
 *
 * 🔹 Array Deletion Methods
 *
 * These methods remove elements.
 *
 * 6. pop() → Remove from the end
 * let arr = [1, 2, 3];
 * arr.pop();
 * console.log(arr); // [1, 2]
 *
 * 7. shift() → Remove from the beginning
 * let arr = [1, 2, 3];
 * arr.shift();
 * console.log(arr); // [2, 3]
 *
 * 8. splice() → Remove from any position
 * let arr = [1, 2, 3, 4];
 * arr.splice(1, 2); // from index 1, remove 2 elements
 * console.log(arr); // [1, 4]
 *
 * 🔹 Searching & Checking Methods
 * 9. indexOf() → Find index
 * let arr = [10, 20, 30];
 * console.log(arr.indexOf(20)); // 1
 *
 * 10. lastIndexOf() → Find last occurrence
 * let arr = [10, 20, 10, 30];
 * console.log(arr.lastIndexOf(10)); // 2
 *
 * 11. includes() → Check existence
 * let arr = [1, 2, 3];
 * console.log(arr.includes(2)); // true
 *
 * 12. find() → Get first matching element
 * let arr = [5, 12, 8];
 * let found = arr.find(x => x > 10);
 * console.log(found); // 12
 *
 * 13. findIndex() → Get index of first match
 * let arr = [5, 12, 8];
 * let index = arr.findIndex(x => x > 10);
 * console.log(index); // 1
 *
 * 🔹 Iteration & Transformation Methods
 * 14. forEach() → Loop through elements
 * [1, 2, 3].forEach(x => console.log(x));
 *
 * 15. map() → Create new array after transformation
 * let arr = [1, 2, 3];
 * let doubled = arr.map(x => x * 2);
 * console.log(doubled); // [2, 4, 6]
 *
 * 16. filter() → Select specific elements
 * let arr = [1, 2, 3, 4];
 * let evens = arr.filter(x => x % 2 === 0);
 * console.log(evens); // [2, 4]
 *
 * 17. reduce() → Reduce to single value
 * let arr = [1, 2, 3, 4];
 * let sum = arr.reduce((a, b) => a + b, 0);
 * console.log(sum); // 10
 *
 * 18. every() → Check if all pass a condition
 * let arr = [2, 4, 6];
 * console.log(arr.every(x => x % 2 === 0)); // true
 *
 * 19. some() → Check if at least one passes
 * let arr = [1, 3, 5, 6];
 * console.log(arr.some(x => x % 2 === 0)); // true
 *
 *
 * Sorting & Reversing
 * 20. sort()
 * let arr = [3, 1, 4, 2];
 * arr.sort((a, b) => a - b);
 * console.log(arr); // [1, 2, 3, 4]
 *
 * 21. reverse()
 * let arr = [1, 2, 3];
 * arr.reverse();
 * console.log(arr); // [3, 2, 1]
 *
 * 🔹 Other Useful Methods
 * 22. slice() → Copy part of an array
 * let arr = [1, 2, 3, 4];
 * console.log(arr.slice(1, 3)); // [2, 3]
 *
 * 23. join() → Convert to string
 * let arr = ["a", "b", "c"];
 * console.log(arr.join("-")); // "a-b-c"
 *
 * 24. toString() → Convert to string
 * let arr = [1, 2, 3];
 * console.log(arr.toString()); // "1,2,3"
 *
 * 25. flat() → Flatten nested arrays
 * let arr = [1, [2, [3, 4]]];
 * console.log(arr.flat(2)); // [1, 2, 3, 4]
 *
 * 26. flatMap()
 * let arr = [1, 2, 3];
 * let result = arr.flatMap(x => [x, x * 2]);
 * console.log(result); // [1, 2, 2, 4, 3, 6]
 */


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

// function medianOfArray(arr) {
//     let length = arr.length;
//     // odd
//     if(length % 2 === 1) {
//         return arr[Math.floor(length / 2)];
//     } else {
//     //  Even
//         return (arr[length / 2] + arr[length / 2 - 1]) / 2;
//     }
// }
//
// console.log(medianOfArray([1,2,3,4,5,6]));
