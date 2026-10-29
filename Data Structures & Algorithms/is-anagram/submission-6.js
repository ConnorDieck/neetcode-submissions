class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sMap = {};
        let tMap = {};

        for (let i = 0; i < s.length; i++){
            if (!sMap[s[i]]) {
                sMap[s[i]] = 1;
            } else {
                sMap[s[i]] = sMap[s[i]] + 1;
            }
        }

        for (let i = 0; i < t.length; i++){
            if (!tMap[t[i]]) {
                tMap[t[i]] = 1;
            } else {
                tMap[t[i]] = tMap[t[i]] + 1;
            }
        }

        if (Object.keys(sMap).length !== Object.keys(tMap).length) return false;

        for (let char in sMap) {
            if (sMap[char] !== tMap[char]){
                return false;
            }
        }

        return true;
    }
}
