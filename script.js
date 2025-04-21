
function checkAnswer() {
  const input = document.getElementById("answer").value.trim();
  const correctAnswer = "10"; // ٨ + ٤ ÷ ٢ = ٨ + ٢ = ١٠

  if (input === correctAnswer) {
    document.querySelector(".captcha-box").classList.add("hidden");
    document.querySelector(".stream-box").classList.remove("hidden");
    startMicrophone();
  } else {
    document.getElementById("error").classList.remove("hidden");
  }
}

function startMicrophone() {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      const audio = new Audio();
      audio.srcObject = stream;
      audio.play();
    })
    .catch(error => {
      alert("لم يتم منح إذن استخدام الميكروفون.");
    });
}
