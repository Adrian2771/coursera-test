
//-------------------------------------------------IIFE 1: Collapsible nav menus, toggle item price menu --------

(function(){
	var bsButtonList = document.querySelectorAll(".bs-button"); // the collection of 'Bootstrap-like' menu buttons
	var navMenuList = document.querySelectorAll(".nav-list"); // the collection of list elements encompassing the functional buttons

	// collections of buttons and other elements for displaying details related to rates and services
	var csButtonList= document.querySelectorAll("span.custom-button"); 
	var phContainerList = document.querySelectorAll(".photo-container");
	var itPriceList = document.querySelectorAll(".item-price");

	var flags = [];

	var newFlags = [];

	window.$langFlag = null;

	for(var s = 0; s < bsButtonList.length; s++){
		flags[s] = false;
	}

	for(var v = 0; v < csButtonList.length; v++){
		newFlags[v] = false;
	}

	// The event handler dealing with additional presentation content next to the big book picture, i.e. 'click for more'
	document.querySelector("#ellipsis").addEventListener('click', function(){
	document.querySelector('#welcome > p:nth-of-type(4)').style.display = "block";
	document.querySelector('#welcome > p:nth-of-type(5)').style.display = "block";
	document.querySelector('#ellipsis').style.display = "none";
	document.querySelector('#ellipsis2').style.display = "inline";
	});

	document.querySelector("#ellipsis2").addEventListener('click', function(){
	document.querySelector('#ellipsis').style.display = "inline";
	document.querySelector("#ellipsis2").style.display = "none";
	document.querySelector('#welcome > p:nth-of-type(5)').style.display = "none";
	document.querySelector('#welcome > p:nth-of-type(4)').style.display = "none";
	});

	// The event handler for 'Bootstrap-like' menu buttos
	
	function ToggleMenus(k){
		// The variables defined in the IFEE 1 scope become available for the function returned as result
		var temps = navMenuList[k];
		var temp = temps.children;
		var fl = flags[k];
		return (function(){
			
			if(fl === false){
				fl = true;
				temps.style.display = "block";
				for(var i = 0; i < temp.length; i++){
					temp[i].style.display = "block";
				}
			}
			else{
				fl = false;
				temps.style.display = "none";
				for(var i = 0; i < temp.length; i++){
					temp[i].style.display = "none";
				}

			}
		});
	}

	// The event handler for displaying / hiding the rates

	function ToggleItemPrice(k){
		// The variables defined in the IFEE 1 scope become available for the function returned as result
		var temp = itPriceList[k];
		var temp1 = phContainerList[k];
		var temp2 = newFlags[k];

		return (function(){
			if(temp2 === false){
				temp2 = true;
				temp1.style.display = "none";
				temp.style.display = "block";

			}
			else{
				temp2 = false;
				temp1.style.display = "block"; 
				temp.style.display = "none";
			}
		});
	}

	// adding event handlers to buttons corresponding to services' details
	for(var j = 0; j < bsButtonList.length; j++){
		bsButtonList[j].onclick = ToggleMenus(j);
	}

	for(var j = 0; j < csButtonList.length; j++){
		csButtonList[j].onclick = ToggleItemPrice(j);
	}

})();

