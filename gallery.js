

function upDate(previewPic){
 
  document.getElementById("image").innerHTML=previewPic.alt;
  document.getElementById("image").setAttribute("style", "background-image: url("+previewPic.src+")")
  document.getElementById("image").style.backgroundColor="yellow";
  
	}

function unDo(){
    
	document.getElementById("image").innerHTML= "Hover over an image below to display here.";
  document.getElementById("image").setAttribute("style", "background-image:url(' ')");
  document.getElementById("image").style.backgroundColor="#8e68ff";
	}