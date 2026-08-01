let score = 0;

// Welcome & Navigation
const enterBtn = document.getElementById("enterBtn");
const welcomeScreen = document.getElementById("welcomeScreen");
const continueBtn = document.getElementById("continueBtn");
const playerName = document.getElementById("playerName");
const level1 = document.getElementById("level1");

enterBtn.addEventListener("click", function() {
  enterBtn.style.display = "none";
  welcomeScreen.style.display = "block";
});

continueBtn.addEventListener("click", function() {
  let name = playerName.value.trim();

  if (name === "") {
    alert("💜 Please enter your name first!");
    return;
  }

  alert("💜 Welcome to The Fatima Games, " + name + "!");

  welcomeScreen.style.display = "none";
  level1.style.display = "block";
});

// Question 1
const q2 = document.getElementById("question2");
const q1correct = document.getElementById("q1correct");
const q1wrong1 = document.getElementById("q1wrong1");
const q1wrong2 = document.getElementById("q1wrong2");
const q1wrong3 = document.getElementById("q1wrong3");

q1correct.addEventListener("click", function() {
  score++;
  alert("✨ Correct!");
  level1.style.display = "none";
  q2.style.display = "block";
});

q1wrong1.addEventListener("click", function() {
  alert("❌ Wrong!");
  level1.style.display = "none";
  q2.style.display = "block";
});

q1wrong2.addEventListener("click", function() {
  alert("❌ Wrong!");
  level1.style.display = "none";
  q2.style.display = "block";
});

q1wrong3.addEventListener("click", function() {
  alert("❌ Wrong!");
  level1.style.display = "none";
  q2.style.display = "block";
});

// Question 2
const q3 = document.getElementById("question3");
const q2correct = document.getElementById("q2correct");
const q2wrong1 = document.getElementById("q2wrong1");
const q2wrong2 = document.getElementById("q2wrong2");
const q2wrong3 = document.getElementById("q2wrong3");

q2correct.addEventListener("click", function() {
  score++;
  alert("✨ Correct!");
  q2.style.display = "none";
  q3.style.display = "block";
});

q2wrong1.addEventListener("click", function() {
  alert("❌ Wrong!");
  q2.style.display = "none";
  q3.style.display = "block";
});

q2wrong2.addEventListener("click", function() {
  alert("❌ Wrong!");
  q2.style.display = "none";
  q3.style.display = "block";
});

q2wrong3.addEventListener("click", function() {
  alert("❌ Wrong!");
  q2.style.display = "none";
  q3.style.display = "block";
});

// Question 3
const q4 = document.getElementById("question4");
const q3correct = document.getElementById("q3correct");
const q3wrong1 = document.getElementById("q3wrong1");
const q3wrong2 = document.getElementById("q3wrong2");
const q3wrong3 = document.getElementById("q3wrong3");

q3correct.addEventListener("click", function() {
  score++;
  alert("✨ Correct!");
  q3.style.display = "none";
  q4.style.display = "block";
});

q3wrong1.addEventListener("click", function() {
  alert("❌ Wrong!");
  q3.style.display = "none";
  q4.style.display = "block";
});

q3wrong2.addEventListener("click", function() {
  alert("❌ Wrong!");
  q3.style.display = "none";
  q4.style.display = "block";
});

q3wrong3.addEventListener("click", function() {
  alert("❌ Wrong!");
  q3.style.display = "none";
  q4.style.display = "block";
});

// Question 4
const q5 = document.getElementById("question5");
const q4correct = document.getElementById("q4correct");
const q4wrong1 = document.getElementById("q4wrong1");
const q4wrong2 = document.getElementById("q4wrong2");
const q4wrong3 = document.getElementById("q4wrong3");

q4correct.addEventListener("click", function() {
  score++;
  alert("✨ Correct!");
  q4.style.display = "none";
  q5.style.display = "block";
});

q4wrong1.addEventListener("click", function() {
  alert("❌ Wrong!");
  q4.style.display = "none";
  q5.style.display = "block";
});

q4wrong2.addEventListener("click", function() {
  alert("❌ Wrong!");
  q4.style.display = "none";
  q5.style.display = "block";
});

q4wrong3.addEventListener("click", function() {
  alert("❌ Wrong!");
  q4.style.display = "none";
  q5.style.display = "block";
});

