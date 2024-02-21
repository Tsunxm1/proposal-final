function startQuestions() {
    document.getElementById("questions").style.display = "block";
  }
  
  function answerYes() {
    document.getElementById("questions").style.display = "none";
      document.getElementById("que").style.display = "none";
      document.getElementById("init").innerText = "YEY YEY 🎉🎉🎉";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerText = "I believe in love too! How about we get togethor and  see if it's true?";
      document.getElementById("messageText").innetText = "BHAI PLS 😭😭😭";
    showConfetti()
}
    function answerpickup() {
    document.getElementById("questions").style.display = "none";
      document.getElementById("que").style.display = "none";
      document.getElementById("init").innerText = "Pickup line";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerText = "You’ve got me feeling like a substitute, eagerly waiting for my chance to impress you";
    showConfetti()
} 

function answerNo() {
    document.getElementById("questions").style.display = "none";
    document.getElementById("que").style.display = "none";
    document.getElementById("init").innerText = "NO JOY :((";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerText = "try again BRO";
    showConfetti()

}
  
// Function to show confetti
function showConfetti() {
    const confettiSettings = {
      target: 'confetti-canvas',
      respawn: true,
      colors: ['#ff0000', '#00ff00', '#0000ff'], 
    };
  
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    setTimeout(() => {
      confetti.clear();
    }, 5000);
  }
