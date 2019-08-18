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

/** FROM ES 2019,  flat function is a built-in function. */
testArray.flat(2);

/** ================================================================== */

/** STRING */

/** trimStart, trimEnd */
const trimStartTest = " something";
const trimEndTest = "else ";
console.log(`${trimStartTest.trimStart()} ${trimEndTest.trimEnd()}`); // "something else"
