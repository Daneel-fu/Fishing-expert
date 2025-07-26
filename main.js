// 多语言文本
const i18nText = {
  'zh-CN': {
      score: '分数',
      time: '剩余时间',
      easy: '容易',
      medium: '普通',
      hard: '困难',
      gameName: '捕鱼能手',
      report: '训练报告',
      back: '返回',
      save: '保存',
      print: '打印',
      exit: '退出',
      startTime: '开始时间',
      heatmap: '活动区域热度图',
      gameRules: '准确点击屏幕上飞出海面的鱼即可得分，可以同时点触多条鱼，<br>如果碰到炸弹则会被扣分，注意躲避炸弹获得更高分数。',
      personalInfo: '个人信息',
      trainingInfo: '训练信息',
      imageAnalysis: '图像分析',
      activityHeatmap: '活动区域热力图',
      comments: '意见',
      signature: '签名',
      name: '姓名',
      gender: '性别',
      age: '年龄',
      id: '编号',
      trainingName: '训练名称',
      trainingDuration: '训练时长',
      scoreLabel: '分数',
      // 可继续扩展
  },
  'en-US': {
      score: 'Score',
      time: 'Time Left',
      easy: 'Easy',
      medium: 'Medium',
      hard: 'Hard',
      gameName: 'Fishing Expert',
      report: 'Training Report',
      back: 'Back',
      save: 'Save',
      print: 'Print',
      exit: 'Exit',
      startTime: 'Start Time',
      heatmap: 'Activity Area Heatmap',
      gameRules: 'Click accurately on fish jumping out of the sea to score points. You can click multiple fish at the same time.<br>If you hit a bomb, you will lose points. Avoid bombs to get higher scores.',
      personalInfo: 'Personal Information',
      trainingInfo: 'Training Information',
      imageAnalysis: 'Image Analysis',
      activityHeatmap: 'Activity Area Heatmap',
      comments: 'Comments',
      signature: 'Signature',
      name: 'Name',
      gender: 'Gender',
      age: 'Age',
      id: 'ID',
      trainingName: 'Training Name',
      trainingDuration: 'Training Duration',
      scoreLabel: 'Score',
  },
  'de-DE': {
      score: 'Punkte',
      time: 'Verbleibende Zeit',
      easy: 'Einfach',
      medium: 'Mittel',
      hard: 'Schwer',
      gameName: 'Angelmeister',
      report: 'Trainingsbericht',
      back: 'Zurück',
      save: 'Speichern',
      print: 'Drucken',
      exit: 'Beenden',
      startTime: 'Startzeit',
      heatmap: 'Aktivitätsbereich Heatmap',
      gameRules: 'Klicken Sie genau auf Fische, die aus dem Meer springen, um Punkte zu sammeln. Sie können mehrere Fische gleichzeitig anklicken.<br>Wenn Sie eine Bombe treffen, verlieren Sie Punkte. Vermeiden Sie Bomben, um höhere Punktzahlen zu erzielen.',
      personalInfo: 'Persönliche Informationen',
      trainingInfo: 'Trainingsinformationen',
      imageAnalysis: 'Bildanalyse',
      activityHeatmap: 'Aktivitätsbereich Heatmap',
      comments: 'Kommentare',
      signature: 'Unterschrift',
      name: 'Name',
      gender: 'Geschlecht',
      age: 'Alter',
      id: 'ID',
      trainingName: 'Trainingsname',
      trainingDuration: 'Trainingsdauer',
      scoreLabel: 'Punkte',
  },
  'fr-FR': {
      score: 'Score',
      time: 'Temps restant',
      easy: 'Facile',
      medium: 'Moyen',
      hard: 'Difficile',
      gameName: 'Expert de la pêche',
      report: 'Rapport d\'entraînement',
      back: 'Retour',
      save: 'Enregistrer',
      print: 'Imprimer',
      exit: 'Quitter',
      startTime: 'Heure de début',
      heatmap: 'Carte de chaleur de la zone d\'activité',
      gameRules: 'Cliquez avec précision sur les poissons qui sautent hors de la mer pour marquer des points. Vous pouvez cliquer sur plusieurs poissons en même temps.<br>Si vous touchez une bombe, vous perdrez des points. Évitez les bombes pour obtenir des scores plus élevés.',
      personalInfo: 'Informations personnelles',
      trainingInfo: 'Informations d\'entraînement',
      imageAnalysis: 'Analyse d\'image',
      activityHeatmap: 'Carte de chaleur de la zone d\'activité',
      comments: 'Commentaires',
      signature: 'Signature',
      name: 'Nom',
      gender: 'Genre',
      age: 'Âge',
      id: 'ID',
      trainingName: 'Nom de l\'entraînement',
      trainingDuration: 'Durée de l\'entraînement',
      scoreLabel: 'Score',
  },
  'es-ES': {
      score: 'Puntuación',
      time: 'Tiempo restante',
      easy: 'Fácil',
      medium: 'Medio',
      hard: 'Difícil',
      gameName: 'Experto en pesca',
      report: 'Informe de entrenamiento',
      back: 'Volver',
      save: 'Guardar',
      print: 'Imprimir',
      exit: 'Salir',
      startTime: 'Hora de inicio',
      heatmap: 'Mapa de calor de la zona de actividad',
      gameRules: 'Haz clic con precisión en los peces que saltan fuera del mar para ganar puntos. Puedes hacer clic en múltiples peces al mismo tiempo.<br>Si tocas una bomba, perderás puntos. Evita las bombas para obtener puntuaciones más altas.',
      personalInfo: 'Información personal',
      trainingInfo: 'Información de entrenamiento',
      imageAnalysis: 'Análisis de imagen',
      activityHeatmap: 'Mapa de calor de la zona de actividad',
      comments: 'Comentarios',
      signature: 'Firma',
      name: 'Nombre',
      gender: 'Género',
      age: 'Edad',
      id: 'ID',
      trainingName: 'Nombre del entrenamiento',
      trainingDuration: 'Duración del entrenamiento',
      scoreLabel: 'Puntuación',
  }
};
// ================= 音效管理系统 =================
class SoundManager {
    constructor() {
        this.sounds = {};
        this.isMuted = false;
        this.volume = 0.5; // 直接用平均音量
        this.init();
    }

    init() {
        // 初始化所有音效
        this.loadSounds();
        console.log('[音效] 音效系统初始化完成');
    }

    loadSounds() {
        // 指定不同场景的本地音效
        const soundUrls = {
            fishHit: 'assets/sound/1.mp3',
            bombHit: 'assets/sound/3.mp3',
            gameStart: 'assets/sound/1.mp3', // 可自定义
            gameOver: 'assets/sound/2.mp3', // 可自定义
            buttonClick: 'assets/sound/1.mp3', // 可自定义
            pause: 'assets/sound/1.mp3', // 可自定义
            resume: 'assets/sound/1.mp3', // 可自定义
            scorePopup: 'assets/sound/1.mp3', // 可自定义
            backgroundMusic: 'assets/sound/背景1.mp3'
        };

        // 创建音频对象
        Object.keys(soundUrls).forEach(key => {
            this.sounds[key] = new Audio(soundUrls[key]);
            this.sounds[key].volume = this.volume;
            this.sounds[key].preload = 'auto';
            if (key === 'backgroundMusic') {
                this.sounds[key].loop = true;
            }
            // 错误处理
            this.sounds[key].onerror = () => {
                console.warn(`[音效] 无法加载音效: ${key}`);
            };
            this.sounds[key].onload = () => {
                console.log(`[音效] 音效加载成功: ${key}`);
            };
        });
    }

    play(soundName) {
        if (this.isMuted || !this.sounds[soundName]) {
            return;
        }
        try {
            // 背景音乐只用原对象，其他音效克隆
            if (soundName === 'backgroundMusic') {
                this.sounds.backgroundMusic.volume = this.volume * 0.3;
                this.sounds.backgroundMusic.play().catch(error => {
                    console.warn('[音效] 背景音乐播放失败:', error);
                });
            } else {
                const sound = this.sounds[soundName].cloneNode();
                sound.volume = this.volume;
                sound.play().catch(error => {
                    console.warn(`[音效] 播放失败 ${soundName}:`, error);
                });
            }
        } catch (error) {
            console.warn(`[音效] 播放音效出错 ${soundName}:`, error);
        }
    }

    playBackgroundMusic() {
        if (this.isMuted || !this.sounds.backgroundMusic) {
            return;
        }
        try {
            this.sounds.backgroundMusic.loop = true;
            this.sounds.backgroundMusic.volume = this.volume * 0.3;
            this.sounds.backgroundMusic.play().catch(error => {
                console.warn('[音效] 背景音乐播放失败:', error);
            });
        } catch (error) {
            console.warn('[音效] 背景音乐播放出错:', error);
        }
    }

    pauseBackgroundMusic() {
        if (this.sounds.backgroundMusic) {
            this.sounds.backgroundMusic.pause();
        }
    }

