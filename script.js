/*  GO TOP BUTTON */
function goTop(){
	window.addEventListener('scroll', () => {
			var scroll = document.documentElement.scrollTop;
			var goTopBtn = document.getElementById('gotop__btn');
			if (scroll > 450) {
				goTopBtn.style.right = 30 + 'px';
			}
			else{
				goTopBtn.style.right = -100 + 'px';
			}

			goTopBtn.addEventListener('click', () => {
				document.documentElement.scrollTop = 0;
			});

			
	});
}

function seeProjects(){
	var seeProjectsBtn = document.getElementById('seeProjects__btn');
	seeProjectsBtn.addEventListener('click', () => {
		document.documentElement.scrollTop = 1900;
	});
}

goTop();
seeProjects();
