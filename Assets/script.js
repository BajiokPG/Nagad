let Ngnamber = document.getElementById("accountNumber")
Ngnamber.innerText = "01824409728";


let timeLeft = 600; // 10 মিনিট = 600 সেকেন্ড

function formatTime(seconds) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${minutes}:${secs}`;
}

function updateCountdown() {
  const countdownEl = document.getElementById('countdown');
  countdownEl.textContent = formatTime(timeLeft);

  if (timeLeft > 0) {
    timeLeft--;
  } else {
    clearInterval(timerInterval);
    countdownEl.textContent = "সময় শেষ";
  }
}

// প্রতি ১ সেকেন্ডে আপডেট হবে
const timerInterval = setInterval(updateCountdown, 1000);

// পেজ লোড হলে প্রথমবার দেখাবে
updateCountdown();



function copyAccount(event) {
  const number = document.getElementById("accountNumber").textContent;
  navigator.clipboard.writeText(number);

  // পপআপ তৈরি
  const popup = document.createElement("div");
  popup.textContent = "নাম্বার কপি হয়েছে";
  popup.style.position = "absolute";
  popup.style.backgroundColor = "#000";
  popup.style.color = "white";
  popup.style.padding = "6px 12px";
  popup.style.borderRadius = "6px";
  popup.style.fontSize = "14px";
  popup.style.pointerEvents = "none";
  popup.style.zIndex = "9999";
  popup.style.opacity = "1";
  popup.style.transition = "opacity 0.3s ease";

  // মাউস পজিশনে পপআপ বসানো
  popup.style.left = `${event.clientX + 10}px`;
  popup.style.top = `${event.clientY - 10}px`;

  document.body.appendChild(popup);

  // ১ সেকেন্ড পর পপআপ মুছে ফেলা
  setTimeout(() => {
    popup.style.opacity = "0";
    setTimeout(() => {
      document.body.removeChild(popup);
    }, 300);
  }, 1000);
}


function submitTxid() {
    const input = document.getElementById("txidInput");
    const txid = input.value.trim();

    if (txid === "") {
      alert("লেনদেন আইডি লিখতে হবে");
      return;
    }

    // ট্রানজাকশন আইডি ভ্যালিডেশন (A-Z ও 0-9, মোট ৮ অক্ষর)
    const pattern = /^[A-Z0-9]{8}$/;

    if (!pattern.test(txid)) {
      alert("সঠিক ট্রানজাকশন আইডি লিখুন (যেমন: 73SHY8XI)");
      return;
    }

    alert("ট্রানজাকশন আইডি গ্রহণ করা হয়েছে ✅");
    // এখান থেকে সার্ভারে পাঠানো বা অন্য প্রসেস শুরু করতে পারো
  }