const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const menu = document.getElementById('menu');
const settings = document.getElementById('settings');
const result = document.getElementById('result');
const startBtn = document.getElementById('startBtn');
const settingsBtn = document.getElementById('settingsBtn');
const startTrainBtn = document.getElementById('startTrainBtn');
const cancelBtn = document.getElementById('cancelBtn');
const backBtn = document.getElementById('backBtn');
const timeSelect = document.getElementById('timeSelect');
const difficultySelect = document.getElementById('difficultySelect');
const scoreText = document.getElementById('scoreText');
const timerDisplay = document.getElementById('timerDisplay'); // 添加计时器显示元素的引用

// 新增的设置界面元素引用
const timeOptions = document.getElementById('timeOptions');
const difficultyOptions = document.getElementById('difficultyOptions');

// 游戏常量
const GRAVITY = 0.35; // 保持统一的重力加速度

// 加载鱼图片
const fishImages = [];
for (let i = 1; i <= 7; i++) { // 修改为7种鱼
  const img = new Image();
  img.src = `assets/fish${i}.png`;
  fishImages.push(img);
}

// 加载炸弹图片
const bombImg = new Image();
bombImg.src = 'assets/bomb.png';

// 加载云图片
const cloud1Img = new Image();
cloud1Img.src = 'assets/cloud1.png';

// 加载气球图片
const balloon1Img = new Image();
balloon1Img.src = 'assets/ballon1.png';
balloon1Img.onload = () => console.log('气球1图片加载成功');
balloon1Img.onerror = () => console.log('气球1图片加载失败');

// 游戏状态变量
let gameState = 'menu'; // 'menu', 'playing', 'paused', 'gameOver'
let score = 0;
let lives = 3;
let gameMode = 'easy'; // 'easy', 'normal', 'hard'
let bombCount = 1; // 默认炸弹数量
let balloonTimer = 0;
let lastTime = 0;
let gameStartTime = 0;
let gameTime = 0;
let isPaused = false;
let fishes = [];
let bombs = [];
let fishCounts = Array(7).fill(0); // 7种鱼的数量统计
let timeLeft = gameTime;
let difficulty = 'normal';
let isSpawning = false;
let roundInterval = 3000;
let scorePopups = [];
let timerTimeout = null; // 用于存储计时器
let startTime = 0; // 添加开始时间记录
let clickPoints = [];

// 云朵对象
const clouds = [
  {
    x: Math.random() * canvas.width,
    y: 50 + Math.random() * 50,
    speed: 0.5 + Math.random() * 0.5,
    img: cloud1Img,
    width: 300,
    height: 150
  },
  {
    x: Math.random() * canvas.width,
    y: 120 + Math.random() * 50,
    speed: -(0.3 + Math.random() * 0.3),
    img: cloud1Img,
    width: 300,
    height: 150
  }
];

// 气球对象数组
const balloons = [];

// 鱼的基础速度函数
function getFishBaseSpeed() {
  if (difficulty === 'easy') return 18; // 还原到之前的值
  if (difficulty === 'normal') return 16; // 还原到之前的值
  return 14; // 还原到之前的值
}

// 炸弹的基础速度函数
function getBombBaseSpeed() {
  return 2.4; // 增加基础速度，从2.0增加到2.4
}

function showMenu() {
  menu.style.display = 'flex';
  settings.style.display = 'none';
  result.style.display = 'none';
  canvas.style.display = 'block';
  gameState = 'menu';
}
function showSettings() {
  menu.style.display = 'none';
  settings.style.display = 'flex';
  result.style.display = 'none';
  gameState = 'settings';
}
function showResult() {
  menu.style.display = 'none';
  settings.style.display = 'none';
  result.style.display = 'flex';
}

