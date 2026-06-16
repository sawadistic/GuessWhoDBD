(() => {
  const STYLE_ID = 'dbd-exact-picked-effects-style-v8-transparent-trapper';
  if (!document.getElementById(STYLE_ID)) {
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
.dbdx-card-host{position:relative!important;overflow:hidden!important;isolation:isolate!important;}
.dbdx-overlay{position:absolute;inset:0;pointer-events:none;z-index:60;overflow:hidden;border-radius:inherit;}
.dbdx-canvas{position:absolute;left:0;top:0;width:290px;height:500px;transform-origin:0 0;pointer-events:none;}
.dbdx-full{position:absolute;inset:0;pointer-events:none;z-index:61;border-radius:inherit;overflow:hidden;}
.manual-elimination-clone.dbdx-card-host,.mass-elimination-swarm-card.dbdx-card-host{overflow:visible!important;contain:none!important;isolation:isolate!important;}
.manual-elimination-clone.dbdx-card-host>.dbdx-overlay,.manual-elimination-clone.dbdx-card-host>.dbdx-full,.mass-elimination-swarm-card.dbdx-card-host>.dbdx-overlay,.mass-elimination-swarm-card.dbdx-card-host>.dbdx-full{overflow:visible!important;}
.dbdx-p{position:absolute;left:145px;top:250px;width:8px;height:8px;border-radius:50%;background:var(--c,#fff);box-shadow:0 0 12px var(--c,#fff);opacity:0;}
.dbdx-flash{position:absolute;inset:0;background:white;opacity:0;z-index:80;mix-blend-mode:screen;}
.dbdx-slash{position:absolute;left:-35px;top:245px;width:360px;height:11px;border-radius:99px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.95),var(--c,#ff3b3b),transparent);filter:drop-shadow(0 0 14px var(--c,#ff3b3b));opacity:0;transform-origin:center;}
.dbdx-jaw{position:absolute;top:220px;width:180px;height:95px;opacity:0;filter:drop-shadow(0 14px 18px rgba(0,0,0,.55));z-index:15;}
.dbdx-jaw.left{left:-130px}.dbdx-jaw.right{right:-130px;transform:scaleX(-1)}
.dbdx-jaw:before{content:"";position:absolute;inset:0;clip-path:polygon(0 50%,14% 25%,26% 52%,38% 24%,50% 52%,62% 25%,74% 52%,86% 26%,100% 50%,100% 78%,0 78%);background:linear-gradient(180deg,#e7edf2,#30343a 70%,#121416);border:1px solid rgba(255,255,255,.2)}
.dbdx-bell{position:absolute;left:118px;top:120px;width:62px;height:70px;opacity:0;filter:drop-shadow(0 0 16px rgba(190,231,255,.45));}
.dbdx-bell:before{content:"";position:absolute;left:7px;top:8px;width:48px;height:50px;background:linear-gradient(180deg,#eef7ff,#748899 65%,#222a33);clip-path:polygon(28% 0,72% 0,86% 58%,100% 82%,0 82%,14% 58%);border-radius:46% 46% 40% 40%;box-shadow:inset 0 -10px 0 rgba(0,0,0,.28)}
.dbdx-smoke{position:absolute;border-radius:50%;background:radial-gradient(circle,rgba(50,50,50,.78),rgba(15,15,15,.32) 48%,transparent 72%);filter:blur(10px);opacity:0;}
.dbdx-ember{position:absolute;border-radius:50%;background:#ff8b32;box-shadow:0 0 10px rgba(255,139,50,.8);opacity:0;}
.dbdx-heat{position:absolute;width:2px;border-radius:99px;background:linear-gradient(180deg,transparent,rgba(255,210,132,.7),transparent);opacity:0;}
.dbdx-haze{position:absolute;inset:0;background:radial-gradient(circle at 50% 35%,rgba(210,240,255,.16),transparent 48%);opacity:0;filter:blur(12px);}
.dbdx-note{position:absolute;color:#f2f2f2;font-weight:1000;text-shadow:0 0 10px rgba(255,255,255,.8),0 0 18px rgba(160,210,255,.55);opacity:0;}
.dbdx-gas{position:absolute;border-radius:50%;background:radial-gradient(circle,rgba(255,124,214,.88),rgba(175,73,196,.48) 46%,transparent 72%);filter:blur(12px);opacity:0;mix-blend-mode:screen;}
.dbdx-bottle{position:absolute;width:28px;height:62px;border-radius:12px 12px 18px 18px;background:linear-gradient(180deg,#ffc4ec,#b356d3 56%,#6d278d);box-shadow:0 0 16px rgba(255,88,208,.5);opacity:0;}
.dbdx-laugh{position:absolute;color:#ffb0e7;font-weight:1000;letter-spacing:.04em;text-shadow:0 0 12px rgba(255,75,207,.8),0 2px 0 rgba(0,0,0,.8);opacity:0;}
.dbdx-melt-mask{position:absolute;left:0;right:0;bottom:-30px;height:230px;background:linear-gradient(180deg,transparent,rgba(255,96,205,.22),rgba(132,39,150,.48));filter:blur(10px);opacity:0;}
.dbdx-camera-frame{position:absolute;inset:28px;border:4px solid rgba(255,255,255,.92);box-shadow:0 0 0 999px rgba(0,0,0,.14);opacity:0;}
.dbdx-rec{position:absolute;top:10px;right:12px;display:flex;align-items:center;gap:8px;font-weight:1000;letter-spacing:1px;color:#ff4545;opacity:0;text-shadow:0 0 10px rgba(255,69,69,.55);font-family:ui-monospace,Menlo,Consolas,monospace;}
.dbdx-rec-dot{width:10px;height:10px;border-radius:50%;background:#ff4545;box-shadow:0 0 10px rgba(255,69,69,.85);}
.dbdx-timer{position:absolute;left:50%;top:42%;transform:translate(-50%,-50%);font-family:ui-monospace,Menlo,Consolas,monospace;color:#ff4747;font-size:40px;font-weight:1000;text-shadow:0 0 20px rgba(255,0,0,.7);opacity:0;}
.dbdx-dream{position:absolute;inset:0;background:radial-gradient(circle at 50% 40%,rgba(255,0,0,.36),rgba(110,0,0,.22) 45%,rgba(0,0,0,.55));opacity:0;mix-blend-mode:screen;}
.dbdx-ghost{position:absolute;inset:0;border-radius:inherit;background:rgba(165,235,255,.12);border:1px solid rgba(190,245,255,.45);box-shadow:0 0 18px rgba(130,220,255,.35);opacity:0;}
.dbdx-red-aura{position:absolute;inset:0;background:radial-gradient(circle at 50% 55%,rgba(255,60,60,.34),rgba(130,0,0,.2) 52%,transparent 75%);opacity:0;mix-blend-mode:screen;}
.dbdx-red-particle{position:absolute;border-radius:50%;opacity:0;background:#ff4040;box-shadow:0 0 10px #ff4040;}
.dbdx-red-ring{position:absolute;left:50%;top:50%;border:3px solid rgba(255,65,65,.8);border-radius:50%;opacity:0;transform:translate(-50%,-50%);}
.dbdx-harpoon-line{position:absolute;left:0;top:54%;height:5px;width:0;background:repeating-linear-gradient(90deg,#30251f 0 8px,#dad0bc 8px 14px,#30251f 14px 22px);box-shadow:0 0 12px rgba(0,0,0,.7);}
.dbdx-harpoon-head{position:absolute;left:-20px;top:54%;width:0;height:0;border-top:14px solid transparent;border-bottom:14px solid transparent;border-left:42px solid #d8d1be;filter:drop-shadow(0 0 8px rgba(255,255,255,.35));opacity:0;transform:translateY(-50%);}
.dbdx-impact{position:absolute;left:68%;top:46%;width:42px;height:42px;border-radius:50%;background:radial-gradient(circle,#fff,rgba(255,120,80,.72),transparent 70%);opacity:0;}
.dbdx-dash-blur{position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,136,34,.54),transparent);filter:blur(14px);opacity:0;}
.dbdx-orange-splatter{position:absolute;border-radius:50%;background:radial-gradient(circle,rgba(255,158,52,.94),rgba(224,82,18,.56) 58%,transparent 72%);opacity:0;filter:blur(.7px);}
.dbdx-neon-aura{position:absolute;inset:0;background:radial-gradient(circle,rgba(255,50,207,.38),rgba(58,172,255,.25) 44%,transparent 76%);opacity:0;mix-blend-mode:screen;}
.dbdx-eq{position:absolute;left:30px;right:30px;bottom:80px;height:70px;display:flex;align-items:end;gap:8px;opacity:0;}
.dbdx-eqbar{flex:1;background:linear-gradient(180deg,#ff4ed8,#54ddff);box-shadow:0 0 12px rgba(255,74,216,.72);border-radius:4px 4px 0 0;}
.dbdx-tentacle{position:absolute;left:-70px;top:230px;width:430px;height:26px;border-radius:999px;background:linear-gradient(90deg,#21364b,#80baff,#314e65);box-shadow:0 0 18px rgba(100,190,255,.52);opacity:0;}
.dbdx-virus{position:absolute;border-radius:50%;background:#80d7ff;box-shadow:0 0 16px rgba(128,215,255,.8);opacity:0;}

.dbdx-card-host.dbdx-hide-base > :not(.dbdx-overlay):not(.dbdx-full){opacity:0!important;}
.dbdx-card-host.dbdx-transparent-split-base{background:transparent!important;background-color:transparent!important;background-image:none!important;box-shadow:none!important;border-color:transparent!important;outline-color:transparent!important;}
.dbdx-slice{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;margin:0!important;pointer-events:none!important;z-index:62!important;border-radius:inherit!important;overflow:hidden!important;transform-origin:center!important;}
.dbdx-slice .dbdx-overlay,.dbdx-slice .dbdx-full,.dbdx-slice .restore-overlay{display:none!important;}
.dbdx-diag-cut{position:absolute;left:-20%;top:50%;width:140%;height:12px;border-radius:999px;background:linear-gradient(90deg,transparent,#fff,#ff3b3b,transparent);filter:drop-shadow(0 0 16px #ff3b3b);opacity:0;transform:rotate(-32deg);z-index:70;}
.dbdx-tvirus-layer{position:absolute;inset:0;background:radial-gradient(circle at 30% 30%,rgba(70,160,255,.38),transparent 24%),radial-gradient(circle at 68% 54%,rgba(58,130,255,.36),transparent 28%),linear-gradient(180deg,rgba(50,120,230,.14),rgba(18,74,170,.28));filter:blur(4px);opacity:0;mix-blend-mode:screen;}
.dbdx-virus-particle{position:absolute;border-radius:50%;opacity:0;background:rgba(145,220,255,.94);box-shadow:0 0 12px rgba(80,190,255,.65);}
.dbdx-tentacle-svg{position:absolute;inset:0;overflow:visible;opacity:0;z-index:66;}
.dbdx-impact-burst{position:absolute;left:58%;top:45%;width:34px;height:34px;transform:translate(-50%,-50%) scale(.2);border-radius:50%;background:radial-gradient(circle,#e7f9ff 0 8%,#8edcff 28%,rgba(69,133,255,.7) 48%,transparent 74%);opacity:0;filter:drop-shadow(0 0 12px rgba(110,200,255,.6));}
.dbdx-serum{position:absolute;left:134px;top:-96px;width:24px;height:86px;border-radius:14px 14px 22px 22px;background:linear-gradient(180deg,#fff3c1,#ff9d34 45%,#cc5b13);box-shadow:0 0 18px rgba(255,150,45,.85);opacity:0;z-index:68;}
.dbdx-electric{position:absolute;width:3px;height:96px;border-radius:999px;background:linear-gradient(180deg,transparent,rgba(206,133,255,.95),transparent);box-shadow:0 0 12px rgba(180,100,255,.9);opacity:0;transform-origin:center;}
.dbdx-hag-shadow{position:absolute;left:50%;bottom:42px;width:230px;height:64px;border-radius:50%;background:radial-gradient(ellipse at center,rgba(0,0,0,.86),rgba(25,25,28,.48) 48%,transparent 72%);filter:blur(2px);opacity:0;transform:translateX(-50%) scale(.55);}
.dbdx-claw{position:absolute;bottom:-60px;width:18px;height:105px;border-radius:999px 999px 18px 18px;background:linear-gradient(180deg,#d4d9df,#626972 58%,#1b1d20);box-shadow:0 0 12px rgba(210,220,230,.24);opacity:0;}
.dbdx-blood-orb{position:absolute;border-radius:50%;background:radial-gradient(circle at 38% 34%,#ffd2d2,#d11625 42%,#65060e 74%);box-shadow:0 0 18px rgba(210,20,32,.9);opacity:0;}
.dbdx-top-timer{position:absolute;left:50%;top:14px;transform:translateX(-50%);font-family:ui-monospace,Menlo,Consolas,monospace;color:#fff;font-size:32px;font-weight:1000;letter-spacing:.04em;padding:5px 12px;border-radius:10px;background:rgba(20,8,8,.42);border:1px solid rgba(255,220,220,.55);text-shadow:0 0 10px #fff,0 0 22px #ff2020,0 2px 0 #000;box-shadow:0 0 22px rgba(255,0,0,.48), inset 0 0 18px rgba(255,55,55,.18);opacity:0;z-index:75;}

@keyframes dbdxParticle{0%{opacity:0;transform:translate(0,0) scale(.35)}16%{opacity:1}100%{opacity:0;transform:translate(var(--dx),var(--dy)) rotate(var(--rot,120deg)) scale(.2)}}
@keyframes dbdxFlash{0%{opacity:0}15%{opacity:1}100%{opacity:0}}
@keyframes dbdxSlash{0%{opacity:0;transform:rotate(var(--a,-20deg)) scaleX(.05)}18%{opacity:1}58%{opacity:1;transform:rotate(var(--a,-20deg)) scaleX(1)}100%{opacity:0;transform:rotate(var(--a,-20deg)) scaleX(1.1) translateX(44px)}}
@keyframes dbdxJawL{0%{opacity:0;transform:translateX(-80px)}20%{opacity:1}100%{opacity:1;transform:translateX(78px)}}
@keyframes dbdxJawR{0%{opacity:0;transform:translateX(80px) scaleX(-1)}20%{opacity:1}100%{opacity:1;transform:translateX(-78px) scaleX(-1)}}
@keyframes dbdxSmokeRise{0%{opacity:0;transform:scale(.25) translateY(8px)}20%{opacity:.86}100%{opacity:0;transform:translate(var(--dx),-54px) scale(1.45)}}
@keyframes dbdxEmberFall{0%{opacity:0;transform:translateY(-4px) scale(.4)}13%{opacity:1}100%{opacity:0;transform:translate(var(--dx),28px) scale(.15)}}
@keyframes dbdxHeatWaver{0%{opacity:0;transform:translateY(-4px) skewX(-10deg) scaleY(.3)}35%{opacity:.75}100%{opacity:0;transform:translateY(36px) skewX(18deg) scaleY(1.4)}}
`; document.head.appendChild(style);
  }

  const wait = ms => new Promise(r => setTimeout(r, ms));
  function setup(cardEl, color='#d8dde3'){
    if(!cardEl) throw new Error('Missing card element');
    cardEl.classList.add('dbdx-card-host');
    cardEl.querySelectorAll(':scope > .dbdx-overlay,:scope > .dbdx-full').forEach(x=>x.remove());
    const overlay=document.createElement('div'); overlay.className='dbdx-overlay';
    const canvas=document.createElement('div'); canvas.className='dbdx-canvas';
    const full=document.createElement('div'); full.className='dbdx-full';
    overlay.appendChild(canvas); cardEl.append(overlay, full);
    const rect=cardEl.getBoundingClientRect();
    canvas.style.transform=`scale(${Math.max(rect.width,1)/290}, ${Math.max(rect.height,1)/500})`;
    canvas.style.setProperty('--c', color); full.style.setProperty('--c', color);
    return {card:cardEl, canvas, full, color, cleanup(ms=1700){setTimeout(()=>{overlay.remove();full.remove();cardEl.classList.remove('dbdx-hide-base','dbdx-transparent-split-base');}, ms)}};
  }
  function el(ctx, cls='', parent='canvas') { const d=document.createElement('div'); if(cls)d.className=cls; (parent==='full'?ctx.full:ctx.canvas).appendChild(d); return d; }
  function flash(ctx, color='rgba(255,255,255,.7)', dur=320){ const f=el(ctx,'dbdx-flash','full'); f.style.background=color; f.style.animation=`dbdxFlash ${dur}ms ease-out forwards`; return f; }
  function shakeCard(ctx, strength=7, dur=420, reps=1){ const frames=[{transform:'translate(0,0)'},{transform:`translate(${-strength}px,${Math.round(strength*.5)}px)`},{transform:`translate(${strength}px,${-Math.round(strength*.4)}px)`},{transform:`translate(${-Math.round(strength*.6)}px,${Math.round(strength*.25)}px)`},{transform:'translate(0,0)'}]; ctx.card.animate(frames,{duration:dur,iterations:reps,easing:'ease-in-out'}); }
  function slash(ctx, angle=-22, color=ctx.color, top=245, delay=0){ const s=el(ctx,'dbdx-slash'); s.style.top=top+'px'; s.style.setProperty('--c', color); s.style.setProperty('--a', angle+'deg'); s.style.animation=`dbdxSlash 650ms cubic-bezier(.18,.84,.22,1) ${delay}ms forwards`; return s; }
  function particles(ctx,{count=24,color=ctx.color,x=145,y=250,spreadX=230,spreadY=230,size=[4,10],life=820,delay=0,shape='50%',up=false}={}){ for(let i=0;i<count;i++){ const p=el(ctx,'dbdx-p'); const s=size[0]+Math.random()*(size[1]-size[0]); const dx=(Math.random()-.5)*spreadX; const dy=up ? -(60+Math.random()*spreadY) : (Math.random()-.5)*spreadY; p.style.cssText += `;left:${x}px;top:${y}px;width:${s}px;height:${s}px;border-radius:${shape};--c:${color};--dx:${dx}px;--dy:${dy}px;--rot:${Math.random()*420-210}deg;animation:dbdxParticle ${life+Math.random()*260}ms ease-out ${delay+i*8}ms forwards;`; }}
  function fadeCard(ctx, ms=700, filter='brightness(.45) blur(2px)'){ ctx.card.animate([{opacity:1,filter:'none'},{opacity:0,filter}],{duration:ms,fill:'forwards',easing:'ease'}); }
  function moveFade(ctx, frames, opts){ ctx.card.animate(frames, Object.assign({fill:'forwards',easing:'ease'}, opts||{})); }
  function ghostClone(ctx, dx, dy, color='rgba(165,235,255,.16)', dur=900){ const g=el(ctx,'dbdx-ghost','full'); g.style.background=color; g.animate([{opacity:.0,transform:'translate(0,0)'},{opacity:.55,transform:`translate(${dx*.45}px,${dy*.45}px)`},{opacity:0,transform:`translate(${dx}px,${dy}px)`}],{duration:dur,fill:'forwards',easing:'ease'}); return g; }
  function screenFxRoot(z=2147483000){ const root=document.createElement('div'); root.className='dbdx-screen-fx'; root.style.cssText=`position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:${z};`; document.body.appendChild(root); return root; }
  function cleanupRoot(root,ms=1700){ setTimeout(()=>{ try{ root.remove(); }catch(e){} }, ms); }

  function cardSlice(ctx, clipPath){
    const c = ctx.card.cloneNode(true);
    c.querySelectorAll('.dbdx-overlay,.dbdx-full').forEach(n=>n.remove());
    c.removeAttribute('id');
    c.classList.remove('dbdx-card-host','dbdx-hide-base','dbdx-transparent-split-base');
    c.classList.add('dbdx-slice');
    c.style.clipPath = clipPath;
    ctx.full.appendChild(c);
    return c;
  }
  function diagonalSplit(ctx){
    ctx.card.classList.add('dbdx-hide-base');
    const top = cardSlice(ctx, 'polygon(0 0,100% 0,100% 28%,0 72%)');
    const bottom = cardSlice(ctx, 'polygon(0 72%,100% 28%,100% 100%,0 100%)');
     
     
    setTimeout(()=>ctx.card.classList.add('dbdx-transparent-split-base'), 190);
    top.animate([
      {opacity:1,transform:'translate(0,0) rotate(0deg)',filter:'none'},
      {opacity:.94,transform:'translate(-4%,-2.5%) rotate(-2.6deg)',filter:'brightness(.97)',offset:.24},
      {opacity:.78,transform:'translate(-13%,-8%) rotate(-8deg)',filter:'brightness(.85)',offset:.50},
      {opacity:0,transform:'translate(-45%,-26%) rotate(-18deg)',filter:'blur(4px) brightness(.5)'}
    ],{duration:920,fill:'forwards',easing:'cubic-bezier(.18,.84,.22,1)'});
    bottom.animate([
      {opacity:1,transform:'translate(0,0) rotate(0deg)',filter:'none'},
      {opacity:.94,transform:'translate(4%,2.5%) rotate(2.6deg)',filter:'brightness(.97)',offset:.24},
      {opacity:.78,transform:'translate(12%,9%) rotate(8deg)',filter:'brightness(.85)',offset:.50},
      {opacity:0,transform:'translate(46%,30%) rotate(18deg)',filter:'blur(4px) brightness(.45)'}
    ],{duration:920,fill:'forwards',easing:'cubic-bezier(.18,.84,.22,1)'});
  }
  function makeTentacle(ctx, pathD, duration=460, width=14){
    const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('viewBox','0 0 290 500'); svg.setAttribute('class','dbdx-tentacle-svg');
    const defs=document.createElementNS('http://www.w3.org/2000/svg','defs');
    const grad=document.createElementNS('http://www.w3.org/2000/svg','linearGradient');
    const gid='tent'+Math.random().toString(36).slice(2);
    grad.setAttribute('id',gid); grad.setAttribute('x1','0%'); grad.setAttribute('y1','0%'); grad.setAttribute('x2','100%'); grad.setAttribute('y2','0%');
    [['0%','#3c5c7c'],['55%','#79b1ff'],['100%','#23354a']].forEach(([o,c])=>{const s=document.createElementNS('http://www.w3.org/2000/svg','stop'); s.setAttribute('offset',o); s.setAttribute('stop-color',c); grad.appendChild(s);});
    defs.appendChild(grad); svg.appendChild(defs);
    const glow=document.createElementNS('http://www.w3.org/2000/svg','path');
    glow.setAttribute('d',pathD); glow.setAttribute('fill','none'); glow.setAttribute('stroke','#8fd6ff'); glow.setAttribute('stroke-width',String(width+7)); glow.setAttribute('stroke-linecap','round'); glow.setAttribute('stroke-linejoin','round'); glow.setAttribute('opacity','.20');
    const path=document.createElementNS('http://www.w3.org/2000/svg','path');
    path.setAttribute('d',pathD); path.setAttribute('fill','none'); path.setAttribute('stroke',`url(#${gid})`); path.setAttribute('stroke-width',String(width)); path.setAttribute('stroke-linecap','round'); path.setAttribute('stroke-linejoin','round');
    svg.append(glow,path); ctx.canvas.appendChild(svg);
    svg.animate([{opacity:0},{opacity:1,offset:.15},{opacity:1,offset:.78},{opacity:0}],{duration:duration+190,fill:'forwards'});
    const len=path.getTotalLength();
    [path,glow].forEach(p=>{p.style.strokeDasharray=len; p.style.strokeDashoffset=len; p.getBoundingClientRect(); p.animate([{strokeDashoffset:len},{strokeDashoffset:0}],{duration,fill:'forwards',easing:'ease-out'});});
  }
  function virusSpread(ctx,{count=20,layer=1,delay=0}={}){
    const v=el(ctx,'dbdx-tvirus-layer','full');
    v.animate([{opacity:0,filter:'blur(10px)'},{opacity:.82*layer,filter:'blur(3px)'},{opacity:1*layer,filter:'blur(1px)'}],{duration:820,delay,fill:'forwards'});
    for(let i=0;i<count;i++){
      const p=el(ctx,'dbdx-virus-particle'); const s=4+Math.random()*9;
      p.style.width=s+'px'; p.style.height=s+'px'; p.style.left=(Math.random()*265)+'px'; p.style.top=(Math.random()*430)+'px';
      p.style.background=['rgba(210,245,255,.96)','rgba(145,220,255,.94)','rgba(90,176,255,.9)'][i%3];
      p.style.boxShadow=`0 0 ${6+Math.random()*8}px ${['rgba(180,235,255,.65)','rgba(90,190,255,.62)','rgba(50,135,255,.52)'][i%3]}`;
      const dx=(Math.random()-.5)*210, dy=(Math.random()-.5)*210;
      p.animate([{opacity:0,transform:'scale(.4)'},{opacity:.92,transform:`translate(${dx*.35}px,${dy*.35}px) scale(1)`},{opacity:0,transform:`translate(${dx}px,${dy}px) scale(.25)`}],{duration:760+Math.random()*220,delay:delay+80+i*12,fill:'forwards'});
    }
  }
  function impactBurst(ctx,x='58%',y='45%',size=34){
    const b=el(ctx,'dbdx-impact-burst'); b.style.left=x; b.style.top=y; b.style.width=size+'px'; b.style.height=size+'px';
    b.animate([{opacity:0,transform:'translate(-50%,-50%) scale(.2)'},{opacity:1,transform:'translate(-50%,-50%) scale(1.3)'},{opacity:0,transform:'translate(-50%,-50%) scale(1.8)'}],{duration:320,fill:'forwards'});
  }

    window.playWraithEmberVeil = async function(cardEl){
    const ctx=setup(cardEl,'#ff8b32');
    const bell=el(ctx,'dbdx-bell');
    bell.style.transformOrigin='50% 10%';
    bell.animate([
      {opacity:0,transform:'translateX(0) rotate(-34deg) scale(.82)'},
      {opacity:1,transform:'translateX(-6px) rotate(-26deg) scale(1)',offset:.18},
      {opacity:1,transform:'translateX(7px) rotate(26deg) scale(1)',offset:.38},
      {opacity:1,transform:'translateX(-5px) rotate(-18deg) scale(1)',offset:.56},
      {opacity:1,transform:'translateX(4px) rotate(16deg) scale(.98)',offset:.74},
      {opacity:.92,transform:'translateX(-2px) rotate(-8deg) scale(.96)',offset:.88},
      {opacity:0,transform:'translateX(0) rotate(0deg) scale(.92)'}
    ],{duration:1180,fill:'forwards',easing:'ease-in-out'});
    for(let i=0;i<32;i++){
      const s=el(ctx,'dbdx-smoke');
      const prog=i/31;
      const sz=28+Math.random()*58;
      s.style.cssText += `;left:${20+Math.random()*240}px;top:${prog*430}px;width:${sz}px;height:${sz}px;--dx:${(Math.random()-.5)*70}px;animation:dbdxSmokeRise 1080ms ease-out ${350+prog*1050+Math.random()*120}ms forwards;`;
    }
    for(let i=0;i<46;i++){
      const e=el(ctx,'dbdx-ember');
      const prog=i/45;
      const s=2+Math.random()*5;
      e.style.cssText += `;left:${25+Math.random()*235}px;top:${prog*450}px;width:${s}px;height:${s}px;--dx:${(Math.random()-.5)*84}px;animation:dbdxEmberFall 920ms cubic-bezier(.15,.65,.1,1) ${420+prog*1000+Math.random()*100}ms forwards;`;
    }
    for(let i=0;i<16;i++){
      const h=el(ctx,'dbdx-heat');
      const prog=i/15;
      h.style.cssText += `;left:${25+Math.random()*240}px;top:${prog*440}px;height:${18+Math.random()*42}px;animation:dbdxHeatWaver 800ms ease-out ${440+prog*950+Math.random()*100}ms forwards;`;
    }
    const haze=el(ctx,'dbdx-haze','full');
    haze.animate([{opacity:0},{opacity:.55},{opacity:.16}],{duration:1800,delay:700,fill:'forwards'});
    ctx.card.animate([
      {opacity:1,filter:'none',clipPath:'inset(0 0 0 0)'},
      {opacity:0,filter:'grayscale(1) contrast(1.8) brightness(.45) blur(2px)',clipPath:'inset(100% 0 0 0)'}
    ],{duration:1720,delay:340,fill:'forwards',easing:'cubic-bezier(.62,0,.1,1)'});
    ctx.cleanup(2600);
    await wait(2150);
  };
    window.playNurseTeleportSmear = async function(cardEl){ const ctx=setup(cardEl,'#cfe8ff'); flash(ctx,'rgba(207,232,255,.45)',480); for(let i=0;i<3;i++) ghostClone(ctx,60+i*42,0,'rgba(207,232,255,.18)',840); moveFade(ctx,[{opacity:1,transform:'scaleX(1) translateX(0)',filter:'none'},{opacity:.75,transform:'scaleX(1.34) translateX(-20px)',filter:'blur(3px) brightness(1.25)',offset:.22},{opacity:.55,transform:'scaleX(1.78) translateX(32px)',filter:'blur(7px) brightness(1.35)',offset:.48},{opacity:0,transform:'scaleX(2.25) translateX(120px)',filter:'blur(12px) brightness(1.5)'}],{duration:1000,easing:'cubic-bezier(.18,.82,.2,1)'}); ctx.cleanup(); await wait(1060); };  window.playDoctorHallucinationCopies = async function(cardEl){
    const root=screenRoot();
    const wash=document.createElement('div');
    wash.style.cssText='position:absolute;inset:0;opacity:0;background:radial-gradient(circle at 50% 50%, rgba(190,125,255,.12), rgba(95,215,255,.10) 34%, rgba(28,10,58,.30) 74%, rgba(0,0,0,.56) 100%);backdrop-filter:saturate(.92) blur(1.5px);';
    root.appendChild(wash);
    wash.animate([{opacity:0},{opacity:.95,offset:.18},{opacity:.68,offset:.64},{opacity:0}],{duration:1480,fill:'forwards'});
    for(let i=0;i<10;i++){
      const band=document.createElement('div');
      band.style.cssText=`position:absolute;left:${-10+Math.random()*20}%;top:${6+Math.random()*80}%;width:${88+Math.random()*24}%;height:${8+Math.random()*18}%;opacity:0;border-radius:999px;background:linear-gradient(90deg, rgba(0,0,0,0), rgba(${i%2?'174,114,255':'105,224,255'},.28), rgba(0,0,0,0));filter:blur(${8+Math.random()*8}px);transform:rotate(${Math.random()*12-6}deg)`;
      root.appendChild(band);
      band.animate([{opacity:0,transform:`rotate(${Math.random()*12-6}deg) translateX(-2%) scaleX(.75)`},{opacity:.55,transform:`rotate(${Math.random()*12-6}deg) translateX(2%) scaleX(1)`,offset:.35},{opacity:0,transform:`rotate(${Math.random()*12-6}deg) translateX(7%) scaleX(1.08)`}],{duration:1100+Math.random()*180,delay:i*80,fill:'forwards'});
    }
    cleanupRoot(root,1700);
    const ctx=setup(cardEl,'#b066ff');
    flash(ctx,'rgba(196,148,255,.16)',150);
    const offsets=[[-120,-46],[-98,24],[-84,58],[-62,-82],[-46,12],[-18,76],[20,-54],[46,44],[72,-24],[92,30],[118,-8],[0,-102],[0,96],[-132,2],[132,10]];
    offsets.forEach(([dx,dy],i)=>{
      const g=ghostClone(ctx,dx,dy,i%2?'rgba(178,105,255,.24)':'rgba(92,215,255,.15)',1080+i*22);
      g.style.mixBlendMode='screen';
      g.style.filter=`hue-rotate(${(i%5)*34}deg) blur(${1+i%3}px) brightness(1.1)`;
      g.animate([{opacity:0,transform:'translate(0,0) scale(.98)'},{opacity:.64,transform:`translate(${dx*.18}px,${dy*.18}px) scale(1.02)`,offset:.16},{opacity:.38,transform:`translate(${dx*.58}px,${dy*.58}px) scale(1.01)`,offset:.48},{opacity:0,transform:`translate(${dx}px,${dy}px) scale(.94)`}],{duration:1160+i*18,delay:i*18,fill:'forwards',easing:'ease-out'});
    });
    for(let i=0;i<24;i++){
      const e=el(ctx,'dbdx-electric');
      const rot=Math.random()*130-65;
      e.style.left=(6+Math.random()*278)+'px'; e.style.top=(6+Math.random()*430)+'px'; e.style.height=(78+Math.random()*150)+'px';
      e.style.background=i%2?'linear-gradient(180deg,transparent,rgba(99,220,255,.48),rgba(200,120,255,.48),transparent)':'linear-gradient(180deg,transparent,rgba(240,245,255,.54),rgba(176,96,255,.52),transparent)';
      e.style.transform=`rotate(${rot}deg) scaleY(.12)`;
      e.animate([{opacity:0,transform:`rotate(${rot}deg) scaleY(.12)`},{opacity:.56,transform:`rotate(${rot+8}deg) scaleY(1)`,offset:.32},{opacity:.2,transform:`rotate(${rot-8}deg) scaleY(.58)`,offset:.58},{opacity:0,transform:`rotate(${rot-12}deg) scaleY(.25)`}],{duration:440+Math.random()*260,delay:i*28,fill:'forwards',easing:'ease-out'});
    }
    shakeCard(ctx,4,90,8);
    particles(ctx,{count:30,color:'#bf7cff',x:145,y:245,spreadX:300,spreadY:260,size:[3,9],life:880});
    particles(ctx,{count:16,color:'#7de1ff',x:145,y:245,spreadX:280,spreadY:240,size:[2,8],life:760,delay:60});
    await wait(180);
    ctx.card.animate([{opacity:1,filter:'none',transform:'translate(0,0) scale(1)'},{opacity:.95,filter:'hue-rotate(24deg) brightness(1.06)',transform:'translate(-2%,1%) scale(1.01)',offset:.14},{opacity:.72,filter:'hue-rotate(55deg) brightness(.94) blur(1.4px)',transform:'translate(3%,-1%) scale(1.02)',offset:.32},{opacity:.88,filter:'hue-rotate(-10deg) brightness(1.12)',transform:'translate(-1%,2%) scale(1)',offset:.46},{opacity:.46,filter:'hue-rotate(65deg) blur(3px) brightness(.7)',transform:'translate(6%,-2%) scale(.98)',offset:.7},{opacity:0,filter:'hue-rotate(65deg) blur(6px) brightness(.42)',transform:'translate(10%,-1%) scale(.94)'}],{duration:1180,fill:'forwards',easing:'ease-out'});
    ctx.cleanup(2100); await wait(1260);
  };
    window.playClownFastPopThrow = async function(cardEl){
    const ctx=setup(cardEl,'#ff78d2');
    const b=el(ctx,'dbdx-bottle');
    b.style.left='-70px'; b.style.top='120px';
    b.animate([
      {opacity:0,transform:'translate(0,0) rotate(-25deg) scale(.8)'},
      {opacity:1,transform:'translate(228px,86px) rotate(38deg) scale(1)'},
      {opacity:0,transform:'translate(246px,104px) rotate(52deg) scale(.82)'}
    ],{duration:520,fill:'forwards',easing:'ease-out'});

     
    const root=screenRoot();
    const wash=document.createElement('div');
    wash.style.cssText='position:absolute;inset:0;opacity:0;background:radial-gradient(circle at 50% 50%, rgba(255,125,220,.10), rgba(255,95,207,.06) 34%, rgba(115,20,84,.04) 62%, transparent 84%);mix-blend-mode:screen;';
    root.appendChild(wash);
    wash.animate([{opacity:0},{opacity:.75,offset:.34},{opacity:.52,offset:.68},{opacity:0}],{duration:1700,delay:420,fill:'forwards'});
    for(let i=0;i<6;i++){
      const cloud=document.createElement('div');
      const w=220+Math.random()*280, h=160+Math.random()*180;
      const l=-40+Math.random()*(window.innerWidth*0.75||900), t=40+Math.random()*(window.innerHeight*0.55||500);
      cloud.style.cssText=`position:absolute;left:${l}px;top:${t}px;width:${w}px;height:${h}px;border-radius:50%;opacity:0;background:radial-gradient(ellipse at center, rgba(255,115,214,.18), rgba(255,95,207,.10) 42%, rgba(90,18,70,.05) 70%, transparent 78%);filter:blur(${22+Math.random()*22}px);mix-blend-mode:screen;`;
      root.appendChild(cloud);
      const dx=(Math.random()-.5)*120, dy=(Math.random()-.5)*80;
      cloud.animate([
        {opacity:0,transform:'scale(.72)'},
        {opacity:.56,transform:`translate(${dx*.35}px,${dy*.35}px) scale(1)`,offset:.34},
        {opacity:.28,transform:`translate(${dx}px,${dy}px) scale(1.16)`,offset:.72},
        {opacity:0,transform:`translate(${dx*1.15}px,${dy*1.15}px) scale(1.22)`}
      ],{duration:1500+Math.random()*260,delay:430+i*60,fill:'forwards',easing:'ease-out'});
    }
    cleanupRoot(root,2400);

    await wait(430);
    flash(ctx,'rgba(255,95,207,.48)',260);
    for(let i=0;i<12;i++){
      const g=el(ctx,'dbdx-gas');
      const s=85+Math.random()*140;
      g.style.width=s+'px'; g.style.height=s+'px';
      g.style.left=(Math.random()*245-10)+'px'; g.style.top=(Math.random()*390)+'px';
      g.style.animation='none';
      g.animate([
        {opacity:0,transform:'scale(.35)'},
        {opacity:.92,transform:'scale(1.02)',offset:.35},
        {opacity:.38,transform:'scale(1.35)'}
      ],{duration:980+Math.random()*260,fill:'forwards',easing:'ease-out'});
    }

    await wait(40);
    [['HA',48,96,0,30],['HA',182,146,100,34],['HA',86,252,210,30]].forEach(([txt,left,top,delay,size])=>{
      const l=el(ctx,'dbdx-laugh');
      l.textContent=txt;
      l.style.left=left+'px'; l.style.top=top+'px'; l.style.fontSize=size+'px';
      l.animate([
        {opacity:0,transform:'translateY(16px) scale(.65) rotate(-6deg)'},
        {opacity:1,transform:'translateY(0) scale(1) rotate(4deg)',offset:.28},
        {opacity:1,transform:'translateY(-4px) scale(1.03) rotate(-3deg)',offset:.7},
        {opacity:0,transform:'translateY(-32px) scale(1.12) rotate(5deg)'}
      ],{duration:950,delay,fill:'forwards',easing:'ease-out'});
    });

     
    const ghostA=ctx.card.cloneNode(true); ghostA.removeAttribute('id');
    ghostA.querySelectorAll?.('.dbdx-overlay,.dbdx-full,.dbdx-v15-overlay,.dbdx-v15-full,.dbdx-k6-overlay,.dbdx-k6-full').forEach(n=>n.remove());
    ghostA.style.cssText='position:absolute;inset:0;pointer-events:none;opacity:0;mix-blend-mode:screen;filter:blur(3px) hue-rotate(300deg) saturate(1.35);z-index:40;border-radius:inherit;';
    ctx.full.appendChild(ghostA);
    ghostA.animate([
      {opacity:0,transform:'translateX(0) scale(1)'},
      {opacity:0,transform:'translateX(0) scale(1)',offset:.28},
      {opacity:.32,transform:'translateX(12px) rotate(5deg) scale(1.02)',offset:.46},
      {opacity:.24,transform:'translateX(-14px) rotate(-6deg) scale(1.04)',offset:.66},
      {opacity:.10,transform:'translateX(10px) rotate(4deg) scale(1.06)',offset:.84},
      {opacity:0,transform:'translateX(0) rotate(0deg) scale(1.07)'}
    ],{duration:1540,fill:'forwards',easing:'ease-out'});
    const ghostB=ctx.card.cloneNode(true); ghostB.removeAttribute('id');
    ghostB.querySelectorAll?.('.dbdx-overlay,.dbdx-full,.dbdx-v15-overlay,.dbdx-v15-full,.dbdx-k6-overlay,.dbdx-k6-full').forEach(n=>n.remove());
    ghostB.style.cssText='position:absolute;inset:0;pointer-events:none;opacity:0;mix-blend-mode:screen;filter:blur(5px) hue-rotate(315deg) saturate(1.45);z-index:39;border-radius:inherit;';
    ctx.full.appendChild(ghostB);
    ghostB.animate([
      {opacity:0,transform:'translateX(0) scale(1)'},
      {opacity:0,transform:'translateX(0) scale(1)',offset:.34},
      {opacity:.18,transform:'translateX(-16px) rotate(-6deg) scale(1.05)',offset:.52},
      {opacity:.14,transform:'translateX(16px) rotate(6deg) scale(1.08)',offset:.74},
      {opacity:0,transform:'translateX(0) rotate(0deg) scale(1.1)'}
    ],{duration:1500,fill:'forwards',easing:'ease-out'});

    moveFade(ctx,[
      {transform:'translateX(0) rotate(0deg) skewX(0deg) translateY(0) scale(1,1)',opacity:1,filter:'none'},
      {transform:'translateX(8px) rotate(7deg) skewX(0deg) translateY(0) scale(1.015,1)',opacity:1,filter:'none',offset:.12},
      {transform:'translateX(-9px) rotate(-8deg) skewX(0deg) translateY(0) scale(1.017,1)',opacity:1,filter:'none',offset:.24},
      {transform:'translateX(8px) rotate(7deg) skewX(0deg) translateY(0) scale(1.015,1)',opacity:1,filter:'none',offset:.36},
      {transform:'translateX(-10px) rotate(-9deg) skewX(3deg) translateY(18px) scale(1.02,.98)',opacity:.92,filter:'blur(1.4px) hue-rotate(300deg) saturate(1.18) contrast(1.08)',offset:.48},
      {transform:'translateX(8px) rotate(8deg) skewX(6deg) translateY(56px) scale(1.05,.88)',opacity:.72,filter:'blur(2.6px) hue-rotate(300deg) saturate(1.28) contrast(1.14)',offset:.64},
      {transform:'translateX(-7px) rotate(-8deg) skewX(9deg) translateY(104px) scale(1.10,.66)',opacity:.38,filter:'blur(4px) hue-rotate(305deg) saturate(1.40) contrast(1.22)',offset:.82},
      {transform:'translateX(4px) rotate(5deg) skewX(10deg) translateY(146px) scale(1.15,.38)',opacity:.10,filter:'blur(5.4px) hue-rotate(310deg) saturate(1.46) contrast(1.26)',offset:.93},
      {transform:'translateX(0) rotate(0deg) skewX(10deg) translateY(162px) scale(1.18,.16)',opacity:0,filter:'blur(6px) hue-rotate(310deg) saturate(1.42) contrast(1.24)'}
    ],{duration:1540,easing:'ease-in-out'});

    await wait(320);
    const melt=el(ctx,'dbdx-melt-mask');
    melt.animate([
      {opacity:0,transform:'translateY(0) scaleY(.20) scaleX(.94)',filter:'blur(1px)'},
      {opacity:.96,transform:'translateY(-22px) scaleY(1.08) scaleX(1.05)',filter:'blur(2px)',offset:.22},
      {opacity:.82,transform:'translateY(6px) scaleY(1.26) scaleX(1.12)',filter:'blur(3px)',offset:.48},
      {opacity:.28,transform:'translateY(26px) scaleY(1.36) scaleX(1.20)',filter:'blur(4px)',offset:.76},
      {opacity:0,transform:'translateY(36px) scaleY(1.40) scaleX(1.24)',filter:'blur(5px)'}
    ],{duration:980,fill:'forwards',easing:'ease-out'});

    ctx.cleanup(2450);
    await wait(1640);
  };
  window.playSpiritPhaseSplit = async function(cardEl){
    const ctx=setup(cardEl,'#79dbff');
    const offsets=[[-92,-34],[-78,28],[-56,-12],[-36,44],[-18,-66],[22,18],[52,-26],[76,30],[104,-8],[0,72],[0,-94]];
    offsets.forEach(([dx,dy],i)=>{
      const g=ghostClone(ctx,dx,dy,i%2?'rgba(120,220,255,.22)':'rgba(170,240,255,.15)',1080+i*26);
      g.style.filter=`hue-rotate(${170+i*4}deg) blur(${1+i%3}px) brightness(1.08)`;
      g.style.mixBlendMode='screen';
      g.animate([
        {opacity:0,transform:'translate(0,0) scale(.98)'},
        {opacity:.72,transform:`translate(${dx*.24}px,${dy*.24}px) scale(1.02)`,offset:.20},
        {opacity:.34,transform:`translate(${dx*.62}px,${dy*.62}px) scale(1.01)`,offset:.52},
        {opacity:0,transform:`translate(${dx}px,${dy}px) scale(.94)`}
      ],{duration:1040+i*24,delay:i*16,fill:'forwards',easing:'ease-out'});
    });
    flash(ctx,'rgba(120,220,255,.24)',220);
    for(let i=0;i<8;i++){
      const streak=el(ctx,'','canvas');
      streak.style.cssText=`position:absolute;left:${28+Math.random()*220}px;top:${28+Math.random()*380}px;width:${2+Math.random()*3}px;height:${70+Math.random()*130}px;border-radius:999px;background:linear-gradient(180deg,transparent,rgba(135,235,255,.85),transparent);filter:blur(${1+Math.random()*1.5}px);opacity:0;transform:rotate(${Math.random()*40-20}deg);`;
      streak.animate([{opacity:0,transform:'scaleY(.2)'},{opacity:.8,transform:'scaleY(1)',offset:.35},{opacity:0,transform:'scaleY(.3)'}],{duration:520+Math.random()*220,delay:i*60,fill:'forwards'});
    }
    await wait(220);
    ctx.card.animate([
      {opacity:1,filter:'none',transform:'translateX(0) scale(1)'},
      {opacity:.10,filter:'hue-rotate(190deg) blur(7px) brightness(1.2)',transform:'translateX(-12%) scale(.97)',offset:.22},
      {opacity:.82,filter:'hue-rotate(180deg) blur(1px) brightness(1.05)',transform:'translateX(6%) scale(1.01)',offset:.38},
      {opacity:.28,filter:'hue-rotate(190deg) blur(4px) brightness(.78)',transform:'translateX(-4%) scale(.99)',offset:.62},
      {opacity:0,filter:'hue-rotate(190deg) blur(6px) brightness(.55)',transform:'translateX(18%) scale(.95)'}
    ],{duration:1180,fill:'forwards',easing:'ease'});
    particles(ctx,{count:26,color:'#9aeaff',x:145,y:245,spreadX:270,spreadY:230,size:[3,8],life:880});
    ctx.cleanup(1900);
    await wait(1220);
  };
          window.playDeathslingerHardImpactReel = async function(cardEl){
    const ctx=setup(cardEl,'#d8c28c');
    const scope=el(ctx,'','full');
    scope.style.cssText='position:absolute;left:50%;top:46%;width:180px;height:180px;margin-left:-90px;margin-top:-90px;border-radius:50%;opacity:0;border:2px solid rgba(240,220,180,.72);box-shadow:0 0 20px rgba(240,220,180,.22), inset 0 0 20px rgba(240,220,180,.10);';
    const h=el(ctx,'','full'); h.style.cssText='position:absolute;left:50%;top:46%;width:200px;height:2px;margin-left:-100px;background:rgba(240,220,180,.66);opacity:0;';
    const v=el(ctx,'','full'); v.style.cssText='position:absolute;left:50%;top:46%;width:2px;height:200px;margin-top:-100px;background:rgba(240,220,180,.66);opacity:0;';
    [scope,h,v].forEach(x=>x.animate([{opacity:0,transform:'scale(.82)'},{opacity:1,transform:'scale(1)',offset:.3},{opacity:.26,transform:'scale(1.02)'}],{duration:360,fill:'forwards'}));
    const line=el(ctx,'dbdx-harpoon-line'); const head=el(ctx,'dbdx-harpoon-head'); line.style.opacity='1'; line.style.top='42%'; head.style.top='42%';
    await wait(180);
    flash(ctx,'rgba(255,235,190,.58)',120);
    shakeCard(ctx,11,150,2);
    line.animate([{width:'0px'},{width:'220px'}],{duration:220,fill:'forwards'});
    head.animate([{opacity:0,left:'-24px'},{opacity:1,left:'196px'},{opacity:1,left:'196px'}],{duration:220,fill:'forwards'});
    impactBurst(ctx,'68%','42%',26); particles(ctx,{count:28,color:'rgba(216,194,140,.9)',x:198,y:208,spreadX:150,spreadY:150,size:[3,7],life:780,shape:'2px'});
    await wait(220);
    for(let i=0;i<4;i++){ const wh=el(ctx,'','full'); wh.style.cssText=`position:absolute;left:${40+i*24}px;top:${210+i*4}px;width:${130+i*10}px;height:12px;border-radius:99px;opacity:0;background:linear-gradient(90deg, transparent, rgba(255,255,255,.7), rgba(150,120,70,.85), transparent);filter:blur(6px);transform:rotate(${-10+i*2}deg);`; wh.animate([{opacity:0,transform:`rotate(${-10+i*2}deg) translateX(-16px) scaleX(.2)`},{opacity:.88,transform:`rotate(${-10+i*2}deg) translateX(0) scaleX(1)`},{opacity:0,transform:`rotate(${-10+i*2}deg) translateX(20px) scaleX(1.06)`}],{duration:220,delay:i*18,fill:'forwards'}); }
    moveFade(ctx,[{opacity:1,transform:'translateX(0) rotate(0)',filter:'none'},{opacity:.9,transform:'translateX(-18%) rotate(-4deg)',filter:'brightness(.8)',offset:.4},{opacity:0,transform:'translateX(-130%) rotate(-9deg)',filter:'brightness(.55) blur(2px)'}],{duration:760,easing:'cubic-bezier(.2,.84,.18,1)'});
    ctx.cleanup(1500); await wait(900);
  };
    window.playNemesisTentacleStrike = async function(cardEl){
    const root=screenRoot();
    const vig=document.createElement('div');
    vig.style.cssText='position:absolute;inset:0;opacity:0;background:radial-gradient(circle at center, rgba(0,0,0,0) 54%, rgba(78,170,255,.12) 72%, rgba(28,74,128,.36) 88%, rgba(8,18,34,.72) 100%);mix-blend-mode:screen;';
    root.appendChild(vig);
    vig.animate([{opacity:0},{opacity:.95,offset:.28},{opacity:.35}],{duration:920,fill:'forwards'});
    for(let i=0;i<10;i++){
      const g=document.createElement('div');
      g.style.cssText=`position:absolute;left:${-4+Math.random()*8}%;top:${Math.random()*100}%;width:${96+Math.random()*10}%;height:${2+Math.random()*3}%;opacity:0;background:linear-gradient(90deg, rgba(0,0,0,0), rgba(88,182,255,.18), rgba(0,0,0,0));filter:blur(${2+Math.random()*4}px);`;
      root.appendChild(g);
      g.animate([{opacity:0,transform:'translateX(-4%)'},{opacity:.42,transform:'translateX(3%)',offset:.3},{opacity:0,transform:'translateX(7%)'}],{duration:360+Math.random()*180,delay:i*48,fill:'forwards'});
    }
    cleanupRoot(root,1250);
    const ctx=setup(cardEl,'#8fd6ff');
    makeTentacle(ctx,'M -22 250 C 38 214, 104 206, 162 214 S 278 242, 324 218',430,9);
    await wait(210); impactBurst(ctx,'58%','45%',30); flash(ctx,'rgba(220,238,255,.34)',160); shakeCard(ctx,8,420,1); await wait(120); virusSpread(ctx,{count:24,layer:1.02}); particles(ctx,{count:18,color:'#d8f2ff',x:170,y:230,spreadX:260,spreadY:240,size:[4,9],life:800,shape:'2px'}); await wait(260); fadeCard(ctx,760,'hue-rotate(18deg) saturate(1.08) brightness(.55) blur(3px)'); ctx.cleanup(1800); await wait(920);
  };  })();
(() => {
  const EXTRA_STYLE_ID = 'dbd-exact-new-killer-direct-style-v2';
  if (!document.getElementById(EXTRA_STYLE_ID)) {
    const s = document.createElement('style');
    s.id = EXTRA_STYLE_ID;
    s.textContent = `
.nfx-ring{position:absolute;border-radius:50%;opacity:0}
.nfx-label{position:absolute;opacity:0;font-weight:900;white-space:nowrap}
.nfx-feather{position:absolute;border-radius:80% 20% 80% 20%;opacity:0;background:linear-gradient(180deg,#050607,#262830);filter:drop-shadow(0 0 7px rgba(255,255,255,.04));}
.nfx-feather:after{content:"";position:absolute;left:48%;top:5%;bottom:5%;width:2px;background:rgba(255,255,255,.08);border-radius:999px}
.nfx-bat{position:absolute;width:26px;height:15px;background:rgba(0,0,0,.95);clip-path:polygon(0 56%,12% 30%,22% 50%,35% 18%,50% 52%,65% 18%,78% 50%,88% 30%,100% 56%,85% 66%,62% 60%,50% 74%,38% 60%,15% 66%);opacity:0}
.nfx-skull{position:absolute;width:34px;height:34px;border-radius:50% 50% 38% 38%;background:rgba(238,240,255,.95);filter:drop-shadow(0 0 8px rgba(190,170,255,.55));opacity:0}
.nfx-skull:before,.nfx-skull:after{content:"";position:absolute;top:10px;width:7px;height:7px;border-radius:50%;background:#161820}
.nfx-skull:before{left:8px}.nfx-skull:after{right:8px}
.nfx-noise{position:absolute;inset:0;opacity:0;background-image:repeating-linear-gradient(0deg, rgba(255,255,255,.18) 0 2px, rgba(0,0,0,0) 2px 4px), repeating-linear-gradient(90deg, rgba(255,255,255,.06) 0 1px, rgba(0,0,0,0) 1px 5px);mix-blend-mode:screen}
`;
    document.head.appendChild(s);
  }

  function wait(ms){return new Promise(r=>setTimeout(r,ms));}
  function setup(cardEl, color='#d8dde3'){
    if(!cardEl) throw new Error('Missing card element');
    cardEl.classList.add('dbdx-card-host');
    cardEl.querySelectorAll(':scope > .dbdx-overlay,:scope > .dbdx-full').forEach(x=>x.remove());
    const overlay=document.createElement('div'); overlay.className='dbdx-overlay';
    const canvas=document.createElement('div'); canvas.className='dbdx-canvas';
    const full=document.createElement('div'); full.className='dbdx-full';
    overlay.appendChild(canvas); cardEl.append(overlay, full);
    const rect=cardEl.getBoundingClientRect();
    canvas.style.transform=`scale(${Math.max(rect.width,1)/290}, ${Math.max(rect.height,1)/500})`;
    canvas.style.setProperty('--c', color); full.style.setProperty('--c', color);
    return {card:cardEl, canvas, full, color, cleanup(ms=1700){setTimeout(()=>{overlay.remove(); full.remove(); cardEl.classList.remove('dbdx-hide-base'); cardEl.style.clipPath=''; cardEl.style.overflow='';}, ms)}};
  }
  function el(ctx, cls='', parent='canvas', tag='div') { const d=document.createElement(tag); if(cls)d.className=cls; (parent==='full'?ctx.full:ctx.canvas).appendChild(d); return d; }
  function flash(ctx, color='rgba(255,255,255,.7)', dur=320){ const f=el(ctx,'dbdx-flash','full'); f.style.background=color; f.animate([{opacity:0},{opacity:1,offset:.2},{opacity:0}],{duration:dur,fill:'forwards'}); return f; }
  function shakeCard(ctx, strength=7, dur=420, reps=1){ const frames=[{transform:'translate(0,0)'},{transform:`translate(${-strength}px,${Math.round(strength*.5)}px)`},{transform:`translate(${strength}px,${-Math.round(strength*.4)}px)`},{transform:`translate(${-Math.round(strength*.6)}px,${Math.round(strength*.25)}px)`},{transform:'translate(0,0)'}]; ctx.card.animate(frames,{duration:dur,iterations:reps,easing:'ease-in-out'}); }
  function particles(ctx,{count=24,color=ctx.color,x=145,y=250,spreadX=230,spreadY=230,size=[4,10],life=820,delay=0,shape='50%',up=false}={}){ for(let i=0;i<count;i++){ const p=el(ctx,'dbdx-p'); const s=size[0]+Math.random()*(size[1]-size[0]); const dx=(Math.random()-.5)*spreadX; const dy=up ? -(60+Math.random()*spreadY) : (Math.random()-.5)*spreadY; p.style.cssText += `;left:${x}px;top:${y}px;width:${s}px;height:${s}px;border-radius:${shape};--c:${color};--dx:${dx}px;--dy:${dy}px;--rot:${Math.random()*420-210}deg;animation:dbdxParticle ${life+Math.random()*240}ms ease-out ${delay+i*8}ms forwards;`; }}
  function fadeCard(ctx, ms=700, filter='brightness(.45) blur(2px)'){ ctx.card.animate([{opacity:1,filter:'none'},{opacity:0,filter}],{duration:ms,fill:'forwards',easing:'ease'}); }
  function moveFade(ctx, frames, opts){ ctx.card.animate(frames, Object.assign({fill:'forwards',easing:'ease'}, opts||{})); }
  function ghostClone(ctx, dx, dy, color='rgba(165,235,255,.16)', dur=900){ const g=el(ctx,'dbdx-ghost','full'); g.style.background=color; g.animate([{opacity:.0,transform:'translate(0,0)'},{opacity:.55,transform:`translate(${dx*.45}px,${dy*.45}px)`},{opacity:0,transform:`translate(${dx}px,${dy}px)`}],{duration:dur,fill:'forwards',easing:'ease'}); return g; }
  function vignette(ctx, colorA, colorB='transparent', opacity=.75, dur=900){ const v=el(ctx,'','full'); v.style.cssText=`position:absolute;inset:-10%;border-radius:inherit;opacity:0;background:radial-gradient(circle at 50% 52%, ${colorA} 0%, ${colorB} 56%, rgba(0,0,0,.55) 100%);filter:blur(10px);mix-blend-mode:screen;`; v.animate([{opacity:0},{opacity:opacity},{opacity:opacity*.45}],{duration:dur,fill:'forwards'}); return v; }
  function haze(ctx, color, dur=900, blur=14, opacity=.8){ const h=el(ctx,'','full'); h.style.cssText=`position:absolute;inset:0;opacity:0;background:${color};filter:blur(${blur}px);mix-blend-mode:screen;`; h.animate([{opacity:0},{opacity},{opacity:opacity*.35}],{duration:dur,fill:'forwards'}); return h; }
  function ring(ctx,{x=145,y=250,size=100,border='2px solid rgba(255,255,255,.8)',duration=620,delay=0,scaleFrom=.2,scaleTo=1.2,parent='canvas'}={}){ const r=el(ctx,'nfx-ring',parent); r.style.cssText=`left:${x-size/2}px;top:${y-size/2}px;width:${size}px;height:${size}px;border:${border};box-shadow:0 0 18px rgba(255,255,255,.2);`; r.animate([{opacity:0,transform:`scale(${scaleFrom})`},{opacity:1,transform:'scale(1)'},{opacity:0,transform:`scale(${scaleTo})`}],{duration:duration,delay,fill:'forwards'}); return r; }
  function band(ctx,{top=200,height=120,color='rgba(255,120,40,.22)',duration=560,delay=0,blur=12}={}){ const b=el(ctx,''); b.style.cssText=`position:absolute;left:-15%;top:${top}px;width:130%;height:${height}px;border-radius:50%;opacity:0;background:radial-gradient(ellipse at center, ${color} 0 34%, transparent 72%);filter:blur(${blur}px);`; b.animate([{opacity:0,transform:'translateY(40px) scale(.76)'},{opacity:.9,transform:'translateY(0) scale(1)'},{opacity:0,transform:'translateY(-50px) scale(1.05)'}],{duration,delay,fill:'forwards',easing:'ease-out'}); return b; }
  function note(ctx,x,y,txt='♪',delay=0){ const n=el(ctx,'dbdx-note'); n.textContent=txt; n.style.left=x+'px'; n.style.top=y+'px'; n.style.fontSize=(22+Math.random()*12)+'px'; n.animate([{opacity:0,transform:'translateY(8px) scale(.5)'},{opacity:1,transform:'translateY(0) scale(1)',offset:.35},{opacity:0,transform:'translateY(-42px) scale(1.18)'}],{duration:760,delay,fill:'forwards'}); return n; }
  function featherStorm(ctx,count=30,darkness=.85){ const dark=el(ctx,'','full'); dark.style.cssText='position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.18),rgba(0,0,0,.96));opacity:0;'; dark.animate([{opacity:0},{opacity:darkness}],{duration:1180,fill:'forwards'}); for(let i=0;i<count;i++){ const f=el(ctx,'nfx-feather'); const w=10+Math.random()*30, h=28+Math.random()*86; const rot=Math.random()*130-65; f.style.left=(-70-Math.random()*60)+'px'; f.style.top=(30+Math.random()*400)+'px'; f.style.width=w+'px'; f.style.height=h+'px'; f.animate([{opacity:0,transform:`rotate(${rot}deg) translateX(-20px) scale(.7)`},{opacity:.96,transform:`rotate(${rot}deg) translateX(${140+Math.random()*110}px) scale(1)`},{opacity:0,transform:`rotate(${rot}deg) translateX(${330+Math.random()*90}px) scale(.95)`}],{duration:720+Math.random()*180,delay:i*12,fill:'forwards',easing:'ease-out'}); } }
  function mistRise(ctx,{count=18,color='rgba(60,220,120,.22)',upColor='#52ff90'}={}){ for(let i=0;i<count;i++){ const m=el(ctx,''); const w=70+Math.random()*130, h=34+Math.random()*80; m.style.cssText=`position:absolute;left:${-10+Math.random()*220}px;top:${260+Math.random()*180}px;width:${w}px;height:${h}px;border-radius:50%;opacity:0;background:radial-gradient(ellipse at center, ${color} 0 36%, transparent 74%);filter:blur(${10+Math.random()*8}px);`; const dx=(Math.random()-.5)*60, dy=-(80+Math.random()*200); m.animate([{opacity:0,transform:'translateY(20px) scale(.7)'},{opacity:.72,transform:`translate(${dx*.3}px,${dy*.3}px) scale(1)`},{opacity:0,transform:`translate(${dx}px,${dy}px) scale(1.08)`}],{duration:900+Math.random()*260,delay:i*38,fill:'forwards'}); }
    particles(ctx,{count:30,color:upColor,x:145,y:320,spreadX:260,spreadY:260,size:[3,8],life:860,up:true});
  }
  function scanLine(ctx,{top=160,color='rgba(255,140,72,.55)',duration=680,delay=0}={}){ const s=el(ctx,''); s.style.cssText=`position:absolute;left:-18px;right:-18px;top:${top}px;height:120px;opacity:0;background:linear-gradient(180deg,transparent,${color},transparent);filter:blur(16px);`; s.animate([{opacity:0,transform:'translateY(-65px)'},{opacity:.92,transform:'translateY(0)'},{opacity:0,transform:'translateY(115px)'}],{duration,delay,fill:'forwards',easing:'ease-out'}); }
  function arrowRow(ctx){ const row=el(ctx,''); row.style.cssText='position:absolute;left:50%;top:88px;transform:translateX(-50%);display:flex;gap:6px;opacity:0;'; const dirs=['up','down','left','right','left']; const boxes=[]; dirs.forEach((dir)=>{ const box=document.createElement('div'); box.style.cssText='width:34px;height:34px;border-radius:4px;border:2px solid rgba(255,200,120,.35);background:linear-gradient(180deg,rgba(255,180,80,.12),rgba(0,0,0,.25));position:relative;box-shadow:0 0 10px rgba(255,160,70,.15) inset;'; const tri=document.createElement('div'); tri.style.cssText='position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:0;height:0;filter:drop-shadow(0 0 6px rgba(255,230,185,.5));'; if(dir==='up') tri.style.cssText += 'border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:12px solid rgba(255,255,255,.92);'; if(dir==='down') tri.style.cssText += 'border-left:8px solid transparent;border-right:8px solid transparent;border-top:12px solid rgba(255,255,255,.92);'; if(dir==='left') tri.style.cssText += 'border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:12px solid rgba(255,255,255,.92);'; if(dir==='right') tri.style.cssText += 'border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:12px solid rgba(255,255,255,.92);'; box.appendChild(tri); row.appendChild(box); boxes.push(box); }); ctx.canvas.appendChild(row); row.animate([{opacity:0},{opacity:1}],{duration:160,fill:'forwards'}); boxes.forEach((box,i)=>{ box.animate([{opacity:.2,transform:'scale(.88)'},{opacity:1,transform:'scale(1)'},{opacity:1,transform:'scale(1)'}],{duration:240,delay:240+i*110,fill:'forwards'}); setTimeout(()=>{ box.style.borderColor='rgba(255,235,200,.95)'; box.style.boxShadow='0 0 16px rgba(255,210,150,.45), inset 0 0 12px rgba(255,255,255,.18)'; box.style.background='linear-gradient(180deg,rgba(255,210,135,.35),rgba(60,35,10,.35))'; }, 240+i*110); }); }
  function cyberHud(ctx){
    ring(ctx,{x:145,y:215,size:170,border:'2px solid rgba(40,235,215,.8)',duration:720,delay:0});
    ring(ctx,{x:145,y:215,size:112,border:'2px solid rgba(40,235,215,.6)',duration:660,delay:60});
    const arc1=el(ctx,''); arc1.style.cssText='position:absolute;left:68px;top:138px;width:154px;height:154px;border-radius:50%;border:10px solid transparent;border-top-color:rgba(55,235,215,.92);border-right-color:rgba(55,235,215,.92);opacity:0;'; arc1.animate([{opacity:0,transform:'rotate(0deg) scale(.6)'},{opacity:1,transform:'rotate(80deg) scale(1)'},{opacity:0,transform:'rotate(160deg) scale(1.1)'}],{duration:820,fill:'forwards'});
    const arc2=el(ctx,''); arc2.style.cssText='position:absolute;left:68px;top:138px;width:154px;height:154px;border-radius:50%;border:10px solid transparent;border-bottom-color:rgba(55,235,215,.92);border-left-color:rgba(55,235,215,.92);opacity:0;'; arc2.animate([{opacity:0,transform:'rotate(0deg) scale(.6)'},{opacity:1,transform:'rotate(-70deg) scale(1)'},{opacity:0,transform:'rotate(-140deg) scale(1.1)'}],{duration:820,fill:'forwards'});
    [[145,96,2,52],[145,336,2,52],[86,215,52,2],[202,215,52,2]].forEach(([l,t,w,h],i)=>{ const line=el(ctx,''); line.style.cssText=`position:absolute;left:${l}px;top:${t}px;width:${w}px;height:${h}px;background:rgba(55,235,215,.7);opacity:0;`; line.animate([{opacity:0,transform:'scale(.4)'},{opacity:1,transform:'scale(1)'},{opacity:0,transform:'scale(1.08)'}],{duration:520,delay:80+i*40,fill:'forwards'}); });
    for(let i=0;i<10;i++){ const b=el(ctx,'nfx-label'); b.textContent=(i%2?'01010':'10101'); b.style.cssText += `left:${18+Math.random()*230}px;top:${28+Math.random()*390}px;font:800 10px/1 ui-monospace,Consolas,monospace;color:rgba(255,255,255,.75);`; b.animate([{opacity:0},{opacity:.8,offset:.2},{opacity:0}],{duration:260,delay:160+i*70,fill:'forwards'}); }
  }
  function whiteConfirm(ctx){
    ring(ctx,{x:145,y:215,size:126,border:'2px solid rgba(255,255,255,.92)',duration:560,delay:0,parent:'full'});
    [[145,215,2,140],[75,215,140,2]].forEach(([l,t,w,h],i)=>{ const line=el(ctx,'','full'); line.style.cssText=`position:absolute;left:${l}px;top:${t}px;width:${w}px;height:${h}px;background:rgba(255,255,255,.92);opacity:0;transform:translate(-50%,-50%);`; line.animate([{opacity:0,transform:'translate(-50%,-50%) scale(.5)'},{opacity:1,transform:'translate(-50%,-50%) scale(1)'},{opacity:0,transform:'translate(-50%,-50%) scale(1.05)'}],{duration:560,delay:i*40,fill:'forwards'}); });
  }
  function poisonDots(ctx,color='rgba(85,255,145,.94)',count=24){ particles(ctx,{count,color,x:145,y:240,spreadX:250,spreadY:260,size:[4,10],life:880}); }
  function lurch(ctx,delay=0,dur=360,zoom=1.2){ setTimeout(()=>{ ctx.card.animate([{transform:'translate(0,0) scale(1)'},{transform:'translate(0,-10px) scale(1.02) rotate(-.7deg)'},{transform:'translate(0,-3px) scale(1.01) rotate(.2deg)'}],{duration:dur,fill:'forwards'}); const g=ghostClone(ctx,12,0,'rgba(255,255,255,.10)',dur+80); g.style.filter='blur(1.5px)'; shakeCard(ctx,9,260,1); },delay); }
  function bloodPool(ctx,y=380,color='rgba(90,0,0,.96)',scale=1.3){ const p=el(ctx,''); p.style.cssText=`position:absolute;left:50%;top:${y}px;width:${170*scale}px;height:${70*scale}px;transform:translateX(-50%) scale(.35);border-radius:50%;background:radial-gradient(ellipse at center, ${color} 0 48%, rgba(20,0,0,.18) 72%, transparent 78%);opacity:0;filter:blur(3px);`; p.animate([{opacity:0,transform:'translateX(-50%) scale(.35)'},{opacity:.95,transform:'translateX(-50%) scale(1)'},{opacity:.98,transform:'translateX(-50%) scale(1.08)'}],{duration:640,fill:'forwards'}); return p; }
  function sinkCard(ctx,ms=820,down=180,scale=.88){ moveFade(ctx,[{opacity:1,transform:'translateY(0) scale(1)',filter:'none'},{opacity:.85,transform:`translateY(${down*.45}px) scale(${1-(1-scale)*.4})`,filter:'brightness(.75)',offset:.44},{opacity:0,transform:`translateY(${down}px) scale(${scale})`,filter:'brightness(.34) blur(3px)'}],{duration:ms,easing:'cubic-bezier(.42,0,.78,.36)'}); }
  function cardSplitVertical(ctx){
    ctx.card.classList.add('dbdx-hide-base');
    const mk = (clip,leftPos,bgPos)=>{ const c=ctx.card.cloneNode(true); c.querySelectorAll('.dbdx-overlay,.dbdx-full').forEach(n=>n.remove()); c.classList.remove('dbdx-card-host','dbdx-hide-base'); c.classList.add('dbdx-slice'); c.style.clipPath=clip; c.style.backgroundPosition=bgPos; ctx.full.appendChild(c); return c; };
    const left=mk('polygon(0 0,50% 0,50% 100%,0 100%)','0%','0 0');
    const right=mk('polygon(50% 0,100% 0,100% 100%,50% 100%)','50%','100% 0');
    left.animate([{opacity:1,transform:'translateX(0) rotate(0deg)'},{opacity:.7,transform:'translateX(-18px) rotate(-6deg)',offset:.4},{opacity:0,transform:'translateX(-34px) translateY(150px) rotate(-16deg) scale(.92)'}],{duration:880,fill:'forwards'});
    right.animate([{opacity:1,transform:'translateX(0) rotate(0deg)'},{opacity:.7,transform:'translateX(18px) rotate(6deg)',offset:.4},{opacity:0,transform:'translateX(34px) translateY(150px) rotate(16deg) scale(.92)'}],{duration:880,fill:'forwards'});
  }
  function bats(ctx,count=24,delay=0){ for(let i=0;i<count;i++){ const b=el(ctx,'nfx-bat'); b.style.left=(20+Math.random()*240)+'px'; b.style.top=(110+Math.random()*220)+'px'; const dx=(Math.random()-.5)*160, dy=-(40+Math.random()*170); const sc=.7+Math.random()*.8; b.animate([{opacity:0,transform:`scale(${sc*.4})`},{opacity:.96,transform:`translate(${dx*.3}px,${dy*.3}px) scale(${sc})`},{opacity:0,transform:`translate(${dx}px,${dy}px) scale(${sc*1.08})`}],{duration:680+Math.random()*260,delay:delay+i*20,fill:'forwards'}); } }
  function skulls(ctx,count=6,delay=0){ for(let i=0;i<count;i++){ const sk=el(ctx,'nfx-skull'); sk.style.left=(26+Math.random()*220)+'px'; sk.style.top=(90+Math.random()*270)+'px'; const dx=(Math.random()-.5)*90, dy=-(40+Math.random()*120); sk.animate([{opacity:0,transform:'scale(.4)'},{opacity:.9,transform:`translate(${dx*.35}px,${dy*.35}px) scale(1)`},{opacity:0,transform:`translate(${dx}px,${dy}px) scale(1.08)`}],{duration:760+Math.random()*200,delay:delay+i*70,fill:'forwards'}); } }
  function runes(ctx,count=14,delay=0){ const glyphs=['✧','✦','✶','ᚱ','ᚷ','ᚨ','✹']; for(let i=0;i<count;i++){ const r=el(ctx,'nfx-label'); r.textContent=glyphs[i%glyphs.length]; r.style.cssText += `left:${28+Math.random()*220}px;top:${42+Math.random()*360}px;color:rgba(214,168,255,.9);font-size:${14+Math.random()*16}px;text-shadow:0 0 12px rgba(180,120,255,.85);`; const dx=(Math.random()-.5)*140, dy=-(30+Math.random()*150); r.animate([{opacity:0,transform:'scale(.5)'},{opacity:1,transform:`translate(${dx*.25}px,${dy*.2}px) scale(1)`},{opacity:0,transform:`translate(${dx}px,${dy}px) scale(.6)`}],{duration:760+Math.random()*200,delay:delay+i*50,fill:'forwards'}); } }
  function noiseGlitch(ctx,count=8,delay=0){ const noise=el(ctx,'nfx-noise','full'); noise.animate([{opacity:0},{opacity:.18},{opacity:0}],{duration:520,delay,fill:'forwards'}); for(let i=0;i<count;i++){ const g=el(ctx,'','full'); g.style.cssText=`position:absolute;left:-10px;right:-10px;top:${40+Math.random()*400}px;height:${10+Math.random()*16}px;opacity:0;mix-blend-mode:screen;border-radius:4px;filter:blur(.4px);background:linear-gradient(90deg, rgba(255,255,255,.0), rgba(${i%2?'255,70,70':'255,255,255'},.65), rgba(255,255,255,0));`; g.animate([{opacity:0,transform:'translateX(-20px)'},{opacity:.8,transform:'translateX(12px)'},{opacity:0,transform:'translateX(24px)'}],{duration:180,delay:delay+i*55,fill:'forwards'}); } }
  function screenFxRoot(z=2147483000){ const root=document.createElement('div'); root.className='dbdx-screen-fx'; root.style.cssText=`position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:${z};`; document.body.appendChild(root); return root; }
  function cleanupRoot(root,ms=1700){ setTimeout(()=>{ try{ root.remove(); }catch(e){} }, ms); }
  function addBodyClassEffect(name, ms=2000){ document.body.classList.add(`manual-effect-${name}`); setTimeout(()=>document.body.classList.remove(`manual-effect-${name}`), ms); }

  
  
  window.playArtistBlackFeatherRush = async function(cardEl){
    const ctx=setup(cardEl,'#121212');
    featherStorm(ctx,36,.88);
    await wait(420);
    fadeCard(ctx,900,'brightness(.32) blur(2px)');
    ctx.cleanup(1900); await wait(1030);
  };

  window.playKnightGuardFogRise = async function(cardEl){
    const ctx=setup(cardEl,'#57ff96');
    vignette(ctx,'rgba(70,255,150,.28)','rgba(20,70,20,.12)',.86,1080);
    mistRise(ctx,{count:36,color:'rgba(80,255,140,.30)',upColor:'#6effa7'});
    for(let i=0;i<16;i++){
      const sm=el(ctx,'dbdx-smoke');
      sm.style.left=(-20+Math.random()*220)+'px'; sm.style.top=(210+Math.random()*220)+'px'; sm.style.width=(100+Math.random()*120)+'px'; sm.style.height=(70+Math.random()*90)+'px';
      sm.style.background='radial-gradient(circle,rgba(90,255,140,.30),rgba(30,125,60,.18) 46%,transparent 72%)';
      sm.animate([{opacity:0,transform:'translateY(30px) scale(.64)'},{opacity:.78,transform:'translateY(-12px) scale(1)',offset:.34},{opacity:0,transform:'translateY(-110px) scale(1.08)'}],{duration:980+Math.random()*180,delay:i*40,fill:'forwards'});
    }
    await wait(120);
    ghostClone(ctx,-10,0,'rgba(120,255,165,.22)',980);
    ghostClone(ctx,10,0,'rgba(120,255,165,.22)',980);
    ghostClone(ctx,0,0,'rgba(180,255,210,.12)',1020);
    await wait(280);
    moveFade(ctx,[{opacity:1,transform:'scale(1)',filter:'none'},{opacity:.95,transform:'scale(1.01) translateX(-3px)',filter:'brightness(.9) saturate(1.1)',offset:.28},{opacity:.78,transform:'scale(1.02) translateX(0)',filter:'brightness(.82) blur(.8px)',offset:.46},{opacity:.58,transform:'scale(1.03) translateX(8px)',filter:'brightness(.72) blur(1.4px)',offset:.68},{opacity:0,transform:'scale(.96) translateY(-10px)',filter:'brightness(.48) blur(3px)'}],{duration:920});
    ctx.cleanup(1950); await wait(1060);
  };
  window.playSkullMerchantTargetPingSequence = async function(cardEl){
    const ctx=setup(cardEl,'#ff9b42');
    const overlay=el(ctx,'','full');
    overlay.style.cssText='position:absolute;inset:0;opacity:0;background:linear-gradient(180deg, rgba(255,135,55,.07), transparent 38%, rgba(0,0,0,.58) 100%);mix-blend-mode:screen;';
    overlay.animate([{opacity:0},{opacity:.72,offset:.18},{opacity:.72}],{duration:760,fill:'forwards'});
    scanLine(ctx,{top:110,color:'rgba(255,155,70,.62)',duration:720});
    ring(ctx,{x:145,y:220,size:118,border:'2px solid rgba(255,155,70,.42)',duration:740,delay:20});
    ring(ctx,{x:145,y:220,size:176,border:'2px solid rgba(255,155,70,.26)',duration:760,delay:110});
    const lock=el(ctx,'','full');
    lock.style.cssText='position:absolute;left:50%;top:45%;width:148px;height:148px;transform:translate(-50%,-50%);border:2px solid rgba(255,165,80,.58);border-radius:50%;opacity:0;box-shadow:0 0 18px rgba(255,130,40,.24), inset 0 0 18px rgba(255,160,70,.12);';
    lock.animate([{opacity:0,transform:'translate(-50%,-50%) scale(.78)'},{opacity:.9,transform:'translate(-50%,-50%) scale(1)',offset:.32},{opacity:.36,transform:'translate(-50%,-50%) scale(1.08)'}],{duration:760,delay:80,fill:'forwards',easing:'ease-out'});
    await wait(430);
    const row=el(ctx,'');
    row.style.cssText='position:absolute;left:50%;top:88px;transform:translateX(-50%);display:flex;gap:6px;opacity:0;z-index:20;';
    const dirs=['up','down','left','right','left'];
    const boxes=[];
    dirs.forEach((dir)=>{
      const box=document.createElement('div');
      box.style.cssText='width:34px;height:34px;border-radius:4px;border:2px solid rgba(255,200,120,.22);background:linear-gradient(180deg,rgba(255,180,80,.10),rgba(0,0,0,.30));position:relative;box-shadow:0 0 10px rgba(255,160,70,.08) inset;opacity:.2;transform:scale(.88);';
      const tri=document.createElement('div');
      tri.style.cssText='position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:0;height:0;filter:drop-shadow(0 0 6px rgba(255,230,185,.5));';
      if(dir==='up') tri.style.cssText += 'border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:12px solid rgba(255,255,255,.92);';
      if(dir==='down') tri.style.cssText += 'border-left:8px solid transparent;border-right:8px solid transparent;border-top:12px solid rgba(255,255,255,.92);';
      if(dir==='left') tri.style.cssText += 'border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:12px solid rgba(255,255,255,.92);';
      if(dir==='right') tri.style.cssText += 'border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:12px solid rgba(255,255,255,.92);';
      box.appendChild(tri); row.appendChild(box); boxes.push(box);
    });
    ctx.canvas.appendChild(row);
    row.animate([{opacity:0},{opacity:1}],{duration:160,fill:'forwards'});
    boxes.forEach((box,i)=>{
      box.animate([
        {opacity:.2,transform:'scale(.88)',filter:'brightness(.8)'},
        {opacity:1,transform:'scale(1.08)',filter:'brightness(1.35)',offset:.45},
        {opacity:1,transform:'scale(1)',filter:'brightness(1)'}
      ],{duration:240,delay:i*118,fill:'forwards',easing:'ease-out'});
      setTimeout(()=>{
        box.style.borderColor='rgba(255,235,200,.96)';
        box.style.boxShadow='0 0 16px rgba(255,210,150,.48), inset 0 0 12px rgba(255,255,255,.18)';
        box.style.background='linear-gradient(180deg,rgba(255,210,135,.38),rgba(60,35,10,.38))';
      }, i*118+90);
    });
    await wait(810);
    noiseGlitch(ctx,12,0);
    for(let i=0;i<9;i++){
      const slice=el(ctx,'','full');
      slice.style.cssText=`position:absolute;left:-12px;right:-12px;top:${70+Math.random()*340}px;height:${9+Math.random()*18}px;opacity:0;mix-blend-mode:screen;background:linear-gradient(90deg,transparent,rgba(255,170,90,.72),rgba(255,255,255,.36),transparent);filter:blur(.25px);`;
      slice.animate([{opacity:0,transform:'translateX(-18px)'},{opacity:.85,transform:'translateX(10px)',offset:.45},{opacity:0,transform:'translateX(28px)'}],{duration:430,delay:i*38,fill:'forwards'});
    }
    row.animate([{opacity:1},{opacity:1,offset:.28},{opacity:.15,offset:.72},{opacity:0}],{duration:460,fill:'forwards'});
    await wait(140);
    ctx.card.animate([
      {opacity:1,filter:'none'},
      {opacity:.88,filter:'brightness(.78) contrast(1.08)',offset:.32},
      {opacity:.38,filter:'brightness(.54) contrast(1.16) blur(1px)',offset:.66},
      {opacity:0,filter:'brightness(.48) contrast(1.08) blur(2.2px)'}
    ],{duration:460,fill:'forwards',easing:'steps(2,end)'});
    ctx.cleanup(1900); await wait(620);
  };

  window.playSingularityCyanTrackWhiteConfirm = async function(cardEl){
    const ctx=setup(cardEl,'#4df3e8');
    cyberHud(ctx);
    const cyanWash=el(ctx,'','full');
    cyanWash.style.cssText='position:absolute;inset:0;opacity:0;background:radial-gradient(circle at 50% 46%, rgba(60,255,220,.13), transparent 52%, rgba(0,0,0,.18) 88%);mix-blend-mode:screen;';
    cyanWash.animate([{opacity:0},{opacity:.82,offset:.2},{opacity:.48}],{duration:620,fill:'forwards'});
    await wait(560);
    ctx.canvas.querySelectorAll('.nfx-ring,.nfx-label').forEach(node=>node.animate([{opacity:getComputedStyle(node).opacity || 1},{opacity:0}],{duration:90,fill:'forwards'}));
    ctx.full.querySelectorAll('.dbdx-full > *').forEach(node=>node.animate([{opacity:getComputedStyle(node).opacity || 1},{opacity:0}],{duration:90,fill:'forwards'}));
    whiteConfirm(ctx);
    ring(ctx,{x:145,y:215,size:258,border:'2px solid rgba(255,255,255,.24)',duration:780,delay:30,parent:'full'});
    const crossGlow=el(ctx,'','full');
    crossGlow.style.cssText='position:absolute;left:50%;top:45%;width:190px;height:190px;transform:translate(-50%,-50%);opacity:0;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.16),transparent 62%);filter:blur(10px);mix-blend-mode:screen;';
    crossGlow.animate([{opacity:0,transform:'translate(-50%,-50%) scale(.84)'},{opacity:.88,transform:'translate(-50%,-50%) scale(1.05)',offset:.42},{opacity:.38,transform:'translate(-50%,-50%) scale(1.16)'}],{duration:780,fill:'forwards'});
    await wait(380);
    noiseGlitch(ctx,10,0);
    for(let i=0;i<8;i++){
      const g=el(ctx,'','full');
      g.style.cssText=`position:absolute;left:-12px;right:-12px;top:${52+Math.random()*370}px;height:${9+Math.random()*15}px;opacity:0;mix-blend-mode:screen;background:linear-gradient(90deg,rgba(255,255,255,0),rgba(220,255,250,.70),rgba(90,255,240,.24),rgba(255,255,255,0));filter:blur(.3px);`;
      g.animate([{opacity:0,transform:'translateX(-24px)'},{opacity:.8,transform:'translateX(12px)',offset:.48},{opacity:0,transform:'translateX(30px)'}],{duration:440,delay:i*55,fill:'forwards'});
    }
    await wait(150);
    ctx.card.animate([
      {opacity:1,filter:'none'},
      {opacity:.86,filter:'brightness(.78) contrast(1.08)',offset:.28},
      {opacity:.44,filter:'brightness(.60) contrast(1.14) blur(.8px)',offset:.62},
      {opacity:0,filter:'brightness(.56) blur(2.4px)'}
    ],{duration:500,fill:'forwards',easing:'steps(2,end)'});
    ctx.cleanup(1900); await wait(660);
  };

    window.playGoodGuyHideyHoPanicCut = async function(cardEl){
    const root=screenRoot();
    const dark=document.createElement('div'); dark.style.cssText='position:absolute;inset:0;opacity:0;background:radial-gradient(circle at center, rgba(0,0,0,.0) 24%, rgba(0,0,0,.22) 60%, rgba(0,0,0,.72) 100%);'; root.appendChild(dark); dark.animate([{opacity:0},{opacity:.82,offset:.26},{opacity:.18}],{duration:1100,fill:'forwards'});
    for(let i=0;i<4;i++){ const s=document.createElement('div'); s.style.cssText=`position:absolute;left:${8+i*16}%;top:${18+i*14}%;width:${70+Math.random()*20}%;height:10px;border-radius:99px;opacity:0;background:linear-gradient(90deg, transparent, rgba(255,255,255,.7), rgba(170,0,0,.8), transparent);filter:blur(8px);transform:rotate(${-20+i*8}deg) scaleX(.1);`; root.appendChild(s); s.animate([{opacity:0,transform:`rotate(${-20+i*8}deg) scaleX(.1)`},{opacity:.9,transform:`rotate(${-20+i*8}deg) scaleX(1)`},{opacity:0,transform:`rotate(${-20+i*8}deg) translateX(5%) scaleX(1.06)`}],{duration:220,delay:220+i*40,fill:'forwards'}); }
    cleanupRoot(root,1400);
    const ctx=setup(cardEl,'#d92d2d');
    haze(ctx,'linear-gradient(180deg, rgba(150,150,156,.12), rgba(16,16,22,.42))',780,10,.48);
    vignette(ctx,'rgba(145,0,0,.18)','rgba(0,0,0,.16)',.42,760);
    [[-24,0],[20,-4],[-14,8],[10,14]].forEach(([dx,dy],i)=>{ const g=ghostClone(ctx,dx,dy,'rgba(255,255,255,.10)',420+i*40); g.style.filter='blur(1.2px) brightness(1.08)'; });
    for(let i=0;i<5;i++){ const fp=el(ctx,''); fp.style.cssText=`position:absolute;left:${90+i*22}px;top:${350-i*14}px;width:16px;height:12px;opacity:0;background:radial-gradient(circle at 35% 50%, rgba(255,255,255,.92), rgba(130,130,130,.35) 56%, transparent 72%);border-radius:55% 45% 60% 40%;filter:blur(.6px);`; fp.animate([{opacity:0,transform:'scale(.4)'},{opacity:.95,transform:'scale(1)',offset:.34},{opacity:0,transform:'translate(10px,-10px) scale(1.04)'}],{duration:340,delay:60+i*54,fill:'forwards'}); }
    await wait(120);
    ctx.card.animate([{opacity:1,transform:'translate(0,0) scale(1)',filter:'none'},{opacity:.98,transform:'translate(-4px,-6px) scale(1.05) rotate(-1.5deg)',filter:'brightness(1.02)',offset:.18},{opacity:.96,transform:'translate(8px,-18px) scale(1.12) rotate(1.4deg)',filter:'brightness(.98) blur(1.4px)',offset:.42},{opacity:.9,transform:'translate(-2px,-8px) scale(1.08) rotate(-.8deg)',filter:'brightness(1)',offset:.62},{opacity:.82,transform:'translate(10px,-5px) scale(1.01)',filter:'brightness(.72) blur(1.2px)',offset:.82},{opacity:.74,transform:'translate(14px,-3px) scale(.98)',filter:'brightness(.58) blur(1.8px)'}],{duration:760,fill:'forwards',easing:'cubic-bezier(.2,.82,.2,1)'});
    await wait(230); const s=el(ctx,'dbdx-slash'); s.style.top='238px'; s.animate([{opacity:0,transform:'rotate(-16deg) scaleX(.06)'},{opacity:1,transform:'rotate(-16deg) scaleX(1)'},{opacity:0,transform:'rotate(-16deg) translateX(42px) scaleX(1.08)'}],{duration:430,fill:'forwards'}); flash(ctx,'rgba(255,255,255,.12)',100); flash(ctx,'rgba(180,0,0,.22)',180); shakeCard(ctx,11,300,1); await wait(140); fadeCard(ctx,840,'brightness(.30) blur(2.6px)'); ctx.cleanup(1700); await wait(960);
  };
  window.playHoundmasterBloodScentPull = async function(cardEl){
    const ctx=setup(cardEl,'#c81f35');
    vignette(ctx,'rgba(255,40,70,.22)','rgba(30,0,0,.10)',.82,980);
    for(let i=0;i<18;i++){
      const t=el(ctx,'');
      t.style.cssText=`position:absolute;left:${300+Math.random()*70}px;top:${60+Math.random()*300}px;width:${80+Math.random()*110}px;height:${18+Math.random()*24}px;border-radius:99px;opacity:0;background:linear-gradient(90deg, rgba(255,0,40,.0), rgba(190,0,0,.16), rgba(255,70,90,.34), rgba(255,0,40,.0));filter:blur(${5+Math.random()*7}px);transform:rotate(${Math.random()*20-10}deg);`;
      const dx=-(180+Math.random()*160);
      t.animate([{opacity:0,transform:`translateX(0) rotate(${Math.random()*20-10}deg) scaleX(.4)`},{opacity:.85,transform:`translateX(${dx*.55}px) rotate(${Math.random()*20-10}deg) scaleX(1)`},{opacity:0,transform:`translateX(${dx}px) rotate(${Math.random()*20-10}deg) scaleX(1.08)`}],{duration:820+Math.random()*160,delay:i*24,fill:'forwards'});
    }
    ctx.card.animate([{transform:'translate(0,0) scale(1)'},{transform:'translate(0,-18px) scale(1.04,.96)',offset:.16},{transform:'translate(0,10px) scale(.99,1.02)',offset:.32},{transform:'translate(0,-14px) scale(1.03,.97)',offset:.48},{transform:'translate(0,6px) scale(1,.99)',offset:.64},{transform:'translate(0,0) scale(1)'}],{duration:460,fill:'forwards',easing:'cubic-bezier(.2,.84,.18,1)'});
    await wait(110);
    shakeCard(ctx,6,90,3);
    await wait(220);
    ctx.card.animate([{opacity:1,transform:'translate(0,0) scale(1) skewX(0deg)',filter:'none'},{opacity:1,transform:'translate(-18px,0) scale(1.03,.97) skewX(-4deg)',filter:'blur(.4px)',offset:.24},{opacity:.92,transform:'translate(-64px,-2px) scale(1.05,.96) skewX(-9deg)',filter:'brightness(.88) blur(1.2px)',offset:.58},{opacity:0,transform:'translate(-140px,-6px) scale(1.03,.94) skewX(-12deg)',filter:'brightness(.4) blur(2.8px)'}],{duration:720,fill:'forwards',easing:'cubic-bezier(.2,.84,.18,1)'});
    ctx.cleanup(1750); await wait(980);
  };
  window.playGhoulCarnageStain = async function(cardEl){
    const root=screenRoot();
    const vig=document.createElement('div'); vig.style.cssText='position:absolute;inset:-8%;opacity:0;background:radial-gradient(circle at center, rgba(0,0,0,0) 24%, rgba(120,0,0,.14) 46%, rgba(170,0,0,.40) 68%, rgba(30,0,0,.82) 100%);filter:blur(9px);'; root.appendChild(vig); vig.animate([{opacity:0,transform:'scale(.95)'},{opacity:.86,transform:'scale(1.01)',offset:.22},{opacity:.56,transform:'scale(.99)',offset:.42},{opacity:.86,transform:'scale(1.03)',offset:.68},{opacity:0,transform:'scale(1.06)'}],{duration:820,fill:'forwards'}); cleanupRoot(root,1000);
    const ctx=setup(cardEl,'#b51022');
    const portraitImg=cardEl.querySelector('.portrait img'); const portraitBox=cardEl.querySelector('.portrait') || portraitImg?.parentElement; const cardRect=cardEl.getBoundingClientRect(); const portraitRect=(portraitBox || portraitImg || cardEl).getBoundingClientRect(); const rel={left:Math.max(0, portraitRect.left-cardRect.left), top:Math.max(0, portraitRect.top-cardRect.top), width:Math.max(1, portraitRect.width), height:Math.max(1, portraitRect.height)};
    const makePortraitGhost=(dx,dy,opacity=.24,dur=700)=>{ if(!portraitImg) return null; const g=portraitImg.cloneNode(true); g.removeAttribute('loading'); g.className=''; g.style.cssText=['position:absolute',`left:${rel.left}px`,`top:${rel.top}px`,`width:${rel.width}px`,`height:${rel.height}px`,'object-fit:cover','pointer-events:none','border-radius:inherit','z-index:68','mix-blend-mode:screen','filter:blur(1.2px) saturate(1.25) brightness(.95)','opacity:0','transform-origin:center center'].join(';'); ctx.full.appendChild(g); g.animate([{opacity:0,transform:'translate(0,0) scale(1)'},{opacity,transform:`translate(${dx*.32}px,${dy*.45}px) scale(1.08)`,offset:.42},{opacity:0,transform:`translate(${dx}px,${dy}px) scale(1.18)`}],{duration:dur,fill:'forwards',easing:'cubic-bezier(.18,.75,.24,1)'}); return g; };
    const vig2=el(ctx,'dbdx-red-aura','full'); vig2.style.background='radial-gradient(circle at center, rgba(0,0,0,0) 28%, rgba(120,0,0,.20) 48%, rgba(180,0,0,.58) 74%, rgba(55,0,0,.86) 100%)'; vig2.animate([{opacity:0,transform:'scale(.96)'},{opacity:.52,transform:'scale(1)',offset:.18},{opacity:.84,transform:'scale(1.04)',offset:.36},{opacity:.62,transform:'scale(1.01)',offset:.56},{opacity:.84,transform:'scale(1.05)',offset:.78},{opacity:.84,transform:'scale(1.05)'}],{duration:680,delay:40,fill:'forwards',iterations:3});
    [[-12,-2],[12,2],[-5,-2],[5,-2]].forEach(([dx,dy],i)=>makePortraitGhost(dx,dy,.18+i*.03,520+i*34)); particles(ctx,{count:20,color:'#9a0000',x:145,y:250,spreadX:170,spreadY:140,size:[6,16],life:460,delay:80}); await wait(220);
    if(portraitImg){ portraitImg.animate([{opacity:1,transform:'translate(0,0) scale(1)',filter:'brightness(1)'},{opacity:1,transform:'translate(0,-8px) scale(1.18)',filter:'brightness(1.08) blur(.4px)',offset:.30},{opacity:.98,transform:'translate(0,-18px) scale(1.28)',filter:'brightness(1.16) blur(1.8px) contrast(1.1)',offset:.72},{opacity:0,transform:'translate(0,-22px) scale(1.36) skewX(7deg)',filter:'brightness(.9) blur(7px) contrast(1.2)'}],{duration:340,fill:'forwards',easing:'cubic-bezier(.18,.75,.24,1)'}); makePortraitGhost(0,-18,.22,320); } else { ctx.card.animate([{opacity:1,transform:'translate(0,0) scale(1)',filter:'brightness(1)'},{opacity:1,transform:'translate(0,-8px) scale(1.18)',filter:'brightness(1.08) blur(.4px)',offset:.3},{opacity:.98,transform:'translate(0,-18px) scale(1.28)',filter:'brightness(1.16) blur(1.8px) contrast(1.1)',offset:.72},{opacity:0,transform:'translate(0,-22px) scale(1.36)',filter:'brightness(.9) blur(7px) contrast(1.2) skewX(7deg)'}],{duration:340,fill:'forwards',easing:'cubic-bezier(.18,.75,.24,1)'}); }
    shakeCard(ctx,9,150,2); await wait(235); [...ctx.full.children, ...ctx.canvas.children].forEach(node=>{ if(node===vig2) return; try{ node.animate([{opacity:getComputedStyle(node).opacity || 1},{opacity:0}],{duration:200,fill:'forwards'}); }catch(e){} }); ctx.card.animate([{opacity:1,filter:'none'},{opacity:0,filter:'brightness(.25) blur(3px)'}],{duration:200,fill:'forwards',easing:'ease'}); ctx.cleanup(1100); await wait(560);
  };
  window.playAnimatronicStageScareBurst = async function(cardEl){
    const root=screenRoot(); const noise=document.createElement('div'); noise.style.cssText='position:absolute;inset:0;opacity:0;background-image:repeating-linear-gradient(0deg, rgba(255,255,255,.18) 0 1px, transparent 1px 3px), repeating-linear-gradient(90deg, rgba(255,0,0,.08) 0 1px, transparent 1px 7px);mix-blend-mode:screen;'; root.appendChild(noise); noise.animate([{opacity:0,transform:'translateY(0)'},{opacity:.36,transform:'translateY(-2px)',offset:.18},{opacity:.18,transform:'translateY(2px)',offset:.36},{opacity:.42,transform:'translateY(-1px)',offset:.56},{opacity:0,transform:'translateY(0)'}],{duration:1050,fill:'forwards',easing:'steps(3,end)'}); const dark=document.createElement('div'); dark.style.cssText='position:absolute;inset:0;opacity:0;background:radial-gradient(circle at center, rgba(0,0,0,0) 30%, rgba(0,0,0,.18) 62%, rgba(0,0,0,.74) 100%);'; root.appendChild(dark); dark.animate([{opacity:0},{opacity:.8,offset:.35},{opacity:.15}],{duration:1180,fill:'forwards'}); [160,360,620].forEach((delay,i)=>setTimeout(()=>{ const fl=document.createElement('div'); fl.style.cssText=`position:absolute;inset:0;opacity:0;background:${i===1?'rgba(255,40,40,.18)':'rgba(255,255,255,.12)'}`; root.appendChild(fl); fl.animate([{opacity:0},{opacity:1},{opacity:0}],{duration:90,fill:'forwards'}).finished.catch(()=>{}).then(()=>fl.remove()); },delay)); cleanupRoot(root,1450);
    const ctx=setup(cardEl,'#ffffff'); noiseGlitch(ctx,18,0); noiseGlitch(ctx,10,140); flash(ctx,'rgba(255,255,255,.14)',90); flash(ctx,'rgba(255,255,255,.12)',90); const eye1=el(ctx,'','full'),eye2=el(ctx,'','full'); eye1.style.cssText='position:absolute;left:92px;top:132px;width:26px;height:14px;border-radius:50%;background:#ff3d3d;box-shadow:0 0 18px rgba(255,60,60,.9);opacity:0;'; eye2.style.cssText='position:absolute;left:170px;top:132px;width:26px;height:14px;border-radius:50%;background:#ff3d3d;box-shadow:0 0 18px rgba(255,60,60,.9);opacity:0;'; [eye1,eye2].forEach((e,i)=>e.animate([{opacity:0},{opacity:1,offset:.25},{opacity:0}],{duration:420,delay:180+i*16,fill:'forwards'})); const jump=ghostClone(ctx,0,0,'rgba(255,255,255,.06)',420); jump.style.filter='blur(1px) saturate(.5)'; ctx.card.animate([{transform:'translate(0,0) scale(1)',filter:'none'},{transform:'translate(0,-8px) scale(1.04)',filter:'brightness(1.02)',offset:.22},{transform:'translate(0,-20px) scale(1.16)',filter:'brightness(.96) blur(2px)',offset:.7},{transform:'translate(0,-14px) scale(1.12)',filter:'brightness(.98) blur(1.4px)'}],{duration:420,fill:'forwards'}); shakeCard(ctx,11,320,1); await wait(420); fadeCard(ctx,820,'brightness(.34) saturate(.5)'); ctx.cleanup(1700); await wait(900);
  };
    window.playLichEldritchNebulaEnd = async function(cardEl){
    const ctx=setup(cardEl,'#b07cff');
    haze(ctx,'radial-gradient(circle at 50% 46%, rgba(150,90,255,.12), rgba(0,0,0,0) 40%, rgba(0,0,0,.60) 90%)',1180,18,1);
    haze(ctx,'radial-gradient(circle at 50% 46%, rgba(80,36,140,.26), rgba(20,0,40,.18) 36%, rgba(0,0,0,0) 70%)',1180,26,1);
    for (const [count,delay,color,side] of [[20,0,'rgba(90,40,150,.28)','left'],[14,80,'rgba(150,106,220,.18)','right']]){
      for(let i=0;i<count;i++){
        const s=el(ctx,'');
        const left = side==='left' ? (-40-Math.random()*70) : (240+Math.random()*90);
        const top = 50+Math.random()*340;
        const dx = side==='left' ? (170+Math.random()*120) : -(170+Math.random()*120);
        s.style.cssText=`position:absolute;left:${left}px;top:${top}px;width:${140+Math.random()*120}px;height:${18+Math.random()*26}px;border-radius:999px;opacity:0;background:linear-gradient(90deg, rgba(0,0,0,0), ${color}, rgba(0,0,0,0));filter:blur(${8+Math.random()*10}px);transform:rotate(${Math.random()*26-13}deg);`;
        s.animate([{opacity:0,transform:`translateX(0) rotate(${Math.random()*26-13}deg) scaleX(.4)`},{opacity:.85,transform:`translateX(${dx*.55}px) rotate(${Math.random()*26-13}deg) scaleX(1)`},{opacity:0,transform:`translateX(${dx}px) rotate(${Math.random()*26-13}deg) scaleX(1.04)`}],{duration:1080,delay:delay+i*26,fill:'forwards'});
      }
    }
    runes(ctx,22,20);
    particles(ctx,{count:64,color:'#bf89ff',x:145,y:240,spreadX:280,spreadY:260,size:[3,10],life:900});
    particles(ctx,{count:28,color:'rgba(245,225,255,.95)',x:145,y:220,spreadX:250,spreadY:230,size:[2,6],life:780,delay:70,shape:'2px'});
    for(let i=0;i<18;i++){
      const star=el(ctx,'nfx-label');
      star.textContent=i%3?'✦':'✧';
      star.style.cssText += `left:${26+Math.random()*228}px;top:${52+Math.random()*340}px;color:rgba(242,226,255,.94);font-size:${12+Math.random()*18}px;text-shadow:0 0 10px rgba(220,170,255,.95),0 0 18px rgba(145,80,255,.55);`;
      const dx=(Math.random()-.5)*150, dy=-(30+Math.random()*150);
      star.animate([{opacity:0,transform:'scale(.35) rotate(0deg)'},{opacity:.96,transform:`translate(${dx*.22}px,${dy*.2}px) scale(1.12) rotate(${Math.random()*80-40}deg)`,offset:.28},{opacity:0,transform:`translate(${dx}px,${dy}px) scale(.35) rotate(${Math.random()*180-90}deg)`}],{duration:760+Math.random()*220,delay:60+i*36,fill:'forwards',easing:'ease-out'});
    }
    ctx.card.animate([{transform:'translate(0,0) scale(1) rotate(0deg)',filter:'blur(0px)'},{transform:'translate(0,-12px) scale(1.03) rotate(0deg)',filter:'blur(1px)',offset:.55},{transform:'translate(0,-22px) scale(1.06) rotate(0deg)',filter:'blur(1.8px)'}],{duration:940,fill:'forwards'});
    await wait(540);
    fadeCard(ctx,940,'brightness(.26) blur(3px)');
    ctx.cleanup(2100); await wait(1090);
  };

  window.playDarkLordVampireEclipse = async function(cardEl){
    const ctx=setup(cardEl,'#650000');
    const sweepSmoke=(color,delay=0)=>{ for(let i=0;i<20;i++){ const s=el(ctx,'','full'); const side=i%2===0; const left=side?(-60-Math.random()*60):(220+Math.random()*80); const dx=side?(140+Math.random()*140):-(140+Math.random()*140); s.style.cssText=`position:absolute;left:${left}px;top:${50+Math.random()*340}px;width:${120+Math.random()*120}px;height:${18+Math.random()*28}px;border-radius:999px;opacity:0;background:linear-gradient(90deg, rgba(0,0,0,0), ${color}, rgba(0,0,0,0));filter:blur(${8+Math.random()*10}px);transform:rotate(${Math.random()*24-12}deg);`; s.animate([{opacity:0,transform:`translateX(0) rotate(${Math.random()*24-12}deg) scaleX(.45)`},{opacity:.9,transform:`translateX(${dx*.55}px) rotate(${Math.random()*24-12}deg) scaleX(1)`},{opacity:0,transform:`translateX(${dx}px) rotate(${Math.random()*24-12}deg) scaleX(1.04)`}],{duration:1180,delay:delay+i*24,fill:'forwards'}); } };
    sweepSmoke('rgba(120,0,0,.24)',0); sweepSmoke('rgba(12,12,12,.26)',120); bats(ctx,32,0); bats(ctx,12,180); vignette(ctx,'rgba(120,0,0,.20)','rgba(0,0,0,.40)',.52,1280);

     
    ctx.card.animate([
      {transform:'translate(0,0) scale(1)',filter:'none'},
      {transform:'translate(-3px,-2px) scale(1.012)',filter:'brightness(.96)',offset:.18},
      {transform:'translate(3px,1px) scale(1.018)',filter:'brightness(.90)',offset:.36},
      {transform:'translate(-2px,-3px) scale(1.012)',filter:'brightness(.84)',offset:.55},
      {transform:'translate(0,0) scale(1)',filter:'brightness(.78)',offset:1}
    ],{duration:1040,fill:'forwards',easing:'ease-in-out'});

    await wait(1040);
    flash(ctx,'rgba(140,0,0,.22)',170);
    bats(ctx,20,0);
    for(let i=0;i<10;i++){
      const wing=el(ctx,'','full');
      const top=110+Math.random()*220;
      wing.style.cssText=`position:absolute;left:${20+Math.random()*165}px;top:${top}px;width:${90+Math.random()*90}px;height:${20+Math.random()*24}px;border-radius:60% 40% 70% 30%;opacity:0;background:linear-gradient(90deg,transparent,rgba(0,0,0,.42),rgba(110,0,0,.26),transparent);filter:blur(${5+Math.random()*5}px);transform:rotate(${-26+Math.random()*34}deg) scaleX(.35);`;
      wing.animate([
        {opacity:0,transform:`translate(0,0) rotate(${-26+Math.random()*34}deg) scaleX(.35)`},
        {opacity:.64,transform:`translate(${28+Math.random()*32}px,${-26-Math.random()*22}px) rotate(${-34+Math.random()*42}deg) scaleX(1)`,offset:.32},
        {opacity:0,transform:`translate(${100+Math.random()*70}px,${-92-Math.random()*70}px) rotate(${-42+Math.random()*52}deg) scaleX(1.08)`}
      ],{duration:820+Math.random()*200,delay:i*30,fill:'forwards',easing:'cubic-bezier(.18,.84,.22,1)'});
    }
    ctx.card.animate([
      {opacity:1,transform:'translate(0,0) rotate(0deg) scale(1)',filter:'brightness(.80) blur(0px)'},
      {opacity:.96,transform:'translate(10px,-10px) rotate(-2deg) scale(1.03)',filter:'brightness(.74) blur(.6px)',offset:.18},
      {opacity:.78,transform:'translate(42px,-38px) rotate(5deg) scale(.94)',filter:'brightness(.56) blur(1.5px)',offset:.42},
      {opacity:.36,transform:'translate(98px,-98px) rotate(-10deg) scale(.70)',filter:'brightness(.30) blur(3.5px)',offset:.72},
      {opacity:0,transform:'translate(166px,-168px) rotate(-20deg) scale(.38)',filter:'brightness(.08) blur(6px)'}
    ],{duration:1040,fill:'forwards',easing:'cubic-bezier(.18,.84,.18,1)'});
    ctx.cleanup(2550); await wait(1160);
  };
  window.playFirstScarletPoolOblivion = async function(cardEl){
    const ctx=setup(cardEl,'#8f0000');
    const dark=el(ctx,'','full');
    dark.style.cssText='position:absolute;inset:-8%;opacity:0;background:radial-gradient(circle at 50% 52%,rgba(130,0,0,.10) 0%,rgba(80,0,0,.22) 42%,rgba(0,0,0,.68) 86%);filter:blur(7px);mix-blend-mode:multiply;';
    dark.animate([
      {opacity:0,transform:'scale(.92)'},
      {opacity:.58,transform:'scale(1.02)',offset:.28},
      {opacity:.86,transform:'scale(1.10)',offset:.7},
      {opacity:.95,transform:'scale(1.16)'}
    ],{duration:1180,fill:'forwards',easing:'ease-out'});

    const aura=el(ctx,'dbdx-red-aura','full');
    aura.style.background='radial-gradient(circle at 50% 62%,rgba(180,0,0,.36),rgba(86,0,0,.26) 45%,transparent 78%)';
    aura.style.filter='blur(8px) saturate(1.25)';
    aura.animate([
      {opacity:0,transform:'scale(.74)'},
      {opacity:.38,transform:'scale(.98)',offset:.24},
      {opacity:.62,transform:'scale(1.14)',offset:.64},
      {opacity:.20,transform:'scale(1.25)'}
    ],{duration:1280,fill:'forwards'});

    for(let i=0;i<18;i++){
      const fog=el(ctx,'');
      const w=70+Math.random()*145;
      const h=36+Math.random()*70;
      fog.style.cssText=`position:absolute;left:${-30+Math.random()*250}px;top:${330+Math.random()*120}px;width:${w}px;height:${h}px;border-radius:50%;opacity:0;background:radial-gradient(ellipse at center,rgba(120,0,0,.34),rgba(34,0,0,.18) 48%,transparent 74%);filter:blur(${12+Math.random()*10}px);`;
      const dx=(Math.random()-.5)*70;
      const dy=-(40+Math.random()*105);
      fog.animate([
        {opacity:0,transform:'translateY(24px) scale(.6)'},
        {opacity:.74,transform:`translate(${dx*.35}px,${dy*.35}px) scale(1)`,offset:.38},
        {opacity:0,transform:`translate(${dx}px,${dy}px) scale(1.12)`}
      ],{duration:900+Math.random()*260,delay:i*34,fill:'forwards',easing:'ease-out'});
    }

    for(let i=0;i<14;i++){
      const vine=el(ctx,'');
      vine.style.cssText=`position:absolute;left:${10+Math.random()*260}px;top:${300+Math.random()*160}px;width:${2+Math.random()*3}px;height:${80+Math.random()*160}px;border-radius:999px;opacity:0;background:linear-gradient(180deg,rgba(160,0,0,0),rgba(115,0,0,.88),rgba(8,0,0,0));filter:blur(${Math.random()*1.6}px);transform-origin:bottom center;`;
      vine.animate([
        {opacity:0,transform:'translateY(40px) scaleY(.18) rotate(0deg)'},
        {opacity:.55,transform:`translateY(0) scaleY(1) rotate(${Math.random()*20-10}deg)`,offset:.45},
        {opacity:0,transform:`translateY(34px) scaleY(.62) rotate(${Math.random()*24-12}deg)`}
      ],{duration:860+Math.random()*180,delay:50+i*28,fill:'forwards',easing:'ease-out'});
    }

    await wait(260);
    shakeCard(ctx,5,130,3);
    ctx.card.animate([
      {opacity:1,transform:'translateY(0) scaleX(1) scaleY(1) skewX(0deg)',filter:'none'},
      {opacity:.94,transform:'translateY(22px) scaleX(1.08) scaleY(.92) skewX(-3deg)',filter:'brightness(.82) saturate(1.15)',offset:.26},
      {opacity:.72,transform:'translateY(78px) scaleX(1.18) scaleY(.68) skewX(6deg)',filter:'brightness(.58) blur(1.6px) saturate(1.25)',offset:.54},
      {opacity:.36,transform:'translateY(132px) scaleX(1.34) scaleY(.36) skewX(-8deg)',filter:'brightness(.34) blur(3px) saturate(1.3)',offset:.78},
      {opacity:0,transform:'translateY(188px) scaleX(1.62) scaleY(.10) skewX(10deg)',filter:'brightness(.16) blur(5px) saturate(1.35)'}
    ],{duration:1050,fill:'forwards',easing:'cubic-bezier(.54,0,.88,.42)'});
    ctx.cleanup(2100);
    await wait(1200);
  };
  window.playSlasherFinalSceneEnd = async function(cardEl){
    const ctx=setup(cardEl,'#ededed');
    haze(ctx,'linear-gradient(180deg, rgba(140,140,148,.14), rgba(6,6,9,.46))',980,12,.62);
    vignette(ctx,'rgba(105,0,0,.14)','rgba(0,0,0,.14)',.28,900);
    [[-18,0],[18,0],[0,-10]].forEach(([dx,dy],i)=>{
      const g=ghostClone(ctx,dx,dy,'rgba(255,255,255,.08)',520+i*40);
      g.style.filter='blur(1.8px) brightness(1.04)';
    });
    for(let i=0;i<6;i++){
      const beam=el(ctx,'');
      beam.style.cssText=`position:absolute;left:${26+i*42}px;top:0;width:2px;height:500px;opacity:0;background:linear-gradient(180deg, rgba(255,255,255,.0), rgba(255,255,255,.16), rgba(0,0,0,.0));filter:blur(1px);`;
      beam.animate([{opacity:0},{opacity:.42,offset:.3},{opacity:0}],{duration:520,delay:i*40,fill:'forwards'});
    }
    await wait(140);
    ctx.card.animate([
      {opacity:1,transform:'translate(0,0) scale(1)',filter:'none'},
      {opacity:.98,transform:'translate(0,-8px) scale(1.03)',filter:'brightness(1.02)',offset:.2},
      {opacity:.95,transform:'translate(0,-18px) scale(1.12)',filter:'brightness(.98) blur(1.5px)',offset:.45},
      {opacity:.92,transform:'translate(0,-10px) scale(1.08)',filter:'brightness(1)',offset:.62},
      {opacity:.5,transform:'translate(4px,-2px) scale(.98)',filter:'brightness(.46) blur(2.4px)',offset:.84},
      {opacity:0,transform:'translate(10px,0) scale(.94)',filter:'brightness(.26) blur(3px)'}
    ],{duration:900,fill:'forwards',easing:'cubic-bezier(.18,.84,.22,1)'});
    await wait(300);
    const s=el(ctx,'dbdx-slash'); s.style.top='232px'; s.animate([{opacity:0,transform:'rotate(-18deg) scaleX(.04)'},{opacity:1,transform:'rotate(-18deg) scaleX(1)'},{opacity:0,transform:'rotate(-18deg) translateX(46px) scaleX(1.08)'}],{duration:460,fill:'forwards'});
    flash(ctx,'rgba(255,255,255,.08)',80);
    flash(ctx,'rgba(120,0,0,.18)',160);
    shakeCard(ctx,13,320,1);
    await wait(170);
    fadeCard(ctx,860,'brightness(.20) blur(2.8px)');
    ctx.cleanup(1800); await wait(980);
  };

  window.playOnryoHairCurtainBlackout = async function(cardEl){
    addBodyClassEffect('static', 2050); const ctx=setup(cardEl,'#e7ebf0'); noiseGlitch(ctx,12,0); noiseGlitch(ctx,8,240);
    for(let i=0;i<38;i++){ const h=el(ctx,'','full'); const w=7+Math.random()*16, left=Math.random()*280, max=180+Math.random()*180; h.style.cssText=`position:absolute;left:${left}px;top:-8px;width:${w}px;height:${max}px;opacity:0;background:linear-gradient(180deg, rgba(25,25,25,0) 0%, rgba(12,12,12,.98) 18%, rgba(2,2,2,1) 100%);filter:blur(${.4+Math.random()*1.2}px);border-radius:0 0 18px 18px;transform-origin:50% 0%;`; h.animate([{opacity:0,transform:'translateY(-26px) scaleY(.18)'},{opacity:.92,transform:`translateY(${14+Math.random()*12}px) scaleY(1)`,offset:.34},{opacity:.92,transform:`translateY(${36+Math.random()*28}px) scaleY(1)`}],{duration:860+Math.random()*220,delay:i*18,fill:'forwards',easing:'cubic-bezier(.18,.82,.18,1)'}); }
    haze(ctx,'radial-gradient(circle at 50% 35%, rgba(200,220,255,.06), rgba(0,0,0,.0) 42%, rgba(0,0,0,.76) 92%)',1200,18,.85); vignette(ctx,'rgba(0,0,0,0)','rgba(0,0,0,.12)',.56,1160); await wait(460); const fog=el(ctx,'','full'); fog.style.cssText='position:absolute;left:0;right:0;top:0;height:100%;opacity:0;background:linear-gradient(180deg, rgba(0,0,0,.76), rgba(0,0,0,.22) 56%, rgba(0,0,0,0) 100%);filter:blur(10px);'; fog.animate([{opacity:0},{opacity:.86,offset:.32},{opacity:.4}],{duration:1100,fill:'forwards'}); await wait(520); fadeCard(ctx,780,'brightness(.10) blur(2.6px)'); ctx.cleanup(1900); await wait(900);
  };
      window.playTwinsSplitFlopRuin = async function(cardEl){
    const ctx=setup(cardEl,'#8b0000');
    vignette(ctx,'rgba(255,40,40,.18)','rgba(0,0,0,.08)',.82,1180);
    haze(ctx,'radial-gradient(circle at 50% 55%, rgba(100,0,0,.12), rgba(0,0,0,.76) 80%)',1020,18,.72);
    particles(ctx,{count:22,color:'rgba(170,0,0,.62)',x:145,y:250,spreadX:200,spreadY:180,size:[5,12],life:820});
    ctx.card.animate([{transform:'scale(1) translate(0,0) rotate(0deg)'},{transform:'scale(1.03) translate(-6px,4px) rotate(-2deg)'},{transform:'scale(1.06) translate(7px,-4px) rotate(2deg)'},{transform:'scale(1.10) translate(-8px,6px) rotate(-3deg)'},{transform:'scale(1.08) translate(5px,2px) rotate(1deg)'}],{duration:760,fill:'forwards'});
    await wait(120); shakeCard(ctx,12,320,1); await wait(240);
    for(let i=0;i<4;i++){ const wh=el(ctx,'','full'); wh.style.cssText=`position:absolute;left:${70+i*18}px;top:${235+i*4}px;width:${120+i*10}px;height:14px;border-radius:99px;opacity:0;background:linear-gradient(90deg, transparent, rgba(255,255,255,.6), rgba(160,0,0,.8), transparent);filter:blur(6px);transform:rotate(${-16+i*2}deg);`; wh.animate([{opacity:0,transform:`rotate(${-16+i*2}deg) translateX(-18px) scaleX(.2)`},{opacity:.9,transform:`rotate(${-16+i*2}deg) translateX(0) scaleX(1)`},{opacity:0,transform:`rotate(${-16+i*2}deg) translateX(24px) scaleX(1.08)`}],{duration:220,delay:i*22,fill:'forwards'}); }
    ctx.card.animate([{opacity:1,transform:'translate(0,0) scale(1.08)',filter:'none'},{opacity:1,transform:'translate(14px,-16px) scale(1.14) rotate(-2deg)',filter:'brightness(1.04)',offset:.28},{opacity:.92,transform:'translate(40px,-34px) scale(1.05) rotate(-4deg)',filter:'blur(1px)',offset:.52},{opacity:.44,transform:'translate(92px,-58px) scale(.92) rotate(-6deg)',filter:'brightness(.54) blur(2.2px)',offset:.82},{opacity:0,transform:'translate(148px,-76px) scale(.84) rotate(-8deg)',filter:'brightness(.3) blur(4px)'}],{duration:560,fill:'forwards',easing:'cubic-bezier(.2,.84,.18,1)'});
    flash(ctx,'rgba(140,0,0,.16)',120); ctx.cleanup(1700); await wait(900);
  };
      })();
(() => {
  const wait = ms => new Promise(r => setTimeout(r, ms));
  function setup(cardEl, color='#d8dde3'){
    if(!cardEl) return null;
    cardEl.classList.add('dbdx-card-host');
    cardEl.querySelectorAll(':scope > .dbdx-overlay,:scope > .dbdx-full').forEach(x=>x.remove());
    const overlay=document.createElement('div'); overlay.className='dbdx-overlay';
    const canvas=document.createElement('div'); canvas.className='dbdx-canvas';
    const full=document.createElement('div'); full.className='dbdx-full';
    overlay.appendChild(canvas); cardEl.append(overlay, full);
    const rect=cardEl.getBoundingClientRect();
    canvas.style.transform=`scale(${Math.max(rect.width,1)/290}, ${Math.max(rect.height,1)/500})`;
    canvas.style.setProperty('--c', color); full.style.setProperty('--c', color);
    return {card:cardEl, canvas, full, color, cleanup(ms=1700){setTimeout(()=>{overlay.remove();full.remove();cardEl.classList.remove('dbdx-hide-base');}, ms)}};
  }
  function el(ctx, cls='', parent='canvas') { const d=document.createElement('div'); if(cls)d.className=cls; (parent==='full'?ctx.full:ctx.canvas).appendChild(d); return d; }
  function screenRoot(z=2147483000){ const root=document.createElement('div'); root.style.cssText=`position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:${z};`; document.body.appendChild(root); return root; }
  function cleanupRoot(root, ms=1600){ setTimeout(()=>{try{root.remove()}catch(e){}},ms); }
  function flash(ctx, color='rgba(255,255,255,.45)', dur=220){ const f=el(ctx,'','full'); f.style.cssText=`position:absolute;inset:0;opacity:0;background:${color};mix-blend-mode:screen;z-index:90;`; f.animate([{opacity:0},{opacity:1,offset:.18},{opacity:0}],{duration:dur,fill:'forwards'}); }
  function shake(card, strength=8, dur=280, reps=1){ card.animate([{transform:'translate(0,0)'},{transform:`translate(${-strength}px,${Math.round(strength*.45)}px)`},{transform:`translate(${strength}px,${-Math.round(strength*.35)}px)`},{transform:`translate(${-Math.round(strength*.5)}px,${Math.round(strength*.2)}px)`},{transform:'translate(0,0)'}],{duration:dur,iterations:reps,easing:'ease-in-out'}); }
  function particle(ctx,{count=18,color='#fff',x=145,y=250,spreadX=180,spreadY=180,size=[4,10],life=700}={}){ for(let i=0;i<count;i++){ const p=el(ctx,''); const s=size[0]+Math.random()*(size[1]-size[0]); const dx=(Math.random()-.5)*spreadX, dy=(Math.random()-.5)*spreadY; p.style.cssText=`position:absolute;left:${x}px;top:${y}px;width:${s}px;height:${s}px;border-radius:50%;background:${color};box-shadow:0 0 10px ${color};opacity:0;`; p.animate([{opacity:0,transform:'translate(0,0) scale(.4)'},{opacity:.9,transform:`translate(${dx*.35}px,${dy*.35}px) scale(1)`,offset:.25},{opacity:0,transform:`translate(${dx}px,${dy}px) scale(.2)`}],{duration:life+Math.random()*220,delay:i*9,fill:'forwards'}); } }
  function ghost(ctx, dx, dy, color='rgba(255,255,255,.16)', dur=650){ const g=el(ctx,'dbdx-ghost','full'); g.style.background=color; g.style.borderColor='transparent'; g.animate([{opacity:0,transform:'translate(0,0)'},{opacity:.55,transform:`translate(${dx*.45}px,${dy*.45}px)`,offset:.4},{opacity:0,transform:`translate(${dx}px,${dy}px)`}],{duration:dur,fill:'forwards',easing:'ease-out'}); return g; }
  function fade(card, ms=700, filter='brightness(.4) blur(2px)'){ card.animate([{opacity:1,filter:'none'},{opacity:0,filter}],{duration:ms,fill:'forwards',easing:'ease'}); }

  window.playHillbillySpringBlur = async function(cardEl){
    const ctx=setup(cardEl,'#ff9f35'); if(!ctx) return;
    for(let i=0;i<26;i++){
      const heat=el(ctx,'','full');
      heat.style.cssText=`position:absolute;left:${12+Math.random()*270}px;top:${70+Math.random()*270}px;width:${2+Math.random()*3}px;height:${85+Math.random()*155}px;opacity:0;background:linear-gradient(180deg, rgba(255,230,150,0), rgba(255,166,56,.95), rgba(110,24,0,0));filter:blur(${1+Math.random()*2}px);transform-origin:50% 100%;`;
      heat.animate([{opacity:0,transform:'translateY(20px) scaleY(.16)'},{opacity:.95,transform:'translateY(0) scaleY(1)',offset:.33},{opacity:0,transform:'translateY(-16px) scaleY(1.18)'}],{duration:420+Math.random()*120,delay:i*12,fill:'forwards'});
    }
    for(let i=0;i<8;i++) ghost(ctx,-12+i*4,Math.random()*4-2,'rgba(255,170,70,.15)',420+i*22);
    ctx.card.animate([{transform:'translate(0,0) scale(1)',filter:'none'},{transform:'translate(-5px,1px) scale(1.02)',filter:'blur(.8px)'},{transform:'translate(5px,-1px) scale(1.03)',filter:'blur(1.1px)'},{transform:'translate(-6px,1px) scale(1.035)',filter:'blur(1.3px)'},{transform:'translate(6px,-1px) scale(1.04)',filter:'blur(1.4px)'},{transform:'translate(0,0) scale(1.04)',filter:'blur(.8px)'}],{duration:90,iterations:7,fill:'forwards',easing:'linear'});
    shake(ctx.card,9,90,7);
    await wait(500);
    for(let i=0;i<14;i++){
      const streak=el(ctx,'','full');
      streak.style.cssText=`position:absolute;left:${-120+Math.random()*120}px;top:${145+Math.random()*145}px;width:${230+Math.random()*190}px;height:${10+Math.random()*10}px;border-radius:999px;opacity:0;background:linear-gradient(90deg, transparent, rgba(255,255,255,.45), rgba(255,154,40,.62), transparent);filter:blur(${7+Math.random()*6}px);transform:rotate(${Math.random()*10-5}deg);`;
      streak.animate([{opacity:0,transform:'translateX(0) scaleX(.12)'},{opacity:.96,transform:`translateX(${60+Math.random()*34}px) scaleX(1)`,offset:.28},{opacity:0,transform:`translateX(${230+Math.random()*95}px) scaleX(1.24)`}],{duration:360,delay:i*8,fill:'forwards'});
    }
    ctx.card.animate([{opacity:1,transform:'translate(0,0) scale(1.04)',filter:'none'},{opacity:1,transform:'translate(20px,-6px) skewX(-9deg) scale(1.05)',filter:'brightness(1.05)',offset:.18},{opacity:.96,transform:'translate(98px,-3px) skewX(-16deg) scale(1.03)',filter:'blur(1.9px)',offset:.42},{opacity:.56,transform:'translate(210px,-1px) skewX(-20deg) scale(.96)',filter:'blur(4.4px) brightness(.72)',offset:.76},{opacity:0,transform:'translate(340px,0) skewX(-22deg) scale(.88)',filter:'blur(8px) brightness(.4)'}],{duration:630,fill:'forwards',easing:'cubic-bezier(.16,.84,.2,1)'});
    ctx.cleanup(1750); await wait(1000);
  };

    })();
(() => {
  const wait = ms => new Promise(r => setTimeout(r, ms));
  function setup(cardEl, color='#fff'){
    if(!cardEl) throw new Error('Missing card element');
    cardEl.classList.add('dbdx-card-host');
    cardEl.querySelectorAll(':scope > .dbdx-overlay,:scope > .dbdx-full').forEach(n=>n.remove());
    const overlay=document.createElement('div'); overlay.className='dbdx-overlay';
    const canvas=document.createElement('div'); canvas.className='dbdx-canvas';
    const full=document.createElement('div'); full.className='dbdx-full';
    overlay.appendChild(canvas); cardEl.append(overlay, full);
    const rect=cardEl.getBoundingClientRect();
    canvas.style.transform=`scale(${Math.max(rect.width||290,1)/290}, ${Math.max(rect.height||500,1)/500})`;
    canvas.style.setProperty('--c', color); full.style.setProperty('--c', color);
    return {card:cardEl, canvas, full, color, cleanup(ms=1700){setTimeout(()=>{try{overlay.remove();full.remove();cardEl.classList.remove('dbdx-hide-base');}catch(e){}}, ms)}};
  }
  function el(ctx, cls='', parent='canvas'){
    const d=document.createElement('div');
    if(cls) d.className=cls;
    (parent==='full'?ctx.full:ctx.canvas).appendChild(d);
    return d;
  }
  function screenRoot(){ const root=document.createElement('div'); root.style.cssText='position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:2147483000;'; document.body.appendChild(root); return root; }
  function cleanupRoot(root,ms=1600){ setTimeout(()=>{try{root.remove()}catch(e){}},ms); }
  function flash(ctx,color='rgba(255,255,255,.7)',dur=260){ const f=el(ctx,'','full'); f.style.cssText=`position:absolute;inset:0;background:${color};opacity:0;z-index:90;mix-blend-mode:screen;`; f.animate([{opacity:0},{opacity:1,offset:.18},{opacity:0}],{duration:dur,fill:'forwards'}); return f; }
  function shake(card,strength=8,dur=320,reps=1){ card.animate([{transform:'translate(0,0)'},{transform:`translate(${-strength}px,${Math.round(strength*.5)}px)`},{transform:`translate(${strength}px,${-Math.round(strength*.4)}px)`},{transform:`translate(${-Math.round(strength*.6)}px,${Math.round(strength*.25)}px)`},{transform:'translate(0,0)'}],{duration:dur,iterations:reps,easing:'ease-in-out'}); }
  function particle(ctx,{count=20,color='#fff',x=145,y=250,spreadX=180,spreadY=180,size=[4,10],life=760,delay=0}={}){ for(let i=0;i<count;i++){ const p=el(ctx,''); const s=size[0]+Math.random()*(size[1]-size[0]); const dx=(Math.random()-.5)*spreadX, dy=(Math.random()-.5)*spreadY; p.style.cssText=`position:absolute;left:${x}px;top:${y}px;width:${s}px;height:${s}px;border-radius:50%;background:${color};box-shadow:0 0 10px ${color};opacity:0;`; p.animate([{opacity:0,transform:'translate(0,0) scale(.35)'},{opacity:.95,transform:`translate(${dx*.35}px,${dy*.35}px) scale(1)`,offset:.25},{opacity:0,transform:`translate(${dx}px,${dy}px) scale(.2)`}],{duration:life+Math.random()*220,delay:delay+i*8,fill:'forwards'}); }}
  function fadeCard(ctx,ms=700,filter='brightness(.4) blur(2px)'){ ctx.card.animate([{opacity:1,filter:'none'},{opacity:0,filter}],{duration:ms,fill:'forwards',easing:'ease'}); }

    window.playXenomorphPredatorVenomFade = async function(cardEl){
    const ctx=setup(cardEl,'#59ff91');
    const scanWash=el(ctx,'','full'); scanWash.style.cssText='position:absolute;inset:0;opacity:0;background:linear-gradient(180deg,rgba(255,0,0,.10),rgba(255,0,0,.08));mix-blend-mode:screen;';
    scanWash.animate([{opacity:0},{opacity:.18,offset:.24},{opacity:0}],{duration:720,fill:'forwards'});
    const scan=el(ctx,'','full'); scan.style.cssText='position:absolute;left:0;top:-28%;width:100%;height:24%;opacity:0;background:linear-gradient(180deg,rgba(255,0,0,0),rgba(255,70,70,.78),rgba(255,210,210,.96),rgba(255,70,70,.78),rgba(255,0,0,0));filter:blur(2px);mix-blend-mode:screen;';
    scan.animate([{opacity:0,transform:'translateY(0)'},{opacity:.96,transform:'translateY(220%)',offset:.55},{opacity:0,transform:'translateY(430%)'}],{duration:720,fill:'forwards',easing:'linear'});
    ctx.card.animate([{transform:'translate(0,0) scale(1)',filter:'none'},{transform:'translate(-3px,0) scale(1.012)',filter:'brightness(1.04)'},{transform:'translate(3px,0) scale(1.016)',filter:'brightness(1.06)'},{transform:'translate(-4px,0) scale(1.018)',filter:'brightness(1.08)'},{transform:'translate(4px,0) scale(1.018)',filter:'brightness(1.08)'},{transform:'translate(0,0) scale(1.02)',filter:'brightness(1.05)'}],{duration:90,iterations:6,fill:'forwards'});
    await wait(760);
    const slash=el(ctx,'','full'); slash.style.cssText='position:absolute;left:-28px;top:198px;width:360px;height:10px;border-radius:99px;opacity:0;background:linear-gradient(90deg,transparent,rgba(220,255,220,.90),rgba(90,255,130,.92),transparent);box-shadow:0 0 12px rgba(90,255,130,.48);transform:rotate(-22deg) scaleX(.08);';
    slash.animate([{opacity:0,transform:'rotate(-22deg) scaleX(.08)'},{opacity:1,transform:'rotate(-22deg) scaleX(1)'},{opacity:0,transform:'rotate(-22deg) translateX(26px) scaleX(1.06)'}],{duration:320,fill:'forwards'});
    flash(ctx,'rgba(180,255,180,.10)',80);
    for(let i=0;i<18;i++){ const haze=el(ctx,'','full'); haze.style.cssText=`position:absolute;left:${30+Math.random()*190}px;top:${60+Math.random()*220}px;width:${90+Math.random()*110}px;height:${36+Math.random()*54}px;border-radius:50%;opacity:0;background:radial-gradient(ellipse at center,rgba(88,255,132,.18),rgba(38,130,54,.10) 42%,transparent 72%);filter:blur(${12+Math.random()*8}px);`; const dx=(Math.random()-.5)*40,dy=(Math.random()-.5)*36; haze.animate([{opacity:0,transform:'scale(.7)'},{opacity:.52,transform:`translate(${dx}px,${dy}px) scale(1)`,offset:.34},{opacity:0,transform:`translate(${dx*1.6}px,${dy*1.8}px) scale(1.12)`}],{duration:760+Math.random()*180,delay:i*26,fill:'forwards'}); }
    particle(ctx,{count:20,color:'rgba(150,255,120,.85)',x:145,y:210,spreadX:170,spreadY:140,size:[3,8],life:720});
    ctx.card.animate([{opacity:1,transform:'translate(0,0) scale(1.02)',filter:'none'},{opacity:1,transform:'translate(0,-12px) scale(1.10,1.14)',filter:'brightness(1.10)',offset:.22},{opacity:.94,transform:'translate(6px,-28px) scale(1.18,1.24)',filter:'brightness(1.06) blur(.8px)',offset:.42},{opacity:.84,transform:'translate(12px,-14px) scale(1.08,1.06)',filter:'brightness(.84) blur(1.4px)',offset:.68},{opacity:0,transform:'translate(22px,-8px) scale(.94)',filter:'brightness(.30) blur(3.8px)'}],{duration:900,delay:40,fill:'forwards',easing:'cubic-bezier(.18,.84,.2,1)'});
    ctx.cleanup(2200); await wait(1200);
  };
})();
(() => {
  const wait = ms => new Promise(r => setTimeout(r, ms));
  function setup(cardEl, color='#fff'){
    if(!cardEl) throw new Error('Missing card element');
    cardEl.classList.add('dbdx-card-host');
    cardEl.querySelectorAll(':scope > .dbdx-overlay,:scope > .dbdx-full').forEach(n=>n.remove());
    const overlay=document.createElement('div'); overlay.className='dbdx-overlay';
    const canvas=document.createElement('div'); canvas.className='dbdx-canvas';
    const full=document.createElement('div'); full.className='dbdx-full';
    overlay.appendChild(canvas); cardEl.append(overlay, full);
    const rect=cardEl.getBoundingClientRect();
    canvas.style.transform=`scale(${Math.max(rect.width||290,1)/290}, ${Math.max(rect.height||500,1)/500})`;
    canvas.style.setProperty('--c', color); full.style.setProperty('--c', color);
    return {card:cardEl, canvas, full, color, cleanup(ms=1700){setTimeout(()=>{try{overlay.remove();full.remove();cardEl.classList.remove('dbdx-hide-base');}catch(e){}}, ms)}};
  }
  function el(ctx, cls='', parent='canvas'){
    const d=document.createElement('div');
    if(cls) d.className=cls;
    (parent==='full'?ctx.full:ctx.canvas).appendChild(d);
    return d;
  }
  function screenRoot(){ const root=document.createElement('div'); root.style.cssText='position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:2147483000;'; document.body.appendChild(root); return root; }
  function cleanupRoot(root,ms=1600){ setTimeout(()=>{try{root.remove()}catch(e){}},ms); }
  function flash(ctx,color='rgba(255,255,255,.7)',dur=260){ const f=el(ctx,'','full'); f.style.cssText=`position:absolute;inset:0;background:${color};opacity:0;z-index:90;mix-blend-mode:screen;`; f.animate([{opacity:0},{opacity:1,offset:.18},{opacity:0}],{duration:dur,fill:'forwards'}); return f; }
  function shake(card,strength=8,dur=320,reps=1){ card.animate([{transform:'translate(0,0)'},{transform:`translate(${-strength}px,${Math.round(strength*.5)}px)`},{transform:`translate(${strength}px,${-Math.round(strength*.4)}px)`},{transform:`translate(${-Math.round(strength*.6)}px,${Math.round(strength*.25)}px)`},{transform:'translate(0,0)'}],{duration:dur,iterations:reps,easing:'ease-in-out'}); }
  function fadeCard(ctx,ms=700,filter='brightness(.4) blur(2px)'){ ctx.card.animate([{opacity:1,filter:'none'},{opacity:0,filter}],{duration:ms,fill:'forwards',easing:'ease'}); }
  function particle(ctx,{count=20,color='#fff',x=145,y=250,spreadX=180,spreadY=180,size=[4,10],life=760,delay=0}={}){ for(let i=0;i<count;i++){ const p=el(ctx,''); const s=size[0]+Math.random()*(size[1]-size[0]); const dx=(Math.random()-.5)*spreadX, dy=(Math.random()-.5)*spreadY; p.style.cssText=`position:absolute;left:${x}px;top:${y}px;width:${s}px;height:${s}px;border-radius:50%;background:${color};box-shadow:0 0 10px ${color};opacity:0;`; p.animate([{opacity:0,transform:'translate(0,0) scale(.35)'},{opacity:.95,transform:`translate(${dx*.35}px,${dy*.35}px) scale(1)`,offset:.25},{opacity:0,transform:`translate(${dx}px,${dy}px) scale(.2)`}],{duration:life+Math.random()*220,delay:delay+i*8,fill:'forwards'}); }}

  })();
(() => {
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  function setup(cardEl, color='#d8dde3'){
    if(!cardEl) return null;
    cardEl.classList.add('dbdx-card-host');
    cardEl.querySelectorAll?.(':scope > .dbdx-overlay,:scope > .dbdx-full').forEach(x=>x.remove());
    const overlay=document.createElement('div'); overlay.className='dbdx-overlay';
    const canvas=document.createElement('div'); canvas.className='dbdx-canvas';
    const full=document.createElement('div'); full.className='dbdx-full';
    overlay.appendChild(canvas); cardEl.append(overlay, full);
    const rect=cardEl.getBoundingClientRect?.() || {width:290,height:500};
    canvas.style.transform=`scale(${Math.max(rect.width||290,1)/290}, ${Math.max(rect.height||500,1)/500})`;
    canvas.style.setProperty('--c', color); full.style.setProperty('--c', color);
    return {card:cardEl, canvas, full, color, cleanup(ms=1700){setTimeout(()=>{overlay.remove();full.remove();cardEl.classList.remove('dbdx-hide-base');},ms)}};
  }
  function el(ctx, cls='', parent='canvas'){
    const d=document.createElement('div');
    if(cls) d.className=cls;
    (parent==='full'?ctx.full:ctx.canvas).appendChild(d);
    return d;
  }
  function screenRoot(z=2147483000){
    const root=document.createElement('div');
    root.className='dbdx-screen-fx';
    root.style.cssText=`position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:${z};`;
    document.body.appendChild(root);
    return root;
  }
  function cleanupRoot(root, ms=1600){ setTimeout(()=>{try{root.remove()}catch(e){}}, ms); }
  function flash(ctx, color='rgba(255,255,255,.4)', dur=160){
    const f=el(ctx,'','full');
    f.style.cssText=`position:absolute;inset:0;opacity:0;background:${color};mix-blend-mode:screen;z-index:90;`;
    f.animate([{opacity:0},{opacity:1,offset:.2},{opacity:0}],{duration:dur,fill:'forwards'});
    return f;
  }
  function shake(target, strength=7, dur=320, reps=1){
    target.animate([{transform:'translate(0,0)'},{transform:`translate(${-strength}px,${Math.round(strength*.45)}px)`},{transform:`translate(${strength}px,${-Math.round(strength*.35)}px)`},{transform:`translate(${-Math.round(strength*.55)}px,${Math.round(strength*.25)}px)`},{transform:'translate(0,0)'}],{duration:dur,iterations:reps,easing:'ease-in-out'});
  }
  function particle(ctx,{count=24,color=ctx.color,x=145,y=250,spreadX=220,spreadY=220,size=[4,10],life=760,delay=0,shape='50%'}={}){
    for(let i=0;i<count;i++){
      const p=el(ctx,'dbdx-p');
      const s=size[0]+Math.random()*(size[1]-size[0]);
      const dx=(Math.random()-.5)*spreadX, dy=(Math.random()-.5)*spreadY;
      p.style.cssText += `;left:${x}px;top:${y}px;width:${s}px;height:${s}px;border-radius:${shape};--c:${color};--dx:${dx}px;--dy:${dy}px;--rot:${Math.random()*420-210}deg;animation:dbdxParticle ${life+Math.random()*240}ms ease-out ${delay+i*8}ms forwards;`;
    }
  }
  function fadeCard(ctx, ms=700, filter='brightness(.45) blur(2px)'){
    ctx.card.animate([{opacity:1,filter:'none'},{opacity:0,filter}],{duration:ms,fill:'forwards',easing:'ease'});
  }

  })();
(() => {
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  function ensureCleanStyle(){
    if(document.getElementById('dbdx-clean-final-style-v10')) return;
    const style=document.createElement('style');
    style.id='dbdx-clean-final-style-v10';
    style.textContent=`
      .dbdx-screen-fx{position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:2147483000;}
      .dbdx-card-host{position:relative!important;overflow:hidden!important;isolation:isolate!important;}
      .dbdx-overlay{position:absolute;inset:0;pointer-events:none;z-index:60;overflow:hidden;border-radius:inherit;}
      .dbdx-canvas{position:absolute;left:0;top:0;width:290px;height:500px;transform-origin:0 0;pointer-events:none;}
      .dbdx-full{position:absolute;inset:0;pointer-events:none;z-index:61;border-radius:inherit;overflow:hidden;}
.manual-elimination-clone.dbdx-card-host,.mass-elimination-swarm-card.dbdx-card-host{overflow:visible!important;contain:none!important;isolation:isolate!important;}
.manual-elimination-clone.dbdx-card-host>.dbdx-overlay,.manual-elimination-clone.dbdx-card-host>.dbdx-full,.mass-elimination-swarm-card.dbdx-card-host>.dbdx-overlay,.mass-elimination-swarm-card.dbdx-card-host>.dbdx-full{overflow:visible!important;}
    `;
    document.head.appendChild(style);
  }
  function setup(cardEl,color='#d8dde3'){
    ensureCleanStyle();
    if(!cardEl) return null;
    cardEl.classList.add('dbdx-card-host');
    cardEl.querySelectorAll?.(':scope > .dbdx-overlay,:scope > .dbdx-full').forEach(x=>x.remove());
    const overlay=document.createElement('div'); overlay.className='dbdx-overlay';
    const canvas=document.createElement('div'); canvas.className='dbdx-canvas';
    const full=document.createElement('div'); full.className='dbdx-full';
    overlay.appendChild(canvas); cardEl.append(overlay,full);
    const rect=cardEl.getBoundingClientRect?.() || {width:290,height:500};
    canvas.style.transform=`scale(${Math.max(rect.width||290,1)/290}, ${Math.max(rect.height||500,1)/500})`;
    canvas.style.setProperty('--c',color); full.style.setProperty('--c',color);
    return {card:cardEl,canvas,full,color,cleanup(ms=1700){setTimeout(()=>{overlay.remove();full.remove();},ms)}};
  }
  function el(ctx, cls='', parent='canvas'){
    const d=document.createElement('div'); if(cls) d.className=cls;
    (parent==='full'?ctx.full:ctx.canvas).appendChild(d); return d;
  }
  function screenRoot(){ ensureCleanStyle(); const root=document.createElement('div'); root.className='dbdx-screen-fx'; document.body.appendChild(root); return root; }
  function cleanupRoot(root,ms=1700){ setTimeout(()=>{try{root.remove()}catch(e){}},ms); }
  function flash(ctx,color='rgba(255,255,255,.25)',dur=180){ const f=el(ctx,'','full'); f.style.cssText=`position:absolute;inset:0;opacity:0;background:${color};mix-blend-mode:screen;`; f.animate([{opacity:0},{opacity:1,offset:.2},{opacity:0}],{duration:dur,fill:'forwards'}); return f; }
  function particles(ctx,{count=24,color='#fff',x=145,y=250,spreadX=220,spreadY=220,size=[3,9],life=800,delay=0}={}){
    for(let i=0;i<count;i++){
      const p=el(ctx,''); const s=size[0]+Math.random()*(size[1]-size[0]);
      const dx=(Math.random()-.5)*spreadX, dy=(Math.random()-.5)*spreadY;
      p.style.cssText=`position:absolute;left:${x}px;top:${y}px;width:${s}px;height:${s}px;border-radius:50%;opacity:0;background:${color};box-shadow:0 0 10px ${color};`;
      p.animate([{opacity:0,transform:'translate(0,0) scale(.35)'},{opacity:.95,transform:`translate(${dx*.35}px,${dy*.35}px) scale(1)`,offset:.3},{opacity:0,transform:`translate(${dx}px,${dy}px) scale(.2)`}],{duration:life+Math.random()*180,delay:delay+i*8,fill:'forwards'});
    }
  }

  
  window.playHagMudSinkNoBrown = async function(cardEl){
    const ctx=setup(cardEl,'#4a2318'); if(!ctx) return;
    const drawTri=(x1,y1,x2,y2,delay=0)=>{
      const dx=x2-x1, dy=y2-y1, len=Math.hypot(dx,dy), ux=dx/len, uy=dy/len;
      x1-=ux*18; y1-=uy*18; x2+=ux*18; y2+=uy*18;
      const ndx=x2-x1, ndy=y2-y1, nlen=Math.hypot(ndx,ndy), ang=Math.atan2(ndy,ndx)*180/Math.PI;
      const slash=el(ctx,'','full');
      slash.style.cssText=`position:absolute;left:${x1-12}px;top:${y1-1}px;width:${nlen+24}px;height:18px;border-radius:999px;opacity:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.95),rgba(165,96,54,.95),transparent);filter:drop-shadow(0 0 14px rgba(92,44,26,.78));transform:rotate(${ang}deg) scaleX(.06);transform-origin:0 50%;`;
      slash.animate([{opacity:0,transform:`rotate(${ang}deg) scaleX(.06)`},{opacity:1,transform:`rotate(${ang}deg) scaleX(1)`,offset:.32},{opacity:0,transform:`rotate(${ang}deg) scaleX(1.06)`}],{duration:260,delay,fill:'forwards',easing:'cubic-bezier(.16,.84,.22,1)'});
      const s=el(ctx,'','full');
      s.style.cssText=`position:absolute;left:${x1}px;top:${y1}px;width:${nlen}px;height:12px;border-radius:999px;opacity:0;background:linear-gradient(90deg,rgba(24,8,4,.10) 0%,rgba(24,8,4,.98) 8%,rgba(135,70,38,1) 42%,rgba(54,18,9,1) 78%,rgba(24,8,4,.10) 100%);box-shadow:0 0 0 1px rgba(18,6,4,.98),0 0 18px rgba(18,6,4,.86),0 0 26px rgba(92,44,26,.42);filter:drop-shadow(0 0 7px rgba(28,10,6,.75));transform:rotate(${ang}deg) translateX(-14px) scaleX(.04);transform-origin:0 50%;`;
      s.animate([{opacity:0,transform:`rotate(${ang}deg) translateX(-14px) scaleX(.04)`,filter:'blur(1px)'},{opacity:1,transform:`rotate(${ang}deg) translateX(0) scaleX(1.08)`,filter:'blur(0px)',offset:.54},{opacity:1,transform:`rotate(${ang}deg) translateX(0) scaleX(1.04)`,filter:'blur(0px)'}],{duration:320,delay:delay+20,fill:'forwards',easing:'cubic-bezier(.16,.84,.22,1)'});
    };
    const apex=[145,128], left=[98,216], right=[192,216];
    drawTri(left[0],left[1],apex[0],apex[1]); await wait(140);
    drawTri(apex[0],apex[1],right[0],right[1]); await wait(140);
    drawTri(left[0],left[1],right[0],right[1]);

    const pit=el(ctx,'','full');
    pit.style.cssText='position:absolute;left:34px;right:34px;bottom:22px;height:86px;border-radius:50%;opacity:0;background:radial-gradient(ellipse at center,rgba(42,18,10,.88),rgba(25,10,6,.54) 48%,transparent 72%);filter:blur(6px);';
    pit.animate([{opacity:0,transform:'scale(.50,.28)'},{opacity:.86,transform:'scale(1,.58)',offset:.35},{opacity:.66,transform:'scale(1.12,.70)'}],{duration:980,delay:220,fill:'forwards'});

    for(let i=0;i<24;i++){
      const sm=el(ctx,'','full');
      const x=-20+Math.random()*290, y=382+Math.random()*78;
      sm.style.cssText=`position:absolute;left:${x}px;top:${y}px;width:${76+Math.random()*132}px;height:${28+Math.random()*44}px;border-radius:50%;opacity:0;background:radial-gradient(ellipse at center, rgba(78,38,22,.52), rgba(34,14,8,.32) 42%, transparent 74%);filter:blur(${12+Math.random()*10}px);`;
      const dx=(Math.random()-.5)*38, dy=-(18+Math.random()*46);
      sm.animate([{opacity:0,transform:'scale(.66)'},{opacity:.72,transform:`translate(${dx*.45}px,${dy*.35}px) scale(1)`,offset:.34},{opacity:0,transform:`translate(${dx}px,${dy}px) scale(1.16)`}],{duration:960+Math.random()*180,delay:280+i*22,fill:'forwards'});
    }

    ctx.card.animate([
      {transform:'translate(0,0) scale(1)',filter:'none'},
      {transform:'translate(-4px,1px) scale(1.012)',filter:'brightness(.96)',offset:.18},
      {transform:'translate(4px,-1px) scale(1.016)',filter:'brightness(.93)',offset:.36},
      {transform:'translate(-3px,2px) scale(1.012)',filter:'brightness(.90)',offset:.54},
      {transform:'translate(0,0) scale(1.018)',filter:'brightness(.88)'}
    ],{duration:300,fill:'forwards',easing:'ease-in-out'});

    await wait(430);
    ctx.card.style.transformOrigin='50% 100%';
    ctx.card.style.clipPath='inset(0 0 0 0)';
    ctx.card.animate([
      {opacity:1,clipPath:'inset(0 0 0 0)',transform:'translateY(0) scale(1,1)',filter:'none'},
      {opacity:1,clipPath:'inset(12% 0 0 0)',transform:'translateY(14px) scale(1.08,.84)',filter:'brightness(.90) blur(.2px)',offset:.18},
      {opacity:.98,clipPath:'inset(34% 0 0 0)',transform:'translateY(38px) scale(1.16,.58)',filter:'brightness(.72) blur(.8px)',offset:.44},
      {opacity:.80,clipPath:'inset(60% 0 0 0)',transform:'translateY(68px) scale(1.24,.34)',filter:'brightness(.52) blur(1.8px)',offset:.68},
      {opacity:.42,clipPath:'inset(84% 0 0 0)',transform:'translateY(96px) scale(1.30,.16)',filter:'brightness(.32) blur(2.8px)',offset:.86},
      {opacity:0,clipPath:'inset(100% 0 0 0)',transform:'translateY(120px) scale(1.34,.04)',filter:'brightness(.16) blur(4.8px)'}
    ],{duration:980,fill:'forwards',easing:'cubic-bezier(.56,0,.2,1)'});
    ctx.cleanup(1980); await wait(1180);
  };

  function shakeCard(ctx,intensity=8,duration=160,iterations=1){
    try{
      const frames=[
        {transform:'translate(0,0) rotate(0deg)'},
        {transform:`translate(${-intensity}px,${intensity*.45}px) rotate(-1.2deg)`},
        {transform:`translate(${intensity}px,${-intensity*.35}px) rotate(1.1deg)`},
        {transform:`translate(${-intensity*.55}px,${-intensity*.25}px) rotate(-.8deg)`},
        {transform:'translate(0,0) rotate(0deg)'}
      ];
      ctx.card.animate(frames,{duration,iterations,fill:'forwards',easing:'ease-in-out'});
    }catch(e){}
  }
  function fadeCard(ctx,duration=560,filter='brightness(.35) blur(2px)'){
    try{
      ctx.card.animate([
        {opacity:1,filter:'none',transform:'scale(1)'},
        {opacity:.72,filter,transform:'scale(.985)',offset:.55},
        {opacity:0,filter,transform:'translateY(18px) scale(.95)'}
      ],{duration,fill:'forwards',easing:'ease-in'});
    }catch(e){}
  }
  window.playNightmareDreamMelt = async function(cardEl){
    const root=screenRoot();
    root.style.backdropFilter='saturate(.72) brightness(1.12)';
    root.animate([{opacity:0},{opacity:1}],{duration:100,fill:'forwards'});
    const whiteWash=document.createElement('div');
    whiteWash.style.cssText='position:absolute;inset:0;opacity:0;background:rgba(255,255,255,.36);mix-blend-mode:screen;';
    root.appendChild(whiteWash);
    whiteWash.animate([{opacity:0},{opacity:.42,offset:.22},{opacity:.30,offset:.54},{opacity:.38,offset:.78},{opacity:0}],{duration:1780,fill:'forwards',easing:'ease-in-out'});
    for(let i=0;i<28;i++){
      const f=document.createElement('div');
      const w=12+Math.random()*26, h=22+Math.random()*62;
      f.style.cssText=`position:absolute;left:${Math.random()*100}%;top:${22+Math.random()*74}%;width:${w}px;height:${h}px;border-radius:80% 20% 80% 20%;opacity:0;background:linear-gradient(180deg,rgba(5,5,7,.98),rgba(38,40,48,.82));filter:blur(${Math.random()*1.2}px);`;
      root.appendChild(f);
      const dx=(Math.random()-.5)*210, dy=-(55+Math.random()*210), rot=Math.random()*180-90;
      f.animate([{opacity:0,transform:`translate(0,0) rotate(${rot}deg) scale(.7)`},{opacity:.62,transform:`translate(${dx*.35}px,${dy*.35}px) rotate(${rot+10}deg) scale(1)`,offset:.3},{opacity:0,transform:`translate(${dx}px,${dy}px) rotate(${rot+18}deg) scale(.94)`}],{duration:1080+Math.random()*320,delay:i*36,fill:'forwards'});
    }
    cleanupRoot(root,1900);
    const ctx=setup(cardEl,'#c81818');
    const d=el(ctx,'dbdx-dream','full'); d.animate([{opacity:0,transform:'scale(.96)'},{opacity:.95,transform:'scale(1.02)'},{opacity:1,transform:'scale(1.08)'}],{duration:520,fill:'forwards'});
    const bottom=el(ctx,'dbdx-melt-mask','full'); bottom.style.height='270px'; bottom.style.background='linear-gradient(180deg,transparent,rgba(255,42,64,.22),rgba(80,0,0,.62))'; bottom.animate([{opacity:0,transform:'translateY(80px) scaleY(.35)'},{opacity:.9,transform:'translateY(22px) scaleY(.9)'},{opacity:1,transform:'translateY(0) scaleY(1.2)'}],{duration:700,fill:'forwards',easing:'cubic-bezier(.2,.82,.2,1)'});
    for(let i=0;i<9;i++){ const drip=el(ctx,'','full'); drip.style.cssText=`position:absolute;left:${28+i*29}px;top:${250+Math.sin(i)*26}px;width:${12+i%3*5}px;height:${72+Math.random()*96}px;border-radius:999px;opacity:0;background:linear-gradient(180deg,rgba(255,80,100,.0),rgba(170,0,24,.68),rgba(35,0,0,.88));filter:blur(${1+Math.random()*2}px);transform-origin:50% 0%;`; drip.animate([{opacity:0,transform:'translateY(-12px) scaleY(.25)'},{opacity:.78,transform:'translateY(0) scaleY(1)',offset:.38},{opacity:.15,transform:`translateY(${110+Math.random()*70}px) scaleY(1.2)`}],{duration:820+Math.random()*220,delay:90+i*34,fill:'forwards'}); }
    await wait(190); shakeCard(ctx,12,90,4);
    ctx.card.animate([{transform:'translateY(0) scale(1,1)',opacity:1,filter:'none'},{transform:'translateY(22px) scale(1.10,.72) skewX(-6deg)',opacity:.92,filter:'brightness(.78) blur(.8px)',offset:.34},{transform:'translateY(70px) scale(1.20,.42) skewX(8deg)',opacity:.62,filter:'brightness(.52) blur(2.2px)',offset:.64},{transform:'translateY(118px) scale(1.32,.16) skewX(-12deg)',opacity:0,filter:'brightness(.28) blur(5px)'}],{duration:820,fill:'forwards',easing:'cubic-bezier(.58,0,.2,1)'});
    await wait(310); flash(ctx,'rgba(180,0,0,.22)',140); ctx.cleanup(1800); await wait(940);
  };

  
})();
function screenRoot(){
  let root = document.querySelector && document.querySelector('.dbdx-screen-root');
  if (!root) {
    root = document.createElement('div');
    root.className = 'dbdx-screen-root';
    root.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:999999;overflow:hidden;contain:layout paint;';
    (document.body || document.documentElement).appendChild(root);
  }
  return root;
}
function cleanupRoot(root, ms=1800){
  if (!root) return;
  setTimeout(()=>{ try { root.remove(); } catch(e){} }, ms);
}

(() => {
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  const STYLE_ID = 'dbdx-fx-polish-pass-v1';
  const CARD_Z = 2147483400;
  const GLOBAL_ABOVE_Z = 2147483630;
  const GLOBAL_BELOW_Z = 2147483200;

  function ensureStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent = `
      .dbdx-card-host{position:relative!important;overflow:visible!important;isolation:isolate!important;}
      .manual-elimination-clone.dbdx-card-host,.mass-elimination-swarm-card.dbdx-card-host{overflow:visible!important;contain:none!important;isolation:isolate!important;}
      .manual-elimination-clone-shell,.mass-elimination-swarm-shell{overflow:visible!important;contain:none!important;}
      .dbdx-polish-overlay{position:absolute;inset:0;pointer-events:none;z-index:90;overflow:visible;border-radius:inherit;}
      .dbdx-polish-canvas{position:absolute;left:0;top:0;width:290px;height:500px;transform-origin:0 0;pointer-events:none;overflow:visible;}
      .dbdx-polish-full{position:absolute;inset:0;pointer-events:none;z-index:91;border-radius:inherit;overflow:visible;}
      .dbdx-polish-screen{position:fixed;inset:0;pointer-events:none;overflow:hidden;contain:none!important;}
      .dbdx-polish-hide-base > :not(.dbdx-polish-overlay):not(.dbdx-polish-full):not(.dbdx-overlay):not(.dbdx-full){opacity:0!important;}
      .dbdx-polish-transparent-base{background:transparent!important;background-color:transparent!important;background-image:none!important;box-shadow:none!important;border-color:transparent!important;outline-color:transparent!important;}
      .dbdx-polish-slice{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;margin:0!important;pointer-events:none!important;z-index:120!important;border-radius:inherit!important;overflow:hidden!important;transform-origin:center!important;}
      .dbdx-polish-slice .dbdx-overlay,.dbdx-polish-slice .dbdx-full,.dbdx-polish-slice .dbdx-polish-overlay,.dbdx-polish-slice .dbdx-polish-full,.dbdx-polish-slice .restore-overlay{display:none!important;}
      .dbdx-polish-particle{position:absolute;left:145px;top:250px;width:8px;height:8px;border-radius:50%;opacity:0;background:var(--c,#fff);box-shadow:0 0 13px var(--c,#fff);}
      .dbdx-polish-line{position:absolute;height:10px;border-radius:999px;opacity:0;transform-origin:center;filter:drop-shadow(0 0 14px var(--c,#fff));background:linear-gradient(90deg,transparent,rgba(255,255,255,.98),var(--c,#fff),transparent);}
      .dbdx-polish-dash{position:absolute;inset:-18%;opacity:0;border-radius:inherit;background:linear-gradient(90deg,transparent,var(--c,rgba(255,150,40,.7)),transparent);filter:blur(18px);mix-blend-mode:screen;}
      @keyframes dbdxPolishParticle{0%{opacity:0;transform:translate(0,0) scale(.45) rotate(0deg)}18%{opacity:1}100%{opacity:0;transform:translate(var(--dx),var(--dy)) scale(.12) rotate(var(--rot))}}
    `;
    document.head.appendChild(style);
  }

  function root(z=GLOBAL_ABOVE_Z){
    ensureStyle();
    const r=document.createElement('div');
    r.className='dbdx-polish-screen';
    r.style.zIndex=String(z);
    (document.body || document.documentElement).appendChild(r);
    return r;
  }
  function cleanupRoot(r, ms=1800){ setTimeout(()=>r?.remove(), ms); }

  function setup(cardEl, color='#fff'){
    ensureStyle();
    if(!cardEl) return null;
    cardEl.classList.add('dbdx-card-host');
    cardEl.querySelectorAll?.(':scope > .dbdx-polish-overlay,:scope > .dbdx-polish-full').forEach(x=>x.remove());
    const overlay=document.createElement('div'); overlay.className='dbdx-polish-overlay';
    const canvas=document.createElement('div'); canvas.className='dbdx-polish-canvas';
    const full=document.createElement('div'); full.className='dbdx-polish-full';
    overlay.appendChild(canvas); cardEl.append(overlay, full);
    const rect=cardEl.getBoundingClientRect();
    canvas.style.transform=`scale(${Math.max(rect.width,1)/290}, ${Math.max(rect.height,1)/500})`;
    canvas.style.setProperty('--c', color);
    full.style.setProperty('--c', color);
    cardEl.style.overflow='visible';
    return {
      card: cardEl, canvas, full, color,
      cleanup(ms=1700){
        setTimeout(()=>{
          overlay.remove(); full.remove();
          cardEl.classList.remove('dbdx-polish-hide-base','dbdx-polish-transparent-base');
        }, ms);
      }
    };
  }
  function el(ctx, cls='', parent='canvas'){
    const d=document.createElement('div');
    if(cls) d.className=cls;
    (parent==='full'?ctx.full:ctx.canvas).appendChild(d);
    return d;
  }
  function flash(ctx, color='rgba(255,255,255,.7)', dur=230, delay=0){
    const f=el(ctx,'','full');
    f.style.cssText=`position:absolute;inset:0;opacity:0;background:${color};mix-blend-mode:screen;z-index:160;`;
    f.animate([{opacity:0},{opacity:1,offset:.22},{opacity:0}],{duration:dur,delay,fill:'forwards'});
    return f;
  }
  function screenFlash(r, color='rgba(255,255,255,.16)', dur=140, delay=0){
    const f=document.createElement('div');
    f.style.cssText=`position:absolute;inset:0;opacity:0;background:${color};mix-blend-mode:screen;`;
    r.appendChild(f);
    f.animate([{opacity:0},{opacity:1,offset:.25},{opacity:0}],{duration:dur,delay,fill:'forwards'}).finished.catch(()=>{}).then(()=>f.remove());
  }
  function line(ctx,{left=-35,top=245,width=360,height=10,rot=0,color=ctx.color,dur=360,delay=0,z=155}={}){
    const s=el(ctx,'dbdx-polish-line','full');
    s.style.cssText += `;left:${left}px;top:${top}px;width:${width}px;height:${height}px;--c:${color};z-index:${z};transform:rotate(${rot}deg) scaleX(.05);`;
    s.animate([
      {opacity:0,transform:`rotate(${rot}deg) scaleX(.05)`},
      {opacity:1,transform:`rotate(${rot}deg) scaleX(1)`,offset:.42},
      {opacity:0,transform:`rotate(${rot}deg) translateX(${rot < 0 ? 28 : -28}px) scaleX(1.08)`}
    ],{duration:dur,delay,fill:'forwards',easing:'cubic-bezier(.18,.84,.22,1)'});
    return s;
  }
  function screenLine(r,{rot=-15,top='50vh',color='rgba(180,0,0,1)',dur=430,delay=0,height=13}={}){
    const s=document.createElement('div');
    s.style.cssText=`position:absolute;left:-14vw;top:${top};width:128vw;height:${height}px;border-radius:999px;opacity:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.98),${color},rgba(255,255,255,.88),transparent);filter:drop-shadow(0 0 30px ${color});transform:translateY(-50%) rotate(${rot}deg) scaleX(.06);transform-origin:center;z-index:6;`;
    r.appendChild(s);
    s.animate([{opacity:0,transform:`translateY(-50%) rotate(${rot}deg) scaleX(.06)`},{opacity:1,transform:`translateY(-50%) rotate(${rot}deg) scaleX(1)`,offset:.52},{opacity:0,transform:`translateY(-50%) rotate(${rot}deg) scaleX(1.08)`}],{duration:dur,delay,fill:'forwards',easing:'cubic-bezier(.18,.84,.22,1)'});
    return s;
  }
  function shake(target, strength=7, dur=330, reps=1){
    target.animate([{transform:'translate(0,0)'},{transform:`translate(${-strength}px,${Math.round(strength*.45)}px)`},{transform:`translate(${strength}px,${-Math.round(strength*.35)}px)`},{transform:`translate(${-Math.round(strength*.55)}px,${Math.round(strength*.25)}px)`},{transform:'translate(0,0)'}],{duration:dur,iterations:reps,easing:'ease-in-out'});
  }
  function particles(ctx,{count=24,color=ctx.color,x=145,y=250,spreadX=220,spreadY=220,size=[4,10],life=760,delay=0,shape='50%'}={}){
    for(let i=0;i<count;i++){
      const p=el(ctx,'dbdx-polish-particle');
      const s=size[0]+Math.random()*(size[1]-size[0]);
      p.style.width=s+'px'; p.style.height=s+'px'; p.style.left=x+'px'; p.style.top=y+'px'; p.style.borderRadius=shape; p.style.setProperty('--c',color);
      p.style.setProperty('--dx',((Math.random()-.5)*spreadX)+'px');
      p.style.setProperty('--dy',((Math.random()-.5)*spreadY)+'px');
      p.style.setProperty('--rot',(Math.random()*520-260)+'deg');
      p.style.animation=`dbdxPolishParticle ${life+Math.random()*240}ms ease-out ${delay+i*7}ms forwards`;
    }
  }
  function aura(ctx,{color='rgba(255,0,0,.5)',outer='transparent',dur=1100,delay=0,scale=1.28,opacity=.9,blur=12,inset='-34%'}={}){
    const a=el(ctx,'','full');
    a.style.cssText=`position:absolute;inset:${inset};border-radius:50%;opacity:0;background:radial-gradient(ellipse at center,${color} 0%,rgba(170,0,0,.24) 34%,${outer} 72%);filter:blur(${blur}px);mix-blend-mode:screen;z-index:80;`;
    a.animate([{opacity:0,transform:'scale(.72)'},{opacity,transform:'scale(1)',offset:.32},{opacity:.15,transform:`scale(${scale})`}],{duration:dur,delay,fill:'forwards',easing:'ease-out'});
    return a;
  }
  function haze(ctx, css, dur=1100, blur=16, op=.75, delay=0){
    const h=el(ctx,'','full');
    h.style.cssText=`position:absolute;inset:-10%;opacity:0;background:${css};filter:blur(${blur}px);z-index:85;`;
    h.animate([{opacity:0},{opacity:op,offset:.34},{opacity:0}],{duration:dur,delay,fill:'forwards'});
    return h;
  }
  function dash(ctx,{color='rgba(255,150,40,.75)',dur=520,delay=0,rot=-12}={}){
    const d=el(ctx,'dbdx-polish-dash','full');
    d.style.setProperty('--c',color);
    d.animate([{opacity:0,transform:`translateX(-40%) rotate(${rot}deg) scaleX(.2)`},{opacity:.92,transform:`translateX(8%) rotate(${rot}deg) scaleX(1.05)`,offset:.38},{opacity:0,transform:`translateX(88%) rotate(${rot}deg) scaleX(1.3)`}],{duration:dur,delay,fill:'forwards',easing:'cubic-bezier(.15,.82,.18,1)'});
    return d;
  }
  function fadeCard(ctx, keyframes, opts){
    ctx.card.animate(keyframes, Object.assign({duration:760,fill:'forwards',easing:'ease-out'}, opts || {}));
  }
  function sliceClone(ctx, clip, z=120){
    const s=ctx.card.cloneNode(true);
    s.classList.remove('dbdx-polish-hide-base','dbdx-polish-transparent-base','dbdx-hide-base','dbdx-transparent-split-base');
    s.querySelectorAll?.('.dbdx-overlay,.dbdx-full,.dbdx-polish-overlay,.dbdx-polish-full,.restore-overlay').forEach(x=>x.remove());
    s.classList.add('dbdx-polish-slice');
    s.style.cssText='position:absolute!important;inset:0!important;width:100%!important;height:100%!important;margin:0!important;pointer-events:none!important;opacity:1!important;visibility:visible!important;filter:none!important;transform:none!important;max-height:none!important;overflow:hidden!important;';
    s.style.clipPath=clip;
    s.style.zIndex=String(z);
    ctx.full.appendChild(s);
    return s;
  }
  function transparentVerticalSplit(ctx,{delay=80,dur=840,spread=34,drop=25,fade=true}={}){
    const left=sliceClone(ctx,'inset(0 50% 0 0)',125);
    const right=sliceClone(ctx,'inset(0 0 0 50%)',126);
    setTimeout(()=>ctx.card.classList.add('dbdx-polish-hide-base','dbdx-polish-transparent-base'), delay);
    left.animate([{opacity:1,transform:'translate(0,0) rotate(0deg)'},{opacity:.95,transform:`translate(${-spread*.38}%,-${drop*.25}%) rotate(-2deg)`,offset:.34},{opacity:fade?0:.78,transform:`translate(${-spread}%,-${drop}%) rotate(-8deg)`,filter:'blur(3px) brightness(.55)'}],{duration:dur,delay,fill:'forwards',easing:'cubic-bezier(.18,.84,.22,1)'});
    right.animate([{opacity:1,transform:'translate(0,0) rotate(0deg)'},{opacity:.95,transform:`translate(${spread*.38}%,${drop*.25}%) rotate(2deg)`,offset:.34},{opacity:fade?0:.78,transform:`translate(${spread}%,${drop}%) rotate(8deg)`,filter:'blur(3px) brightness(.55)'}],{duration:dur,delay,fill:'forwards',easing:'cubic-bezier(.18,.84,.22,1)'});
  }
  function transparentStripShred(ctx,{delay=40,dur=760}={}){
    const clips=['inset(0 0 75% 0)','inset(25% 0 50% 0)','inset(50% 0 25% 0)','inset(75% 0 0 0)'];
    const strips=clips.map((c,i)=>sliceClone(ctx,c,125+i));
    setTimeout(()=>ctx.card.classList.add('dbdx-polish-hide-base','dbdx-polish-transparent-base'),delay);
    strips.forEach((s,i)=>{
      const side=i%2?-1:1;
      s.animate([{opacity:1,transform:'translate(0,0) rotate(0deg)'},{opacity:.9,transform:`translate(${side*12}%,${-8+i*7}%) rotate(${side*(4+i)}deg)`,offset:.32},{opacity:0,transform:`translate(${side*(38+i*6)}%,${-18+i*13}%) rotate(${side*(12+i*3)}deg)`,filter:'blur(3px) brightness(.55)'}],{duration:dur+i*70,delay:delay+i*35,fill:'forwards',easing:'cubic-bezier(.18,.84,.22,1)'});
    });
  }

  window.playHuntressMusicNotesRedSlash = async function(cardEl){
    const ctx=setup(cardEl,'#e23838'); if(!ctx) return;
    ['♪','♫','♩','♬','♪','♫','♩'].forEach((n,i)=>{
      const a=el(ctx,'','full');
      a.textContent=n;
      a.style.cssText=`position:absolute;left:${32+i*34}px;top:${350-Math.sin(i)*80}px;font-size:${25+(i%3)*8}px;font-weight:900;color:#f7f7f7;text-shadow:0 0 12px #fff,0 0 20px rgba(220,50,50,.72);opacity:0;z-index:135;`;
      a.animate([{opacity:0,transform:'translateY(26px) scale(.7) rotate(-8deg)'},{opacity:1,transform:'translateY(-20px) scale(1) rotate(6deg)',offset:.35},{opacity:.75,transform:'translateY(-82px) scale(1.08) rotate(-4deg)'},{opacity:0,transform:'translateY(-138px) scale(.88) rotate(8deg)'}],{duration:1160,delay:i*80,fill:'forwards',easing:'ease-out'});
    });
    await wait(580);
    line(ctx,{left:-26,top:224,width:340,height:12,rot:-24,color:'#ff2e2e',dur:390});
    line(ctx,{left:-32,top:258,width:340,height:8,rot:-18,color:'#ffffff',dur:330,delay:55});
    flash(ctx,'rgba(255,30,30,.36)',260);
    particles(ctx,{count:28,color:'#ff3838',x:145,y:238,spreadX:330,spreadY:210,size:[3,9],life:760,shape:'2px',delay:80});
    await wait(150);
    fadeCard(ctx,[
      {opacity:1,transform:'translate(0,0) scale(1) rotate(0deg)',filter:'none'},
      {opacity:.94,transform:'translate(0,-4%) scale(1.08) rotate(-2deg)',filter:'brightness(.98)',offset:.32},
      {opacity:.44,transform:'translate(0,-12%) scale(1.22) rotate(-4deg)',filter:'brightness(.52) blur(2px)',offset:.68},
      {opacity:0,transform:'translate(0,-18%) scale(1.36) rotate(-6deg)',filter:'brightness(.22) blur(4px)'}
    ],{duration:780,easing:'cubic-bezier(.18,.84,.22,1)'});
    ctx.cleanup(1650); await wait(920);
  };

  
  window.playOniBloodOrbBurst = async function(cardEl){
    const ctx=setup(cardEl,'#e11222'); if(!ctx) return;
    aura(ctx,{color:'rgba(255,32,32,.75)',outer:'transparent',dur:1250,opacity:.95,blur:18,inset:'-46%',scale:1.45});
    for(let i=0;i<44;i++){
      const a=Math.PI*2*i/44, startR=120+Math.random()*120;
      const p=el(ctx,'dbdx-polish-particle');
      const s=8+Math.random()*16, sx=145+Math.cos(a)*startR, sy=245+Math.sin(a)*startR;
      p.style.width=s+'px'; p.style.height=s+'px'; p.style.left=sx+'px'; p.style.top=sy+'px'; p.style.setProperty('--c','#e11222');
      p.style.boxShadow='0 0 20px rgba(255,20,30,.95),0 0 34px rgba(255,0,0,.38)';
      p.animate([{opacity:0,transform:'scale(.25)'},{opacity:1,transform:`translate(${(145-sx)*.62}px,${(245-sy)*.62}px) scale(1.05)`,offset:.56},{opacity:.14,transform:`translate(${145-sx}px,${245-sy}px) scale(.18)`}],{duration:900+Math.random()*260,delay:i*13,fill:'forwards',easing:'cubic-bezier(.12,.82,.22,1)'});
    }
    await wait(670);
    flash(ctx,'rgba(255,20,20,.58)',260);
    shake(ctx.card,11,90,6);
    particles(ctx,{count:60,color:'#e11222',x:145,y:245,spreadX:410,spreadY:360,size:[5,14],life:900});
    fadeCard(ctx,[{opacity:1,filter:'none',transform:'scale(1)'},{opacity:.96,filter:'brightness(1.32) saturate(1.38)',transform:'scale(1.07)',offset:.34},{opacity:.48,filter:'brightness(.72) saturate(1.45) blur(2px)',transform:'scale(.94)',offset:.66},{opacity:0,filter:'blur(5px) brightness(.38) saturate(1.3)',transform:'scale(.84)'}],{duration:780});
    ctx.cleanup(1800); await wait(980);
  };

  
  
  
  window.playDredgeNightfallVoidSmother = async function(cardEl){
    const r=root(GLOBAL_ABOVE_Z);
    const dark=document.createElement('div');
    dark.style.cssText='position:absolute;inset:0;opacity:0;background:rgba(0,0,0,.0);backdrop-filter:brightness(1) contrast(1);';
    r.appendChild(dark);
    dark.animate([
      {opacity:0,backdropFilter:'brightness(1) contrast(1)'},
      {opacity:.56,backdropFilter:'brightness(.36) contrast(1.14)',offset:.16},
      {opacity:.12,backdropFilter:'brightness(.82) contrast(1.04)',offset:.30},
      {opacity:.72,backdropFilter:'brightness(.22) contrast(1.18)',offset:.52},
      {opacity:.18,backdropFilter:'brightness(.72) contrast(1.06)',offset:.66},
      {opacity:.84,backdropFilter:'brightness(.16) contrast(1.20)',offset:.84},
      {opacity:0,backdropFilter:'brightness(1) contrast(1)'}
    ],{duration:1420,fill:'forwards'});
    [0,420,840].forEach(delay=>screenFlash(r,'rgba(255,255,255,.08)',115,delay));
    cleanupRoot(r,1700);
    const ctx=setup(cardEl,'#0a0a0a'); if(!ctx) return;
    [0,420,840].forEach(delay=>setTimeout(()=>flash(ctx,'rgba(255,255,255,.08)',115),delay));
    haze(ctx,'radial-gradient(circle at 50% 50%, rgba(0,0,0,.04), rgba(0,0,0,.88) 82%)',1320,28,.84);
    for(let i=0;i<24;i++){
      const s=el(ctx,'','full'); const side=i%2===0; const w=110+Math.random()*130,h=46+Math.random()*88;
      s.style.cssText=`position:absolute;${side?`left:${-70-Math.random()*70}px`:`left:${220+Math.random()*80}px`};top:${40+Math.random()*360}px;width:${w}px;height:${h}px;border-radius:50%;opacity:0;background:radial-gradient(ellipse at center, rgba(0,0,0,.46), rgba(0,0,0,.20) 42%, transparent 72%);filter:blur(${18+Math.random()*8}px);`;
      const dx=side?(150+Math.random()*120):-(150+Math.random()*120),dy=(Math.random()-.5)*36;
      s.animate([{opacity:0,transform:'scale(.72)'},{opacity:.82,transform:`translate(${dx*.42}px,${dy}px) scale(1)`,offset:.34},{opacity:0,transform:`translate(${dx}px,${dy*1.2}px) scale(1.08)`}],{duration:1040+Math.random()*180,delay:100+i*24,fill:'forwards'});
    }
    await wait(840);
    fadeCard(ctx,[{opacity:1,filter:'none',transform:'scale(1)'},{opacity:.72,filter:'brightness(.30) contrast(1.2)',transform:'scale(.99)',offset:.32},{opacity:.18,filter:'brightness(.08) blur(1.8px)',transform:'scale(.94)',offset:.72},{opacity:0,filter:'brightness(.02) blur(3px)',transform:'scale(.9)'}],{duration:620,easing:'ease-in'});
    ctx.cleanup(1650); await wait(940);
  };

  
  window.playCannibalChainsawPressure = async function(cardEl){
    const ctx=setup(cardEl,'#ff6b57'); if(!ctx) return;
    aura(ctx,{color:'rgba(255,90,42,.26)',outer:'transparent',dur:980,opacity:.78,blur:14,inset:'-18%'});
    shake(ctx.card,12,105,5);
    const saw=(delay,fromRight=false)=>line(ctx,{left:-26,top:220+Math.random()*50,width:342,height:12,rot:fromRight?12:-12,color:'#ffb454',dur:280,delay});
    saw(160,false); saw(430,true); saw(650,false);
    particles(ctx,{count:34,color:'#ff8a3a',x:145,y:250,spreadX:320,spreadY:210,size:[4,12],life:760,shape:'3px',delay:180});
    const pressure=el(ctx,'','full');
    pressure.style.cssText='position:absolute;inset:-6%;opacity:0;background:radial-gradient(circle at 50% 45%, rgba(255,120,50,.18), rgba(190,40,0,.12) 48%, transparent 74%);filter:blur(7px);mix-blend-mode:screen;';
    pressure.animate([{opacity:0,transform:'scale(.92)'},{opacity:.82,transform:'scale(1.02)',offset:.30},{opacity:.24,transform:'scale(1.10)'}],{duration:760,delay:520,fill:'forwards'});
    await wait(720);
    flash(ctx,'rgba(255,170,90,.18)',110);
    fadeCard(ctx,[{opacity:1,transform:'translate(0,0) scale(1) rotate(0deg)',filter:'none'},{opacity:1,transform:'translate(0,-3px) scale(1.12) rotate(-.8deg)',filter:'brightness(.96)',offset:.20},{opacity:.90,transform:'translate(0,-8px) scale(1.32) rotate(1.5deg)',filter:'brightness(.78) blur(1px)',offset:.48},{opacity:.44,transform:'translate(0,-12px) scale(1.50) rotate(2.8deg)',filter:'brightness(.46) blur(2.2px)',offset:.76},{opacity:0,transform:'translate(0,-16px) scale(1.66) rotate(4deg)',filter:'brightness(.14) blur(4.8px)'}],{duration:540,easing:'cubic-bezier(.12,.88,.18,1)'});
    ctx.cleanup(1760); await wait(900);
  };

  
  
  
  })();

(() => {
  const STYLE_ID = 'dbdx-fx-contained-repair-v2';
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

  function ensureStyle(){
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      .manual-elimination-clone.dbdx-card-host.dbdx-contained-repair,
      .mass-elimination-swarm-card.dbdx-card-host.dbdx-contained-repair,
      .dbdx-card-host.dbdx-contained-repair{overflow:hidden!important;contain:none!important;isolation:isolate!important;}
      .dbdx-contained-repair > .dbdx-overlay,
      .dbdx-contained-repair > .dbdx-full,
      .dbdx-contained-repair > .dbdx-polish-overlay,
      .dbdx-contained-repair > .dbdx-polish-full,
      .dbdx-contained-repair > .dbdx-repair-overlay,
      .dbdx-contained-repair > .dbdx-repair-full{overflow:hidden!important;}
      .dbdx-repair-overlay{position:absolute;inset:0;pointer-events:none;z-index:210;border-radius:inherit;overflow:hidden!important;}
      .dbdx-repair-canvas{position:absolute;left:0;top:0;width:290px;height:500px;transform-origin:0 0;pointer-events:none;overflow:hidden;}
      .dbdx-repair-full{position:absolute;inset:0;pointer-events:none;z-index:211;border-radius:inherit;overflow:hidden!important;}
      .dbdx-repair-hide-base > :not(.dbdx-repair-overlay):not(.dbdx-repair-full):not(.dbdx-overlay):not(.dbdx-full):not(.dbdx-polish-overlay):not(.dbdx-polish-full){opacity:0!important;}
      .dbdx-repair-transparent-base{background:transparent!important;background-color:transparent!important;background-image:none!important;box-shadow:none!important;border-color:transparent!important;outline-color:transparent!important;}
      .dbdx-repair-slice{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;margin:0!important;pointer-events:none!important;z-index:225!important;border-radius:inherit!important;overflow:hidden!important;transform-origin:center!important;opacity:1!important;visibility:visible!important;}
      .dbdx-repair-slice .dbdx-overlay,.dbdx-repair-slice .dbdx-full,.dbdx-repair-slice .dbdx-polish-overlay,.dbdx-repair-slice .dbdx-polish-full,.dbdx-repair-slice .dbdx-repair-overlay,.dbdx-repair-slice .dbdx-repair-full,.dbdx-repair-slice .restore-overlay{display:none!important;}
      .dbdx-repair-line{position:absolute;height:9px;border-radius:999px;opacity:0;transform-origin:center;background:linear-gradient(90deg,transparent,rgba(255,255,255,.96),var(--c,#fff),transparent);filter:drop-shadow(0 0 12px var(--c,#fff));}
      .dbdx-repair-p{position:absolute;left:145px;top:250px;width:7px;height:7px;border-radius:50%;opacity:0;background:var(--c,#fff);box-shadow:0 0 12px var(--c,#fff);}
      .dbdx-repair-flash{position:absolute;inset:0;opacity:0;background:white;mix-blend-mode:screen;z-index:240;}
      .dbdx-repair-aura{position:absolute;inset:0;opacity:0;border-radius:inherit;mix-blend-mode:screen;}
      @keyframes dbdxRepairParticle{0%{opacity:0;transform:translate(0,0) scale(.35) rotate(0)}18%{opacity:1}100%{opacity:0;transform:translate(var(--dx),var(--dy)) scale(.18) rotate(var(--rot))}}
    `;
    document.head.appendChild(style);
  }

  function setup(cardEl, color='#fff', contained=true){
    ensureStyle();
    if (!cardEl) return null;
    cardEl.classList.add('dbdx-card-host');
    if (contained) cardEl.classList.add('dbdx-contained-repair');
    cardEl.querySelectorAll?.(':scope > .dbdx-repair-overlay,:scope > .dbdx-repair-full').forEach(x => x.remove());
    const overlay = document.createElement('div'); overlay.className = 'dbdx-repair-overlay';
    const canvas = document.createElement('div'); canvas.className = 'dbdx-repair-canvas';
    const full = document.createElement('div'); full.className = 'dbdx-repair-full';
    overlay.appendChild(canvas); cardEl.append(overlay, full);
    const rect = cardEl.getBoundingClientRect();
    canvas.style.transform = `scale(${Math.max(rect.width,1)/290}, ${Math.max(rect.height,1)/500})`;
    canvas.style.setProperty('--c', color); full.style.setProperty('--c', color);
    return {
      card: cardEl, canvas, full, color,
      cleanup(ms=1700){
        setTimeout(() => {
          overlay.remove(); full.remove();
          cardEl.classList.remove('dbdx-contained-repair','dbdx-repair-hide-base','dbdx-repair-transparent-base');
          cardEl.style.transition = '';
        }, ms);
      }
    };
  }
  function el(ctx, cls='', parent='canvas'){
    const d = document.createElement('div');
    if (cls) d.className = cls;
    (parent === 'full' ? ctx.full : ctx.canvas).appendChild(d);
    return d;
  }
  function flash(ctx, color='rgba(255,255,255,.7)', dur=220, delay=0){
    const f = el(ctx, 'dbdx-repair-flash', 'full');
    f.style.background = color;
    f.animate([{opacity:0},{opacity:1,offset:.18},{opacity:0}], {duration:dur, delay, fill:'forwards'});
    return f;
  }
  function line(ctx, {left=-35, top=245, width=360, height=9, rot=-18, color=ctx.color, dur=320, delay=0, z=230}={}){
    const s = el(ctx, 'dbdx-repair-line');
    s.style.cssText += `;left:${left}px;top:${top}px;width:${width}px;height:${height}px;--c:${color};z-index:${z};transform:rotate(${rot}deg) scaleX(.06);`;
    s.animate([
      {opacity:0,transform:`rotate(${rot}deg) scaleX(.06)`},
      {opacity:1,transform:`rotate(${rot}deg) scaleX(1)`,offset:.42},
      {opacity:0,transform:`rotate(${rot}deg) scaleX(1.06)`}
    ], {duration:dur, delay, fill:'forwards', easing:'cubic-bezier(.18,.84,.22,1)'});
    return s;
  }
  function particles(ctx, {count=24, color=ctx.color, x=145, y=250, spreadX=220, spreadY=220, size=[3,9], life=760, delay=0, shape='50%'}={}){
    for (let i=0;i<count;i++){
      const p = el(ctx, 'dbdx-repair-p');
      const s = size[0] + Math.random() * (size[1] - size[0]);
      const dx = (Math.random() - .5) * spreadX;
      const dy = (Math.random() - .5) * spreadY;
      p.style.cssText += `;left:${x}px;top:${y}px;width:${s}px;height:${s}px;border-radius:${shape};--c:${color};--dx:${dx}px;--dy:${dy}px;--rot:${Math.random()*520-260}deg;animation:dbdxRepairParticle ${life+Math.random()*220}ms ease-out ${delay+i*7}ms forwards;`;
    }
  }
  function shake(card, strength=7, dur=95, reps=4){
    card.animate([
      {transform:'translate(0,0)'},
      {transform:`translate(${-strength}px,${Math.round(strength*.45)}px)`},
      {transform:`translate(${strength}px,${-Math.round(strength*.35)}px)`},
      {transform:'translate(0,0)'}
    ], {duration:dur, iterations:reps, easing:'ease-in-out'});
  }
  function fadeCard(ctx, frames, opts={}){
    ctx.card.animate(frames, Object.assign({duration:720, fill:'forwards', easing:'ease'}, opts));
  }
  function aura(ctx, css, dur=900, delay=0, opacity=.8){
    const a = el(ctx, 'dbdx-repair-aura', 'full');
    a.style.background = css;
    a.animate([{opacity:0,transform:'scale(.72)'},{opacity,transform:'scale(1)',offset:.34},{opacity:0,transform:'scale(1.24)'}], {duration:dur, delay, fill:'forwards', easing:'ease-out'});
    return a;
  }
  function cardSlice(ctx, clipPath, z=225){
    const s = ctx.card.cloneNode(true);
    s.removeAttribute('id');
    s.classList.remove('dbdx-card-host','dbdx-contained-repair','dbdx-repair-hide-base','dbdx-repair-transparent-base','dbdx-polish-hide-base','dbdx-polish-transparent-base','dbdx-hide-base','dbdx-transparent-split-base');
    s.querySelectorAll?.('.dbdx-overlay,.dbdx-full,.dbdx-polish-overlay,.dbdx-polish-full,.dbdx-repair-overlay,.dbdx-repair-full,.restore-overlay').forEach(x => x.remove());
    s.classList.add('dbdx-repair-slice');
    s.style.clipPath = clipPath;
    s.style.zIndex = String(z);
    ctx.full.appendChild(s);
    return s;
  }
  function softenTransparentBase(ctx, delay=320){
    setTimeout(() => {
      ctx.card.style.transition = 'background-color 240ms ease, box-shadow 240ms ease, border-color 240ms ease, outline-color 240ms ease';
      ctx.card.classList.add('dbdx-repair-transparent-base');
    }, delay);
  }

  
  
  
  
  
  
  
  
  })();


(() => {
  const wait = ms => new Promise(r => setTimeout(r, ms));
  function ensureStyle(){
    if(document.getElementById('dbdx-fx-final-tuning-v1')) return;
    const s=document.createElement('style');
    s.id='dbdx-fx-final-tuning-v1';
    s.textContent=`
      .dbdx-fx-contained{position:relative!important;overflow:hidden!important;contain:layout paint!important;isolation:isolate!important;}
      .dbdx-fx-overlay{position:absolute;inset:0;pointer-events:none;z-index:310;border-radius:inherit;overflow:hidden!important;}
      .dbdx-fx-canvas{position:absolute;left:0;top:0;width:290px;height:500px;transform-origin:0 0;pointer-events:none;overflow:hidden!important;}
      .dbdx-fx-full{position:absolute;inset:0;pointer-events:none;z-index:311;border-radius:inherit;overflow:hidden!important;}
      .dbdx-fx-hide-base > :not(.dbdx-fx-overlay):not(.dbdx-fx-full){opacity:0!important;}
      .dbdx-fx-transparent-base{background:transparent!important;background-color:transparent!important;background-image:none!important;box-shadow:none!important;border-color:transparent!important;outline-color:transparent!important;}
      .dbdx-fx-slice{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;margin:0!important;pointer-events:none!important;z-index:330!important;border-radius:inherit!important;overflow:hidden!important;transform-origin:center!important;}
      .dbdx-fx-slice .dbdx-overlay,.dbdx-fx-slice .dbdx-full,.dbdx-fx-slice .dbdx-polish-overlay,.dbdx-fx-slice .dbdx-polish-full,.dbdx-fx-slice .dbdx-repair-overlay,.dbdx-fx-slice .dbdx-repair-full,.dbdx-fx-slice .dbdx-fx-overlay,.dbdx-fx-slice .dbdx-fx-full,.dbdx-fx-slice .restore-overlay{display:none!important;}
      .dbdx-fx-p{position:absolute;left:145px;top:250px;width:8px;height:8px;border-radius:50%;opacity:0;background:var(--c,#fff);box-shadow:0 0 12px var(--c,#fff);}
      .dbdx-fx-line{position:absolute;height:9px;border-radius:999px;opacity:0;transform-origin:center;background:linear-gradient(90deg,transparent,rgba(255,255,255,.96),var(--c,#fff),transparent);filter:drop-shadow(0 0 12px var(--c,#fff));}
      .dbdx-fx-flash{position:absolute;inset:0;opacity:0;background:white;mix-blend-mode:screen;z-index:340;}
      .dbdx-fx-aura{position:absolute;inset:0;opacity:0;border-radius:inherit;mix-blend-mode:screen;}
      .dbdx-fx-ghost{position:absolute;inset:0;border-radius:inherit;opacity:0;mix-blend-mode:screen;}
      .dbdx-fx-screen{position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:2147483650;}
    `;
    document.head.appendChild(s);
  }
  function screenRoot(){ ensureStyle(); const root=document.createElement('div'); root.className='dbdx-fx-screen'; (document.body||document.documentElement).appendChild(root); return root; }
  function cleanupRoot(root,ms=1800){ setTimeout(()=>{ try{root.remove()}catch(e){} },ms); }
  function setup(cardEl,color='#fff'){
    ensureStyle();
    if(!cardEl) return null;
    cardEl.classList.add('dbdx-card-host','dbdx-fx-contained');
    cardEl.querySelectorAll?.(':scope > .dbdx-fx-overlay,:scope > .dbdx-fx-full').forEach(x=>x.remove());
    const overlay=document.createElement('div'); overlay.className='dbdx-fx-overlay';
    const canvas=document.createElement('div'); canvas.className='dbdx-fx-canvas';
    const full=document.createElement('div'); full.className='dbdx-fx-full';
    overlay.appendChild(canvas); cardEl.append(overlay,full);
    const rect=cardEl.getBoundingClientRect?.() || {width:290,height:500};
    canvas.style.transform=`scale(${Math.max(rect.width||290,1)/290}, ${Math.max(rect.height||500,1)/500})`;
    canvas.style.setProperty('--c',color); full.style.setProperty('--c',color);
    return {
      card:cardEl, overlay, canvas, full, color,
      cleanup(ms=1700){ setTimeout(()=>{ try{overlay.remove(); full.remove(); cardEl.classList.remove('dbdx-fx-hide-base','dbdx-fx-transparent-base','dbdx-fx-contained');}catch(e){} }, ms); }
    };
  }
  function el(ctx, cls='', parent='canvas'){
    const d=document.createElement('div'); if(cls) d.className=cls;
    (parent==='full'?ctx.full:ctx.canvas).appendChild(d); return d;
  }
  function flash(ctx,color='rgba(255,255,255,.24)',dur=180,delay=0){ const f=el(ctx,'dbdx-fx-flash','full'); f.style.background=color; f.animate([{opacity:0},{opacity:1,offset:.18},{opacity:0}],{duration:dur,delay,fill:'forwards'}); return f; }
  function particles(ctx,{count=24,color='#fff',x=145,y=250,spreadX=220,spreadY=220,size=[3,9],life=800,delay=0,shape='50%', parent='full'}={}){
    for(let i=0;i<count;i++){
      const p=document.createElement('div');
      p.className='dbdx-fx-p';
      const s=size[0]+Math.random()*(size[1]-size[0]);
      const dx=(Math.random()-.5)*spreadX, dy=(Math.random()-.5)*spreadY;
      p.style.cssText += `;left:${x}px;top:${y}px;width:${s}px;height:${s}px;border-radius:${shape};--c:${color};--dx:${dx}px;--dy:${dy}px;--rot:${Math.random()*540-270}deg;`;
      (parent==='full'?ctx.full:ctx.canvas).appendChild(p);
      p.animate([{opacity:0,transform:'translate(0,0) scale(.35)'},{opacity:.96,transform:`translate(${dx*.35}px,${dy*.35}px) scale(1)`,offset:.26},{opacity:0,transform:`translate(${dx}px,${dy}px) rotate(${Math.random()*240-120}deg) scale(.18)`}],{duration:life+Math.random()*220,delay:delay+i*9,fill:'forwards',easing:'ease-out'});
    }
  }
  function shakeCard(ctx,strength=7,dur=95,reps=4){
    ctx.card.animate([
      {transform:'translate(0,0)'},
      {transform:`translate(${-strength}px,${Math.round(strength*.4)}px)`},
      {transform:`translate(${strength}px,${-Math.round(strength*.32)}px)`},
      {transform:'translate(0,0)'}
    ],{duration:dur,iterations:reps,easing:'ease-in-out'});
  }
  function moveFade(ctx, frames, opts={}){ ctx.card.animate(frames, Object.assign({duration:820,fill:'forwards',easing:'ease'}, opts)); }
  function fadeCard(ctx, ms=760, filter='brightness(.4) blur(2px)'){ moveFade(ctx,[{opacity:1,filter:'none'},{opacity:0,filter}],{duration:ms}); }
  function aura(ctx, css, dur=900, delay=0, opacity=.8){ const a=el(ctx,'dbdx-fx-aura','full'); a.style.background=css; a.animate([{opacity:0,transform:'scale(.78)'},{opacity,transform:'scale(1)',offset:.34},{opacity:0,transform:'scale(1.22)'}],{duration:dur,delay,fill:'forwards',easing:'ease-out'}); return a; }
  function vignette(ctx, inner='rgba(0,0,0,0)', outer='rgba(0,0,0,.65)', max=.8, dur=1100){ const v=el(ctx,'','full'); v.style.cssText=`position:absolute;inset:0;opacity:0;background:radial-gradient(circle at center, ${inner} 18%, ${outer} 78%, rgba(0,0,0,.92) 100%);`; v.animate([{opacity:0},{opacity:max,offset:.34},{opacity:max*.22}],{duration:dur,fill:'forwards'}); return v; }
  function haze(ctx, css, dur=1050, blur=12, opacity=.8){ const h=el(ctx,'','full'); h.style.cssText=`position:absolute;inset:-12%;opacity:0;background:${css};filter:blur(${blur}px);`; h.animate([{opacity:0,transform:'scale(.8)'},{opacity,transform:'scale(1)',offset:.38},{opacity:0,transform:'scale(1.18)'}],{duration:dur,fill:'forwards',easing:'ease-out'}); return h; }
  function ghostClone(ctx, dx, dy, color='rgba(255,255,255,.14)', dur=700){
    const g=document.createElement('div');
    g.className='dbdx-fx-ghost';
    g.style.background=color;
    g.style.border='1px solid rgba(255,255,255,.08)';
    g.style.boxShadow='0 0 16px rgba(255,255,255,.08)';
    ctx.full.appendChild(g);
    g.animate([{opacity:0,transform:'translate(0,0)'},{opacity:.5,transform:`translate(${dx*.45}px,${dy*.45}px)`,offset:.38},{opacity:0,transform:`translate(${dx}px,${dy}px)`}],{duration:dur,fill:'forwards',easing:'ease-out'});
    return g;
  }
  function line(ctx,{left=0,top=0,width=260,height=8,rot=0,color='#fff',dur=260,delay=0,parent='full'}={}){
    const l=document.createElement('div'); l.className='dbdx-fx-line'; l.style.cssText += `;left:${left}px;top:${top}px;width:${width}px;height:${height}px;transform:rotate(${rot}deg) scaleX(.06);--c:${color};`;
    (parent==='full'?ctx.full:ctx.canvas).appendChild(l);
    l.animate([{opacity:0,transform:`rotate(${rot}deg) scaleX(.06)`},{opacity:1,transform:`rotate(${rot}deg) scaleX(1)`,offset:.48},{opacity:0,transform:`rotate(${rot}deg) scaleX(1.08) translateX(18px)`}],{duration:dur,delay,fill:'forwards',easing:'cubic-bezier(.18,.84,.22,1)'});
    return l;
  }
  function cardSlice(ctx, clipPath, z=330){
    const s=ctx.card.cloneNode(true);
    s.removeAttribute('id');
    s.classList.remove('dbdx-fx-contained','dbdx-fx-hide-base','dbdx-fx-transparent-base','dbdx-hide-base','dbdx-transparent-split-base','dbdx-polish-hide-base','dbdx-polish-transparent-base','dbdx-repair-hide-base','dbdx-repair-transparent-base');
    s.querySelectorAll?.('.dbdx-overlay,.dbdx-full,.dbdx-polish-overlay,.dbdx-polish-full,.dbdx-repair-overlay,.dbdx-repair-full,.dbdx-fx-overlay,.dbdx-fx-full,.restore-overlay').forEach(x=>x.remove());
    s.classList.add('dbdx-fx-slice');
    s.style.clipPath=clipPath;
    s.style.zIndex=String(z);
    ctx.full.appendChild(s);
    return s;
  }
  function softenTransparentBase(ctx, delay=380, dur=340){
    ctx.card.style.transition = `background-color ${dur}ms ease, box-shadow ${dur}ms ease, border-color ${dur}ms ease, outline-color ${dur}ms ease`;
    setTimeout(()=>ctx.card.classList.add('dbdx-fx-transparent-base'), delay);
  }

  
  
  
  
  window.playGhostfaceNewestPhotoEvidence = async function(cardEl){
    const ctx=setup(cardEl,'#ff4545'); if(!ctx) return;
    const frame=el(ctx,'','full');
    frame.style.cssText='position:absolute;inset:28px;border:4px solid rgba(255,255,255,.94);box-shadow:0 0 0 999px rgba(0,0,0,.14);opacity:0;z-index:332;';
    frame.animate([{opacity:0,transform:'scale(.78)'},{opacity:1,transform:'scale(1)'},{opacity:1,transform:'scale(.98)'}],{duration:520,fill:'forwards'});
    const rec=el(ctx,'','full');
    rec.innerHTML='<span style="width:10px;height:10px;border-radius:50%;background:#ff4545;box-shadow:0 0 10px rgba(255,69,69,.85);display:inline-block"></span><span>REC</span>';
    rec.style.cssText='position:absolute;top:10px;right:12px;display:flex;align-items:center;gap:8px;font-weight:1000;letter-spacing:1px;color:#ff4545;opacity:0;text-shadow:0 0 10px rgba(255,69,69,.55);font-family:ui-monospace,Menlo,Consolas,monospace;z-index:333;';
    rec.animate([{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'},{opacity:1,transform:'translateY(0)'}],{duration:400,delay:110,fill:'forwards'});
    const vign=el(ctx,'','full');
    vign.style.cssText='position:absolute;inset:0;opacity:0;background:radial-gradient(circle at center,rgba(0,0,0,0) 32%,rgba(0,0,0,.34) 66%,rgba(0,0,0,.74));z-index:321;';
    vign.animate([{opacity:0},{opacity:.60,offset:.36},{opacity:.16}],{duration:1150,fill:'forwards'});
    await wait(620);
    flash(ctx,'rgba(255,255,255,1)',300);
    await wait(70);
    moveFade(ctx,[
      {opacity:1,filter:'none',transform:'scale(1)'},
      {opacity:.84,filter:'grayscale(1) contrast(1.35) brightness(1.35)',transform:'scale(1.01)',offset:.18},
      {opacity:.34,filter:'grayscale(1) contrast(1.14) brightness(.62)',transform:'scale(1)',offset:.58},
      {opacity:.08,filter:'grayscale(1) contrast(1.02) brightness(.22)',transform:'scale(.988)',offset:.82},
      {opacity:0,filter:'grayscale(1) contrast(1) brightness(.08)',transform:'scale(.98)'}
    ],{duration:720,easing:'ease-out'});
    ctx.cleanup(1500); await wait(980);
  };

  
  
  window.playMastermindVirulentCorruptionExit = async function(cardEl){
    const root=screenRoot();
    const vig=document.createElement('div'); vig.style.cssText='position:absolute;inset:0;opacity:0;background:radial-gradient(circle at center, rgba(0,0,0,0) 22%, rgba(0,0,0,.34) 62%, rgba(0,0,0,.86) 100%);'; root.appendChild(vig); vig.animate([{opacity:0},{opacity:1,offset:.3},{opacity:.4}],{duration:1250,fill:'forwards'});
    for(let i=0;i<6;i++){ const s=document.createElement('div'); const rot=-18 + i*8; s.style.cssText=`position:absolute;left:${-6+Math.random()*6}%;top:${18+Math.random()*60}%;width:${108+Math.random()*12}%;height:${10+Math.random()*6}px;border-radius:99px;opacity:0;background:linear-gradient(90deg, transparent, rgba(12,12,12,.98), rgba(40,40,40,.95), transparent);box-shadow:0 0 18px rgba(0,0,0,.95);transform:rotate(${rot}deg) scaleX(.1);`; root.appendChild(s); s.animate([{opacity:0,transform:`rotate(${rot}deg) scaleX(.1)`},{opacity:1,transform:`rotate(${rot}deg) scaleX(1)`,offset:.45},{opacity:0,transform:`rotate(${rot}deg) translateX(6%) scaleX(1.04)`}],{duration:340,delay:190+i*55,fill:'forwards'}); }
    cleanupRoot(root,1600);
    const ctx=setup(cardEl,'#171717'); if(!ctx) return;
    const im=ctx.card.querySelector('.portrait img') || ctx.card; im.style.transformOrigin='50% 40%';
    vignette(ctx,'rgba(145,0,0,.08)','rgba(0,0,0,.0)',.42,1240);
    im.animate([{transform:'scale(1) translate(0px,0px)',filter:'none'},{transform:'scale(1.26) translate(-8px,-4px)',filter:'brightness(1.04)',offset:.22},{transform:'scale(1.50) translate(12px,-8px)',filter:'brightness(.98)',offset:.46},{transform:'scale(1.78) translate(-6px,-12px)',filter:'brightness(.86) blur(.8px)',offset:.72},{transform:'scale(1.94) translate(0px,-18px)',filter:'brightness(.62) blur(2px)'}],{duration:560,fill:'forwards',easing:'cubic-bezier(.16,.82,.22,1)'});
    shakeCard(ctx,14,320,2);
    particles(ctx,{count:18,color:'rgba(18,18,18,.82)',x:145,y:245,spreadX:160,spreadY:180,size:[4,10],life:860});
    for(let i=0;i<18;i++){ const sm=el(ctx,'','full'); sm.style.cssText=`position:absolute;left:${i%2?220+Math.random()*70:-70-Math.random()*50}px;top:${70+Math.random()*300}px;width:${120+Math.random()*120}px;height:${28+Math.random()*44}px;border-radius:999px;opacity:0;background:linear-gradient(90deg, transparent, rgba(0,0,0,.26), transparent);filter:blur(${12+Math.random()*8}px);`; const dx=i%2?-(170+Math.random()*100):(170+Math.random()*100); sm.animate([{opacity:0,transform:'scaleX(.3)'},{opacity:.82,transform:`translateX(${dx*.45}px) scaleX(1)`,offset:.34},{opacity:0,transform:`translateX(${dx}px) scaleX(1.06)`}],{duration:1040,delay:i*22,fill:'forwards'}); }
    await wait(240); haze(ctx,'radial-gradient(circle at 50% 56%, rgba(0,0,0,.14), rgba(0,0,0,.92) 78%)',1120,22,.9); particles(ctx,{count:14,color:'rgba(0,0,0,.92)',x:145,y:250,spreadX:180,spreadY:180,size:[4,10],life:880}); await wait(260); im.animate([{opacity:1,filter:'brightness(.7) blur(1px)'},{opacity:0,filter:'brightness(.08) blur(2.8px)'}],{duration:840,fill:'forwards'}); ctx.card.animate([{opacity:1},{opacity:0}],{duration:840,fill:'forwards'}); ctx.cleanup(1950); await wait(960);
  };

  
  window.playExecutionerOppressiveRiseStrike = async function(cardEl){
    const ctx=setup(cardEl,'#7d0f12'); if(!ctx) return;
    const root=screenRoot();
    const dark=document.createElement('div');
    dark.style.cssText='position:absolute;inset:0;opacity:0;background:radial-gradient(circle at center,rgba(90,0,0,.20),rgba(0,0,0,.28) 56%,rgba(0,0,0,.82) 100%);';
    root.appendChild(dark);
    dark.animate([{opacity:0},{opacity:1,offset:.30},{opacity:.24,offset:.76},{opacity:0}],{duration:1800,fill:'forwards'});
    const slash=document.createElement('div');
    slash.style.cssText='position:absolute;left:-12vw;top:50vh;width:128vw;height:18px;border-radius:999px;opacity:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.98),rgba(165,0,0,1),rgba(255,255,255,.88),transparent);filter:drop-shadow(0 0 36px rgba(160,0,0,.95));transform:translateY(-50%) rotate(-16deg) scaleX(.05);transform-origin:center;';
    root.appendChild(slash);
    slash.animate([{opacity:0,transform:'translateY(-50%) rotate(-16deg) scaleX(.05)'},{opacity:1,transform:'translateY(-50%) rotate(-16deg) scaleX(1)',offset:.48},{opacity:.86,transform:'translateY(-50%) rotate(-16deg) scaleX(1.02)',offset:.72},{opacity:0,transform:'translateY(-50%) rotate(-16deg) scaleX(1.09)'}],{duration:680,delay:260,fill:'forwards',easing:'cubic-bezier(.18,.84,.22,1)'});
    cleanupRoot(root,2100);
    aura(ctx,'radial-gradient(circle at 50% 54%,rgba(150,0,0,.30),rgba(30,0,0,.14) 56%,transparent 76%)',1180,0,.88);
    for(let i=0;i<18;i++){
      const hazeDiv=el(ctx,'','full');
      hazeDiv.style.cssText=`position:absolute;left:${-30+Math.random()*245}px;top:${185+Math.random()*200}px;width:${95+Math.random()*125}px;height:${20+Math.random()*36}px;border-radius:999px;opacity:0;background:linear-gradient(90deg,transparent,rgba(90,0,0,.24),transparent);filter:blur(${9+Math.random()*8}px);transform:rotate(${Math.random()*22-11}deg);`;
      hazeDiv.animate([{opacity:0,transform:'scaleX(.35)'},{opacity:.76,transform:`translateY(${-12-Math.random()*24}px) scaleX(1)`,offset:.38},{opacity:.20,transform:`translateY(${-38-Math.random()*36}px) scaleX(1.04)`,offset:.72},{opacity:0,transform:`translateY(${-52-Math.random()*52}px) scaleX(1.08)`}],{duration:900+Math.random()*180,delay:i*22,fill:'forwards'});
    }
    particles(ctx,{count:28,color:'rgba(135,0,0,.72)',x:145,y:245,spreadX:220,spreadY:175,size:[4,10],life:860});
    shakeCard(ctx,10,90,5);
    await wait(420);
    line(ctx,{left:-34,top:245,width:360,height:8,rot:-16,color:'#9d0000',dur:520});
    flash(ctx,'rgba(255,35,35,.24)',220,30);
    await wait(120);
    ctx.card.classList.add('dbdx-fx-hide-base');
    const top=cardSlice(ctx,'polygon(0 0,100% 0,100% 36%,0 64%)',330);
    const bottom=cardSlice(ctx,'polygon(0 64%,100% 36%,100% 100%,0 100%)',331);
    softenTransparentBase(ctx, 340, 380);
    top.animate([{opacity:1,transform:'translate(0,0) rotate(0deg) skewX(0deg)',filter:'none'},{opacity:.98,transform:'translate(-1%,-1%) rotate(-.5deg) skewX(-1deg)',filter:'brightness(.94)',offset:.18},{opacity:.88,transform:'translate(-4%,-4%) rotate(-2deg) skewX(-3deg)',filter:'brightness(.80)',offset:.42},{opacity:.60,transform:'translate(-10%,-10%) rotate(-4deg) skewX(-6deg)',filter:'brightness(.52)',offset:.74},{opacity:0,transform:'translate(-18%,-18%) rotate(-8deg) skewX(-10deg)',filter:'brightness(.24) blur(2.4px)'}],{duration:1220,fill:'forwards',easing:'cubic-bezier(.18,.82,.2,1)'});
    bottom.animate([{opacity:1,transform:'translate(0,0) rotate(0deg) skewX(0deg)',filter:'none'},{opacity:.98,transform:'translate(1%,1%) rotate(.5deg) skewX(1deg)',filter:'brightness(.94)',offset:.18},{opacity:.88,transform:'translate(4%,4%) rotate(2deg) skewX(3deg)',filter:'brightness(.80)',offset:.42},{opacity:.60,transform:'translate(10%,10%) rotate(4deg) skewX(6deg)',filter:'brightness(.52)',offset:.74},{opacity:0,transform:'translate(18%,18%) rotate(8deg) skewX(10deg)',filter:'brightness(.24) blur(2.4px)'}],{duration:1220,fill:'forwards',easing:'cubic-bezier(.18,.82,.2,1)'});
    ctx.cleanup(2200); await wait(1400);
  };
})();


(() => {
  const wait = ms => new Promise(r => setTimeout(r, ms));
  function ensure(){
    if(document.getElementById('dbdx-fx-literal-v2')) return;
    const s=document.createElement('style'); s.id='dbdx-fx-literal-v2';
    s.textContent=`
      .dbdx-lit-host{position:relative!important;overflow:hidden!important;isolation:isolate!important;contain:layout paint!important;}
      .dbdx-lit-overlay{position:absolute;inset:0;pointer-events:none;z-index:410;overflow:hidden!important;border-radius:inherit;}
      .dbdx-lit-canvas{position:absolute;left:0;top:0;width:290px;height:500px;transform-origin:0 0;pointer-events:none;overflow:hidden!important;}
      .dbdx-lit-full{position:absolute;inset:0;pointer-events:none;z-index:411;border-radius:inherit;overflow:hidden!important;}
      .dbdx-lit-hide > :not(.dbdx-lit-overlay):not(.dbdx-lit-full){opacity:0!important;}
      .dbdx-lit-slice{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;pointer-events:none!important;z-index:430!important;border-radius:inherit!important;overflow:hidden!important;}
      .dbdx-lit-slice .dbdx-overlay,.dbdx-lit-slice .dbdx-full,.dbdx-lit-slice .dbdx-polish-overlay,.dbdx-lit-slice .dbdx-polish-full,.dbdx-lit-slice .dbdx-repair-overlay,.dbdx-lit-slice .dbdx-repair-full,.dbdx-lit-slice .dbdx-fx-overlay,.dbdx-lit-slice .dbdx-fx-full,.dbdx-lit-slice .dbdx-lit-overlay,.dbdx-lit-slice .dbdx-lit-full,.dbdx-lit-slice .restore-overlay{display:none!important;}
      .dbdx-lit-screen{position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:2147483660;}
    `;
    document.head.appendChild(s);
  }
  function setup(cardEl){
    ensure(); if(!cardEl) return null;
    cardEl.classList.add('dbdx-lit-host');
    cardEl.querySelectorAll?.(':scope > .dbdx-lit-overlay,:scope > .dbdx-lit-full').forEach(n=>n.remove());
    const overlay=document.createElement('div'); overlay.className='dbdx-lit-overlay';
    const canvas=document.createElement('div'); canvas.className='dbdx-lit-canvas';
    const full=document.createElement('div'); full.className='dbdx-lit-full';
    overlay.appendChild(canvas); cardEl.append(overlay, full);
    const rect=cardEl.getBoundingClientRect?.() || {width:290,height:500};
    canvas.style.transform=`scale(${Math.max(rect.width||290,1)/290}, ${Math.max(rect.height||500,1)/500})`;
    return {card:cardEl, overlay, canvas, full, cleanup(ms=1700){ setTimeout(()=>{ try{overlay.remove();full.remove(); cardEl.classList.remove('dbdx-lit-hide','dbdx-lit-host'); cardEl.style.background=''; cardEl.style.backgroundColor=''; cardEl.style.backgroundImage=''; cardEl.style.boxShadow=''; cardEl.style.borderColor=''; cardEl.style.outlineColor=''; cardEl.style.transition='';}catch(e){} },ms); }};
  }
  function el(ctx,parent='full'){ const d=document.createElement('div'); (parent==='canvas'?ctx.canvas:ctx.full).appendChild(d); return d; }
  function flash(ctx,color='rgba(255,255,255,.25)',dur=180,delay=0){ const f=el(ctx); f.style.cssText=`position:absolute;inset:0;opacity:0;background:${color};mix-blend-mode:screen;`; f.animate([{opacity:0},{opacity:1,offset:.16},{opacity:0}],{duration:dur,delay,fill:'forwards'}); return f; }
  function line(ctx,{left=-30,top=245,width=350,height=9,rot=0,color='#fff',dur=320,delay=0}={}){ const l=el(ctx); l.style.cssText=`position:absolute;left:${left}px;top:${top}px;width:${width}px;height:${height}px;border-radius:999px;opacity:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.96),${color},transparent);filter:drop-shadow(0 0 12px ${color});transform-origin:center;transform:rotate(${rot}deg) scaleX(.06);`; l.animate([{opacity:0,transform:`rotate(${rot}deg) scaleX(.06)`},{opacity:1,transform:`rotate(${rot}deg) scaleX(1)`,offset:.48},{opacity:0,transform:`rotate(${rot}deg) scaleX(1.08) translateX(18px)`}],{duration:dur,delay,fill:'forwards',easing:'cubic-bezier(.18,.84,.22,1)'}); return l; }
  function particles(ctx,{count=24,color='#fff',x=145,y=245,spreadX=240,spreadY=220,size=[3,8],life=800,delay=0}={}){ for(let i=0;i<count;i++){ const p=el(ctx); const s=size[0]+Math.random()*(size[1]-size[0]); const dx=(Math.random()-.5)*spreadX, dy=(Math.random()-.5)*spreadY; p.style.cssText=`position:absolute;left:${x}px;top:${y}px;width:${s}px;height:${s}px;border-radius:${Math.random()>.4?'50%':'2px'};opacity:0;background:${color};box-shadow:0 0 10px ${color};`; p.animate([{opacity:0,transform:'translate(0,0) scale(.35)'},{opacity:.95,transform:`translate(${dx*.35}px,${dy*.35}px) scale(1)`,offset:.26},{opacity:0,transform:`translate(${dx}px,${dy}px) rotate(${Math.random()*280-140}deg) scale(.2)`}],{duration:life+Math.random()*180,delay:delay+i*9,fill:'forwards',easing:'ease-out'}); }}
  function shake(ctx,s=7,d=95,r=4){ ctx.card.animate([{transform:'translate(0,0)'},{transform:`translate(${-s}px,${Math.round(s*.35)}px)`},{transform:`translate(${s}px,${-Math.round(s*.26)}px)`},{transform:'translate(0,0)'}],{duration:d,iterations:r,easing:'ease-in-out'}); }
  function moveFade(ctx,frames,opts={}){ ctx.card.animate(frames,Object.assign({duration:820,fill:'forwards',easing:'ease'},opts)); }
  function makeTransparent(card,delay=0){ setTimeout(()=>{ card.style.transition='background-color 220ms ease, box-shadow 220ms ease, border-color 220ms ease, outline-color 220ms ease'; card.style.background='transparent'; card.style.backgroundColor='transparent'; card.style.backgroundImage='none'; card.style.boxShadow='none'; card.style.borderColor='transparent'; card.style.outlineColor='transparent'; },delay); }
  function slice(ctx,clip,z=430){ const s=ctx.card.cloneNode(true); s.removeAttribute('id'); s.classList.remove('dbdx-lit-host','dbdx-lit-hide','dbdx-hide-base','dbdx-transparent-split-base','dbdx-polish-hide-base','dbdx-polish-transparent-base','dbdx-repair-hide-base','dbdx-repair-transparent-base','dbdx-fx-hide-base','dbdx-fx-transparent-base'); s.querySelectorAll?.('.dbdx-overlay,.dbdx-full,.dbdx-polish-overlay,.dbdx-polish-full,.dbdx-repair-overlay,.dbdx-repair-full,.dbdx-fx-overlay,.dbdx-fx-full,.dbdx-lit-overlay,.dbdx-lit-full,.restore-overlay').forEach(n=>n.remove()); s.classList.add('dbdx-lit-slice'); s.style.clipPath=clip; s.style.zIndex=String(z); ctx.full.appendChild(s); return s; }
  function root(){ ensure(); const r=document.createElement('div'); r.className='dbdx-lit-screen'; (document.body||document.documentElement).appendChild(r); return r; }
  function cleanRoot(r,ms=1700){ setTimeout(()=>{ try{r.remove()}catch(e){} },ms); }

  window.playTrapperBearTrapJaw = async function(cardEl){
    const ctx=setup(cardEl); if(!ctx) return;
    cardEl.dataset.dbdxSwarmSettleMinimum='420';
    line(ctx,{left:-40,top:247,width:370,height:10,rot:-32,color:'#ff3b3b',dur:620});
    particles(ctx,{count:28,color:'#ff4b4b',x:145,y:248,spreadX:300,spreadY:210,size:[4,10],life:860});
    await wait(250); shake(ctx,8,110,3); flash(ctx,'rgba(255,45,45,.26)',220);
    ctx.card.classList.add('dbdx-lit-hide');
     
    const top=slice(ctx,'polygon(0 0,100% 0,100% 24%,0 68%)',430);
    const bottom=slice(ctx,'polygon(0 76%,100% 32%,100% 100%,0 100%)',431);
    makeTransparent(ctx.card,130);
    top.animate([{opacity:1,transform:'translate(-1.3%,-0.8%) rotate(-.4deg)',filter:'none'},{opacity:.96,transform:'translate(-5%,-3.4%) rotate(-2.6deg)',filter:'brightness(.95)',offset:.26},{opacity:.66,transform:'translate(-16%,-10%) rotate(-7deg)',filter:'brightness(.72)',offset:.64},{opacity:0,transform:'translate(-28%,-17%) rotate(-11deg)',filter:'brightness(.46) blur(2.8px)'}],{duration:1120,fill:'forwards',easing:'cubic-bezier(.18,.84,.22,1)'});
    bottom.animate([{opacity:1,transform:'translate(1.3%,0.8%) rotate(.4deg)',filter:'none'},{opacity:.96,transform:'translate(5%,4%) rotate(2.6deg)',filter:'brightness(.95)',offset:.26},{opacity:.66,transform:'translate(16%,11%) rotate(7deg)',filter:'brightness(.72)',offset:.64},{opacity:0,transform:'translate(28%,18%) rotate(11deg)',filter:'brightness(.44) blur(2.8px)'}],{duration:1120,fill:'forwards',easing:'cubic-bezier(.18,.84,.22,1)'});
    ctx.cleanup(1750); await wait(1220);
  };

  window.playShapeQuietStalkVanish = async function(cardEl){
    const r=root();
    const dark=document.createElement('div'); dark.style.cssText='position:absolute;inset:0;opacity:0;background:radial-gradient(circle at center, rgba(0,0,0,0) 14%, rgba(0,0,0,.16) 42%, rgba(0,0,0,.48) 72%, rgba(0,0,0,.78) 100%);'; r.appendChild(dark); dark.animate([{opacity:0},{opacity:.22,offset:.24},{opacity:.62,offset:.74},{opacity:0}],{duration:1500,fill:'forwards'});
    cleanRoot(r,1700);
    const ctx=setup(cardEl); if(!ctx) return;
    const portrait=ctx.card.querySelector('.portrait img') || ctx.card;
    portrait.style.transformOrigin='50% 34%';
    portrait.animate([
      {opacity:1,transform:'scale(1) translate(0,0)',filter:'none'},
      {opacity:1,transform:'scale(1.06) translate(0,-3px)',filter:'brightness(.95)',offset:.26},
      {opacity:1,transform:'scale(1.14) translate(0,-8px)',filter:'brightness(.82)',offset:.58},
      {opacity:.88,transform:'scale(1.20) translate(0,-12px)',filter:'brightness(.65) contrast(1.04)',offset:.78},
      {opacity:0,transform:'scale(1.22) translate(0,-18px)',filter:'brightness(.18) blur(2px)'}
    ],{duration:1180,fill:'forwards',easing:'cubic-bezier(.18,.82,.22,1)'});
    ctx.card.animate([
      {opacity:1,transform:'scale(1)',filter:'none'},
      {opacity:1,transform:'scale(1.015)',filter:'brightness(.96)',offset:.30},
      {opacity:.96,transform:'scale(1.03)',filter:'brightness(.82)',offset:.62},
      {opacity:.42,transform:'scale(1.01)',filter:'brightness(.38)',offset:.82},
      {opacity:0,transform:'scale(.98)',filter:'brightness(.10)'}
    ],{duration:1180,fill:'forwards',easing:'ease-in'});
    await wait(620);
    line(ctx,{left:-8,top:196,width:302,height:6,rot:-18,color:'#f1f1f1',dur:250});
    flash(ctx,'rgba(255,255,255,.10)',120); shake(ctx,4,110,1);
    ctx.cleanup(1650); await wait(1240);
  };

  window.playLegionFourFrenzySlashes = async function(cardEl){
    const ctx=setup(cardEl); if(!ctx) return;
    [-28,19,-10,33].forEach((rot,i)=>line(ctx,{left:-42,top:190+i*48,width:375,height:9,rot,color:i%2?'#ffffff':'#ff3333',dur:260,delay:i*95}));
    shake(ctx,8,90,7);
    await wait(360);
    flash(ctx,'rgba(255,30,30,.30)',160);
    ctx.card.classList.add('dbdx-lit-hide');
    const clips=['inset(0 0 75% 0)','inset(25% 0 50% 0)','inset(50% 0 25% 0)','inset(75% 0 0 0)'];
    const strips=clips.map((c,i)=>slice(ctx,c,430+i));
    makeTransparent(ctx.card,70);
    strips.forEach((s,i)=>{
      const side=i%2?-1:1;
      s.animate([
        {opacity:1,transform:'translate(0,0) rotate(0deg)',filter:'none'},
        {opacity:.92,transform:`translate(${side*12}%,${-8+i*7}%) rotate(${side*(4+i)}deg)`,offset:.32,filter:'brightness(.92)'},
        {opacity:.32,transform:`translate(${side*(31+i*4)}%,${-15+i*10}%) rotate(${side*(10+i*2.4)}deg)`,offset:.76,filter:'brightness(.55) blur(1.6px)'},
        {opacity:0,transform:`translate(${side*(38+i*6)}%,${-18+i*13}%) rotate(${side*(12+i*3)}deg)`,filter:'blur(2.6px) brightness(.48)'}
      ],{duration:820+i*70,delay:70+i*35,fill:'forwards',easing:'cubic-bezier(.18,.84,.22,1)'});
    });
    particles(ctx,{count:38,color:'#ff3333',x:145,y:245,spreadX:360,spreadY:270,size:[3,9],life:820,delay:70});
    ctx.cleanup(1550); await wait(980);
  };

  
  
  
  })();


(() => {
  const wait = ms => new Promise(r => setTimeout(r, ms));
  function ensure(){
    if(document.getElementById('dbdx-fx-restore-v4')) return;
    const s=document.createElement('style'); s.id='dbdx-fx-restore-v4';
    s.textContent=`
      .dbdx-r4-host{position:relative!important;overflow:hidden!important;isolation:isolate!important;contain:layout paint!important;}
      .dbdx-r4-overlay{position:absolute;inset:0;pointer-events:none;z-index:510;overflow:hidden!important;border-radius:inherit;}
      .dbdx-r4-canvas{position:absolute;left:0;top:0;width:290px;height:500px;transform-origin:0 0;pointer-events:none;overflow:hidden!important;}
      .dbdx-r4-full{position:absolute;inset:0;pointer-events:none;z-index:511;border-radius:inherit;overflow:hidden!important;}
      .dbdx-r4-screen{position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:2147483670;}
    `;
    document.head.appendChild(s);
  }
  function setup(cardEl,color='#d8dde3'){
    ensure(); if(!cardEl) return null;
    cardEl.classList.add('dbdx-r4-host');
    cardEl.querySelectorAll?.(':scope > .dbdx-r4-overlay,:scope > .dbdx-r4-full').forEach(n=>n.remove());
    const overlay=document.createElement('div'); overlay.className='dbdx-r4-overlay';
    const canvas=document.createElement('div'); canvas.className='dbdx-r4-canvas';
    const full=document.createElement('div'); full.className='dbdx-r4-full';
    overlay.appendChild(canvas); cardEl.append(overlay,full);
    const rect=cardEl.getBoundingClientRect?.() || {width:290,height:500};
    canvas.style.transform=`scale(${Math.max(rect.width||290,1)/290}, ${Math.max(rect.height||500,1)/500})`;
    return {card:cardEl,canvas,full,cleanup(ms=1700){setTimeout(()=>{try{overlay.remove();full.remove();cardEl.classList.remove('dbdx-r4-host')}catch(e){}},ms)}};
  }
  function el(ctx,cls='',parent='canvas'){ const d=document.createElement('div'); if(cls) d.className=cls; (parent==='full'?ctx.full:ctx.canvas).appendChild(d); return d; }
  function screenRoot(){ ensure(); const r=document.createElement('div'); r.className='dbdx-r4-screen'; (document.body||document.documentElement).appendChild(r); return r; }
  function cleanupRoot(r,ms=1700){ setTimeout(()=>{try{r.remove()}catch(e){}},ms); }
  function flash(ctx,color='rgba(255,255,255,.25)',dur=180){ const f=el(ctx,'','full'); f.style.cssText=`position:absolute;inset:0;opacity:0;background:${color};mix-blend-mode:screen;z-index:535;`; f.animate([{opacity:0},{opacity:1,offset:.2},{opacity:0}],{duration:dur,fill:'forwards'}); return f; }
  function particles(ctx,{count=24,color='#fff',x=145,y=250,spreadX=220,spreadY=220,size=[3,9],life=800,delay=0,shape='50%'}={}){ for(let i=0;i<count;i++){ const p=el(ctx,''); const s=size[0]+Math.random()*(size[1]-size[0]); const dx=(Math.random()-.5)*spreadX, dy=(Math.random()-.5)*spreadY; p.style.cssText=`position:absolute;left:${x}px;top:${y}px;width:${s}px;height:${s}px;border-radius:${shape};opacity:0;background:${color};box-shadow:0 0 10px ${color};`; p.animate([{opacity:0,transform:'translate(0,0) scale(.35)'},{opacity:.95,transform:`translate(${dx*.35}px,${dy*.35}px) scale(1)`,offset:.3},{opacity:0,transform:`translate(${dx}px,${dy}px) scale(.2)`}],{duration:life+Math.random()*180,delay:delay+i*8,fill:'forwards'}); }}
  function shakeCard(ctx,s=7,d=100,r=4){ ctx.card.animate([{transform:'translate(0,0)'},{transform:`translate(${-s}px,${Math.round(s*.35)}px)`},{transform:`translate(${s}px,${-Math.round(s*.25)}px)`},{transform:'translate(0,0)'}],{duration:d,iterations:r,easing:'ease-in-out'}); }
  function moveFade(ctx,frames,opts={}){ ctx.card.animate(frames,Object.assign({duration:820,fill:'forwards',easing:'ease'},opts)); }
  function fadeCard(ctx, ms=700, filter='brightness(.45) blur(2px)'){ moveFade(ctx,[{opacity:1,filter:'none'},{opacity:0,filter}],{duration:ms}); }
  function ghostClone(ctx,dx,dy,color='rgba(165,235,255,.16)',dur=900){ const g=el(ctx,'','full'); g.style.cssText=`position:absolute;inset:0;border-radius:inherit;opacity:0;background:${color};mix-blend-mode:screen;border:1px solid rgba(190,245,255,.18);box-shadow:0 0 18px rgba(130,220,255,.20);`; g.animate([{opacity:0,transform:'translate(0,0)'},{opacity:.55,transform:`translate(${dx*.45}px,${dy*.45}px)`,offset:.4},{opacity:0,transform:`translate(${dx}px,${dy}px)`}],{duration:dur,fill:'forwards',easing:'ease'}); return g; }
  function haze(ctx,css,dur=1100,blur=16,op=.75,delay=0){ const h=el(ctx,'','full'); h.style.cssText=`position:absolute;inset:-10%;opacity:0;background:${css};filter:blur(${blur}px);z-index:520;`; h.animate([{opacity:0},{opacity:op,offset:.34},{opacity:0}],{duration:dur,delay,fill:'forwards'}); return h; }
  function vignette(ctx,inner='rgba(0,0,0,0)',outer='rgba(0,0,0,.65)',op=.8,dur=1100){ const v=el(ctx,'','full'); v.style.cssText=`position:absolute;inset:0;opacity:0;background:radial-gradient(circle at center,${inner} 18%,${outer} 72%,rgba(0,0,0,.84) 100%);z-index:519;`; v.animate([{opacity:0},{opacity:op,offset:.34},{opacity:op*.18}],{duration:dur,fill:'forwards'}); return v; }

  window.playPlagueEmberCurtain = async function(cardEl){
    const ctx=setup(cardEl,'#73ff86'); if(!ctx) return;
    const aura=el(ctx,'','full');
    aura.style.cssText='position:absolute;inset:0;opacity:0;background:radial-gradient(circle at 50% 42%, rgba(90,255,130,.34), rgba(26,135,66,.24) 46%, rgba(0,0,0,.08) 74%);filter:blur(2px);mix-blend-mode:screen;';
    aura.animate([{opacity:0,transform:'scale(.82)'},{opacity:.92,transform:'scale(1.04)',offset:.34},{opacity:.62,transform:'scale(1.14)'},{opacity:0,transform:'scale(1.22)'}],{duration:1100,fill:'forwards'});
    for(let i=0;i<64;i++){
      const p=el(ctx,'','full'); const s=3+Math.random()*7; const dx=(Math.random()-.5)*220; const dy=(100+Math.random()*260); const green=['#7aff8f','#4dff77','#adff5b','#7bffa8','#36d76a','#c3ff96'][Math.floor(Math.random()*6)];
      p.style.cssText=`position:absolute;width:${s}px;height:${s}px;left:${110+Math.random()*70}px;top:${120+Math.random()*34}px;border-radius:50%;opacity:0;background:${green};box-shadow:0 0 ${6+Math.random()*12}px ${green};`;
      p.animate([{opacity:0,transform:'translate(0,0) scale(.35)'},{opacity:.98,transform:`translate(${dx*.18}px,${dy*.28}px) scale(1)`,offset:.24},{opacity:.72,transform:`translate(${dx*.55}px,${dy*.76}px) scale(.9)`,offset:.62},{opacity:0,transform:`translate(${dx}px,${dy}px) scale(.22)`}],{duration:980+Math.random()*260,delay:Math.random()*220,fill:'forwards',easing:'ease-out'});
    }
    for(let i=0;i<20;i++){
      const stream=el(ctx,'','full'); const left=122+Math.random()*50;
      stream.style.cssText=`position:absolute;left:${left}px;top:${124+Math.random()*24}px;width:${10+Math.random()*8}px;height:${120+Math.random()*100}px;border-radius:999px;opacity:0;background:linear-gradient(180deg, rgba(20,90,24,0), rgba(40,185,70,.58), rgba(110,255,146,.94), rgba(180,255,170,0));filter:blur(${1+Math.random()*1.8}px);transform-origin:50% 0%;`;
      stream.animate([{opacity:0,transform:'translateY(-12px) scaleY(.18) rotate(180deg)'},{opacity:.86,transform:`translate(${(Math.random()-.5)*24}px,0) scaleY(1) rotate(${180 + Math.random()*18-9}deg)`,offset:.34},{opacity:0,transform:`translate(${(Math.random()-.5)*70}px,${120+Math.random()*110}px) scaleY(1.15) rotate(${180 + Math.random()*24-12}deg)`}],{duration:820+Math.random()*180,delay:i*35,fill:'forwards',easing:'cubic-bezier(.18,.82,.2,1)'});
    }
    await wait(740);
    moveFade(ctx,[
      {opacity:1,filter:'none',transform:'scale(1)'},
      {opacity:.82,filter:'hue-rotate(88deg) saturate(1.2) brightness(.70)',transform:'scale(1.02)',offset:.36},
      {opacity:.28,filter:'hue-rotate(88deg) saturate(1.28) brightness(.40) blur(1.5px)',transform:'scale(.99)',offset:.72},
      {opacity:0,filter:'hue-rotate(88deg) saturate(1.35) brightness(.20) blur(3px)',transform:'scale(.94)'}
    ],{duration:1020,easing:'ease-out'});
    ctx.cleanup(2200); await wait(1120);
  };

  
  
  })();


(() => {
  const wait = ms => new Promise(r => setTimeout(r, ms));
  function ensure(){
    if(document.getElementById('dbdx-fx-followup-v5')) return;
    const s=document.createElement('style'); s.id='dbdx-fx-followup-v5';
    s.textContent=`
      .dbdx-r5-host{position:relative!important;overflow:hidden!important;isolation:isolate!important;contain:layout paint!important;}
      .dbdx-r5-overlay{position:absolute;inset:0;pointer-events:none;z-index:610;overflow:hidden!important;border-radius:inherit;}
      .dbdx-r5-canvas{position:absolute;left:0;top:0;width:290px;height:500px;transform-origin:0 0;pointer-events:none;overflow:hidden!important;}
      .dbdx-r5-full{position:absolute;inset:0;pointer-events:none;z-index:611;border-radius:inherit;overflow:hidden!important;}
      .dbdx-r5-screen{position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:2147483680;}
      .dbdx-r5-hide > :not(.dbdx-r5-overlay):not(.dbdx-r5-full){opacity:0!important;}
      .dbdx-r5-slice{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;pointer-events:none!important;overflow:hidden!important;border-radius:inherit!important;z-index:630!important;}
      .dbdx-r5-slice .dbdx-overlay,.dbdx-r5-slice .dbdx-full,.dbdx-r5-slice .dbdx-polish-overlay,.dbdx-r5-slice .dbdx-polish-full,.dbdx-r5-slice .dbdx-repair-overlay,.dbdx-r5-slice .dbdx-repair-full,.dbdx-r5-slice .dbdx-fx-overlay,.dbdx-r5-slice .dbdx-fx-full,.dbdx-r5-slice .dbdx-lit-overlay,.dbdx-r5-slice .dbdx-lit-full,.dbdx-r5-slice .dbdx-r4-overlay,.dbdx-r5-slice .dbdx-r4-full,.dbdx-r5-slice .dbdx-r5-overlay,.dbdx-r5-slice .dbdx-r5-full,.dbdx-r5-slice .restore-overlay{display:none!important;}
    `;
    document.head.appendChild(s);
  }
  function setup(cardEl){
    ensure(); if(!cardEl) return null;
    cardEl.classList.add('dbdx-r5-host');
    cardEl.querySelectorAll?.(':scope > .dbdx-r5-overlay,:scope > .dbdx-r5-full').forEach(n=>n.remove());
    const overlay=document.createElement('div'); overlay.className='dbdx-r5-overlay';
    const canvas=document.createElement('div'); canvas.className='dbdx-r5-canvas';
    const full=document.createElement('div'); full.className='dbdx-r5-full';
    overlay.appendChild(canvas); cardEl.append(overlay,full);
    const rect=cardEl.getBoundingClientRect?.() || {width:290,height:500};
    canvas.style.transform=`scale(${Math.max(rect.width||290,1)/290}, ${Math.max(rect.height||500,1)/500})`;
    return {card:cardEl,canvas,full,cleanup(ms=1700){ setTimeout(()=>{ try{overlay.remove();full.remove();cardEl.classList.remove('dbdx-r5-host','dbdx-r5-hide'); cardEl.style.background=''; cardEl.style.backgroundColor=''; cardEl.style.backgroundImage=''; cardEl.style.boxShadow=''; cardEl.style.borderColor=''; cardEl.style.outlineColor=''; cardEl.style.transition='';}catch(e){} }, ms); }};
  }
  function el(ctx,parent='full'){ const d=document.createElement('div'); (parent==='canvas'?ctx.canvas:ctx.full).appendChild(d); return d; }
  function screenRoot(){ ensure(); const r=document.createElement('div'); r.className='dbdx-r5-screen'; (document.body||document.documentElement).appendChild(r); return r; }
  function cleanupRoot(r,ms=1700){ setTimeout(()=>{ try{r.remove()}catch(e){} }, ms); }
  function flash(ctx,color='rgba(255,255,255,.25)',dur=180,delay=0){ const f=el(ctx); f.style.cssText=`position:absolute;inset:0;opacity:0;background:${color};mix-blend-mode:screen;z-index:650;`; f.animate([{opacity:0},{opacity:1,offset:.18},{opacity:0}],{duration:dur,delay,fill:'forwards'}); return f; }
  function particles(ctx,{count=24,color='#fff',x=145,y=250,spreadX=220,spreadY=220,size=[3,9],life=800,delay=0,shape='50%'}={}){ for(let i=0;i<count;i++){ const p=el(ctx); const s=size[0]+Math.random()*(size[1]-size[0]); const dx=(Math.random()-.5)*spreadX, dy=(Math.random()-.5)*spreadY; p.style.cssText=`position:absolute;left:${x}px;top:${y}px;width:${s}px;height:${s}px;border-radius:${shape};opacity:0;background:${color};box-shadow:0 0 10px ${color};`; p.animate([{opacity:0,transform:'translate(0,0) scale(.35)'},{opacity:.95,transform:`translate(${dx*.35}px,${dy*.35}px) scale(1)`,offset:.3},{opacity:0,transform:`translate(${dx}px,${dy}px) scale(.2)`}],{duration:life+Math.random()*180,delay:delay+i*8,fill:'forwards'}); }}
  function shakeCard(ctx,s=7,d=100,r=4){ ctx.card.animate([{transform:'translate(0,0)'},{transform:`translate(${-s}px,${Math.round(s*.35)}px)`},{transform:`translate(${s}px,${-Math.round(s*.25)}px)`},{transform:'translate(0,0)'}],{duration:d,iterations:r,easing:'ease-in-out'}); }
  function moveFade(ctx,frames,opts={}){ ctx.card.animate(frames,Object.assign({duration:820,fill:'forwards',easing:'ease'},opts)); }
  function haze(ctx,css,dur=1100,blur=16,op=.75,delay=0){ const h=el(ctx); h.style.cssText=`position:absolute;inset:-10%;opacity:0;background:${css};filter:blur(${blur}px);z-index:620;`; h.animate([{opacity:0},{opacity:op,offset:.34},{opacity:0}],{duration:dur,delay,fill:'forwards'}); return h; }
  function vignette(ctx,inner='rgba(0,0,0,0)',outer='rgba(0,0,0,.65)',op=.8,dur=1100){ const v=el(ctx); v.style.cssText=`position:absolute;inset:0;opacity:0;background:radial-gradient(circle at center,${inner} 18%,${outer} 72%,rgba(0,0,0,.84) 100%);z-index:619;`; v.animate([{opacity:0},{opacity:op,offset:.34},{opacity:op*.18}],{duration:dur,fill:'forwards'}); return v; }
  function ghostClone(ctx,dx,dy,color='rgba(165,235,255,.16)',dur=900){ const g=el(ctx); g.style.cssText=`position:absolute;inset:0;border-radius:inherit;opacity:0;background:${color};mix-blend-mode:screen;border:1px solid rgba(190,245,255,.18);box-shadow:0 0 18px rgba(130,220,255,.20);`; g.animate([{opacity:0,transform:'translate(0,0)'},{opacity:.55,transform:`translate(${dx*.45}px,${dy*.45}px)`,offset:.4},{opacity:0,transform:`translate(${dx}px,${dy}px)`}],{duration:dur,fill:'forwards',easing:'ease'}); return g; }
  function slice(ctx,clip,z=630){ const s=ctx.card.cloneNode(true); s.removeAttribute('id'); s.querySelectorAll?.('.dbdx-overlay,.dbdx-full,.dbdx-polish-overlay,.dbdx-polish-full,.dbdx-repair-overlay,.dbdx-repair-full,.dbdx-fx-overlay,.dbdx-fx-full,.dbdx-lit-overlay,.dbdx-lit-full,.dbdx-r4-overlay,.dbdx-r4-full,.dbdx-r5-overlay,.dbdx-r5-full,.restore-overlay').forEach(n=>n.remove()); s.className+=' dbdx-r5-slice'; s.style.clipPath=clip; s.style.zIndex=String(z); ctx.full.appendChild(s); return s; }
  function makeTransparent(card, delay=80){ setTimeout(()=>{ card.style.transition='background-color 180ms ease, box-shadow 180ms ease, border-color 180ms ease, outline-color 180ms ease'; card.style.background='transparent'; card.style.backgroundColor='transparent'; card.style.backgroundImage='none'; card.style.boxShadow='none'; card.style.borderColor='transparent'; card.style.outlineColor='transparent'; }, delay); }

  
  window.playCenobiteAbyssHaze = async function(cardEl){
    const ctx=setup(cardEl); if(!ctx) return;
    const ox=-18, cx=132;
    haze(ctx,'radial-gradient(circle at 46% 42%, rgba(42,78,138,.52), rgba(16,34,66,.34) 34%, rgba(5,10,22,.16) 54%, rgba(0,0,0,0) 74%)',1180,18,.92);
    vignette(ctx,'rgba(56,108,182,.26)','rgba(4,8,18,.08)',.92,1180);
    const corners={tl:[14+ox,18,1,1],tr:[276+ox,16,-1,1],bl:[14+ox,454,1,-1],br:[276+ox,454,-1,-1]};
    Object.values(corners).forEach(([x,y,sx,sy])=>{
      for(let i=0;i<7;i++){
        const seg=el(ctx); const len=28+Math.random()*26; const offx=(Math.random()*34)*sx; const offy=(Math.random()*34)*sy; const ang=(sx*sy>0?1:-1)*(16+i*12+Math.random()*8-4);
        seg.style.cssText=`position:absolute;left:${x+offx}px;top:${y+offy}px;width:${len}px;height:3px;border-radius:99px;opacity:0;background:linear-gradient(90deg, rgba(0,0,0,.98), rgba(34,38,48,.94), rgba(6,8,12,.98));box-shadow:0 0 0 1px rgba(8,10,14,.92),0 0 10px rgba(0,0,0,.55);transform-origin:${sx<0?'100':'0'}% 50%;transform:rotate(${ang}deg) scaleX(.16);`;
        seg.animate([{opacity:0,transform:`rotate(${ang}deg) scaleX(.16)`},{opacity:1,transform:`rotate(${ang}deg) scaleX(1)`,offset:.56},{opacity:.84,transform:`rotate(${ang}deg) scaleX(1)`}],{duration:460,delay:i*38,fill:'forwards'});
        if(i<5){ const hook=el(ctx); hook.style.cssText=`position:absolute;left:${x+offx+len*.58-3}px;top:${y+offy-2}px;width:7px;height:4px;border-radius:1px;opacity:0;background:linear-gradient(90deg,#dfe6ef,#8c98a5 55%,#20242d);box-shadow:0 0 6px rgba(255,255,255,.12);transform:rotate(${ang}deg) scale(.35);`; hook.animate([{opacity:0,transform:`rotate(${ang}deg) scale(.35)`},{opacity:.95,transform:`rotate(${ang}deg) scale(1)`},{opacity:.72,transform:`rotate(${ang}deg) scale(1)`}],{duration:300,delay:i*38+26,fill:'forwards'}); }
      }
    });
    const lashes=[[24+ox,98,cx,188],[266+ox,82,cx+11,176],[36+ox,374,cx+5,284],[258+ox,392,cx+2,294]];
    lashes.forEach(([x1,y1,x2,y2],i)=>{ const dx=x2-x1,dy=y2-y1,len=Math.hypot(dx,dy),ang=Math.atan2(dy,dx)*180/Math.PI; const l=el(ctx); l.style.cssText=`position:absolute;left:${x1}px;top:${y1}px;width:${len}px;height:3px;border-radius:99px;opacity:0;background:linear-gradient(90deg, rgba(0,0,0,.98), rgba(42,58,88,.95), rgba(180,210,255,.28), rgba(0,0,0,.98));box-shadow:0 0 10px rgba(50,90,160,.24);transform-origin:0 50%;transform:rotate(${ang}deg) scaleX(.08);`; l.animate([{opacity:0,transform:`rotate(${ang}deg) scaleX(.08)`},{opacity:.96,transform:`rotate(${ang}deg) scaleX(1)`,offset:.46},{opacity:0,transform:`rotate(${ang}deg) scaleX(1.06)`}],{duration:300,delay:180+i*90,fill:'forwards'}); });
    particles(ctx,{count:34,color:'rgba(70,135,230,.95)',x:132,y:228,spreadX:260,spreadY:230,size:[3,10],life:900}); particles(ctx,{count:18,color:'rgba(205,230,255,.68)',x:132,y:228,spreadX:180,spreadY:170,size:[2,6],life:760,delay:140});
    ghostClone(ctx,-10,0,'rgba(70,130,220,.12)',700); ghostClone(ctx,10,0,'rgba(70,130,220,.12)',700); ghostClone(ctx,0,-8,'rgba(175,215,255,.08)',760);
    flash(ctx,'rgba(150,200,255,.10)',140); await wait(180); shakeCard(ctx,7,110,3); await wait(160);
    moveFade(ctx,[{opacity:1,filter:'none',transform:'scale(1)'},{opacity:1,filter:'brightness(.88) contrast(1.06)',transform:'scale(1.01) translateY(-3px)',offset:.18},{opacity:.96,filter:'brightness(.76) contrast(1.12)',transform:'scale(1.03,.99) translateY(2px) skewX(-2deg)',offset:.34},{opacity:.88,filter:'brightness(.66) contrast(1.14) blur(.6px)',transform:'scale(1.04,.97) translateY(8px) skewX(2deg)',offset:.52},{opacity:.62,filter:'brightness(.52) contrast(1.08) blur(1.8px)',transform:'scale(.98,.92) translateY(18px) skewX(-4deg)',offset:.74},{opacity:0,filter:'brightness(.30) blur(3.4px)',transform:'scale(.9,.82) translateY(30px)'}],{duration:980});
    ctx.cleanup(1950); await wait(1120);
  };

  window.playTricksterStageNeonPulse = async function(cardEl){
     
    const root=screenRoot();
    const synth=document.createElement('div');
    synth.style.cssText='position:absolute;inset:0;opacity:0;pointer-events:none;background:radial-gradient(ellipse at 50% 72%,rgba(255,55,210,.28),transparent 42%),radial-gradient(ellipse at 50% 92%,rgba(65,205,255,.22),transparent 45%),linear-gradient(180deg,rgba(15,0,35,.14),rgba(10,0,22,.34));mix-blend-mode:screen;';
    root.appendChild(synth);
    synth.animate([{opacity:0},{opacity:.95,offset:.24},{opacity:.62,offset:.66},{opacity:0}],{duration:1250,fill:'forwards'});
    for(let g=0;g<9;g++){ const grid=document.createElement('div'); grid.style.cssText=`position:absolute;left:-8vw;right:-8vw;bottom:${8+g*4.2}vh;height:1px;opacity:0;background:linear-gradient(90deg,transparent,rgba(74,220,255,.52),rgba(255,58,220,.48),transparent);box-shadow:0 0 13px rgba(255,60,220,.52);transform:perspective(420px) rotateX(62deg);transform-origin:50% 100%;`; root.appendChild(grid); grid.animate([{opacity:0,transform:'perspective(420px) rotateX(62deg) translateY(14px)'},{opacity:.72,transform:'perspective(420px) rotateX(62deg) translateY(0)',offset:.38},{opacity:.12,transform:'perspective(420px) rotateX(62deg) translateY(-8px)'}],{duration:1150,delay:70+g*22,fill:'forwards'}); }
    for(let g=0;g<7;g++){ const beam=document.createElement('div'); const x=6+g*15; beam.style.cssText=`position:absolute;left:${x}vw;bottom:0;width:1px;height:45vh;opacity:0;background:linear-gradient(0deg,rgba(255,58,220,.48),rgba(70,220,255,.18),transparent);box-shadow:0 0 12px rgba(255,58,220,.38);transform-origin:50% 100%;transform:perspective(420px) rotateX(62deg) skewX(${g%2?8:-8}deg);`; root.appendChild(beam); beam.animate([{opacity:0},{opacity:.55,offset:.4},{opacity:.06}],{duration:1120,delay:90+g*26,fill:'forwards'}); }
    const specs=[{left:'-10vw', top:'8vh', width:'371.2vw', rot:-6},{left:'7vw', top:'-8vh', width:'340.7vh', rot:99},{left:'-12vw', top:'60vh', width:'237.2vh', rot:58},{left:'94vw', top:'-10vh', width:'377.3vh', rot:82},{left:'100vw', top:'0vh', width:'212.9vh', rot:104},{left:'101vw', top:'53vh', width:'249.5vw', rot:-32},{left:'-18vw', top:'35vh', width:'165.6vw', rot:-24}];
    const lines=[];
    specs.forEach((s,i)=>{ const line=document.createElement('div'); line.style.cssText=`position:absolute;left:${s.left};top:${s.top};width:${s.width};height:4px;border-radius:999px;transform-origin:0 50%;transform:rotate(${s.rot}deg) scaleX(.06);opacity:0;background:rgba(120,225,255,.98);box-shadow:0 0 0 1px rgba(120,225,255,.95),0 0 26px rgba(255,72,220,1),0 0 62px rgba(255,72,220,.92),0 0 105px rgba(255,72,220,.62);`; root.appendChild(line); lines.push(line); line.animate([{opacity:0,transform:`rotate(${s.rot}deg) scaleX(.06)`},{opacity:1,transform:`rotate(${s.rot}deg) scaleX(1)`,offset:.72},{opacity:1,transform:`rotate(${s.rot}deg) scaleX(1)`}],{duration:330,delay:i*125,fill:'forwards',easing:'cubic-bezier(.18,.84,.22,1)'}); });
    setTimeout(()=>{ lines.forEach(line=>line.animate([{background:'rgba(120,225,255,.98)',boxShadow:'0 0 0 1px rgba(120,225,255,.95),0 0 26px rgba(255,72,220,1),0 0 62px rgba(255,72,220,.92),0 0 105px rgba(255,72,220,.62)'},{background:'rgba(255,30,42,1)',boxShadow:'0 0 0 1px rgba(255,45,45,1),0 0 40px rgba(120,0,0,1),0 0 110px rgba(120,0,0,.94)'}],{duration:260,fill:'forwards'})); const red=document.createElement('div'); red.style.cssText='position:absolute;inset:0;opacity:0;background:radial-gradient(circle at center, transparent 35%, rgba(90,0,0,.22) 72%, rgba(20,0,0,.54) 100%);'; root.appendChild(red); red.animate([{opacity:0},{opacity:1,offset:.30},{opacity:0}],{duration:420,fill:'forwards'}); setTimeout(()=>{ lines.forEach(line=>line.animate([{opacity:1},{opacity:0}],{duration:250,fill:'forwards'})); },330); },6*125+285);
    setTimeout(()=>{ root.animate([{opacity:1},{opacity:0}],{duration:260,fill:'forwards'}); },1280);
    cleanupRoot(root,1600);

    const ctx=setup(cardEl); if(!ctx) return;
    const aura=el(ctx); aura.style.cssText='position:absolute;inset:-8%;opacity:0;background:radial-gradient(circle at 50% 50%,rgba(255,50,207,.42),rgba(58,172,255,.28) 44%,transparent 76%);mix-blend-mode:screen;'; aura.animate([{opacity:0,transform:'scale(.82)'},{opacity:.92,transform:'scale(1.04)',offset:.28},{opacity:.56,transform:'scale(1.12)',offset:.70},{opacity:.08,transform:'scale(1.24)'}],{duration:1260,fill:'forwards'});
    const glow=el(ctx); glow.style.cssText='position:absolute;inset:0;opacity:0;background:linear-gradient(180deg,rgba(40,0,70,.08),rgba(255,50,207,.10) 38%,rgba(58,172,255,.08) 70%,rgba(0,0,0,.06));mix-blend-mode:screen;'; glow.animate([{opacity:0},{opacity:.9,offset:.22},{opacity:.42,offset:.72},{opacity:0}],{duration:1180,fill:'forwards'});
    const band=el(ctx); band.style.cssText='position:absolute;left:-20%;right:-20%;top:52%;height:3px;opacity:0;background:linear-gradient(90deg,transparent,rgba(80,226,255,.96),rgba(255,58,220,.95),transparent);box-shadow:0 0 18px rgba(255,58,220,.95),0 0 36px rgba(80,226,255,.65);transform:rotate(-7deg) scaleX(.2);'; band.animate([{opacity:0,transform:'rotate(-7deg) scaleX(.2) translateY(28px)'},{opacity:1,transform:'rotate(-7deg) scaleX(1) translateY(0)',offset:.36},{opacity:0,transform:'rotate(-7deg) scaleX(1.08) translateY(-18px)'}],{duration:900,delay:120,fill:'forwards'});
    for(let i=0;i<4;i++){ const streak=el(ctx); const top=150+i*38; streak.style.cssText=`position:absolute;left:-28px;top:${top}px;width:360px;height:${i%2?3:4}px;border-radius:999px;opacity:0;background:linear-gradient(90deg,transparent,rgba(86,230,255,.98),rgba(255,58,220,.95),transparent);box-shadow:0 0 16px rgba(255,58,220,.9),0 0 28px rgba(86,230,255,.7);transform:rotate(${i%2?-10:-6}deg) scaleX(.15);`; streak.animate([{opacity:0,transform:`rotate(${i%2?-10:-6}deg) scaleX(.15)`},{opacity:1,transform:`rotate(${i%2?-10:-6}deg) scaleX(1)`,offset:.42},{opacity:0,transform:`rotate(${i%2?-10:-6}deg) scaleX(1.05) translateX(24px)`}],{duration:560,delay:160+i*85,fill:'forwards'}); }
    const eq=el(ctx); eq.style.cssText='position:absolute;left:22px;right:22px;bottom:74px;height:74px;display:flex;align-items:flex-end;gap:6px;opacity:0;';
    for(let i=0;i<12;i++){ const b=document.createElement('div'); b.style.cssText=`flex:1;height:${18+Math.random()*52}px;border-radius:4px 4px 0 0;background:linear-gradient(180deg,#54ddff,#ff4ed8);box-shadow:0 0 12px rgba(255,74,216,.72),0 0 24px rgba(84,221,255,.52);`; eq.appendChild(b); b.animate([{transform:'scaleY(.26)',opacity:.4},{transform:'scaleY(1)',opacity:1,offset:.45},{transform:'scaleY(.52)',opacity:.78}],{duration:320+Math.random()*150,delay:i*28,iterations:3,fill:'forwards'}); }
    eq.animate([{opacity:0},{opacity:1,offset:.18},{opacity:.08}],{duration:1240,fill:'forwards'});
    flash(ctx,'rgba(255,70,220,.30)',240); setTimeout(()=>flash(ctx,'rgba(78,218,255,.24)',180),240); setTimeout(()=>flash(ctx,'rgba(255,255,255,.16)',120),500);
    ghostClone(ctx,-8,0,'rgba(255,80,220,.10)',700); ghostClone(ctx,8,0,'rgba(84,221,255,.10)',700);
    await wait(540);
    particles(ctx,{count:34,color:'#ff4ed8',x:145,y:240,spreadX:300,spreadY:270,size:[4,10],life:850});
    particles(ctx,{count:20,color:'#54ddff',x:145,y:240,spreadX:260,spreadY:230,size:[3,8],life:780,delay:60});
    moveFade(ctx,[{opacity:1,filter:'none',transform:'scale(1)'},{opacity:.98,filter:'saturate(1.75) brightness(1.16)',transform:'scale(1.03)',offset:.34},{opacity:.88,filter:'saturate(1.95) brightness(1.06)',transform:'scale(1.04)',offset:.54},{opacity:.30,filter:'brightness(.42) saturate(1.28) blur(1.8px)',transform:'translateY(14px) scale(.98)',offset:.80},{opacity:0,filter:'brightness(.24) saturate(1.18) blur(3px)',transform:'translateY(22px) scale(.94)'}],{duration:900,easing:'ease-in'});
    ctx.cleanup(1780); await wait(1020);
  };
})();


(() => {
  const wait = ms => new Promise(r => setTimeout(r, ms));
  function ensure(){
    if(document.getElementById('dbdx-krasue-v6-fix')) return;
    const s=document.createElement('style'); s.id='dbdx-krasue-v6-fix';
    s.textContent=`
      .dbdx-k6-host{position:relative!important;overflow:hidden!important;isolation:isolate!important;contain:layout paint!important;}
      .dbdx-k6-overlay{position:absolute;inset:0;pointer-events:none;z-index:710;overflow:hidden!important;border-radius:inherit;}
      .dbdx-k6-canvas{position:absolute;left:0;top:0;width:290px;height:500px;transform-origin:0 0;pointer-events:none;overflow:hidden!important;}
      .dbdx-k6-full{position:absolute;inset:0;pointer-events:none;z-index:711;border-radius:inherit;overflow:hidden!important;}
      .dbdx-k6-hide > :not(.dbdx-k6-overlay):not(.dbdx-k6-full){opacity:0!important;}
      .dbdx-k6-slice{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;pointer-events:none!important;overflow:hidden!important;border-radius:inherit!important;z-index:730!important;opacity:1!important;visibility:visible!important;}
      .dbdx-k6-slice .dbdx-overlay,.dbdx-k6-slice .dbdx-full,.dbdx-k6-slice .dbdx-polish-overlay,.dbdx-k6-slice .dbdx-polish-full,.dbdx-k6-slice .dbdx-repair-overlay,.dbdx-k6-slice .dbdx-repair-full,.dbdx-k6-slice .dbdx-fx-overlay,.dbdx-k6-slice .dbdx-fx-full,.dbdx-k6-slice .dbdx-lit-overlay,.dbdx-k6-slice .dbdx-lit-full,.dbdx-k6-slice .dbdx-r4-overlay,.dbdx-k6-slice .dbdx-r4-full,.dbdx-k6-slice .dbdx-r5-overlay,.dbdx-k6-slice .dbdx-r5-full,.dbdx-k6-slice .dbdx-k6-overlay,.dbdx-k6-slice .dbdx-k6-full,.dbdx-k6-slice .restore-overlay{display:none!important;}
    `;
    document.head.appendChild(s);
  }
  function setup(cardEl){
    ensure(); if(!cardEl) return null;
    cardEl.classList.add('dbdx-k6-host');
    cardEl.querySelectorAll?.(':scope > .dbdx-k6-overlay,:scope > .dbdx-k6-full').forEach(n=>n.remove());
    const overlay=document.createElement('div'); overlay.className='dbdx-k6-overlay';
    const canvas=document.createElement('div'); canvas.className='dbdx-k6-canvas';
    const full=document.createElement('div'); full.className='dbdx-k6-full';
    overlay.appendChild(canvas); cardEl.append(overlay, full);
    const rect=cardEl.getBoundingClientRect?.() || {width:290,height:500};
    canvas.style.transform=`scale(${Math.max(rect.width||290,1)/290}, ${Math.max(rect.height||500,1)/500})`;
    return {card:cardEl, canvas, full, cleanup(ms=1700){ setTimeout(()=>{ try{ full.style.webkitMaskImage=''; full.style.maskImage=''; overlay.remove(); full.remove(); cardEl.classList.remove('dbdx-k6-host','dbdx-k6-hide'); cardEl.style.background=''; cardEl.style.backgroundColor=''; cardEl.style.backgroundImage=''; cardEl.style.boxShadow=''; cardEl.style.borderColor=''; cardEl.style.outlineColor=''; cardEl.style.transition=''; }catch(e){} }, ms); }};
  }
  function el(ctx,parent='full'){ const d=document.createElement('div'); (parent==='canvas'?ctx.canvas:ctx.full).appendChild(d); return d; }
  function vignette(ctx,inner='rgba(255,40,64,.28)',outer='rgba(35,0,0,.18)',op=.82,dur=760){
    const v=el(ctx); v.style.cssText=`position:absolute;inset:0;opacity:0;background:radial-gradient(circle at center,${inner} 18%,${outer} 72%,rgba(0,0,0,.45) 100%);z-index:719;mix-blend-mode:screen;`;
    v.animate([{opacity:0},{opacity:op,offset:.34},{opacity:0}],{duration:dur,fill:'forwards'});
  }
  function shake(ctx,s=6,d=100,r=4){ ctx.card.animate([{transform:'translate(0,0)'},{transform:`translate(${-s}px,${Math.round(s*.35)}px)`},{transform:`translate(${s}px,${-Math.round(s*.25)}px)`},{transform:'translate(0,0)'}],{duration:d,iterations:r,easing:'ease-in-out'}); }
  function makeSlice(ctx,clip,z){
    const s=ctx.card.cloneNode(true);
    s.removeAttribute('id');
    s.classList.remove('dbdx-k6-host','dbdx-k6-hide','dbdx-lit-hide','dbdx-r5-hide','dbdx-fx-hide-base','dbdx-repair-hide-base','dbdx-polish-hide-base','dbdx-hide-base','dbdx-transparent-split-base','dbdx-polish-transparent-base','dbdx-repair-transparent-base','dbdx-fx-transparent-base');
    s.querySelectorAll?.('.dbdx-overlay,.dbdx-full,.dbdx-polish-overlay,.dbdx-polish-full,.dbdx-repair-overlay,.dbdx-repair-full,.dbdx-fx-overlay,.dbdx-fx-full,.dbdx-lit-overlay,.dbdx-lit-full,.dbdx-r4-overlay,.dbdx-r4-full,.dbdx-r5-overlay,.dbdx-r5-full,.dbdx-k6-overlay,.dbdx-k6-full,.restore-overlay').forEach(n=>n.remove());
    s.classList.add('dbdx-k6-slice');
    s.style.clipPath=clip;
    s.style.zIndex=String(z);
    ctx.full.appendChild(s);
    return s;
  }
  function makeTransparent(card, delay=80){
    setTimeout(()=>{
      card.style.transition='background-color 180ms ease, box-shadow 180ms ease, border-color 180ms ease, outline-color 180ms ease';
      card.style.background='transparent';
      card.style.backgroundColor='transparent';
      card.style.backgroundImage='none';
      card.style.boxShadow='none';
      card.style.borderColor='transparent';
      card.style.outlineColor='transparent';
    }, delay);
  }

  window.playKrasueDistortSplitDrop = async function(cardEl){
    const ctx=setup(cardEl); if(!ctx) return;

    vignette(ctx,'rgba(255,40,64,.30)','rgba(35,0,0,.20)',.86,920);
    const bottom=el(ctx); bottom.style.cssText='position:absolute;left:-10%;right:-10%;bottom:-10%;height:48%;opacity:0;background:radial-gradient(ellipse at 50% 100%, rgba(170,0,0,.74), rgba(72,0,0,.42) 42%, transparent 74%);filter:blur(16px);mix-blend-mode:screen;z-index:720;';
    bottom.animate([{opacity:0,transform:'translateY(42px) scale(.76)'},{opacity:.96,transform:'translateY(0) scale(1.08)',offset:.28},{opacity:.46,transform:'translateY(-8px) scale(1.16)',offset:.54},{opacity:0,transform:'translateY(-18px) scale(1.20)'}],{duration:820,fill:'forwards'});
    const pit=el(ctx); pit.style.cssText='position:absolute;left:18%;right:18%;bottom:4%;height:16%;opacity:0;background:radial-gradient(ellipse at 50% 60%, rgba(0,0,0,.88), rgba(80,0,0,.34) 44%, transparent 74%);filter:blur(12px);z-index:719;';
    pit.animate([{opacity:0,transform:'scaleX(.48) scaleY(.6)'},{opacity:.88,transform:'scaleX(1) scaleY(1)',offset:.34},{opacity:.66,transform:'scaleX(1.18) scaleY(1.06)',offset:.74},{opacity:0,transform:'scaleX(1.26) scaleY(1.12)'}],{duration:1040,delay:150,fill:'forwards'});

    for(let i=0;i<22;i++){
      const p=el(ctx); const s=5+Math.random()*15;
      p.style.cssText=`position:absolute;left:${24+Math.random()*242}px;bottom:${-2+Math.random()*84}px;width:${s}px;height:${s}px;border-radius:50%;opacity:0;background:rgba(255,34,54,.84);box-shadow:0 0 14px rgba(255,34,54,.74);z-index:721;`;
      p.animate([{opacity:0,transform:'translateY(18px) scale(.35)'},{opacity:.95,transform:`translate(${(Math.random()-.5)*66}px,${-(34+Math.random()*110)}px) scale(1)`,offset:.30},{opacity:0,transform:`translate(${(Math.random()-.5)*92}px,${-(96+Math.random()*130)}px) scale(.18)`}],{duration:700+Math.random()*160,delay:i*12,fill:'forwards'});
    }
    for(let i=0;i<12;i++){
      const d=el(ctx);
      d.style.cssText=`position:absolute;left:${i*9}%;top:-2%;width:12%;height:105%;opacity:0;background:linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,40,64,.16),rgba(30,0,0,.24));backdrop-filter:blur(${2+i%2}px);z-index:722;`;
      d.animate([{opacity:0,transform:'translateY(0) skewX(0deg)'},{opacity:.30,transform:`translateY(${18+i*3}px) skewX(${i%2?8:-8}deg)`},{opacity:0,transform:`translateY(${70+i*4}px) skewX(${i%2?14:-14}deg)`}],{duration:620,delay:i*14,fill:'forwards'});
    }

     
    ctx.card.animate([
      {transform:'translate(0,0) scale(1)',filter:'none'},
      {transform:'translate(-2px,1px) scale(1.006) skewX(-1deg)',filter:'brightness(.92) contrast(1.08)',offset:.16},
      {transform:'translate(3px,-2px) scale(1.012) skewX(1deg)',filter:'brightness(.84) contrast(1.14)',offset:.34},
      {transform:'translate(-4px,2px) scale(1.018) skewX(-2deg)',filter:'brightness(.74) contrast(1.22)',offset:.56},
      {transform:'translate(4px,-3px) scale(1.024) skewX(2deg)',filter:'brightness(.64) contrast(1.30)',offset:.78},
      {transform:'translate(0,0) scale(1.02)',filter:'brightness(.58) contrast(1.34)'}
    ],{duration:760,iterations:1,fill:'forwards',easing:'steps(3,end)'});
    shake(ctx,4,95,2);
    await wait(180);
    shake(ctx,8,72,4);
    await wait(170);
    shake(ctx,11,56,5);
    await wait(90);

    const left=makeSlice(ctx,'inset(0 52% 0 0)',730);
    const right=makeSlice(ctx,'inset(0 0 0 52%)',731);
    ctx.card.classList.add('dbdx-k6-hide');
    makeTransparent(ctx.card,90);
     

 
    try{
      const splitMask = 'linear-gradient(90deg, #000 0 48%, transparent 48% 52%, #000 52% 100%)';
      ctx.full.style.webkitMaskImage = splitMask;
      ctx.full.style.maskImage = splitMask;
      ctx.full.style.webkitMaskRepeat = 'no-repeat';
      ctx.full.style.maskRepeat = 'no-repeat';
      ctx.full.style.webkitMaskSize = '100% 100%';
      ctx.full.style.maskSize = '100% 100%';
    }catch(e){}

    left.animate([
      {opacity:1,transform:'translate(-1.4%,0) rotate(0deg) scale(1,1)',filter:'none'},
      {opacity:1,transform:'translate(-4.5%,1%) rotate(-2deg) scale(1,1)',filter:'brightness(.96)',offset:.18},
      {opacity:.96,transform:'translate(-7%,16%) rotate(-6deg) scale(1,.96)',filter:'brightness(.86)',offset:.46},
      {opacity:.70,transform:'translate(-6%,44%) rotate(-11deg) scale(1,.72)',filter:'brightness(.58) blur(1.2px)',offset:.76},
      {opacity:0,transform:'translate(-4%,66%) rotate(-15deg) scale(1.02,.38)',filter:'brightness(.26) blur(3.2px)'}
    ],{duration:1080,fill:'forwards',easing:'cubic-bezier(.18,.84,.22,1)'});
    right.animate([
      {opacity:1,transform:'translate(1.4%,0) rotate(0deg) scale(1,1)',filter:'none'},
      {opacity:1,transform:'translate(4.5%,1%) rotate(2deg) scale(1,1)',filter:'brightness(.96)',offset:.18},
      {opacity:.96,transform:'translate(7%,16%) rotate(6deg) scale(1,.96)',filter:'brightness(.86)',offset:.46},
      {opacity:.70,transform:'translate(6%,44%) rotate(11deg) scale(1,.72)',filter:'brightness(.58) blur(1.2px)',offset:.76},
      {opacity:0,transform:'translate(4%,66%) rotate(15deg) scale(1.02,.38)',filter:'brightness(.26) blur(3.2px)'}
    ],{duration:1080,fill:'forwards',easing:'cubic-bezier(.18,.84,.22,1)'});

    ctx.cleanup(1820); await wait(1180);
  };
  
  })();


  
(() => {
  const wait = ms => new Promise(r => setTimeout(r, ms));
  function ensure(){
    if(document.getElementById('dbdx-v16-style')) return;
    const s=document.createElement('style'); s.id='dbdx-v16-style';
    s.textContent=`
      .dbdx-v16-host{position:relative!important;overflow:hidden!important;isolation:isolate!important;contain:layout paint!important;}
      .dbdx-v16-overlay{position:absolute;inset:0;pointer-events:none;overflow:hidden!important;z-index:910;border-radius:inherit;}
      .dbdx-v16-canvas{position:absolute;left:0;top:0;width:290px;height:500px;transform-origin:0 0;pointer-events:none;overflow:hidden!important;}
      .dbdx-v16-full{position:absolute;inset:0;pointer-events:none;overflow:hidden!important;z-index:911;border-radius:inherit;}
    `;
    document.head.appendChild(s);
  }
  function setup(cardEl){
    ensure(); if(!cardEl) return null;
    cardEl.classList.add('dbdx-v16-host');
    cardEl.querySelectorAll?.(':scope > .dbdx-v16-overlay,:scope > .dbdx-v16-full').forEach(n=>n.remove());
    const overlay=document.createElement('div'); overlay.className='dbdx-v16-overlay';
    const canvas=document.createElement('div'); canvas.className='dbdx-v16-canvas';
    const full=document.createElement('div'); full.className='dbdx-v16-full';
    overlay.appendChild(canvas); cardEl.append(overlay,full);
    const rect=cardEl.getBoundingClientRect?.() || {width:290,height:500};
    canvas.style.transform=`scale(${Math.max(rect.width||290,1)/290}, ${Math.max(rect.height||500,1)/500})`;
    return {card:cardEl,canvas,full,cleanup(ms=1700){ setTimeout(()=>{ try{overlay.remove(); full.remove(); cardEl.classList.remove('dbdx-v16-host'); }catch(e){} }, ms); }};
  }
  function el(ctx,parent='full'){ const d=document.createElement('div'); (parent==='canvas'?ctx.canvas:ctx.full).appendChild(d); return d; }
  function flash(ctx,color='rgba(255,255,255,.24)',dur=160,delay=0){ const f=el(ctx); f.style.cssText=`position:absolute;inset:0;opacity:0;background:${color};mix-blend-mode:screen;`; f.animate([{opacity:0},{opacity:1,offset:.18},{opacity:0}],{duration:dur,delay,fill:'forwards'}); return f; }
  function shake(ctx,s=8,d=90,r=4){ ctx.card.animate([{transform:'translate(0,0)'},{transform:`translate(${-s}px,${Math.round(s*.34)}px)`},{transform:`translate(${s}px,${-Math.round(s*.27)}px)`},{transform:'translate(0,0)'}],{duration:d,iterations:r,easing:'ease-in-out'}); }
  function particles(ctx,{count=24,color='#fff',x=145,y=250,spreadX=220,spreadY=220,size=[3,9],life=800,delay=0,shape='50%'}={}){ for(let i=0;i<count;i++){ const p=el(ctx); const s=size[0]+Math.random()*(size[1]-size[0]); const dx=(Math.random()-.5)*spreadX, dy=(Math.random()-.5)*spreadY; p.style.cssText=`position:absolute;left:${x}px;top:${y}px;width:${s}px;height:${s}px;border-radius:${shape};opacity:0;background:${color};box-shadow:0 0 10px ${color};`; p.animate([{opacity:0,transform:'translate(0,0) scale(.35)'},{opacity:.95,transform:`translate(${dx*.35}px,${dy*.35}px) scale(1)`,offset:.28},{opacity:0,transform:`translate(${dx}px,${dy}px) scale(.18)`}],{duration:life+Math.random()*160,delay:delay+i*8,fill:'forwards',easing:'ease-out'}); }}
  function streak(ctx,{color='rgba(255,255,255,.8)',top=200,rot=0,dur=360,delay=0,width=330,height=8}={}){ const s=el(ctx); s.style.cssText=`position:absolute;left:-22px;top:${top}px;width:${width}px;height:${height}px;border-radius:999px;opacity:0;background:linear-gradient(90deg,transparent,${color},transparent);filter:drop-shadow(0 0 12px ${color});transform:rotate(${rot}deg) scaleX(.08);`; s.animate([{opacity:0,transform:`rotate(${rot}deg) scaleX(.08)`},{opacity:.95,transform:`rotate(${rot}deg) scaleX(1)`,offset:.34},{opacity:0,transform:`translateX(28px) rotate(${rot}deg) scaleX(1.12)`}],{duration:dur,delay,fill:'forwards',easing:'cubic-bezier(.18,.84,.22,1)'}); return s; }
  function ring(ctx,{x=145,y=235,size=170,color='rgba(120,255,255,.86)',delay=0,dur=620}={}){ const r=el(ctx); r.style.cssText=`position:absolute;left:${x-size/2}px;top:${y-size/2}px;width:${size}px;height:${size}px;border:2px solid ${color};border-radius:50%;opacity:0;box-shadow:0 0 18px ${color}, inset 0 0 18px rgba(255,255,255,.12);`; r.animate([{opacity:0,transform:'scale(.25)'},{opacity:.9,transform:'scale(1)',offset:.42},{opacity:0,transform:'scale(1.22)'}],{duration:dur,delay,fill:'forwards'}); return r; }

  window.playDemogorgonPounceSnap = async function(cardEl){
    const ctx=setup(cardEl); if(!ctx) return;
    cardEl.dataset.dbdxSwarmSettleMinimum='300';

    const aura=el(ctx);
    aura.style.cssText='position:absolute;inset:-10%;opacity:0;background:radial-gradient(circle at 52% 48%, rgba(255,44,44,.42), rgba(170,0,0,.24) 38%, rgba(70,0,0,.08) 68%, transparent 76%);filter:blur(8px);mix-blend-mode:screen;';
    aura.animate([{opacity:0,transform:'scale(.82)'},{opacity:.9,transform:'scale(1.02)',offset:.36},{opacity:.68,transform:'scale(1.08)',offset:.72},{opacity:0,transform:'scale(1.15)'}],{duration:880,fill:'forwards'});
    for(let i=0;i<5;i++) streak(ctx,{color:'rgba(255,54,54,.82)',top:126+Math.random()*190,rot:-18+Math.random()*12,dur:300,delay:i*34,width:340,height:7+Math.random()*7});
    shake(ctx,13,78,5);
    flash(ctx,'rgba(255,35,35,.25)',140);
    particles(ctx,{count:30,color:'#b40000',x:155,y:225,spreadX:230,spreadY:180,size:[4,11],life:720});

    await wait(320);
    flash(ctx,'rgba(255,255,255,.16)',90);
    ctx.card.animate([
      {opacity:1,transform:'translate(0,0) scale(1)',filter:'none'},
      {opacity:1,transform:'translate(22px,-18px) scale(1.09) rotate(-2deg)',filter:'brightness(1.22) saturate(1.18)',offset:.18},
      {opacity:.82,transform:'translate(118px,-34px) scale(.98) rotate(-7deg)',filter:'brightness(.70) saturate(1.10) blur(2px)',offset:.58},
      {opacity:0,transform:'translate(205px,4px) scale(.82) rotate(-12deg)',filter:'brightness(.26) blur(5px)'}
    ],{duration:520,fill:'forwards',easing:'cubic-bezier(.10,.88,.16,1)'});
    ctx.cleanup(1400); await wait(780);
  };

})();

  
(() => {
  const wait = ms => new Promise(r => setTimeout(r, ms));
  function ensure(){
    if(document.getElementById('dbdx-pig-v29-style')) return;
    const s=document.createElement('style'); s.id='dbdx-pig-v29-style';
    s.textContent=`
      .dbdx-pig-v29-host{position:relative!important;overflow:hidden!important;isolation:isolate!important;contain:layout paint!important;}
      .dbdx-pig-v29-overlay{position:absolute;inset:0;pointer-events:none;overflow:hidden!important;z-index:980;border-radius:inherit;}
      .dbdx-pig-v29-canvas{position:absolute;left:0;top:0;width:290px;height:500px;transform-origin:0 0;pointer-events:none;overflow:hidden!important;}
      .dbdx-pig-v29-full{position:absolute;inset:0;pointer-events:none;overflow:hidden!important;z-index:981;border-radius:inherit;}
      .dbdx-pig-v29-hide > :not(.dbdx-pig-v29-overlay):not(.dbdx-pig-v29-full){opacity:0!important;}
      .dbdx-pig-v29-slice{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;pointer-events:none!important;z-index:990!important;border-radius:inherit!important;overflow:hidden!important;}
      .dbdx-pig-v29-slice .dbdx-overlay,.dbdx-pig-v29-slice .dbdx-full,.dbdx-pig-v29-slice .dbdx-v15-overlay,.dbdx-pig-v29-slice .dbdx-v15-full,.dbdx-pig-v29-slice .dbdx-v16-overlay,.dbdx-pig-v29-slice .dbdx-v16-full,.dbdx-pig-v29-slice .dbdx-k6-overlay,.dbdx-pig-v29-slice .dbdx-k6-full,.dbdx-pig-v29-slice .dbdx-pig-v29-overlay,.dbdx-pig-v29-slice .dbdx-pig-v29-full{display:none!important;}
    `;
    document.head.appendChild(s);
  }
  function setup(cardEl){
    ensure(); if(!cardEl) return null;
    cardEl.classList.add('dbdx-pig-v29-host');
    cardEl.querySelectorAll?.(':scope > .dbdx-pig-v29-overlay,:scope > .dbdx-pig-v29-full').forEach(n=>n.remove());
    const overlay=document.createElement('div'); overlay.className='dbdx-pig-v29-overlay';
    const canvas=document.createElement('div'); canvas.className='dbdx-pig-v29-canvas';
    const full=document.createElement('div'); full.className='dbdx-pig-v29-full';
    overlay.appendChild(canvas); cardEl.append(overlay,full);
    const rect=cardEl.getBoundingClientRect?.() || {width:290,height:500};
    canvas.style.transform=`scale(${Math.max(rect.width||290,1)/290}, ${Math.max(rect.height||500,1)/500})`;
    return {card:cardEl,canvas,full,cleanup(ms=1700){ setTimeout(()=>{ try{overlay.remove(); full.remove(); cardEl.classList.remove('dbdx-pig-v29-host','dbdx-pig-v29-hide'); cardEl.style.background=''; cardEl.style.backgroundColor=''; cardEl.style.backgroundImage=''; cardEl.style.boxShadow=''; cardEl.style.borderColor=''; cardEl.style.outlineColor=''; cardEl.style.transition=''; cardEl.style.transformOrigin=''; }catch(e){} }, ms); }};
  }
  function el(ctx,parent='full'){
    const d=document.createElement('div');
    (parent==='canvas'?ctx.canvas:ctx.full).appendChild(d);
    return d;
  }
  function flash(ctx,color='rgba(255,255,255,.24)',dur=160,delay=0){
    const f=el(ctx); f.style.cssText=`position:absolute;inset:0;opacity:0;background:${color};mix-blend-mode:screen;z-index:982;`;
    f.animate([{opacity:0},{opacity:1,offset:.18},{opacity:0}],{duration:dur,delay,fill:'forwards'});
    return f;
  }
  function shakeCard(ctx,intensity=8,duration=100,iterations=3){
    try{ ctx.card.animate([{transform:'translate(0,0)'},{transform:`translate(${-intensity}px,${Math.round(intensity*.35)}px)`},{transform:`translate(${intensity}px,${-Math.round(intensity*.28)}px)`},{transform:'translate(0,0)'}],{duration,iterations,easing:'ease-in-out'}); }catch(e){}
  }
  function particles(ctx,{count=24,color='#fff',x=145,y=245,spreadX=220,spreadY=220,size=[3,8],life=760,delay=0,shape='50%'}={}){
    for(let i=0;i<count;i++){
      const p=el(ctx); const s=size[0]+Math.random()*(size[1]-size[0]);
      const dx=(Math.random()-.5)*spreadX, dy=(Math.random()-.5)*spreadY;
      p.style.cssText=`position:absolute;left:${x}px;top:${y}px;width:${s}px;height:${s}px;border-radius:${shape};opacity:0;background:${color};box-shadow:0 0 12px ${color};z-index:984;`;
      p.animate([{opacity:0,transform:'translate(0,0) scale(.35)'},{opacity:.95,transform:`translate(${dx*.36}px,${dy*.36}px) scale(1)`,offset:.28},{opacity:0,transform:`translate(${dx}px,${dy}px) rotate(${Math.random()*280-140}deg) scale(.18)`}],{duration:life+Math.random()*140,delay:delay+i*7,fill:'forwards',easing:'ease-out'});
    }
  }
  function makeTransparent(card,delay=0){
    setTimeout(()=>{ try{ card.style.transition='background-color 180ms ease, box-shadow 180ms ease, border-color 180ms ease, outline-color 180ms ease'; card.style.background='transparent'; card.style.backgroundColor='transparent'; card.style.backgroundImage='none'; card.style.boxShadow='none'; card.style.borderColor='transparent'; card.style.outlineColor='transparent'; }catch(e){} },delay);
  }
  function makeSlice(ctx,clip,z=990){
    const s=ctx.card.cloneNode(true);
    s.removeAttribute('id');
    s.classList.remove('dbdx-pig-v29-host','dbdx-pig-v29-hide','dbdx-v15-hide','dbdx-k6-hide','dbdx-fx-hide-base','dbdx-repair-hide-base','dbdx-polish-hide-base');
    s.querySelectorAll?.('.dbdx-overlay,.dbdx-full,.dbdx-v15-overlay,.dbdx-v15-full,.dbdx-v16-overlay,.dbdx-v16-full,.dbdx-k6-overlay,.dbdx-k6-full,.dbdx-fx-overlay,.dbdx-fx-full,.dbdx-repair-overlay,.dbdx-repair-full,.dbdx-polish-overlay,.dbdx-polish-full,.dbdx-pig-v29-overlay,.dbdx-pig-v29-full').forEach(n=>n.remove());
    s.classList.add('dbdx-pig-v29-slice');
    s.style.clipPath=clip; s.style.zIndex=String(z);
    ctx.full.appendChild(s);
    return s;
  }

  window.playPigTimerSnap = async function(cardEl){
    const ctx=setup(cardEl); if(!ctx) return;

    const aura=el(ctx,'full');
    aura.style.cssText='position:absolute;inset:-8%;opacity:0;background:radial-gradient(circle at 50% 58%, rgba(255,40,40,.20), rgba(110,0,0,.12) 42%, transparent 76%);filter:blur(10px);z-index:982;';
    aura.animate([{opacity:0,transform:'scale(.78)'},{opacity:.88,transform:'scale(1.02)',offset:.30},{opacity:.46,transform:'scale(1.10)',offset:.70},{opacity:0,transform:'scale(1.20)'}],{duration:1320,fill:'forwards'});

    const t=el(ctx,'full');
    t.style.cssText='position:absolute;left:50%;top:10px;transform:translateX(-50%);padding:6px 10px;border-radius:10px;color:#fffaf2;background:rgba(15,5,5,.55);box-shadow:0 0 28px rgba(255,0,0,.62), inset 0 0 22px rgba(255,70,70,.28);text-shadow:0 0 9px #fff,0 0 18px #ff2424,0 2px 0 #000;font:800 26px/1 system-ui,sans-serif;letter-spacing:1px;z-index:986;';

    const ticks=['00:03','00:02','00:01'];
    for(const [i,v] of ticks.entries()){
      t.textContent=v;
      t.animate([{transform:'translateX(-50%) scale(.94)'},{transform:'translateX(-50%) scale(1.07)',offset:.40},{transform:'translateX(-50%) scale(1)'}],{duration:290,fill:'forwards',easing:'cubic-bezier(.17,.84,.24,1)'});
      particles(ctx,{count:8,color:i===2?'#ffffff':'#ff3838',x:145,y:58,spreadX:145,spreadY:82,size:[3,6],life:560,delay:20,shape:'50%'});
      shakeCard(ctx,2+i,140,1);
      await wait(360);
    }

    t.textContent='00:00';
    t.animate([{transform:'translateX(-50%) scale(1)'},{transform:'translateX(-50%) scale(1.18)',offset:.2},{transform:'translateX(-50%) scale(.97)',offset:.48},{transform:'translateX(-50%) scale(1.05)'}],{duration:320,fill:'forwards',easing:'cubic-bezier(.17,.84,.24,1)'});

    await wait(90);
    t.animate([{opacity:1,transform:'translateX(-50%) scale(1)'},{opacity:0,transform:'translateX(-50%) scale(.86)',filter:'brightness(.45) blur(1.6px)'}],{duration:120,fill:'forwards',easing:'ease-out'});
    setTimeout(()=>{ try{ t.remove(); }catch(e){} },140);
    await wait(80);

    const l1=el(ctx,'full'), l2=el(ctx,'full');
    [[l1,-36],[l2,36]].forEach(([s,rot])=>{
      s.style.cssText=`position:absolute;left:-16%;top:48%;width:132%;height:8px;border-radius:999px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.94),rgba(255,40,40,.98),transparent);filter:drop-shadow(0 0 12px rgba(255,40,40,.9));opacity:0;transform:rotate(${rot}deg) scaleX(.05);z-index:987;`;
      s.animate([{opacity:0,transform:`rotate(${rot}deg) scaleX(.05)`},{opacity:1,transform:`rotate(${rot}deg) scaleX(1)`,offset:.32},{opacity:0,transform:`rotate(${rot}deg) scaleX(1.16)`}],{duration:360,fill:'forwards',easing:'cubic-bezier(.18,.84,.22,1)'});
    });
    flash(ctx,'rgba(255,30,30,.74)',220);
    shakeCard(ctx,10,86,5);
    particles(ctx,{count:36,color:'#ff2d2d',x:145,y:245,spreadX:300,spreadY:260,size:[4,10],life:820,shape:'2px'});

    await wait(110);
    const tl=makeSlice(ctx,'polygon(0 0,50% 0,50% 28%,28% 50%,0 50%)',990);
    const tr=makeSlice(ctx,'polygon(50% 0,100% 0,100% 50%,72% 50%,50% 28%)',991);
    const bl=makeSlice(ctx,'polygon(0 50%,28% 50%,50% 72%,50% 100%,0 100%)',992);
    const br=makeSlice(ctx,'polygon(72% 50%,100% 50%,100% 100%,50% 100%,50% 72%)',993);
    ctx.card.classList.add('dbdx-pig-v29-hide');
    makeTransparent(ctx.card,70);
    [[tl,-18,-16,-8],[tr,18,-16,8],[bl,-18,16,8],[br,18,16,-8]].forEach(([piece,x1,y1,r1],i)=>{
      piece.animate([
        {opacity:1,transform:'translate(0,0) rotate(0deg)',filter:'none'},
        {opacity:.96,transform:`translate(${x1*.45}%,${y1*.45}%) rotate(${r1*.45}deg)`,filter:'brightness(.94)',offset:.30},
        {opacity:.54,transform:`translate(${x1}%,${y1}%) rotate(${r1}deg)`,filter:'brightness(.52) blur(1.6px)',offset:.72},
        {opacity:0,transform:`translate(${x1*1.4}%,${y1*1.4}%) rotate(${r1*1.3}deg)`,filter:'brightness(.22) blur(3px)'}
      ],{duration:820+i*24,fill:'forwards',easing:'cubic-bezier(.18,.84,.22,1)'});
    });
    ctx.cleanup(1700); await wait(940);
  };
})();


  
(() => {
  const wait = ms => new Promise(r => setTimeout(r, ms));
  function ensure(){
    if(document.getElementById('dbdx-v30-style')) return;
    const s=document.createElement('style'); s.id='dbdx-v30-style';
    s.textContent=`
      .dbdx-v30-host{position:relative!important;overflow:hidden!important;isolation:isolate!important;contain:layout paint!important;}
      .dbdx-v30-overlay{position:absolute;inset:0;pointer-events:none;overflow:hidden!important;z-index:960;border-radius:inherit;}
      .dbdx-v30-canvas{position:absolute;left:0;top:0;width:290px;height:500px;transform-origin:0 0;pointer-events:none;overflow:hidden!important;}
      .dbdx-v30-full{position:absolute;inset:0;pointer-events:none;overflow:hidden!important;z-index:961;border-radius:inherit;}
    `;
    document.head.appendChild(s);
  }
  function setup(cardEl){
    ensure(); if(!cardEl) return null;
    cardEl.classList.add('dbdx-v30-host');
    cardEl.querySelectorAll?.(':scope > .dbdx-v30-overlay,:scope > .dbdx-v30-full').forEach(n=>n.remove());
    const overlay=document.createElement('div'); overlay.className='dbdx-v30-overlay';
    const canvas=document.createElement('div'); canvas.className='dbdx-v30-canvas';
    const full=document.createElement('div'); full.className='dbdx-v30-full';
    overlay.appendChild(canvas); cardEl.append(overlay,full);
    const rect=cardEl.getBoundingClientRect?.() || {width:290,height:500};
    canvas.style.transform=`scale(${Math.max(rect.width||290,1)/290}, ${Math.max(rect.height||500,1)/500})`;
    return {card:cardEl,canvas,full,cleanup(ms=1800){ setTimeout(()=>{ try{overlay.remove(); full.remove(); cardEl.classList.remove('dbdx-v30-host');}catch(e){} }, ms); }};
  }
  function el(ctx,parent='full'){ const d=document.createElement('div'); (parent==='canvas'?ctx.canvas:ctx.full).appendChild(d); return d; }
  function flash(ctx,color='rgba(255,255,255,.24)',dur=180,delay=0){ const f=el(ctx); f.style.cssText=`position:absolute;inset:0;opacity:0;background:${color};mix-blend-mode:screen;`; f.animate([{opacity:0},{opacity:1,offset:.18},{opacity:0}],{duration:dur,delay,fill:'forwards'}); return f; }
  function shakeCard(ctx,s=8,d=96,r=4){ ctx.card.animate([{transform:'translate(0,0)'},{transform:`translate(${-s}px,${Math.round(s*.35)}px)`},{transform:`translate(${s}px,${-Math.round(s*.26)}px)`},{transform:'translate(0,0)'}],{duration:d,iterations:r,easing:'ease-in-out'}); }
  function particles(ctx,{count=24,color='#fff',x=145,y=250,spreadX=220,spreadY=220,size=[3,9],life=800,delay=0,shape='50%'}={}){ for(let i=0;i<count;i++){ const p=el(ctx); const s=size[0]+Math.random()*(size[1]-size[0]); const dx=(Math.random()-.5)*spreadX, dy=(Math.random()-.5)*spreadY; p.style.cssText=`position:absolute;left:${x}px;top:${y}px;width:${s}px;height:${s}px;border-radius:${shape};opacity:0;background:${color};box-shadow:0 0 10px ${color};`; p.animate([{opacity:0,transform:'translate(0,0) scale(.35)'},{opacity:.95,transform:`translate(${dx*.35}px,${dy*.35}px) scale(1)`,offset:.28},{opacity:0,transform:`translate(${dx}px,${dy}px) scale(.18)`}],{duration:life+Math.random()*160,delay:delay+i*8,fill:'forwards',easing:'ease-out'}); }}

  window.playBlightHeavySerumBurst = async function(cardEl){
    const ctx=setup(cardEl); if(!ctx) return;

    const aura=el(ctx,'full');
    aura.style.cssText='position:absolute;inset:-8%;opacity:0;background:radial-gradient(circle at 50% 54%, rgba(255,150,45,.20), rgba(125,45,0,.12) 44%, transparent 72%);filter:blur(9px);mix-blend-mode:screen;z-index:962;';
    aura.animate([{opacity:0,transform:'scale(.90)'},{opacity:.86,transform:'scale(1.04)',offset:.34},{opacity:.30,transform:'scale(1.16)'}],{duration:1200,fill:'forwards'});

    const serum=el(ctx,'canvas');
    serum.style.cssText='position:absolute;left:134px;top:-80px;width:24px;height:86px;border-radius:14px 14px 22px 22px;background:linear-gradient(180deg,#fff3c1,#ff9d34 45%,#cc5b13);box-shadow:0 0 18px rgba(255,150,45,.85);opacity:0;z-index:965;';
    serum.animate([
      {opacity:0,transform:'translateY(-48px) rotate(25deg) scale(.92)'},
      {opacity:1,transform:'translateY(220px) rotate(25deg) scale(1)',offset:.76},
      {opacity:0,transform:'translateY(308px) rotate(25deg) scale(.84)'}
    ],{duration:480,fill:'forwards',easing:'cubic-bezier(.16,.84,.22,1)'});

    await wait(300);
    flash(ctx,'rgba(255,155,60,.48)',180);
    shakeCard(ctx,8,90,3);

    for(let i=0;i<22;i++){
      const b=el(ctx,'full');
      const size=8+Math.random()*18;
      const left=106+Math.random()*76;
      const top=226+Math.random()*126;
      b.style.cssText=`position:absolute;left:${left}px;top:${top}px;width:${size}px;height:${size}px;border-radius:50%;opacity:0;background:radial-gradient(circle at 35% 35%, rgba(255,245,210,.95), rgba(255,166,60,.96) 45%, rgba(216,92,18,.92) 76%);box-shadow:0 0 12px rgba(255,144,40,.85), inset 0 0 8px rgba(255,255,255,.24);z-index:964;`;
      const dx=(Math.random()-.5)*46, dy=-(42+Math.random()*112);
      b.animate([
        {opacity:0,transform:'translate(0,8px) scale(.4)'},
        {opacity:.95,transform:`translate(${dx*.35}px,${dy*.28}px) scale(1)`,offset:.32},
        {opacity:.62,transform:`translate(${dx*.72}px,${dy*.72}px) scale(1.08)`,offset:.72},
        {opacity:0,transform:`translate(${dx}px,${dy}px) scale(.72)`}
      ],{duration:620+Math.random()*180,delay:i*16,fill:'forwards',easing:'ease-out'});
    }
    particles(ctx,{count:24,color:'#ff9a38',x:145,y:248,spreadX:160,spreadY:130,size:[4,10],life:760,delay:40});

    await wait(320);
    flash(ctx,'rgba(255,170,80,.26)',120);
    shakeCard(ctx,10,86,5);
    particles(ctx,{count:48,color:'#ff8b2f',x:145,y:245,spreadX:300,spreadY:250,size:[4,12],life:760,shape:'3px'});

    for(let i=0;i<18;i++){
      const streak=el(ctx,'full');
      const y=118+Math.random()*194;
      const h=10+Math.random()*11;
      const rot=-9+Math.random()*12;
      streak.style.cssText=`position:absolute;left:${-150+Math.random()*80}px;top:${y}px;width:${260+Math.random()*210}px;height:${h}px;border-radius:999px;opacity:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.42),rgba(255,156,44,.82),rgba(255,235,128,.38),transparent);filter:blur(${6+Math.random()*6}px);transform:rotate(${rot}deg) scaleX(.10);z-index:963;`;
      streak.animate([
        {opacity:0,transform:`translateX(0) rotate(${rot}deg) scaleX(.10)`},
        {opacity:.95,transform:`translateX(${70+Math.random()*45}px) rotate(${rot}deg) scaleX(1)`,offset:.28},
        {opacity:0,transform:`translateX(${285+Math.random()*120}px) rotate(${rot}deg) scaleX(1.25)`}
      ],{duration:360+Math.random()*110,delay:i*10,fill:'forwards',easing:'cubic-bezier(.16,.84,.2,1)'});
    }

    await wait(90);
    ctx.card.animate([
      {opacity:1,transform:'translateX(0) skewX(0deg) scale(1.02)',filter:'none'},
      {opacity:1,transform:'translateX(36px) skewX(-10deg) scale(1.05)',filter:'brightness(1.08)',offset:.18},
      {opacity:.94,transform:'translateX(125px) skewX(-17deg) scale(1.03)',filter:'blur(1.8px) brightness(.94)',offset:.42},
      {opacity:.50,transform:'translateX(245px) skewX(-22deg) scale(.96)',filter:'blur(4.8px) brightness(.62)',offset:.72},
      {opacity:0,transform:'translateX(360px) skewX(-26deg) scale(.86)',filter:'blur(8px) brightness(.34)'}
    ],{duration:650,fill:'forwards',easing:'cubic-bezier(.14,.86,.18,1)'});
    ctx.cleanup(1850);
    await wait(980);
  };
})();
