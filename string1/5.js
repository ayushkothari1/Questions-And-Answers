function firstUniqueChar(str){
    const charCount = {};

    for (let index = 0; index < str.length; index++) {
        const char = str[index];
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    for (let index = 0; index < str.length; index++) {
            const char = str[index];
            if(charCount[char] === 1){
                return char;
            }
            
        }
     return null;   
    }

    console.log(firstUniqueChar("aadbfjdfhjdssssshajaaaaaaab"));
    
