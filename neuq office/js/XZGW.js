/*行政公文JS*/
	var arrow1 = document.getElementsByClassName('arrow1')[0];
	var arrow2 = document.getElementsByClassName('arrow2')[0];
	var box = document.getElementById('box');

	var canClick = true;
	arrow2.onclick = function(){
		if (canClick) {
			if (parseInt(box.style.left) > -600) {
				canClick = false;
				arrow1.style.display = 'block';
				var lastLeft = parseInt(box.style.left);
				var timer = setInterval(function(){
					if (parseInt(box.style.left) > lastLeft -390) {
						box.style.left = parseInt(box.style.left) - 39 + 'px'; 
					} else {
						clearInterval(timer);
						canClick = true;
					} 			
				},25); 
			}
			if (parseInt(box.style.left) < -200) {
				this.style.display = 'none';
			}
		}
	}
	arrow1.onclick = function(){
		if (canClick) {
			if (parseInt(box.style.left) < -100) {
				canClick = false;
				arrow2.style.display = 'block';
				var lastLeft = parseInt(box.style.left);
				var timer = setInterval(function(){
					if (parseInt(box.style.left) < lastLeft + 390) {
						box.style.left = parseInt(box.style.left) + 39 + 'px'; 
					} else {
						clearInterval(timer);
						canClick = true;
					} 			
				},25); 
			}
			if (parseInt(box.style.left) > -400) {
				this.style.display = 'none';
			}
		}
	}