!function(t,e){!function t(n,i,a){var o=n.Worker&&n.Blob&&n.OffscreenCanvas&&n.Promise&&n.URL&&!!n.URL.createObjectURL;function r(){}function s(t){var i=e.exports.Promise,a=void 0!==i?i:n.Promise;return"function"==typeof a?new a(t):(t(r,r),null)}var l,c,h,u,f,d=(h=Math.floor(1e3/60),u={},f=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(l=function(t){var e=Math.random();return u[e]=requestAnimationFrame(function n(i){f===i||f+h-1<i?(f=i,delete u[e],t()):u[e]=requestAnimationFrame(n)}),e},c=function(t){u[t]&&cancelAnimationFrame(u[t])}):(l=function(t){return setTimeout(t,h)},c=function(t){return clearTimeout(t)}),{frame:l,cancel:c}),m=function(){var e,n={};return function(){if(e)return e;if(!i&&o){var a=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      postMessage({ callback: msg.data.callback });","    });","  } else if (msg.data.reset) {","    CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");(function(t){t.init=function(e){var n=e.transferControlToOffscreen();t.postMessage({canvas:n},[n])},t.fire=function(e,i,a){var o=Math.random().toString(36).slice(2);return s(function(i){function r(e){e.data.callback===o&&(delete n[o],t.removeEventListener("message",r),a(),i())}t.addEventListener("message",r),t.postMessage({options:e||{},callback:o}),n[o]=r.bind(null,{data:{callback:o}})})},t.reset=function(){for(var e in t.postMessage({reset:!0}),n)n[e](),delete n[e]}})(e=new Worker(URL.createObjectURL(new Blob([a]))))}return e}}(),g={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"]};function b(t,e,n){return function(t,e){return e?e(t):t}(t&&null!=t[e]?t[e]:g[e],n)}function v(t){return parseInt(t,16)}function p(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function M(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function w(t,e,n,o,r){var l,c,h=e.slice(),u=t.getContext("2d"),f=s(function(e){function s(){l=c=null,u.clearRect(0,0,o.width,o.height),r(),e()}l=d.frame(function e(){!i||o.width===a.width&&o.height===a.height||(o.width=t.width=a.width,o.height=t.height=a.height),o.width||o.height||(n(t),o.width=t.width,o.height=t.height),u.clearRect(0,0,o.width,o.height),(h=h.filter(function(t){return function(t,e){e.x+=Math.cos(e.angle2D)*e.velocity,e.y+=Math.sin(e.angle2D)*e.velocity+3,e.wobble+=.1,e.velocity*=e.decay,e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+5,e.wobbleX=e.x+10*Math.cos(e.wobble),e.wobbleY=e.y+10*Math.sin(e.wobble);var n=e.tick++/e.totalTicks,i=e.x+e.random*e.tiltCos,a=e.y+e.random*e.tiltSin,o=e.wobbleX+e.random*e.tiltCos,r=e.wobbleY+e.random*e.tiltSin;return t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-n)+")",t.beginPath(),"circle"===e.shape?t.ellipse?t.ellipse(e.x,e.y,.6*Math.abs(o-i),.6*Math.abs(r-a),Math.PI/10*e.wobble,0,2*Math.PI):function(t,e,n,i,a,o,r,s,l){t.save(),t.translate(e,n),t.rotate(o),t.scale(i,a),t.arc(0,0,1,r,s,l),t.restore()}(t,e.x,e.y,.6*Math.abs(o-i),.6*Math.abs(r-a),Math.PI/10*e.wobble,0,2*Math.PI):(t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(a)),t.lineTo(Math.floor(o),Math.floor(r)),t.lineTo(Math.floor(i),Math.floor(e.wobbleY))),t.closePath(),t.fill(),e.tick<e.totalTicks}(u,t)})).length?l=d.frame(e):s()}),c=s});return{addFettis:function(t){return h=h.concat(t),f},canvas:t,promise:f,reset:function(){l&&d.cancel(l),c&&c()}}}function y(t,e){var i,a=!t,r=!!b(e||{},"resize"),s=o&&!!b(e||{},"useWorker")?m():null,l=a?p:M,c=!1;function h(e,n,a){for(var o,r,s,c,h,u,f,d=b(e,"particleCount",Math.floor),m=b(e,"angle",Number),g=b(e,"spread",Number),p=b(e,"startVelocity",Number),M=b(e,"decay",Number),y=b(e,"colors"),x=b(e,"ticks",Number),I=b(e,"shapes"),k=function(t){var e=b(t,"origin",Object);return e.x=b(e,"x",Number),e.y=b(e,"y",Number),e}(e),E=d,T=[],C=t.width*k.x,S=t.height*k.y;E--;)T.push((o={x:C,y:S,angle:m,spread:g,startVelocity:p,color:y[E%y.length],shape:I[(u=0,f=I.length,Math.floor(Math.random()*(f-u))+u)],ticks:x,decay:M},r=void 0,s=void 0,c=void 0,h=void 0,c=o.angle*(Math.PI/180),h=o.spread*(Math.PI/180),{x:o.x,y:o.y,wobble:10*Math.random(),velocity:.5*o.startVelocity+Math.random()*o.startVelocity,angle2D:-c+(.5*h-Math.random()*h),tiltAngle:Math.random()*Math.PI,color:(r=o.color,s=String(r).replace(/[^0-9a-f]/gi,""),s.length<6&&(s=s[0]+s[0]+s[1]+s[1]+s[2]+s[2]),{r:v(s.substring(0,2)),g:v(s.substring(2,4)),b:v(s.substring(4,6))}),shape:o.shape,tick:0,totalTicks:o.ticks,decay:o.decay,random:Math.random()+5,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0}));return i?i.addFettis(T):(i=w(t,T,l,n,a)).promise}function u(e){var o=b(e,"zIndex",Number);a&&i?t=i.canvas:a&&!t&&(t=function(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}(o),document.body.appendChild(t)),r&&!c&&l(t);var u={width:t.width,height:t.height};function f(){if(s){var t={};return l(t),void s.postMessage({resize:t})}u.width=u.height=null}function d(){i=null,r&&n.removeEventListener("resize",f),a&&t&&(document.body.removeChild(t),t=null,c=!1)}return s&&!c&&s.init(t),c=!0,r&&n.addEventListener("resize",f,!1),s?s.fire(e,u,d):h(e,u,d)}return u.reset=function(){s&&s.reset(),i&&i.reset()},u}e.exports=y(null,{useWorker:!0,resize:!0}),e.exports.create=y}(function(){return void 0!==t?t:"undefined"!=typeof self?self:this}(),!1),t.confetti=e.exports}(window,{});

// add a class to the body for the sake of styling maybe
document.body.classList.add("js");

let logger = [];
let lastKeyTime = Date.now();

function konamiCode(e) {
    const key = e.key.toLowerCase();

    if (Date.now() - lastKeyTime > 1000) {
        logger = [];
    }

    logger.push(key);
    lastKeyTime = Date.now();

    if (
        logger.join("") ===
        "arrowuparrowuparrowdownarrowdownarrowleftarrowrightarrowleftarrowrightbaenter"
    ) {
        var duration = 15 * 1000;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        var interval = setInterval(function() {
            var timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            var particleCount = 50 * (timeLeft / duration);
            // since particles fall down, start a bit higher than random
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
        document.removeEventListener("keydown", konamiCode);
    }
}

document.addEventListener("keydown", konamiCode);