// Question 5
const q6 = document.getElementById("question6");
const q5correct = document.getElementById("q5correct");
const q5wrong1 = document.getElementById("q5wrong1");
const q5wrong2 = document.getElementById("q5wrong2");
const q5wrong3 = document.getElementById("q5wrong3");

q5correct.addEventListener("click", function() {
  score++;
  alert("✨ Correct!");
  q5.style.display = "none";
  q6.style.display = "block";
});

q5wrong1.addEventListener("click", function() {
  alert("❌ Wrong!");
  q5.style.display = "none";
  q6.style.display = "block";
});

q5wrong2.addEventListener("click", function() {
  alert("❌ Wrong!");
  q5.style.display = "none";
  q6.style.display = "block";
});

q5wrong3.addEventListener("click", function() {
  alert("❌ Wrong!");
  q5.style.display = "none";
  q6.style.display = "block";
});

// Question 6
const q7 = document.getElementById("question7");
const q6correct = document.getElementById("q6correct");
const q6wrong1 = document.getElementById("q6wrong1");
const q6wrong2 = document.getElementById("q6wrong2");
const q6wrong3 = document.getElementById("q6wrong3");

q6correct.addEventListener("click", function() {
  score++;
  alert("🎧 Correct! Bryson Tiller stays on repeat.");
  q6.style.display = "none";
  q7.style.display = "block";
});

q6wrong1.addEventListener("click", function() {
  alert("❌ Wrong!");
  q6.style.display = "none";
  q7.style.display = "block";
});

q6wrong2.addEventListener("click", function() {
  alert("❌ Wrong!");
  q6.style.display = "none";
  q7.style.display = "block";
});

q6wrong3.addEventListener("click", function() {
  alert("❌ Wrong!");
  q6.style.display = "none";
  q7.style.display = "block";
});

// Question 7
const q8 = document.getElementById("question8");
const q7correct = document.getElementById("q7correct");
const q7wrong1 = document.getElementById("q7wrong1");
const q7wrong2 = document.getElementById("q7wrong2");
const q7wrong3 = document.getElementById("q7wrong3");

q7correct.addEventListener("click", function() {
  score++;
  alert("🐱 Correct! Cats always have my heart.");
  q7.style.display = "none";
  q8.style.display = "block";
});

q7wrong1.addEventListener("click", function() {
  alert("❌ Wrong!");
  q7.style.display = "none";
  q8.style.display = "block";
});

q7wrong2.addEventListener("click", function() {
  alert("❌ Wrong!");
  q7.style.display = "none";
  q8.style.display = "block";
});

q7wrong3.addEventListener("click", function() {
  alert("❌ Wrong!");
  q7.style.display = "none";
  q8.style.display = "block";
});

// Question 8
const q9 = document.getElementById("question9");
const q8correct = document.getElementById("q8correct");
const q8wrong1 = document.getElementById("q8wrong1");
const q8wrong2 = document.getElementById("q8wrong2");
const q8wrong3 = document.getElementById("q8wrong3");

q8correct.addEventListener("click", function() {
  score++;
  alert("🍉 Correct!");
  q8.style.display = "none";
  q9.style.display = "block";
});

q8wrong1.addEventListener("click", function() {
  alert("❌ Wrong!");
  q8.style.display = "none";
  q9.style.display = "block";
});

q8wrong2.addEventListener("click", function() {
  alert("❌ Wrong!");
  q8.style.display = "none";
  q9.style.display = "block";
});

q8wrong3.addEventListener("click", function() {
  alert("❌ Wrong!");
  q8.style.display = "none";
  q9.style.display = "block";
});

// Question 9
const q10 = document.getElementById("question10");
const q9correct = document.getElementById("q9correct");
const q9wrong1 = document.getElementById("q9wrong1");
const q9wrong2 = document.getElementById("q9wrong2");
const q9wrong3 = document.getElementById("q9wrong3");

q9correct.addEventListener("click", function() {
  score++;
  alert("😂 Correct! My life would definitely be a sitcom.");
  q9.style.display = "none";
  q10.style.display = "block";
});

q9wrong1.addEventListener("click", function() {
  alert("❌ Wrong!");
  q9.style.display = "none";
  q10.style.display = "block";
});

q9wrong2.addEventListener("click", function() {
  alert("❌ Wrong!");
  q9.style.display = "none";
  q10.style.display = "block";
});

