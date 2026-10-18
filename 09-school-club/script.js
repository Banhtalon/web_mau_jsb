// ==========================================================================
// MINDX DEV DOJO - INTERACTIVE JAVASCRIPT ENGINE
// Features: Daily Terminal Sandbox, Skill Tree Visualizer, Live Canvas Game,
// Pomodoro Timer, Upvotes & Gamification State
// ==========================================================================

// --- State Management ---
const DojoState = {
  xp: parseInt(localStorage.getItem('mindx_xp') || '3420', 10),
  streak: parseInt(localStorage.getItem('mindx_streak') || '12', 10),
  level: parseInt(localStorage.getItem('mindx_level') || '14', 10),
  upvotes: parseInt(localStorage.getItem('mindx_showcase_upvotes') || '142', 10),
  hasUpvoted: localStorage.getItem('mindx_has_upvoted') === 'true',
  completedQuests: JSON.parse(localStorage.getItem('mindx_completed_quests') || '[]'),

  save() {
    localStorage.setItem('mindx_xp', this.xp);
    localStorage.setItem('mindx_streak', this.streak);
    localStorage.setItem('mindx_level', this.level);
    localStorage.setItem('mindx_showcase_upvotes', this.upvotes);
    localStorage.setItem('mindx_has_upvoted', this.hasUpvoted);
    localStorage.setItem('mindx_completed_quests', JSON.stringify(this.completedQuests));
    this.updateUI();
  },

  updateUI() {
    const xpEl = document.getElementById('userXpDisplay');
    const streakEl = document.getElementById('userStreakDisplay');
    const rankEl = document.getElementById('userRankDisplay');
    const upvoteEl = document.getElementById('upvoteCount');

    if (xpEl) xpEl.textContent = `⚡ ${this.xp.toLocaleString()} XP`;
    if (streakEl) streakEl.textContent = `🔥 ${this.streak} Ngày`;
    if (rankEl) {
      if (this.xp >= 5000) rankEl.textContent = 'LV.20 Master Architect';
      else if (this.xp >= 4000) rankEl.textContent = 'LV.16 Code Ninja';
      else rankEl.textContent = `LV.${this.level} Apprentice Mage`;
    }
    if (upvoteEl) upvoteEl.textContent = this.upvotes;
  }
};

// --- Web Audio FX (Synthesizer, no external audio files required) ---
const SoundFX = {
  ctx: null,
  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  },
  playSuccess() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, this.ctx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(783.99, this.ctx.currentTime + 0.15); // G5
      osc.frequency.exponentialRampToValueAtTime(1046.50, this.ctx.currentTime + 0.3); // C6
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.4);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.45);
    } catch (e) {}
  },
  playError() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(140, this.ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.25);
    } catch (e) {}
  }
};

