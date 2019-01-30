alert('Hi');

var link = document.querySelectorAll('#list');



for(var i = 0; i < link.length; i++){
	// Add color to square
	link[i].addEventListener('mouseover', function(){
		this.style.color = 'white';
	})
	link[i].addEventListener('mouseout', function(){
		this.style.color = 'black';
	})
	link[i].addEventListener('click', function(){
		this.style.color = 'white';
	})
}


