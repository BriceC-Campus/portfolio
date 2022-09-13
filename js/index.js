// -- variables
// const
const orientationv = window.matchMedia("(orientation: portrait)");
const primary = "#fffff0";
const cSelected = "#51FDAD";

// let
let scrollv = 0;
// -- functions
function isNegative(num) {
	if (typeof num === "number" && Math.sign(num) === -1) {
		return true;
	}

	return false;
}
// Gerer le scroll vertical en portrait et horizontal en paysage
onwheel = (e) => {
	const sections = document.getElementsByTagName("section").length;
	const wSectionsSize = document.body.scrollWidth / sections;
	const hSectionsSize = document.body.scrollHeight / sections;
	if (orientationv.matches) {
		/* for basic scroll
		scrollv = e.deltaY + window.scrollX;
		*/
		if (scrollv <= 0) {
			if (isNegative(e.deltaY)) {
				scrollv = 0;
			} else {
				scrollv += hSectionsSize;
			}
		} else if (scrollv <= document.body.scrollHeight) {
			if (isNegative(e.deltaY)) {
				scrollv -= hSectionsSize;
			} else {
				if (scrollv >= document.body.scrollHeight - hSectionsSize) {
				} else {
					scrollv += hSectionsSize;
				}
			}
		}
		window.scroll(0, scrollv);
	} else {
		/* for basic scroll
		scrollv = e.deltaY + window.scrollX;
		*/
		if (scrollv <= 0) {
			if (isNegative(e.deltaY)) {
				scrollv = 0;
			} else {
				scrollv = wSectionsSize;
			}
		} else if (scrollv <= document.body.scrollWidth) {
			if (isNegative(e.deltaY)) {
				scrollv -= wSectionsSize;
			} else {
				if (scrollv >= document.body.scrollWidth - wSectionsSize) {
				} else {
					scrollv += wSectionsSize;
				}
			}
		}
		window.scroll(scrollv, 0);
	}
};

window.onscroll = (e) => {
	// -- variables
	// const
	const navI1 = document.getElementById("navI1");
	const navI2 = document.getElementById("navI2");
	const navI3 = document.getElementById("navI3");
	const navI4 = document.getElementById("navI4");
	const navI5 = document.getElementById("navI5");
	const navI6 = document.getElementById("navI6");
	// let
	let hActiveV = window.scrollY / window.innerHeight;
	let wActiveV = window.scrollX / window.innerWidth;
	let arrayNavI = [navI1, navI2, navI3, navI4, navI5, navI6];
	// console.log(wActiveV);
	if (orientationv.matches) {
		for (let i = 0; i < arrayNavI.length; i++) {
			// console.log(Math.round(hActiveV));
			if (Math.round(hActiveV) == i) {
				arrayNavI[i].style.color = cSelected;
				console.log(cSelected);
			} else {
				arrayNavI[i].style.color = primary;
			}
		}
	} else {
		for (let i = 0; i < arrayNavI.length; i++) {
			// console.log(Math.round(wActiveV));
			if (Math.round(wActiveV) == i) {
				arrayNavI[i].style.color = cSelected;
			} else {
				arrayNavI[i].style.color = primary;
			}
		}
	}
};

// Gestion message box formulaire
const btnFormSend = document.querySelector(".btn-form-send");
const closeBtn = document.querySelector(".close-btn");
const msgboxSend = document.querySelector(".msgbox-send");
btnFormSend.onclick = (e) => {
	msgboxSend.style.display = "block";
	document.querySelector(".form1").reset();
};
closeBtn.onclick = (e) => {
	msgboxSend.style.display = "none";
};

// Gestion de slider section INFO
// -- slides
const sSlider1 = document.getElementsByClassName("carousel-item");

let slideI = 0;
function automatic_slide() {
	for (i = 0; i < sSlider1.length; i++) {
		sSlider1[i].className = "carousel-item";
	}
	slideI++;
	if(slideI > sSlider1.length){
		slideI = 1;
	}
	sSlider1[slideI-1].className = "carousel-item active";
	setTimeout(automatic_slide, 3000);
}
automatic_slide();