    resumeBackgroundMusic() {
        if (this.sounds.backgroundMusic && !this.isMuted) {
            this.sounds.backgroundMusic.play().catch(error => {
                console.warn('[音效] 背景音乐恢复失败:', error);
            });
        }
    }

    stopBackgroundMusic() {
        if (this.sounds.backgroundMusic) {
            this.sounds.backgroundMusic.pause();
            this.sounds.backgroundMusic.currentTime = 0;
        }
    }

    setVolume(volume) {
        // 彻底禁用外部音量设置，始终为0.5
        this.volume = 0.5;
        Object.values(this.sounds).forEach(sound => {
            if (sound) {
                sound.volume = this.volume;
            }
        });
        console.log(`[音效] 音量固定为: 0.5`);
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        if (this.isMuted) {
            this.stopBackgroundMusic();
        }
        console.log(`[音效] 静音状态: ${this.isMuted}`);
        return this.isMuted;
    }

    isSoundMuted() {
        return this.isMuted;
    }

    getVolume() {
        return this.volume;
    }
}

// 初始化音效管理器
const soundManager = new SoundManager();

// 语言监听控制函数（供外部调用）
window.languageControl = {
    getCurrentLanguage: () => window.currentLang || 'zh-CN',
    getAvailableLanguages: () => Object.keys(i18nText),
    getSupportedLanguages: () => ['zh-CN', 'en-US', 'de-DE', 'fr-FR', 'es-ES'],
    changeLanguage: (newLang) => {
        if (typeof window.onLanguageChange === 'function') {
            window.onLanguageChange(newLang);
        } else {
            console.warn('[语言控制] window.onLanguageChange函数未定义');
        }
    },
    getLanguageInfo: () => {
        const currentLang = window.currentLang || 'zh-CN';
        return {
            currentLanguage: currentLang,
            availableLanguages: Object.keys(i18nText),
            supportedLanguages: ['zh-CN', 'en-US', 'de-DE', 'fr-FR', 'es-ES'],
            textKeys: Object.keys(i18nText[currentLang] || {}),
            isSupported: ['zh-CN', 'en-US', 'de-DE', 'fr-FR', 'es-ES'].includes(currentLang),
            fallbackUsed: !i18nText[currentLang] ? 'en-US' : 'none'
        };
    },
    logLanguageStatus: () => {
        const info = window.languageControl.getLanguageInfo();
        versionManager.log('info', '语言状态查询', {
            ...info,
            timestamp: new Date().toISOString(),
            version: VERSION_CONFIG.currentVersion
        });
        console.log('[语言状态]', info);
        return info;
    },
    testLanguageSwitch: (lang) => {
        console.log(`[语言测试] 开始测试语言切换到: ${lang}`);
        versionManager.log('info', '开始语言切换测试', {
            targetLanguage: lang,
            timestamp: new Date().toISOString(),
            version: VERSION_CONFIG.currentVersion
        });
        
        if (typeof window.onLanguageChange === 'function') {
            window.onLanguageChange(lang);
            setTimeout(() => {
                const currentLang = window.currentLang;
                const pageTitle = document.title;
                const scoreInfo = document.getElementById('scoreInfo')?.textContent;
                const backBtn = document.getElementById('backBtn')?.textContent;
                
                versionManager.log('info', '语言切换测试完成', {
                    targetLanguage: lang,
                    actualLanguage: currentLang,
                    pageTitle: pageTitle,
                    scoreInfo: scoreInfo,
                    backBtn: backBtn,
                    testPassed: currentLang === lang,
                    timestamp: new Date().toISOString(),
                    version: VERSION_CONFIG.currentVersion
                });
                
                console.log(`[语言测试] 测试完成 - 目标: ${lang}, 实际: ${currentLang}, 页面标题: ${pageTitle}`);
            }, 100);
        } else {
            console.warn('[语言测试] window.onLanguageChange函数未定义');
        }
    }
};

// ================= 音效管理系统 END =================

// 版本信息配置
const VERSION_CONFIG = {
    currentVersion: 'v1.2.0',
    buildDate: '2024-12-19',
    buildHash: '#a1b2c3d',
    minRequiredVersion: 'v1.0.0',
    updateCheckUrl: 'https://api.example.com/version-check', // 可选的远程版本检查URL
    logLevel: 'info' // 'debug', 'info', 'warn', 'error'
};

// 版本验证和日志系统
class VersionManager {
    constructor() {
        this.logs = [];
        this.isLatestVersion = false;
        this.versionCheckComplete = false;
        this.init();
    }

    init() {
        this.updateVersionDisplay();
        this.log('info', '版本管理系统初始化完成');
        this.checkVersion();
    }

    log(level, message, data = null) {
        const timestamp = new Date().toLocaleTimeString();
        const logEntry = {
            timestamp,
            level,
            message,
            data
        };
        
        this.logs.push(logEntry);
        this.updateLogDisplay();
        
        // 控制台输出
        const consoleMethod = level === 'error' ? 'error' : 
                             level === 'warn' ? 'warn' : 
                             level === 'debug' ? 'debug' : 'log';
        console[consoleMethod](`[${timestamp}] [${level.toUpperCase()}] ${message}`, data || '');
    }

    updateVersionDisplay() {
        const t = i18nText[window.currentLang] || i18nText['en-US'];
        const currentVersionEl = document.getElementById('currentVersion');
        const buildDateEl = document.getElementById('buildDate');
        const buildHashEl = document.getElementById('buildHash');
        const versionStatusEl = document.getElementById('versionStatus');

        if (currentVersionEl) currentVersionEl.textContent = `${t.currentVersion || '当前版本'}: ${VERSION_CONFIG.currentVersion}`;
        if (buildDateEl) buildDateEl.textContent = `${t.buildDate || '构建日期'}: ${VERSION_CONFIG.buildDate}`;
        if (buildHashEl) buildHashEl.textContent = `${t.buildHash || '构建哈希'}: ${VERSION_CONFIG.buildHash}`;

        // 更新版本状态
        if (versionStatusEl) {
            versionStatusEl.className = 'version-status version-checking';
            versionStatusEl.textContent = t.checking || '检查中...';
        }
    }

    updateLogDisplay() {
        const logContent = document.getElementById('logContent');
        if (!logContent) return;

        // 只显示最近的10条日志
        const recentLogs = this.logs.slice(-10);
        logContent.innerHTML = recentLogs.map(log => 
            `<div style="margin-bottom: 2px; font-size: 10px;">
                <span style="color: #888;">[${log.timestamp}]</span> 
                <span style="color: ${this.getLogColor(log.level)};">[${log.level.toUpperCase()}]</span> 
                ${log.message}
            </div>`
        ).join('');
    }

    getLogColor(level) {
        switch (level) {
            case 'error': return '#ff4444';
            case 'warn': return '#ffaa00';
            case 'info': return '#00ff00';
            case 'debug': return '#888888';
            default: return '#ffffff';
        }
    }

    async checkVersion() {
        this.log('info', '开始版本检查');
        
        try {
            // 模拟版本检查过程
            await this.simulateVersionCheck();
            
            // 实际项目中可以调用远程API检查版本
            // const response = await fetch(VERSION_CONFIG.updateCheckUrl);
            // const latestVersion = await response.json();
            
        } catch (error) {
            this.log('error', '版本检查失败', error.message);
            this.setVersionStatus('error', '检查失败');
        }
    }

    async simulateVersionCheck() {
        // 模拟网络延迟
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // 模拟版本比较逻辑
        const isLatest = Math.random() > 0.3; // 70%概率是最新版本
        
        if (isLatest) {
            this.log('info', '当前版本是最新版本');
            this.setVersionStatus('latest', '最新版本');
        } else {
            this.log('warn', '发现新版本可用');
            this.setVersionStatus('outdated', '需要更新');
        }
        
        this.versionCheckComplete = true;
        this.isLatestVersion = isLatest;
    }

    setVersionStatus(status, text) {
        const versionStatusEl = document.getElementById('versionStatus');
        if (!versionStatusEl) return;

        versionStatusEl.className = `version-status version-${status}`;
        versionStatusEl.textContent = text;
        
        this.log('info', `版本状态更新: ${text}`);
    }

    showLogs() {
        const logElement = document.getElementById('versionLog');
        if (logElement) {
            logElement.style.display = logElement.style.display === 'none' ? 'block' : 'none';
        }
    }

    getVersionInfo() {
        return {
            currentVersion: VERSION_CONFIG.currentVersion,
            buildDate: VERSION_CONFIG.buildDate,
            buildHash: VERSION_CONFIG.buildHash,
            isLatestVersion: this.isLatestVersion,
            versionCheckComplete: this.versionCheckComplete,
            logs: this.logs
        };
    }

