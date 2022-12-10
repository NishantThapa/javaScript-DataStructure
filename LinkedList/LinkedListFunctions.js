// Node constructor
function Node(value, next) {
  this.value = value;
  this.next = next;
}

// List constructor
function List() {
  this.head = null;
  this.length = 0;
}

// add a node to the list
List.prototype.add = function (value) {
  this.head = new Node(value, this.head);
  this.length++;
  return this;
};

// remove a node from the list
List.prototype.remove = function (value) {
  var current = this.head;
  var previous = null;
  while (current) {
    if (current.value === value) {
      if (previous) {
        previous.next = current.next;
      } else {
        this.head = current.next;
      }
      this.length--;
      return current.value;
    }
    previous = current;
    current = current.next;
  }
  return null;
};

// find a node in the list
List.prototype.find = function (value) {
  var current = this.head;
  while (current) {
    if (current.value === value) {
      return current.value;
    }
    current = current.next;
  }
  return null;
};

// return the number of nodes in the list
List.prototype.count = function () {
  return this.length;
};

// return the first node in the list

List.prototype.first = function () {
  return this.head.value;
};

// return the last node in the list
List.prototype.last = function () {
  var current = this.head;
  while (current.next) {
    current = current.next;
  }
  return current.value;
};

// return the node at the given position
List.prototype.at = function (position) {
  var current = this.head;
  var count = 0;
  while (count < position) {
    current = current.next;
    count++;
  }
  return current.value;
};

// insert a node at the given position
List.prototype.insert = function (value, position) {
  var current = this.head;
  var previous = null;
  var count = 0;
  while (count < position) {
    previous = current;
    current = current.next;
    count++;
  }
  var node = new Node(value, current);
  if (previous) {
    previous.next = node;
  } else {
    this.head = node;
  }
  this.length++;
  return this;
};

// remove a node at the given position
List.prototype.removeAt = function (position) {
  var current = this.head;
  var previous = null;
  var count = 0;
  while (count < position) {
    previous = current;
    current = current.next;
    count++;
  }
  if (previous) {
    previous.next = current.next;
  } else {
    this.head = current.next;
  }
  this.length--;
  return current.value;
};

// return the index of the given node
List.prototype.indexOf = function (value) {
  var current = this.head;
  var count = 0;
  while (current) {
    if (current.value === value) {
      return count;
    }
    current = current.next;
    count++;
  }
  return -1;
};

// return true if the list is empty, false otherwise
List.prototype.isEmpty = function () {
  return this.length === 0;
};

// return true if the given value is in the list, false otherwise
List.prototype.contains = function (value) {
  var current = this.head;
  while (current) {
    if (current.value === value) {
      return true;
    }
    current = current.next;
  }
  return false;
};

// return the list of values in the list
List.prototype.values = function () {
  var current = this.head;
  var values = [];
  while (current) {
    values.push(current.value);
    current = current.next;
  }
  return values;
};

// return the list of nodes in the list
List.prototype.nodes = function () {
  var current = this.head;
  var nodes = [];
  while (current) {
    nodes.push(current);
    current = current.next;
  }
  return nodes;
};

// return the list as a string
List.prototype.toString = function () {
  var current = this.head;
  var string = "";
  while (current) {
    string += current.value + " ";
    current = current.next;
  }
  return string.trim();
};

// return the list as an array
List.prototype.toArray = function () {
  var current = this.head;
  var array = [];
  while (current) {
    array.push(current.value);
    current = current.next;
  }
  return array;
};

// return the list as a JSON string
List.prototype.toJSON = function () {
  return JSON.stringify(this.toArray());
};

// clear the list
List.prototype.clear = function () {
  this.head = null;
  this.length = 0;
  return this;
};

// reverse the list
List.prototype.reverse = function () {
  var current = this.head;
  var previous = null;
  while (current) {
    var next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  this.head = previous;
  return this;
};

// return the middle node of the list
List.prototype.middle = function () {
  var slow = this.head;
  var fast = this.head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow.value;
};

// return the node at the given position from the end of the list
List.prototype.fromEnd = function (position) {
  var slow = this.head;
  var fast = this.head;
  var count = 0;
  while (count < position) {
    fast = fast.next;
    count++;
  }
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow.value;
};

// return true if the list is circular, false otherwise
List.prototype.isCircular = function () {
  var slow = this.head;
  var fast = this.head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};

// return the node at the beginning of the loop
List.prototype.loopStart = function () {
  var slow = this.head;
  var fast = this.head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  }
  slow = this.head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow.value;
};

// remove duplicates from the list
List.prototype.removeDuplicates = function () {
  var current = this.head;
  while (current) {
    var next = current.next;
    while (next && next.value === current.value) {
      next = next.next;
    }
    current.next = next;
    current = next;
  }
  return this;
};

