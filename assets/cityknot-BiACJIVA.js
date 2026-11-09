import"./track-BN-_I3d_.js";import"./pages-DiF1rrI-.js";import"./animations-NIFsOUne.js";const te=Math.PI*2,B=(e,r,n)=>Math.max(r,Math.min(n,e)),J=(e,r,n)=>e+(r-e)*n,$=(e,r,n)=>{const o=B((n-e)/(r-e||1e-9),0,1);return o*o*(3-2*o)},_e=(e,r)=>1-Math.pow(1-B(e,0,1),r),ue=e=>(e=B(e,0,1),e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2),Re=()=>[0,0,0,1];function X(e,r,n,o){const t=Math.hypot(e,r,n)||1,i=Math.sin(o/2)/t;return[e*i,r*i,n*i,Math.cos(o/2)]}function z(e,r){const[n,o,t,i]=e,[c,x,v,u]=r;return[i*c+n*u+o*v-t*x,i*x-n*v+o*u+t*c,i*v+n*x-o*c+t*u,i*u-n*c-o*x-t*v]}function q(e){const r=Math.hypot(e[0],e[1],e[2],e[3])||1;return[e[0]/r,e[1]/r,e[2]/r,e[3]/r]}const Ae=(e,r)=>e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3];function re(e,r){return 2*Math.acos(B(Math.abs(Ae(e,r)),0,1))}function le(e,r,n){let o=Ae(e,r),t=r;if(o<0&&(o=-o,t=[-r[0],-r[1],-r[2],-r[3]]),o>.9995)return q([J(e[0],t[0],n),J(e[1],t[1],n),J(e[2],t[2],n),J(e[3],t[3],n)]);const i=Math.acos(o),c=Math.sin(i),x=Math.sin((1-n)*i)/c,v=Math.sin(n*i)/c;return[e[0]*x+t[0]*v,e[1]*x+t[1]*v,e[2]*x+t[2]*v,e[3]*x+t[3]*v]}function Me(e){const[r,n,o,t]=e,i=r*r,c=n*n,x=o*o,v=r*n,u=r*o,y=n*o,A=t*r,w=t*n,d=t*o;return new Float32Array([1-2*(c+x),2*(v+d),2*(u-w),2*(v-d),1-2*(i+x),2*(y+A),2*(u+w),2*(y-A),1-2*(i+c)])}function Fe(e,r,n,o,t=0,i=0){const c=1/Math.tan(e/2),x=1/(n-o);return new Float32Array([c/r,0,0,0,0,c,0,0,-t,-i,(o+n)*x,-1,0,0,2*o*n*x,0])}function Se(e,r,n){const o=new Float32Array([r[0],r[1],r[2],0,r[3],r[4],r[5],0,r[6],r[7],r[8],0,0,0,-n,1]),t=new Float32Array(16);for(let i=0;i<4;i++)for(let c=0;c<4;c++){let x=0;for(let v=0;v<4;v++)x+=e[v*4+c]*o[i*4+v];t[i*4+c]=x}return t}const Pe={introBlank:.15,replayBlank:.65,islandAt:.1,islandDur:1.9,knotAt:.2,knotDur:2.3,settleDur:3.5,cloudsAt:3.3,cloudsDur:1.6,taper:.085,inertiaTau:.8,idleWait:6,returnTau:2.4,returnMinSpeed:.03,swayIn:2,dragRadPerRadius:1.15,maxSpin:9},V=Re(),fe=q(z(X(.35,.85,.3,2.3),X(1,0,0,-.6)));function Le(e={}){const r={...Pe,...e},n={q:V.slice(),reveal:1,grow:{center:.5,half:.5+r.taper,taper:r.taper,active:!1},clouds:1,time:0,dragging:!1,introT:1/0,base:V.slice(),spin:[0,0,0],idleFor:0,returning:!1,returnT:0,paused:!1,reduced:!1,swayK:0,last:null,growCenter:.5};function o(m=r.introBlank){n.introT=-Math.max(0,m),n.base=fe.slice(),n.spin=[0,0,0],n.returning=!1,n.idleFor=0,n.dragging=!1,t()}function t(){const m=n.introT;if(!Number.isFinite(m))return;n.reveal=ue(B((m-r.islandAt)/r.islandDur,0,1));const E=B((m-r.knotAt)/r.knotDur,0,1),P=ue(E)*(.5+r.taper);n.grow={center:n.growCenter,half:P,taper:r.taper,active:E<1},n.clouds=$(r.cloudsAt,r.cloudsAt+r.cloudsDur,m);const R=B((m-r.knotAt)/(r.knotDur+r.settleDur),0,1);n.base=le(fe,V,_e(R,3)),m>=r.knotAt+r.knotDur+r.settleDur&&(n.introT=1/0,n.base=V.slice(),n.grow.active=!1)}function i(){n.introT=1/0,n.reveal=1,n.grow={center:n.growCenter,half:.5+r.taper,taper:r.taper,active:!1},n.clouds=1,n.base=V.slice()}function c(m,E=1){const P=.062*Math.sin(te*m/31+.3)+.02*Math.sin(te*m/13+1.1),R=.04*Math.sin(te*m/47+1.9);return z(X(0,1,0,P*E),X(1,0,0,R*E))}function x(m,E,P){const R=r.dragRadPerRadius/Math.max(P,1),k=z(X(0,1,0,m*R),X(1,0,0,E*R));return n.base=q(z(k,n.base)),[E*R,m*R]}function v(){n.spin=[0,0,0],n.returning=!1,n.idleFor=0}function u(){n.dragging=!0,n.returning=!1,n.idleFor=0,n.spin=[0,0,0],n.last=null,Number.isFinite(n.introT)&&i()}function y(m,E,P,R){if(!n.dragging)return;const[k,N]=x(m,E,P),I=Math.max(R,1/240),s=1-Math.exp(-I/.06);n.spin[0]=J(n.spin[0],k/I,s),n.spin[1]=J(n.spin[1],N/I,s),n.idleFor=0}function A(m){n.dragging=!1,n.idleFor=0,(m>.09||n.reduced)&&(n.spin=[0,0,0]);const E=Math.hypot(n.spin[0],n.spin[1]);E>r.maxSpin&&(n.spin[0]*=r.maxSpin/E,n.spin[1]*=r.maxSpin/E)}function w(){n.dragging=!1,n.idleFor=0,n.spin=[0,0,0]}function d(m){if(m=B(m,0,.1),n.paused&&(m=0),n.reduced||(n.time+=m),Number.isFinite(n.introT)&&(n.introT+=m,t()),!n.dragging&&!n.reduced&&m>0){const P=Math.hypot(n.spin[0],n.spin[1]);if(P>.02){n.base=q(z(z(X(0,1,0,n.spin[1]*m),X(1,0,0,n.spin[0]*m)),n.base));const R=Math.exp(-m/r.inertiaTau);n.spin[0]*=R,n.spin[1]*=R}else n.spin=[0,0,0];if(Number.isFinite(n.introT)||(n.idleFor+=m,!n.returning&&n.idleFor>r.idleWait&&P<.05&&re(n.base,V)>.01&&(n.returning=!0,n.returnT=0)),n.returning){n.returnT+=m;const R=$(0,.25,n.returnT),k=re(n.base,V),N=Math.max(k*(1-Math.exp(-m*R/r.returnTau)),r.returnMinSpeed*m*R);n.base=k>1e-6?le(n.base,V,Math.min(1,N/k)):n.base,re(n.base,V)<.002&&(n.base=V.slice(),n.returning=!1)}}n.reduced||Number.isFinite(n.introT)?n.swayK=0:n.swayK=Math.min(1,n.swayK+m/r.swayIn);const E=$(0,1,n.swayK);return n.q=E>0?q(z(c(n.time,E),n.base)):n.base.slice(),n}function g(m,E){Number.isFinite(n.introT)&&i(),n.base=q(z(z(X(0,1,0,m),X(1,0,0,E)),n.base)),n.spin=[0,0,0],n.idleFor=0,n.returning=!1}function M(m){n.paused=!!m}function U(m){n.reduced=!!m,n.spin=[0,0,0],m&&(i(),n.returning=!1,n.swayK=0)}function F(){return n.q=q(z(c(n.time,$(0,1,n.swayK)),n.base)),n}return{state:n,play:o,update:d,hold:v,dragStart:u,dragMove:y,dragEnd:A,dragCancel:w,nudge:g,setPaused:M,setReduced:U,finishIntro:i,snapshot:F,timing:r}}const Y={aspect:4096/3072,visibleW:.826,visibleH:.843,cx:.4952,cy:.5058},ae=Y.visibleH/(Y.visibleW*Y.aspect),Ue=46,Ie=[162/574,394/422,280/578,138/602,252/454,236/586],de=(e,r,n)=>Math.min(Math.max(e,r),n);function De(e,r){const n=e/r<1.45;let o,t,i;if(n){const u=Math.min(Ue,r*.11),y=Math.max(12,r*.03),A=Math.max(14,r*.018),w=Math.max(60,r-u-y-A),d=.66,g=Math.min(e*.9,w/(ae+d)),M=g*ae,U=g*d,F=u+(w-M-U)/2;o={cx:e/2,cy:F+M/2,visW:g,visH:M},t={cx:e/2,cy:F+M+A+U/2,radius:U/2};const m=Math.max(0,e/2-t.radius);i=[{cell:3,x:m/2,y:t.cy+.55*t.radius,w:.2,drift:Math.min(8,m*.12),period:47,phase:3.1},{cell:4,x:e-m/2,y:t.cy-.45*t.radius,w:.19,drift:Math.min(8,m*.12),period:61,phase:1.7}]}else{const u=Math.min(e*.96,r*2.25),y=u/100,A=(e-u)/2,w=52*y,d=41*y,g=r*.5;o={cx:A+w/2,cy:g,visW:w,visH:w*ae},t={cx:A+59*y+d/2,cy:g-r*.01,radius:d/2};const M=(o.cx+o.visW/2+t.cx-t.radius)/2;i=[{cell:0,x:o.cx-.27*o.visW,y:o.cy-.5*o.visH-.005*r,w:.15,drift:12,period:53,phase:.2},{cell:4,x:M,y:o.cy-.3*o.visH,w:.19,drift:9,period:61,phase:1.7},{cell:3,x:t.cx-.42*o.visW,y:t.cy+.62*t.radius,w:.2,drift:10,period:47,phase:3.1},{cell:5,x:t.cx+.6*t.radius,y:t.cy+1.03*t.radius,w:.14,drift:8,period:67,phase:4.4}]}const c=o.visW/Y.visibleW,x=c/Y.aspect;o.rect=[o.cx-Y.cx*c,o.cy-Y.cy*x,c,x];const v=i.map(u=>{const y=u.w*o.visW,A=y*Ie[u.cell],w=y/2+u.drift+4,d=A/2+2.5+1;return{...u,cx:de(u.x,w,Math.max(w,e-w)),cy:de(u.y,d,Math.max(d,r-d)),cw:y}});return{w:e,h:r,stacked:n,island:o,knot:t,clouds:v}}function pe(e,r,n){const o=e.knot;return Math.hypot(r-o.cx,n-o.cy)<=o.radius*1.04}function he(e,r,n,o){const t=e.createShader(r);if(e.shaderSource(t,n),e.compileShader(t),!e.getShaderParameter(t,e.COMPILE_STATUS)){const i=e.getShaderInfoLog(t);throw e.deleteShader(t),new Error(`cityknot: ${o} shader failed to compile:
${i}`)}return t}function H(e,r,n,o){const t=e.createProgram(),i=he(e,e.VERTEX_SHADER,r,o+" vertex"),c=he(e,e.FRAGMENT_SHADER,n,o+" fragment");if(e.attachShader(t,i),e.attachShader(t,c),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw new Error(`cityknot: ${o} program failed to link:
${e.getProgramInfoLog(t)}`);e.deleteShader(i),e.deleteShader(c);const x={},v=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<v;u++){const y=e.getActiveUniform(t,u);x[y.name.replace(/\[0\]$/,"")]=e.getUniformLocation(t,y.name)}return{prog:t,u:x}}function j(e,r,{repeat:n=!1,aniso:o=0}={}){const t=e.createTexture();e.bindTexture(e.TEXTURE_2D,t),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,e.RGBA,e.UNSIGNED_BYTE,r),e.generateMipmap(e.TEXTURE_2D),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR);const i=n?e.REPEAT:e.CLAMP_TO_EDGE;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);const c=e.getExtension("EXT_texture_filter_anisotropic");return c&&o>1&&e.texParameterf(e.TEXTURE_2D,c.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(o,e.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT))),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),{tex:t,width:r.width,height:r.height}}function Q(e,r,n,o){const t=e.createTexture();e.bindTexture(e.TEXTURE_2D,t),o?e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,r,n,0,e.RGBA,e.HALF_FLOAT,null):e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,r,n,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);const i=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,i),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0);const c=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindFramebuffer(e.FRAMEBUFFER,null),{tex:t,fbo:i,w:r,h:n,ok:c}}function me(e,r){r&&(e.deleteFramebuffer(r.fbo),e.deleteTexture(r.tex))}function Z(e){return new Promise((r,n)=>{const o=new Image;o.decoding="async",o.onload=()=>r(o),o.onerror=()=>n(new Error("cityknot: could not load "+e)),o.src=e})}const O=`#version 300 es
precision highp float;
precision highp sampler2D;
`,ve=O+`
layout(location=0) in vec3 aPos;
layout(location=1) in vec3 aCenter;
layout(location=2) in vec3 aNrm;
layout(location=3) in vec2 aUv;
layout(location=4) in float aS;
uniform mat4 uMVP;
uniform mat3 uRot;
// x: centre of the visible stretch (0..1 along the loop), y: its half length, z: taper length,
// w: 1 while the knot is still growing, 0 once it is a closed loop.
uniform vec4 uGrow;
out vec2 vUv;
out vec3 vN;
out float vZ;
void main() {
  float f = 1.0;
  if (uGrow.w > 0.5) {
    float ds = aS - uGrow.x;
    ds -= floor(ds + 0.5);                     // wrap around the closed loop
    float inside = uGrow.y - abs(ds);
    f = inside <= 0.0 ? 0.0 : smoothstep(0.0, max(uGrow.z, 1e-4), inside);
  }
  vec3 p = aCenter + (aPos - aCenter) * f;     // shrink towards the centre line: pointed ends
  gl_Position = uMVP * vec4(p, 1.0);
  vUv = aUv;
  vN = uRot * aNrm;
  vZ = (uRot * p).z;
}`,ke=O+`
in vec2 vUv;
in vec3 vN;
in float vZ;
uniform sampler2D uTex;
uniform vec3 uLight;          // direction towards the light, view space
uniform vec3 uPaper;
uniform vec2 uInk;            // edge darkening at v = 0 and v = 1 of this face
uniform vec2 uDepth;          // view-space z range of the knot (far, near)
uniform float uHardCut;       // 1 when the canvas has no multisampling: use a plain alpha test
out vec4 outColor;
void main() {
  vec4 t = texture(uTex, vUv);                 // uploaded premultiplied: mipmaps stay clean
  float a = t.a;
  // Sharpen the cut-out edge at any distance, then let alpha-to-coverage antialias it.
  float aa = clamp((a - 0.5) / max(fwidth(a), 1e-4) + 0.5, 0.0, 1.0);
  if (aa < 0.004 || (uHardCut > 0.5 && aa < 0.5)) discard;
  vec3 base = t.rgb / max(a, 1e-3);
  vec3 n = normalize(vN);
  bool front = gl_FrontFacing;
  if (!front) n = -n;
  float lam = dot(n, uLight);
  float shade = mix(0.72, 1.08, smoothstep(-0.75, 0.9, lam));
  float rim = 1.0 - clamp(abs(n.z), 0.0, 1.0);
  shade *= 1.0 - 0.16 * rim * rim * rim;
  if (!front) {                                // inside of the arcade seen through the arches
    base = mix(base * 0.40, vec3(0.12, 0.27, 0.30), 0.62);
    shade *= 0.92;
  }
  float e0 = 1.0 - smoothstep(0.0, 0.035, vUv.y);
  float e1 = 1.0 - smoothstep(0.0, 0.035, 1.0 - vUv.y);
  base *= 1.0 - 0.36 * (uInk.x * e0 + uInk.y * e1);
  vec3 col = base * shade;
  float depthT = clamp((vZ - uDepth.x) / (uDepth.y - uDepth.x), 0.0, 1.0);
  col = mix(uPaper, col, mix(0.84, 1.0, depthT));   // far strands read a little paler
  outColor = vec4(col, aa);
}`,Ce=O+`
out vec4 outColor;
void main() { outColor = vec4(1.0); }`,ie=O+`
uniform vec4 uRect;
uniform vec2 uView;
out vec2 vUv;
void main() {
  vec2 c = vec2(float(gl_VertexID & 1), float((gl_VertexID >> 1) & 1));
  vec2 px = uRect.xy + c * uRect.zw;
  gl_Position = vec4(px.x / uView.x * 2.0 - 1.0, 1.0 - px.y / uView.y * 2.0, 0.0, 1.0);
  vUv = c;
}`,Ne=`
float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash21(i), hash21(i + vec2(1, 0)), f.x), mix(hash21(i + vec2(0, 1)), hash21(i + vec2(1, 1)), f.x), f.y);
}`,ce=Ne+`
uniform vec2 uTower;
uniform float uReveal;
uniform float uAspect;
float revealMask(vec2 uv) {
  if (uReveal >= 0.999) return 1.0;
  if (uReveal <= 0.0005) return 0.0;
  vec2 d = (uv - uTower) * vec2(uAspect, 1.0);
  float wob = (vnoise(uv * 6.0) - 0.5) * 0.14 + (vnoise(uv * 17.0) - 0.5) * 0.05;
  float R = uReveal * 0.98 + 0.015;
  return 1.0 - smoothstep(R - 0.07, R, length(d) + wob);
}`,Be=O+ce+`
in vec2 vUv;
uniform sampler2D uTex;
uniform float uOpacity;
out vec4 outColor;
void main() {
  vec4 t = texture(uTex, vUv);               // premultiplied
  outColor = t * (revealMask(vUv) * uOpacity);
}`,Oe=O+ce+`
in vec2 vUv;
uniform sampler2D uTex;
out vec4 outColor;
void main() {
  float a = texture(uTex, vUv).a * revealMask(vUv);
  outColor = vec4(a);
}`,Ve=O+`
layout(location=0) in vec4 aPlace;   // x, y (pixels of the island picture), rotation, scale
layout(location=1) in vec4 aCell;    // the sprite's rectangle in the atlas, in pixels
layout(location=2) in vec4 aShape;   // anchor x, y (pixels inside the sprite), opacity, spare
uniform vec4 uRect;                  // the island picture on screen, in CSS pixels (x, y, w, h)
uniform vec2 uView;                  // the canvas size in CSS pixels
uniform vec2 uPicture;               // size of the island picture, the unit aPlace is given in
uniform vec2 uAtlas;                 // size of the atlas
out vec2 vUv;
out vec2 vIsland;
out float vOpacity;
void main() {
  vec2 c = vec2(float(gl_VertexID & 1), float((gl_VertexID >> 1) & 1));
  vec2 local = (c * aCell.zw - aShape.xy) * aPlace.w;
  float cs = cos(aPlace.z);
  float sn = sin(aPlace.z);
  vec2 p = aPlace.xy + vec2(cs * local.x - sn * local.y, sn * local.x + cs * local.y);
  vIsland = p / uPicture;
  vec2 px = uRect.xy + vIsland * uRect.zw;
  gl_Position = vec4(px.x / uView.x * 2.0 - 1.0, 1.0 - px.y / uView.y * 2.0, 0.0, 1.0);
  vUv = (aCell.xy + c * aCell.zw) / uAtlas;
  vOpacity = aShape.z;
}`,ze=O+ce+`
in vec2 vUv;
in vec2 vIsland;
in float vOpacity;
uniform sampler2D uTex;
out vec4 outColor;
void main() {
  outColor = texture(uTex, vUv) * (vOpacity * revealMask(vIsland));   // premultiplied
}`,Xe=O+`
in vec2 vUv;
uniform sampler2D uTex;
uniform vec4 uCell;           // sub-rectangle of the atlas (u0, v0, du, dv)
uniform float uOpacity;
out vec4 outColor;
void main() {
  outColor = texture(uTex, uCell.xy + vUv * uCell.zw) * uOpacity;
}`,xe=O+`
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,Ge=O+`
in vec2 vUv;
uniform sampler2D uTex;
uniform vec2 uStep;           // one texel along the blur direction
uniform float uSigma;
out vec4 outColor;
void main() {
  float s = max(uSigma, 0.4);
  int R = int(ceil(s * 3.0));
  float acc = 0.0;
  float wsum = 0.0;
  for (int i = -60; i <= 60; i++) {
    if (i < -R || i > R) continue;
    float x = float(i);
    float w = exp(-0.5 * x * x / (s * s));
    acc += texture(uTex, vUv + uStep * x).r * w;
    wsum += w;
  }
  outColor = vec4(acc / wsum);
}`,We=O+`
in vec2 vUv;
uniform sampler2D uField;
uniform vec3 uPaper;
uniform vec3 uInk;
uniform float uPx;            // device pixels per CSS pixel
uniform float uLevels;        // contour spacing is 1 / uLevels in field units
uniform float uSpan;          // the knot radius in CSS pixels: the yardstick for "lines too far apart"
uniform float uStrength;
out vec4 outColor;
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

