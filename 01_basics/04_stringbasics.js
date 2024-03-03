const gameName= new String('anveshika')
console.log(gameName);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('3'));
console.log(gameName.indexOf('n'));
const newStr= gameName.substring(0,4);
console.log(newStr);
const str1= gameName.slice(-8,4);
console.log(str1);
const myChar= "  anveshikaa        "
console.log(myChar);
console.log(myChar.trim());
const url="https://anveshika%20singh/sharma/singh"
console.log(url.replace('%20','_'));
console.log(url.includes('anveshika'));
const my="an-vesh-ika"
console.log(my.split('-'));