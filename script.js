// Get the "No" button
const noButton = document.getElementById('no-button');

// Add event listeners for hover and click
noButton.addEventListener('mouseover', () => {
    // Move the button away when hovered
    noButton.style.transform = `translateX(${Math.random() * 200 - 100}px) translateY(${Math.random() * 200 - 100}px)`;
});

noButton.addEventListener('click', () => {
    // Move the button further away when clicked
    noButton.style.transform = `translateX(${Math.random() * 300 - 150}px) translateY(${Math.random() * 300 - 150}px)`;
    noButton.style.opacity = '0.5';
    noButton.style.pointerEvents = 'none'; // Disable further clicks
});

// Response page logic
const urlParams = new URLSearchParams(window.location.search);
const answer = urlParams.get('answer');

const responseMessage = document.getElementById('response-message');
const funMessage = document.getElementById('fun-message');

if (answer === 'yes') {
    responseMessage.textContent = 'Yay! You said YES! 🎉';
    funMessage.textContent = 'I knew you would say yes! 😊';
} else if (answer === 'no') {
    responseMessage.textContent = 'Aww, you said NO. 😢';
    funMessage.textContent = 'Just kidding, I know you meant YES! 😉';
} else {
    responseMessage.textContent = 'Thanks for visiting!';
}

// Confetti effect
function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });
}

// Trigger confetti when the page loads
window.onload = () => {
    triggerConfetti();
    setInterval(triggerConfetti, 3000); // Trigger confetti every 3 seconds
};

// Animate the thank you message
const thankYouMessage = document.getElementById('thank-you-message');
thankYouMessage.style.animation = 'fadeIn 2s ease-in-out, bounce 2s infinite';