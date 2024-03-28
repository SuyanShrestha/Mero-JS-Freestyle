// anagram is a word or phrase formed by rearranging the letters of a diff word or phrase, typically using all the original letters exactly once.

s = "anagram";
t = "nagaram";

// APPROACH-1 (one liner simple)
const isAnagram = (s, t) => {
  return s.split("").sort().join("") === t.split("").sort().join(""); // if yo ho vane true return gara
};

if (isAnagram(s, t)) {
  console.log("anagram");
} else {
  console.log("not anagram");
}

// yeta split le chahi aba string le mastai array banaidinxa
// ani array of elements vayexi sort gardinin tiniharulai. Aba anagram vayo vane ta sort garda kheri sab same aaunu paryo ni ta
// now feri array lai join garerw string banauni ani check garni equal xa ki nai vanerw
// equal vaye anagram ho

// ---------------------------------------------------------------------------

// APPROACH-2 (using map)
const isAnagram2 = (s, t) => {
  if (s.length !== t.length) return false; // aba length nai diff vayexi ta no chance of anagram
  const map = new Map();

  // s ko lagi, increment the count if letter appears
  for (const c of s) {
    if (map.has(c))
      map.set(c, map.get(c) + 1); // if c already xa vane count increase gara
    else map.set(c, 1); // first time c letter aako vaye ta tesko initial count vanerw start garnu paryo
  }

  // t ko lagi, decrement the count if letter appears
  for (const c of t) {
    if (!map.has(c)) return false; // it is not anagram straight up
    map.set(c, map.get(c) - 1);
    if (map.get(c) === 0) map.delete(c); // purai udaidini 0 count pugyo ki, so that paxi map.size garerw herda 0 aawos size ni kei element navayera
  }

  if (map.size > 0) return false;
  return true;
};

if (isAnagram2(s, t)) {
  console.log("anagram");
} else {
  console.log("not anagram");
}

// yesma chahi first maa ta length nai check garyem, length same vaye matra ta anagram huna paiyo
// regarding first map for s, harek letter ko occurence count gareko ho
// so, map maa c element pailai xa vani, tesko count increment gardai gayo. Yedi tyo element nai xaina vane map.set(c,1) bata initialize type gareko with first count 1
// aba yo approach maa, feri second for loop maa chahi t ko lagi check gareko ho
// t ko lagi check garda, tei agadi kai map garni, but yespali chahi count ghataudai jani
// yedi anagram ho vane ta count sab word ko 0 hunuparyo ni
// ani count 0 vako element lai ni map.delete(c) garerw hataidini
// So, aba anagram vaye map maa kei element nai bai hunivayena, ra map.size garda 0 aaunu paryo

