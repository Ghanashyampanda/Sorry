// Basic alert functionality
function showForgivenessMessage() {
    alert('ମୋତେ କ୍ଷମା କରିବା ପାଇଁ ଧନ୍ୟବାଦ!🙏🥹🙏');
    createConfetti();
}

// Enhanced heart animation
function createHearts() {
    const heart = document.createElement('div');
    heart.innerHTML = '😔😓';
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 2 + 1 + 'rem';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Confetti animation
function createConfetti() {
    const colors = ['#ff9ff3', '#feca57', '#ff6b6b', '#48dbfb', '#1dd1a1'];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 1 + 2 + 's';
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// Particle animation
function createParticles() {
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 5000);
    }
}

// Petal animation
function createPetals() {
    for (let i = 0; i < 20; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = Math.random() * 5 + 3 + 's';
        document.body.appendChild(petal);
        
        setTimeout(() => {
            petal.remove();
        }, 8000);
    }
}

// Staggered text animation
function animateText() {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach((p, index) => {
        p.style.animationDelay = `${index * 0.3}s`;
    });
}

// Smooth scroll to top
function smoothScroll() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Optimize animations for mobile
let heartInterval;
function startAnimations() {
    if (window.innerWidth < 600) {
        // Reduce frequency on mobile
        heartInterval = setInterval(createHearts, 500);
    } else {
        heartInterval = setInterval(createHearts, 300);
    }
    setInterval(createParticles, 2000);
    setInterval(createPetals, 3000);
}

// Initialize animations
startAnimations();
animateText();
smoothScroll();

// Handle window resize
window.addEventListener('resize', () => {
    clearInterval(heartInterval);
    startAnimations();
});

// Add event listeners for both click and touch
const button = document.querySelector('button');
button.addEventListener('click', showForgivenessMessage);
button.addEventListener('touchstart', showForgivenessMessage);

// Prevent double-tap zoom on button
button.addEventListener('touchstart', (e) => {
    e.preventDefault();
}, { passive: false });
