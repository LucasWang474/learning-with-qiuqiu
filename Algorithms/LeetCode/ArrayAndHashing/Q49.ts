/**
 * https://leetcode.com/problems/group-anagrams/
 */
function groupAnagrams(strs: string[]): string[][] {
  const map = {};
  for (let str of strs) {
    const key = sortStr(str);
    if (!map[key]) {
      map[key] = [str];
    } else {
      map[key].push(str);
    }
  }
  return Object.values(map);
}

function sortStr(str: string): string {
  return str.split("").sort().join();
}
