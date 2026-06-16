window.GuessWhoShouldSkipCutePhoneEffects = window.GuessWhoShouldSkipCutePhoneEffects || function () {
    return window.matchMedia?.("(max-width: 760px), (pointer: coarse), (prefers-reduced-motion: reduce)")?.matches || false;
};

(() => {
    const runtimeStyleId = "cuteDarkModeRuntimeStyles";

    const ensureRuntimeStyles = () => {
        if (document.getElementById(runtimeStyleId)) return;
        const style = document.createElement("style");
        style.id = runtimeStyleId;
        style.textContent = `
.gw-cute-dark-transform-overlay,
.gw-cute-dark-transform-overlay * { box-sizing: border-box; }
.gw-cute-dark-transform-overlay {
    position: fixed;
    inset: 0;
    z-index: 2147483647;
    overflow: hidden;
    pointer-events: none;
    isolation: isolate;
    contain: layout paint style;
    opacity: 0;
    background: transparent;
    animation: gwCuteDarkOverlay 2.74s cubic-bezier(.24,.68,.24,1) forwards;
}
.gw-cute-dark-transform-curtain {
    position: absolute;
    inset: -4vmax;
    z-index: 0;
    opacity: 0;
    transform: scale(1.08);
    background:
        radial-gradient(circle at 50% 46%, rgba(255,155,214,.32) 0 8rem, rgba(25,11,32,.98) 22rem, rgba(5,4,10,.995) 54rem),
        radial-gradient(circle at 18% 20%, rgba(255,117,198,.28), transparent 28rem),
        radial-gradient(circle at 82% 21%, rgba(111,211,255,.22), transparent 30rem),
        radial-gradient(circle at 52% 92%, rgba(187,142,255,.18), transparent 31rem),
        linear-gradient(135deg, #05040a 0%, #120817 46%, #061923 100%);
    box-shadow: inset 0 0 150px rgba(0,0,0,.92), inset 0 0 46px rgba(255,155,214,.16);
    animation: gwCuteDarkCurtain 2.74s cubic-bezier(.2,.72,.2,1) forwards;
    will-change: opacity, transform;
}
.gw-cute-dark-transform-curtain::before,
.gw-cute-dark-transform-curtain::after {
    content: "";
    position: absolute;
    inset: -18%;
    pointer-events: none;
}
.gw-cute-dark-transform-curtain::before {
    z-index: 1;
    opacity: 0;
    background:
        linear-gradient(115deg, transparent 0 32%, rgba(255,155,214,.12) 42%, rgba(169,223,255,.12) 55%, transparent 68% 100%),
        radial-gradient(circle at 32% 42%, rgba(255,117,198,.14), transparent 17rem),
        radial-gradient(circle at 68% 42%, rgba(111,211,255,.12), transparent 17rem);
    transform: translateX(-24%) rotate(-2deg);
    animation: gwCuteDarkSheen 2.22s cubic-bezier(.2,.72,.2,1) .18s both;
}
.gw-cute-dark-transform-curtain::after {
    z-index: 2;
    opacity: 0;
    background-image:
        radial-gradient(circle, rgba(255,155,214,.34) 0 1.35px, transparent 2.25px),
        radial-gradient(circle, rgba(111,211,255,.28) 0 1.15px, transparent 2px),
        radial-gradient(circle, rgba(187,142,255,.22) 0 1.1px, transparent 2px),
        radial-gradient(circle, rgba(255,155,214,.16) 0 4px, transparent 5px);
    background-size: 30px 30px, 48px 48px, 58px 58px, 124px 124px;
    background-position: 0 0, 12px 16px, 22px 4px, 34px 42px;
    animation: gwCuteDarkTwinkles 2.42s ease-out .22s forwards;
}
.gw-cute-dark-transform-scene {
    position: absolute;
    inset: 0;
    z-index: 1;
    overflow: hidden;
}
.gw-cute-dark-transform-core {
    position: fixed;
    z-index: 2;
    left: 50%;
    top: 50%;
    width: min(48vw, 430px);
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,155,214,.30) 0 21%, rgba(169,223,255,.15) 42%, rgba(5,4,10,.08) 70%, transparent 78%);
    opacity: 0;
    transform: translate(-50%, -50%) scale(.65);
    animation: gwCuteDarkCore 1.85s cubic-bezier(.18,.82,.2,1) .38s forwards;
}
.gw-cute-dark-transform-ring {
    position: fixed;
    z-index: 3;
    left: 50%;
    top: 50%;
    width: min(62vw, 610px);
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    border: 3px solid rgba(255,155,214,.42);
    box-shadow: 0 0 0 9px rgba(169,223,255,.08), 0 0 0 18px rgba(187,142,255,.06), 0 0 45px rgba(255,117,198,.18);
    opacity: 0;
    transform: translate(-50%, -50%) scale(.7) rotate(-12deg);
    animation: gwCuteDarkRing 1.9s cubic-bezier(.18,.82,.2,1) .42s forwards;
}
.gw-cute-dark-transform-cloud {
    position: fixed;
    z-index: 4;
    left: var(--x);
    top: var(--y);
    width: 120px;
    height: 46px;
    border-radius: 999px;
    background: rgba(18,10,25,.88);
    box-shadow: 28px -10px 0 rgba(16,22,35,.78), 58px 0 0 rgba(18,9,27,.72), 0 12px 24px rgba(255,117,198,.12), 0 0 20px rgba(111,211,255,.08);
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(calc(var(--scale) * .74)) translateY(16px);
    animation: gwCuteDarkCloud 2.05s cubic-bezier(.18,.82,.2,1) var(--delay) forwards;
}
.gw-cute-dark-transform-cloud::before,
.gw-cute-dark-transform-cloud::after {
    content: "";
    position: absolute;
    border-radius: 999px;
    background: rgba(21,12,31,.78);
}
.gw-cute-dark-transform-cloud::before { width: 58px; height: 58px; left: 22px; top: -24px; }
.gw-cute-dark-transform-cloud::after { width: 42px; height: 42px; right: 24px; top: -14px; }
.gw-cute-dark-transform-charm {
    position: fixed;
    z-index: 6;
    left: var(--x);
    top: var(--y);
    font-size: var(--size);
    line-height: 1;
    opacity: 0;
    color: var(--color);
    -webkit-text-fill-color: var(--color);
    text-shadow: 0 0 11px rgba(255,155,214,.42), 0 0 18px rgba(111,211,255,.14);
    transform: translate3d(-50%, -50%, 0) scale(.32) rotate(0deg);
    animation: gwCuteDarkCharm var(--duration) cubic-bezier(.18,.82,.2,1) var(--delay) both;
}
.gw-cute-dark-transform-banner {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 20;
    width: min(74vw, 560px);
    padding: 30px 34px 27px;
    border-radius: 38px;
    background:
        radial-gradient(circle at 16% 16%, rgba(255,155,214,.16) 0 .55rem, transparent .59rem),
        radial-gradient(circle at 84% 24%, rgba(169,223,255,.14) 0 .7rem, transparent .74rem),
        repeating-linear-gradient(135deg, rgba(255,155,214,.07) 0 9px, rgba(111,211,255,.06) 9px 18px, rgba(187,142,255,.06) 18px 27px),
        linear-gradient(180deg, #170b1d 0%, #0b0913 56%, #071722 100%);
    border: 2px solid rgba(255,155,214,.58);
    box-shadow: 0 30px 80px rgba(0,0,0,.45), 0 22px 58px rgba(111,211,255,.08), inset 0 1px 0 rgba(255,255,255,.08), inset 0 -18px 40px rgba(0,0,0,.28);
    overflow: hidden;
    isolation: isolate;
    opacity: 0;
    transform: translate(-50%, -50%) scale(.82) rotate(-1.1deg);
    animation: gwCuteDarkBanner 1.95s cubic-bezier(.18,.82,.2,1) .52s forwards;
}
.gw-cute-dark-transform-banner::before,
.gw-cute-dark-transform-banner::after {
    content: "";
    position: absolute;
    z-index: 1;
    pointer-events: none;
    border-radius: 999px;
}
.gw-cute-dark-transform-banner::before { width: 108px; height: 108px; left: -34px; top: -36px; background: radial-gradient(circle, rgba(255,117,198,.16), transparent 67%); }
.gw-cute-dark-transform-banner::after { width: 132px; height: 132px; right: -44px; bottom: -52px; background: radial-gradient(circle, rgba(111,211,255,.14), transparent 70%); }
.gw-cute-dark-transform-pattern {
    position: absolute;
    inset: 0;
    z-index: 0;
    background: linear-gradient(90deg, transparent, rgba(169,223,255,.15), transparent);
    transform: translateX(-120%);
    animation: gwCuteDarkBannerSheen 1.45s cubic-bezier(.2,.8,.2,1) .74s forwards;
}
.gw-cute-dark-transform-title {
    position: relative;
    z-index: 2;
    display: block;
    text-align: center;
    font-family: "Baloo 2", "Fredoka", "Mochiy Pop One", "Segoe UI Rounded", system-ui, sans-serif !important;
    font-weight: 800;
    font-size: clamp(2.25rem, 7.5vw, 5.15rem);
    line-height: .86;
    letter-spacing: .01em;
    color: #ff9bd6;
    -webkit-text-fill-color: #ff9bd6;
    -webkit-text-stroke: 2px rgba(8,7,16,.72);
    paint-order: stroke fill;
    text-shadow: 0 4px 0 rgba(0,0,0,.78), 0 0 18px rgba(255,117,198,.42), 0 0 22px rgba(111,211,255,.18);
}
.gw-cute-dark-transform-title::before,
.gw-cute-dark-transform-title::after {
    content: "♥";
    position: absolute;
    top: 44%;
    transform: translateY(-50%);
    font-size: clamp(1.35rem, 4vw, 2.35rem);
    color: #a9dfff;
    -webkit-text-fill-color: #a9dfff;
    text-shadow: 0 0 14px rgba(111,211,255,.32);
    animation: gwCuteDarkSideHeart 1.25s ease-in-out 1.06s both;
}
.gw-cute-dark-transform-title::before { left: 1%; }
.gw-cute-dark-transform-title::after { right: 1%; color: #bb8eff; -webkit-text-fill-color: #bb8eff; }
.gw-cute-dark-transform-sub {
    position: relative;
    z-index: 2;
    margin-top: 12px;
    text-align: center;
    font-size: clamp(1.3rem, 3.5vw, 2.15rem);
    color: #a9dfff;
    -webkit-text-fill-color: #a9dfff;
    text-shadow: 0 0 14px rgba(111,211,255,.28);
    opacity: 0;
    transform: translateY(8px) scale(.92);
    animation: gwCuteDarkSub .92s cubic-bezier(.18,.82,.2,1) .88s forwards;
}
.gw-cute-dark-elim-shell,
.gw-cute-dark-grid-exit-clone {
    position: fixed;
    z-index: 2147483400;
    pointer-events: none;
    transform-origin: 50% 50%;
    contain: layout paint style;
    overflow: visible;
    animation: gwCuteDarkElimShell 1120ms cubic-bezier(.18,.82,.2,1) forwards;
}
.gw-cute-dark-elim-card {
    width: 100%;
    height: 100%;
    transform-origin: 50% 50%;
    pointer-events: none !important;
    animation: gwCuteDarkElimCard 1040ms cubic-bezier(.18,.82,.2,1) forwards !important;
    box-shadow: 0 20px 54px rgba(0,0,0,.45), 0 0 24px rgba(255,117,198,.12) !important;
}
.gw-cute-dark-elim-card .restore-overlay,
.gw-cute-dark-elim-card button,
.gw-cute-dark-elim-card a { pointer-events: none !important; }
.gw-cute-dark-elim-veil {
    position: absolute;
    inset: -6%;
    z-index: 22;
    pointer-events: none;
    border-radius: inherit;
    background:
        radial-gradient(circle at center, rgba(255,155,214,.16), rgba(111,211,255,.08) 38%, rgba(5,4,10,.72) 100%),
        linear-gradient(180deg, rgba(8,7,16,.08), rgba(8,7,16,.58));
    opacity: 0;
    animation: gwCuteDarkElimVeil 1040ms ease-out forwards;
}
.gw-cute-dark-elim-puff {
    position: absolute;
    z-index: 26;
    left: 50%;
    top: 50%;
    width: min(122%, 360px);
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    border: 2px solid rgba(255,155,214,.38);
    background: radial-gradient(circle, rgba(169,223,255,.10), rgba(255,117,198,.11) 42%, rgba(5,4,10,.06) 62%, transparent 72%);
    transform: translate(-50%, -50%) scale(.55);
    opacity: 0;
    filter: drop-shadow(0 0 18px rgba(255,117,198,.18));
    animation: gwCuteDarkElimPuff 980ms cubic-bezier(.18,.82,.2,1) 90ms forwards;
}
.gw-cute-dark-elim-moon {
    position: absolute;
    z-index: 31;
    left: 50%;
    top: 50%;
    width: 74px;
    height: 74px;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(.6) rotate(-10deg);
    opacity: 0;
    background: radial-gradient(circle at 38% 38%, rgba(169,223,255,.24), rgba(255,155,214,.10) 58%, transparent 60%);
    box-shadow: inset -16px 0 0 rgba(5,4,10,.82), 0 0 22px rgba(169,223,255,.16);
    animation: gwCuteDarkElimMoon 1020ms cubic-bezier(.18,.82,.2,1) 70ms forwards;
}
.gw-cute-dark-elim-spark {
    position: absolute;
    z-index: 34;
    left: 50%;
    top: 50%;
    font-size: var(--size);
    line-height: 1;
    color: var(--color);
    -webkit-text-fill-color: var(--color);
    text-shadow: 0 0 12px rgba(255,155,214,.34), 0 0 16px rgba(169,223,255,.12);
    transform: translate(-50%, -50%) scale(.35) rotate(0deg);
    opacity: 0;
    animation: gwCuteDarkElimSpark 840ms cubic-bezier(.18,.82,.2,1) var(--delay) forwards;
}
.gw-cute-dark-press-spark {
    position: fixed;
    z-index: 2147483450;
    left: var(--x);
    top: var(--y);
    pointer-events: none;
    font-size: var(--size);
    line-height: 1;
    color: var(--color);
    -webkit-text-fill-color: var(--color);
    text-shadow: 0 0 10px rgba(255,155,214,.38), 0 0 14px rgba(169,223,255,.14);
    animation: gwCuteDarkPressSpark 720ms cubic-bezier(.18,.82,.2,1) forwards;
}
@keyframes gwCuteDarkOverlay { 0% { opacity:0; } 12%, 84% { opacity:1; } 100% { opacity:0; } }
@keyframes gwCuteDarkCurtain { 0% { opacity:0; transform:scale(1.08); } 18%, 80% { opacity:1; transform:scale(1); } 100% { opacity:0; transform:scale(1.01); } }
@keyframes gwCuteDarkSheen { 0% { opacity:0; transform:translateX(-24%) rotate(-2deg); } 22%,76% { opacity:.95; } 100% { opacity:0; transform:translateX(22%) rotate(1deg); } }
@keyframes gwCuteDarkTwinkles { 0% { opacity:0; transform:scale(1.025); } 18%,82% { opacity:.78; } 100% { opacity:0; transform:scale(1); } }
@keyframes gwCuteDarkCore { 0% { opacity:0; transform:translate(-50%,-50%) scale(.65); } 42% { opacity:.92; transform:translate(-50%,-50%) scale(1.02); } 78% { opacity:.72; } 100% { opacity:0; transform:translate(-50%,-50%) scale(1.26); } }
@keyframes gwCuteDarkRing { 0% { opacity:0; transform:translate(-50%,-50%) scale(.7) rotate(-12deg); } 43% { opacity:.82; transform:translate(-50%,-50%) scale(1) rotate(0deg); } 78% { opacity:.62; } 100% { opacity:0; transform:translate(-50%,-50%) scale(1.16) rotate(9deg); } }
@keyframes gwCuteDarkCloud { 0% { opacity:0; transform:translate3d(-50%,-50%,0) scale(calc(var(--scale) * .74)) translateY(16px); } 28%,78% { opacity:.68; } 100% { opacity:0; transform:translate3d(calc(-50% + 24px), calc(-50% - 18px),0) scale(var(--scale)); } }
@keyframes gwCuteDarkCharm { 0% { opacity:0; transform:translate3d(-50%,-50%,0) scale(.32) rotate(0deg); } 22%,72% { opacity:var(--opacity); } 100% { opacity:0; transform:translate3d(calc(-50% + var(--float-x)), calc(-50% + var(--float-y)), 0) scale(1.12) rotate(var(--spin)); } }
@keyframes gwCuteDarkBanner { 0% { opacity:0; transform:translate(-50%,-50%) scale(.82) rotate(-1.1deg); } 22% { opacity:1; transform:translate(-50%,-50%) scale(1.045) rotate(.5deg); } 34%,76% { opacity:1; transform:translate(-50%,-50%) scale(1) rotate(0deg); } 100% { opacity:0; transform:translate(-50%,-50%) scale(1.02) rotate(.4deg); } }
@keyframes gwCuteDarkBannerSheen { 0% { transform:translateX(-120%); opacity:.18; } 100% { transform:translateX(120%); opacity:0; } }
@keyframes gwCuteDarkSideHeart { 0% { opacity:0; transform:translateY(-50%) scale(.4) rotate(-25deg); } 55% { opacity:1; transform:translateY(-50%) scale(1.14) rotate(8deg); } 100% { opacity:.88; transform:translateY(-50%) scale(1) rotate(0deg); } }
@keyframes gwCuteDarkSub { 0% { opacity:0; transform:translateY(8px) scale(.92); } 100% { opacity:1; transform:translateY(0) scale(1); } }
@keyframes gwCuteDarkElimShell { 0% { opacity:1; transform:translateY(0) scale(1); } 72% { opacity:1; transform:translateY(6px) scale(.99); } 100% { opacity:0; transform:translateY(16px) scale(.96); } }
@keyframes gwCuteDarkElimCard { 0% { opacity:1; transform:scale(1) rotate(0deg); filter:saturate(.96) brightness(.96); } 34% { opacity:.98; transform:scale(1.025) rotate(-.6deg); filter:saturate(1.08) brightness(.88); } 100% { opacity:0; transform:scale(.9) rotate(1.8deg); filter:saturate(.82) brightness(.26) blur(2px); } }
@keyframes gwCuteDarkElimVeil { 0% { opacity:0; } 28% { opacity:.88; } 100% { opacity:.22; } }
@keyframes gwCuteDarkElimPuff { 0% { opacity:0; transform:translate(-50%,-50%) scale(.55); } 30% { opacity:.82; } 100% { opacity:0; transform:translate(-50%,-50%) scale(1.28); } }
@keyframes gwCuteDarkElimMoon { 0% { opacity:0; transform:translate(-50%,-50%) scale(.55) rotate(-16deg); } 28%,68% { opacity:.88; transform:translate(-50%,-50%) scale(1) rotate(0deg); } 100% { opacity:0; transform:translate(-50%,-50%) scale(1.18) rotate(12deg); } }
@keyframes gwCuteDarkElimSpark { 0% { opacity:0; transform:translate(-50%,-50%) scale(.35) rotate(0deg); } 25% { opacity:.9; } 100% { opacity:0; transform:translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(1.05) rotate(var(--rot)); } }
@keyframes gwCuteDarkPressSpark { 0% { opacity:0; transform:translate(-50%,-50%) scale(.25) rotate(0deg); } 18% { opacity:.86; } 62% { opacity:.82; transform:translate(calc(-50% + var(--dx) * .55), calc(-50% + var(--dy) * .55)) scale(1.12) rotate(calc(var(--rot) * .55)); } 100% { opacity:0; transform:translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(.72) rotate(var(--rot)); } }
@media (prefers-reduced-motion: reduce) {
    .gw-cute-dark-transform-overlay,
    .gw-cute-dark-transform-overlay *,
    .gw-cute-dark-elim-shell,
    .gw-cute-dark-elim-shell * { animation-duration: .01ms !important; animation-delay: 0ms !important; }
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
        document.querySelectorAll(".gw-cute-transform-overlay, .cute-transform-overlay, .gw-cute-dark-transform-overlay").forEach(element => element.remove());

        const overlay = document.createElement("div");
        overlay.className = "gw-cute-dark-transform-overlay";
        overlay.setAttribute("aria-hidden", "true");

        const curtain = document.createElement("div");
        curtain.className = "gw-cute-dark-transform-curtain";
        overlay.appendChild(curtain);

        const scene = document.createElement("div");
        scene.className = "gw-cute-dark-transform-scene";
        overlay.appendChild(scene);

        const core = document.createElement("div");
        core.className = "gw-cute-dark-transform-core";
        scene.appendChild(core);

        const ring = document.createElement("div");
        ring.className = "gw-cute-dark-transform-ring";
        scene.appendChild(ring);

        [
            ["10vw", "18vh", "1.02", ".18s"],
            ["75vw", "16vh", ".9", ".22s"],
            ["16vw", "74vh", ".82", ".26s"],
            ["78vw", "76vh", "1.05", ".3s"]
        ].forEach(([x, y, scale, delay]) => {
            const cloud = document.createElement("span");
            cloud.className = "gw-cute-dark-transform-cloud";
            cloud.style.setProperty("--x", x);
            cloud.style.setProperty("--y", y);
            cloud.style.setProperty("--scale", scale);
            cloud.style.setProperty("--delay", delay);
            scene.appendChild(cloud);
        });

        const symbols = ["♥", "✧", "✦", "☾", "◇", "♡"];
        const colors = ["#ff9bd6", "#a9dfff", "#bb8eff"];
        for (let index = 0; index < 34; index += 1) {
            const charm = document.createElement("span");
            charm.className = "gw-cute-dark-transform-charm";
            charm.textContent = symbols[index % symbols.length];
            charm.style.setProperty("--x", `${5 + Math.random() * 90}vw`);
            charm.style.setProperty("--y", `${8 + Math.random() * 84}vh`);
            charm.style.setProperty("--size", `${0.72 + Math.random() * 1.25}rem`);
            charm.style.setProperty("--opacity", `${0.34 + Math.random() * 0.38}`);
            charm.style.setProperty("--delay", `${0.16 + Math.random() * 0.36}s`);
            charm.style.setProperty("--duration", `${0.7 + Math.random() * 0.42}s`);
            charm.style.setProperty("--float-x", `${-12 + Math.random() * 24}vw`);
            charm.style.setProperty("--float-y", `${-10 + Math.random() * 20}vh`);
            charm.style.setProperty("--spin", `${-100 + Math.random() * 200}deg`);
            charm.style.setProperty("--color", colors[index % colors.length]);
            scene.appendChild(charm);
        }

        const banner = document.createElement("div");
        banner.className = "gw-cute-dark-transform-banner";
        banner.innerHTML = `
            <div class="gw-cute-dark-transform-pattern"></div>
            <div class="gw-cute-dark-transform-title">Dark Cute Mode</div>
            <div class="gw-cute-dark-transform-sub">♥ ✧ ☾</div>
        `;
        scene.appendChild(banner);

        document.body.appendChild(overlay);
        window.setTimeout(() => {
            if (typeof options?.onCovered === "function") options.onCovered();
        }, 760);
        window.setTimeout(() => overlay.remove(), 2850);
        return overlay;
    };

    const decorateDarkElimShell = (shell, index = 0, count = 12) => {
        const veil = document.createElement("span");
        veil.className = "gw-cute-dark-elim-veil";
        shell.appendChild(veil);

        const puff = document.createElement("span");
        puff.className = "gw-cute-dark-elim-puff";
        shell.appendChild(puff);

        const moon = document.createElement("span");
        moon.className = "gw-cute-dark-elim-moon";
        shell.appendChild(moon);

        const symbols = ["♥", "✧", "☾", "✦", "◇", "♡"];
        const colors = ["#ff9bd6", "#a9dfff", "#bb8eff"];
        for (let sparkIndex = 0; sparkIndex < count; sparkIndex += 1) {
            const spark = document.createElement("span");
            spark.className = "gw-cute-dark-elim-spark";
            spark.textContent = symbols[sparkIndex % symbols.length];
            const angle = (Math.PI * 2 * sparkIndex / count) + Math.random() * .5;
            const dist = 30 + Math.random() * 62;
            spark.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
            spark.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);
            spark.style.setProperty("--rot", `${-105 + Math.random() * 210}deg`);
            spark.style.setProperty("--delay", `${50 + sparkIndex * 19 + Math.min(index, 12) * 18}ms`);
            spark.style.setProperty("--size", `${0.76 + Math.random() * .56}rem`);
            spark.style.setProperty("--color", colors[sparkIndex % colors.length]);
            shell.appendChild(spark);
        }
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
                return { id, card };
            })
            .filter(Boolean)
            .slice(0, options.reason === "manual" ? 1 : 30);

        if (!visible.length) return false;

        visible.forEach(({ card }, index) => {
            const rect = card.getBoundingClientRect();
            if (!rect.width || !rect.height) return;
            const shell = document.createElement("div");
            shell.className = "gw-cute-dark-elim-shell";
            shell.style.left = `${rect.left}px`;
            shell.style.top = `${rect.top}px`;
            shell.style.width = `${rect.width}px`;
            shell.style.height = `${rect.height}px`;
            shell.style.animationDelay = `${Math.min(index, 12) * 28}ms`;

            const clone = card.cloneNode(true);
            clone.classList.remove("eliminated", "solved", "manual-eliminating", "manual-effect-focus");
            clone.classList.add("gw-cute-dark-elim-card");
            clone.querySelectorAll("button, a").forEach(control => {
                control.tabIndex = -1;
                control.setAttribute("aria-hidden", "true");
            });
            shell.appendChild(clone);
            decorateDarkElimShell(shell, index, options.reason === "manual" ? 14 : 11);
            document.body.appendChild(shell);
            window.setTimeout(() => shell.remove(), 1240 + Math.min(index, 12) * 28);
        });
        return true;
    };

    const playGridExitCloneFromSnapshot = (snapshot, options = {}) => {
        ensureRuntimeStyles();
        if (!snapshot?.rect || !snapshot?.html) return false;
        const rect = snapshot.rect;
        if (!rect.width || !rect.height) return false;
        const shell = document.createElement("div");
        shell.className = "gw-cute-dark-elim-shell gw-cute-dark-grid-exit-clone";
        shell.style.left = `${rect.left}px`;
        shell.style.top = `${rect.top}px`;
        shell.style.width = `${rect.width}px`;
        shell.style.height = `${rect.height}px`;
        shell.innerHTML = snapshot.html;
        const clone = shell.firstElementChild;
        if (clone) {
            clone.classList.remove("eliminated", "solved", "manual-eliminating", "manual-effect-focus");
            clone.classList.add("gw-cute-dark-elim-card");
            clone.querySelectorAll("button, a").forEach(control => {
                control.tabIndex = -1;
                control.setAttribute("aria-hidden", "true");
            });
        }
        decorateDarkElimShell(shell, 0, 14);
        document.body.appendChild(shell);
        window.setTimeout(() => shell.remove(), Math.max(1140, Number(options.duration || 0) + 620));
        return true;
    };

    const spawnDarkPressSpark = (x, y) => {
        ensureRuntimeStyles();
        const symbols = ["♥", "✧", "☾", "✦", "♡"];
        const colors = ["#ff9bd6", "#a9dfff", "#bb8eff"];
        for (let index = 0; index < 6; index += 1) {
            const spark = document.createElement("span");
            spark.className = "gw-cute-dark-press-spark";
            spark.textContent = symbols[index % symbols.length];
            const angle = (Math.PI * 2 * index / 6) + Math.random() * .28;
            const dist = 13 + Math.random() * 20;
            spark.style.setProperty("--x", `${x}px`);
            spark.style.setProperty("--y", `${y}px`);
            spark.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
            spark.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);
            spark.style.setProperty("--rot", `${-80 + Math.random() * 160}deg`);
            spark.style.setProperty("--size", `${.56 + Math.random() * .32}rem`);
            spark.style.setProperty("--color", colors[index % colors.length]);
            document.body.appendChild(spark);
            window.setTimeout(() => spark.remove(), 720);
        }
    };

    const setupDarkPressEffects = () => {
        if (window.__guessWhoCuteDarkPressEffectsReady) return;
        window.__guessWhoCuteDarkPressEffectsReady = true;
        const selector = "button, .chip, .card-action, .restore-overlay, .lore, .perk-chip, .name-link, .from-link, .cute-heart-toggle, .card";
        document.addEventListener("pointerdown", event => {
            if (window.GuessWhoShouldSkipCutePhoneEffects?.()) return;
            if (!document.body.classList.contains("cute-dark-mode")) return;
            const target = event.target.closest(selector);
            if (!target || target.disabled || target.getAttribute("aria-disabled") === "true") return;
            spawnDarkPressSpark(event.clientX, event.clientY);
        }, true);
    };

    setupDarkPressEffects();

    window.GuessWhoCuteDarkMode = {
        ...(window.GuessWhoCuteDarkMode || {}),
        playTransform,
        playEliminationBurst,
        playGridExitCloneFromSnapshot
    };
})();
