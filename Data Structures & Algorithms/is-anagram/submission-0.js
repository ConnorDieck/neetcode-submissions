class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t. length) return false;
        let sMap = {};
        let tMap = {};

        for(let char of s) {
            if(!sMap[char]){
                sMap[char] = 1;
            } else {
                sMap[char]++;
            }
        }

        for(let char of t){
            if(!tMap[char]){
                tMap[char] = 1;
            } else {
                tMap[char]++;
            }
        }

        console.log('sMap: ', sMap);
        console.log('tMap: ', tMap);

        for (const key in sMap) {
            if (tMap[key] !== sMap[key]) return false;
        }

        return true;
    }
}
