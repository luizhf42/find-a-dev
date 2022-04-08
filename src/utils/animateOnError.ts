import anime from "animejs/lib/anime.es.js";

export const animateOnError = () => {
	anime({
		targets: "form",
		easing: "easeInOutSine",
		duration: 550,
		translateX: [
			{
				value: -16,
			},
			{
				value: 16,
			},
			{
				value: -8,
			},
			{
				value: 8,
			},
			{
				value: 0,
			},
		],
	});
};
