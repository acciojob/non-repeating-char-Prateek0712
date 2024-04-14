function firstNonRepeatedChar(str) {
 // Write your code her
	let freqArr=[];
	for(let i=0;i<26;i++)
		{
		  freqArr[i]=0;
		}
	for(let  ch of str)
		{
			freqArr[ch.charCodeAt(0) - 'a'.charCodeAt(0)]+=1;
			console.log(ch.charCodeAt(0) - 'a'.charCodeAt(0))
			
		}
	for(let ch of str)
		{
			if(freqArr[ch.charCodeAt(0) - 'a'.charCodeAt(0)]==1)
			{
				return ch;
			}
		}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
