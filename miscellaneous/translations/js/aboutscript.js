/* Functions used with the About Page */
/*-------------------IIFE 4 --------------------------------------*/
(function(){

/*-----------------Playlist -----------------------*/

var musicCollection = ['https://www.youtube.com/embed/mLZDye9gVCw', 'https://www.youtube.com/embed/4VqvEGsIvAc', 'https://www.youtube.com/embed/91X08VVXktM', 'https://www.youtube.com/embed/p11tHsj3feg', 'https://www.youtube.com/embed/RAZkow6ElW8', 'https://www.youtube.com/embed/-sftw5k_JRs', 'https://www.youtube.com/embed/yE6DNu_avyg', 'https://www.youtube.com/embed/sf0d14lDgWI', 'https://www.youtube.com/embed/ROXVuTPe22c', 'https://www.youtube.com/embed/10hQbYuFfig'];
var rand = Math.floor((Math.random() * 10));

document.querySelector("#music").src = musicCollection[rand];

document.querySelector("#next").addEventListener('click', function(){
	rand += 1;
	rand %= 10;
	document.querySelector("#music").src = musicCollection[rand];
	// console.log(rand);

});

/*------------------Flag map ---------------------------*/

var areaShapeCollection = document.querySelectorAll("area");

var mapCoords = [[30,320,40], [390,150,40], [355,475,40], [420,475,40], [50,150,40], [405,235,40], [475,235,40]];

var adjustX = (document.querySelector("#globe").clientHeight)/546;
var adjustY = (document.querySelector("#globe").clientWidth)/546;
var adjustRadius = Math.sqrt(adjustX*adjustX + adjustY*adjustY);

for(var i = 0; i <areaShapeCollection.length; i++){
	 tempX = mapCoords[i][0];
	 tempY = mapCoords[i][1];
	 tempRadius = mapCoords[i][2];

	 tempX *= adjustX;
	 tempY *= adjustY;
	 tempRadius *= adjustRadius;

	 areaShapeCollection[i].coords = tempX + ',' + tempY + ',' + tempRadius;
}


/*----------------Toggle language ----------------------------*/

window.$aboutLangFlag = 1;

AboutUploadContent(1); // set the default language to English

document.querySelector("#lang-ro").onclick = function(){
	if($aboutLangFlag === 1){
		$aboutLangFlag = 0;
		AboutUploadContent($aboutLangFlag);
	}
};

document.querySelector("#lang-en").onclick = function(){
	if($aboutLangFlag === 0){
		$aboutLangFlag = 1;
		AboutUploadContent($aboutLangFlag);
	}
};


function AboutUploadContent(index){
	document.querySelector("#menuBEdu li:nth-child(1) > a").innerHTML = $aboutContainer['menuBEdu'][index][0];
	document.querySelector("#menuBEdu li:nth-child(2) > a").innerHTML = $aboutContainer['menuBEdu'][index][1];
	document.querySelector("#menuBEdu li:nth-child(3) > a").innerHTML = $aboutContainer['menuBEdu'][index][2];
	document.querySelector("#h2loc").innerHTML = $aboutContainer['h2loc'][index];
	document.querySelector("#h3Edu").innerHTML = $aboutContainer['h3Edu'][index];
	document.querySelector("#captionEdu").innerHTML = $aboutContainer['captionEdu'][index];
	document.querySelector("#d1LisEdu").innerHTML = $aboutContainer['d1LisEdu'][index];
	document.querySelector("#sumEdu").innerHTML = $aboutContainer['sumEdu'][index];
	document.querySelector("#d2ListEdu").innerHTML =$aboutContainer['d2ListEdu'][index];
	document.querySelector("#h3Empl").innerHTML = $aboutContainer['h3Empl'][index];
	document.querySelector("#captionEmpl").innerHTML = $aboutContainer['captionEmpl'][index]
	document.querySelector("#d1ListEmpl").innerHTML = $aboutContainer['d1ListEmpl'][index];
	document.querySelector("#sumEmpl").innerHTML = $aboutContainer['sumEmpl'][index];
	document.querySelector("#d2ListEmpl").innerHTML = $aboutContainer['d2ListEmpl'][index];
	document.querySelector("#h3Hobb").innerHTML = $aboutContainer['h3Hobb'][index];
	document.querySelector("#captionHobb").innerHTML = $aboutContainer['captionHobb'][index];
	document.querySelector("#liHobb > li:nth-child(1)").innerHTML = $aboutContainer['liTrav'][index];
	document.querySelector("#liHobb > li:nth-child(2)").innerHTML = $aboutContainer['liBooks'][index];
	document.querySelector("#liHobb > li:nth-child(3)").innerHTML = $aboutContainer['liMus'][index];
	document.querySelector("#pFoot").innerHTML = $aboutContainer['pFoot'][index];
	document.querySelector("#liFoot > li:nth-child(1) > a").innerHTML = $aboutContainer['liDesFoot'][index];
	document.querySelector("#liFoot > li:nth-child(2) > a").innerHTML = $aboutContainer['liTradFoot'][index];
}


})();