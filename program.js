// Write a JS program that finds the longest common substring between two strings.

function Substring(arr1){
var arr= arr1.concat().sort(),
a1= arr[0], a2= arr[arr.length-1], L= a1.length, i= 0;
while(i< L && a1.charAt(i)=== a2.charAt(i)) i++;
return a1.substring(0, i);
}
console.log(Substring(['akash is here ', 'akash is try to cheat'])); 

console.log(Substring(['finkraft is hiring', 'finkraft is assign test to akash '])); 

console.log(Substring(['Akash is selected by finkraft', 'Akash is gone join finkraft at 9 feb '])); 
