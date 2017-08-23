function load_background() {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.canvas.width = document.getElementById("competition").offsetWidth;
	ctx.canvas.height = document.getElementById("competition").offsetHeight;

	class shape {
		constructor(x, y, xs, ys, xv, yv) {
			this.x = x;
			this.y = y;
			this.xv = xv;
			this.yv = yv;
			this.xs = xs;
			this.ys = ys;
		}

		update() {
			this.x += this.xv;
			this.y += this.yv;

			if (this.x + this.xs > canvas.width || this.x < 0) {
				this.xv *= -1;
			}
			if (this.y + this.ys > canvas.height || this.y < 0) {
				this.yv *= -1;
			}
		}
	};

	var shapes = [];
	for (i=0; i<10; i++) {
		shapes.push(new shape(canvas.width*(Math.random()*0.8+0.1), canvas.height*(Math.random()*0.8+0.1), 100 + 20*Math.random(), 100 + 20*Math.random(), (Math.random()-0.5), (Math.random()-0.5)))
	}

	setInterval(function() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		for (i=0; i<shapes.length; i++) {
			shapes[i].update();
			ctx.beginPath();
			ctx.fillStyle = "#e8e8e8";
			ctx.fillRect(shapes[i].x, shapes[i].y, shapes[i].xs, shapes[i].ys);
		}
	});
}

setTimeout(function() {
	document.getElementById("loading_container").style.opacity = "0";
	setTimeout(function() {

		document.getElementById("loading_container").style.display = "none";
		document.getElementById("container").style.display = "block";

		setTimeout(function() {
			document.getElementById("container").style.opacity = "1";

			load_background();

		}, 700);

	}, 500);
}, 2000);