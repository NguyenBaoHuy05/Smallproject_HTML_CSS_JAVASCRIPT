let skip = false;
let timeskip = 0;
let now = 0;
let run = null;
const display = document.getElementById("display");

function start() {
  if (!skip) {
    now = new Date() - timeskip;
    run = setInterval(update, 10);
    skip = true;
  }
}

function stop() {
  if (skip) {
    clearInterval(run);
    skip = false;
  }
}

function reset() {
  clearInterval(run);
  skip = false;
  now = 0;
  timeskip = 0;
  display.textContent = `00:00:00:00`;
}

function update() {
  const ress = new Date();
  timeskip = ress - now;

  let hour = Math.floor(timeskip / (1000 * 60 * 60));
  let min = Math.floor((timeskip / (1000 * 60)) % 60);
  let sec = Math.floor((timeskip / 1000) % 60);
  let mili = Math.floor((timeskip % 1000) / 10);

  hour = String(hour).padStart(2, 0);
  min = min.toString().padStart(2, 0);
  sec = sec.toString().padStart(2, 0);
  mili = mili.toString().padStart(2, 0);

  display.textContent = `${hour}:${min}:${sec}:${mili}`;
}
