
// Selection Sort has the worst-case time complexity of O(n^2)

function findLargestValueIndex(arr) {
  let tmpLargest = arr[0];
  let currentLargestIndex = 0;

  for (let i = 1; i <= arr.length; i++){
    if (tmpLargest < arr[i]) {
      tmpLargest = arr[i];
      currentLargestIndex = i;
    }
  }

  return currentLargestIndex;
}

function selectionSort(arr) {
  let result = [];
  let currentMax;

  while (arr.length) {
    currentMax = findLargestValueIndex(arr); 
    result.push(arr[currentMax]);
    arr.splice(currentMax, 1);
  }

  return result;
}

