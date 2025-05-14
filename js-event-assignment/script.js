// Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
    alert("You clicked the button, friend! 🎉");
  });
  
  document.getElementById("hoverArea").addEventListener("mouseover", () => {
    document.getElementById("hoverArea").style.background = "#ffd3e6";
  });
  document.getElementById("hoverArea").addEventListener("mouseout", () => {
    document.getElementById("hoverArea").style.background = "";
  });
  
  document.addEventListener("keydown", (e) => {
    document.getElementById("keyPressed").textContent = `You pressed: ${e.key}`;
  });
  
  // Secret Double Click / Long Press
  let secretTimer;
  const secretBtn = document.getElementById("secretBtn");
  
  secretBtn.addEventListener("dblclick", () => {
    alert("🌈 Double-click secret unlocked! You're awesome!");
  });
  
  secretBtn.addEventListener("mousedown", () => {
    secretTimer = setTimeout(() => {
      alert("🤫 Long press detected! True friendship is patient.");
    }, 1000);
  });
  secretBtn.addEventListener("mouseup", () => clearTimeout(secretTimer));
  
  // Button that changes text or color
  const colorTextBtn = document.getElementById("colorTextBtn");
  let toggle = false;
  colorTextBtn.addEventListener("click", () => {
    toggle = !toggle;
    colorTextBtn.textContent = toggle ? "You’re a gem 💎" : "Change Color/Text";
    colorTextBtn.style.background = toggle ? "#6a5acd" : "#ff69b4";
  });
  
  // Slideshow
  const images = [
    "https://images.pexels.com/photos/1255062/pexels-photo-1255062.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1974927/pexels-photo-1974927.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/745045/pexels-photo-745045.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  let currentImg = 0;
  const galleryImg = document.getElementById("galleryImage");
  
  document.getElementById("nextBtn").addEventListener("click", () => {
    currentImg = (currentImg + 1) % images.length;
    galleryImg.src = images[currentImg];
  });
  document.getElementById("prevBtn").addEventListener("click", () => {
    currentImg = (currentImg - 1 + images.length) % images.length;
    galleryImg.src = images[currentImg];
  });
  
  // Tabs
  const tabBtns = document.querySelectorAll(".tabBtn");
  const tabContents = document.querySelectorAll(".tabContent");
  
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabContents.forEach(c => c.classList.remove("active"));
      document.getElementById(`tab-${btn.dataset.tab}`).classList.add("active");
    });
  });
  
  // Form Validation with Real-time Feedback
  const email = document.getElementById("email");
  const emailMsg = document.getElementById("emailMsg");
  const password = document.getElementById("password");
  const passMsg = document.getElementById("passMsg");
  const form = document.getElementById("signupForm");
  
  email.addEventListener("input", () => {
    const isValid = /\S+@\S+\.\S+/.test(email.value);
    emailMsg.textContent = isValid ? "✔️ Looks good!" : "Invalid email format.";
    emailMsg.style.color = isValid ? "green" : "red";
  });
  
  password.addEventListener("input", () => {
    const strong = password.value.length >= 8;
    passMsg.textContent = strong ? "✔️ Strong password!" : "Password must be at least 8 characters.";
    passMsg.style.color = strong ? "green" : "red";
  });
  
  form.addEventListener("submit", (e) => {
    if (!email.checkValidity() || !password.checkValidity()) {
      e.preventDefault();
      alert("Please correct the errors before submitting.");
    }
  });
  