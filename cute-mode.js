 
 
window.GuessWhoShouldSkipCutePhoneEffects = window.GuessWhoShouldSkipCutePhoneEffects || function () {
    return window.matchMedia?.("(max-width: 760px), (pointer: coarse), (prefers-reduced-motion: reduce)")?.matches || false;
};

(() => {
    const runtimeStyleId = "cuteModeRuntimeStyles";

    const ensureRuntimeStyles = () => {
        if (document.getElementById(runtimeStyleId)) return;
        const style = document.createElement("style");
        style.id = runtimeStyleId;
        style.textContent = `
.gw-cute-transform-overlay,
.gw-cute-transform-overlay * { box-sizing: border-box; }
.gw-cute-transform-overlay {
    position: fixed;
    inset: 0;
    z-index: 2147483647;
    overflow: hidden;
    pointer-events: none;
    isolation: isolate;
    opacity: 1;
    visibility: visible;
    contain: layout paint style;
}
.gw-cute-transform-curtain {
    position: absolute;
    inset: -4vmax;
    z-index: 0;
    background:
        radial-gradient(circle at 50% 47%, rgba(255,255,255,.99) 0 13rem, rgba(255,239,250,.995) 25rem, rgba(227,248,255,.995) 52rem),
        radial-gradient(circle at 14% 18%, rgba(255,174,221,.96), transparent 29rem),
        radial-gradient(circle at 86% 22%, rgba(176,224,255,.94), transparent 31rem),
        radial-gradient(circle at 16% 84%, rgba(255,224,243,.94), transparent 27rem),
        linear-gradient(135deg, #fff9fd 0%, #fff0fa 40%, #e8f8ff 100%);
    box-shadow: inset 0 0 140px rgba(255,255,255,.76);
    clip-path: circle(0% at 50% 55%);
    transform: scale(1.03);
    opacity: 1;
    animation: gwCuteCurtainIn 3.05s cubic-bezier(.16,.78,.16,1) forwards;
    will-change: clip-path, opacity, transform;
}
.gw-cute-transform-curtain::before,
.gw-cute-transform-curtain::after {
    content: "";
    position: absolute;
    inset: -18%;
    pointer-events: none;
}
.gw-cute-transform-curtain::before {
    z-index: 1;
    opacity: 0;
    background:
        linear-gradient(112deg, transparent 0 34%, rgba(255,255,255,.72) 42%, rgba(255,205,235,.34) 48%, rgba(196,234,255,.34) 53%, transparent 64% 100%),
        radial-gradient(circle at 28% 42%, rgba(255,166,214,.36), transparent 18rem),
        radial-gradient(circle at 68% 38%, rgba(145,211,255,.34), transparent 20rem);
    transform: translateX(-18%) rotate(-2deg);
    animation: gwCuteRibbon 2.05s cubic-bezier(.2,.72,.2,1) .22s both;
}
.gw-cute-transform-curtain::after {
    inset: 0;
    z-index: 2;
    opacity: 0;
    background-image:
        radial-gradient(circle, rgba(255,255,255,.96) 0 1.4px, transparent 2.3px),
        radial-gradient(circle, rgba(255,139,207,.35) 0 1.2px, transparent 2px),
        radial-gradient(circle, rgba(111,192,255,.32) 0 1.2px, transparent 2px),
        radial-gradient(circle, rgba(255,255,255,.72) 0 4px, transparent 5px);
    background-size: 30px 30px, 48px 48px, 58px 58px, 124px 124px;
    background-position: 0 0, 12px 16px, 22px 4px, 34px 42px;
    animation: gwCuteTwinkles 2.55s ease-out .28s forwards;
}
.gw-cute-transform-scene {
    position: absolute;
    inset: 0;
    z-index: 1;
    overflow: hidden;
    opacity: 1;
}
.gw-cute-transform-core {
    position: fixed;
    z-index: 2;
    left: 50%;
    top: 50%;
    width: min(48vw, 430px);
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,.98) 0 20%, rgba(255,214,239,.88) 36%, rgba(208,240,255,.7) 57%, transparent 74%);
    opacity: 0;
    transform: translate(-50%, -50%) scale(.68);
    animation: gwCuteCore 1.55s cubic-bezier(.18,.76,.2,1) .76s forwards;
}
.gw-cute-transform-ring {
    position: fixed;
    z-index: 3;
    left: 50%;
    top: 50%;
    width: min(62vw, 650px);
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    border: 3px solid rgba(255,255,255,.86);
    box-shadow: 0 0 0 9px rgba(255,198,233,.23), 0 0 0 18px rgba(185,229,255,.18), 0 0 45px rgba(255,255,255,.72);
    opacity: 0;
    transform: translate(-50%, -50%) scale(.72) rotate(-10deg);
    animation: gwCuteRing 1.55s cubic-bezier(.18,.76,.2,1) .82s forwards;
}
.gw-cute-transform-cloud {
    position: fixed;
    z-index: 4;
    left: var(--x);
    top: var(--y);
    width: 120px;
    height: 46px;
    border-radius: 999px;
    background: rgba(255,255,255,.82);
    box-shadow: 28px -10px 0 rgba(255,255,255,.72), 58px 0 0 rgba(255,255,255,.64), 0 12px 24px rgba(255,178,222,.22);
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(calc(var(--scale) * .74));
    animation: gwCuteCloud 1.72s cubic-bezier(.18,.76,.2,1) var(--delay) forwards;
}
.gw-cute-transform-cloud::before,
.gw-cute-transform-cloud::after {
    content: "";
    position: absolute;
    border-radius: 999px;
    background: rgba(255,255,255,.75);
}
.gw-cute-transform-cloud::before { width: 58px; height: 58px; left: 22px; top: -24px; }
.gw-cute-transform-cloud::after { width: 42px; height: 42px; right: 24px; top: -14px; }
.gw-cute-transform-charm {
    position: fixed;
    z-index: 6;
    left: var(--x);
    top: var(--y);
    font-size: var(--size);
    line-height: 1;
    opacity: 0;
    color: rgba(255,109,193,.88);
    -webkit-text-fill-color: rgba(255,109,193,.88);
    text-shadow: 0 1px 0 #fff, 0 0 12px rgba(255,255,255,.95), 0 0 18px rgba(145,211,255,.4);
    transform: translate3d(-50%, -50%, 0) scale(.4) rotate(0deg);
    animation: gwCuteCharm var(--duration) cubic-bezier(.18,.76,.2,1) var(--delay) both;
}
.gw-cute-transform-charm.is-blue { color: rgba(102,184,255,.82); -webkit-text-fill-color: rgba(102,184,255,.82); }
.gw-cute-transform-charm.is-white { color: rgba(255,255,255,.94); -webkit-text-fill-color: rgba(255,255,255,.94); }
.gw-cute-transform-banner {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 20;
    width: min(74vw, 560px);
    padding: 30px 34px 27px;
    border-radius: 38px;
    background:
        radial-gradient(circle at 16% 16%, rgba(255,255,255,.98) 0 .55rem, transparent .59rem),
        radial-gradient(circle at 84% 24%, rgba(216,242,255,.86) 0 .7rem, transparent .74rem),
        repeating-linear-gradient(135deg, rgba(255,255,255,.72) 0 9px, rgba(255,223,242,.52) 9px 18px, rgba(232,248,255,.52) 18px 27px),
        linear-gradient(180deg, #ffffff 0%, #fff0fa 56%, #e8f8ff 100%);
    border: 2px solid rgba(255,181,222,.98);
    box-shadow: 0 30px 80px rgba(255,154,211,.38), 0 22px 58px rgba(136,205,255,.32), inset 0 1px 0 #fff, inset 0 -18px 40px rgba(255,255,255,.35);
    overflow: hidden;
    isolation: isolate;
    opacity: 0;
    transform: translate(-50%, -50%) scale(.86) rotate(-1.4deg);
    animation: gwCuteBanner 1.55s cubic-bezier(.18,.78,.2,1) .86s forwards;
}
.gw-cute-transform-banner::before,
.gw-cute-transform-banner::after {
    content: "";
    position: absolute;
    z-index: 1;
    pointer-events: none;
    border-radius: 999px;
}
.gw-cute-transform-banner::before { width: 108px; height: 108px; left: -34px; top: -36px; background: radial-gradient(circle, rgba(255,160,213,.34), transparent 67%); }
.gw-cute-transform-banner::after { width: 132px; height: 132px; right: -44px; bottom: -52px; background: radial-gradient(circle, rgba(145,211,255,.34), transparent 70%); }
.gw-cute-transform-pattern {
    position: absolute;
    inset: 0;
    z-index: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.58), transparent);
    transform: translateX(-120%);
    animation: gwCuteBannerSheen 1.45s cubic-bezier(.2,.8,.2,1) 1.05s forwards;
}
.gw-cute-transform-title {
    position: relative;
    z-index: 2;
    display: block;
    text-align: center;
    font-family: "Baloo 2", "Fredoka", "Mochiy Pop One", "Segoe UI Rounded", system-ui, sans-serif !important;
    font-weight: 800;
    font-size: clamp(2.6rem, 8vw, 5.45rem);
    line-height: .86;
    letter-spacing: .01em;
    color: #ff9ccd;
    -webkit-text-fill-color: #ff9ccd;
    -webkit-text-stroke: 3px rgba(255,255,255,.92);
    paint-order: stroke fill;
    text-shadow: 0 8px 18px rgba(255, 186, 224, .28), 0 0 18px rgba(184, 225, 255, .58), 0 0 28px rgba(255,255,255,.96);
}
.gw-cute-transform-title::before,
.gw-cute-transform-title::after {
    content: "✧";
    position: absolute;
    top: 44%;
    transform: translateY(-50%);
    font-size: clamp(1.45rem, 4vw, 2.5rem);
    color: #87ceff;
    -webkit-text-fill-color: #87ceff;
    text-shadow: 0 1px 0 #fff, 0 0 18px rgba(255,255,255,.9);
    animation: gwCuteSideStar 1.25s ease-in-out 1.06s both;
}
.gw-cute-transform-title::before { left: 3%; }
.gw-cute-transform-title::after { right: 3%; color: #ff9bd3; -webkit-text-fill-color: #ff9bd3; }
.gw-cute-transform-sub {
    position: relative;
    z-index: 2;
    margin-top: 12px;
    text-align: center;
    font-size: clamp(1.35rem, 3.8vw, 2.35rem);
    letter-spacing: .22em;
    color: #84caff;
    -webkit-text-fill-color: #84caff;
    text-shadow: 0 1px 0 #fff, 0 0 18px rgba(255,255,255,.95);
    opacity: 0;
    transform: translateY(8px) scale(.9);
    animation: gwCuteSubPop .9s cubic-bezier(.2,.8,.2,1) 1.18s forwards;
}
.gw-cute-elim-shell {
    position: fixed;
    z-index: 2147483300;
    pointer-events: none;
    overflow: visible;
    isolation: isolate;
    animation: gwCuteElimShell 780ms cubic-bezier(.18,.8,.2,1) forwards;
}
.gw-cute-elim-card {
    position: relative;
    width: 100%;
    height: 100%;
    pointer-events: none;
    transform-origin: center;
    filter: saturate(1.08) brightness(1.04);
    box-shadow: 0 18px 46px rgba(255,139,207,.28), 0 0 24px rgba(255,255,255,.75);
    animation: gwCuteElimCard 780ms cubic-bezier(.18,.8,.2,1) forwards;
}
.gw-cute-elim-puff {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 112%;
    height: 112%;
    border-radius: 32px;
    transform: translate(-50%, -50%) scale(.62);
    background: radial-gradient(circle, rgba(255,255,255,.94) 0 13%, rgba(255,183,225,.62) 28%, rgba(255,221,241,.34) 48%, transparent 70%);
    opacity: 0;
    animation: gwCuteElimPuff 760ms ease-out forwards;
}
.gw-cute-elim-spark {
    position: absolute;
    left: 50%;
    top: 50%;
    color: var(--color);
    -webkit-text-fill-color: var(--color);
    font-size: var(--size);
    line-height: 1;
    text-shadow: 0 1px 0 #fff, 0 0 12px rgba(255,255,255,.95);
    opacity: 0;
    transform: translate(-50%, -50%) scale(.4) rotate(0deg);
    animation: gwCuteElimSpark 840ms cubic-bezier(.18,.8,.2,1) var(--delay) forwards;
}
@keyframes gwCuteCurtainIn {
    0% { opacity: 1; transform: scale(1.04); clip-path: circle(0% at 50% 55%); }
    18% { opacity: 1; transform: scale(1.02); clip-path: circle(32% at 50% 55%); }
    36% { opacity: 1; transform: scale(1); clip-path: circle(155% at 50% 55%); }
    82% { opacity: 1; transform: scale(1); clip-path: circle(155% at 50% 55%); }
    100% { opacity: 0; transform: scale(1); clip-path: circle(155% at 50% 55%); }
}
@keyframes gwCuteRibbon { 0% { opacity:0; transform:translateX(-24%) rotate(-2deg); } 20%,76% { opacity:1; } 100% { opacity:0; transform:translateX(18%) rotate(-2deg); } }
@keyframes gwCuteTwinkles { 0% { opacity:0; transform:scale(1.02); } 18%,78% { opacity:.72; } 100% { opacity:0; transform:scale(1); } }
@keyframes gwCuteCore { 0% { opacity:0; transform:translate(-50%,-50%) scale(.68); } 42% { opacity:.95; transform:translate(-50%,-50%) scale(1.02); } 100% { opacity:0; transform:translate(-50%,-50%) scale(1.28); } }
@keyframes gwCuteRing { 0% { opacity:0; transform:translate(-50%,-50%) scale(.72) rotate(-10deg); } 44% { opacity:.9; transform:translate(-50%,-50%) scale(1) rotate(0deg); } 100% { opacity:0; transform:translate(-50%,-50%) scale(1.18) rotate(9deg); } }
@keyframes gwCuteCloud { 0% { opacity:0; transform:translate3d(-50%,-50%,0) scale(calc(var(--scale) * .74)) translateY(16px); } 24%,72% { opacity:.82; } 100% { opacity:0; transform:translate3d(-50%,-50%,0) scale(var(--scale)) translateY(-18px); } }
@keyframes gwCuteCharm { 0% { opacity:0; transform:translate3d(-50%,-50%,0) scale(.35) rotate(0deg); } 26% { opacity:var(--opacity); } 100% { opacity:0; transform:translate3d(calc(-50% + var(--float-x)), calc(-50% + var(--float-y)), 0) scale(1.08) rotate(var(--spin)); } }
@keyframes gwCuteBanner { 0% { opacity:0; transform:translate(-50%,-50%) scale(.84) rotate(-1.4deg); } 32%,74% { opacity:1; transform:translate(-50%,-50%) scale(1) rotate(.35deg); } 100% { opacity:0; transform:translate(-50%,-50%) scale(1.03) rotate(0deg); } }
@keyframes gwCuteBannerSheen { 0% { transform:translateX(-120%); opacity:.2; } 100% { transform:translateX(120%); opacity:0; } }
@keyframes gwCuteSideStar { 0% { opacity:0; transform:translateY(-50%) scale(.4) rotate(-25deg); } 55% { opacity:1; transform:translateY(-50%) scale(1.14) rotate(8deg); } 100% { opacity:.88; transform:translateY(-50%) scale(1) rotate(0deg); } }
@keyframes gwCuteSubPop { 0% { opacity:0; transform:translateY(8px) scale(.9); } 100% { opacity:1; transform:translateY(0) scale(1); } }
@keyframes gwCuteElimShell { 0% { opacity:1; transform:translateY(0) scale(1); } 72% { opacity:1; transform:translateY(-8px) scale(1.025); } 100% { opacity:0; transform:translateY(-18px) scale(1.07); } }
@keyframes gwCuteElimCard { 0% { opacity:1; transform:scale(1) rotate(0deg); filter:saturate(1.08) brightness(1.04); } 32% { opacity:.94; transform:scale(1.035) rotate(-.8deg); filter:saturate(1.18) brightness(1.1); } 100% { opacity:0; transform:scale(.92) rotate(1.8deg); filter:saturate(1.28) brightness(1.18) blur(1px); } }
@keyframes gwCuteElimPuff { 0% { opacity:0; transform:translate(-50%,-50%) scale(.55); } 28% { opacity:.92; } 100% { opacity:0; transform:translate(-50%,-50%) scale(1.34); } }
@keyframes gwCuteElimSpark { 0% { opacity:0; transform:translate(-50%,-50%) scale(.35) rotate(0deg); } 25% { opacity:1; } 100% { opacity:0; transform:translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(1.16) rotate(var(--rot)); } }

.gw-cute-transform-curtain {
    clip-path: none !important;
    opacity: 0;
    transform: scale(1.01);
    animation: gwCuteCurtainHold 2.45s ease-out forwards !important;
}
.gw-cute-transform-wipe {
    position: fixed;
    z-index: 0;
    pointer-events: none;
    border-radius: 999px;
    filter: blur(.1px);
    box-shadow: 0 0 44px rgba(255,255,255,.64), inset 0 0 40px rgba(255,255,255,.52);
    opacity: .96;
}
.gw-cute-transform-wipe.is-left,
.gw-cute-transform-wipe.is-right {
    top: -10vh;
    width: 58vw;
    height: 120vh;
    background: radial-gradient(circle at 72% 50%, rgba(255,255,255,.98), rgba(255,211,238,.98) 42%, rgba(255,178,224,.92) 72%, rgba(255,240,250,.9));
}
.gw-cute-transform-wipe.is-left { left: -62vw; animation: gwCuteWipeLeft .72s cubic-bezier(.16,.82,.18,1) forwards; }
.gw-cute-transform-wipe.is-right { right: -62vw; background: radial-gradient(circle at 28% 50%, rgba(255,255,255,.98), rgba(225,246,255,.98) 42%, rgba(186,226,255,.92) 72%, rgba(255,240,250,.86)); animation: gwCuteWipeRight .72s cubic-bezier(.16,.82,.18,1) .04s forwards; }
.gw-cute-transform-wipe.is-top,
.gw-cute-transform-wipe.is-bottom {
    left: -10vw;
    width: 120vw;
    height: 44vh;
    background: linear-gradient(90deg, rgba(255,255,255,.98), rgba(255,224,243,.96), rgba(226,246,255,.96), rgba(255,255,255,.98));
}
.gw-cute-transform-wipe.is-top { top: -48vh; animation: gwCuteWipeTop .78s cubic-bezier(.16,.82,.18,1) .08s forwards; }
.gw-cute-transform-wipe.is-bottom { bottom: -48vh; animation: gwCuteWipeBottom .78s cubic-bezier(.16,.82,.18,1) .12s forwards; }
.gw-cute-transform-petal {
    position: fixed;
    z-index: 8;
    left: var(--x);
    top: var(--y);
    font-size: var(--size);
    color: var(--color);
    -webkit-text-fill-color: var(--color);
    line-height: 1;
    opacity: 0;
    text-shadow: 0 1px 0 #fff, 0 0 14px rgba(255,255,255,.95), 0 0 24px rgba(255,151,214,.38);
    transform: translate3d(-50%, -50%, 0) scale(.2) rotate(var(--r0));
    animation: gwCutePetalPop var(--duration) cubic-bezier(.16,.82,.18,1) var(--delay) forwards;
}
.gw-cute-transform-core { animation-duration: 1.12s !important; animation-delay: .48s !important; }
.gw-cute-transform-ring { animation-duration: 1.16s !important; animation-delay: .5s !important; }
.gw-cute-transform-cloud { animation-duration: 1.28s !important; }
.gw-cute-transform-charm { animation-duration: var(--duration) !important; }
.gw-cute-transform-banner { animation-duration: 1.18s !important; animation-delay: .62s !important; }
.gw-cute-transform-pattern { animation-delay: .74s !important; }
.gw-cute-transform-sub { animation-delay: .88s !important; }
@keyframes gwCuteCurtainHold { 0% { opacity:0; } 22%,82% { opacity:1; } 100% { opacity:0; } }
@keyframes gwCuteWipeLeft { 0% { transform:translateX(0) scaleY(.92); } 100% { transform:translateX(58vw) scaleY(1); } }
@keyframes gwCuteWipeRight { 0% { transform:translateX(0) scaleY(.92); } 100% { transform:translateX(-58vw) scaleY(1); } }
@keyframes gwCuteWipeTop { 0% { transform:translateY(0) scaleX(.94); } 100% { transform:translateY(43vh) scaleX(1); } }
@keyframes gwCuteWipeBottom { 0% { transform:translateY(0) scaleX(.94); } 100% { transform:translateY(-43vh) scaleX(1); } }
@keyframes gwCutePetalPop { 0% { opacity:0; transform:translate3d(-50%,-50%,0) scale(.2) rotate(var(--r0)); } 18% { opacity:.96; } 100% { opacity:0; transform:translate3d(calc(-50% + var(--dx)), calc(-50% + var(--dy)), 0) scale(1.12) rotate(var(--r1)); } }
.gw-cute-grid-exit-clone .restore-overlay,
.gw-cute-grid-exit-clone button,
.gw-cute-grid-exit-clone a { pointer-events: none !important; }
.gw-cute-pressing {
    animation: gwCutePressPop 430ms cubic-bezier(.16,.82,.18,1) both !important;
}
.gw-cute-press-spark {
    position: fixed;
    z-index: 2147483450;
    left: var(--x);
    top: var(--y);
    pointer-events: none;
    font-size: var(--size);
    line-height: 1;
    color: var(--color);
    -webkit-text-fill-color: var(--color);
    text-shadow: 0 1px 0 #fff, 0 0 12px rgba(255,255,255,.92), 0 0 20px rgba(255, 143, 207, .35);
    animation: gwCutePressSpark 720ms cubic-bezier(.18,.82,.2,1) forwards;
}
@keyframes gwCutePressPop { 0% { transform: translateY(0) scale(1); } 34% { transform: translateY(1px) scale(.94); filter: brightness(1.09) saturate(1.18); } 62% { transform: translateY(-2px) scale(1.04); filter: brightness(1.08) saturate(1.2); } 100% { transform: translateY(0) scale(1); filter: none; } }
@keyframes gwCutePressSpark { 0% { opacity:0; transform:translate(-50%,-50%) scale(.25) rotate(0deg); } 18% { opacity:1; } 62% { opacity:.95; transform:translate(calc(-50% + var(--dx) * .55), calc(-50% + var(--dy) * .55)) scale(1.18) rotate(calc(var(--rot) * .55)); } 100% { opacity:0; transform:translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(.72) rotate(var(--rot)); } }

@media (prefers-reduced-motion: reduce) {
    .gw-cute-transform-curtain,
    .gw-cute-transform-curtain::before,
    .gw-cute-transform-curtain::after,
    .gw-cute-transform-core,
    .gw-cute-transform-ring,
    .gw-cute-transform-cloud,
    .gw-cute-transform-charm,
    .gw-cute-transform-banner,
    .gw-cute-transform-pattern,
    .gw-cute-transform-title::before,
    .gw-cute-transform-title::after,
    .gw-cute-transform-sub,
    .gw-cute-elim-shell,
    .gw-cute-elim-card,
    .gw-cute-elim-puff,
    .gw-cute-elim-spark { animation-duration: .01ms !important; animation-delay: 0ms !important; }
}
        `;
        style.textContent += `
.gw-cute-transform-overlay.gw-cute-transform-v37 {
    opacity: 0;
    background: transparent;
    animation: gwCuteV37Overlay 1.46s ease-in-out forwards !important;
}
.gw-cute-transform-v37 .gw-cute-transform-curtain {
    clip-path: none !important;
    inset: -3vmax;
    opacity: 0;
    transform: scale(1.08);
    background:
        radial-gradient(circle at 50% 46%, rgba(255,255,255,1) 0 10rem, rgba(255,229,246,.995) 22rem, rgba(224,247,255,.995) 52rem),
        radial-gradient(circle at 20% 18%, rgba(255,167,218,.9), transparent 26rem),
        radial-gradient(circle at 82% 22%, rgba(176,224,255,.84), transparent 26rem),
        linear-gradient(135deg, #fffaff 0%, #ffeaf7 46%, #e8f8ff 100%);
    animation: gwCuteV37Curtain 1.42s cubic-bezier(.18,.82,.2,1) forwards !important;
    will-change: opacity, transform;
}
.gw-cute-transform-v37 .gw-cute-transform-curtain::before {
    opacity: 0;
    background:
        linear-gradient(115deg, transparent 0 32%, rgba(255,255,255,.72) 42%, rgba(255,179,222,.34) 49%, rgba(180,226,255,.34) 55%, transparent 68% 100%),
        radial-gradient(circle at 36% 42%, rgba(255,164,215,.34), transparent 17rem),
        radial-gradient(circle at 68% 42%, rgba(154,215,255,.28), transparent 17rem);
    animation: gwCuteV37Sheen 1.04s cubic-bezier(.2,.72,.2,1) .13s both !important;
}
.gw-cute-transform-v37 .gw-cute-transform-curtain::after {
    opacity: 0;
    animation: gwCuteV37Twinkles 1.2s ease-out .12s forwards !important;
}
.gw-cute-transform-v37 .gw-cute-transform-core {
    opacity: 0;
    width: min(44vw, 390px);
    animation: gwCuteV37Core .9s cubic-bezier(.18,.82,.2,1) .18s forwards !important;
}
.gw-cute-transform-v37 .gw-cute-transform-ring {
    opacity: 0;
    width: min(58vw, 570px);
    animation: gwCuteV37Ring .92s cubic-bezier(.18,.82,.2,1) .2s forwards !important;
}
.gw-cute-transform-v37 .gw-cute-transform-cloud {
    animation: gwCuteV37Cloud .94s cubic-bezier(.18,.82,.2,1) var(--delay) forwards !important;
}
.gw-cute-transform-v37 .gw-cute-transform-charm {
    animation: gwCuteV37Charm var(--duration) cubic-bezier(.18,.82,.2,1) var(--delay) both !important;
}
.gw-cute-transform-v37 .gw-cute-transform-banner {
    opacity: 0;
    width: min(72vw, 520px);
    padding: 28px 32px 24px;
    transform: translate(-50%, -50%) scale(.9) rotate(-.8deg);
    animation: gwCuteV37Banner 1.02s cubic-bezier(.18,.82,.2,1) .28s forwards !important;
}
.gw-cute-transform-v37 .gw-cute-transform-sub {
    animation: gwCuteV37Sub .72s cubic-bezier(.18,.82,.2,1) .42s forwards !important;
}
@keyframes gwCuteV37Overlay { 0% { opacity:0; } 9%, 86% { opacity:1; } 100% { opacity:0; } }
@keyframes gwCuteV37Curtain { 0% { opacity:0; transform:scale(1.08); } 18%, 82% { opacity:1; transform:scale(1); } 100% { opacity:0; transform:scale(1.01); } }
@keyframes gwCuteV37Sheen { 0% { opacity:0; transform:translateX(-16%) rotate(-2deg); } 26%,74% { opacity:1; } 100% { opacity:0; transform:translateX(15%) rotate(-2deg); } }
@keyframes gwCuteV37Twinkles { 0% { opacity:0; transform:scale(1.02); } 20%,78% { opacity:.74; } 100% { opacity:0; transform:scale(1); } }
@keyframes gwCuteV37Core { 0% { opacity:0; transform:translate(-50%,-50%) scale(.74); } 48% { opacity:.92; transform:translate(-50%,-50%) scale(1); } 100% { opacity:0; transform:translate(-50%,-50%) scale(1.22); } }
@keyframes gwCuteV37Ring { 0% { opacity:0; transform:translate(-50%,-50%) scale(.76) rotate(-8deg); } 50% { opacity:.9; transform:translate(-50%,-50%) scale(1) rotate(0deg); } 100% { opacity:0; transform:translate(-50%,-50%) scale(1.13) rotate(8deg); } }
@keyframes gwCuteV37Cloud { 0% { opacity:0; transform:translate3d(-50%,-50%,0) scale(calc(var(--scale) * .76)) translateY(14px); } 30%,72% { opacity:.84; } 100% { opacity:0; transform:translate3d(-50%,-50%,0) scale(var(--scale)) translateY(-12px); } }
@keyframes gwCuteV37Charm { 0% { opacity:0; transform:translate3d(-50%,-50%,0) scale(.28) rotate(0deg); } 20% { opacity:var(--opacity); } 100% { opacity:0; transform:translate3d(calc(-50% + var(--float-x)), calc(-50% + var(--float-y)), 0) scale(1.14) rotate(var(--spin)); } }
@keyframes gwCuteV37Banner { 0% { opacity:0; transform:translate(-50%,-50%) scale(.9) rotate(-.8deg); } 32%,78% { opacity:1; transform:translate(-50%,-50%) scale(1) rotate(.2deg); } 100% { opacity:0; transform:translate(-50%,-50%) scale(.985) rotate(0deg); } }
@keyframes gwCuteV37Sub { 0% { opacity:0; transform:translateY(7px) scale(.92); } 100% { opacity:1; transform:translateY(0) scale(1); } }

.gw-cute-transform-overlay.gw-cute-transform-v37 {
    opacity: 0;
    background: transparent !important;
    animation: gwCuteV39Overlay 2.72s cubic-bezier(.24,.68,.24,1) forwards !important;
}
.gw-cute-transform-v37 .gw-cute-transform-curtain {
    clip-path: none !important;
    inset: -4vmax !important;
    opacity: 0;
    transform: scale(1.06);
    background:
        radial-gradient(circle at 50% 45%, rgba(255,255,255,1) 0 9rem, rgba(255,226,246,.995) 22rem, rgba(231,249,255,.995) 53rem),
        radial-gradient(circle at 18% 18%, rgba(255,166,218,.9), transparent 27rem),
        radial-gradient(circle at 82% 20%, rgba(179,226,255,.85), transparent 28rem),
        radial-gradient(circle at 52% 92%, rgba(255,205,234,.68), transparent 30rem),
        linear-gradient(135deg, #fffcff 0%, #ffeaf7 46%, #eaf9ff 100%) !important;
    animation: gwCuteV39Curtain 2.72s cubic-bezier(.2,.72,.2,1) forwards !important;
    will-change: opacity, transform;
}
.gw-cute-transform-v37 .gw-cute-transform-curtain::before {
    animation: gwCuteV39Sheen 2.22s cubic-bezier(.2,.72,.2,1) .18s both !important;
}
.gw-cute-transform-v37 .gw-cute-transform-curtain::after {
    animation: gwCuteV39Twinkles 2.42s ease-out .22s forwards !important;
}
.gw-cute-transform-v37 .gw-cute-transform-core {
    width: min(48vw, 430px) !important;
    animation: gwCuteV39Core 1.85s cubic-bezier(.18,.82,.2,1) .38s forwards !important;
}
.gw-cute-transform-v37 .gw-cute-transform-ring {
    width: min(62vw, 610px) !important;
    animation: gwCuteV39Ring 1.9s cubic-bezier(.18,.82,.2,1) .42s forwards !important;
}
.gw-cute-transform-v37 .gw-cute-transform-cloud {
    animation: gwCuteV39Cloud 2.05s cubic-bezier(.18,.82,.2,1) var(--delay) forwards !important;
}
.gw-cute-transform-v37 .gw-cute-transform-charm {
    animation: gwCuteV39Charm var(--duration) cubic-bezier(.18,.82,.2,1) var(--delay) both !important;
}
.gw-cute-transform-v37 .gw-cute-transform-banner {
    opacity: 0;
    width: min(74vw, 560px) !important;
    padding: 30px 34px 27px !important;
    transform: translate(-50%, -50%) scale(.82) rotate(-1.1deg);
    animation: gwCuteV39Banner 1.95s cubic-bezier(.18,.82,.2,1) .52s forwards !important;
}
.gw-cute-transform-v37 .gw-cute-transform-sub {
    animation: gwCuteV39Sub .92s cubic-bezier(.18,.82,.2,1) .88s forwards !important;
}
@keyframes gwCuteV39Overlay { 0% { opacity:0; } 12%, 84% { opacity:1; } 100% { opacity:0; } }
@keyframes gwCuteV39Curtain { 0% { opacity:0; transform:scale(1.08); } 18%, 80% { opacity:1; transform:scale(1); } 100% { opacity:0; transform:scale(1.01); } }
@keyframes gwCuteV39Sheen { 0% { opacity:0; transform:translateX(-24%) rotate(-2deg); } 22%,76% { opacity:1; } 100% { opacity:0; transform:translateX(22%) rotate(1deg); } }
@keyframes gwCuteV39Twinkles { 0% { opacity:0; transform:scale(1.025); } 18%,82% { opacity:.78; } 100% { opacity:0; transform:scale(1); } }
@keyframes gwCuteV39Core { 0% { opacity:0; transform:translate(-50%,-50%) scale(.65); } 42% { opacity:.94; transform:translate(-50%,-50%) scale(1.02); } 78% { opacity:.82; } 100% { opacity:0; transform:translate(-50%,-50%) scale(1.26); } }
@keyframes gwCuteV39Ring { 0% { opacity:0; transform:translate(-50%,-50%) scale(.7) rotate(-12deg); } 43% { opacity:.9; transform:translate(-50%,-50%) scale(1) rotate(0deg); } 78% { opacity:.72; } 100% { opacity:0; transform:translate(-50%,-50%) scale(1.16) rotate(9deg); } }
@keyframes gwCuteV39Cloud { 0% { opacity:0; transform:translate3d(-50%,-50%,0) scale(calc(var(--scale) * .74)) translateY(16px); } 28%,78% { opacity:.82; } 100% { opacity:0; transform:translate3d(calc(-50% + 24px), calc(-50% - 18px),0) scale(var(--scale)); } }
@keyframes gwCuteV39Charm { 0% { opacity:0; transform:translate3d(-50%,-50%,0) scale(.32) rotate(0deg); } 22%,72% { opacity:var(--opacity); } 100% { opacity:0; transform:translate3d(calc(-50% + var(--float-x)), calc(-50% + var(--float-y)), 0) scale(1.12) rotate(var(--spin)); } }
@keyframes gwCuteV39Banner { 0% { opacity:0; transform:translate(-50%,-50%) scale(.82) rotate(-1.1deg); } 22% { opacity:1; transform:translate(-50%,-50%) scale(1.045) rotate(.5deg); } 34%,76% { opacity:1; transform:translate(-50%,-50%) scale(1) rotate(0deg); } 100% { opacity:0; transform:translate(-50%,-50%) scale(1.02) rotate(.4deg); } }
@keyframes gwCuteV39Sub { 0% { opacity:0; transform:translateY(8px) scale(.92); } 100% { opacity:1; transform:translateY(0) scale(1); } }
`;

        style.textContent += `
.gw-cute-elim-shell.is-trapper .gw-cute-elim-card {
    animation: gwCuteTrapperCard 900ms cubic-bezier(.18,.82,.2,1) forwards !important;
}
.gw-cute-trap-jaw {
    position: absolute;
    z-index: 30;
    left: 50%;
    top: 50%;
    width: min(78%, 280px);
    height: 92px;
    transform: translate(-50%, -50%) scale(.82);
    opacity: 0;
    pointer-events: none;
    filter: drop-shadow(0 0 16px rgba(255,255,255,.86)) drop-shadow(0 0 18px rgba(255,129,198,.40));
    animation: gwCuteTrapperJawShell 920ms cubic-bezier(.18,.82,.2,1) forwards;
}
.gw-cute-trap-jaw::before,
.gw-cute-trap-jaw::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 34px;
    border: 4px solid rgba(255, 127, 196, .96);
    background: linear-gradient(90deg, rgba(255,255,255,.96), rgba(255,205,235,.90), rgba(213,241,255,.88), rgba(255,255,255,.96));
    box-shadow: inset 0 2px 0 rgba(255,255,255,.92), 0 0 0 2px rgba(255,255,255,.78);
}
.gw-cute-trap-jaw::before {
    top: 6px;
    border-bottom-width: 7px;
    border-radius: 999px 999px 18px 18px;
    transform-origin: 50% 100%;
    transform: rotate(-18deg) translateY(-28px);
    animation: gwCuteTrapperJawTop 920ms cubic-bezier(.16,.82,.18,1) forwards;
}
.gw-cute-trap-jaw::after {
    bottom: 6px;
    border-top-width: 7px;
    border-radius: 18px 18px 999px 999px;
    transform-origin: 50% 0%;
    transform: rotate(18deg) translateY(28px);
    animation: gwCuteTrapperJawBottom 920ms cubic-bezier(.16,.82,.18,1) forwards;
}
.gw-cute-trap-jaw span {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 3;
    transform: translate(-50%, -50%);
    color: #ff74bd;
    -webkit-text-fill-color: #ff74bd;
    font-size: clamp(1.5rem, 8vw, 3.4rem);
    letter-spacing: .12em;
    text-shadow: 0 1px 0 #fff, 0 0 16px rgba(255,255,255,.95), 0 0 22px rgba(124,203,255,.42);
    animation: gwCuteTrapperHeartPop 820ms cubic-bezier(.16,.82,.18,1) 60ms forwards;
}
@keyframes gwCuteTrapperCard {
    0% { opacity: 1; transform: scale(1) rotate(0deg); filter: saturate(1.06) brightness(1.04); }
    22% { opacity: .98; transform: scale(1.025) rotate(-.35deg); filter: saturate(1.12) brightness(1.08); }
    52% { opacity: .88; transform: scale(.985) rotate(.5deg); filter: saturate(1.18) brightness(1.12); }
    100% { opacity: 0; transform: scale(.88) rotate(1.8deg); filter: saturate(1.25) brightness(1.2) blur(1.2px); }
}
@keyframes gwCuteTrapperJawShell {
    0% { opacity: 0; transform: translate(-50%, -50%) scale(.74); }
    12% { opacity: 1; }
    72% { opacity: 1; transform: translate(-50%, -50%) scale(1.03); }
    100% { opacity: 0; transform: translate(-50%, -50%) scale(1.14); }
}
@keyframes gwCuteTrapperJawTop {
    0% { transform: rotate(-22deg) translateY(-34px); }
    34%, 72% { transform: rotate(0deg) translateY(0); }
    100% { transform: rotate(6deg) translateY(-3px); }
}
@keyframes gwCuteTrapperJawBottom {
    0% { transform: rotate(22deg) translateY(34px); }
    34%, 72% { transform: rotate(0deg) translateY(0); }
    100% { transform: rotate(-6deg) translateY(3px); }
}
@keyframes gwCuteTrapperHeartPop {
    0% { opacity: 0; transform: translate(-50%, -50%) scale(.45) rotate(-8deg); }
    22%, 72% { opacity: 1; transform: translate(-50%, -50%) scale(1) rotate(0deg); }
    100% { opacity: 0; transform: translate(-50%, -50%) scale(1.2) rotate(8deg); }
}
`;
        document.head.appendChild(style);
    };

    const playTransform = options => {
        if (window.GuessWhoShouldSkipCutePhoneEffects?.()) {
            if (typeof options?.onCovered === "function") options.onCovered();
            return null;
        }
        ensureRuntimeStyles();
        document.querySelectorAll(".gw-cute-transform-overlay, .cute-transform-overlay").forEach(element => element.remove());

        const overlay = document.createElement("div");
        overlay.className = "gw-cute-transform-overlay gw-cute-transform-v37";
        overlay.setAttribute("aria-hidden", "true");

        const curtain = document.createElement("div");
        curtain.className = "gw-cute-transform-curtain";
        overlay.appendChild(curtain);

        const scene = document.createElement("div");
        scene.className = "gw-cute-transform-scene";
        overlay.appendChild(scene);

        const core = document.createElement("div");
        core.className = "gw-cute-transform-core";
        scene.appendChild(core);

        const ring = document.createElement("div");
        ring.className = "gw-cute-transform-ring";
        scene.appendChild(ring);

        [
            ["10vw", "18vh", "1.02", ".18s"],
            ["75vw", "16vh", ".9", ".22s"],
            ["16vw", "74vh", ".82", ".26s"],
            ["78vw", "76vh", "1.05", ".3s"]
        ].forEach(([x, y, scale, delay]) => {
            const cloud = document.createElement("span");
            cloud.className = "gw-cute-transform-cloud";
            cloud.style.setProperty("--x", x);
            cloud.style.setProperty("--y", y);
            cloud.style.setProperty("--scale", scale);
            cloud.style.setProperty("--delay", delay);
            scene.appendChild(cloud);
        });

        const symbols = ["♡", "✧", "✦", "◇", "₊"];
        for (let index = 0; index < 34; index += 1) {
            const charm = document.createElement("span");
            charm.className = `gw-cute-transform-charm ${index % 5 === 0 ? "is-white" : index % 4 === 0 ? "is-blue" : ""}`.trim();
            charm.textContent = symbols[index % symbols.length];
            charm.style.setProperty("--x", `${5 + Math.random() * 90}vw`);
            charm.style.setProperty("--y", `${8 + Math.random() * 84}vh`);
            charm.style.setProperty("--size", `${0.72 + Math.random() * 1.25}rem`);
            charm.style.setProperty("--opacity", `${0.42 + Math.random() * 0.42}`);
            charm.style.setProperty("--delay", `${0.16 + Math.random() * 0.36}s`);
            charm.style.setProperty("--duration", `${0.7 + Math.random() * 0.36}s`);
            charm.style.setProperty("--float-x", `${-12 + Math.random() * 24}vw`);
            charm.style.setProperty("--float-y", `${-10 + Math.random() * 20}vh`);
            charm.style.setProperty("--spin", `${-100 + Math.random() * 200}deg`);
            scene.appendChild(charm);
        }

        const banner = document.createElement("div");
        banner.className = "gw-cute-transform-banner";
        banner.innerHTML = `
            <div class="gw-cute-transform-pattern"></div>
            <div class="gw-cute-transform-title">Cute Mode</div>
            <div class="gw-cute-transform-sub">♡ ✧ ♡</div>
        `;
        scene.appendChild(banner);

        document.body.appendChild(overlay);
        window.setTimeout(() => {
            if (typeof options?.onCovered === "function") options.onCovered();
        }, 760);
        window.setTimeout(() => overlay.remove(), 2850);
        return overlay;
    };

    const playEliminationBurst = (items, options = {}) => {
        if (window.GuessWhoShouldSkipCutePhoneEffects?.()) return false;
        ensureRuntimeStyles();
        const list = Array.isArray(items) ? items : [];
        const visible = list
            .map(item => {
                const id = typeof item === "string" ? item : item?.id;
                if ((id === undefined || id === null || id === "") || typeof CSS === "undefined" || !CSS.escape) return null;
                const card = document.querySelector(`.card[data-id="${CSS.escape(String(id))}"]`);
                if (!card) return null;
                return {
                    id,
                    card,
                    name: typeof item === "string" ? "" : (item?.name || ""),
                    role: typeof item === "string" ? "" : (item?.role || ""),
                    gender: typeof item === "string" ? "" : (item?.gender || "")
                };
            })
            .filter(Boolean)
            .slice(0, options.reason === "manual" ? 1 : 30);

        if (!visible.length) return false;

        visible.forEach(({ card, name }, index) => {
            const rect = card.getBoundingClientRect();
            if (!rect.width || !rect.height) return;
            const shell = document.createElement("div");
            shell.className = "gw-cute-elim-shell";
            shell.style.left = `${rect.left}px`;
            shell.style.top = `${rect.top}px`;
            shell.style.width = `${rect.width}px`;
            shell.style.height = `${rect.height}px`;
            shell.style.animationDelay = `${Math.min(index, 12) * 28}ms`;

            const clone = card.cloneNode(true);
            clone.classList.remove("eliminated", "solved", "manual-eliminating", "manual-effect-focus");
            clone.classList.add("gw-cute-elim-card");
            clone.querySelectorAll("button, a").forEach(control => {
                control.tabIndex = -1;
                control.setAttribute("aria-hidden", "true");
            });
            shell.appendChild(clone);

            const puff = document.createElement("span");
            puff.className = "gw-cute-elim-puff";
            shell.appendChild(puff);

            const symbols = ["♡", "✧", "✦", "₊", "◇"];
            for (let sparkIndex = 0; sparkIndex < 10; sparkIndex += 1) {
                const spark = document.createElement("span");
                spark.className = "gw-cute-elim-spark";
                spark.textContent = symbols[sparkIndex % symbols.length];
                const angle = (Math.PI * 2 * sparkIndex / 10) + Math.random() * .45;
                const dist = 32 + Math.random() * 58;
                spark.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
                spark.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);
                spark.style.setProperty("--rot", `${-95 + Math.random() * 190}deg`);
                spark.style.setProperty("--delay", `${70 + sparkIndex * 22 + Math.min(index, 12) * 20}ms`);
                spark.style.setProperty("--size", `${0.82 + Math.random() * .52}rem`);
                spark.style.setProperty("--color", sparkIndex % 3 === 0 ? "#8ed1ff" : sparkIndex % 4 === 0 ? "#ffffff" : "#ff8dcc");
                shell.appendChild(spark);
            }

            document.body.appendChild(shell);
            window.setTimeout(() => shell.remove(), 1120 + Math.min(index, 12) * 28);
        });
        return true;
    };


    const addCuteElimDecor = (shell, index = 0, count = 12) => {
        const puff = document.createElement("span");
        puff.className = "gw-cute-elim-puff";
        shell.appendChild(puff);
        const symbols = ["♡", "✧", "✦", "₊", "◇"];
        for (let sparkIndex = 0; sparkIndex < count; sparkIndex += 1) {
            const spark = document.createElement("span");
            spark.className = "gw-cute-elim-spark";
            spark.textContent = symbols[sparkIndex % symbols.length];
            const angle = (Math.PI * 2 * sparkIndex / count) + Math.random() * .5;
            const dist = 34 + Math.random() * 70;
            spark.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
            spark.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);
            spark.style.setProperty("--rot", `${-110 + Math.random() * 220}deg`);
            spark.style.setProperty("--delay", `${45 + sparkIndex * 18 + Math.min(index, 12) * 18}ms`);
            spark.style.setProperty("--size", `${0.76 + Math.random() * .62}rem`);
            spark.style.setProperty("--color", sparkIndex % 3 === 0 ? "#8ed1ff" : sparkIndex % 4 === 0 ? "#ffffff" : "#ff8dcc");
            shell.appendChild(spark);
        }
    };

    const playGridExitCloneFromSnapshot = (snapshot, options = {}) => {
        ensureRuntimeStyles();
        if (!snapshot?.rect || !snapshot?.html) return false;
        const rect = snapshot.rect;
        if (!rect.width || !rect.height) return false;
        const shell = document.createElement("div");
        shell.className = "gw-cute-elim-shell gw-cute-grid-exit-clone";
        shell.style.left = `${rect.left}px`;
        shell.style.top = `${rect.top}px`;
        shell.style.width = `${rect.width}px`;
        shell.style.height = `${rect.height}px`;
        shell.innerHTML = snapshot.html;
        const clone = shell.firstElementChild;
        if (clone) {
            clone.classList.remove("eliminated", "solved", "manual-eliminating", "manual-effect-focus");
            clone.classList.add("gw-cute-elim-card");
            clone.querySelectorAll("button, a").forEach(control => {
                control.tabIndex = -1;
                control.setAttribute("aria-hidden", "true");
            });
        }
        addCuteElimDecor(shell, 0, 14);
        document.body.appendChild(shell);
        window.setTimeout(() => shell.remove(), Math.max(1040, Number(options.duration || 0) + 560));
        return true;
    };

    const spawnCutePressSpark = (x, y) => {
        const symbols = ["♡", "✧", "✦", "₊", "◇", "♡"];
        for (let index = 0; index < 7; index += 1) {
            const spark = document.createElement("span");
            spark.className = "gw-cute-press-spark";
            spark.textContent = symbols[index % symbols.length];
            const angle = (Math.PI * 2 * index / 7) + Math.random() * .28;
            const dist = 14 + Math.random() * 22;
            spark.style.setProperty("--x", `${x}px`);
            spark.style.setProperty("--y", `${y}px`);
            spark.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
            spark.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);
            spark.style.setProperty("--rot", `${-80 + Math.random() * 160}deg`);
            spark.style.setProperty("--size", `${.58 + Math.random() * .34}rem`);
            spark.style.setProperty("--color", index % 3 === 0 ? "#8ed1ff" : index % 4 === 0 ? "#ffffff" : "#ff8dcc");
            document.body.appendChild(spark);
            window.setTimeout(() => spark.remove(), 700);
        }
    };

        const setupCutePressEffects = () => {
        if (window.__guessWhoCutePressEffectsReady) return;
        window.__guessWhoCutePressEffectsReady = true;
        const cuteTargetSelector = "button, .chip, .card-action, .restore-overlay, .lore, .perk-chip, .name-link, .from-link, .cute-heart-toggle, .card";
        document.addEventListener("pointerdown", event => {
            if (window.GuessWhoShouldSkipCutePhoneEffects?.()) return;
            if (!document.body.classList.contains("cute-mode") || document.body?.classList.contains("cute-dark-mode")) return;
            const target = event.target.closest(cuteTargetSelector);
            if (!target || target.disabled || target.getAttribute("aria-disabled") === "true") return;
            ensureRuntimeStyles();
            target.classList.remove("gw-cute-pressing");
            void target.offsetWidth;
            target.classList.add("gw-cute-pressing");
            window.setTimeout(() => target.classList.remove("gw-cute-pressing"), 460);
            spawnCutePressSpark(event.clientX, event.clientY);
        }, true);

    };

    setupCutePressEffects();

    window.GuessWhoCuteMode = {
        ...(window.GuessWhoCuteMode || {}),
        playTransform,
        playEliminationBurst,
        playGridExitCloneFromSnapshot
    };
})();


 
 
 
(() => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    if (reduceMotion) return;

    let lastCutePagePop = 0;

    const makePageClickPop = (event) => {
        if (window.GuessWhoShouldSkipCutePhoneEffects?.()) return;
        if (!document.body?.classList.contains("cute-mode") || document.body?.classList.contains("cute-dark-mode")) return;
        if (!event.isTrusted) return;
        if (event.button !== undefined && event.button !== 0) return;

        const now = performance.now();
        if (now - lastCutePagePop < 45) return;
        lastCutePagePop = now;

        const pop = document.createElement("span");
        pop.className = "cute-page-click-pop";
        pop.style.left = `${event.clientX}px`;
        pop.style.top = `${event.clientY}px`;

        const symbols = ["♡", "✦", "✧", "₊", "˚"];
        pop.textContent = symbols[Math.floor(Math.random() * symbols.length)];

        document.body.appendChild(pop);
        pop.addEventListener("animationend", () => pop.remove(), { once: true });
        setTimeout(() => pop.remove(), 900);
    };

    document.addEventListener("pointerdown", makePageClickPop, { capture: true, passive: true });
})();


 
(() => {
    const style = document.createElement("style");
    style.textContent = `
        body.cute-mode .gw-cute-elim-shell.is-trapper .gw-cute-elim-card {
            animation: gwCuteElimCard 720ms cubic-bezier(.18,.82,.2,1) forwards !important;
        }
        body.cute-mode .gw-cute-elim-shell.is-trapper .gw-cute-trap-jaw {
            display: none !important;
        }
    `;
    document.head.appendChild(style);
})();