q9wrong3.addEventListener("click", function() {
  alert("❌ Wrong!");
  q9.style.display = "none";
  q10.style.display = "block";
});

// Question 10
const q11 = document.getElementById("question11");
const q10correct = document.getElementById("q10correct");
const q10wrong1 = document.getElementById("q10wrong1");
const q10wrong2 = document.getElementById("q10wrong2");
const q10wrong3 = document.getElementById("q10wrong3");

q10correct.addEventListener("click", function() {
  score++;
  alert("✨ Correct!");
  q10.style.display = "none";
  q11.style.display = "block";
});

q10wrong1.addEventListener("click", function() {
  alert("❌ Wrong!");
  q10.style.display = "none";
  q11.style.display = "block";
});

q10wrong2.addEventListener("click", function() {
  alert("❌ Wrong!");
  q10.style.display = "none";
  q11.style.display = "block";
});

q10wrong3.addEventListener("click", function() {
  alert("❌ Wrong!");
  q10.style.display = "none";
  q11.style.display = "block";
});

// Question 11
const q12 = document.getElementById("question12");
const q11correct = document.getElementById("q11correct");
const q11wrong1 = document.getElementById("q11wrong1");
const q11wrong2 = document.getElementById("q11wrong2");
const q11wrong3 = document.getElementById("q11wrong3");

q11correct.addEventListener("click", function() {
  score++;
  alert("🦄 Correct!");
  q11.style.display = "none";
  q12.style.display = "block";
});

q11wrong1.addEventListener("click", function() {
  alert("❌ Wrong!");
  q11.style.display = "none";
  q12.style.display = "block";
});

q11wrong2.addEventListener("click", function() {
  alert("❌ Wrong!");
  q11.style.display = "none";
  q12.style.display = "block";
});

q11wrong3.addEventListener("click", function() {
  alert("❌ Wrong!");
  q11.style.display = "none";
  q12.style.display = "block";
});

// Question 12
const q13 = document.getElementById("question13");
const q12correct = document.getElementById("q12correct");
const q12wrong1 = document.getElementById("q12wrong1");
const q12wrong2 = document.getElementById("q12wrong2");
const q12wrong3 = document.getElementById("q12wrong3");

q12correct.addEventListener("click", function() {
  score++;
  alert("✨ Correct!");
  q12.style.display = "none";
  q13.style.display = "block";
});

q12wrong1.addEventListener("click", function() {
  alert("❌ Wrong!");
  q12.style.display = "none";
  q13.style.display = "block";
});

q12wrong2.addEventListener("click", function() {
  alert("❌ Wrong!");
  q12.style.display = "none";
  q13.style.display = "block";
});

q12wrong3.addEventListener("click", function() {
  alert("❌ Wrong!");
  q12.style.display = "none";
  q13.style.display = "block";
});

// Question 13
const q14 = document.getElementById("question14");
const q13correct = document.getElementById("q13correct");
const q13wrong1 = document.getElementById("q13wrong1");
const q13wrong2 = document.getElementById("q13wrong2");
const q13wrong3 = document.getElementById("q13wrong3");

q13correct.addEventListener("click", function() {
  score++;
  alert("✨ Correct!");
  q13.style.display = "none";
  q14.style.display = "block";
});

q13wrong1.addEventListener("click", function() {
  alert("❌ Wrong!");
  q13.style.display = "none";
  q14.style.display = "block";
});

q13wrong2.addEventListener("click", function() {
  alert("❌ Wrong!");
  q13.style.display = "none";
  q14.style.display = "block";
});

q13wrong3.addEventListener("click", function() {
  alert("❌ Wrong!");
  q13.style.display = "none";
  q14.style.display = "block";
});

// Question 14
const q15 = document.getElementById("question15");
const q14correct = document.getElementById("q14correct");
const q14wrong1 = document.getElementById("q14wrong1");
const q14wrong2 = document.getElementById("q14wrong2");
const q14wrong3 = document.getElementById("q14wrong3");

q14correct.addEventListener("click", function() {
  score++;
  alert("✨ Correct!");
  q14.style.display = "none";
  q15.style.display = "block";
});

q14wrong1.addEventListener("click", function() {
  alert("❌ Wrong!");
  q14.style.display = "none";
  q15.style.display = "block";
});

q14wrong2.addEventListener("click", function() {
  alert("❌ Wrong!");
  q14.style.display = "none";
  q15.style.display = "block";
});

