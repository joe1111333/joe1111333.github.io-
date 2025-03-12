const salaryElement = document.getElementById('salary');
const coinSound = document.getElementById('coin-sound');
let salary = 0;

// 每秒更新工资
const timer = setInterval(() => {
  salary++;
  salaryElement.textContent = salary;
  // 当工资达到 10 元时播放铜板声音
  if (salary === 10) {
    coinSound.play();
  }
}, 1000);
