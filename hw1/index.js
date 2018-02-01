//Taylor Jones
//Taylor Jones

function buttonAction(image_name){
	var img = document.getElementById(image_name);
	if(img.style.display === 'block'){
		img.style.display = 'none';
	}
	else{
		img.style.display = 'block';
	}
}
