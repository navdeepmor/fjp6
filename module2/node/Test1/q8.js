function spoon(str){
    let idxOfSpace = str.indexOf(" "); 
    let str2 = str[0]+str.slice(idxOfSpace+2);
    let str1 = str.charAt(idxOfSpace+1)+str.slice(1,idxOfSpace);
    console.log(str1+" "+str2);
}

spoon("fite klying");