function spawnRound() {
  if (isSpawning) return;
  isSpawning = true;
  
  const fishCount = 10;
  // 使用当前模式的炸弹数量
  const currentBombCount = bombCount;
  let spawnedCount = 0;
  
  // 先生成炸弹，再生成鱼
  for (let i = 0; i < fishCount + currentBombCount; i++) {
    const isBomb = i < currentBombCount;
    const randomFishImg = isBomb ? bombImg : fishImages[Math.floor(Math.random() * fishImages.length)];
    const baseSpeed = isBomb ? getBombBaseSpeed() : getFishBaseSpeed();
    // 让炸弹的初始速度是原来的3倍
    const initialVy = isBomb ? 
      -(baseSpeed * 6.6 + Math.random() * (baseSpeed * 1.8)) : // 炸弹的初始速度是原来的3倍 (2.2 * 3 = 6.6)
      -(baseSpeed + Math.random() * (baseSpeed * 0.2)); // 还原鱼的初始速度
    const initialVx = isBomb ? 
      (0.9 + Math.random() * 2.1) : // 保持炸弹的水平速度
      (0.3 + Math.random() * 0.7);
    
    // 修改生成位置逻辑
    let x;
    if (isBomb) {
      // 炸弹在中间区域生成
      const centerStart = canvas.width * 0.3;
      const centerWidth = canvas.width * 0.4;
      // 根据炸弹数量平均分配位置
      const sectionWidth = centerWidth / currentBombCount;
      const section = i;
      x = centerStart + section * sectionWidth + Math.random() * (sectionWidth * 0.8);
    } else {
      const fishIndex = i - currentBombCount;
      if (fishIndex < 6) {
        const centerStart = canvas.width * 0.3;
        const centerWidth = canvas.width * 0.4;
        const sectionCount = 3;
        const sectionWidth = centerWidth / sectionCount;
        const section = Math.floor(fishIndex / 2);
        x = centerStart + section * sectionWidth + Math.random() * (sectionWidth * 0.8);
      } else if (fishIndex < 8) {
        x = 100 + Math.random() * (canvas.width * 0.2);
      } else {
        x = canvas.width * 0.8 + Math.random() * (canvas.width * 0.2 - 100);
      }
    }
    
    // 确保不会生成在太靠近边缘的位置
    x = Math.max(100, Math.min(canvas.width - 300, x));
    
    // 为每个对象设置递增的延迟
    const baseDelay = isBomb ? 450 : 300; // 将炸弹的基础延迟从350ms增加到450ms
    const intervalDelay = isBomb ? 120 : 150; // 将炸弹的间隔延迟从100ms增加到120ms
    const randomDelay = Math.floor(Math.random() * 100); // 保持随机延迟不变
    const delay = baseDelay + (i * intervalDelay) + randomDelay;
    
    setTimeout(() => {
      if (isBomb) {
        bombs.push({
          x: x,
          y: canvas.height - 150,
          vy: initialVy,
          vx: initialVx,
          clicked: false,
          img: bombImg,
          width: 120,
          height: 120,
          hasPausedAtTop: false,
          lastVy: initialVy
        });
      } else {
        // 获取当前鱼的索引
        const fishIndex = fishImages.indexOf(randomFishImg);
        // 为 fish4 设置不同的尺寸
        const width = fishIndex === 3 ? 180 : 200;  // fish4 宽度设为 180
        const height = fishIndex === 3 ? 150 : 133; // fish4 高度设为 150
        
        fishes.push({
          x: x,
          y: canvas.height - 150,
          vy: initialVy,
          vx: initialVx,
          clicked: false,
          img: randomFishImg,
          width: width,
          height: height,
          rotation: -15,
          rotationSpeed: 0.5,
          maxRotation: 15,
          startRotation: false
        });
      }
      
      spawnedCount++;
      if (spawnedCount === fishCount + currentBombCount) {
        setTimeout(() => {
          isSpawning = false;
          if (gameState === 'playing') {
            spawnRound();
          }
        }, roundInterval + 2000);
      }
    }, delay);
  }
}

function getSpeed() {
  // 返回基础向上速度
  if (difficulty === 'easy') return 18; // 调整为18，使鱼跳得更高
  if (difficulty === 'normal') return 14;
  return 10; // 调整为10，使鱼跳得更低
}
function getSpawnRate() {
  if (difficulty === 'easy') return [0.13, 0.02];
  if (difficulty === 'normal') return [0.10, 0.03];
  return [0.08, 0.05]; // 保持0.05，增加炸弹出现概率
}

function getMaxBombsOnScreen() {
  if (difficulty === 'easy') return 1;
  if (difficulty === 'normal') return 2;
  return 3;
}

