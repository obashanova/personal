// src/scripts/backgroundColor.js
document.addEventListener("DOMContentLoaded", () => {
	const [red, green, blue] = [245, 245, 245];
	const section1 = document.querySelector(".section1");
	const computedStyle = window.getComputedStyle(section1);
	console.log(computedStyle);
	section1.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

	window.addEventListener("scroll", () => {
		const y = 1 + (window.scrollY || window.pageYOffset) / 1500;
		const [r, g, b] = [red / y, green / y, blue / y].map(Math.round);
		console.log(r, g, b);
		section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
	});
});
