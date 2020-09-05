/*  GO TOP BUTTON */
function goTop(){
	window.addEventListener('scroll', () => {
			var scroll = document.documentElement.scrollTop;
			var goTopBtn = document.getElementById('gotop__btn');

			if (scroll > 450) {
				goTopBtn.style.right = 35 + 'px';
			}
			else{
				goTopBtn.style.right = -100 + 'px';
			}

			goTopBtn.addEventListener('click', () => {
				document.documentElement.scrollTop = 0;
			});
	});
}

goTop();