// Cubic B-spline weights for the four texels around a point.
vec4 bsplineWeights(float v) {
  vec4 n = vec4(1.0, 2.0, 3.0, 4.0) - v;
  vec4 s = n * n * n;
  float x = s.x;
  float y = s.y - 4.0 * s.x;
  float z = s.z - 4.0 * s.y + 6.0 * s.x;
  float w = 6.0 - x - y - z;
  return vec4(x, y, z, w) * (1.0 / 6.0);
}

// The field is a coarse map, and plain bilinear sampling bends the lines in straight facets, so a small
// ring turns into a polygon. A cubic B-spline gives round, smooth lines. Four linear taps do the job.
float fieldAt(vec2 uv) {
  vec2 size = vec2(textureSize(uField, 0));
  vec2 p = uv * size - 0.5;
  vec2 f = fract(p);
  p -= f;
  vec4 wx = bsplineWeights(f.x);
  vec4 wy = bsplineWeights(f.y);
  vec4 c = p.xxyy + vec2(-0.5, 1.5).xyxy;
  vec4 s = vec4(wx.xz + wx.yw, wy.xz + wy.yw);
  vec4 o = (c + vec4(wx.yw, wy.yw) / s) / size.xxyy;
  float a = texture(uField, o.xz).r;
  float b = texture(uField, o.yz).r;
  float c2 = texture(uField, o.xw).r;
  float d2 = texture(uField, o.yw).r;
  float sx = s.x / (s.x + s.y);
  float sy = s.z / (s.z + s.w);
  return mix(mix(d2, c2, sx), mix(b, a, sx), sy);
}

