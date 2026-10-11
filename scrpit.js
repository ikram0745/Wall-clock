const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');
const digital = document.getElementById('digital');

function updateClock(){
  const now = new Date();
  const h = now.getHours() % 12;
  const m = now.getMinutes();
  const s = now.getSeconds();

  const hDeg = (h * 30) + (m * 0.5); // 30 deg per hour + minute ka hisa
  const mDeg = m * 6; // 6 deg per minute
  const sDeg = s * 6; // 6 deg per second

  hourHand.style.transform = `translateX(-50%) rotate(${hDeg}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${mDeg}deg)`;
  secondHand.style.transform = `translateX(-50%) rotate(${sDeg}deg)`;

  digital.innerText = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();