// --- Daily Terminal Challenges Database ---
const Challenges = {
  day142: {
    title: '~/daily-quest/day-142.js',
    desc: '<strong>Nhiệm vụ #142:</strong> Hoàn thiện hàm <code>reverseWords(str)</code> đảo ngược từng từ trong câu mà vẫn giữ nguyên thứ tự các từ.',
    starter: `function reverseWords(str) {\n  // Viết logic đảo ngược từng từ tại đây\n  return str.split(' ').map(w => w.split('').reverse().join('')).join(' ');\n}`,
    fnName: 'reverseWords',
    hint: 'Gợi ý: Dùng `str.split(" ")` tách các từ, duyệt qua từng từ bằng `map` rồi đảo ký tự bằng `w.split("").reverse().join("")`.',
    tests: [
      { in: 'MindX Club', out: 'XdniM bulC' },
      { in: 'Dev Dojo', out: 'veD ojoD' },
      { in: 'Hello World Code', out: 'olleH dlroW edoC' }
    ]
  },
  day143: {
    title: '~/daily-quest/day-143.js',
    desc: '<strong>Nhiệm vụ #143:</strong> Hoàn thiện hàm <code>filterPrimes(arr)</code> nhận vào một mảng số nguyên và chỉ giữ lại các số nguyên tố.',
    starter: `function filterPrimes(arr) {\n  function isPrime(n) {\n    if (n < 2) return false;\n    for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;\n    return true;\n  }\n  return arr.filter(isPrime);\n}`,
    fnName: 'filterPrimes',
    hint: 'Gợi ý: Số nguyên tố là số lớn hơn hoặc bằng 2 và chỉ chia hết cho 1 và chính nó. Duyệt từ 2 đến căn bậc hai của n.',
    tests: [
      { in: [1, 2, 3, 4, 5, 6, 7], out: [2, 3, 5, 7] },
      { in: [10, 11, 12, 13], out: [11, 13] },
      { in: [4, 6, 8, 9], out: [] }
    ]
  },
  day144: {
    title: '~/daily-quest/day-144.js',
    desc: '<strong>Nhiệm vụ #144:</strong> Hoàn thiện hàm <code>formatVND(amount)</code> chuyển một số nguyên thành chuỗi định dạng tiền tệ Việt Nam (VD: 150000 -> "150.000 đ").',
    starter: `function formatVND(amount) {\n  return amount.toLocaleString('vi-VN') + ' đ';\n}`,
    fnName: 'formatVND',
    hint: 'Gợi ý: Dùng `amount.toLocaleString("vi-VN")` hoặc regex phân tách hàng nghìn bằng dấu chấm, sau đó cộng thêm " đ".',
    tests: [
      { in: 150000, out: '150.000 đ' },
      { in: 2500000, out: '2.500.000 đ' },
      { in: 5000, out: '5.000 đ' }
    ]
  }
};

// --- Daily Terminal Implementation ---
function initTerminal() {
  const questSelect = document.getElementById('questSelector');
  const codeEditor = document.getElementById('codeEditor');
  const runBtn = document.getElementById('runCodeBtn');
  const hintBtn = document.getElementById('hintBtn');
  const questDesc = document.getElementById('questDesc');
  const terminalPath = document.getElementById('terminalPath');
  const statusMsg = document.getElementById('terminalStatus');
  const xpReward = document.getElementById('terminalXpReward');

  if (!codeEditor || !runBtn) return;

  function loadChallenge(key) {
    const q = Challenges[key];
    if (!q) return;
    if (terminalPath) terminalPath.textContent = q.title;
    if (questDesc) questDesc.innerHTML = q.desc;
    codeEditor.value = q.starter;
    if (statusMsg) statusMsg.innerHTML = '<span>●</span> <span>Sẵn sàng chạy kiểm thử</span>';
    if (statusMsg) statusMsg.className = 'output-status';
    if (xpReward) xpReward.textContent = '';
  }

  if (questSelect) {
    questSelect.addEventListener('change', (e) => loadChallenge(e.target.value));
    loadChallenge(questSelect.value);
  }

  if (hintBtn) {
    hintBtn.addEventListener('click', () => {
      const curKey = questSelect ? questSelect.value : 'day142';
      alert(Challenges[curKey].hint);
    });
  }

  function runCode() {
    const curKey = questSelect ? questSelect.value : 'day142';
    const challenge = Challenges[curKey];
    const userCode = codeEditor.value;

    try {
      const solver = new Function(`${userCode}; return ${challenge.fnName};`)();
      if (typeof solver !== 'function') {
        throw new Error(`Chưa tìm thấy hàm ${challenge.fnName}()`);
      }

      let passedCount = 0;
      for (const t of challenge.tests) {
        const result = solver(t.in);
        const isMatch = Array.isArray(t.out) 
          ? JSON.stringify(result) === JSON.stringify(t.out)
          : result === t.out;

        if (isMatch) passedCount++;
      }

      if (passedCount === challenge.tests.length) {
        statusMsg.className = 'output-status success';
        statusMsg.innerHTML = `<span>✔</span> <span>PASS TOÀN BỘ (${passedCount}/${challenge.tests.length} tests)</span>`;
        xpReward.innerHTML = '⚡ +50 XP | 🔥 STREAK TĂNG';
        SoundFX.playSuccess();

        // Increment Gamification stats
        if (!DojoState.completedQuests.includes(curKey)) {
          DojoState.completedQuests.push(curKey);
          DojoState.xp += 50;
          DojoState.streak += 1;
          DojoState.save();
        }
      } else {
        statusMsg.className = 'output-status error';
        statusMsg.innerHTML = `<span>✖</span> <span>ĐẠT ${passedCount}/${challenge.tests.length} TESTS. Kiểm tra lại logic!</span>`;
        xpReward.textContent = '';
        SoundFX.playError();
      }

    } catch (err) {
      statusMsg.className = 'output-status error';
      statusMsg.innerHTML = `<span>✖</span> <span>LỖI CÚ PHÁP: ${err.message}</span>`;
      xpReward.textContent = '';
      SoundFX.playError();
    }
  }

  runBtn.addEventListener('click', runCode);

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      runCode();
    }
  });
}

