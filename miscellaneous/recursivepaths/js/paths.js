/* Paths functionality */

(function(){
	
	// a function meant to recursively compute the number of available paths in a nc (number of columns) x nr (number of rows) matrix. 
	function RecNrOfPaths(nc, nr, row, col){
		
		if(nr < 2){
			return 0;
		}
		
		if(row == nr - 1 || col == nc - 1){
			return 1;
		}
		
		return RecNrOfPaths(nc, nr, row, col + 1) + RecNrOfPaths(nc, nr, row + 1, col);
	}

	// defining an event handler for the 'Validate!' button 
	
	document.querySelector("#matrix-dim").addEventListener("click", function(){
		var ncl = Number(document.querySelectorAll("#first-form input")[0].value);
		var nrw = Number(document.querySelectorAll("#first-form input")[1].value);
		
		var rez = RecNrOfPaths(ncl, nrw, 0, 0);
		document.querySelector("#display-result").innerHTML = "For a matrix with " + ncl + " colon(s) and " + nrw + " row(s), there are " + rez + " distinct paths from the top-left corner to the bottom-right corner.";
	});
	
	// The acc variable is an array container of length x, x being the total number of allowed paths from the top-left corner to the bottom-right corner; each of the x elements from acc is an array of length = [(number of columns) + (number of rows) - 1]. The elements of the acc elements (which are arrays) are also arrays of length = 2, storing the coordinates of the cells for a certain allowed path
	
	var acc = []; 
		
	// a function meant to compute and store the coordinates of the available paths. The paths are stored in the acc variable as arrays of size (number_of_rows) + (number_of_columns) - 1, each of their elements being an array of size two, storing a row index and a column index.
	
	function RecPrintPaths(nr, nc, r, c, path){		
		if(nr < 2){
			return;
		}
		
		if(r == nr - 1){
			for(var i = c; i <= nc - 1; i++){
			path.push([r, i]);
			}
			acc.push(path);
			return;
		}
		
		if (c == nc - 1){
			for(var j = r; j <= nr - 1; j++){
				path.push([j, c]);
			}
			acc.push(path);
			return;
		}
		
		path.push([r, c]);
		RecPrintPaths(nr, nc, r, c + 1, path.slice(0));
		RecPrintPaths(nr, nc, r + 1, c, path.slice(0));
	}
	
	// defining an event handler for the 'Print!' button
	
	document.querySelector("#print-paths").addEventListener("click", function(){
		acc = [];
		var path = [];
		var ncl = Number(document.querySelectorAll("#first-form input")[0].value);
		var nrw = Number(document.querySelectorAll("#first-form input")[1].value);
		
		RecPrintPaths(nrw, ncl, 0, 0, path);
		console.log(acc);
		var temp = '';
		var pathNr = 0;
		for(var i = 0; i < acc.length; i++){
			for(var j = 0; j < acc[i].length; j += ncl + nrw - 1){
				
				var temp2 = acc[i].slice(j, j + ncl + nrw - 1);
				pathNr++;
				temp += "Path nr. " + pathNr + ": ";
				for(var k = 0; k < temp2.length; k++)
				{
					temp += "(" + temp2[k] + "); ";
				}
				temp += "<br>";
			}
		}
	
		document.querySelector("#display-result2").innerHTML = temp;				
		
	});
	
	// defining an event handler for the 'Draw!' button
	
	document.querySelector("#draw-path").addEventListener("click", function(){
		
		if(acc.length == 0){
			document.querySelector("#display-result3").innerHTML = "You should first <b>Print</b> the available paths for a matrix with <i>at least 1 colon and more than 1 row!</i>";
			return;
		}
		
		var x = document.querySelectorAll("#first-form input")[5].value;
		
		if(x > acc.length){
			document.querySelector("#display-result3").innerHTML = "There is no path with index " + x +"! Try again!";
			return;
		}
		
		var ncl = Number(document.querySelectorAll("#first-form input")[0].value);
		var nrw = Number(document.querySelectorAll("#first-form input")[1].value);
		
		
		temp = acc[x - 1];
		
		temp1 = '';
		
		for(var i = 0; i < nrw; i++){
			for(var j = 0; j < ncl; j++){
				flag = false;
				for(var k = 0; k < ncl + nrw - 1; k++){
					if(temp[k][0] == i && temp[k][1] == j){
						flag = true;
						break;
					}					
				}	
				if(flag){
					temp1 += ' <b style="color:red; font-size:2em">' + 'X' + '</b> ';
				}
				else{
					temp1 += ' <b style="font-size:2em">X</b> ';
				}
									
			}
			temp1 += '<br>';
		}
		
		document.querySelector("#display-result3").innerHTML = temp1;
		
	});
	
	// defining a handler for the 'Reset' button
	
	document.querySelector("#reset-button").addEventListener("click", function(){
		
		document.querySelectorAll("#first-form input")[0].value = "1";
		document.querySelectorAll("#first-form input")[1].value = "1";
		document.querySelector("#display-result").innerHTML = "";
		document.querySelector("#display-result2").innerHTML = "";
		document.querySelector("#display-result3").innerHTML = "";
		});
})();


