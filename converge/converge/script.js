
// loading
$(document).ready(function() {
  $('#fullpage').fullpage({
    loopBottom: true,
    anchors:['converge', 'intro', 'venue', 'register'],
    scrollBar: true,
    afterRender: function() {
      window.sr = ScrollReveal();
      sr.reveal('.two .content');
      sr.reveal('.topic');
      sr.reveal('.image-mobile');
      sr.reveal('.four .content');
      sr.reveal('.register');

      setTimeout(function() {
        moveBackground();
        setInterval(updateGradient, 0.3);
        background_three();
        $('#loading_container').css('opacity', 0);
    
        setTimeout(function() {
          $('#loading_container').css('display', 'none');
          $('#fullpage').css('display', 'block');
      
          setTimeout(function() {
            $('#fullpage').css('opacity', 1);
          }, 700);
      
        }, 500);
      }, 1500);
    }
  });
});

var lFollowX = 0,
// lFollowY = 0,
x = 0,
// y = 0,
friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  // y += (lFollowY - y) * friction;

  // translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
  translate = 'translate(' + x + 'px) scaleX(1.1)';

  $('.bg').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

var colors = new Array(
  [32, 56, 100],
  [237, 125, 50],
  [17, 57, 132],
  [255, 116, 3],
  [43, 55, 77],
  [32, 56, 100]
);

var step = 0;
// color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient() {
  if ( $===undefined ) return;

  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];

  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb("+r1+","+g1+","+b1+")";

  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb("+r2+","+g2+","+b2+")";

  $('#gradient')
    .css({
      background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"
    })
    .css({
      background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"
    });
    
    step += gradientSpeed;

    if (step >= 1) {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];
      
      //pick two new target color indices
      //do not pick the same as the current one
      colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    }
}

function background_three() {
  var canvas = document.getElementById("three_background");
  var ctx = canvas.getContext("2d");
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;

  class shape {
    constructor(x, y, xs, ys, xv, yv) {
      this.x = x;
      this.y = x; // square
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
  }

  var shapes = [];
  for (i=0; i<10; i++) {
    shapes.push(new shape(canvas.width*(Math.random()*0.8+0.1), canvas.height*(Math.random()*0.8+0.1), 100 + 20*Math.random(), 100 + 20*Math.random(), 0.2 + 2*(Math.random()-0.5), 0.2 + 2*(Math.random()-0.5)))
  }
  setInterval(function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (i=0; i<shapes.length; i++) {
      shapes[i].update();
      ctx.beginPath();
      ctx.fillStyle = "#e5e5e5";
      ctx.fillRect(shapes[i].x, shapes[i].y, shapes[i].xs, shapes[i].ys);
    }
  });
}

$(window).on('mousemove', function(e) {
  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  // var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  // lFollowY = (10 * lMouseY) / 100;
});

function moveDown() {
  $.fn.fullpage.moveSectionDown();
}