// --- Live Interactive Canvas Mini Game: "Dojo Cyber Dodger" ---
function initCanvasGame() {
  const canvas = document.getElementById('gameCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationId;
  let score = 0;
  let isGameOver = false;

  // Responsive canvas size
  function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth || 500;
    canvas.height = 280;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const player = {
    x: canvas.width / 2,
    y: canvas.height - 35,
    size: 20,
    speed: 6,
    color: '#00F0FF'
  };

  let enemies = [];
  let stars = [];

  // Init stars
  for (let i = 0; i < 35; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: 0.5 + Math.random() * 1.5,
      size: Math.random() * 2
    });
  }

  // Mouse / Touch Controls
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    player.x = e.clientX - rect.left;
  });

  // Keyboard Controls
  const keys = {};
  window.addEventListener('keydown', (e) => { keys[e.key] = true; });
  window.addEventListener('keyup', (e) => { keys[e.key] = false; });

  function spawnEnemy() {
    if (Math.random() < 0.04) {
      enemies.push({
        x: Math.random() * (canvas.width - 20) + 10,
        y: -15,
        speed: 2 + Math.random() * 3,
        size: 14 + Math.random() * 8,
        color: Math.random() > 0.3 ? '#FF2A54' : '#00FF9D'
      });
    }
  }

  function gameLoop() {
    ctx.fillStyle = '#070C18';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw background stars
    ctx.fillStyle = '#475569';
    stars.forEach(s => {
      s.y += s.speed;
      if (s.y > canvas.height) s.y = 0;
      ctx.fillRect(s.x, s.y, s.size, s.size);
    });

    // Handle Keyboard Movement
    if (keys['ArrowLeft'] || keys['a']) player.x -= player.speed;
    if (keys['ArrowRight'] || keys['d']) player.x += player.speed;
    player.x = Math.max(player.size, Math.min(canvas.width - player.size, player.x));

    // Draw Player Ship
    ctx.fillStyle = player.color;
    ctx.beginPath();
    ctx.moveTo(player.x, player.y - player.size);
    ctx.lineTo(player.x - player.size, player.y + player.size);
    ctx.lineTo(player.x + player.size, player.y + player.size);
    ctx.closePath();
    ctx.fill();

    // Engine thrust glow
    ctx.fillStyle = '#FFB800';
    ctx.beginPath();
    ctx.arc(player.x, player.y + player.size + 4, 4 + Math.random() * 4, 0, Math.PI * 2);
    ctx.fill();

    // Spawn & update enemies
    spawnEnemy();

    for (let i = enemies.length - 1; i >= 0; i--) {
      const e = enemies[i];
      e.y += e.speed;

      // Draw enemy bug
      ctx.fillStyle = e.color;
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.size / 2, 0, Math.PI * 2);
      ctx.fill();

      // Check collision
      const dist = Math.hypot(player.x - e.x, player.y - e.y);
      if (dist < player.size + e.size / 2) {
        if (e.color === '#00FF9D') {
          // Bonus data pack
          score += 50;
          enemies.splice(i, 1);
          SoundFX.playSuccess();
          continue;
        } else {
          // Hit asteroid
          score = Math.max(0, score - 10);
          enemies.splice(i, 1);
          SoundFX.playError();
          continue;
        }
      }

      // Out of bounds
      if (e.y > canvas.height + 20) {
        score += 2;
        enemies.splice(i, 1);
      }
    }

    // Update overlay score
    const scoreEl = document.getElementById('gameScoreDisplay');
    if (scoreEl) scoreEl.textContent = `Score: ${score}`;

    animationId = requestAnimationFrame(gameLoop);
  }

  gameLoop();
}

