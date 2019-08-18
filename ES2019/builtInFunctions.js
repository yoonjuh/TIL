/** ARRAY HELPERS */

/** flat */
function flat(arr, depth) {
  if (!depth) return arr.slice();

  const flatArr = [];
  arr.forEach(value =>
    Array.isArray(value)
      ? flatArr.push(...flat(value, depth - 1))
      : flatArr.push(value)
  );

  return flatArr;
}

const testArray = [12, 11, [23, 52]];

testArray.flat(2); /** FROM ES 2019,  flat function is a built-in function. */
/** ==================================================================== */

/** flatMap */
const arr = [4, 19, 25];

console.log(arr.map(value => [value]));
// => [[4], [20], [26]]

console.log(arr.flatMap(value => [value]));
// => [4, 20, 26]

const anotherArr = [[10], [9], [1], [4], [7]];

const testFlatMap = anotherArr.flatMap(val => (val >= 10 ? [] : value));

console.log(testFlatMap); /** [9, 1, 4, 7] */

/** ================================================================== */

/** Object.fromEntries */
// Object.fromEntries function does the exact opposite job of Object.entries

const testObjectFromEntries = [["name", "bob"], ["age", 99]];
console.log(Object.fromEntries(testObjectFromEntries)); // { name: 'bob', age: 99 }

/** ================================================================== */
/** STRING */

/** trimStart, trimEnd */
const trimStartTest = " something";
const trimEndTest = "else ";
console.log(`${trimStartTest.trimStart()} ${trimEndTest.trimEnd()}`); // "something else"
