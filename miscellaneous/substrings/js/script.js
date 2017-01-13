/* dealing with substrings */

//var s = "azcbobobegghakl";
//var s = "zyxwvu"
// IIFE

(function(){

document.querySelector('.custom-button').onclick = CheckValue;

function CheckValue(){
	var x = document.querySelector("input").value;
	if(x.length == 0){
		document.querySelector("#result").innerHTML = "A non-empty string should be provided!";

	}
	else myFunction(x);
}

function myFunction(s){
	var s1 = null;
	var i = null;
	var k = null;

	var temp = s[0];

	var j = 0;
	while(j <= s.length){
		i = j + 1;
		while(i <= s.length){
			//console.log(s.substring(j, i));
			s1 = s.substring(j, i);
			k = 0;
			while(k < s1.length - 1){
				if(s1.charCodeAt(k) <= s1.charCodeAt(k + 1)){
					if(temp.length < (s1.substring(0, k + 2)).length){
						temp = s1.substring(0, k + 2);
					}
					k++;
				}
				else{
					break;
				}
			}
			i++;
		}
		j++;
	}
	document.querySelector("#result").innerHTML = "Longest substring in alphabetical order is: <b>" + temp + "</b>";
}

})();

//console.log(temp);