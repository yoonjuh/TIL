/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const mergeTwoLists = function(l1, l2) {

  /** Error prevention */
  if (!l1 && !l2) return null;
  else if (!l1 && l2) return l2;
  else if (!l2 && l1) return l1;

  /** initializing result list */
  let newNode = new ListNode(-1);
  
  if (l1.val <= l2.val) { 
    newNode.val = l1.val;
    l1 = l1.next;
  } else {
    newNode.val = l2.val;
    l2 = l2.next;
  }
  
  newNode.next = mergeTwoLists(l1, l2);
  
  return newNode;
};
