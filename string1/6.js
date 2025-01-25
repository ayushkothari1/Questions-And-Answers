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


function duplicat(str){
    let result = "";
    let chatObject = {};
    for (let index = 0; index < str.length; index++) {
        const char = str[index];
        if (!chatObject[char]) {
            result += char;
            chatObject[char] = true;
        }
        
    }
    return result
}

console.log(duplicat("ramnaamnaamjapnaparayamaalapna"));


