/**
 * July-15-2019
 * Given an array of integers, return indices of the two numbers
 * such that they add up to a specific target.
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];

    if (another in map) {
      return [map[another], i];
    }

    map[nums[i]] = i;
  }
};
