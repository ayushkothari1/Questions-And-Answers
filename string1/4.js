// Problem: Find the longest word in a string.

function longestWord (str){
    const words = str.split(' ');
    let longest = '';
    for (const word of words) {
        if(word.length > longest.length){
            longest = word;
        }
    }
    return longest;
}
console.log(longestWord("i   am learning Javascript it doen't mean i don't have follow infact i want to address Elephant in the romm @hathiBhaiFamily"));