// --- Tab Switcher for Featured Project (Live vs Inspector) ---
function initShowcaseTabs() {
  const btnLive = document.getElementById('tabLiveBtn');
  const btnCode = document.getElementById('tabCodeBtn');
  const liveView = document.getElementById('liveShowcaseView');
  const codeView = document.getElementById('codeInspectorView');
  const upvoteBtn = document.getElementById('btnUpvote');

  if (btnLive && btnCode && liveView && codeView) {
    btnLive.addEventListener('click', () => {
      btnLive.classList.add('active');
      btnCode.classList.remove('active');
      liveView.style.display = 'block';
      codeView.style.display = 'none';
    });

    btnCode.addEventListener('click', () => {
      btnCode.classList.add('active');
      btnLive.classList.remove('active');
      liveView.style.display = 'none';
      codeView.style.display = 'block';
    });
  }

  // Upvote Button
  if (upvoteBtn) {
    upvoteBtn.addEventListener('click', () => {
      if (!DojoState.hasUpvoted) {
        DojoState.upvotes += 1;
        DojoState.hasUpvoted = true;
        DojoState.xp += 10;
        DojoState.save();
        upvoteBtn.style.background = 'var(--brand-red)';
        upvoteBtn.style.color = '#fff';
        SoundFX.playSuccess();
      } else {
        alert('Bạn đã tặng sao cổ vũ cho dự án này rồi! Cảm ơn bạn ❤️');
      }
    });
  }
}

// --- Pomodoro Study Timer ---
function initPomodoro() {
  const display = document.getElementById('pomodoroDisplay');
  const toggleBtn = document.getElementById('pomodoroToggle');
  const resetBtn = document.getElementById('pomodoroReset');

  if (!display || !toggleBtn) return;

  let totalSeconds = 25 * 60;
  let timerInterval = null;
  let isRunning = false;

  function updateDisplay() {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  toggleBtn.addEventListener('click', () => {
    if (isRunning) {
      clearInterval(timerInterval);
      isRunning = false;
      toggleBtn.textContent = 'Tiếp Tục ⏯️';
    } else {
      isRunning = true;
      toggleBtn.textContent = 'Tạm Dừng ⏸️';
      timerInterval = setInterval(() => {
        if (totalSeconds > 0) {
          totalSeconds--;
          updateDisplay();
        } else {
          clearInterval(timerInterval);
          isRunning = false;
          toggleBtn.textContent = 'Bắt Đầu 25m ▶';
          SoundFX.playSuccess();
          alert('🔔 Chuông Pomodoro: Bạn đã hoàn thành 25 phút tập trung! Hãy nghỉ giải lao 5 phút nhé.');
          DojoState.xp += 30;
          DojoState.save();
        }
      }, 1000);
    }
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      clearInterval(timerInterval);
      isRunning = false;
      totalSeconds = 25 * 60;
      updateDisplay();
      toggleBtn.textContent = 'Bắt Đầu 25m ▶';
    });
  }

  updateDisplay();
}