// remove duplicates from the list without using a buffer
List.prototype.removeDuplicatesNoBuffer = function () {
  var current = this.head;
  while (current) {
    var runner = current;
    while (runner.next) {
      if (runner.next.value === current.value) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    current = current.next;
  }
  return this;
};

// return the kth to last element of the list
List.prototype.kthToLast = function (k) {
  var slow = this.head;
  var fast = this.head;
  var count = 0;
  while (count < k) {
    fast = fast.next;
    count++;
  }
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow.value;
};

// partition the list around the given value
List.prototype.partition = function (value) {
  var current = this.head;
  var before = new List();
  var after = new List();
  while (current) {
    if (current.value < value) {
      before.append(current.value);
    } else {
      after.append(current.value);
    }
    current = current.next;
  }
  before.tail.next = after.head;
  return before;
};

// sum the values of two lists
List.prototype.sum = function (list) {
  var current1 = this.head;
  var current2 = list.head;
  var sum = new List();
  var carry = 0;
  while (current1 || current2) {
    var value1 = current1 ? current1.value : 0;
    var value2 = current2 ? current2.value : 0;
    var total = value1 + value2 + carry;
    carry = total > 9 ? 1 : 0;
    sum.append(total % 10);
    current1 = current1 ? current1.next : null;
    current2 = current2 ? current2.next : null;
  }
  if (carry) {
    sum.append(carry);
  }
  return sum;
};

// return true if the list is a palindrome, false otherwise
List.prototype.isPalindrome = function () {
  var current = this.head;
  var stack = [];
  while (current) {
    stack.push(current.value);
    current = current.next;
  }
  current = this.head;
  while (current) {
    if (current.value !== stack.pop()) {
      return false;
    }
    current = current.next;
  }
  return true;
};

// return true if the list is a palindrome, false otherwise
List.prototype.isPalindromeNoBuffer = function () {
  var slow = this.head;
  var fast = this.head;
  var stack = [];
  while (fast && fast.next) {
    stack.push(slow.value);
    slow = slow.next;
    fast = fast.next.next;
  }
  if (fast) {
    slow = slow.next;
  }
  while (slow) {
    if (slow.value !== stack.pop()) {
      return false;
    }
    slow = slow.next;
  }
  return true;
};

// return true if the list is a palindrome, false otherwise

List.prototype.isPalindromeRecursive = function () {
  var length = this.length;
  var result = this.isPalindromeRecursiveHelper(this.head, length);
  return result.result;
};

List.prototype.isPalindromeRecursiveHelper = function (node, length) {
  if (length <= 0) {
    return {
      result: true,
      node: node,
    };
  } else if (length === 1) {
    return {
      result: true,
      node: node.next,
    };
  }

  var result = this.isPalindromeRecursiveHelper(node.next, length - 2);
  if (!result.result || result.node === null) {
    return result;
  }
  result.result = node.value === result.node.value;
  result.node = result.node.next;
  return result;
};

// return the intersection of two lists
List.prototype.intersection = function (list) {
  var current1 = this.head;
  var current2 = list.head;
  var length1 = this.length;
  var length2 = list.length;
  while (length1 > length2) {
    current1 = current1.next;
    length1--;
  }
  while (length2 > length1) {
    current2 = current2.next;
    length2--;
  }
  while (current1 !== current2) {
    current1 = current1.next;
    current2 = current2.next;
  }
  return current1.value;
};

// return the intersection of two lists
List.prototype.intersectionNoBuffer = function (list) {
  var current1 = this.head;
  var current2 = list.head;
  while (current1 !== current2) {
    current1 = current1 ? current1.next : list.head;
    current2 = current2 ? current2.next : this.head;
  }
  return current1.value;
};

// return the intersection of two lists
List.prototype.intersectionNoBuffer2 = function (list) {
  var current1 = this.head;
  var current2 = list.head;
  var length1 = this.length;
  var length2 = list.length;
  var diff = Math.abs(length1 - length2);
  if (length1 > length2) {
    while (diff > 0) {
      current1 = current1.next;
      diff--;
    }
  } else {
    while (diff > 0) {
      current2 = current2.next;
      diff--;
    }
  }
  while (current1 !== current2) {
    current1 = current1.next;
    current2 = current2.next;
  }
  return current1.value;
};

// return the intersection of two lists
List.prototype.intersectionNoBuffer3 = function (list) {
  var current1 = this.head;
  var current2 = list.head;
  var length1 = this.length;
  var length2 = list.length;
  var diff = Math.abs(length1 - length2);
  var longer = length1 > length2 ? this : list;
  var shorter = length1 > length2 ? list : this;
  while (diff > 0) {
    longer = longer.next;
    diff--;
  }
  while (current1 !== current2) {
    current1 = current1.next;
    current2 = current2.next;
  }
  return current1.value;
};

// test

var list = new List();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);

list.nodes();