void main() {
  float F = fieldAt(vUv);
  float g = F * uLevels;
  float w = max(fwidth(g), 1e-5);
  float d = abs(fract(g + 0.5) - 0.5) / w;               // device pixels to the nearest line
  float hw = max(0.33 * uPx, 0.42);                       // half width of a line: a hairline
  float line = 1.0 - smoothstep(hw - 0.5, hw + 0.5, d);
  float reach = smoothstep(0.02, 0.07, F);                // no lines in the far distance
  float hide = 1.0 - smoothstep(0.58, 0.84, F);           // nor under the artwork
  float fade = 0.28 + 0.72 * smoothstep(0.04, 0.46, F);   // lines get fainter with distance
  float soft = mix(0.72, 1.0, clamp(uPx - 1.0, 0.0, 1.0)); // a 1 px line on a 1x screen reads heavier
  // Where the field is nearly flat the next line is far away. That is where a tiny ring is born in the
  // middle of a hole, and it would read as a speck. Let such lines fade in as they get close together.
  float gap = 1.0 / (w * uPx * max(uSpan, 1.0));          // distance to the next line, in knot radii
  float crowd = 1.0 - smoothstep(0.16, 0.34, gap);
  float tint = smoothstep(0.03, 0.7, F) * 0.05 * hide;
  vec3 col = mix(uPaper, uInk, tint);
  col = mix(col, uInk, 0.17 * line * reach * hide * fade * soft * crowd * uStrength);
  col += (hash(gl_FragCoord.xy) - 0.5) / 255.0;           // dither: no banding in the tint
  outColor = vec4(col, 1.0);
}`,Te={p:2,q:5,R:.6,r:.28,zScale:1.4,width:.295,height:.212,overhang:.12,segments:1800,tileAspect:8},ge=(e,r)=>[e[1]*r[2]-e[2]*r[1],e[2]*r[0]-e[0]*r[2],e[0]*r[1]-e[1]*r[0]],ye=e=>{const r=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/r,e[1]/r,e[2]/r]};function He(e,r=Te){const n=r.p*e,o=r.q*e,t=Math.cos(n),i=Math.sin(n),c=Math.cos(o),x=Math.sin(o),v=r.R+r.r*c,u=[v*t,v*i,r.r*r.zScale*x],y=[-r.p*v*i-r.q*r.r*x*t,r.p*v*t-r.q*r.r*x*i,r.q*r.r*r.zScale*c],A=ye(y),w=ye([c*t,c*i,x/r.zScale]),d=ge(A,w);return{pos:u,T:A,N:w,B:d}}function $e(e){const r=e.width,n=e.height,o=r/(1-e.overhang),t=o-r;return[{name:"deck",e0:[-r/2,n/2],e1:[r/2+t,n/2],nrm:[0,1],extent:o,flipU:!1},{name:"wallA",e0:[r/2,n/2],e1:[r/2,-n/2],nrm:[1,0],extent:n,flipU:!1},{name:"wallB",e0:[-r/2,n/2],e1:[-r/2,-n/2],nrm:[-1,0],extent:n,flipU:!0},{name:"under",e0:[-r/2,-n/2],e1:[r/2,-n/2],nrm:[0,-1],extent:r,flipU:!1}]}function Ke(e={}){const r={...Te,...e},n=r.segments,o=[],t=new Float64Array(n+1);for(let d=0;d<=n;d++){const g=He(te*d/n,r);o.push(g),d&&(t[d]=t[d-1]+Math.hypot(g.pos[0]-o[d-1].pos[0],g.pos[1]-o[d-1].pos[1],g.pos[2]-o[d-1].pos[2]))}const i=t[n],c=$e(r),x=12,v=(n+1)*2,u=new Float32Array(c.length*v*x),y=new Uint16Array(c.length*n*6),A=[];let w=0;return c.forEach((d,g)=>{const M=Math.max(1,Math.round(i/(r.tileAspect*d.extent))),U=g*v;for(let s=0;s<=n;s++){const h=o[s],_=d.flipU?M*(1-t[s]/i):M*t[s]/i;for(let b=0;b<2;b++){const[S,T]=b?d.e1:d.e0,l=(U+s*2+b)*x;for(let a=0;a<3;a++)u[l+a]=h.pos[a]+S*h.B[a]+T*h.N[a],u[l+3+a]=h.pos[a],u[l+6+a]=d.nrm[0]*h.B[a]+d.nrm[1]*h.N[a];u[l+9]=_,u[l+10]=b,u[l+11]=s/n,w=Math.max(w,Math.hypot(u[l],u[l+1],u[l+2]))}}const F=U*x,m=(U+2)*x,E=(U+1)*x,P=[u[m]-u[F],u[m+1]-u[F+1],u[m+2]-u[F+2]],R=[u[E]-u[F],u[E+1]-u[F+1],u[E+2]-u[F+2]],k=ge(P,R),N=k[0]*u[F+6]+k[1]*u[F+7]+k[2]*u[F+8]<0,I=g*n*6;for(let s=0;s<n;s++){const h=U+s*2,_=h+1,b=h+2,S=h+3,T=N?[h,_,b,_,S,b]:[h,b,_,_,b,S];y.set(T,I+s*6)}A.push({name:d.name,first:I,count:n*6,repeat:M})}),{verts:u,indices:y,faces:A,radius:w,length:i,floats:x,params:r}}const ne=12,C={speed:124,dwell:6,margin:100,startAt:.3,emerge:[30,130],enter:[150,25]},G={life:7,puffs:4,rise:40,drift:24,from:.3,to:.72,strength:.9},we=[3,4],qe=e=>e-Math.floor(e);function Ye(e){const r=s=>{const h=e.cells[s];if(!h)throw new Error(`cityknot: the actor atlas has no sprite "${s}"`);return h},n=e.train,o=n.L,t=o/n.n,i={};for(const s of new Set(n.cars))i[s]=Array.from({length:n.head.count},(h,_)=>r(`car.${s}.${_}`));const c=n.cars.map(s=>i[s]),x=(c.length-1)/2,v=(o+2*C.margin)/C.speed,u=2*(v+C.dwell),y=(C.startAt*o+C.margin)/C.speed;function A(s){let h=(y+s)%u;return h<0&&(h+=u),h<v?{s:-100+C.speed*h,dir:1,moving:!0}:(h-=v,h<C.dwell?{s:o+C.margin,dir:-1,moving:!1}:(h-=C.dwell,h<v?{s:o+C.margin-C.speed*h,dir:-1,moving:!0}:{s:-100,dir:1,moving:!1}))}function w(s){const h=B(s,0,o)/t,_=Math.min(Math.floor(h),n.n-1),b=h-_,S=n.path[_],T=n.path[_+1];return[S[0]+(T[0]-S[0])*b,S[1]+(T[1]-S[1])*b,S[2]+(T[2]-S[2])*b]}function d(s){const h=$(C.emerge[0],C.emerge[1],s),_=$(o-C.enter[0],o-C.enter[1],s);return h*(1-_)}const g=e.designs.map((s,h)=>({body:r(`boat.${h}`),shade:r(`shade.${h}`)})),M=e.loops.map(s=>{const h=s.pts.length,_=new Float64Array(h+1);for(let b=0;b<h;b++){const S=s.pts[b],T=s.pts[(b+1)%h];_[b+1]=_[b]+Math.hypot(T[0]-S[0],T[1]-S[1])}return{...s,n:h,cum:_,total:_[h]}});function U(s,h,_){const b=s.total;h-=Math.floor(h/b)*b;let S=0,T=s.n;for(;T-S>1;){const L=S+T>>1;s.cum[L]<=h?S=L:T=L}const l=s.pts[S],a=s.pts[(S+1)%s.n],p=s.cum[S+1]-s.cum[S]||1,f=(h-s.cum[S])/p;return _[0]=l[0]+(a[0]-l[0])*f,_[1]=l[1]+(a[1]-l[1])*f,_}const F=[0,1,2].map(s=>r(`puff.${s}`)),m=c.length+M.reduce((s,h)=>s+2*h.boats.length,0)+e.smoke.length*G.puffs,E=[];M.forEach((s,h)=>s.boats.forEach((_,b)=>E.push({lp:s,li:h,bi:b,u:_.u,design:g[_.d],x:0,y:0,rot:0})));const P=[0,0],R=[0,0],k={x:0,y:0,rot:0,size:0,alpha:0};function N(s,h){let _=0;const b=(T,l,a,p,f,L)=>{const D=_*ne;h[D]=T,h[D+1]=l,h[D+2]=a,h[D+3]=p,h[D+4]=f[0],h[D+5]=f[1],h[D+6]=f[2],h[D+7]=f[3],h[D+8]=f[4],h[D+9]=f[5],h[D+10]=L,h[D+11]=0,_++};for(const T of E){const l=T.lp,a=(T.u*l.total+l.speed*s)%l.total;U(l,a,P),T.x=P[0],T.y=P[1],U(l,a-9,P),U(l,a+9,R),T.rot=Math.atan2(R[1]-P[1],R[0]-P[0])+.03*Math.sin(s*1.1+T.li*1.9+T.bi*2.7)}for(const T of E)b(T.x+we[0],T.y+we[1],T.rot,1,T.design.shade,1);const S=A(s);for(let T=c.length-1;T>=0;T--){const l=S.s+(T-x)*n.pitch,a=d(l);if(a<=.003)continue;const[p,f,L]=w(l),D=B(Math.round((L-n.head.min)/n.head.step),0,n.head.count-1);b(p,f,0,1,c[T][D],a)}for(const T of E)b(T.x,T.y,T.rot,1,T.design.body,1);for(const T of e.smoke)for(let l=0;l<G.puffs;l++){const a=je(T,l,s,k);a.alpha>.004&&b(a.x,a.y,a.rot,a.size,F[(T[4]+l)%3],a.alpha)}return _}const I=e.picture||[4096,3072];return{maxSprites:m,picture:I,build:N,trainAt:A,railAt:w,carAlpha:d,loops:M,period:u,trip:v}}function je(e,r,n,o={}){const[t,i,c,x]=e,v=1+.28*Math.sin(n*.37+c*6.283),u=qe(n/G.life+c+r/G.puffs),y=1-(1-u)**1.7;return o.x=t-G.drift*v*u**1.25,o.y=i-G.rise*x*y,o.rot=c*6.283+r*2.4+u*.7,o.size=x*(G.from+(G.to-G.from)*Math.sqrt(u)),o.alpha=G.strength*$(0,.14,u)*(1-$(.42,1,u)),o}const Ee=26*Math.PI/180,se=(()=>{const e=[-.45,.55,.72],r=Math.hypot(...e);return e.map(n=>n/r)})(),Qe={deck:[0,0],wallA:[.25,.5],wallB:[.25,.5],under:[.4,.4]},Ze={deck:"deck",wallA:"wall",wallB:"wall",under:"under"};function Je(e,r){const n=/^#?([0-9a-f]{6})$/i.exec((e||"").trim());if(!n)return r;const o=parseInt(n[1],16);return[(o>>16&255)/255,(o>>8&255)/255,(o&255)/255]}function et(e,r,n,o,t){if(t==="high"||t==="ultra")return o>=4096?4096:2048;if(t==="low")return 2048;const i=e*r*n*n,c=navigator.deviceMemory||8,x=navigator.connection&&navigator.connection.saveData;return i>=2e6&&o>=4096&&c>=4&&!x?4096:2048}async function tt(e,r){const n=r,o=d=>d.catch(()=>null),[t,i,c,x,v,u,y,A,w]=await Promise.all([Z(`${e}island-${n}.webp`),Z(`${e}knot-deck-${n}.webp`),Z(`${e}knot-wall-${n}.webp`),Z(`${e}knot-under-${n}.webp`),Z(`${e}clouds-${n===4096?2048:1024}.webp`),fetch(`${e}island.json`).then(d=>d.json()),fetch(`${e}clouds.json`).then(d=>d.json()),o(Z(`${e}island-actors.webp`)),o(fetch(`${e}island-actors.json`).then(d=>d.ok?d.json():null))]);return{tier:n,images:{island:t,deck:i,wall:c,under:x,clouds:v,actors:A},islandMeta:u,cloudMeta:y,actorsMeta:w}}const be={alpha:!1,antialias:!0,depth:!0,stencil:!1,powerPreference:"high-performance"};function nt(e,r,n=Ke()){const o=e.getContext("webgl2",be);if(!o)throw new Error("cityknot: WebGL2 is not available");const t=o.getParameter(o.SAMPLES),i=!!(o.getExtension("EXT_color_buffer_float")||o.getExtension("EXT_color_buffer_half_float")),c=o.getExtension("EXT_texture_filter_anisotropic")?o.getParameter(o.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0,x={knot:H(o,ve,ke,"knot"),knotMass:H(o,ve,Ce,"knot mass"),island:H(o,ie,Be,"island"),islandMass:H(o,ie,Oe,"island mass"),actor:H(o,Ve,ze,"actor"),cloud:H(o,ie,Xe,"cloud"),blur:H(o,xe,Ge,"blur"),contour:H(o,xe,We,"contour")},v=o.createVertexArray();o.bindVertexArray(v);const u=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,u),o.bufferData(o.ARRAY_BUFFER,n.verts,o.STATIC_DRAW);const y=o.createBuffer();o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,y),o.bufferData(o.ELEMENT_ARRAY_BUFFER,n.indices,o.STATIC_DRAW);const A=n.floats*4;[[0,3,0],[1,3,12],[2,3,24],[3,2,36],[4,1,44]].forEach(([E,P,R])=>{o.enableVertexAttribArray(E),o.vertexAttribPointer(E,P,o.FLOAT,!1,A,R)});const w=o.createVertexArray();o.bindVertexArray(null);const d=r.images,g={island:j(o,d.island,{aniso:c}),deck:j(o,d.deck,{repeat:!0,aniso:c}),wall:j(o,d.wall,{repeat:!0,aniso:c}),under:j(o,d.under,{repeat:!0,aniso:c}),clouds:j(o,d.clouds,{aniso:c})};let M=null,U=null,F=null,m=null;if(d.actors&&r.actorsMeta)try{M=Ye(r.actorsMeta)}catch(E){console.warn("[cityknot] the moving details are unavailable, showing the island without them",E)}if(M){g.actors=j(o,d.actors,{aniso:c}),m=new Float32Array(M.maxSprites*ne),U=o.createVertexArray(),o.bindVertexArray(U),F=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,F),o.bufferData(o.ARRAY_BUFFER,m.byteLength,o.DYNAMIC_DRAW);for(let E=0;E<3;E++)o.enableVertexAttribArray(E),o.vertexAttribPointer(E,4,o.FLOAT,!1,ne*4,E*16),o.vertexAttribDivisor(E,1);o.bindVertexArray(null)}return{gl:o,P:x,T:g,vao:v,emptyVao:w,mesh:n,samples:t,half:i,aniso:c,assets:r,vbo:u,ibo:y,actors:M,actorVao:U,actorBuf:F,actorData:m}}function ot(e,r,n={}){const o=nt(e,r,n.mesh),{gl:t,P:i,T:c,mesh:x}=o,v={paper:[.992,.988,.972],ink:[.3,.29,.24],maxDpr:3,...n};let u=0,y=0,A=1,w=null,d=null,g=null,M=6;const U=l=>r.cloudMeta.cells[l%r.cloudMeta.cells.length];function F(l,a,p){for(A=B(p||1,1,v.maxDpr);l*a*A*A>2e7&&A>1;)A-=.25;u=Math.max(1,Math.round(l)),y=Math.max(1,Math.round(a)),e.width=Math.round(u*A),e.height=Math.round(y*A),e.style.width=u+"px",e.style.height=y+"px"}function m(l){M=B(Math.round(l/60),3,12);const a=Math.max(8,Math.ceil(u/M)),p=Math.max(8,Math.ceil(y/M));w&&w.w===a&&w.h===p||([w,d,g].forEach(f=>me(t,f)),w=Q(t,a,p,o.half),d=Q(t,a,p,o.half),g=Q(t,a,p,o.half),!(w.ok&&d.ok&&g.ok)&&o.half&&([w,d,g].forEach(f=>me(t,f)),w=Q(t,a,p,!1),d=Q(t,a,p,!1),g=Q(t,a,p,!1)))}function E(l,a){t.activeTexture(t.TEXTURE0+l),t.bindTexture(t.TEXTURE_2D,a)}function P(l,a){t.useProgram(l.prog),t.uniform4f(l.u.uRect,a[0],a[1],a[2],a[3]),t.uniform2f(l.u.uView,u,y),t.bindVertexArray(o.emptyVao),t.drawArrays(t.TRIANGLE_STRIP,0,4)}function R(l,a,p){const f=r.islandMeta.tower;t.uniform2f(l.u.uTower,f[0],f[1]),t.uniform1f(l.u.uReveal,a.reveal),t.uniform1f(l.u.uAspect,p.island.rect[2]/p.island.rect[3]),t.uniform1i(l.u.uTex,0)}function k(l,a){const p=a.knot,f=x.radius,L=y/2/Math.tan(Ee/2),D=f*L/p.radius*1,W=p.cx/u*2-1,K=1-p.cy/y*2,oe=Fe(Ee,u/y,Math.max(.05,D-f*1.6),D+f*1.6,W,K),ee=Me(l.q);return{mvp:Se(oe,ee,D),rot:ee,rho:f}}function N(l,a,p){t.uniformMatrix4fv(l.u.uMVP,!1,a.mvp),t.uniformMatrix3fv(l.u.uRot,!1,a.rot);const f=p.grow;t.uniform4f(l.u.uGrow,f.center,f.half,f.taper,f.active?1:0)}function I(l,a){if(!u)return;m(a.knot.radius);const p=k(l,a);t.disable(t.BLEND),t.disable(t.DEPTH_TEST),t.disable(t.CULL_FACE),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.bindFramebuffer(t.FRAMEBUFFER,w.fbo),t.viewport(0,0,w.w,w.h),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.useProgram(i.islandMass.prog),E(0,c.island.tex),R(i.islandMass,l,a),P(i.islandMass,a.island.rect),l.knotVisible!==!1&&(t.useProgram(i.knotMass.prog),N(i.knotMass,p,l),t.bindVertexArray(o.vao),t.drawElements(t.TRIANGLES,x.indices.length,t.UNSIGNED_SHORT,0));const f=.26*a.knot.radius/M;t.useProgram(i.blur.prog),t.bindVertexArray(o.emptyVao),t.uniform1f(i.blur.u.uSigma,f),t.uniform1i(i.blur.u.uTex,0),t.bindFramebuffer(t.FRAMEBUFFER,d.fbo),E(0,w.tex),t.uniform2f(i.blur.u.uStep,1/w.w,0),t.drawArrays(t.TRIANGLES,0,3),t.bindFramebuffer(t.FRAMEBUFFER,g.fbo),E(0,d.tex),t.uniform2f(i.blur.u.uStep,0,1/w.h),t.drawArrays(t.TRIANGLES,0,3),t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,e.width,e.height),t.useProgram(i.contour.prog),E(0,g.tex),t.uniform1i(i.contour.u.uField,0),t.uniform3fv(i.contour.u.uPaper,v.paper),t.uniform3fv(i.contour.u.uInk,v.ink),t.uniform1f(i.contour.u.uPx,e.width/u),t.uniform1f(i.contour.u.uLevels,12),t.uniform1f(i.contour.u.uSpan,a.knot.radius),t.uniform1f(i.contour.u.uStrength,1),t.bindVertexArray(o.emptyVao),t.drawArrays(t.TRIANGLES,0,3),t.enable(t.BLEND),t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),h(l,a),t.useProgram(i.island.prog),E(0,c.island.tex),R(i.island,l,a),t.uniform1f(i.island.u.uOpacity,1),P(i.island,a.island.rect),s(l,a),t.disable(t.BLEND),l.knotVisible!==!1&&_(l,p)}function s(l,a){if(!o.actors)return;const p=o.actors.build(l.time,o.actorData);if(!p)return;const f=i.actor,L=a.island.rect;t.useProgram(f.prog),E(0,c.actors.tex),t.uniform4f(f.u.uRect,L[0],L[1],L[2],L[3]),t.uniform2f(f.u.uView,u,y),t.uniform2f(f.u.uPicture,o.actors.picture[0],o.actors.picture[1]),t.uniform2f(f.u.uAtlas,c.actors.width,c.actors.height),R(f,l,a),t.bindVertexArray(o.actorVao),t.bindBuffer(t.ARRAY_BUFFER,o.actorBuf),t.bufferSubData(t.ARRAY_BUFFER,0,o.actorData,0,p*ne),t.drawArraysInstanced(t.TRIANGLE_STRIP,0,4,p),t.bindVertexArray(null)}function h(l,a){l.clouds<=.002||(t.useProgram(i.cloud.prog),E(0,c.clouds.tex),t.uniform1i(i.cloud.u.uTex,0),a.clouds.forEach(p=>{const f=U(p.cell),L=r.cloudMeta.width,D=r.cloudMeta.height,W=p.cw*1,K=W*f.h/f.w,oe=p.cx+Math.sin(l.time/p.period*Math.PI*2+p.phase)*p.drift-W/2,ee=p.cy+Math.sin(l.time/(p.period*.7)*Math.PI*2+p.phase*2)*2.5-K/2;t.uniform4f(i.cloud.u.uCell,f.x/L,f.y/D,f.w/L,f.h/D),t.uniform1f(i.cloud.u.uOpacity,l.clouds*.96),P(i.cloud,[oe,ee,W,K])}))}function _(l,a){t.clear(t.DEPTH_BUFFER_BIT),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL);const p=o.samples>0;p&&t.enable(t.SAMPLE_ALPHA_TO_COVERAGE),t.useProgram(i.knot.prog),N(i.knot,a,l),t.uniform3f(i.knot.u.uLight,se[0],se[1],se[2]),t.uniform3fv(i.knot.u.uPaper,v.paper),t.uniform2f(i.knot.u.uDepth,-a.rho,a.rho),t.uniform1f(i.knot.u.uHardCut,p?0:1),t.uniform1i(i.knot.u.uTex,0),t.bindVertexArray(o.vao);for(const f of x.faces)E(0,c[Ze[f.name]].tex),t.uniform2fv(i.knot.u.uInk,Qe[f.name]),t.drawElements(t.TRIANGLES,f.count,t.UNSIGNED_SHORT,f.first*2);t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.disable(t.DEPTH_TEST)}function b(){t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,e.width,e.height),t.clearColor(v.paper[0],v.paper[1],v.paper[2],1),t.clear(t.COLOR_BUFFER_BIT)}function S(l){v.paper=l}function T(){return{samples:o.samples,half:o.half,aniso:o.aniso,tier:r.tier,actors:o.actors?o.actors.maxSprites:0,dpr:A,canvas:[e.width,e.height],mass:w&&[w.w,w.h],renderer:(()=>{const l=t.getExtension("WEBGL_debug_renderer_info");return l?t.getParameter(l.UNMASKED_RENDERER_WEBGL):"n/a"})()}}return{resize:F,render:I,clear:b,setPaper:S,info:T,gl:t,canvas:e,get dpr(){return A}}}const rt='<svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true"><rect x="2" y="1.5" width="2.8" height="9" rx=".6"/><rect x="7.2" y="1.5" width="2.8" height="9" rx=".6"/></svg>',at='<svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true"><path d="M3 1.6v8.8L10.4 6z"/></svg>',it='<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path d="M12 5V2L7.5 6.2 12 10.4V7.2a5.8 5.8 0 1 1-5.8 5.8H4a8 8 0 1 0 8-8z" fill="currentColor"/></svg>';function st(e,r={}){if(!e||e.__cityknot)return e&&e.__cityknot;const n={assets:e.dataset.assets||"/assets/cityknot/",quality:e.dataset.quality||"auto",autoplay:e.dataset.autoplay!=="false",...r},o=window.matchMedia("(prefers-reduced-motion: reduce)"),t=Le(),i={root:e,motion:t,renderer:null,layout:null,ready:!1,error:null,manual:!1};e.__cityknot=i,e.dataset.state="loading";const c=document.createElement("canvas");c.className="cityknot__canvas",c.tabIndex=0,c.setAttribute("role","img"),c.setAttribute("aria-label","An illustrated island city next to a twisted viaduct knot. Drag the knot to turn it, or use the arrow keys.");const x=document.createElement("button");x.type="button",x.className="cityknot__pause";const v=document.createElement("button");v.type="button",v.className="cityknot__replay",v.setAttribute("aria-label","Replay the animation"),v.innerHTML=it,e.append(c,x,v);const u=()=>{const a=t.state.paused;x.innerHTML=(a?at:rt)+`<span>${a?"Play":"Pause"}</span>`};u();let y=null,A=null,w=0,d=0,g=1,M=0,U=0,F=!1,m=!0,E=!0;const P=()=>{const a=getComputedStyle(e).getPropertyValue("--cityknot-paper");return Je(a,[.992,.988,.972])};function R(){const a=e.getBoundingClientRect(),p=Math.max(1,Math.round(a.width)),f=Math.max(1,Math.round(a.height)),L=window.devicePixelRatio||1;p===w&&f===d&&L===g&&A||(w=p,d=f,g=L,A=De(w,d),i.layout=A,y&&(y.resize(w,d,g),m||y.clear()),E=!0)}function k(a){if(M=0,!y)return;const p=U?Math.min((a-U)/1e3,.1):0;if(U=a,!i.manual){window.devicePixelRatio!==g&&R(),t.update(F?p:0);const f=t.state;(!f.paused&&!f.reduced||f.dragging||E)&&m&&(y.render(f,A),E=!1)}N()}function N(){M||!m||document.hidden||i.manual||(M=requestAnimationFrame(k))}function I(){E=!0,U=0,N()}i.wake=I;const s={id:null,type:"mouse",active:!1,sx:0,sy:0,x:0,y:0,t:0},h=a=>{const p=c.getBoundingClientRect();return[a.clientX-p.left,a.clientY-p.top]},_=a=>e.classList.toggle("is-over-knot",a);c.addEventListener("pointerdown",a=>{if(!A||s.id!==null||a.pointerType==="mouse"&&a.button!==0)return;const[p,f]=h(a);pe(A,p,f)&&(s.id=a.pointerId,s.type=a.pointerType,s.active=!1,s.sx=s.x=p,s.sy=s.y=f,s.t=performance.now(),t.hold(),c.setPointerCapture(a.pointerId),a.pointerType==="mouse"&&a.preventDefault())}),c.addEventListener("pointermove",a=>{if(!A)return;const[p,f]=h(a);if(s.id===a.pointerId){const L=performance.now();if(!s.active){const D=p-s.sx,W=f-s.sy,K=s.type!=="mouse";if(Math.hypot(D,W)<(K?6:2)||K&&Math.abs(W)>Math.abs(D)*1.4)return;s.active=!0,F=!0,t.dragStart(),e.classList.add("is-dragging"),s.x=s.sx,s.y=s.sy,s.t=L-16}t.dragMove(p-s.x,f-s.y,A.knot.radius,(L-s.t)/1e3),s.x=p,s.y=f,s.t=L,I()}else a.pointerType==="mouse"&&_(pe(A,p,f))});const b=(a,p)=>{if(s.id!==a.pointerId)return;const f=s.active;s.id=null,s.active=!1,f&&(p?t.dragCancel():t.dragEnd((performance.now()-s.t)/1e3)),e.classList.remove("is-dragging"),c.hasPointerCapture(a.pointerId)&&c.releasePointerCapture(a.pointerId),I()};c.addEventListener("pointerup",a=>b(a,!1)),c.addEventListener("pointercancel",a=>b(a,!0)),c.addEventListener("pointerleave",()=>{s.id===null&&_(!1)}),c.addEventListener("keydown",a=>{if(a.altKey||a.ctrlKey||a.metaKey)return;const p=.14,f={ArrowLeft:[-p,0],ArrowRight:[p,0],ArrowUp:[0,-p],ArrowDown:[0,p]}[a.key];f&&(a.preventDefault(),F=!0,t.nudge(f[0],f[1]),I())}),x.addEventListener("click",()=>{t.setPaused(!t.state.paused),u(),I()}),v.addEventListener("click",()=>{F=!0,o.matches?t.finishIntro():(t.state.paused&&(t.setPaused(!1),u()),t.play(t.timing.replayBlank)),I()});function S(){F||!y||(F=!0,o.matches?t.setReduced(!0):n.autoplay&&t.play(),I())}if("ResizeObserver"in window){let a=0;new ResizeObserver(()=>{cancelAnimationFrame(a),a=requestAnimationFrame(()=>{R(),I()})}).observe(e)}"IntersectionObserver"in window&&new IntersectionObserver(a=>{m=a[0].isIntersecting,m&&(S(),I())},{threshold:.2}).observe(e),document.addEventListener("visibilitychange",()=>{document.hidden||I()}),document.addEventListener("themechange",()=>{y&&(y.setPaper(P()),I())});const T=a=>{t.setReduced(a.matches),I()};o.addEventListener&&o.addEventListener("change",T),c.addEventListener("webglcontextlost",a=>{a.preventDefault(),y=null,e.dataset.state="loading"}),c.addEventListener("webglcontextrestored",()=>{l()});async function l(){try{R();const a=c.getContext("webgl2",be);if(!a)throw new Error("WebGL2 is not available");const p=a.getParameter(a.MAX_TEXTURE_SIZE),f=et(w,d,Math.min(g,3),p,n.quality),L=await tt(n.assets,f);y=ot(c,L,{paper:P()}),y.resize(w,d,g),y.clear(),i.renderer=y,i.draw=()=>y.render(t.state,A),i.ready=!0,e.dataset.state="ready",o.matches&&t.setReduced(!0),m&&!F&&S(),I()}catch(a){i.error=a,e.dataset.state="error",e.setAttribute("role","img"),e.setAttribute("aria-label","An illustrated island city next to a twisted viaduct knot (still picture; the animation needs WebGL)."),console.warn("[cityknot] animation unavailable, showing the still picture",a)}}return l(),i}function ct(){document.querySelectorAll("[data-cityknot]").forEach(e=>st(e))}try{ct()}catch(e){console.warn("[cityknot] failed to start",e)}
