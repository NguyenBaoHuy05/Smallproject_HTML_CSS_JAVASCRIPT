function clock() {
  const time = new Date();
  let hour = time.getHours();
  const mid = hour < 12 ? "AM" : "PM";
  hour %= 12 || 12;
  const hours = hour.toString().padStart(2, 0);
  const min = time.getMinutes().toString().padStart(2, 0);
  const sec = time.getSeconds().toString().padStart(2, 0);
  const now = `${hours}:${min}:${sec}  ${mid}`;
  document.getElementById("clock").textContent = now;
}

setInterval(clock, 1000);
