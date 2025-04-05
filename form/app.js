const bgColor = document.getElementById('bgColor');
const fgColor = document.getElementById('fgColor');

const backGround = document.getElementById('background')
const foreGround = document.getElementById('foreground')
 
// 背景色は change イベント
bgColor.addEventListener('change', () => {
  console.log(bgColor.value);
  backGround.style.backgroundColor = bgColor.value
});

// 前景色は input イベント
fgColor.addEventListener('input', () => {
  console.log(fgColor.value);
  foreGround.style.color = fgColor.value
});