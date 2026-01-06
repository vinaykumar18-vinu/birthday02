function checkAnswers() {
    const q1 = document.getElementById('q1').value.toLowerCase().trim();
    const q2 = document.getElementById('q2').value.toLowerCase().trim();

    let correct = 0;
    let feedback = '';

    if (q1 === 'keyboard') {
        correct++;
    } else {
        feedback += 'Question 1 is incorrect. ';
    }

    if (q2 === 'pizzahut') {
        correct++;
    } else {
        feedback += 'Question 2 is incorrect. ';
    }

    if (correct === 2) {
        document.getElementById('landing').style.display = 'none';
        document.getElementById('message').style.display = 'flex';
        createConfetti();
    } else {
        document.getElementById('feedback').textContent = feedback + 'Try again!';
    }
}

function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7'];
    for(let i = 0; i < 150; i++) {
        let confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 3 + 3) + 's';
        document.body.appendChild(confetti);
    }
}