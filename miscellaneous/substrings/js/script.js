/* dealing with substrings */
// IIFE

(function(){

document.querySelector('#action').onclick = Action;
document.querySelector('#predefined').onclick = Predefined;
document.querySelector('#substrings').onclick = Substrings;

function Action(){
	var x = document.querySelector("input").value;
	if(x.length === 0){
		document.querySelector("#result").innerHTML = "A non-empty string should be provided!";
	}
	else document.querySelector("#result").innerHTML = myFunction(x);
}

function Predefined(){
	var arrOfStr = ['zakxfmxbangxyl','rbbyoiwouzkpgsrwflvatbl', 'qvrcdfxnoucltkt', 'jykbeweupppsgdegmcodwwlm', 'yornmuwooloygpkhuah', 'ledpzugfc', 'ndxihzqz', 'abcdefghijklmnopqrstuvwxyz', 'oarlcrmlstxocjckyvgltna', 'ggikmvabqpvhsb', 'nxnahdzzhgi', 'zyxwvutsrqponmlkjihgfedcba', 'ngwwpslsngufq', 'mivvqmznckwbnpwyjerazmmv', 'mnjucvnygceaunxvq', 'quswmyufhpoqofqyxqkozg', 'jcmdfilstlsm', 'mbuczpuedlic', 'jwjxlioronxhgqc', 'grbdryzhfw'];
	var temp1 = '';
	for(var s = 0; s < arrOfStr.length; s++){
		temp1 += (myFunction(arrOfStr[s]) + "<br>");
	}
	console.log(arrOfStr.length);
	document.querySelector("#result").innerHTML = temp1;
}

function Substrings(){
	var x = document.querySelector("input").value;
	if(x.length === 0){
		document.querySelector("#result").innerHTML = "A non-empty string should be provided!";
	}
	else document.querySelector("#result").innerHTML = myFunction1(x);
}

function myFunction(s){

	var temp = s[0];

	var j = 0;
	while(j <= s.length){
		var i = j + 1;
		while(i <= s.length){
			//console.log(s.substring(j, i));
			s1 = s.substring(j, i);
			var k = 0;
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
	return "String: <b>" + s + "</b>. The longest substring in alphabetical order is: <b>" + temp + "</b>";
}

function myFunction1(s){

	var temp = "These are the substrings of the string <b>" + s + "</b>:<br>"

	var j = 0;
	while(j <= s.length){
		var i = j + 1;
		while(i <= s.length){
			//console.log(s.substring(j, i));
			temp += (s.substring(j, i) + "<br>");
			i++;
		}
		j++;
	}
	return temp;
}

})();