function draw() {
  // 清空画布
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // 使用天蓝色背景
  ctx.fillStyle = '#87CEEB';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // 绘制气球（在背景之后）
  balloons.forEach(balloon => {
    if (balloon.img.complete) {
      ctx.drawImage(
        balloon.img,
        balloon.x,
        balloon.y,
        balloon.width,
        balloon.height
      );
    }
  });
  
  // 绘制云朵
  clouds.forEach(cloud => {
    if (cloud.img.complete) {
      ctx.drawImage(cloud.img, cloud.x, cloud.y, cloud.width, cloud.height);
    }
  });

  // 先绘制最底层波浪（最深）
  ctx.fillStyle = '#006994'; // 深蓝色
  ctx.beginPath();
  ctx.moveTo(0, canvas.height - 330);
  for (let i = 0; i <= canvas.width; i += 20) {
    const y = canvas.height - 330 + Math.sin(i * 0.035) * 25;
    ctx.lineTo(i, y);
  }
  ctx.lineTo(canvas.width, canvas.height);
  ctx.lineTo(0, canvas.height);
  ctx.closePath();
  ctx.fill();

  // 第二层（中等深度）
  ctx.fillStyle = '#0099CC'; // 中蓝色
  ctx.beginPath();
  ctx.moveTo(0, canvas.height - 260);
  for (let i = 0; i <= canvas.width; i += 20) {
    const y = canvas.height - 260 + Math.sin(i * 0.035) * 25;
    ctx.lineTo(i, y);
  }
  ctx.lineTo(canvas.width, canvas.height);
  ctx.lineTo(0, canvas.height);
  ctx.closePath();
  ctx.fill();

  // 第三层（较浅）
  ctx.fillStyle = '#00BFFF'; // 浅蓝色
  ctx.beginPath();
  ctx.moveTo(0, canvas.height - 190);
  for (let i = 0; i <= canvas.width; i += 20) {
    const y = canvas.height - 190 + Math.sin(i * 0.035) * 25;
    ctx.lineTo(i, y);
  }
  ctx.lineTo(canvas.width, canvas.height);
  ctx.lineTo(0, canvas.height);
  ctx.closePath();
  ctx.fill();

  // 绘制鱼（在第三层波浪之后，第四层波浪之前）
  fishes.forEach(f => {
    if (f.img.complete) {
      ctx.save();
      ctx.translate(f.x + f.width/2, f.y + f.height/2);
      ctx.rotate(f.rotation * Math.PI / 180);
      ctx.drawImage(
        f.img,
        -f.width/2,
        -f.height/2,
        f.width,
        f.height
      );
      ctx.restore();
    } else {
      ctx.fillStyle = 'gold';
      ctx.fillRect(f.x, f.y, f.width, f.height);
    }
  });

  // 画炸弹
  bombs.forEach(b => {
    if (b.img.complete) {
      ctx.drawImage(b.img, b.x, b.y, b.width, b.height);
    } else {
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.arc(b.x + b.width / 2, b.y + b.height / 2, b.width / 2, 0, 2 * Math.PI);
      ctx.fill();
    }
  });

  // 画分数提示
  scorePopups.forEach(popup => {
    ctx.fillStyle = `rgba(255, 0, 0, ${popup.alpha})`;
    ctx.font = 'bold 40px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(popup.text, popup.x, popup.y);
  });

  // 绘制分数和时间
  ctx.fillStyle = 'black';
  ctx.font = '48px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('分数:', 50, 60);
  ctx.textAlign = 'right';
  ctx.fillText(score.toString().padStart(4, ' '), 250, 60);
  ctx.textAlign = 'left';
  ctx.fillText(`剩余时间: ${timeLeft}s`, canvas.width - 350, 60);

  // 在右上角绘制每种鱼的捕获数量
  ctx.font = '24px sans-serif';
  ctx.textAlign = 'right';
  const startX = canvas.width - 20;
  const startY = 100;
  const lineHeight = 30;
  
  fishCounts.forEach((count, index) => {
    const y = startY + index * lineHeight;
    if (fishImages[index] && fishImages[index].complete) {
      ctx.drawImage(fishImages[index], startX - 150, y - 20, 40, 27);
    }
    ctx.fillText(`x${count}`, startX, y);
  });

  // 最后绘制第四层波浪（最浅）
  ctx.fillStyle = '#87CEFA'; // 天蓝色
  ctx.beginPath();
  ctx.moveTo(0, canvas.height - 120);
  for (let i = 0; i <= canvas.width; i += 20) {
    const y = canvas.height - 120 + Math.sin(i * 0.035) * 25;
    ctx.lineTo(i, y);
  }
  ctx.lineTo(canvas.width, canvas.height);
  ctx.lineTo(0, canvas.height);
  ctx.closePath();
  ctx.fill();
}
function update() {
  fishes.forEach(f => {
    // 统一使用相同的重力加速度，不再区分上升和下落
    f.vy += GRAVITY;
    f.y += f.vy;
    f.x += f.vx;
    
    // 检查是否达到最高点（vy从负变为正的时刻）
    if (!f.startRotation && f.vy > 0) {
      f.startRotation = true;
      f.rotationSpeed = 1.5;
    }
    
    // 只有在开始旋转后才更新旋转角度
    if (f.startRotation) {
      if (f.rotation < f.maxRotation) {
        f.rotation += f.rotationSpeed;
      }
      // 逐渐减小旋转速度，使旋转更自然
      f.rotationSpeed = Math.max(0.5, f.rotationSpeed * 0.98);
    }
  });
  bombs.forEach(b => {
    updateBomb(b);
  });

  // 更新云朵位置
  clouds.forEach(cloud => {
    cloud.x += cloud.speed;
    // 当云朵移出屏幕时，从另一侧重新进入
    if (cloud.speed > 0 && cloud.x > canvas.width) {
      cloud.x = -cloud.width;
    } else if (cloud.speed < 0 && cloud.x < -cloud.width) {
      cloud.x = canvas.width;
    }
  });

  // 更新分数提示
  scorePopups.forEach(popup => {
    popup.y -= 2;
    popup.alpha -= 0.02;
  });
  // 移除已淡出的分数提示
  scorePopups = scorePopups.filter(popup => popup.alpha > 0);

  // 移除已点击或完全飞出屏幕的鱼/炸弹
  fishes = fishes.filter(f => 
    f.y < canvas.height + f.height && 
    f.y > -f.height * 2 && 
    f.x < canvas.width + f.width &&
    f.x > -f.width &&
    !f.clicked
  );
  bombs = bombs.filter(b => 
    b.y < canvas.height + b.height && 
    b.y > -b.height * 2 && 
    b.x < canvas.width + b.width &&
    b.x > -b.width &&
    !b.clicked
  );

  // 更新气球位置
  balloons.forEach(balloon => {
    updateBalloon(balloon);
  });
}
function gameLoop() {
  if (gameState !== 'playing') return;
  
  // 更新游戏状态
  update();
  draw();
  
  // 气球生成逻辑 - 只在没有气球时生成
  if (balloons.length === 0) {
    spawnBalloon();
  }
  
  // 继续游戏循环
  requestAnimationFrame(gameLoop);
}
function startGame() {
  if (gameState !== 'menu' && gameState !== 'settings') return;
  
  // 从自定义单选按钮中获取选定的时间
  const selectedTimeBtn = timeOptions.querySelector('.radio-btn.selected');
  gameTime = parseInt(selectedTimeBtn.dataset.value) * 60; // 将分钟转换为秒
  timeLeft = gameTime;
  startTime = Date.now(); // 记录开始时间
  
  // 从自定义单选按钮中获取选定的难度
  const selectedDifficultyBtn = difficultyOptions.querySelector('.radio-btn.selected');
  const selectedMode = selectedDifficultyBtn.dataset.value;
  setGameMode(selectedMode); // 使用setGameMode来设置游戏模式
  
  // 重置游戏状态
  score = 0;
  fishes = [];
  bombs = [];
  fishCounts.fill(0);
  isSpawning = false;
  gameState = 'playing';
  
  // 显示游戏界面
  menu.style.display = 'none';
  settings.style.display = 'none';
  result.style.display = 'none';
  canvas.style.display = 'block';
  
  // 启动计时器
  if (timerTimeout) clearTimeout(timerTimeout);
  function updateTimer() {
    if (gameState !== 'playing') return;
    
    timeLeft--;
    updateTimerDisplay();
    
    if (timeLeft > 0) {
      timerTimeout = setTimeout(updateTimer, 1000);
    } else {
      gameState = 'gameOver';
      showGameOver();
    }
  }
  
  timerTimeout = setTimeout(updateTimer, 1000);
  
  // 开始生成鱼和炸弹
  spawnRound();
  requestAnimationFrame(gameLoop);
  updateTimerDisplay();
  clickPoints = [];
}
function endGame() {
  clearTimeout(gameTimeout);
  clearTimeout(timerTimeout);
  gameState = 'gameOver';
  scoreText.innerText = `得分: ${score}`;
  showResult();
}
function handleClick(x, y) {
  let hit = false;
  fishes.forEach(f => {
    if (!f.clicked && x > f.x && x < f.x + f.width && y > f.y && y < f.y + f.height) {
      f.clicked = true; 
      score += 10; 
      hit = true;
      const fishIndex = fishImages.indexOf(f.img);
      if (fishIndex !== -1 && fishIndex < 7) {
        fishCounts[fishIndex]++;
      }
      scorePopups.push({
        x: f.x + f.width / 2,
        y: f.y, 
        text: '+10',
        alpha: 1
      });
      // 记录点击坐标
      clickPoints.push({x, y});
    }
  });
  bombs.forEach(b => {
    if (!b.clicked && Math.hypot(x - (b.x + b.width / 2), y - (b.y + b.height / 2)) < b.width / 2) {
      b.clicked = true; score -= 20; hit = true;
    }
  });
  return hit;
}
canvas.addEventListener('mousedown', e => {
  if (gameState !== 'playing') return;
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left, y = e.clientY - rect.top;
  handleClick(x, y);
});
canvas.addEventListener('touchstart', e => {
  if (gameState !== 'playing') return;
  for (let i = 0; i < e.touches.length; i++) {
    const touch = e.touches[i];
    const rect = canvas.getBoundingClientRect();
    const x = touch.clientX - rect.left, y = touch.clientY - rect.top;
    handleClick(x, y);
  }
});
startBtn.onclick = () => {
  gameState = 'menu';
  startGame();
};
settingsBtn.onclick = () => {
  showSettings();
};
startTrainBtn.onclick = () => {
  startGame();
};
cancelBtn.onclick = () => {
  showMenu();
};
backBtn.onclick = () => {
  showMenu();
};
window.onload = () => {
  console.log('页面加载完成，开始初始化游戏...');
  showSettings(); // 默认显示配置页面

  // 初始化游戏循环，用于显示气球和云
  console.log('启动游戏循环...');
  gameTimeout = setTimeout(() => {
    console.log('游戏循环运行中...');
    update();
    draw();
  }, 30);

  // 为时间选项添加点击事件
  timeOptions.addEventListener('click', (e) => {
    if (e.target.classList.contains('radio-btn')) {
      timeOptions.querySelectorAll('.radio-btn').forEach(btn => btn.classList.remove('selected'));
      e.target.classList.add('selected');
    }
  });

  // 为难度选项添加点击事件
  difficultyOptions.addEventListener('click', (e) => {
    if (e.target.classList.contains('radio-btn')) {
      difficultyOptions.querySelectorAll('.radio-btn').forEach(btn => btn.classList.remove('selected'));
      e.target.classList.add('selected');
      // 当选择难度时，更新游戏模式
      const selectedMode = e.target.dataset.value;
      setGameMode(selectedMode);
    }
  });

  // 设置游戏模式
  document.getElementById('easyMode').onclick = () => setGameMode('easy');
  document.getElementById('normalMode').onclick = () => setGameMode('normal');
  document.getElementById('hardMode').onclick = () => setGameMode('hard');
};

