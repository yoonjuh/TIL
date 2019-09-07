/** 
 * Quick sort has the time complexity as below,
 * worst-case => O(n^2)
 * base, average-case => O(n log n).
 *
 * It will show you the best-case time complexity when 
 * you sort the nearly sorted list.
 * On the other hand, it will show you the worst-case time 
 * complexity when you sort reverse sorted list.
 *
 *
  * */

function quickSort(arr) {
  if (arr.length < 2) return arr;

  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];
  const less = [];
  const greater = [];

  for (let i in arr) {
    if (i != pivotIndex) {
      arr[i] > pivot ? greater.push(arr[i]) : less.push(arr[i]);
    }
  }

  return [
    ...quickSort(less),
    pivot,
    ...quickSort(greater)
  ]
}