q14wrong3.addEventListener("click", function() {
  alert("❌ Wrong!");
  q14.style.display = "none";
  q15.style.display = "block";
});

// Question 15
const q16 = document.getElementById("question16");
const q15correct = document.getElementById("q15correct");
const q15wrong1 = document.getElementById("q15wrong1");
const q15wrong2 = document.getElementById("q15wrong2");
const q15wrong3 = document.getElementById("q15wrong3");

q15correct.addEventListener("click", function() {
  score++;
  alert("✨ Correct!");
  q15.style.display = "none";
  q16.style.display = "block";
});

q15wrong1.addEventListener("click", function() {
  alert("❌ Wrong!");
  q15.style.display = "none";
  q16.style.display = "block";
});

q15wrong2.addEventListener("click", function() {
  alert("❌ Wrong!");
  q15.style.display = "none";
  q16.style.display = "block";
});

q15wrong3.addEventListener("click", function() {
  alert("❌ Wrong!");
  q15.style.display = "none";
  q16.style.display = "block";
});

// Question 16
const q17 = document.getElementById("question17");
const q16correct = document.getElementById("q16correct");
const q16wrong1 = document.getElementById("q16wrong1");
const q16wrong2 = document.getElementById("q16wrong2");
const q16wrong3 = document.getElementById("q16wrong3");

q16correct.addEventListener("click", function() {
  score++;
  alert("✨ Correct!");
  q16.style.display = "none";
  q17.style.display = "block";
});

q16wrong1.addEventListener("click", function() {
  alert("❌ Wrong!");
  q16.style.display = "none";
  q17.style.display = "block";
});

q16wrong2.addEventListener("click", function() {
  alert("❌ Wrong!");
  q16.style.display = "none";
  q17.style.display = "block";
});

q16wrong3.addEventListener("click", function() {
  alert("❌ Wrong!");
  q16.style.display = "none";
  q17.style.display = "block";
});

// Question 17
const q18 = document.getElementById("question18");
const q17correct = document.getElementById("q17correct");
const q17wrong1 = document.getElementById("q17wrong1");
const q17wrong2 = document.getElementById("q17wrong2");
const q17wrong3 = document.getElementById("q17wrong3");

q17correct.addEventListener("click", function() {
  score++;
  alert("✨ Correct!");
  q17.style.display = "none";
  q18.style.display = "block";
});

q17wrong1.addEventListener("click", function() {
  alert("❌ Wrong!");
  q17.style.display = "none";
  q18.style.display = "block";
});

q17wrong2.addEventListener("click", function() {
  alert("❌ Wrong!");
  q17.style.display = "none";
  q18.style.display = "block";
});

q17wrong3.addEventListener("click", function() {
  alert("❌ Wrong!");
  q17.style.display = "none";
  q18.style.display = "block";
});

// Question 18
const q19 = document.getElementById("question19");
const q18correct = document.getElementById("q18correct");
const q18wrong1 = document.getElementById("q18wrong1");
const q18wrong2 = document.getElementById("q18wrong2");
const q18wrong3 = document.getElementById("q18wrong3");

q18correct.addEventListener("click", function() {
  score++;
  alert("✨ Correct!");
  q18.style.display = "none";
  q19.style.display = "block";
});

q18wrong1.addEventListener("click", function() {
  alert("❌ Wrong!");
  q18.style.display = "none";
  q19.style.display = "block";
});

q18wrong2.addEventListener("click", function() {
  alert("❌ Wrong!");
  q18.style.display = "none";
  q19.style.display = "block";
});

q18wrong3.addEventListener("click", function() {
  alert("❌ Wrong!");
  q18.style.display = "none";
  q19.style.display = "block";
});

// Question 19
const q20 = document.getElementById("question20");
const q19correct = document.getElementById("q19correct");
const q19wrong1 = document.getElementById("q19wrong1");
const q19wrong2 = document.getElementById("q19wrong2");
const q19wrong3 = document.getElementById("q19wrong3");

q19correct.addEventListener("click", function() {
  score++;
  alert("🏝️ Correct! Maldives, here I come!");
  q19.style.display = "none";
  q20.style.display = "block";
});

q19wrong1.addEventListener("click", function() {
  alert("❌ Wrong!");
  q19.style.display = "none";
  q20.style.display = "block";
});