// 修改重置游戏函数
function resetGame() {
  score = 0;
  lives = 3;
  gameTime = 0;
  bombs = [];
  balloons = [];
  gameState = 'menu';
  updateScore();
  updateLives();
  updateTimer();
  // 重置气球计时器
  balloonTimer = 0;
  // 重置炸弹生成计时器
  bombTimer = 0;
  clickPoints = [];
}

// 修改显示游戏结束函数
function showGameOver() {
  gameState = 'gameOver';
  if (timerTimeout) {
    clearTimeout(timerTimeout);
    timerTimeout = null;
  }
  startTime = 0;
  scoreText.innerText = `得分: ${score}`;
  showResult();
  const now = new Date();
  const pad = n => n.toString().padStart(2, '0');
  const timeStr = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  const selectedTimeBtn = timeOptions.querySelector('.radio-btn.selected');
  const duration = selectedTimeBtn ? selectedTimeBtn.dataset.value.padStart(2, '0') + ':00' : '01:00';
  const heatmapUrl = generateHeatmap(clickPoints);
  showReportModal({
    name: document.getElementById('userName')?.value || '',
    gender: document.getElementById('userGender')?.value || '',
    age: document.getElementById('userAge')?.value || '',
    id: document.getElementById('userId')?.value || '',
    trainName: '捕鱼能手',
    duration: duration,
    startTime: timeStr,
    score: score,
    image: heatmapUrl
  });
}