    exportLogs() {
        const logData = {
            version: VERSION_CONFIG.currentVersion,
            timestamp: new Date().toISOString(),
            logs: this.logs
        };
        
        const blob = new Blob([JSON.stringify(logData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `version-log-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
        
        this.log('info', '版本日志已导出');
    }
}

// 初始化版本管理器
const versionManager = new VersionManager();

// 添加键盘快捷键显示/隐藏日志
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'l') {
        e.preventDefault();
        versionManager.showLogs();
    }
    if (e.ctrlKey && e.key === 'e') {
        e.preventDefault();
        versionManager.exportLogs();
    }
    // 音效控制快捷键
    if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        const isMuted = soundManager.toggleMute();
        const soundToggle = document.getElementById('soundToggle');
        if (soundToggle) {
            soundToggle.textContent = isMuted ? '🔇' : '🔊';
        }
    }
    if (e.key === 'ArrowUp' && e.ctrlKey) {
        e.preventDefault();
        const currentVolume = soundManager.getVolume();
        const newVolume = Math.min(1, currentVolume + 0.1);
        soundManager.setVolume(newVolume);
        const volumeSlider = document.getElementById('volumeSlider');
        if (volumeSlider) {
            volumeSlider.value = newVolume * 100;
        }
    }
    if (e.key === 'ArrowDown' && e.ctrlKey) {
        e.preventDefault();
        const currentVolume = soundManager.getVolume();
        const newVolume = Math.max(0, currentVolume - 0.1);
        soundManager.setVolume(newVolume);
        const volumeSlider = document.getElementById('volumeSlider');
        if (volumeSlider) {
            volumeSlider.value = newVolume * 100;
        }
    }
    if (e.key === 't' && e.ctrlKey) {
        e.preventDefault();
        soundManager.play('scorePopup');
    }
});

// 全局变量声明
let selectedTrainingTime = 10 * 60000; // 默认10分钟
let currentDifficulty = 'normal'; // 默认难度
const difficulties = {
    easy: 'easy',
    medium: 'normal',
    hard: 'hard'
};
      

      

      

      




const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const result = document.getElementById('result');
const backBtn = document.getElementById('backBtn');
const scoreText = document.getElementById('scoreText');
const timerDisplay = document.getElementById('timerDisplay'); // 添加计时器显示元素的引用

// 游戏常量
const GRAVITY = 0.15; // 减小重力加速度，让运动更缓慢

// 加载鱼图片
const fishImages = [];
for (let i = 1; i <= 7; i++) { // 修改为7种鱼
  const img = new Image();
  img.src = `assets/fish${i}.png`;
  img.onerror = () => console.warn(`鱼图片${i}加载失败: assets/fish${i}.png`);
  fishImages.push(img);
}

// 加载炸弹图片
const bombImg = new Image();
bombImg.src = 'assets/bomb.png';
bombImg.onerror = () => console.warn('炸弹图片加载失败: assets/bomb.png');

// 加载云图片
const cloud1Img = new Image();
cloud1Img.src = 'assets/cloud1.png';
cloud1Img.onerror = () => console.warn('云图片加载失败: assets/cloud1.png');

// 加载气球图片
const balloon1Img = new Image();
balloon1Img.src = 'assets/ballon1.png';
balloon1Img.onload = () => console.log('气球1图片加载成功');
balloon1Img.onerror = () => console.log('气球1图片加载失败');

// 游戏状态变量
let gameState = 'config'; // 'config', 'playing', 'paused', 'gameOver'
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
let bombCounts = 0; // 炸弹数量统计
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
  if (difficulty === 'easy') return 12; // 增加基础速度，让鱼跳得更高
  if (difficulty === 'normal') return 10;
  return 8;
}

// 炸弹的基础速度函数
function getBombBaseSpeed() {
  return 3.0; // 进一步增加炸弹基础速度，让炸弹跳得更高
}

function showConfigModal() {
    const configModal = document.getElementById('configModal');
    if (configModal) {
        configModal.style.display = 'flex';
        gameState = 'config';
    }
}

function hideConfigModal() {
    const configModal = document.getElementById('configModal');
    if (configModal) {
        configModal.style.display = 'none';
    }
}

function getConfigValues() {
    const difficulty = document.getElementById('difficultySelect').value;
    const trainingTime = parseInt(document.getElementById('trainingTimeInput').value) * 60 * 1000; // 转换为毫秒
    
    return {
        difficulty,
        trainingTime
    };
}

function startGameFromConfig() {
    const config = getConfigValues();
    
    // 设置游戏参数
    setGameMode(config.difficulty);
    selectedTrainingTime = config.trainingTime;
    currentDifficulty = config.difficulty; // 确保设置当前难度
    
    // 隐藏配置页面
    hideConfigModal();
    
    // 开始游戏
    startGame();
    
    // 记录配置信息
    versionManager.log('info', '从配置页面开始游戏', {
        difficulty: config.difficulty,
        trainingTime: config.trainingTime
    });
}

function showResult() {
  if (result) result.style.display = 'flex';
}

let spawnTimeouts = [];

function clearSpawnTimeouts() {
  spawnTimeouts.forEach(id => clearTimeout(id));
  spawnTimeouts = [];
}

function spawnRound() {
  if (isSpawning) return;
  isSpawning = true;
  
  const fishCount = 10;
  const currentBombCount = bombCount;
  let spawnedCount = 0;
  let bombGenerated = 0;
  let fishGenerated = 0;
  const total = fishCount + currentBombCount;
  for (let i = 0; i < total; i++) {
    let isBomb = false;
    if (bombGenerated < currentBombCount && (fishGenerated % 2 === 0) && fishGenerated !== 0) {
      isBomb = true;
      bombGenerated++;
    } else if (fishGenerated < fishCount) {
      isBomb = false;
      fishGenerated++;
    } else if (bombGenerated < currentBombCount) {
      isBomb = true;
      bombGenerated++;
    }
    const randomFishImg = isBomb ? bombImg : fishImages[Math.floor(Math.random() * fishImages.length)];
    const baseSpeed = isBomb ? getBombBaseSpeed() : getFishBaseSpeed();
    const initialVy = isBomb ? 
      -(baseSpeed * 3.3 + Math.random() * (baseSpeed * 0.9)) :
      -(baseSpeed + Math.random() * (baseSpeed * 0.2));
    const initialVx = isBomb ? 
      (0.4 + Math.random() * 1.0) :
      (0.2 + Math.random() * 0.4);
    let x;
    let y = canvas.height - 150;
    let width, height;
    if (isBomb) {
      width = 120;
      height = 120;
      const centerStart = canvas.width * 0.3;
      const centerWidth = canvas.width * 0.4;
      const sectionWidth = centerWidth / currentBombCount;
      const section = bombGenerated - 1;
      x = centerStart + section * sectionWidth + Math.random() * (sectionWidth * 0.8);
    } else {
      const fishIndex = fishImages.indexOf(randomFishImg);
      width = fishIndex === 3 ? 180 : 200;
      height = fishIndex === 3 ? 150 : 133;
      const fishIdx = fishGenerated - 1;
      if (fishIdx < 6) {
        const centerStart = canvas.width * 0.3;
        const centerWidth = canvas.width * 0.4;
        const sectionCount = 3;
        const sectionWidth = centerWidth / sectionCount;
        const section = Math.floor(fishIdx / 2);
        x = centerStart + section * sectionWidth + Math.random() * (sectionWidth * 0.8);
      } else if (fishIdx < 8) {
        x = 100 + Math.random() * (canvas.width * 0.2);
      } else {
        x = canvas.width * 0.8 + Math.random() * (canvas.width * 0.2 - 100);
      }
    }
    x = Math.max(100, Math.min(canvas.width - 300, x));

    // 避免鱼完全重合：最多尝试10次
    let tryCount = 0;
    function isOverlap(a, b) {
      return !(
        a.x + a.width < b.x ||
        b.x + b.width < a.x ||
        a.y + a.height < b.y ||
        b.y + b.height < a.y
      );
    }
    while (!isBomb && tryCount < 10) {
      let overlap = false;
      for (let f of fishes) {
        if (isOverlap({x, y, width, height}, f)) {
          overlap = true;
          break;
        }
      }
      if (!overlap) break;
      // 重新随机x
      if (fishGenerated - 1 < 6) {
        const centerStart = canvas.width * 0.3;
        const centerWidth = canvas.width * 0.4;
        const sectionCount = 3;
        const sectionWidth = centerWidth / sectionCount;
        const section = Math.floor((fishGenerated - 1) / 2);
        x = centerStart + section * sectionWidth + Math.random() * (sectionWidth * 0.8);
      } else if (fishGenerated - 1 < 8) {
        x = 100 + Math.random() * (canvas.width * 0.2);
      } else {
        x = canvas.width * 0.8 + Math.random() * (canvas.width * 0.2 - 100);
      }
      x = Math.max(100, Math.min(canvas.width - 300, x));
      tryCount++;
    }

    const baseDelay = isBomb ? 450 : 300;
    const intervalDelay = isBomb ? 120 : 150;
    const randomDelay = Math.floor(Math.random() * 100);
    const delay = baseDelay + (i * intervalDelay) + randomDelay;
    const timeoutId = setTimeout(() => {
      if (isBomb) {
        bombs.push({
          x: x,
          y: y,
          vy: initialVy,
          vx: initialVx,
          clicked: false,
          img: bombImg,
          width: width,
          height: height,
          hasPausedAtTop: false,
          lastVy: initialVy,
          pauseTimer: 0,
          isPaused: false,
          originalVx: initialVx,
          vx: 0
        });
      } else {
        fishes.push({
          x: x,
          y: y,
          vy: initialVy,
          vx: initialVx,
          clicked: false,
          img: randomFishImg,
          width: width,
          height: height,
          rotation: -30,
          rotationSpeed: 1.2,
          maxRotation: 30,
          startRotation: false,
          pauseTimer: 0,
          isPaused: false
        });
      }
      spawnedCount++;
      if (spawnedCount === total) {
        const roundTimeoutId = setTimeout(() => {
          isSpawning = false;
          if (gameState === 'playing') {
            spawnRound();
          }
        }, roundInterval + 2000);
        spawnTimeouts.push(roundTimeoutId);
      }
    }, delay);
    spawnTimeouts.push(timeoutId);
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
  const t = i18nText[window.currentLang] || i18nText['en-US'];
  // 清空画布
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // 使用天蓝色背景
  ctx.fillStyle = '#87CEEB';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // 绘制气球（在背景之后）
  balloons.forEach(balloon => {
    try {
      if (balloon.img && balloon.img.complete && balloon.img.naturalWidth > 0) {
        ctx.drawImage(
          balloon.img,
          balloon.x,
          balloon.y,
          balloon.width,
          balloon.height
        );
      } else {
        // 图片加载失败时画个占位色块
        ctx.fillStyle = 'gray';
        ctx.fillRect(balloon.x, balloon.y, balloon.width, balloon.height);
      }
    } catch (error) {
      // 如果绘制图片失败，使用备用矩形
      ctx.fillStyle = 'gray';
      ctx.fillRect(balloon.x, balloon.y, balloon.width, balloon.height);
    }
  });
  
  // 绘制云朵
  clouds.forEach(cloud => {
    try {
      if (cloud.img && cloud.img.complete && cloud.img.naturalWidth > 0) {
        ctx.drawImage(cloud.img, cloud.x, cloud.y, cloud.width, cloud.height);
      } else {
        // 图片加载失败时画个占位色块
        ctx.fillStyle = 'white';
        ctx.fillRect(cloud.x, cloud.y, cloud.width, cloud.height);
      }
    } catch (error) {
      // 如果绘制图片失败，使用备用矩形
      ctx.fillStyle = 'white';
      ctx.fillRect(cloud.x, cloud.y, cloud.width, cloud.height);
    }
  });

  // 先绘制最底层波浪（最深）
  ctx.fillStyle = '#006994'; // 深蓝色
  ctx.beginPath();
  ctx.moveTo(0, canvas.height - 330 - 15 + 50);
  for (let i = 0; i <= canvas.width; i += 20) {
    const y = canvas.height - 330 - 15 + 50 + Math.sin(i * 0.035) * 25;
    ctx.lineTo(i, y);
  }
  ctx.lineTo(canvas.width, canvas.height - 15 + 50);
  ctx.lineTo(0, canvas.height - 15 + 50);
  ctx.closePath();
  ctx.fill();

  // 第二层（中等深度）
  ctx.fillStyle = '#0099CC'; // 中蓝色
  ctx.beginPath();
  ctx.moveTo(0, canvas.height - 260 - 15 + 50);
  for (let i = 0; i <= canvas.width; i += 20) {
    const y = canvas.height - 260 - 15 + 50 + Math.sin(i * 0.035) * 25;
    ctx.lineTo(i, y);
  }
  ctx.lineTo(canvas.width, canvas.height - 15 + 50);
  ctx.lineTo(0, canvas.height - 15 + 50);
  ctx.closePath();
  ctx.fill();

  // 第三层（较浅）
  ctx.fillStyle = '#00BFFF'; // 浅蓝色
  ctx.beginPath();
  ctx.moveTo(0, canvas.height - 190 - 15 + 50);
  for (let i = 0; i <= canvas.width; i += 20) {
    const y = canvas.height - 190 - 15 + 50 + Math.sin(i * 0.035) * 25;
    ctx.lineTo(i, y);
  }
  ctx.lineTo(canvas.width, canvas.height - 15 + 50);
  ctx.lineTo(0, canvas.height - 15 + 50);
  ctx.closePath();
  ctx.fill();

  // 绘制鱼
  fishes.forEach(f => {
    try {
      if (f.img && f.img.complete && f.img.naturalWidth > 0) {
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
    } catch (error) {
      // 如果绘制图片失败，使用备用矩形
      ctx.fillStyle = 'gold';
      ctx.fillRect(f.x, f.y, f.width, f.height);
    }
  });

  // 画炸弹
  bombs.forEach(b => {
    try {
      if (b.img && b.img.complete && b.img.naturalWidth > 0) {
        ctx.drawImage(b.img, b.x, b.y, b.width, b.height);
      } else {
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(b.x + b.width / 2, b.y + b.height / 2, b.width / 2, 0, 2 * Math.PI);
        ctx.fill();
      }
    } catch (error) {
      // 如果绘制图片失败，使用备用圆形
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.arc(b.x + b.width / 2, b.y + b.height / 2, b.width / 2, 0, 2 * Math.PI);
      ctx.fill();
    }
  });

  // 最后绘制第四层波浪（最浅）
  ctx.fillStyle = '#87CEFA';
  ctx.beginPath();
  ctx.moveTo(0, canvas.height - 120 - 15 + 50);
  for (let i = 0; i <= canvas.width; i += 20) {
    const y = canvas.height - 120 - 15 + 50 + Math.sin(i * 0.035) * 25;
    ctx.lineTo(i, y);
  }
  ctx.lineTo(canvas.width, canvas.height - 15 + 50);
  ctx.lineTo(0, canvas.height - 15 + 50);
  ctx.closePath();
  ctx.fill();

  // 绘制分数提示
  scorePopups.forEach(popup => {
    ctx.save();
    ctx.globalAlpha = popup.alpha;
    ctx.fillStyle = popup.color || 'white'; // 使用popup.color或默认白色
    ctx.font = '24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(popup.text, popup.x, popup.y);
    ctx.restore();
    
    // 播放分数弹出音效（只在第一次显示时播放）
    if (popup.alpha === 1 && !popup.soundPlayed) {
      soundManager.play('scorePopup');
      popup.soundPlayed = true;
    }
  });

  // 绘制分数和时间
  ctx.fillStyle = 'black';
  ctx.font = '48px sans-serif';
  ctx.textAlign = 'left';
   
  // 在右上角绘制炸弹捕获数量
  ctx.font = '24px sans-serif';
  ctx.textAlign = 'right';
  const startX = canvas.width - 20;
  const bombY = 60;
  
  try {
    if (bombImg && bombImg.complete && bombImg.naturalWidth > 0) {
      ctx.drawImage(bombImg, startX - 150, bombY - 20, 40, 40);
    }
  } catch (error) {
    // 如果绘制图片失败，不绘制任何东西
  }
  ctx.fillText(`x${bombCounts}`, startX, bombY);
  
  // 在右上角绘制每种鱼的捕获数量
  ctx.font = '24px sans-serif';
  ctx.textAlign = 'right';
  const startY = 100;
  const lineHeight = 30;
  
  fishCounts.forEach((count, index) => {
    const y = startY + index * lineHeight;
    try {
      if (fishImages[index] && fishImages[index].complete && fishImages[index].naturalWidth > 0) {
        ctx.drawImage(fishImages[index], startX - 150, y - 20, 40, 27);
      }
    } catch (error) {
      // 如果绘制图片失败，不绘制任何东西
    }
    ctx.fillText(`x${count}`, startX, y);
  });
}
function update() {
  // 分数弹窗等动画在暂停时不更新
  if (isPaused) return;
  fishes.forEach(f => {
    // 检查是否达到最高点（vy从负变为正的时刻）
    if (!f.startRotation && f.vy > 0) {
      f.startRotation = true;
      f.isPaused = true; // 开始暂停
      f.pauseTimer = 0; // 重置暂停计时器
    }
    
    // 处理暂停逻辑
    if (f.isPaused) {
      f.pauseTimer += 16; // 假设60fps，每帧约16ms
      if (f.pauseTimer < 100) { // 0.1秒的转动过程
        // 使用缓动函数让旋转更自然
        const progress = f.pauseTimer / 100; // 旋转进度(0-1)
        // 使用更平缓的缓动函数，增加指数让动作更慢
        const easedProgress = (1 - Math.cos(progress * Math.PI)) / 2.5; // 除以2.5让旋转更慢
        f.rotation = -30 + easedProgress * 60; // 从-30度到30度
        
        // 在旋转过程中自然下落
        f.vy += GRAVITY * 0.8; // 使用80%的重力
        f.y += f.vy;
        f.x += f.vx * 0.8;
        return; // 跳过正常的位置更新
      }
      // 暂停结束后，rotation保持30度不变，恢复正常下落速度
      f.rotation = f.maxRotation;
      f.isPaused = false;
    }
    
    // 正常运动更新（非暂停状态）
    f.vy += GRAVITY;
    f.y += f.vy;
    f.x += f.vx;
  });
  bombs.forEach(b => {
    updateBomb(b);
  });

  // 更新云朵位置（只在非暂停状态）
  if (!isPaused) {
    clouds.forEach(cloud => {
      cloud.x += cloud.speed;
      // 当云朵移出屏幕时，从另一侧重新进入
      if (cloud.speed > 0 && cloud.x > canvas.width) {
        cloud.x = -cloud.width;
      } else if (cloud.speed < 0 && cloud.x < -cloud.width) {
        cloud.x = canvas.width;
      }
    });
  }

  // 更新分数提示（暂停时不更新）
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

  // 更新气球位置（只在非暂停状态）
  if (!isPaused) {
    for (let i = balloons.length - 1; i >= 0; i--) {
      updateBalloon(balloons[i]);
    }
  }
}
function gameLoop() {
  if (gameState === 'gameOver') {
    if (!gameOverBalloonEndTime) {
      gameOverBalloonEndTime = Date.now() + 2000;
    }
    // 游戏结束时气球继续运动（不受暂停影响）
    for (let i = balloons.length - 1; i >= 0; i--) {
      updateBalloon(balloons[i]);
    }
    draw();
    if (Date.now() < gameOverBalloonEndTime || balloons.length > 0) {
      gameOverBalloonTimer = requestAnimationFrame(gameLoop);
    } else {
      gameOverBalloonEndTime = 0;
      // 彻底停下
    }
    return;
  }
  if (gameState !== 'playing' || isPaused) return;
  update();
  draw();
  if (balloons.length === 0) {
    spawnBalloon();
  }
  // 新增：自动补充一轮
  if (!isSpawning && fishes.length === 0 && bombs.length === 0) {
    spawnRound();
  }
  requestAnimationFrame(gameLoop);
}
function startGame() {
  // 停止旧的动画循环
  if (window.animationFrameId) {
    cancelAnimationFrame(window.animationFrameId);
  }
  
  isSpawning = false;
  // 隐藏配置页面
  hideConfigModal();
  
  // 记录游戏开始事件
  versionManager.log('info', '游戏开始', {
    gameTime: selectedTrainingTime / 1000,
    difficulty: currentDifficulty,
    version: VERSION_CONFIG.currentVersion
  });

  // 播放游戏开始音效
  soundManager.play('gameStart');
  // 播放背景音乐
  soundManager.playBackgroundMusic();
  // 使用监听器接收的配置参数
  gameTime = selectedTrainingTime / 1000;
  timeLeft = gameTime;
  // 确保难度设置正确
  if (currentDifficulty) {
    setGameMode(currentDifficulty);
  }
  // 重置游戏状态
  score = 0;
  fishes = [];
  bombs = [];
  fishCounts.fill(0);
  bombCounts = 0;
  isSpawning = false;
  isPaused = false;
  gameState = 'playing';
  // 显示游戏界面
  if (result) result.style.display = 'none';
  if (canvas) canvas.style.display = 'block';
  // 启动计时器
  if (timerTimeout) clearTimeout(timerTimeout);
  function updateTimer() {
    if (gameState !== 'playing') return;
    if (isPaused) return;
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
  updateInfoBar();
}
function handleClick(x, y) {
  let hit = false;
  let hitType = null;
  let scoreChange = 0;
  const JUDGE_RADIUS = 50; // 判定半径50像素

  // 收集所有被点中的鱼和炸弹，记录类型和索引
  let hitCandidates = [];
  fishes.forEach((f, idx) => {
    if (!f.clicked && x >= f.x && x <= f.x + f.width && y >= f.y && y <= f.y + f.height) {
      // 计算中心点距离
      const centerX = f.x + f.width/2;
      const centerY = f.y + f.height/2;
      const dx = x - centerX;
      const dy = y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      hitCandidates.push({
        type: 'fish',
        obj: f,
        idx: idx,
        drawOrder: idx, // 鱼先绘制
        distance: distance
      });
    }
  });
  bombs.forEach((b, idx) => {
    if (!b.clicked && x >= b.x && x <= b.x + b.width && y >= b.y && y <= b.y + b.height) {
      const centerX = b.x + b.width/2;
      const centerY = b.y + b.height/2;
      const dx = x - centerX;
      const dy = y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      hitCandidates.push({
        type: 'bomb',
        obj: b,
        idx: idx,
        drawOrder: fishes.length + idx, // 炸弹后绘制
        distance: distance
      });
    }
  });

  // 只处理距离点击点最近且距离小于等于JUDGE_RADIUS的那一条
  if (hitCandidates.length > 0) {
    // 找到距离最近的
    let closest = hitCandidates.reduce((prev, curr) =>
      curr.distance < prev.distance ? curr : prev
    );
    if (closest.distance <= JUDGE_RADIUS) {
      // 如果有多个距离一样，选drawOrder大的（视觉上最上面）
      let topCandidates = hitCandidates.filter(c => c.distance === closest.distance);
      let topObj = topCandidates.reduce((prev, curr) =>
        curr.drawOrder > prev.drawOrder ? curr : prev
      );
      if (topObj.type === 'fish') {
        const f = topObj.obj;
        f.clicked = true;
        score += 10;
        hit = true;
        hitType = 'fish';
        scoreChange = 10;
        const fishIndex = fishImages.indexOf(f.img);
        if (fishIndex !== -1 && fishIndex < 7) {
          fishCounts[fishIndex]++;
        }
        scorePopups.push({
          x: f.x + f.width/2,
          y: f.y,
          text: '+10',
          alpha: 1
        });
        clickPoints.push({x, y});
        soundManager.play('fishHit');
      } else if (topObj.type === 'bomb') {
        const b = topObj.obj;
        b.clicked = true;
        score -= 50;
        hit = true;
        hitType = 'bomb';
        scoreChange = -50;
        bombCounts++;
        scorePopups.push({
          x: b.x + b.width/2,
          y: b.y,
          text: '-50',
          alpha: 1,
          color: 'red'
        });
        soundManager.play('bombHit');
      }
    }
  }

  if (hit) {
    versionManager.log('debug', '点击事件', {
      x: x,
      y: y,
      hitType: hitType,
      scoreChange: scoreChange,
      newScore: score,
      version: VERSION_CONFIG.currentVersion
    });
  }

  updateInfoBar();
  return hit;
}

let lastTouchTime = 0;
function handleClickWithLock(x, y) {
  const now = Date.now();
  if (now - lastTouchTime < 150) return; // 150ms内只处理一次
  lastTouchTime = now;
  handleClick(x, y);
}

let lastClickPos = {x: null, y: null, time: 0};
function handleClickWithDedup(x, y) {
  const now = Date.now();
  if (lastClickPos.x === x && lastClickPos.y === y && now - lastClickPos.time < 100) return;
  lastClickPos = {x, y, time: now};
  handleClick(x, y);
}

let clickPointsThisFrame = [];
function isNearAnyPoint(x, y, points, radius = 10) {
  return points.some(pt => {
    const dx = pt.x - x;
    const dy = pt.y - y;
    return dx * dx + dy * dy <= radius * radius;
  });
}
function handleClickWithAreaDedup(x, y) {
  if (isNearAnyPoint(x, y, clickPointsThisFrame, 50)) return;
  clickPointsThisFrame.push({x, y});
  handleClick(x, y);
}
function clearClickPointsThisFrame() {
  clickPointsThisFrame = [];
  requestAnimationFrame(clearClickPointsThisFrame);
}
clearClickPointsThisFrame();

const CLICK_DEDUP_RADIUS = 50;
const CLICK_DEDUP_FRAMES = 3; // 3帧内同一位置只消失一条
let clickPointsHistory = Array.from({length: CLICK_DEDUP_FRAMES}, () => []);

function isNearAnyPoint(x, y, points, radius = CLICK_DEDUP_RADIUS) {
  return points.some(pt => {
    const dx = pt.x - x;
    const dy = pt.y - y;
    return dx * dx + dy * dy <= radius * radius;
  });
}

function handleClickWithMultiFrameDedup(x, y) {
  // 检查最近N帧内是否已处理过
  for (let i = 0; i < clickPointsHistory.length; i++) {
    if (isNearAnyPoint(x, y, clickPointsHistory[i], CLICK_DEDUP_RADIUS)) return;
  }
  // 记录到本帧
  clickPointsHistory[clickPointsHistory.length - 1].push({x, y});
  handleClick(x, y);
}

// 每帧推进历史
function advanceClickPointsHistory() {
  clickPointsHistory.shift();
  clickPointsHistory.push([]);
  requestAnimationFrame(advanceClickPointsHistory);
}
advanceClickPointsHistory();

canvas.addEventListener('mousedown', e => {
  if (gameState !== 'playing') return;
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const x = (e.clientX - rect.left) * scaleX;
  const y = (e.clientY - rect.top) * scaleY;
  handleClickWithMultiFrameDedup(x, y);
});
canvas.addEventListener('touchend', e => {
  if (gameState !== 'playing') return;
  for (let i = 0; i < e.changedTouches.length; i++) {
    const touch = e.changedTouches[i];
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (touch.clientX - rect.left) * scaleX;
    const y = (touch.clientY - rect.top) * scaleY;
    handleClickWithMultiFrameDedup(x, y);
  }
});

window.onload = () => {
  // 记录页面加载完成事件
  versionManager.log('info', '页面加载完成', {
    userAgent: navigator.userAgent,
    screenSize: `${screen.width}x${screen.height}`,
    version: VERSION_CONFIG.currentVersion,
    buildDate: VERSION_CONFIG.buildDate
  });

  console.log('页面加载完成，等待配置参数...');
  // 初始化游戏循环，用于显示气球和云
  gameTimeout = setTimeout(() => {
    update();
    draw();
  }, 30);
};

// 修改重置游戏函数
function resetGame() {
  // 停止所有定时器和动画帧
  if (window.timerTimeout) {
    clearTimeout(window.timerTimeout);
    window.timerTimeout = null;
  }
  if (window.spawnTimeouts && Array.isArray(window.spawnTimeouts)) {
    window.spawnTimeouts.forEach(id => clearTimeout(id));
    window.spawnTimeouts = [];
  }
  if (window.animationFrameId) {
    cancelAnimationFrame(window.animationFrameId);
    window.animationFrameId = null;
  }

  // 清空所有全局变量和数组
  score = 0;
  lives = 3;
  gameTime = 0;
  timeLeft = 0;
  fishes = [];
  bombs = [];
  balloons = [];
  fishCounts = Array(7).fill(0);
  bombCounts = 0;
  clickPoints = [];
  isPaused = false;
  isSpawning = false;
  gameState = 'config';
  roundInterval = 3000;
  balloonTimer = 0;
  bombTimer = 0;
  startTime = 0;
  selectedTrainingTime = 10 * 60000;
  currentDifficulty = 'normal';

  // 清空Canvas
  if (typeof ctx !== 'undefined' && ctx && typeof canvas !== 'undefined' && canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  // 隐藏所有弹窗
  const modals = document.querySelectorAll('.modal, #gameOverModal, #pauseModal, #ruleModal, #result, #reportModal');
  modals.forEach(m => m.style.display = 'none');
  // 移除动态创建的gameOverModal
  const gameOverModal = document.getElementById('gameOverModal');
  if (gameOverModal) gameOverModal.remove();

  // 恢复初始界面
  showConfigModal();
  if (typeof updateInfoBar === 'function') updateInfoBar();

  // 重新启动主循环
  if (typeof gameLoop === 'function') {
    window.animationFrameId = requestAnimationFrame(gameLoop);
  }
}

// 修改显示游戏结束函数
function showGameOver() {
  // 记录游戏结束详细信息
  versionManager.log('info', '显示游戏结束界面', {
    score: score,
    clickPoints: clickPoints.length,
    version: VERSION_CONFIG.currentVersion,
    buildHash: VERSION_CONFIG.buildHash
  });

  // 播放游戏结束音效
  soundManager.play('gameOver');
  
  // 停止背景音乐
  soundManager.stopBackgroundMusic();

  gameState = 'gameOver';
  if (timerTimeout) {
    clearTimeout(timerTimeout);
    timerTimeout = null;
  }
  startTime = 0;
  
  const now = new Date();
  const pad = n => n.toString().padStart(2, '0');
  const timeStr = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  
  // 使用监听器接收的时间配置
  const durationMinutes = Math.floor(selectedTrainingTime / 60000);
  const duration = durationMinutes.toString().padStart(2, '0') + ':00';
  const heatmapUrl = generateHeatmap(clickPoints);
  


  // 显示游戏结束界面
  showGameOverModal();
  updateInfoBar();
}

function showGameOverModal() {
  // 创建游戏结束弹窗
  const gameOverModal = document.createElement('div');
  gameOverModal.id = 'gameOverModal';
  gameOverModal.style.cssText = `
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 6000;
  `;
  
  const gameOverContent = document.createElement('div');
  gameOverContent.style.cssText = `
    background: #f8f6f2;
    border-radius: 12px;
    width: 500px;
    padding: 40px;
    text-align: center;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  `;
  
  gameOverContent.innerHTML = `
    <h2 style="color: #333; margin-bottom: 20px;">游戏结束</h2>
    <p style="font-size: 1.2rem; color: #555; margin-bottom: 30px;">最终得分: <span style="color: #0099ff; font-weight: bold;">${score}</span></p>
    <button id="restartGameBtn" style="
      padding: 12px 30px;
      background: #0099ff;
      color: #fff;
      border: none;
      border-radius: 8px;
      font-size: 1.1rem;
      cursor: pointer;
      margin-right: 15px;
    ">重新开始</button>
    <button id="exitGameBtn" style="
      padding: 12px 30px;
      background: #666;
      color: #fff;
      border: none;
      border-radius: 8px;
      font-size: 1.1rem;
      cursor: pointer;
    ">退出游戏</button>
  `;
  
  gameOverModal.appendChild(gameOverContent);
  document.body.appendChild(gameOverModal);
  
  // 绑定按钮事件
  document.getElementById('restartGameBtn').addEventListener('click', function() {
    // 播放按钮点击音效
    soundManager.play('buttonClick');
    
    // 移除游戏结束弹窗
    document.body.removeChild(gameOverModal);
    
    // 清理所有定时器
    if (timerTimeout) {
      clearTimeout(timerTimeout);
      timerTimeout = null;
    }
    clearSpawnTimeouts();
    
    // 停止背景音乐
    soundManager.stopBackgroundMusic();
    
    // 重置游戏状态
    isPaused = false;
    gameState = 'config';
    
    // 显示配置页面重新开始
    showConfigModal();
    
    // 记录重新开始操作
    versionManager.log('info', '用户从游戏结束界面重新开始', {
      previousScore: score,
      timeLeft: timeLeft,
      timestamp: new Date().toISOString(),
      version: VERSION_CONFIG.currentVersion
    });
  });
  
  document.getElementById('exitGameBtn').addEventListener('click', function() {
    // 播放按钮点击音效
    soundManager.play('buttonClick');
    
    // 移除游戏结束弹窗
    document.body.removeChild(gameOverModal);
    
    // 清理所有定时器
    if (timerTimeout) {
      clearTimeout(timerTimeout);
      timerTimeout = null;
    }
    clearSpawnTimeouts();
    
    // 停止背景音乐
    soundManager.stopBackgroundMusic();
    
    // 记录退出操作
    versionManager.log('info', '用户从游戏结束界面退出游戏', {
      finalScore: score,
      timestamp: new Date().toISOString(),
      version: VERSION_CONFIG.currentVersion
    });
    
    // 尝试多种方式关闭窗口
    try {
      // 方法1: 尝试关闭当前窗口
      if (window.opener) {
        window.close();
      } else {
        // 方法2: 如果没有opener，尝试使用location.href
        window.location.href = 'about:blank';
      }
      
      // 方法3: 延迟后强制关闭
      setTimeout(() => {
        window.close();
        // 如果还是无法关闭，显示提示
        if (!window.closed) {
          alert('请手动关闭此窗口');
        }
      }, 100);
      
    } catch (error) {
      console.warn('关闭窗口失败:', error);
      // 最后的备选方案
      window.location.href = 'about:blank';
    }
  });
}

// 修改更新计时器显示函数
function updateTimerDisplay() {
  const t = i18nText[window.currentLang] || i18nText['en-US'];
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  // 只更新canvas上的计时器显示，不再更新timerDisplay元素
  ctx.fillStyle = 'black';
  ctx.font = '48px sans-serif';
  ctx.textAlign = 'left';
  
  updateInfoBar();
}

function updateBomb(bomb) {
  // 检查是否达到最高点（vy从负变为正的时刻）
  if (!bomb.hasPausedAtTop && bomb.lastVy < 0 && bomb.vy >= 0) {
    bomb.hasPausedAtTop = true;
    bomb.isPaused = true; // 开始暂停
    bomb.pauseTimer = 0; // 重置暂停计时器
    bomb.originalVx = bomb.vx; // 保存原始水平速度
    bomb.vx = 0; // 在最高点时取消水平速度
  }
  
  // 处理暂停逻辑
  if (bomb.isPaused) {
    bomb.pauseTimer += 16; // 假设60fps，每帧约16ms
    if (bomb.pauseTimer >= 100) { // 0.1秒 = 100ms
      bomb.isPaused = false; // 结束暂停
      bomb.vx = bomb.originalVx; // 恢复原始水平速度
    } else {
      // 暂停期间只有垂直运动，没有水平运动
      bomb.vy += GRAVITY * 0.8;
      bomb.y += bomb.vy;
      return; // 暂停期间跳过其他位置更新
    }
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
      img: balloon1Img,
      width: 300, // 增加气球宽度到300
      height: 450 // 增加气球高度到450，保持宽高比
    };
    
    balloons.push(balloon);
  }
}

// 更新气球
function updateBalloon(balloon) {
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

// 设置游戏模式
function setGameMode(mode) {
  gameMode = mode;
  // 根据模式设置炸弹数量和每轮间隔
  switch(mode) {
    case 'easy':
      bombCount = 1;
      difficulty = 'easy';
      roundInterval = 3500;
      break;
    case 'normal':
      bombCount = 2;
      difficulty = 'normal';
      roundInterval = 2500;
      break;
    case 'hard':
      bombCount = 3;
      difficulty = 'hard';
      roundInterval = 1500;
      break;
  }
  console.log(`设置游戏模式为: ${mode}, 炸弹数量: ${bombCount}, 每轮间隔: ${roundInterval}ms`); // 添加日志
}

function showReportModal(data) {
  const t = i18nText[window.currentLang] || i18nText['en-US'];
  document.getElementById('userName').value = data.name || '';
  document.getElementById('userGender').value = data.gender || '';
  document.getElementById('userAge').value = data.age || '';
  document.getElementById('userId').value = data.id || '';
  document.getElementById('trainName').innerText = t.gameName;
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

// 初始化函数，显示主菜单
function init() {
    showConfigModal();
}

// 生成符合后端要求的数据格式


// 获取难度文本
function getDifficultyText(difficulty) {
    switch(difficulty) {
        case 'easy': return '简单';
        case 'normal': return '普通';
        case 'hard': return '困难';
        default: return '普通';
    }
}

// 生成KDE+高斯模糊热力图数据，分辨率映射+归一化到0~7，输出三元组
function generateHeatmapData(points) {
    const t = i18nText[window.currentLang] || i18nText['en-US'];
    const gridWidth = 320;
    const gridHeight = 180;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // 1. 分辨率映射
    const scaleX = gridWidth / canvasWidth;
    const scaleY = gridHeight / canvasHeight;
    const mappedPoints = points.map(p => ({
        x: p.x * scaleX,
        y: (canvasHeight - p.y) * scaleY // 修正y轴方向
    }));

    // 2. KDE+高斯模糊
    function applyKernelDensityEstimation(positions, width, height) {
        const grid = Array(width).fill(0).map(() => Array(height).fill(0));
        const kernelRadius = 10;
        const kernelRadiusSq = kernelRadius * kernelRadius;
        const gaussianKernel = (distanceSq) => Math.exp(-distanceSq / (2 * kernelRadiusSq));
        for (const pos of positions) {
            const minX = Math.max(0, Math.floor(pos.x - kernelRadius));
            const maxX = Math.min(width - 1, Math.ceil(pos.x + kernelRadius));
            const minY = Math.max(0, Math.floor(pos.y - kernelRadius));
            const maxY = Math.min(height - 1, Math.ceil(pos.y + kernelRadius));
            for (let x = minX; x <= maxX; x++) {
                for (let y = minY; y <= maxY; y++) {
                    const dx = x - pos.x;
                    const dy = y - pos.y;
                    const distanceSq = dx * dx + dy * dy;
                    if (distanceSq <= kernelRadiusSq) {
                        grid[x][y] += gaussianKernel(distanceSq);
                    }
                }
            }
        }
        return applySeparableGaussianBlur(grid, 5);
    }

    function applySeparableGaussianBlur(grid, kernelSize) {
        const width = grid.length;
        const height = grid[0].length;
        const tempGrid = Array(width).fill(0).map(() => Array(height).fill(0));
        const kernel = createGaussianKernel(kernelSize);
        const radius = Math.floor(kernelSize / 2);
        // 水平模糊
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                let sum = 0;
                let weightSum = 0;
                for (let i = -radius; i <= radius; i++) {
                    const nx = x + i;
                    if (nx >= 0 && nx < width) {
                        const weight = kernel[i + radius];
                        sum += grid[nx][y] * weight;
                        weightSum += weight;
                    }
                }
                tempGrid[x][y] = sum / weightSum;
            }
        }
        // 垂直模糊
        const resultGrid = Array(width).fill(0).map(() => Array(height).fill(0));
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                let sum = 0;
                let weightSum = 0;
                for (let j = -radius; j <= radius; j++) {
                    const ny = y + j;
                    if (ny >= 0 && ny < height) {
                        const weight = kernel[j + radius];
                        sum += tempGrid[x][ny] * weight;
                        weightSum += weight;
                    }
                }
                resultGrid[x][y] = sum / weightSum;
            }
        }
        return resultGrid;
    }

    function createGaussianKernel(size) {
        const kernel = [];
        const radius = Math.floor(size / 2);
        let sum = 0;
        const sigma = radius / 2;
        const twoSigmaSq = 2 * sigma * sigma;
        for (let i = -radius; i <= radius; i++) {
            const value = Math.exp(-(i * i) / twoSigmaSq);
            kernel.push(value);
            sum += value;
        }
        return kernel.map(v => v / sum);
    }

    // 处理无数据情况
    if (!points || points.length === 0) {
        let data = [];
        for (let x = 0; x < gridWidth; x++) {
            for (let y = 0; y < gridHeight; y++) {
                data.push([x, y, 0]);
            }
        }
        return {
            type: 'heatmap',
            name: t.heatmap,
            data
        };
    }

    const smoothedGrid = applyKernelDensityEstimation(mappedPoints, gridWidth, gridHeight);

    // 3. 归一化到0~7
    let maxDensity = 0;
    for (let x = 0; x < gridWidth; x++) {
        for (let y = 0; y < gridHeight; y++) {
            if (smoothedGrid[x][y] > maxDensity) {
                maxDensity = smoothedGrid[x][y];
            }
        }
    }

    // 4. 打包三元组
    let data = [];
    for (let x = 0; x < gridWidth; x++) {
        for (let y = 0; y < gridHeight; y++) {
            const normalizedValue = (maxDensity > 0 ? smoothedGrid[x][y] / maxDensity : 0) * 7;
            data.push([x, y, normalizedValue]);
        }
    }

    return {
        type: 'heatmap',
        name: t.heatmap,
        data
    };
}

// 上传数据到后端




// 初始化游戏
init();

// 在分数和时间变化的地方，添加：
function updateInfoBar() {
  const t = i18nText[window.currentLang] || i18nText['en-US'];
  const scoreInfo = document.getElementById('scoreInfo');
  const timerInfo = document.getElementById('timerInfo');
  if (scoreInfo) scoreInfo.textContent = `${t.score}：${score}`;
  if (timerInfo) {
    // 以selectedTrainingTime为总时长，timeLeft为剩余秒数
    const min = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const sec = (timeLeft % 60).toString().padStart(2, '0');
    timerInfo.textContent = `${t.time}：${min}:${sec}`;
  }
}
// 在分数变化（如加分、扣分、resetGame、startGame等）和倒计时变化（updateTimerDisplay）处调用updateInfoBar() 

// 1. 定义暂停UI控制函数
function setPauseUI(show) {
  const pauseModal = document.getElementById('pauseModal');
  if (pauseModal) pauseModal.style.display = show ? 'flex' : 'none';
}

// 2. 绑定暂停按钮和暂停界面按钮事件

document.addEventListener('DOMContentLoaded', function() {
  console.log('[调试] DOMContentLoaded 事件已触发');
  const stopBtn = document.getElementById('stopBtn');
  console.log('[调试] stopBtn:', stopBtn);
  if (stopBtn) {
    stopBtn.onclick = function() {
      soundManager.play('pause');
      isPaused = true;
      if (timerTimeout) {
        clearTimeout(timerTimeout);
        timerTimeout = null;
      }
      clearSpawnTimeouts(); // 新增
      document.getElementById('pauseModal').style.display = 'flex';
      soundManager.pauseBackgroundMusic(); // 暂停背景音乐
    };
    console.log('[调试] stopBtn 事件绑定完成');
  }
  // 继续按钮
  const resumeBtn = document.getElementById('resumeBtn');
  if (resumeBtn) {
    resumeBtn.onclick = function() {
      soundManager.play('resume');
      isPaused = false;
      document.getElementById('pauseModal').style.display = 'none';
      if (timerTimeout === null && timeLeft > 0 && gameState === 'playing') {
        function updateTimer() {
          if (gameState !== 'playing' || isPaused) return;
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
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      draw();
      requestAnimationFrame(gameLoop);
      soundManager.resumeBackgroundMusic();
      isSpawning = false; // 只保留这句
      // spawnRound();  // 这一句删掉
    };
  }

  // 重做按钮
  const restartBtn = document.getElementById('restartBtn');
  if (restartBtn) {
    restartBtn.onclick = function() {
      // 播放按钮点击音效
      soundManager.play('buttonClick');
      
      // 清理所有定时器
      if (timerTimeout) {
        clearTimeout(timerTimeout);
        timerTimeout = null;
      }
      clearSpawnTimeouts();
      
      // 停止背景音乐
      soundManager.stopBackgroundMusic();
      
      // 隐藏暂停弹窗
      const pauseModal = document.getElementById('pauseModal');
      if (pauseModal) pauseModal.style.display = 'none';
      
      // 重置游戏状态
      isPaused = false;
      gameState = 'config';
      
      // 显示配置页面重新开始
      showConfigModal();
      
      // 记录重做操作
      versionManager.log('info', '用户点击重做按钮', {
        previousGameState: gameState,
        timeLeft: timeLeft,
        score: score,
        timestamp: new Date().toISOString(),
        version: VERSION_CONFIG.currentVersion
      });
    };
  }

  // 退出按钮
  const exitBtn = document.getElementById('exitBtn');
  if (exitBtn) {
    exitBtn.onclick = function() {
      // 播放按钮点击音效
      soundManager.play('buttonClick');
      
      // 1. 隐藏暂停弹窗
      const pauseModal = document.getElementById('pauseModal');
      if (pauseModal) pauseModal.style.display = 'none';
      
      // 清理所有定时器
      if (timerTimeout) {
        clearTimeout(timerTimeout);
        timerTimeout = null;
      }
      clearSpawnTimeouts();
      
      // 停止背景音乐
      soundManager.stopBackgroundMusic();
      
      // 记录退出操作
      versionManager.log('info', '用户从暂停界面退出游戏', {
        currentScore: score,
        timeLeft: timeLeft,
        timestamp: new Date().toISOString(),
        version: VERSION_CONFIG.currentVersion
      });
      
      // 尝试多种方式关闭窗口
      try {
        // 方法1: 尝试关闭当前窗口
        if (window.opener) {
          window.close();
        } else {
          // 方法2: 如果没有opener，尝试使用location.href
          window.location.href = 'about:blank';
        }
        
        // 方法3: 延迟后强制关闭
        setTimeout(() => {
          window.close();
          // 如果还是无法关闭，显示提示
          if (!window.closed) {
            alert('请手动关闭此窗口');
          }
        }, 100);
        
      } catch (error) {
        console.warn('关闭窗口失败:', error);
        // 最后的备选方案
        window.location.href = 'about:blank';
      }
    };
  }



  // 规则说明按钮
  const explainBtn = document.getElementById('explainBtn');
  if (explainBtn) {
    explainBtn.onclick = function() {
      // 播放按钮点击音效
      soundManager.play('buttonClick');
      // 暂停游戏状态
      isPaused = true;
      // 暂停计时器
      if (timerTimeout) {
        clearTimeout(timerTimeout);
        timerTimeout = null;
      }
      clearSpawnTimeouts(); // 新增
      // 暂停背景音乐
      soundManager.pauseBackgroundMusic();
      // 显示规则弹窗
      document.getElementById('ruleModal').style.display = 'flex';
      // 记录规则弹窗打开日志
      versionManager.log('info', '规则弹窗已打开，游戏已暂停', {
        currentGameState: gameState,
        timeLeft: timeLeft,
        isPaused: isPaused,
        timerActive: !!timerTimeout,
        backgroundMusic: !soundManager.isSoundMuted(),
        timestamp: new Date().toISOString(),
        version: VERSION_CONFIG.currentVersion
      });
    };
  }
  // 规则弹窗返回按钮
  const ruleBackBtn = document.getElementById('ruleBackBtn');
  if (ruleBackBtn) {
    ruleBackBtn.onclick = function() {
      soundManager.play('buttonClick');
      document.getElementById('ruleModal').style.display = 'none';
      // 恢复游戏状态
      isPaused = false;
      versionManager.log('info', '规则弹窗已关闭，恢复游戏', {
        currentGameState: gameState,
        timeLeft: timeLeft,
        isPaused: isPaused,

        timestamp: new Date().toISOString(),
        version: VERSION_CONFIG.currentVersion
      });
      if (gameState === 'playing' && timeLeft > 0) {
        if (timerTimeout === null) {
          function updateTimer() {
            if (gameState !== 'playing' || isPaused) return;
            timeLeft--;
            updateTimerDisplay();
            updateInfoBar();
            if (timeLeft > 0) {
              timerTimeout = setTimeout(updateTimer, 1000);
            } else {
              gameState = 'gameOver';
              showGameOver();
            }
          }
          timerTimeout = setTimeout(updateTimer, 1000);
          versionManager.log('info', '计时器已恢复', {
            timeLeft: timeLeft,
            timerTimeout: !!timerTimeout,
            timestamp: new Date().toISOString(),
            version: VERSION_CONFIG.currentVersion
          });
        }
        soundManager.resumeBackgroundMusic();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        draw();
       
        isSpawning = false; // 修复：重置isSpawning，保证能自动生成下一轮
        requestAnimationFrame(gameLoop);
        versionManager.log('info', '游戏已恢复运行', {
          gameState: gameState,
          timeLeft: timeLeft,
          timerActive: !!timerTimeout,
          backgroundMusic: !soundManager.isSoundMuted(),
          gameLoopRestarted: true,
          timestamp: new Date().toISOString(),
          version: VERSION_CONFIG.currentVersion
        });
        updateTimerDisplay();
        updateInfoBar();
        // 不主动spawnRound，由gameLoop自动判断
      } else {
        versionManager.log('warn', '游戏状态不符合恢复条件', {
          gameState: gameState,
          timeLeft: timeLeft,
          isPaused: isPaused,
          timestamp: new Date().toISOString(),
          version: VERSION_CONFIG.currentVersion
        });
      }
    };
  }

  // 为所有按钮添加音效
  const allButtons = document.querySelectorAll('button, .btn, [role="button"]');
  allButtons.forEach(button => {
    if (!button.onclick) { // 只为没有绑定onclick的按钮添加音效
      button.addEventListener('click', function() {
        soundManager.play('buttonClick');
      });
    }
  });

  // 音效控制
  const soundToggle = document.getElementById('soundToggle');
  const volumeSlider = document.getElementById('volumeSlider');
  
  if (soundToggle) {
    soundToggle.onclick = function() {
      const isMuted = soundManager.toggleMute();
      soundToggle.textContent = isMuted ? '🔇' : '🔊';
    };
  }
  
  if (volumeSlider) {
    volumeSlider.oninput = function() {
      const volume = this.value / 100;
      soundManager.setVolume(volume);
    };
  }

  // ...其它按钮绑定...
}); 

window.addEventListener('DOMContentLoaded', function() {
  var pauseModal = document.getElementById('pauseModal');
  if (pauseModal) pauseModal.style.display = 'none';
  var ruleModal = document.getElementById('ruleModal');
  if (ruleModal) ruleModal.style.display = 'none';
  // 只移动规则弹窗里的文字和返回按钮整体上移40像素
  var ruleText = document.querySelector('#ruleModal div[style*="font-size:1.3rem"]');
  var ruleBackBtn = document.getElementById('ruleBackBtn');
  if (ruleText && ruleBackBtn) {
    // 创建一个包裹div
    var wrapper = document.createElement('div');
    wrapper.style.position = 'relative';
    wrapper.style.top = '-40px';
    // 插入到ruleText前面
    ruleText.parentNode.insertBefore(wrapper, ruleText);
    // 把文字和按钮都移到wrapper里
    wrapper.appendChild(ruleText);
    wrapper.appendChild(ruleBackBtn);
  }
  
  // 绑定配置页面事件
  const startGameBtn = document.getElementById('startGameBtn');
  if (startGameBtn) {
    startGameBtn.addEventListener('click', startGameFromConfig);
  }
  
  // 为配置页面的输入框添加回车键支持
  const configInputs = document.querySelectorAll('#configModal input, #configModal select');
  configInputs.forEach(input => {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        startGameFromConfig();
      }
    });
  });
});

let gameOverBalloonTimer = null;
let gameOverBalloonEndTime = 0;

// 只保留x和y都为偶数，x、y为编号，value归一化
function convertHeatmapToGridAndNormalize(data) {
  const filtered = data.filter(([x, y, value]) => y % 2 === 0 && x % 2 === 0);
  const maxValue = Math.max(...filtered.map(item => item[2]));
  return filtered.map(([x, y, value]) => {
    let norm = value / (maxValue || 1);
    norm = Math.pow(norm, 0.7); // 如需更云雾可保留，否则直接用norm
    return [x, y, norm];
  });
}
 