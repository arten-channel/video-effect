let level = 0;

function preload() {
	sound = loadSound('audio/SANTANA.mp3');
}
function setup() {
	cnv = createCanvas(window.innerWidth, window.innerHeight);
	amplitude = new p5.Amplitude();
	cnv.mouseClicked(function () {
		$('body').toggleClass('playing');
		if (sound.isPlaying()) {
			sound.stop();
		} else {
			sound.play();
		}
	});
}


function draw() {
	TweenMax.to($('.blade'), 0.25, {
		css: {
			transform: 'scale(' + (2 + (level * 20)) + ') rotate(' + (level * (-400)) + 'deg)'
		},
		ease: Expo.easeOut,
		overwrite: 'all'

	});
	background(0);
	fill(255);
	level = amplitude.getLevel();
	if (level > 0.2) {
		$('#wrap').addClass('spin');
		setTimeout(function () {
			$('#wrap').removeClass('spin');
		}, 1000);
	}
}


