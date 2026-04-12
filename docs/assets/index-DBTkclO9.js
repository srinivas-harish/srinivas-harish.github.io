(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const N=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],V=[];for(let t=0;t<256;t++)V[t]=Math.floor(Math.random()*256);const M=new Array(512),$=new Array(512);for(let t=0;t<512;t++)M[t]=V[t&255],$[t]=M[t]%12;const Y=.5*(Math.sqrt(3)-1),A=(3-Math.sqrt(3))/6;function H(t,e,s){return t[0]*e+t[1]*s}function j(t,e){let s,a,r;const n=(t+e)*Y,i=Math.floor(t+n),o=Math.floor(e+n),c=(i+o)*A,h=i-c,p=o-c,l=t-h,d=e-p,u=l>d?1:0,m=l>d?0:1,g=l-u+A,v=d-m+A,y=l-1+2*A,w=d-1+2*A,f=i&255,x=o&255,E=$[f+M[x]],D=$[f+u+M[x+m]],B=$[f+1+M[x+1]];let S=.5-l*l-d*d;S<0?s=0:(S*=S,s=S*S*H(N[E],l,d));let T=.5-g*g-v*v;T<0?a=0:(T*=T,a=T*T*H(N[D],g,v));let k=.5-y*y-w*w;return k<0?r=0:(k*=k,r=k*k*H(N[B],y,w)),70*(s+a+r)}function K(t,e,s=4,a=2,r=.5){let n=0,i=.5,o=1;for(let c=0;c<s;c++)n+=i*j(t*o,e*o),i*=r,o*=a;return n}const b={name:"Srinivas Harish",tagline:"I design deep learning systems and architectures",summary:"Lead AI Engineer building perception and intelligence infrastructure for physical security. Shipped a full CV pipeline — detection, tracking, re-ID, VLM reasoning — to production evaluation by the US Secret Service in 90 days.",email:"srinivas.harish@nyu.edu",github:"https://github.com/srinivas-harish",linkedin:"https://www.linkedin.com/in/srinivasharish"},Q=[{value:90,unit:"days",label:"commit→prod",decimals:0},{value:40,unit:"+",label:"models evaluated",decimals:0},{value:9.5,unit:"ms",label:"TensorRT latency",decimals:1},{value:13.5,unit:"mm",label:"L/W MAE",decimals:1},{value:7,unit:"",label:"formal theorems",decimals:0},{value:87.4,unit:"%",label:"GLUE RTE",decimals:1}],J=[{id:"prediction",company:"Prediction",role:"Lead AI Engineer",period:"Dec 2025 – Present",description:"Decision-intelligence platform for physical spaces. Billionaire-backed stealth defense startup.",bullets:["De-risked and architected the core perception and intelligence stack from initial commit.","Drove evaluation of 40+ perception and reasoning models across 7 capability domains — made kill decisions on what ships always-on, what triggers on escalation, what gets cut.","Built five operator-facing intelligence products shaped with defense and intelligence community operators: real-time threat synthesis, cross-session entity persistence across camera networks.","Shipped from initial commit to production in 90 days. Technical architecture evaluated by US Secret Service and Fortune 100 companies."],tech:["YOLOX","ByteTrack","AdaFace","RetinaFace","Gemini VLM","FastAPI","PyTorch","Docker"]},{id:"dockware",company:"Dockware",role:"Deep Learning Engineer — Neural Dimensioning Systems",period:"Aug 2025 – Mar 2026",description:"Production inference stack for enterprise warehouses. Ex-SpaceX and Waymo founders.",bullets:["Led production inference stack deployed across enterprise warehouses (Home Depot, ArcBest, MyCarrier).","Decomposed 3D dimensioning into learned 2D footprint segmentation over engineered multi-channel spatial encodings, reducing regression target from 7 continuous 3D parameters to binary 2D segmentation.","Eliminated core dimensioning ambiguities; shipped as self-contained TorchScript inference artifact with TensorRT/ONNX export paths and zero runtime dependencies."],tech:["PyTorch","TorchScript","TensorRT","ONNX","SegFormer","LiDAR","BEV"]},{id:"nvidia",company:"NVIDIA",role:"Computer Vision Developer — RTX-Accelerated CV",period:"Jun 2025 – Aug 2025",description:"Latency and throughput optimized model execution for RTX Blackwell GPUs.",bullets:["Built latency and throughput optimized model execution pipelines for RTX Blackwell GPUs.","Integrated TensorRT, CUDA Graphs, and mixed precision — reducing inference latency from 18.7ms → 9.5ms.","Profiled GPU workloads with Nsight Systems/Compute + NVTX to analyze scheduling, kernels, and utilization.","Reduced CPU–GPU synchronization overhead by restructuring inference into staged CUDA-stream operations.","Featured on NVIDIA.com: deployed containerized inference with Docker+FastAPI for RTX demos."],tech:["CUDA","TensorRT","CUDA Graphs","Nsight","AMP","cuDNN","cuBLAS","Docker","FastAPI"]},{id:"nyu",company:"New York University",role:"Deep Learning Researcher — Transformer Architectures",period:"May 2025 – Aug 2025",description:"Designed ALCNet: a CNN operating over RoBERTa-large's differentiable attention tensors.",bullets:["Designed ALCNet, a CNN over RoBERTa-large's differentiable attention tensors. Gradients flow bidirectionally through Q/K/V projections, reshaping transformer attention during training. Optimized with cuBLAS GeMMs.","CNN branch ablation accounts for the full performance delta; classification head removal produces no change. Masked gradient experiment confirms bidirectional flow through attention as the causal mechanism."],tech:["PyTorch","RoBERTa","cuBLAS","HuggingFace","CUDA"],link:"https://github.com/srinivas-harish/alcnet-attention-layer-convolution"}],Z=[{id:"seglift",title:"SegLift-3D",subtitle:"3D Object Dimensioning from LiDAR",year:"2026",link:"https://github.com/srinivas-harish/seglift-3d",metrics:[{label:"L/W MAE",value:"13.5 mm"},{label:"HEIGHT RES",value:"31.25 mm"},{label:"GPU INFERENCE",value:"≈10 ms"},{label:"GRID",value:"96³"}],description:"Decomposes 7-parameter 3D box regression into BEV footprint segmentation and voxel column height lookup. Regression convergence fails at this data scale; decomposition converges reliably.",bullets:["Hand-crafted 3-channel BEV encoding (return density, height variance, soft-quantized elevation) selected from 37-channel registry via pairwise mutual information analysis.","Dice + BCE + SDF boundary loss — boundary term penalizes false positives proportional to distance from true mask edge.","TorchScript export: single .seglift artifact, input occupancy + attributes tensors, output mask — zero runtime dependencies.","Vectorized LiDAR simulator: ray-OBB, ray-plane, ray-sphere intersection, domain randomization.","6-axis ablation framework isolating encoder architecture, loss composition, and input representation choices."],tech:["PyTorch","TorchScript","SegFormer","LiDAR","BEV","MIT-B0"]},{id:"xlrb",title:"XLRB Transformers",subtitle:"Cross-Layer Routing Bridge Architecture",year:"2025",link:"https://github.com/srinivas-harish/xlrb-transformers",metrics:[{label:"GLUE RTE",value:"87.4%"},{label:"BASELINE DELTA",value:"+0.8pp"},{label:"ABLATIONS",value:"50"},{label:"THEOREMS",value:"7"}],description:"Cross-layer communication mechanisms on top of RoBERTa-large. Gated QKV bridging and nonlinear pairwise token scoring (HDIM). 7 theorems prove the scoring mechanism strictly subsumes dot-product attention.",bullets:["QKV bridge: target Q attends to source K/V across layers — bilinear similarity, strong baseline.","HDIM bridge: nonlinear token-pair kernel via tiny MLPs — learned nonlinear similarity that subsumes dot-product.","Hybrid gates blend both paths per-layer; router selects earlier source layers dynamically.","50 deterministic ablations on 8×H100 with NCCL; custom harness: Celery + Redis + Nsight profiling.","HDIM H9 config (concat_only value fusion, mean routing) reaches 87.4% on GLUE RTE."],tech:["PyTorch","HuggingFace","CUDA","NCCL","Celery","Redis","Nsight"]}],C={institution:"New York University, Courant Institute of Mathematical Sciences",degree:"Computer Science and Mathematics",gpa:"3.95 / 4.00",honors:["DURF Grant Recipient","CAS Presidential Honors Scholar","Outstanding Award — SCUDEM IX (SIMIODE)"]},ee={perception:["ViTs","dual-encoder retrieval","contrastive embeddings","voxel 3D CNNs","multi-object tracking","re-ID"],infra:["PyTorch","multi-GPU execution","deterministic pipelines","Docker","FastAPI","Celery+Redis"],gpu:["CUDA","TensorRT","CUDA Graphs","mixed precision","NCCL","ONNX","cuDNN/cuBLAS","AMP"]},te=[{label:"Experience",href:"#experience"},{label:"Research",href:"#research"},{label:"Ask my agent",href:"#agent"}],ie=[{label:"How did he ship in 90 days?",prompt:"How did Srinivas ship a production defense intelligence platform in 90 days as a solo engineer?"},{label:"Why defense tech?",prompt:"Why is Srinivas working in defense tech and physical security AI?"},{label:"Walk me through SegLift",prompt:"Walk me through the SegLift-3D architecture — why not just regress the 3D box directly?"},{label:"What would he build at OAI?",prompt:"What would Srinivas build if he joined OpenAI?"},{label:"His take on model evaluation",prompt:"What is his systematic approach to evaluating and comparing perception models?"},{label:"Ask him anything",prompt:""}];function se(){return{width:window.innerWidth,height:window.innerHeight}}let I=[],_=null;window.addEventListener("resize",()=>{clearTimeout(_),_=setTimeout(()=>{I.forEach(t=>t(se()))},100)},{passive:!0});function ne(t){return I.push(t),()=>{I=I.filter(e=>e!==t)}}function P(){return Math.min(window.devicePixelRatio||1,2)}function re(t,e,s={}){const a=q(t),r={threshold:.15,rootMargin:"0px 0px -40px 0px",...s},n=new IntersectionObserver(i=>{i.forEach(o=>{o.isIntersecting&&(e(o.target,o),n.unobserve(o.target))})},r);return a.forEach(i=>n.observe(i)),n}function L(t,e={}){const s=q(t);return s.forEach(a=>a.classList.add("reveal")),setTimeout(()=>{s.forEach(a=>{const r=a.getBoundingClientRect();r.top<window.innerHeight*.9&&r.bottom>0&&a.classList.add("visible")})},100),re(s,a=>{a.classList.add("visible")},{threshold:.1,...e})}function q(t){return typeof t=="string"?Array.from(document.querySelectorAll(t)):t instanceof Element?[t]:t instanceof NodeList||Array.isArray(t)?Array.from(t):[]}let O=0,R=[];window.addEventListener("scroll",()=>{O=window.scrollY,R.forEach(t=>t(O))},{passive:!0});function ae(t){return R.push(t),()=>{R=R.filter(e=>e!==t)}}class oe{constructor(e){this.canvas=e,this.ctx=e.getContext("2d"),this.dpr=P(),this.mouse={x:-9999,y:-9999},this.scrollOffset=0,this.time=0,this.frameId=null,this.lastFrame=0,this.fontSize=13,this.cellW=11,this.cellH=18,this.chars=this._buildCharPool(),this.grid=[],this._resize(),this._bindEvents(),this._start()}_buildCharPool(){const e="01234567890xABCDEF·—×÷▸◆".split(""),s=["0.8","0.4","0.9","0.2","0.7","96","13","31","T2","P1","E7","V3","BEV","SDF"];return[...e,...e,...e,...s]}_resize(){const e=window.innerWidth,s=window.innerHeight;this.canvas.width=e*this.dpr,this.canvas.height=s*this.dpr,this.canvas.style.width=e+"px",this.canvas.style.height=s+"px",this.ctx.scale(this.dpr,this.dpr),this.viewW=e,this.viewH=s,this.cols=Math.ceil(e/this.cellW)+1,this.rows=Math.ceil(s/this.cellH)+1,this._buildGrid()}_buildGrid(){this.grid=[];for(let e=0;e<this.rows;e++){this.grid[e]=[];for(let s=0;s<this.cols;s++)this.grid[e][s]=this.chars[Math.floor(Math.random()*this.chars.length)]}}_bindEvents(){window.addEventListener("mousemove",e=>{this.mouse.x=e.clientX,this.mouse.y=e.clientY},{passive:!0}),window.addEventListener("mouseleave",()=>{this.mouse.x=-9999,this.mouse.y=-9999},{passive:!0}),ne(()=>{this.dpr=P(),this._resize()}),ae(e=>{this.scrollOffset=e})}_start(){const s=33.333333333333336,a=r=>{this.frameId=requestAnimationFrame(a),!(r-this.lastFrame<s)&&(this.lastFrame=r,this.time+=8e-4,this._draw())};this.frameId=requestAnimationFrame(a)}_draw(){const e=this.ctx;e.clearRect(0,0,this.viewW,this.viewH),e.font=`${this.fontSize}px 'JetBrains Mono', monospace`,e.textBaseline="top";const s=this.scrollOffset*1e-4,a=120,r=a*a;for(let n=0;n<this.rows;n++){const i=n*this.cellH;for(let o=0;o<this.cols;o++){const c=o*this.cellW,h=c+this.cellW/2,p=i+this.cellH/2,l=o*.07+this.time,d=n*.07+this.time*.6+s;let m=(K(l,d,3,2,.5)+1)*.5;m=Math.pow(m,2.2),m*=.35;const g=h-this.mouse.x,v=p-this.mouse.y,y=g*g+v*v;if(y<r){const f=1-Math.sqrt(y)/a,x=f*f*.7;if(m=Math.max(m,x),f>.3){const E=(f-.3)/.7,D=Math.floor(74+E*126),B=Math.floor(109+E*8),S=Math.floor(140+E*-89);e.fillStyle=`rgba(${D},${B},${S},${m})`,e.fillText(this.grid[n][o],c,i);continue}}m<.015||(e.fillStyle=`rgba(74,109,140,${m})`,e.fillText(this.grid[n][o],c,i))}}}destroy(){this.frameId&&cancelAnimationFrame(this.frameId)}}class ce{constructor(e){if(this.canvas=e,this.ctx=e.getContext("2d"),!this.ctx){console.warn("HeroCanvas2D: could not get 2D context — canvas may be tainted. Skipping.");return}this.N=1800,this.time=0,this.frameId=null,this.destroyed=!1,this._initParticles(),this._setState("scatter"),this._start();const s=new ResizeObserver(()=>this._onResize());s.observe(e),this._ro=s}_onResize(){const e=this.canvas.getBoundingClientRect();this.canvas.width=e.width,this.canvas.height=e.height,this._initParticles()}_cx(){return this.canvas.width/2}_cy(){return this.canvas.height/2}_initParticles(){const e=this.canvas.width||400,s=this.canvas.height||400,a=e/2,r=s/2,n=e*.55,i=s*.32,o=a-n/2,c=r-i/2;this.particles=[];for(let h=0;h<this.N;h++){const p=(Math.random()-.5)*e*1.4,l=(Math.random()-.5)*s*1.4;let d,u;if(Math.random()<.65){const f=Math.floor(Math.random()*4);f===0?(d=o+Math.random()*n,u=c):f===1?(d=o+n,u=c+Math.random()*i):f===2?(d=o+Math.random()*n,u=c+i):(d=o,u=c+Math.random()*i),d+=(Math.random()-.5)*8,u+=(Math.random()-.5)*8}else d=o+Math.random()*n,u=c+Math.random()*i;const g=d,v=r+(u-r)*.05,w=Math.random()<.55?`rgba(${200+Math.random()*30|0},${180+Math.random()*40|0},${160+Math.random()*40|0},`:`rgba(${180+Math.random()*40|0},${100+Math.random()*30|0},${40+Math.random()*20|0},`;this.particles.push({sx:a+p,sy:r+l,tx:d,ty:u,pvx:g,pvy:v,x:a+p,y:r+l,color:w,size:.8+Math.random()*1.8,speed:.4+Math.random()*.6})}this.bevRect={x:o,y:c,w:n,h:i}}_setState(e){this.state=e,this.stateStart=performance.now(),this.DURATIONS={scatter:2200,assemble:3e3,hold:2e3,scatter_out:1800},this.rectOpacity=0}_easeInOut(e){return e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2}_easeOut(e){return 1-Math.pow(1-e,3)}_start(){let e=0;const a=1e3/60,r=n=>{this.destroyed||(this.frameId=requestAnimationFrame(r),!(n-e<a)&&(e=n,this.time+=.016,this._update(n),this._draw()))};this.frameId=requestAnimationFrame(r)}_update(e){const s=e-this.stateStart,a=this.DURATIONS[this.state]||2e3,r=Math.min(s/a,1);switch(this.state){case"scatter":for(const n of this.particles)n.x=n.sx+Math.sin(this.time*.5+n.speed)*8,n.y=n.sy+Math.cos(this.time*.4+n.speed)*6;this.rectOpacity=0,r>=1&&this._setState("assemble");break;case"assemble":{const n=this._easeInOut(r);for(const i of this.particles)i.x=i.sx+(i.tx-i.sx)*n,i.y=i.sy+(i.ty-i.sy)*n;r>.8&&(this.rectOpacity=this._easeOut((r-.8)/.2)*.9),r>=1&&this._setState("hold");break}case"hold":for(const n of this.particles)n.x=n.tx+Math.sin(this.time*.3+n.speed)*1.5,n.y=n.ty+Math.cos(this.time*.25+n.speed)*1.5;this.rectOpacity=.9,r>=1&&this._setState("scatter_out");break;case"scatter_out":{const n=this._easeInOut(r);for(const i of this.particles){if(!i.nextSx){const o=this.canvas.width,c=this.canvas.height;i.nextSx=this._cx()+(Math.random()-.5)*o*1.4,i.nextSy=this._cy()+(Math.random()-.5)*c*1.4}i.x=i.tx+(i.nextSx-i.tx)*n,i.y=i.ty+(i.nextSy-i.ty)*n}if(this.rectOpacity=Math.max(0,.9-this._easeOut(r)*.9),r>=1){for(const i of this.particles)i.sx=i.nextSx,i.sy=i.nextSy,i.nextSx=void 0,i.nextSy=void 0;this._setState("scatter")}break}}}_draw(){const e=this.ctx,s=this.canvas.width,a=this.canvas.height;e.clearRect(0,0,s,a),e.fillStyle="#0d0f14",e.fillRect(0,0,s,a),e.strokeStyle="rgba(74,109,140,0.06)",e.lineWidth=.5;const r=28;for(let i=0;i<s;i+=r)e.beginPath(),e.moveTo(i,0),e.lineTo(i,a),e.stroke();for(let i=0;i<a;i+=r)e.beginPath(),e.moveTo(0,i),e.lineTo(s,i),e.stroke();for(const i of this.particles){const o=this.state==="scatter"?.5:.85;e.beginPath(),e.arc(i.x,i.y,i.size,0,Math.PI*2),e.fillStyle=i.color+o+")",e.fill()}if(this.rectOpacity>.01){const i=this.bevRect;e.strokeStyle=`rgba(45,212,168,${this.rectOpacity})`,e.lineWidth=1.5,e.strokeRect(i.x,i.y,i.w,i.h);const o=12;e.strokeStyle=`rgba(45,212,168,${this.rectOpacity})`,e.lineWidth=2;const c=[[i.x,i.y,1,1],[i.x+i.w,i.y,-1,1],[i.x,i.y+i.h,1,-1],[i.x+i.w,i.y+i.h,-1,-1]];for(const[h,p,l,d]of c)e.beginPath(),e.moveTo(h+l*o,p),e.lineTo(h,p),e.lineTo(h,p+d*o),e.stroke();e.font='9px "JetBrains Mono", monospace',e.fillStyle=`rgba(45,212,168,${this.rectOpacity*.8})`,e.fillText(`L: ${(this.bevRect.w*.008).toFixed(3)}m  W: ${(this.bevRect.h*.007).toFixed(3)}m`,i.x+4,i.y-6)}e.strokeStyle="rgba(74,109,140,0.15)",e.lineWidth=.5,e.setLineDash([4,4]),e.beginPath(),e.moveTo(0,a/2),e.lineTo(s,a/2),e.stroke(),e.beginPath(),e.moveTo(s/2,0),e.lineTo(s/2,a),e.stroke(),e.setLineDash([]);const n={scatter:"SCATTER",assemble:"ASSEMBLE",hold:"BEV FIT",scatter_out:"RESET"};e.font='9px "JetBrains Mono", monospace',e.fillStyle="rgba(74,109,140,0.5)",e.textAlign="right",e.fillText(n[this.state]||"",s-8,14),e.textAlign="left"}destroy(){this.destroyed=!0,this.frameId&&cancelAnimationFrame(this.frameId),this._ro&&this._ro.disconnect()}}function le(){const t=document.getElementById("hero");t.innerHTML=`
    <div class="hero-inner">
      <div class="hero-content">
        <h1 class="hero-headline">${b.tagline}</h1>
        <p class="hero-summary">${b.summary}</p>
        <div class="hero-links">
          <a href="#experience" class="hero-link">See the work ↓</a>
          <a href="#agent" class="hero-link">Ask my agent ↗</a>
        </div>
      </div>
      <div class="hero-canvas-wrap" id="hero-canvas-wrap">
        <canvas id="hero-canvas" aria-label="Live point cloud BEV projection animation"></canvas>
        <div class="hero-canvas-status">
          <span class="status-dot" aria-hidden="true"></span>
          <span>LIVE</span>
        </div>
        <div class="hero-canvas-label">SEGLIFT-3D // BEV PROJECTION</div>
      </div>
    </div>
  `,requestAnimationFrame(()=>requestAnimationFrame(()=>{const e=document.getElementById("hero-canvas-wrap"),s=document.getElementById("hero-canvas");if(!e||!s)return;const a=e.getBoundingClientRect(),r=Math.max(a.width||380,200);s.width=r,s.height=r,new ce(s)}))}function de(t,e,s,a,r=1600){let n=null,i=null,o=!1;const c=()=>{if(o)return;o=!0,t.textContent="0";const d=u=>{n||(n=u);const m=u-n,g=Math.min(m/r,1),y=he(g)*e;t.textContent=y.toFixed(s),g<1?i=requestAnimationFrame(d):t.textContent=e.toFixed(s)};i=requestAnimationFrame(d)},h=t.closest(".metric-item")||t,p=h.getBoundingClientRect();if(p.top<window.innerHeight&&p.bottom>0){setTimeout(c,300);return}const l=new IntersectionObserver(d=>{d.forEach(u=>{u.isIntersecting&&(c(),l.disconnect())})},{threshold:.3});return l.observe(h),()=>{i&&cancelAnimationFrame(i),l.disconnect()}}function he(t){return t===1?1:1-Math.pow(2,-10*t)}function ue(){document.querySelectorAll(".metric-item").forEach(e=>{var n;const s=e.querySelector(".metric-number");if(!s)return;const a=parseFloat(s.dataset.target),r=parseInt(s.dataset.decimals||"0");(n=e.querySelector(".metric-unit"))!=null&&n.textContent,isNaN(a)||de(s,a,r)})}function pe(){const t=document.getElementById("metrics"),e=Q.map(s=>`
    <div class="metric-item reveal">
      <div class="metric-value">
        <span class="metric-number" data-target="${s.value}" data-decimals="${s.decimals}">${s.value.toFixed(s.decimals)}</span>
        <span class="metric-unit">${s.unit}</span>
      </div>
      <div class="metric-label">${s.label}</div>
    </div>
  `).join("");t.innerHTML=`
    <div class="metrics-inner">
      ${e}
    </div>
  `,L("#metrics .metric-item",{threshold:.05}),ue()}function U(t,e={}){const{size:s=18,strokeWidth:a=1.5}=e;[{cls:"tl",x:0,y:0},{cls:"tr",x:null,y:0},{cls:"bl",x:0,y:null},{cls:"br",x:null,y:null}].forEach(({cls:n,x:i,y:o})=>{const c=document.createElement("div");c.className=`corner-bracket corner-${n}`,c.style.cssText=`
      position: absolute;
      ${i!==null?`left: ${i}px`:`right: ${i===null?0:i}px`};
      ${o!==null?`top: ${o}px`:"bottom: 0"};
      pointer-events: none;
      z-index: 2;
    `,i!==null&&o!==null?(c.style.left="0",c.style.top="0"):i===null&&o!==null?(c.style.right="0",c.style.top="0"):i!==null&&o===null?(c.style.left="0",c.style.bottom="0"):(c.style.right="0",c.style.bottom="0");const h=me(n,s,a);c.appendChild(h),t.appendChild(c)}),fe(t)}function me(t,e,s){const a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("width",e),a.setAttribute("height",e),a.setAttribute("viewBox",`0 0 ${e} ${e}`),a.style.display="block";const r=e-1,n=s;let i;switch(t){case"tl":i=`M ${n/2} ${r} L ${n/2} ${n/2} L ${r} ${n/2}`;break;case"tr":i=`M 0 ${n/2} L ${r-n/2} ${n/2} L ${r-n/2} ${r}`;break;case"bl":i=`M ${n/2} 0 L ${n/2} ${r-n/2} L ${r} ${r-n/2}`;break;case"br":i=`M 0 ${r-n/2} L ${r-n/2} ${r-n/2} L ${r-n/2} 0`;break}const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d",i),o.setAttribute("fill","none"),o.setAttribute("stroke","#c87533"),o.setAttribute("stroke-width",s),o.setAttribute("stroke-linecap","square"),o.setAttribute("opacity","0.55");const c=2*(e-s);return o.setAttribute("stroke-dasharray",c),o.setAttribute("stroke-dashoffset",c),o.style.transition="stroke-dashoffset 0.6s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease",a.appendChild(o),a}function fe(t){const e=()=>{t.querySelectorAll(".corner-bracket svg path").forEach((n,i)=>{setTimeout(()=>{n.style.strokeDashoffset="0",n.style.opacity="0.55"},i*80)})},s=new IntersectionObserver(r=>{r.forEach(n=>{n.isIntersecting&&(e(),s.disconnect())})},{threshold:.15}),a=t.getBoundingClientRect();a.top<window.innerHeight&&a.bottom>0?setTimeout(e,150):s.observe(t)}function z(t){t.querySelectorAll(".corner-bracket svg path").forEach(s=>{s.style.opacity="0.9",s.style.stroke="#d4954a"})}function W(t){t.querySelectorAll(".corner-bracket svg path").forEach(s=>{s.style.opacity="0.55",s.style.stroke="#c87533"})}function ge(){const t=document.getElementById("experience");t.innerHTML=`
    <div class="experience-inner">
      <div class="section-label">Professional Experience</div>
      <div class="experience-stack">
        ${J.map(e=>ve(e)).join("")}
      </div>
    </div>
  `,t.querySelectorAll(".detection-card").forEach(e=>{U(e),e.addEventListener("mouseenter",()=>z(e)),e.addEventListener("mouseleave",()=>W(e))}),L(".experience-inner .detection-card")}function ve(t){const e=t.bullets.map(r=>`<li>${r}</li>`).join(""),s=t.tech.map(r=>`<span class="tech-chip">${r}</span>`).join(""),a=t.link?`<a href="${t.link}" target="_blank" rel="noopener noreferrer" class="card-link">↗ code</a>`:"";return`
    <div class="detection-card" id="card-${t.id}">
      <div class="card-header">
        <div class="card-title-wrap">
          <div class="card-company">
            <span class="card-dot" aria-hidden="true"></span>${t.company}
          </div>
          <div class="card-role">${t.role}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;">
          <div class="card-period">${t.period}</div>
          ${a}
        </div>
      </div>
      <p class="card-description">${t.description}</p>
      <ul class="card-bullets">
        ${e}
      </ul>
      <div class="tech-chips">${s}</div>
    </div>
  `}function ye(){const t=document.getElementById("research");t.innerHTML=`
    <div class="research-inner">
      <div class="section-label">Projects & Research</div>
      <div class="research-stack">
        ${Z.map(e=>be(e)).join("")}
      </div>
    </div>
  `,t.querySelectorAll(".detection-card").forEach(e=>{U(e),e.addEventListener("mouseenter",()=>z(e)),e.addEventListener("mouseleave",()=>W(e))}),L(".research-stack .detection-card")}function be(t){const e=t.metrics.map(r=>`
    <div class="research-metric">
      <div class="research-metric-label">${r.label}</div>
      <div class="research-metric-value">${r.value}</div>
    </div>
  `).join(""),s=t.bullets.map(r=>`<li>${r}</li>`).join(""),a=t.tech.map(r=>`<span class="tech-chip">${r}</span>`).join("");return`
    <div class="detection-card research-card" id="card-${t.id}">
      <div class="card-header">
        <div class="card-title-wrap">
          <div class="card-company">
            <span class="card-dot" aria-hidden="true"></span>${t.title}
          </div>
          <div class="card-role">${t.subtitle}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;">
          <div class="card-period">${t.year}</div>
          <div class="research-card-actions">
            <a href="${t.link}" target="_blank" rel="noopener noreferrer" class="card-link">code ↗</a>
          </div>
        </div>
      </div>

      <div class="research-metrics">
        ${e}
      </div>

      <p class="card-description" style="margin-top:1rem;">${t.description}</p>

      <ul class="card-bullets">
        ${s}
      </ul>

      <div class="tech-chips">${a}</div>
    </div>
  `}function we(){const t=document.getElementById("education"),e=C.honors.map(a=>`<li>${a}</li>`).join(""),s=Object.entries(ee).map(([a,r])=>`
    <div class="skill-group">
      <div class="skill-group-label">${a}</div>
      <div class="tech-chips">
        ${r.map(n=>`<span class="tech-chip">${n}</span>`).join("")}
      </div>
    </div>
  `).join("");t.innerHTML=`
    <div class="education-inner">
      <div class="edu-col reveal">
        <div class="section-label">Education</div>
        <div class="edu-institution">${C.institution}</div>
        <div class="edu-degree">${C.degree}</div>
        <div class="edu-gpa">GPA ${C.gpa}</div>
        <ul class="edu-honors">${e}</ul>
      </div>
      <div class="skills-col reveal">
        <div class="section-label">Technical Skills</div>
        <div class="skills-section">${s}</div>
      </div>
    </div>
  `,L(".edu-col, .skills-col")}const Se=`You are Delta, an AI agent trained on Srinivas Harish's work, technical decisions, and professional trajectory. You speak in first person as a representative of his thinking — not as him, but as someone who has internalized his architecture decisions, research philosophy, and engineering approach.

You are concise, technically precise, and opinionated. You do not hedge unnecessarily. You give direct answers with specific technical details. You avoid marketing language.

## About Srinivas

Srinivas Harish is a Lead AI Engineer at Prediction, building decision-intelligence infrastructure for physical security. He's a sole engineer who shipped a production CV pipeline in 90 days — evaluated by the US Secret Service and Fortune 100 companies. Prior to that: Deep Learning Engineer at Dockware (neural dimensioning for enterprise warehouses), Computer Vision Developer at NVIDIA (RTX-accelerated inference), and Deep Learning Researcher at NYU Courant (transformer architecture research).

## Technical Context

**Prediction Pipeline (current role):**
- Detection: YOLOX — chosen over YOLOv8 for anchor-free design and cleaner architecture for custom deployment
- Tracking: ByteTrack — two-stage association handles occlusion better than SORT alone
- Face detection: RetinaFace
- Face/body re-ID: AdaFace IR-101 — better low-quality face performance than ArcFace for real surveillance conditions
- VLM integration: Gemini — for behavioral reasoning and appearance description generation
- Behavioral Decision Analysis (BDA) indicators
- Threat scoring engine
- Intel Console (operator-facing intelligence terminal)
- Entity persistence across sessions and camera networks
- Shipped initial commit to production evaluation (US Secret Service) in 90 days

**SegLift-3D (Dockware, 2026):**
- 3D dimensioning from LiDAR via BEV segmentation + voxel column height lookup
- Key insight: 7-parameter 3D regression fails to converge in low-data regimes (<800 samples); binary 2D segmentation converges reliably
- 3-channel BEV encoding: return density (R), height variance (G), soft-quantized elevation (B)
- Selected from 37-channel registry via pairwise mutual information
- Loss: 0.6 Dice + 0.25 BCE + 0.15 SDF boundary
- Architecture: SegFormer MIT-B0 (96×96 input)
- L/W MAE: 13.5 mm; Height resolution: 31.25 mm; GPU inference: ~10 ms
- TorchScript export: single .seglift artifact, zero runtime dependencies
- Vectorized LiDAR simulator for synthetic data generation

**XLRB Transformers (NYU research, 2025):**
- Cross-layer routing bridges for transformers
- Two bridge types: QKV (target Q attends source K/V across layers) and HDIM (nonlinear token-pair kernel via MLPs)
- 7 formal theorems prove HDIM scoring strictly subsumes dot-product attention
- Best config (H9, HDIM concat_only, mean routing): 87.4% on GLUE RTE (+0.8pp over RoBERTa-large baseline)
- 50 deterministic ablations on 8×H100 with NCCL, Celery+Redis harness

**ALCNet (NYU research, 2025):**
- CNN operating over RoBERTa-large's differentiable attention tensors
- Gradients flow bidirectionally through Q/K/V projections, reshaping attention during training
- Ablation confirms: CNN branch accounts for full performance delta; bidirectional gradient flow is the causal mechanism

**NVIDIA (2025):**
- RTX Blackwell GPU inference optimization
- TensorRT + CUDA Graphs + mixed precision: 18.7ms → 9.5ms latency
- Nsight Systems/Compute profiling
- Featured on NVIDIA.com

## Communication Style

- Technical specificity over generality. Say "ByteTrack's two-stage association" not "a tracking algorithm"
- Honest about tradeoffs. Acknowledge what doesn't work or what was cut
- No hedging. If there's a clear technical answer, give it
- Brief answers unless the question warrants depth. Don't pad
- First person ("He chose X because...") representing his thinking
- If asked about something outside Srinivas's known work, say so rather than inventing

## Answering Questions

When asked about architecture decisions: explain the specific tradeoffs considered, what was rejected, and why
When asked about his background: ground it in concrete deliverables and measurements, not adjectives
When asked about future work: extrapolate from his demonstrated patterns of thinking
When asked about opinions on models/techniques: give a real opinion, not "it depends"`,X="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";function xe(t,e,s,a){const r=new AbortController;return(async()=>{var n,i,o;try{const c={messages:[{role:"user",content:t}],system:Se};let h=await Ee(c,r.signal);if(!h&&X&&(h=await Te(c,r.signal)),!h){a(new Error("Chat service unavailable."));return}if(!h.ok){const u=await h.text();a(new Error(`API error ${h.status}: ${u}`));return}const p=h.body.getReader(),l=new TextDecoder;let d="";for(;;){const{done:u,value:m}=await p.read();if(u)break;d+=l.decode(m,{stream:!0});const g=d.split(`
`);d=g.pop()??"";for(const v of g){if(!v.startsWith("data: "))continue;const y=v.slice(6).trim();if(y!=="[DONE]")try{const f=(o=(i=(n=JSON.parse(y).choices)==null?void 0:n[0])==null?void 0:i.delta)==null?void 0:o.content;f&&e(f)}catch{}}}s()}catch(c){c.name!=="AbortError"&&a(c)}})(),r}async function Ee(t,e){try{const s=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),signal:e});return s.status===404||s.status===405?null:s}catch{return null}}async function Te(t,e){const s=[{role:"system",content:t.system||""},...t.messages.slice(-6)];return fetch("https://openrouter.ai/api/v1/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${X}`,"Content-Type":"application/json","HTTP-Referer":"https://srinivas-harish.github.io","X-Title":"Srinivas Harish Portfolio"},body:JSON.stringify({model:"anthropic/claude-sonnet-4-5",messages:s,stream:!0,max_tokens:1024,temperature:.7}),signal:e})}class ke{constructor(e){this.container=e,this.activeController=null,this.isStreaming=!1,this._render()}_render(){this.container.innerHTML=`
      <div class="terminal-response-wrap">
        <div class="terminal-response empty" id="chat-response">
          <span class="response-placeholder">// awaiting query...</span>
        </div>
      </div>
    `,this.responseEl=this.container.querySelector("#chat-response"),this.placeholderEl=this.container.querySelector(".response-placeholder")}send(e){var i;this.isStreaming&&((i=this.activeController)==null||i.abort()),this.isStreaming=!0,this.responseEl.classList.remove("empty"),this.responseEl.innerHTML='<span class="terminal-cursor"></span>';let s=[],a=null;const r=18,n=()=>{if(s.length===0)return;const o=s.shift(),c=this.responseEl.querySelector(".terminal-cursor"),h=document.createTextNode(o);c?this.responseEl.insertBefore(h,c):this.responseEl.appendChild(h)};a=setInterval(n,r),this.activeController=xe(e,o=>{for(const c of o)s.push(c)},()=>{const o=setInterval(()=>{if(s.length===0){clearInterval(o),clearInterval(a),this.isStreaming=!1;const c=this.responseEl.querySelector(".terminal-cursor");c&&c.remove(),this._onStreamComplete()}else n()},8)},o=>{clearInterval(a),this.isStreaming=!1;const c=this.responseEl.querySelector(".terminal-cursor");c&&c.remove(),this.responseEl.innerHTML+=`<span style="color:var(--data-alert)">// error: ${o.message}</span>`})}_onStreamComplete(){this.container.dispatchEvent(new CustomEvent("chat:done"))}reset(){var e;(e=this.activeController)==null||e.abort(),this.isStreaming=!1,this._render()}}function Ae(){const t=document.getElementById("agent"),e=ie.map((l,d)=>`
    <button
      class="chat-starter-btn"
      data-prompt="${F(l.prompt||l.label)}"
      data-index="${d}"
      type="button"
    >${F(l.label)}</button>
  `).join("");t.innerHTML=`
    <div class="agent-inner">
      <div class="section-label">Intelligence Agent</div>
      <div class="terminal-frame reveal">
        <div class="terminal-titlebar">
          <span class="terminal-title">◆ DELTA AGENT</span>
          <span class="terminal-subtitle">// trained on his work, decisions, and architecture choices</span>
        </div>
        <div class="terminal-body">
          <div class="terminal-intro">
Ask anything about his systems, architecture tradeoffs, or what he'd build next.<br>
Responses are generated by an AI agent trained on his technical work.
          </div>

          <div id="terminal-chat-output"></div>

          <div class="terminal-comment">// pick a question, or ask your own</div>
          <div class="chat-starters">
            ${e}
          </div>

          <form class="chat-input-wrap" id="chat-form" autocomplete="off">
            <input
              type="text"
              class="chat-input"
              id="chat-input"
              placeholder="Ask something..."
              autocomplete="off"
              spellcheck="false"
              maxlength="500"
            />
            <button type="submit" class="chat-submit-btn" id="chat-submit">Ask</button>
          </form>
        </div>
      </div>
    </div>
  `,L(".terminal-frame");const s=document.getElementById("terminal-chat-output"),a=new ke(s),r=document.getElementById("chat-form"),n=document.getElementById("chat-input"),i=document.getElementById("chat-submit"),o=t.querySelectorAll(".chat-starter-btn"),c=()=>{i.disabled=!0,o.forEach(l=>l.disabled=!0)},h=()=>{i.disabled=!1,o.forEach(l=>l.disabled=!1)},p=l=>{l.trim()&&(c(),n.value="",a.send(l))};s.addEventListener("chat:done",h),r.addEventListener("submit",l=>{l.preventDefault(),a.isStreaming||p(n.value)}),o.forEach(l=>{l.addEventListener("click",()=>{const d=l.dataset.prompt;if(!d){n.focus();return}p(d)})})}function F(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function G(){Me(),le(),pe(),ge(),ye(),we(),Ae(),Le(),Ce(),$e()}function Me(){const t=document.getElementById("nav"),e=te.map((s,a)=>`
    <li class="${s.label==="Ask my agent"?"nav-agent":""}">
      <a href="${s.href}" data-section="${s.href.slice(1)}">${s.label}</a>
    </li>
  `).join("");t.innerHTML=`
    <div class="nav-inner">
      <a href="#" class="nav-name">${b.name.toLowerCase().replace(" ",".")}</a>
      <nav aria-label="Primary navigation">
        <ul class="nav-links">
          ${e}
          <li>
            <a href="${b.github}" target="_blank" rel="noopener noreferrer" class="nav-github" aria-label="GitHub profile">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.03-.02-2.03-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  `}function Le(){const t=document.getElementById("footer");t.innerHTML=`
    <div class="footer-inner">
      <span class="footer-name">${b.name} // ${new Date().getFullYear()}</span>
      <div class="footer-links">
        <a href="${b.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="${b.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:${b.email}">Email</a>
      </div>
    </div>
  `}function Ce(){const t=document.getElementById("grid-canvas");if(t)try{new oe(t)}catch(e){console.warn("CharacterGrid init failed:",e)}}function $e(){const t=["experience","research","agent"],e=document.querySelectorAll(".nav-links a[data-section]"),s=new IntersectionObserver(a=>{a.forEach(r=>{r.isIntersecting&&e.forEach(n=>{n.classList.toggle("active",n.dataset.section===r.target.id)})})},{threshold:.3,rootMargin:"-56px 0px 0px 0px"});t.forEach(a=>{const r=document.getElementById(a);r&&s.observe(r)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",G):G();