q19wrong2.addEventListener("click", function() {
  alert("❌ Wrong!");
  q19.style.display = "none";
  q20.style.display = "block";
});

q19wrong3.addEventListener("click", function() {
  alert("❌ Wrong!");
  q19.style.display = "none";
  q20.style.display = "block";
});

// Question 20
const q21 = document.getElementById("question21");
const q20correct = document.getElementById("q20correct");
const q20wrong1 = document.getElementById("q20wrong1");
const q20wrong2 = document.getElementById("q20wrong2");
const q20wrong3 = document.getElementById("q20wrong3");

q20correct.addEventListener("click", function() {
  score++;
  alert("🤫 Wait... The Fatima Council has one final secret question...");
  q20.style.display = "none";
  q21.style.display = "block";
});

q20wrong1.addEventListener("click", function() {
  alert("❌ Wrong!");
  q20.style.display = "none";
  q21.style.display = "block";
});

q20wrong2.addEventListener("click", function() {
  alert("❌ Wrong!");
  q20.style.display = "none";
  q21.style.display = "block";
});

q20wrong3.addEventListener("click", function() {
  alert("❌ Wrong!");
  q20.style.display = "none";
  q21.style.display = "block";
});

// Question 21
const q22 = document.getElementById("question22");
const q21correct = document.getElementById("q21correct");
const q21wrong1 = document.getElementById("q21wrong1");
const q21wrong2 = document.getElementById("q21wrong2");
const q21wrong3 = document.getElementById("q21wrong3");

q21correct.addEventListener("click", function() {
  score++;
  alert("😱 YOU ACTUALLY KNEW THAT?!");
  q21.style.display = "none";
  q22.style.display = "block";
});

q21wrong1.addEventListener("click", function() {
  alert("❌ Wrong!");
  q21.style.display = "none";
  q22.style.display = "block";
});

q21wrong2.addEventListener("click", function() {
  alert("❌ Wrong!");
  q21.style.display = "none";
  q22.style.display = "block";
});

q21wrong3.addEventListener("click", function() {
  alert("❌ Wrong!");
  q21.style.display = "none";
  q22.style.display = "block";
});

// Question 22 & Ending Helper Function
const q22correct = document.getElementById("q22correct");
const q22wrong1 = document.getElementById("q22wrong1");
const q22wrong2 = document.getElementById("q22wrong2");
const q22wrong3 = document.getElementById("q22wrong3");

function showEndScreen() {
  let title = "";

  if (score == 22) {
    title = "👑 Fatima Council President";
  } else if (score >= 20) {
    title = "💜 Certified Bestie";
  } else if (score >= 17) {
    title = "🌟 Trusted Friend";
  } else if (score >= 13) {
    title = "😏 Casual Friend";
  } else if (score >= 8) {
    title = "🤔 You Still Need To Know Fatima";
  } else {
    title = "😂 Stranger Danger!";
  }

  let message = "";

  if (score == 22) {
    message = "You know Fatima better than she knows herself! 😂💜";
  } else if (score >= 20) {
    message = "You definitely deserve a spot in the Fatima Council!";
  } else if (score >= 17) {
    message = "You're officially one of Fatima's trusted friends!";
  } else if (score >= 13) {
    message = "Not bad! But there's still more to learn about Fatima.";
  } else if (score >= 8) {
    message = "Looks like you need to spend a little more time with Fatima. 😅";
  } else {
    message = "At this point... are you sure you know Fatima at all? 😂";
  }

  document.getElementById("finalScore").innerHTML = 
    "🥇 Final Score: " + score + " / 22<br><br>" + title;

  document.getElementById("endingMessage").innerHTML = message;

  if (score === 22) {
    confetti({
      particleCount: 180,
      spread: 120,
      origin: { y: 0.6 }
    });
  }

  q22.style.display = "none";
  document.getElementById("endScreen").style.display = "block";
}

q22correct.addEventListener("click", function() {
  score++;
  alert("✨ Correct!");
  showEndScreen();
});

q22wrong1.addEventListener("click", function() {
  alert("❌ Wrong!");
  showEndScreen();
});

q22wrong2.addEventListener("click", function() {
  alert("❌ Wrong!");
  showEndScreen();
});

q22wrong3.addEventListener("click", function() {
  alert("❌ Wrong!");
  showEndScreen();
});