//-------------------------------------------------IIFE 2: Default content loader, Toggle languaqge handler, Sample translation loader --------
(function(){

document.onDOMContentLoaded = UploadDefaultContent(0); // upload default page content after DOM loading

var fields = ['tech', 'law', 'econ', 'liter'];

// This function replaces the default content of the 'original' and 'translation' text fields on user's click, i.e. is the event handler for the 'Click'event
function FieldSelector(z){
	var urls = "";
	switch(z){
		case 'tech': z = $TechContainer; urls = "tools-308438_640.png"; break;
		case 'law': z = $LawContainer; urls= "scales-310131_640.png"; break;
		case 'econ': z = $EconContainer; urls = "compound-interest-1296451_640.png"; break;
		case 'liter': z = $LiterContainer; urls = "writing-146913_640.png"; break;
	}

	var textSamplesArrLength = 1; // For now, there's just one translation sample for each field of activity
	var w = Math.floor(10*Math.random())%textSamplesArrLength;

	//console.log(w);

	return (function(){

		document.querySelector("#field-origin").style.backgroundImage = "url('img/" + urls + "')";
		document.querySelector("#field-trad").style.backgroundImage = "url('img/" + urls + "')";

		if(document.getElementById('check').checked === false){
		document.querySelector("#original").innerHTML = z['En Ro'][w]['original'];
		document.querySelector("#translation").innerHTML = z['En Ro'][w]['translation'];		
	}
	else{
		document.querySelector("#original").innerHTML = z['Ro En'][w]['original'];
		document.querySelector("#translation").innerHTML = z['Ro En'][w]['translation'];
	}

	});	
}

// adding event handlers to the buttons designated to upload the sample translations

for(var i = 0; i < fields.length; i++){
	tempSel = "#second-menu .nav-list :nth-child(" + (i + 1) +")";
	document.querySelector(tempSel).onclick = FieldSelector(fields[i]);
}

// adding event listeners to the language buttons

document.querySelector('#lang-ro').addEventListener('click', function(){
	if($langFlag === 1){
		UploadDefaultContent(0);
		$langFlag = 0;
	}
});

document.querySelector('#lang-en').addEventListener('click', function(){
	if($langFlag === 0){
		UploadDefaultContent(1);
		$langFlag = 1;
	}
});

// This function uploads the default content of the 'original' and 'translation' text fields

function UploadDefaultContent(lf){
	$langFlag = lf;

	document.querySelector("#original").innerHTML = $LoremIpsum[1].original; // default translation sample 
	document.querySelector("#translation").innerHTML = $LoremIpsum[1].translation;
	document.querySelector("#top").innerHTML = $navSect['top'][lf];
	document.querySelector("#welcome > p:nth-of-type(1)").innerHTML = $navSect['p1'][lf];
	document.querySelector("#welcome > p:nth-of-type(2)").innerHTML = $navSect['p2'][lf];
	document.querySelector("#welcome > p:nth-of-type(3)").innerHTML = $navSect['p3'][lf];
	document.querySelector("#ellipsis").innerHTML = $navSect['ellipsis1'][lf];
	document.querySelector("#ellipsis2").innerHTML = $navSect['ellipsis2'][lf];
	document.querySelector("#welcome > p:nth-of-type(4)").innerHTML = $navSect['p4'][lf];
	document.querySelector("#welcome > p:nth-of-type(5)").innerHTML = $navSect['p5'][lf];
	document.querySelector("#first-menu > h3").innerHTML = $navSect['navig'][lf];
	document.querySelector("#first-menu li:nth-of-type(1) a").innerHTML = $navSect['servPricing'][lf];
	document.querySelector("#first-menu li:nth-of-type(2) a").innerHTML = $navSect['samples'][lf];
	document.querySelector("#first-menu li:nth-of-type(3) a").innerHTML = $navSect['about'][lf];
	document.querySelector("#samples").innerHTML = $mainSect['samplesTitle'][lf];
	document.querySelector("#second-menu > p").innerHTML = $mainSect['p6'][lf];
	document.querySelector("#second-menu > .nav-list > li:nth-of-type(1)").innerHTML = $mainSect['techTr'][lf];
	document.querySelector("#second-menu > .nav-list > li:nth-of-type(2)").innerHTML = $mainSect['lawTr'][lf];
	document.querySelector("#second-menu > .nav-list > li:nth-of-type(3)").innerHTML = $mainSect['econTr'][lf];
	document.querySelector("#second-menu > .nav-list > li:nth-of-type(4)").innerHTML = $mainSect['literTr'][lf];
	document.querySelector("#source").innerHTML = $mainSect['sourceTitle'][lf];
	document.querySelector("#target").innerHTML = $mainSect['targetTitle'][lf];
	document.querySelector("#pricing").innerHTML = $mainSect['servTitle'][lf];
	document.querySelector("#pricing + p").innerHTML = $mainSect['p7'][lf];
	document.querySelector("#side-wrapper > h3:nth-of-type(1)").innerHTML = $mainSect['trDetails'][lf];
	document.querySelector("#side-wrapper > h3:nth-of-type(2)").innerHTML = $mainSect['intDetails'][lf];
	document.querySelector("#side-wrapper > h3:nth-of-type(3)").innerHTML = $mainSect['specDetails'][lf];
	document.querySelector("#side-wrapper :nth-child(4)").innerHTML = $mainSect['itPriceContent'][lf][0];
	document.querySelector("#side-wrapper :nth-child(8)").innerHTML = $mainSect['itPriceContent'][lf][1];
	document.querySelector("#side-wrapper :nth-child(12)").innerHTML = $mainSect['itPriceContent'][lf][2];
	document.querySelector("#footer p").innerHTML = $footerSect['p7'][lf];
	document.querySelector("#footer .nav-list li:nth-of-type(1) a").innerHTML = $footerSect['extlink1'][lf];
	document.querySelector("#footer .nav-list li:nth-of-type(2) a").innerHTML = $footerSect['extlink2'][lf];
	document.querySelector("#footer .nav-list li:nth-of-type(3) a").innerHTML = $footerSect['extlink3'][lf];
}
})();