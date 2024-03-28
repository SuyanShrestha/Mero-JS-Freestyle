// return true if array contains duplicate numbers

// BASIC APPROACH
nums = [1, 2, 3, 4, 1];

const containsDuplicate = (nums) => {
  const map = new Map();
  for (const n of nums) {
    if (map.has(n)) return true;
    map.set(n, true);
  }
  return false;
};

if (containsDuplicate(nums)) {
  console.log("array contains duplicate numbers");
} else {
  console.log("no duplicate numbers");
}

// yesma map chahi simply key value pairs ta ho. Aba harek element of nums chahi herxa
//  ani if n already xa in map vane chahi returns true (duplicate xa vanerw)
//  natra chahi map maa n vanni number chahi as a key rakhdinxa, with value true
// aba ekchoti matra duplicate aayo vaneni return true vara loop bata niskinxa
// tarw duplicate nai aayena loop sakida samma ni, vanechahi return false

// --------------------------------------------------------------------------------------

// APPROACH-2 ( malai chahi better lako thing )

// sets dont have duplicate values, so we can convert array to set and compare lengths of original array and that set

const containsDuplicate2 = (nums) => {
  const set = new Set(nums);
  return set.size !== nums.length;
};

if (containsDuplicate2(nums)) {
  console.log("array contains duplicate numbers");
} else {
  console.log("no duplicate numbers");
}

// yesma set ko unique elements ko count chahi .size le dinxa
// ani original array ko length chahi nums.length le dinxa
// duplicte xa vane set.size !== nums.length chahi ho raixa, true huni vo
// so returns true