// 修改更新计时器显示函数
function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  // 更新画布上的计时器显示
  ctx.fillStyle = 'black';
  ctx.font = '48px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(`剩余时间: ${minutes}:${seconds.toString().padStart(2, '0')}`, canvas.width - 350, 60);
  
  // 如果存在timerDisplay元素，也更新它
  if (timerDisplay) {
    timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
}

function updateBomb(bomb) {
  // 只在vy从负变正时标记一次
  if (!bomb.hasPausedAtTop && bomb.lastVy < 0 && bomb.vy >= 0) {
    bomb.hasPausedAtTop = true;
  }
  bomb.lastVy = bomb.vy;
  bomb.vy += GRAVITY;
  bomb.x += bomb.vx;
  bomb.y += bomb.vy;
  // 如果炸弹飞出屏幕或落回地面，则移除
  if (bomb.y > canvas.height || bomb.y < -bomb.height) {
    const index = bombs.indexOf(bomb);
    if (index > -1) {
      bombs.splice(index, 1);
    }
  }
}

// 生成气球
function spawnBalloon() {
  if (gameState === 'playing') {
    const balloon = {
      x: canvas.width * 0.618, // 使用黄金分割点位置
      y: canvas.height + 50, // 从底部升起
      vy: -1.5, // 降低上升速度到1.5
      clicked: false,
      img: balloon1Img,
      width: 300, // 增加气球宽度到300
      height: 450 // 增加气球高度到450，保持宽高比
    };
    
    balloons.push(balloon);
  }
}

