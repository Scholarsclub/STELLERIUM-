/* ================= SCROLL PROGRESS ================= */
window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (scrollTop / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
});


/* ================= STARFIELD ================= */
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let stars = [];

for (let i = 0; i < 180; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2
    });
}

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";

    stars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();

        s.y += 0.25;
        if (s.y > canvas.height) {
            s.y = 0;
            s.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(animateStars);
}
animateStars();


/* ================= MOUSE GLOW ================= */
document.addEventListener("mousemove", (e) => {
    const glow = document.getElementById("glow");
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});


/* ================= TYPING EFFECT ================= */
const texts = [
    "IMMERSIVE PROJECTION",
    "DOME MAPPING",
    "360° SPATIAL VISUALS",
    "CINEMATIC INSTALLATIONS"
];

let i = 0;
let j = 0;
let current = "";

function type() {
    if (j < texts[i].length) {
        current += texts[i][j];
        document.getElementById("typing").innerHTML = current;
        j++;
        setTimeout(type, 60);
    } else {
        setTimeout(() => {
            current = "";
            j = 0;
            i = (i + 1) % texts.length;
            type();
        }, 1500);
    }
}
type();


/* ================= MAGNETIC BUTTON ================= */
const btn = document.querySelector(".btn");

btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
});

btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
});


/* ================= COUNTERS ================= */
function animateCount(id, target) {
    let count = 0;
    let increment = target / 100;

    let interval = setInterval(() => {
        count += increment;
        if (count >= target) {
            count = target;
            clearInterval(interval);
        }
        document.getElementById(id).innerText = Math.floor(count) + "+";
    }, 20);
}

animateCount("count1", 120);
animateCount("count2", 350);
animateCount("count3", 18);


/* ================= SCROLL REVEAL ================= */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(r => {
        let top = r.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            r.classList.add("active");
        }
    });
});
