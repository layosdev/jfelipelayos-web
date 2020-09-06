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

ScrollReveal().reveal('.header__title', { delay: 500 }, { reset: true });
ScrollReveal().reveal('.header__subtitle', { delay: 1000 }, { reset: true });
ScrollReveal().reveal('.header__btn', { delay: 700 }, { reset: true });
ScrollReveal().reveal('.about__subtitle', { delay: 300 }, { reset: true });
ScrollReveal().reveal('.knowledge__card', { delay: 300 }, { reset: true });
ScrollReveal().reveal('.portfolio__subtitle', { delay: 300 }, { reset: true });


goTop();
seeProjects();
