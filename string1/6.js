//  Remove Duplicates from a String

function removeDuplicates(str){
    let result = '';
    let seenChars = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (!seenChars[char]) {
         result += char;
         seenChars[char] = true;   
        }
        
    }
    return result;
}

console.log(removeDuplicates("aayyyuuussshhh"));
