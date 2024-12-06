document.addEventListener("astro:page load", () => {
	const sections = ["#intro", "#about", "#projects", "#contacts"];
	const sectionsHeights = sections.map((section) => {
		const sectionElement = document.querySelector(section);
		return sectionElement.clientHeight;
	});
	sectionsHeights.forEach((height, index) => {
		if (index === 0) {
			return;
		}
		document.querySelector(sections[index + 1]).style.scrollMarginTop =
			height + "px";
	});
});