// --- Skill Tree Node Interactive Info ---
function initSkillTreeModal() {
  const skillTracks = document.querySelectorAll('.skill-track');
  skillTracks.forEach(track => {
    track.addEventListener('click', () => {
      const name = track.querySelector('.skill-track-name').textContent.trim();
      const pct = track.querySelector('.skill-track-pct').textContent.trim();
      alert(`🗺️ Lộ Trình: ${name}\nTiến độ hiện tại: ${pct}\n\nHướng dẫn: Hoàn thành thêm 2 đồ án và 3 bài Daily Quest để mở khóa chứng chỉ cấp tiếp theo!`);
    });
  });
}

// --- Quest Accept Buttons ---
function initQuestAccept() {
  const questBtns = document.querySelectorAll('.btn-accept-quest');
  questBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.textContent = 'Đang Làm ⏳';
      btn.style.background = 'var(--cyan-neon)';
      btn.style.color = '#040810';
      btn.style.borderColor = 'var(--cyan-neon)';
      SoundFX.playSuccess();
      alert('🚀 Đã nhận nhiệm vụ vào Bảng Điều Khiển! Hãy hoàn thành và nộp Pull Request hoặc link sản phẩm để nhận XP.');
    });
  });
}

// --- Modal Code Viewer for Projects Page ---
function initProjectModal() {
  const modal = document.getElementById('codeModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalCodeContent');
  const closeBtn = document.getElementById('modalCloseBtn');
  const inspectBtns = document.querySelectorAll('.btn-inspect-project');

  if (!modal) return;

  const demoCodes = {
    'StudyHub': `// StudyHub - Smart Dashboard (HTML5/CSS/JS)
class StudyTracker {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  }
  addTask(title, priority) {
    this.tasks.push({ id: Date.now(), title, priority, done: false });
    this.persist();
  }
  persist() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}`,
    'SpaceDefender': `// Retro Space Defender (HTML5 Canvas Game)
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
let player = { x: 200, y: 350, speed: 5 };
function update() {
  if (keys.ArrowLeft) player.x -= player.speed;
  if (keys.ArrowRight) player.x += player.speed;
  requestAnimationFrame(update);
}`,
    'WeatherNow': `// WeatherNow - OpenWeatherMap API Integration
async function fetchCityWeather(city) {
  const res = await fetch(\`https://api.openweathermap.org/data/2.5/weather?q=\${city}&units=metric&appid=KEY\`);
  const data = await res.json();
  renderWeatherCard(data.name, data.main.temp, data.weather[0].icon);
}`
  };

  inspectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const projName = btn.getAttribute('data-project');
      if (modalTitle) modalTitle.textContent = `Mã Nguồn: ${projName}`;
      if (modalContent) modalContent.textContent = demoCodes[projName] || '// Đang tải mã nguồn dự án...';
      modal.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
}

// --- Category Filter on Projects.html ---
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (cat === 'all' || card.getAttribute('data-cat') === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// --- Class Picker on Register.html ---
function initClassPicker() {
  const options = document.querySelectorAll('.class-option');
  const hiddenInput = document.getElementById('selectedClassInput');

  if (!options.length) return;

  options.forEach(opt => {
    opt.addEventListener('click', () => {
      options.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      const role = opt.getAttribute('data-role');
      if (hiddenInput) hiddenInput.value = role;
      SoundFX.playSuccess();
    });
  });
}

// --- Initialize All Modules ---
document.addEventListener('DOMContentLoaded', () => {
  DojoState.updateUI();
  initTerminal();
  initCanvasGame();
  initShowcaseTabs();
  initPomodoro();
  initSkillTreeModal();
  initQuestAccept();
  initProjectModal();
  initProjectFilter();
  initClassPicker();
});