// 更新气球
function updateBalloon(balloon) {
  if (!balloon.clicked) {
    balloon.y += balloon.vy;
    // 如果气球飞出屏幕顶部，重新从底部生成
    if (balloon.y < -balloon.height) {
      // 移除当前气球
      const index = balloons.indexOf(balloon);
      if (index > -1) {
        balloons.splice(index, 1);
      }
      // 生成新的气球
      spawnBalloon();
    }
  }
}

// 设置游戏模式
function setGameMode(mode) {
  gameMode = mode;
  // 根据模式设置炸弹数量
  switch(mode) {
    case 'easy':
      bombCount = 1;
      difficulty = 'easy';
      break;
    case 'normal':
      bombCount = 2;
      difficulty = 'normal';
      break;
    case 'hard':
      bombCount = 3;
      difficulty = 'hard';
      break;
  }
  console.log(`设置游戏模式为: ${mode}, 炸弹数量: ${bombCount}`); // 添加日志
}

function showReportModal(data) {
  document.getElementById('userName').value = data.name || '';
  document.getElementById('userGender').value = data.gender || '';
  document.getElementById('userAge').value = data.age || '';
  document.getElementById('userId').value = data.id || '';
  document.getElementById('trainName').innerText = data.trainName || '捕鱼能手';
  document.getElementById('trainDuration').innerText = data.duration || '01:00';
  document.getElementById('trainStart').innerText = data.startTime || '';
  document.getElementById('trainScore').innerText = data.score || '0';
  document.getElementById('reportImage').src = data.image || 'assets/1.jpg';
  document.getElementById('reportModal').style.display = 'flex';
}
function closeReport() {
  document.getElementById('reportModal').style.display = 'none';
}
function saveReport() { alert('保存成功！'); }
function printReport() { window.print(); }

function generateHeatmap(points) {
  const canvas = document.getElementById('heatmapCanvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  points.forEach(pt => {
    const gradient = ctx.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, 60);
    gradient.addColorStop(0, 'rgba(255,0,0,0.4)');
    gradient.addColorStop(1, 'rgba(255,0,0,0)');
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, 60, 0, 2 * Math.PI);
    ctx.fillStyle = gradient;
    ctx.fill();
  });
  return canvas.toDataURL('image/png');
} 