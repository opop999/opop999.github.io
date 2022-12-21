window.onload = function() {
	Particles.init({
		selector: ".background",
		maxParticles: 400,
		connectParticles: true,
		color: "#96C5F7",
		responsive: [{
			breakpoint: 1200,
			options: {
				maxParticles: 250
			}
		}, {
			breakpoint: 992,
			options: {
				maxParticles: 150
			}
		}, {
			breakpoint: 768,
			options: {
				maxParticles: 100
			}
		}, {
			breakpoint: 576,
			options: {
				maxParticles: 0
			}
		}]
	})
};