const glow = document.getElementById('cursorGlow');

glow.style.transform = `translate(${window.innerWidth / 2}px, ${window.innerHeight / 2}px)`;

window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const glowSize = glow.offsetWidth;
    glow.style.transform = `translate(${clientX - glowSize / 2}px, ${clientY - glowSize / 2}px)`;
});
