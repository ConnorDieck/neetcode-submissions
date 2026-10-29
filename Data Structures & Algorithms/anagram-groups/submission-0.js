class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // put each string through helper and use the output as keys for a hashmap
        // values can be an array of each matching string
        let anagramMap = {};

        for (let str of strs) {
            let key = this.helper(str);
            anagramMap[key] = anagramMap[key] ? [...anagramMap[key], str] : [str];
        }

        let result = [];

        for (let key in anagramMap) {
            result.push(anagramMap[key])
        }

        return result;
    }

    helper(str) {
        // transform string to anagram symbol, i.e. 'cat' becomes 'c1a1t1'. 
        // 'pots' becomes 'o1p1s1t1'
        str = str.split('').sort();
        let keyMap = {};
        let key = '';

        for(let char of str) {
            keyMap[char] = keyMap[char] ? keyMap[char] + 1 : 1;
        }

        for (let k in keyMap) {
            key += `${k}${keyMap[k]}`
        }

        return key;
    }
}
