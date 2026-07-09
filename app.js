'use strict';

const QUIZ = [
  {
    q: 'วันนี้พลังใจของคุณใกล้เคียงแบบไหนที่สุด?',
    options: [
      { key: 'calm', emoji: '☁️', title: 'อยากพักเงียบ ๆ', desc: 'อยากให้ใจเบาลงและไม่เร่งตัวเอง' },
      { key: 'fresh', emoji: '🍊', title: 'อยากได้พลังใหม่', desc: 'อยากเปลี่ยนบรรยากาศและเริ่มต้นใหม่' },
      { key: 'bloom', emoji: '🌷', title: 'อยากได้กำลังใจ', desc: 'อยากได้รับความอบอุ่นและการซัพพอร์ต' },
      { key: 'focus', emoji: '🧩', title: 'อยากจัดระบบ', desc: 'อยากให้ความคิดนิ่งและชัดเจนขึ้น' }
    ]
  },
  {
    q: 'เวลารู้สึกเครียด คุณมักต้องการอะไรเป็นอย่างแรก?',
    options: [
      { key: 'calm', emoji: '🍵', title: 'เวลาพักสั้น ๆ', desc: 'หยุดหายใจและค่อยกลับมา' },
      { key: 'fresh', emoji: '🚶', title: 'เปลี่ยนบรรยากาศ', desc: 'ลุกเดิน ฟังเพลง หรือหาไอเดียใหม่' },
      { key: 'bloom', emoji: '🤝', title: 'คนรับฟัง', desc: 'พูดคุยกับคนที่ไว้ใจ' },
      { key: 'focus', emoji: '📝', title: 'แผนที่ชัดเจน', desc: 'ลิสต์สิ่งที่ต้องทำทีละข้อ' }
    ]
  },
  {
    q: 'สีไหนสะท้อนความรู้สึกของคุณตอนนี้?',
    options: [
      { key: 'bloom', emoji: '🌸', title: 'ชมพูอ่อน', desc: 'อ่อนโยนและอยากดูแลตัวเอง' },
      { key: 'calm', emoji: '💙', title: 'ฟ้า', desc: 'อยากผ่อนคลายและสบายใจ' },
      { key: 'fresh', emoji: '💛', title: 'เหลือง', desc: 'อยากได้ความหวังและพลังบวก' },
      { key: 'focus', emoji: '🌿', title: 'เขียว', desc: 'อยากกลับสู่สมดุลและมั่นคง' }
    ]
  },
  {
    q: 'ประโยคไหนคือสิ่งที่คุณอยากบอกตัวเองวันนี้?',
    options: [
      { key: 'calm', emoji: '🌙', title: 'พักได้ ไม่ต้องรีบตลอดเวลา', desc: 'ให้พื้นที่กับตัวเองมากขึ้น' },
      { key: 'fresh', emoji: '✨', title: 'เริ่มใหม่ได้เสมอ', desc: 'ยังมีโอกาสและมุมมองใหม่ ๆ' },
      { key: 'bloom', emoji: '💗', title: 'เราทำดีที่สุดแล้ว', desc: 'ใจดีกับตัวเองอีกนิด' },
      { key: 'focus', emoji: '🎯', title: 'ทำทีละอย่างก็พอ', desc: 'ค่อย ๆ จัดการทีละขั้น' }
    ]
  },
  {
    q: 'หลังจบกิจกรรมนี้ คุณอยากได้อะไรกลับไป?',
    options: [
      { key: 'calm', emoji: '🍵', title: 'ความสงบ', desc: 'รู้สึกเบาและพักใจขึ้น' },
      { key: 'fresh', emoji: '⚡', title: 'พลังบวก', desc: 'พร้อมเริ่มต่ออย่างสดชื่น' },
      { key: 'bloom', emoji: '🤗', title: 'ความอบอุ่น', desc: 'รู้สึกมีคนซัพพอร์ต' },
      { key: 'focus', emoji: '📌', title: 'ความชัดเจน', desc: 'รู้ว่าควรเริ่มจากอะไร' }
    ]
  }
];

const PROFILES = {
  calm: {
    emoji: '☁️', short: 'Calm Cloud', label: 'Calm Cloud — ต้องการพักใจและลดความเร่ง',
    meaning: 'คุณอาจกำลังใช้พลังเยอะและต้องการพื้นที่สงบเพื่อให้ใจได้พัก',
    thinking: 'ในใจอาจกำลังคิดว่า “ขอช้าลงนิดหนึ่งได้ไหม” หรืออยากมีเวลาหายใจให้เต็มปอด',
    tips: ['พักสายตา 3 นาที', 'ดื่มน้ำช้า ๆ', 'ปิดแจ้งเตือนสักครู่']
  },
  fresh: {
    emoji: '✨', short: 'Fresh Spark', label: 'Fresh Spark — ต้องการพลังใหม่และความสดชื่น',
    meaning: 'คุณอาจกำลังมองหาความสดชื่น ไอเดียใหม่ หรือแรงบันดาลใจเล็ก ๆ',
    thinking: 'ในใจอาจกำลังคิดว่า “อยากเปลี่ยนบรรยากาศ” หรืออยากลองเริ่มใหม่ด้วยพลังที่เบาขึ้น',
    tips: ['เดินเปลี่ยนมุม 5 นาที', 'เปิดเพลงที่ชอบ', 'เลือกทำงานง่ายสุดก่อน']
  },
  bloom: {
    emoji: '🌷', short: 'Warm Bloom', label: 'Warm Bloom — ต้องการความอบอุ่นและกำลังใจ',
    meaning: 'คุณอาจต้องการการซัพพอร์ต ความเข้าใจ หรือคำพูดดี ๆ ให้ใจฟูขึ้น',
    thinking: 'ในใจอาจกำลังคิดว่า “อยากมีคนเข้าใจ” หรืออยากบอกตัวเองว่าทำได้ดีแล้ว',
    tips: ['ส่งคำขอบคุณให้ใครสักคน', 'เขียนสิ่งที่ทำได้ดี 1 อย่าง', 'คุยกับ buddy สั้น ๆ']
  },
  focus: {
    emoji: '🧩', short: 'Focus Stone', label: 'Focus Stone — ต้องการความนิ่งและจัดระบบความคิด',
    meaning: 'คุณอาจมีหลายเรื่องในหัวและอยากเห็นภาพรวมชัดขึ้น',
    thinking: 'ในใจอาจกำลังคิดว่า “เริ่มจากตรงไหนดี” หรืออยากจัดลำดับสิ่งสำคัญก่อน',
    tips: ['ลิสต์ 3 งานหลัก', 'เลือกงานถัดไป 1 อย่าง', 'ตั้ง timer 15 นาที']
  }
};

const THEME_LABELS = ['Blush Pink', 'Soft Sky', 'Healing Green', 'Lavender Dream', 'Sunny Peach'];
const THEME_COLORS = ['#ffe1e7', '#dfefff', '#e3f3dc', '#e8ddff', '#fff0ba'];
const STICKERS = ['🌸','🌿','✨','☁️','💧','🌙','🌈','⭐','💐','❤️','🎧','🍃','🌷','🧸','🍊','🍵','🌻','😊','🐻','☕','🍀','🌼','🌞','💡','🎁','🎀','🪴','🌺','🍄','💫'];

let currentQuiz = 0;
let quizAnswers = [];
let selectedTheme = 0;
let customThemeColor = '';
let boardItems = [];
let selectedItemId = '';
let preparedPayload = null;
let lastSpinResponse = null;
let submittedLocalCards = [];
let currentWallCards = [];
let currentEditingCardId = '';
let localDemo = loadDemoState();
let likedLocal = loadLikedState();
let lastBoardImage = '';
let uploadedImageForCardId = '';
let apiCache = { wall: { ts: 0, data: [] }, prize: { ts: 0, data: null } };
let inFlight = {};

function isLineBrowser() {
  return /Line\//i.test(navigator.userAgent || '') || /LIFF/i.test(navigator.userAgent || '');
}
function lineSafeTimeout(ms) {
  return isLineBrowser() ? Math.max(ms || 0, 30000) : (ms || 18000);
}

const SAVE_QUEUE_KEY = 'colorStressSaveQueueV35';

function getSaveQueue() {
  try { return JSON.parse(localStorage.getItem(SAVE_QUEUE_KEY) || '[]'); } catch (e) { return []; }
}
function setSaveQueue(queue) {
  try { localStorage.setItem(SAVE_QUEUE_KEY, JSON.stringify((queue || []).slice(-40))); } catch (e) {}
}
function queueMoodBoardSave(payload) {
  if (!payload || !payload.cardId) return;
  const queue = getSaveQueue().filter(x => x && x.cardId !== payload.cardId);
  queue.push({ action: 'submitCard', payload, cardId: payload.cardId, ts: Date.now(), tries: 0 });
  setSaveQueue(queue);
}
function removeQueuedSave(cardId) {
  if (!cardId) return;
  setSaveQueue(getSaveQueue().filter(x => x && x.cardId !== cardId));
}
async function flushMoodBoardSaveQueue(silent = true) {
  if (!isLiveMode()) return;
  const queue = getSaveQueue();
  if (!queue.length) return;
  const next = queue[0];
  if (!next || !next.payload) { setSaveQueue(queue.slice(1)); return; }
  try {
    const res = await api('submitCard', next.payload, { timeout: isLineBrowser() ? 45000 : 22000 });
    if (res && res.ok) {
      removeQueuedSave(next.payload.cardId);
      if (!silent) showToast('บันทึก Mood Board ลง Sheet สำเร็จแล้ว');
      setTimeout(() => refreshWall(false, true), 600);
      return;
    }
    throw new Error((res && res.message) || 'save failed');
  } catch (e) {
    postNoCors('submitCard', next.payload);
    next.tries = (next.tries || 0) + 1;
    next.lastTry = Date.now();
    const rest = queue.slice(1);
    setSaveQueue(next.tries >= 8 ? rest : rest.concat([next]));
    if (!silent) showToast('ส่งข้อมูลสำรองแล้ว ระบบจะ sync ให้อัตโนมัติ');
  }
}
window.addEventListener('online', () => flushMoodBoardSaveQueue(true));
setInterval(() => flushMoodBoardSaveQueue(true), 30000);
let prizeAutoTimer = null;
let gachaInProgress = false;
let gachaCompleted = false;
let prizePoolTotal = 80;
let evaluationCompletedForSpin = false;
let pendingStoredResultAfterEval = null;

window.addEventListener('DOMContentLoaded', () => {
  // Boot each section separately so one UI issue never leaves the Quiz blank.
  safeRun(initUI, 'initUI');
  safeRun(checkConnection, 'checkConnection');
  safeRun(renderQuiz, 'renderQuiz');
  safeRun(() => loadPrizeStatus(false), 'loadPrizeStatus');
  safeRun(() => refreshWall(false), 'refreshWall');
});

function safeRun(fn, label) {
  try { return fn(); }
  catch (err) {
    console.error(`[Color Your Stress] ${label} failed`, err);
    const toast = document.getElementById('toast');
    if (toast) showToast(`โหลดส่วน ${label} ไม่สำเร็จ กด Refresh อีกครั้ง`);
  }
}

function config() {
  return Object.assign({
    GAS_WEBAPP_URL: '',
    DEMO_MODE: false,
    REQUIRE_EMAIL: true,
    SAVE_BOARD_IMAGE_TO_DRIVE: true,
    CONTACT_LINE_ID: 'friendly_dukdik',
    CONTACT_MS_TEAM: 'Siripak Chattanupakorn'
  }, window.APP_CONFIG || {});
}
function isLiveMode() { return !!String(config().GAS_WEBAPP_URL || '').trim(); }

function initUI() {
  renderSwatches();
  renderStickerPalette();
  updateSubmitBoardButtonLabel();
  setTheme(0);
  switchToolTab('decor');
  syncBoardText();
}

// Fix V11 blank quiz: this function is called during boot and when user edits
// Mood Board information. It must exist before renderQuiz runs.
function syncBoardText() {
  const nameInput = document.getElementById('nameInput');
  const affirmInput = document.getElementById('affirmInput');
  const cardName = document.getElementById('cardName');
  const cardAffirm = document.getElementById('cardAffirm');
  const cardProfile = document.getElementById('cardProfile');

  if (cardName) cardName.textContent = (nameInput && nameInput.value.trim()) || 'Your Name';
  if (cardAffirm) cardAffirm.textContent = (affirmInput && affirmInput.value.trim()) || 'วันนี้ฉันอนุญาตให้ตัวเองพักได้';

  if (cardProfile && quizAnswers.filter(Boolean).length >= QUIZ.length) {
    const p = getProfile();
    cardProfile.textContent = p.label;
  } else if (cardProfile && !cardProfile.textContent.trim()) {
    cardProfile.textContent = 'เลือก Mood Profile จาก Quiz ก่อนเริ่มตกแต่ง';
  }
}

function refreshAll() {
  checkConnection();
  setTimeout(() => flushMoodBoardSaveQueue(true), 1200);
  loadPrizeStatus(false, true);
  refreshWall(false, true);
}

function goStep(id) {
  document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
  document.getElementById(id)?.classList.add('active');
  document.querySelectorAll('.step-dot').forEach(el => el.classList.remove('active'));
  const map = { stepQuiz: 'navQuiz', stepDecorate: 'navDecorate', stepGacha: 'navGacha', stepWall: 'navWall' };
  document.getElementById(map[id])?.classList.add('active');
  if (id === 'stepGacha') { startPrizeAutoRefresh(); updateGachaGate(); } else stopPrizeAutoRefresh();
  window.scrollTo({ top: 0, behavior: 'smooth' });

  const target = document.getElementById(id);
  if (target && window.innerWidth <= 760) setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
}
function startPrizeAutoRefresh() {
  stopPrizeAutoRefresh();
  loadPrizeStatus(false, true);
  prizeAutoTimer = setInterval(() => loadPrizeStatus(false, true), 9000);
}
function stopPrizeAutoRefresh() {
  if (prizeAutoTimer) clearInterval(prizeAutoTimer);
  prizeAutoTimer = null;
}
function guardDecorateNav() {
  if (quizAnswers.length < QUIZ.length) return showToast('กรุณาทำ Quiz ให้ครบก่อนนะคะ');
  goStep('stepDecorate');
}
function guardGachaNav() {
  goStep('stepGacha');
  if (!preparedPayload) showToast('เข้าหน้า Gacha ได้แล้ว แต่ต้องส่ง Mood Board ก่อนจึงจะหมุนได้ค่ะ');
}

function updateGachaGate() {
  const btn = document.getElementById('spinBtn');
  const resultBox = document.getElementById('spinResult');
  if (!btn) return;
  if (!preparedPayload) {
    btn.disabled = true;
    btn.classList.add('disabled');
    btn.textContent = 'ส่ง Mood Board ก่อนหมุน';
    if (resultBox && !gachaCompleted) {
      resultBox.classList.remove('loading');
      resultBox.innerHTML = '<strong>ยังหมุนไม่ได้</strong><small>กรุณาทำ Quiz และส่ง Mood Board ก่อน ระบบถึงจะเปิดให้ประเมิน + หมุนวงล้อ</small>';
    }
    return;
  }
  const stored = getStoredSpinResult();
  if (gachaCompleted || stored) {
    disableSpinButton('หมุนแล้ว — ดูผลใน Gallery');
    if (resultBox) {
      resultBox.classList.remove('loading');
      resultBox.innerHTML = `<strong>หมุน Gacha แล้ว</strong><small>ดูผลและ Mood Board ได้ที่ Gallery</small><button class="ghost small" onclick="goStep('stepWall')">ดู Gallery</button>`;
    }
    return;
  }
  if (!gachaInProgress) {
    enableSpinButton();
    if (resultBox) resultBox.innerHTML = 'พร้อมประเมิน + หมุนวงล้อ ✨';
  }
}

function renderQuiz() {
  const quiz = QUIZ[currentQuiz];
  const selected = quizAnswers[currentQuiz];
  const box = document.getElementById('quizBox');
  if (!box || !quiz) return;
  box.innerHTML = `
    <div class="quiz-question">${escapeHtml(quiz.q)}</div>
    <div class="quiz-options">
      ${quiz.options.map(op => `
        <button class="quiz-option ${selected === op.key ? 'selected' : ''}" onclick="selectQuiz('${op.key}')">
          <span class="emoji">${op.emoji}</span>
          <span><strong>${escapeHtml(op.title)}</strong><small>${escapeHtml(op.desc)}</small></span>
        </button>`).join('')}
    </div>`;
  document.getElementById('quizProgress').textContent = `${Math.min(quizAnswers.filter(Boolean).length, QUIZ.length)}/${QUIZ.length}`;
  document.getElementById('quizNextBtn').textContent = currentQuiz === QUIZ.length - 1 ? 'ดูผล Mood Profile' : 'ถัดไป';
}
function selectQuiz(key) { quizAnswers[currentQuiz] = key; renderQuiz(); }
function nextQuiz() {
  if (!quizAnswers[currentQuiz]) return showToast('เลือกคำตอบก่อนนะคะ');
  if (currentQuiz < QUIZ.length - 1) { currentQuiz += 1; renderQuiz(); return; }
  syncProfileToBoard();
  showProfileModal();
}
function prevQuiz() { if (currentQuiz > 0) { currentQuiz -= 1; renderQuiz(); } }

function getProfile() {
  const scores = { calm: 0, fresh: 0, bloom: 0, focus: 0 };
  quizAnswers.forEach(k => { if (scores[k] !== undefined) scores[k] += 1; });
  const key = Object.keys(scores).sort((a, b) => scores[b] - scores[a])[0] || 'calm';
  return Object.assign({ key, scores }, PROFILES[key] || PROFILES.calm);
}
function syncProfileToBoard() {
  const profile = getProfile();
  document.getElementById('profileBadge').textContent = profile.short;
  document.getElementById('cardProfile').textContent = profile.label;
}
function showProfileModal() {
  const p = getProfile();
  document.getElementById('profileModalContent').innerHTML = `
    <div class="profile-icon">${p.emoji}</div>
    <p class="eyebrow">Your Mood Profile</p>
    <h2>${escapeHtml(p.short)}</h2>
    <div class="profile-summary">
      <p><strong>ความหมาย:</strong> ${escapeHtml(p.meaning)}</p>
      <p><strong>ตอนนี้อาจกำลังคิดว่า:</strong> ${escapeHtml(p.thinking)}</p>
    </div>
    <h3>Tips เล็ก ๆ สำหรับวันนี้</h3>
    <div class="tip-grid">${p.tips.map(t => `<div class="tip-card">${escapeHtml(t)}</div>`).join('')}</div>
    <div class="quiz-result-actions">
      <button class="ghost" onclick="closeProfileModal()">กลับไปแก้ Quiz</button>
      <button class="primary big" onclick="closeProfileModal(); goStep('stepDecorate')">ไปตกแต่ง Mood Board</button>
    </div>`;
  document.getElementById('profileModal').classList.remove('hidden');
}
function closeProfileModal() { document.getElementById('profileModal').classList.add('hidden'); }

function renderSwatches() {
  const box = document.getElementById('swatches');
  box.innerHTML = THEME_COLORS.map((c, i) => `<button class="swatch ${customThemeColor === '' && i === selectedTheme ? 'active' : ''}" title="${THEME_LABELS[i]}" style="background:${c}" onclick="setTheme(${i})"></button>`).join('');
}
function setTheme(i) {
  selectedTheme = i;
  customThemeColor = '';
  const card = document.getElementById('cooldownCard');
  card.className = `cooldown-card theme-${i}`;
  card.style.background = '';
  renderSwatches();
}
function applyCustomMoodColor() {
  const color = document.getElementById('customColorInput')?.value || '#ffe1e7';
  customThemeColor = color;
  selectedTheme = 'custom';
  const card = document.getElementById('cooldownCard');
  card.className = 'cooldown-card custom-theme';
  card.style.background = `linear-gradient(135deg, ${color}, #fff8ec)`;
  renderSwatches();
}
function renderStickerPalette() {
  const box = document.getElementById('stickerPalette');
  box.innerHTML = STICKERS.map(st => `
    <button class="sticker-btn emoji-font" type="button" title="${escapeAttr(st)}" onclick="addBoardItem('emoji','${escapeAttr(st)}')">
      <span>${escapeHtml(st)}</span>
    </button>`).join('');
}

function addCustomEmoji() {
  const input = document.getElementById('customEmojiInput');
  const value = input.value.trim();
  if (!value) return showToast('ใส่ Emoji ก่อนค่ะ');
  addBoardItem('emoji', value.slice(0, 6), { x: 40, y: 42, size: 40 });
  input.value = '';
}
function addTextItem() {
  const input = document.getElementById('customTextInput');
  const value = input.value.trim();
  const size = parseInt(document.getElementById('textSizeRange').value, 10) || 24;
  if (!value) return showToast('พิมพ์ข้อความก่อนค่ะ');
  addBoardItem('text', value.slice(0, 44), { x: 60, y: 90, size, color: (document.getElementById('textColorInput')?.value || '#2f4054'), w: Math.min(260, Math.max(90, value.length * size * 0.58)) });
  input.value = '';
}

function matchTextColorToMood() {
  const color = customThemeColor || THEME_COLORS[selectedTheme] || '#ffe1e7';
  const input = document.getElementById('textColorInput');
  if (input) input.value = color;
  showToast('ตั้งสีข้อความตาม Mood Color แล้วค่ะ');
}

function handleImageUpload(event) {
  const files = Array.from(event.target.files || []).slice(0, 3);
  if (!files.length) return;
  showLoading('กำลังเตรียมรูปภาพ', 'ระบบกำลังบีบอัดรูปให้โหลดเร็วขึ้น...');
  Promise.all(files.map((file, index) => compressImage(file, 520, 0.70).then(dataUrl => {
    addBoardItem('image', dataUrl, { x: 24 + (index * 42), y: 34 + (index * 18), w: 126, h: 92 });
  }))).catch(() => showToast('ไม่สามารถอ่านรูปภาพบางไฟล์ได้')).finally(() => hideLoading());
  event.target.value = '';
}
function compressImage(file, maxSize, quality) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const ratio = Math.min(1, maxSize / Math.max(img.width, img.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(img.width * ratio));
        canvas.height = Math.max(1, Math.round(img.height * ratio));
        canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function addBoardItem(type, value, opts = {}) {
  const id = `item_${Date.now()}_${Math.random().toString(16).slice(2)}`;
  const item = { id, type, value, x: opts.x ?? 40, y: opts.y ?? 40, w: opts.w ?? (type === 'image' ? 120 : undefined), h: opts.h ?? (type === 'image' ? 90 : undefined), size: opts.size ?? 36, rotation: opts.rotation ?? 0, color: opts.color || '#2f4054', fit: opts.fit || 'cover' };
  boardItems.push(item);
  renderBoardItems();
  selectBoardItem(id, false);
}
function renderBoardItems() {
  const canvas = document.getElementById('boardCanvas');
  canvas.innerHTML = boardItems.map(item => {
    const wh = `${item.w ? `width:${item.w}px;` : ''}${item.h ? `height:${item.h}px;` : ''}`;
    const color = item.type === 'text' && item.color ? `color:${item.color};` : '';
    const style = `left:${item.x}px;top:${item.y}px;${wh}transform:rotate(${item.rotation || 0}deg);${item.size ? `font-size:${item.size}px;` : ''}${color}`;
    const crop = item.type === 'image' ? `<button class="crop-handle" type="button" title="Crop / Fit" data-action="crop" data-id="${item.id}">Fit</button>` : '';
    const handles = `<button class="delete-handle" type="button" title="ลบชิ้นนี้" data-action="delete" data-id="${item.id}">×</button><button class="rotate-handle" type="button" title="หมุน" data-action="rotate" data-id="${item.id}">⟳</button><button class="resize-handle" type="button" title="ย่อ/ขยาย" data-action="resize" data-id="${item.id}">↘</button>${crop}`;
    if (item.type === 'image') return `<div class="board-item image ${item.id === selectedItemId ? 'selected' : ''}" data-id="${item.id}" style="${style}"><img src="${item.value}" style="object-fit:${item.fit || 'cover'}" alt="collage image">${handles}</div>`;
    if (item.type === 'text') return `<div class="board-item text ${item.id === selectedItemId ? 'selected' : ''}" data-id="${item.id}" style="${style}">${escapeHtml(item.value)}${handles}</div>`;
    return `<div class="board-item emoji ${item.id === selectedItemId ? 'selected' : ''}" data-id="${item.id}" style="${style}">${escapeHtml(item.value)}${handles}</div>`;
  }).join('');
  canvas.querySelectorAll('.board-item').forEach(el => bindItemPointer(el));
  canvas.querySelectorAll('[data-action="delete"]').forEach(btn => {
    const del = ev => { ev.preventDefault(); ev.stopPropagation(); deleteBoardItem(btn.dataset.id); };
    btn.addEventListener('pointerdown', del, { passive: false });
    btn.addEventListener('click', del);
  });
  canvas.querySelectorAll('[data-action="crop"]').forEach(btn => {
    const crop = ev => { ev.preventDefault(); ev.stopPropagation(); toggleCropItem(btn.dataset.id); };
    btn.addEventListener('pointerdown', crop, { passive: false });
    btn.addEventListener('click', crop);
  });
}
function selectBoardItem(id, rerender = true) {
  selectedItemId = id;
  if (rerender) renderBoardItems();
  else document.querySelectorAll('.board-item').forEach(node => node.classList.toggle('selected', node.dataset.id === id));
}
function deleteBoardItem(id) { boardItems = boardItems.filter(item => item.id !== id); if (selectedItemId === id) selectedItemId = ''; renderBoardItems(); }
function toggleCropItem(id) { const item = boardItems.find(x => x.id === id); if (!item || item.type !== 'image') return; item.fit = item.fit === 'cover' ? 'contain' : 'cover'; renderBoardItems(); showToast(item.fit === 'cover' ? 'Crop mode' : 'Fit whole image'); }
function removeSelectedItem() { if (!selectedItemId) return showToast('เลือกของตกแต่งก่อนค่ะ'); deleteBoardItem(selectedItemId); }
function clearBoardItems() { boardItems = []; selectedItemId = ''; currentEditingCardId = ''; renderBoardItems(); updateSubmitBoardButtonLabel(); showToast('Reset Mood Board แล้วค่ะ'); }

function bindItemPointer(el) {
  el.addEventListener('pointerdown', ev => {
    const id = el.dataset.id;
    const item = boardItems.find(x => x.id === id);
    if (!item) return;
    if (ev.target.classList.contains('delete-handle') || ev.target.classList.contains('crop-handle')) return;
    ev.preventDefault();
    ev.stopPropagation();
    selectBoardItem(id, false);

    const isResize = ev.target.classList.contains('resize-handle');
    const isRotate = ev.target.classList.contains('rotate-handle');
    const canvas = document.getElementById('boardCanvas');
    const startRect = el.getBoundingClientRect();
    const startX = ev.clientX, startY = ev.clientY;
    const startItem = Object.assign({}, item);
    const offsetX = ev.clientX - startRect.left;
    const offsetY = ev.clientY - startRect.top;
    try { el.setPointerCapture(ev.pointerId); } catch (e) {}

    const move = e => {
      e.preventDefault();
      const liveRect = canvas.getBoundingClientRect();
      if (isRotate) {
        const cx = startRect.left + startRect.width / 2;
        const cy = startRect.top + startRect.height / 2;
        const angle = Math.atan2(e.clientY - cy, e.clientX - cx) * 180 / Math.PI + 90;
        item.rotation = Math.round(angle);
        applyItemStyle(el, item);
        return;
      }
      if (isResize) {
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        if (item.type === 'emoji') item.size = clamp((startItem.size || 36) + dx * 0.35, 18, 110);
        else if (item.type === 'text') {
          item.size = clamp((startItem.size || 24) + dx * 0.12, 14, 62);
          item.w = clamp((startItem.w || startRect.width) + dx, 60, liveRect.width - item.x);
        } else {
          item.w = clamp((startItem.w || startRect.width) + dx, 48, liveRect.width - item.x);
          item.h = clamp((startItem.h || startRect.height) + dy, 42, liveRect.height - item.y);
        }
        applyItemStyle(el, item);
        return;
      }
      const w = item.w || el.offsetWidth || 40;
      const h = item.h || el.offsetHeight || 40;
      item.x = clamp(e.clientX - liveRect.left - offsetX, 0, Math.max(0, liveRect.width - w));
      item.y = clamp(e.clientY - liveRect.top - offsetY, 0, Math.max(0, liveRect.height - h));
      el.style.left = `${item.x}px`;
      el.style.top = `${item.y}px`;
    };
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      document.removeEventListener('pointercancel', up);
      renderBoardItems();
    };
    document.addEventListener('pointermove', move, { passive: false });
    document.addEventListener('pointerup', up, { once: true });
    document.addEventListener('pointercancel', up, { once: true });
  });
}
function applyItemStyle(el, item) {
  el.style.left = `${item.x}px`;
  el.style.top = `${item.y}px`;
  el.style.transform = `rotate(${item.rotation || 0}deg)`;
  if (item.w) el.style.width = `${item.w}px`; else el.style.removeProperty('width');
  if (item.h) el.style.height = `${item.h}px`; else el.style.removeProperty('height');
  if (item.size) el.style.fontSize = `${item.size}px`;
  if (item.type === 'text' && item.color) el.style.color = item.color;
}

async function prepareGacha() {
  syncBoardText();
  const name = document.getElementById('nameInput').value.trim();
  const employeeId = document.getElementById('employeeInput').value.trim();
  if (!name) return showToast('กรุณากรอกชื่อ / Nickname');
  if (config().REQUIRE_EMAIL !== false && !employeeId) return showToast('กรุณากรอก Employee ID เพื่อกันหมุนซ้ำ');
  if (quizAnswers.length < QUIZ.length) return showToast('กรุณาทำ Quiz ให้ครบก่อนค่ะ');

  const emojiCount = boardItems.filter(item => item.type === 'emoji' && String(item.value || '').trim()).length;
  if (emojiCount < 1) {
    switchToolTab('decor');
    return showToast('อย่าลืมตกแต่งก่อนกดส่งนะ อย่างน้อยต้องมี Emoji 1 ตัว');
  }

  const submitBtn = document.getElementById('submitBoardBtn');
  submitBtn.disabled = true;
  showLoading('กำลังบันทึก Mood Board', 'ระบบจะไม่ค้าง แม้เปิดผ่าน LINE Browser...');

  try {
    const profile = getProfile();
    const safeEmp = (employeeId || name || 'USER').replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 28) || 'USER';
    const activeCardId = currentEditingCardId || `CARD-${safeEmp}-${Date.now().toString(36).toUpperCase()}`;
    const payload = buildPayload(activeCardId, profile);

    preparedPayload = payload;
    evaluationCompletedForSpin = false;
    pendingStoredResultAfterEval = null;

    let boardImage = '';
    try { boardImage = await createBoardSnapshot(720, 540, .76); } catch (e) { boardImage = ''; }
    lastBoardImage = boardImage;
    window.__lastBoardThumb = '';

    const localCard = makeLocalCard(payload, boardImage, true);
    upsertLocalWallCard(localCard);
    renderWall(mergeLocalCards(apiCache.wall.data || []));

    // Save locally first and retry in background, so LINE Browser never blocks the user.
    queueMoodBoardSave(payload);
    setTimeout(() => flushMoodBoardSaveQueue(true), 50);
    setTimeout(() => flushMoodBoardSaveQueue(true), 2500);

    hideLoading();
    showToast(currentEditingCardId ? 'อัปเดต Mood Board แล้ว ระบบจะ sync ลง Sheet ให้อัตโนมัติ' : 'บันทึก Mood Board แล้ว ระบบจะ sync ลง Sheet ให้อัตโนมัติ');
    goStep('stepGacha');
    loadPrizeStatus(false);

    if (boardImage && isLiveMode() && config().SAVE_BOARD_IMAGE_TO_DRIVE !== false && !isLineBrowser()) {
      setTimeout(() => uploadBoardImageNoCors(payload.cardId, payload.employeeId, boardImage, ''), 1500);
    }
  } catch (err) {
    console.error('prepareGacha unexpected error:', err);
    hideLoading();
    showToast('ยังไม่สามารถเตรียม Mood Board ได้ กรุณาลองกดส่งอีกครั้ง');
  } finally {
    submitBtn.disabled = false;
  }
}

function buildPayload(cardId, profile) {
  const boardMeta = collectBoardMeta();
  return {
    cardId,
    name: document.getElementById('nameInput').value.trim(),
    employeeId: document.getElementById('employeeInput').value.trim(),
    emailOrId: document.getElementById('employeeInput').value.trim(),
    team: document.getElementById('teamInput').value.trim(),
    profileKey: profile.key,
    profileName: profile.label,
    profileShort: profile.short,
    profileMeaning: profile.meaning,
    scores: profile.scores,
    quizAnswers: QUIZ.map((q, idx) => ({ question: q.q, answerKey: quizAnswers[idx], answerTitle: (q.options.find(o => o.key === quizAnswers[idx]) || {}).title || '' })),
    affirmation: document.getElementById('affirmInput').value.trim() || 'วันนี้ฉันอนุญาตให้ตัวเองพักได้',
    cardStyle: { themeIndex: selectedTheme, themeName: customThemeColor ? 'Custom Mood Color' : THEME_LABELS[selectedTheme], customColor: customThemeColor },
    boardMeta,
    boardItems: boardItems.map(item => normalizeBoardItemForSave(item, boardMeta)),
    stickers: boardItems.filter(x => x.type === 'emoji').map(x => x.value).slice(0, 40),
    userAgent: navigator.userAgent
  };
}

function collectBoardMeta() {
  const card = document.getElementById('cooldownCard');
  const canvas = document.getElementById('boardCanvas');
  const cardRect = card ? card.getBoundingClientRect() : { width: 520, height: 390, left: 0, top: 0, right: 520, bottom: 390 };
  const canvasRect = canvas ? canvas.getBoundingClientRect() : { width: 476, height: 188, left: 22, top: 120, right: 498, bottom: 308 };
  const cw = Math.max(1, cardRect.width || 520);
  const ch = Math.max(1, cardRect.height || 390);
  return {
    cardW: Math.round(cw),
    cardH: Math.round(ch),
    canvasW: Math.round(Math.max(1, canvasRect.width || 476)),
    canvasH: Math.round(Math.max(1, canvasRect.height || 188)),
    canvasLeftPct: +(((canvasRect.left - cardRect.left) / cw) * 100).toFixed(4),
    canvasTopPct: +(((canvasRect.top - cardRect.top) / ch) * 100).toFixed(4),
    canvasRightPct: +(((cardRect.right - canvasRect.right) / cw) * 100).toFixed(4),
    canvasBottomPct: +(((cardRect.bottom - canvasRect.bottom) / ch) * 100).toFixed(4),
    customColor: customThemeColor || ''
  };
}

function normalizeBoardItemForSave(item, boardMeta) {
  const canvasW = Math.max(1, Number(boardMeta?.canvasW || 476));
  const canvasH = Math.max(1, Number(boardMeta?.canvasH || 188));
  return {
    id: item.id,
    type: item.type,
    value: item.type === 'image' ? '[uploaded-image]' : item.value,
    x: Math.round(item.x),
    y: Math.round(item.y),
    w: item.w ? Math.round(item.w) : '',
    h: item.h ? Math.round(item.h) : '',
    nx: +(Number(item.x || 0) / canvasW).toFixed(5),
    ny: +(Number(item.y || 0) / canvasH).toFixed(5),
    nw: item.w ? +(Number(item.w || 0) / canvasW).toFixed(5) : '',
    nh: item.h ? +(Number(item.h || 0) / canvasH).toFixed(5) : '',
    size: item.size ? Math.round(item.size) : '',
    rotation: item.rotation || 0,
    color: item.color || '',
    fit: item.fit || ''
  };
}

function makeLocalCard(payload, boardImage, localPending = false) {
  return {
    cardId: payload.cardId,
    name: payload.name,
    employeeId: payload.employeeId,
    team: payload.team,
    profileName: payload.profileName,
    profileShort: payload.profileShort,
    affirmation: payload.affirmation,
    boardImage,
    boardMeta: payload.boardMeta || null,
    boardMetaJSON: payload.boardMeta ? JSON.stringify(payload.boardMeta) : '',
    layoutJSON: JSON.stringify(payload.boardItems || []),
    stickers: payload.stickers || [],
    timestamp: new Date().toISOString(),
    votes: 0,
    likes: 0,
    localPending
  };
}

function openEvaluationModal() {
  if (!preparedPayload) return showToast('กรุณาส่ง Mood Board ก่อนค่ะ');

  const stored = getStoredSpinResult();
  if ((gachaCompleted || stored) && evaluationCompletedForSpin) {
    if (stored) renderSpinResult(stored, { fromStored: true });
    else if (lastSpinResponse) renderSpinResult(lastSpinResponse, { fromStored: true });
    disableSpinButton('หมุนแล้ว — ดูผลใน Gallery');
    return showToast('คุณหมุน Gacha แล้ว 1 ครั้ง ดูผลได้ที่ Gallery');
  }

  // V27: ต้องประเมินก่อนเสมอ แม้กรณีมีผลเก่าจาก localStorage / เคยหมุนแล้ว
  if (stored || (gachaCompleted && lastSpinResponse)) {
    pendingStoredResultAfterEval = stored || lastSpinResponse;
  } else {
    pendingStoredResultAfterEval = null;
  }

  document.getElementById('evaluationModal').classList.remove('hidden');
}
function closeEvaluationModal() { document.getElementById('evaluationModal').classList.add('hidden'); }
function setEvalOverall(score) {
  document.getElementById('evalOverall').value = String(score);
  document.querySelectorAll('#evalOverallStars button').forEach((btn, idx) => { btn.textContent = idx < score ? '★' : '☆'; btn.classList.toggle('active', idx < score); });
}
function getSelectedRadioValue(name) {
  return document.querySelector(`input[name="${name}"]:checked`)?.value || '';
}
function submitEvaluationAndSpin() {
  if (!preparedPayload) return showToast('ไม่พบข้อมูลผลงาน กรุณากลับไปหน้า Mood Board');
  const overallRating = Number(document.getElementById('evalOverall').value || 0);
  let feeling = getSelectedRadioValue('evalFeeling');
  const other = document.getElementById('evalFeelingOther').value.trim();
  if (feeling === 'Other' && other) feeling = `Other: ${other}`;
  const wantAgain = getSelectedRadioValue('wantAgain');
  if (!overallRating) return showToast('กรุณาให้คะแนนความพึงพอใจโดยรวม');
  if (!feeling) return showToast('กรุณาเลือกความรู้สึกหลังจบกิจกรรม 1 ข้อ');
  if (!wantAgain) return showToast('กรุณาเลือกว่าต้องการให้มีกิจกรรมแบบนี้อีกหรือไม่');

  preparedPayload.evaluation = {
    overallRating,
    feelings: [feeling],
    feeling,
    wantAgain,
    comment: document.getElementById('evalComment').value.trim()
  };

  evaluationCompletedForSpin = true;
  closeEvaluationModal();

  // ถ้าเป็นผลเดิมที่เคยหมุนแล้ว ให้บันทึกประเมินใน session นี้ก่อน แล้วค่อยโชว์ผลเดิม ไม่สุ่มใหม่
  if (pendingStoredResultAfterEval) {
    const existing = pendingStoredResultAfterEval;
    pendingStoredResultAfterEval = null;
    renderSpinResult(existing, { fromStored: true });
    disableSpinButton('หมุนแล้ว — ดูผลใน Gallery');
    return;
  }

  showLoading('กำลังหมุนวงล้อ', 'ส่งประเมินแล้ว ระบบกำลังสุ่มรางวัลให้ทันที...');
  startSpin(preparedPayload);
}

async function startSpin(payload) {
  const spinBtn = document.getElementById('spinBtn');
  const wheel = document.getElementById('wheel');
  const resultBox = document.getElementById('spinResult');
  if (!payload) return showToast('ไม่พบข้อมูลสำหรับหมุน Gacha');

  const ev = payload.evaluation || {};
  const hasEval = evaluationCompletedForSpin && ev.overallRating && (ev.feeling || (Array.isArray(ev.feelings) && ev.feelings.length)) && ev.wantAgain;
  if (!hasEval) {
    document.getElementById('evaluationModal')?.classList.remove('hidden');
    return showToast('กรุณาประเมินก่อนหมุน Gacha');
  }

  
  // V35_EVAL_HARD_GATE: Gacha is locked until Evaluation is fully completed.
  const evCheck = payload && payload.evaluation ? payload.evaluation : {};
  const evaluationOk = !!(evaluationCompletedForSpin && evCheck.overallRating && (evCheck.feeling || (Array.isArray(evCheck.feelings) && evCheck.feelings.length)) && evCheck.wantAgain);
  if (!evaluationOk) {
    document.getElementById('evaluationModal')?.classList.remove('hidden');
    enableSpinButton();
    hideLoading();
    return showToast('กรุณาประเมินให้เสร็จก่อนหมุน Gacha');
  }

const stored = getStoredSpinResult();
  if (gachaCompleted || stored) {
    const existing = stored || lastSpinResponse;
    if (existing) {
      renderSpinResult(existing, { fromStored: true });
      disableSpinButton('หมุนแล้ว — ดูผลใน Gallery');
      return;
    }
  }

  if (gachaInProgress) return showToast('ระบบกำลังสุ่มรางวัลอยู่ กรุณารอสักครู่');

  const spinPayload = buildSpinPayload(payload);
  queueMoodBoardSave(payload);
  flushMoodBoardSaveQueue(true);
  gachaInProgress = true;
  disableSpinButton('กำลังหมุน...');
  showLoading('กำลังสุ่มรางวัล', 'ระบบกำลังล็อกรางวัลของคุณ 1 ครั้งต่อคน');

  if (resultBox) {
    resultBox.classList.add('loading');
    resultBox.innerHTML = '<strong>กำลังสุ่มรางวัล...</strong><small>ระบบกำลังเลือกจาก PrizePool 80 รางวัล</small>';
  }

  const finalRotation = 900 + Math.floor(Math.random() * 360);
  if (wheel) {
    wheel.classList.add('is-spinning');
    wheel.style.transition = 'none';
    wheel.style.transform = 'rotate(0deg)';
    requestAnimationFrame(() => {
      wheel.style.transition = 'transform .8s cubic-bezier(.16,.9,.18,1)';
      wheel.style.transform = `rotate(${finalRotation}deg)`;
    });
  }

  const startedAt = Date.now();

  try {
    const res = await api('spinGacha', spinPayload, { timeout: 45000 });
    if (!res || !res.ok) throw new Error((res && res.message) || 'ไม่สามารถสุ่มรางวัลได้');
    await applySpinSuccess(res, spinPayload, resultBox, startedAt);
  } catch (err) {
    console.warn('Gacha spin error, recovering:', err);
    if (resultBox) {
      resultBox.classList.add('loading');
      resultBox.innerHTML = '<strong>กำลังตรวจผลรางวัล...</strong><small>หากระบบสุ่มสำเร็จแล้ว จะดึงผลรางวัลเดิมให้อัตโนมัติ</small>';
    }
    showLoading('กำลังตรวจผลรางวัล', 'ระบบกำลังตรวจว่ารางวัลถูกล็อกไว้แล้วหรือยัง...');
    const recovered = await recoverSpinAfterError(spinPayload);
    if (recovered) {
      await applySpinSuccess(recovered, spinPayload, resultBox, startedAt, { recovered: true });
    } else {
      hideLoading();
      gachaCompleted = false;
      if (resultBox) {
        resultBox.classList.remove('loading');
        resultBox.innerHTML = '<strong>ยังไม่สามารถสุ่มได้</strong><small>กรุณากด Refresh แล้วลองใหม่อีกครั้ง หรือเช็ก Apps Script URL /exec และ Deploy New version</small>';
      }
      enableSpinButton();
      showToast(err.message || 'Gacha error');
    }
  } finally {
    gachaInProgress = false;
    setTimeout(() => { if (wheel) wheel.classList.remove('is-spinning'); }, 850);
  }
}

async function applySpinSuccess(res, spinPayload, resultBox, startedAt, opts = {}) {
  lastSpinResponse = enrichSpinResponseWithUser(res, spinPayload);
  gachaCompleted = true;
  storeSpinResult(lastSpinResponse);

  if (lastSpinResponse.cardId) {
    preparedPayload.cardId = lastSpinResponse.cardId;
    spinPayload.cardId = lastSpinResponse.cardId;
  }

  if (lastSpinResponse.prizeStatus) {
    apiCache.prize = { ts: Date.now(), data: lastSpinResponse.prizeStatus };
    renderPrizeStatus(lastSpinResponse.prizeStatus);
  } else {
    loadPrizeStatus(false, true);
  }

  const wait = Math.max(0, 650 - (Date.now() - startedAt));
  await delay(wait);

  hideLoading();
  if (resultBox) resultBox.classList.remove('loading');
  refreshWall(false, true);
  goStep('stepWall');
  renderSpinResult(lastSpinResponse, opts);
  disableSpinButton('หมุนแล้ว — ดูผลใน Gallery');
  setTimeout(() => loadPrizeStatus(false, true), 1500);
}

async function recoverSpinAfterError(spinPayload) {
  const payload = {
    employeeId: spinPayload.employeeId || spinPayload.emailOrId,
    emailOrId: spinPayload.employeeId || spinPayload.emailOrId,
    name: spinPayload.name,
    team: spinPayload.team
  };
  for (let i = 0; i < 4; i++) {
    await delay(i === 0 ? 900 : 1500);
    try {
      const res = await api('getMyGachaResult', payload, { timeout: 30000 });
      if (res && res.ok && res.hasPrize && res.prize) return res;
    } catch (e) {
      console.warn('Recover check failed:', e);
    }
  }
  return null;
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, Math.max(0, ms || 0)));
}

function disableSpinButton(text = 'หมุนแล้ว') {
  const btn = document.getElementById('spinBtn');
  if (btn) { btn.disabled = true; btn.textContent = text; btn.classList.add('disabled'); }
}
function enableSpinButton() {
  const btn = document.getElementById('spinBtn');
  if (btn) { btn.disabled = false; btn.textContent = 'ประเมิน + หมุนวงล้อ'; btn.classList.remove('disabled'); }
}
function currentParticipantKeyForStorage() {
  const id = String(preparedPayload?.employeeId || document.getElementById('employeeInput')?.value || '').trim().toLowerCase();
  return id ? `cys_gacha_result_${id.replace(/[^a-z0-9@._-]/g,'_')}` : '';
}
function storeSpinResult(res) {
  try {
    const key = currentParticipantKeyForStorage();
    if (key && res && res.ok) localStorage.setItem(key, JSON.stringify({ ...res, storedAt: Date.now() }));
  } catch (e) {}
}
function getStoredSpinResult() {
  try {
    const key = currentParticipantKeyForStorage();
    if (!key) return null;
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && parsed.prize) return parsed;
  } catch (e) {}
  return null;
}
function enrichSpinResponseWithUser(res, spinPayload) {
  return Object.assign({}, res || {}, {
    name: res?.name || res?.participantName || spinPayload.name || '',
    employeeId: res?.employeeId || res?.employeeID || spinPayload.employeeId || spinPayload.emailOrId || '',
    team: res?.team || spinPayload.team || ''
  });
}
function buildSpinPayload(payload) {
  const p = payload || preparedPayload || {};
  const evaluation = p.evaluation || {};
  return {
    cardId: String(p.cardId || '').slice(0, 80),
    name: String(p.name || document.getElementById('nameInput')?.value || '').trim().slice(0, 80),
    employeeId: String(p.employeeId || p.emailOrId || document.getElementById('employeeInput')?.value || '').trim().slice(0, 160),
    emailOrId: String(p.employeeId || p.emailOrId || document.getElementById('employeeInput')?.value || '').trim().slice(0, 160),
    team: String(p.team || document.getElementById('teamInput')?.value || '').trim().slice(0, 100),
    profileKey: String(p.profileKey || getProfile().key || 'calm'),
    profileName: String(p.profileName || getProfile().label || ''),
    profileShort: String(p.profileShort || getProfile().short || ''),
    affirmation: String(p.affirmation || document.getElementById('affirmInput')?.value || '').trim().slice(0, 220),
    scores: p.scores || getProfile().scores || {},
    evaluation: {
      overallRating: evaluation.overallRating || '',
      feeling: evaluation.feeling || (Array.isArray(evaluation.feelings) ? evaluation.feelings[0] : ''),
      feelings: Array.isArray(evaluation.feelings) ? evaluation.feelings.slice(0, 8) : (evaluation.feeling ? [evaluation.feeling] : []),
      wantAgain: evaluation.wantAgain || '',
      comment: String(evaluation.comment || '').slice(0, 500)
    },
    userAgent: navigator.userAgent.slice(0, 400)
  };
}

function normalizePrizeName(name) {
  const text = String(name || '');
  const m = text.match(/(?:Starbucks\s*)?Gift Card\s*(500|300|200|100)\s*บาท/i);
  if (m) return `Starbuck Gift Card ${m[1]} บาท`;
  return text.replace(/^Starbuck Gift Card/i, 'Starbuck Gift Card');
}

function renderSpinResult(res, options = {}) {
  const cfg = config();
  const prize = res.prize || {};
  const isGift = /gift|gacha/i.test(prize.type || '') || Number(prize.budget || 0) > 0;
  const typeLabel = isGift ? 'Gacha Gift' : 'Wellness Coupon';
  const prizeName = normalizePrizeName(prize.name || typeLabel);
  const lineId = (cfg.CONTACT_LINE_ID || 'Friendly_dukdik').replace(/^friendly/i, 'Friendly');
  const name = escapeHtml(res.name || res.participantName || preparedPayload?.name || document.getElementById('nameInput')?.value || '-');
  const employeeId = escapeHtml(res.employeeId || res.employeeID || preparedPayload?.employeeId || document.getElementById('employeeInput')?.value || '-');
  const team = escapeHtml(res.team || preparedPayload?.team || document.getElementById('teamInput')?.value || '-');

  const resultBox = document.getElementById('spinResult');
  if (resultBox) {
    resultBox.classList.remove('loading');
    resultBox.innerHTML = `
      <p>${res.duplicate ? 'คุณเคยหมุนแล้ว ระบบแสดงผลเดิม' : 'ผล Wellness Gacha ของคุณคือ'}</p>
      <strong>${escapeHtml(prizeName)}</strong>
      <small>${escapeHtml(typeLabel)}</small>
      <button class="ghost small" onclick="goStep('stepWall')">ดู Mood Board Gallery</button>`;
  }

  const modal = document.getElementById('resultModal');
  const content = document.getElementById('resultModalContent');
  if (modal && content) {
    content.innerHTML = `
      <div class="minimal-result">
        <div class="result-badge cute-result-badge">${isGift ? '🎁' : '💗'}</div>
        <p class="eyebrow">Gacha Result</p>
        <h2>${res.duplicate || options.fromStored ? 'ผลรางวัลของคุณ' : 'ผลรางวัลของคุณ'}</h2>
        <div class="result-prize-name minimal-prize">${escapeHtml(prizeName)}</div>
        <p class="result-type-pill">${escapeHtml(typeLabel)}</p>
        <div class="winner-identity">
          <span><b>ชื่อ:</b> ${name}</span>
          <span><b>Employee ID:</b> ${employeeId}</span>
          <span><b>Team:</b> ${team}</span>
        </div>
        <div class="claim-box claim-minimal">
          <b>วิธีรับรางวัล</b>
          <p>แคปหน้าจอนี้ แล้วส่งมาที่ <b>LINE ID: ${escapeHtml(lineId)}</b> หรือใส่ใน Album ของ <b>LINE Customer Experience</b></p>
        </div>
        <div class="button-row center result-buttons">
          <button class="primary" onclick="closeResultModal(); goStep('stepWall')">ดู Mood Board Gallery</button>
          <button class="ghost" onclick="closeResultModal()">ปิด</button>
        </div>
      </div>`;
    modal.classList.remove('hidden');
  }
}
function closeResultModal() { document.getElementById('resultModal')?.classList.add('hidden'); }
function loadPrizeStatus(showLoadingFlag = false, force = false) {
  if (!force && apiCache.prize.data && Date.now() - apiCache.prize.ts < 12000) return renderPrizeStatus(apiCache.prize.data);
  if (showLoadingFlag) showLoading('กำลังโหลดรางวัล', 'อัปเดตสถานะรางวัลล่าสุด...');
  api('getPrizeStatus', {}, { timeout: 15000 }).then(res => {
    if (!res || !res.ok) throw new Error((res && res.message) || 'Prize status unavailable');
    apiCache.prize = { ts: Date.now(), data: res };
    renderPrizeStatus(res);
  }).catch(err => {
    console.warn('Prize status error:', err);
    const fallback = apiCache.prize.data || { ok: true, totalRemaining: 0, giftRemaining: 0, couponRemaining: 0, recent: [], offline: true };
    renderPrizeStatus(fallback);
    showToast('โหลดสถานะรางวัลไม่สำเร็จ กรุณากด Refresh อีกครั้ง');
  }).finally(() => { if (showLoadingFlag) hideLoading(); });
}
function renderPrizeStatus(res) {
  const gift = Number(res?.giftRemaining ?? 0);
  const coupon = Number(res?.couponRemaining ?? 0);
  const totalLeft = Number(res?.totalRemaining ?? (gift + coupon));
  prizePoolTotal = Number(res?.total ?? prizePoolTotal ?? 80) || 80;
  const recent = res?.recent || [];
  document.getElementById('poolStats').innerHTML = `
    <div class="pool-stat available-total"><span>Available</span><strong>${totalLeft}</strong></div>
    <div class="pool-stat"><span>Gift cards</span><strong>${gift}</strong></div>
    <div class="pool-stat"><span>Coupons / Messages</span><strong>${coupon}</strong></div>
  `;
  updateWheel(totalLeft);
  document.getElementById('recentGachaList').innerHTML = recent.length
    ? recent.map(r => `<div class="recent-row"><span class="recent-pill">${escapeHtml(formatPrizeType(r.prizeType || r.type))}</span><small>${escapeHtml(r.timestamp || '')}</small></div>`).join('')
    : '<p class="hint">ยังไม่มี recent gacha</p>';
}
function updateWheel(totalLeft) {
  const wheel = document.getElementById('wheel');
  const txt = document.getElementById('wheelLeftText');
  const total = clamp(Number(totalLeft || 0), 0, Number(prizePoolTotal || 80));
  if (txt) txt.textContent = `${total} left`;
  if (!wheel) return;
  if (total <= 0) {
    wheel.style.background = 'conic-gradient(#f1f5f9 0deg 360deg)';
    return;
  }
  const colors = ['#dfefff','#fff0ba','#ffe1e7','#e3f3dc','#e8ddff','#fff8ec'];
  const seg = 360 / total;
  const parts = [];
  for (let i = 0; i < total; i++) parts.push(`${colors[i % colors.length]} ${i * seg}deg ${(i + 1) * seg - .45}deg`, `#ffffff ${(i + 1) * seg - .45}deg ${(i + 1) * seg}deg`);
  wheel.style.background = `conic-gradient(${parts.join(',')})`;
}
function formatPrizeType(type) { return /gift|gacha/i.test(type || '') ? 'Gift Card' : 'Wellness Coupon'; }

function refreshWall(showLoadingFlag = true, force = false) {
  const box = document.getElementById('wallBox');
  if (!force && apiCache.wall.data.length && Date.now() - apiCache.wall.ts < 9000) return renderWall(mergeLocalCards(apiCache.wall.data));
  if (showLoadingFlag) box.innerHTML = '<p class="hint">กำลังโหลด Gallery...</p>';
  api('getWall', {}, { timeout: 12000 }).then(res => {
    const cards = (res && res.cards) || [];
    apiCache.wall = { ts: Date.now(), data: cards };
    renderWall(mergeLocalCards(cards));
  }).catch(() => renderWall(mergeLocalCards(localDemo.cards || [])));
}
function mergeLocalCards(cards) {
  const map = new Map();
  (cards || []).forEach(c => map.set(c.cardId, c));
  submittedLocalCards.forEach(c => map.set(c.cardId, Object.assign({}, map.get(c.cardId) || {}, c)));
  return Array.from(map.values()).sort((a,b) => String(b.timestamp || '').localeCompare(String(a.timestamp || '')));
}
function upsertLocalWallCard(card) {
  const idx = submittedLocalCards.findIndex(c => c.cardId === card.cardId || (c.localPending && card.localPending));
  if (idx >= 0) submittedLocalCards[idx] = Object.assign({}, submittedLocalCards[idx], card);
  else submittedLocalCards.unshift(card);
}
function replaceLocalCardId(oldId, newId) { submittedLocalCards.forEach(c => { if (c.cardId === oldId) { c.cardId = newId; c.localPending = false; } }); }



function resolveWallImage(card) {
  // V37: prefer exact screenshot when available, otherwise rebuild the card with the same DOM geometry.
  return card.boardThumbDataUrl || card.boardImage || card.boardImageUrl || '';
}

function parseMaybeJSON(value, fallback) {
  if (Array.isArray(value)) return value;
  if (!value) return fallback;
  try { return JSON.parse(value); } catch (e) { return fallback; }
}

function safeThemeIndex(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return 0;
  return Math.max(0, Math.min(THEME_COLORS.length - 1, n));
}

function getGalleryBoardMeta(c) {
  const raw = (c && typeof c.boardMeta === 'object' && c.boardMeta) ? c.boardMeta : parseMaybeJSON(c?.boardMetaJSON || c?.BoardMetaJSON || '', {});
  const meta = raw && typeof raw === 'object' ? raw : {};
  const cardW = Math.max(1, Number(meta.cardW || 520));
  const cardH = Math.max(1, Number(meta.cardH || 390));
  return {
    cardW,
    cardH,
    canvasW: Math.max(1, Number(meta.canvasW || 476)),
    canvasH: Math.max(1, Number(meta.canvasH || 188)),
    canvasLeftPct: Number.isFinite(Number(meta.canvasLeftPct)) ? Number(meta.canvasLeftPct) : 4.2308,
    canvasTopPct: Number.isFinite(Number(meta.canvasTopPct)) ? Number(meta.canvasTopPct) : 30.7692,
    canvasRightPct: Number.isFinite(Number(meta.canvasRightPct)) ? Number(meta.canvasRightPct) : 4.2308,
    canvasBottomPct: Number.isFinite(Number(meta.canvasBottomPct)) ? Number(meta.canvasBottomPct) : 21.0256,
    customColor: meta.customColor || ''
  };
}

function pctStyle(value, min = -25, max = 125) {
  const n = Number(value);
  return `${clamp(Number.isFinite(n) ? n : 0, min, max).toFixed(4)}%`;
}

function galleryItemPosition(item, meta) {
  const hasNx = Number.isFinite(Number(item.nx));
  const hasNy = Number.isFinite(Number(item.ny));
  const nx = hasNx ? Number(item.nx) : (Number(item.x || 0) / meta.canvasW);
  const ny = hasNy ? Number(item.ny) : (Number(item.y || 0) / meta.canvasH);
  const nw = Number.isFinite(Number(item.nw)) ? Number(item.nw) : (Number(item.w || 0) / meta.canvasW);
  const nh = Number.isFinite(Number(item.nh)) ? Number(item.nh) : (Number(item.h || 0) / meta.canvasH);
  return { nx, ny, nw, nh };
}

function hasUploadedImageItem(c) {
  const items = parseMaybeJSON(c.layoutJSON || c.layout || c.LayoutJSON, []);
  return Array.isArray(items) && items.some(item => (item && item.type === 'image'));
}

function itemPixelsFromSaved(item, meta) {
  const hasNx = Number.isFinite(Number(item.nx));
  const hasNy = Number.isFinite(Number(item.ny));
  const x = hasNx ? Number(item.nx) * meta.canvasW : Number(item.x || 0);
  const y = hasNy ? Number(item.ny) * meta.canvasH : Number(item.y || 0);
  const hasNw = Number.isFinite(Number(item.nw));
  const hasNh = Number.isFinite(Number(item.nh));
  const w = hasNw ? Number(item.nw) * meta.canvasW : Number(item.w || 0);
  const h = hasNh ? Number(item.nh) * meta.canvasH : Number(item.h || 0);
  return { x, y, w, h };
}

// V40: collect live editor geometry only after the Mood Board step is visible.
// When called from Gallery, hidden elements report 0/1 px and made emojis tiny after edit.
function collectLiveEditorMetaForEdit(savedMeta) {
  const meta = collectBoardMeta();
  const saved = savedMeta || {};
  if (meta.canvasW < 80 || meta.canvasH < 80 || meta.cardW < 120 || meta.cardH < 120) {
    return {
      cardW: Math.max(1, Number(saved.cardW || 520)),
      cardH: Math.max(1, Number(saved.cardH || 390)),
      canvasW: Math.max(1, Number(saved.canvasW || 476)),
      canvasH: Math.max(1, Number(saved.canvasH || 188)),
      canvasLeftPct: Number.isFinite(Number(saved.canvasLeftPct)) ? Number(saved.canvasLeftPct) : meta.canvasLeftPct,
      canvasTopPct: Number.isFinite(Number(saved.canvasTopPct)) ? Number(saved.canvasTopPct) : meta.canvasTopPct,
      canvasRightPct: Number.isFinite(Number(saved.canvasRightPct)) ? Number(saved.canvasRightPct) : meta.canvasRightPct,
      canvasBottomPct: Number.isFinite(Number(saved.canvasBottomPct)) ? Number(saved.canvasBottomPct) : meta.canvasBottomPct,
      customColor: saved.customColor || meta.customColor || ''
    };
  }
  return meta;
}

function scaledEditorFontSize(item, savedMeta, liveMeta) {
  const base = Number(item.size || (item.type === 'text' ? 24 : 36));
  const sx = Number(liveMeta.canvasW || 1) / Math.max(1, Number(savedMeta.canvasW || liveMeta.canvasW || 1));
  const sy = Number(liveMeta.canvasH || 1) / Math.max(1, Number(savedMeta.canvasH || liveMeta.canvasH || 1));
  const scale = Math.min(sx, sy);
  return clamp(Math.round(base * scale), item.type === 'text' ? 10 : 18, item.type === 'text' ? 96 : 140);
}

function galleryExactCard(c) {
  const mood = c.profileShort || profileShortFromLabel(c.profileName) || 'Mood Profile';
  const themeIndex = safeThemeIndex(c.themeIndex ?? c.ThemeIndex ?? 0);
  const meta = getGalleryBoardMeta(c);
  const base = (c.cardStyle && c.cardStyle.customColor) || c.customColor || meta.customColor || THEME_COLORS[themeIndex] || '#ffe1e7';
  const hasCustom = !!((c.cardStyle && c.cardStyle.customColor) || c.customColor || meta.customColor);
  const themeClass = hasCustom ? 'custom-theme' : `theme-${themeIndex}`;
  const items = parseMaybeJSON(c.layoutJSON || c.layout || c.LayoutJSON, []);
  const stickers = (Array.isArray(c.stickers) ? c.stickers : parseMaybeJSON(c.stickers, [])).filter(Boolean);
  const fallbackItems = Array.isArray(items) && items.length ? items : stickers.slice(0, 12).map((v, i) => ({
    type: 'emoji', value: v, x: 42 + (i % 4) * 92, y: 128 + Math.floor(i / 4) * 72, size: 36, rotation: 0
  }));

  const itemHtml = fallbackItems.slice(0, 80).map(item => {
    const type = item.type || 'emoji';
    const px = itemPixelsFromSaved(item, meta);
    const rot = Number(item.rotation || 0);
    const size = clamp(Number(item.size || (type === 'text' ? 24 : 36)), 10, 140);
    const color = item.color || '#2f4054';
    const wh = `${px.w ? `width:${Math.round(px.w)}px;` : ''}${px.h ? `height:${Math.round(px.h)}px;` : ''}`;
    const style = `left:${Math.round(px.x)}px;top:${Math.round(px.y)}px;${wh}transform:rotate(${rot}deg);font-size:${Math.round(size)}px;${type === 'text' ? `color:${escapeAttr(color)};` : ''}`;
    if (type === 'image') {
      const src = String(item.value || '');
      const fit = item.fit || 'cover';
      const img = /^data:image\//i.test(src) ? `<img src="${escapeAttr(src)}" alt="collage image" style="object-fit:${escapeAttr(fit)}">` : '<span class="gallery-image-placeholder">🖼️</span>';
      return `<div class="board-item image gallery-board-item" style="${style}">${img}</div>`;
    }
    if (type === 'text') return `<div class="board-item text gallery-board-item" style="${style}">${escapeHtml(item.value || '')}</div>`;
    return `<div class="board-item emoji gallery-board-item emoji-font" style="${style}">${escapeHtml(item.value || '🌸')}</div>`;
  }).join('');

  const customStyle = hasCustom ? `background:linear-gradient(135deg, ${escapeAttr(base)}, #fff8ec);` : '';
  return `<div class="gallery-exact-stage" data-card-w="${escapeAttr(meta.cardW)}" data-card-h="${escapeAttr(meta.cardH)}">
    <div class="cooldown-card gallery-exact-card ${themeClass}" style="--meta-w:${escapeAttr(meta.cardW)}px;--meta-h:${escapeAttr(meta.cardH)}px;--g-left:${pctStyle(meta.canvasLeftPct, -5, 60)};--g-top:${pctStyle(meta.canvasTopPct, -5, 70)};--g-right:${pctStyle(meta.canvasRightPct, -5, 60)};--g-bottom:${pctStyle(meta.canvasBottomPct, -5, 70)};${customStyle}">
      <div class="card-bg-deco deco-a">○</div>
      <div class="card-bg-deco deco-b">✦</div>
      <div class="card-topline">MY MOOD BOARD</div>
      <h3>${escapeHtml(c.name || 'Your Name')}</h3>
      <p class="gallery-exact-profile"><b>${escapeHtml(mood)}</b> — ${escapeHtml(c.affirmation || 'วันนี้ฉันอนุญาตให้ตัวเองพักได้')}</p>
      <div class="board-canvas gallery-exact-canvas" aria-hidden="true">${itemHtml}</div>
      <p class="gallery-exact-affirm">${escapeHtml(c.affirmation || 'วันนี้ฉันอนุญาตให้ตัวเองพักได้')}</p>
    </div>
  </div>`;
}

function galleryFallbackCard(c) {
  // Last-resort fallback only. V37 normally uses galleryExactCard() for saved LayoutJSON.
  const mood = c.profileShort || profileShortFromLabel(c.profileName) || 'Mood';
  const themeIndex = safeThemeIndex(c.themeIndex ?? c.ThemeIndex ?? 0);
  const meta = getGalleryBoardMeta(c);
  const base = (c.cardStyle && c.cardStyle.customColor) || c.customColor || meta.customColor || THEME_COLORS[themeIndex] || '#ffe1e7';
  const items = parseMaybeJSON(c.layoutJSON || c.layout || c.LayoutJSON, []);
  const stickers = (Array.isArray(c.stickers) ? c.stickers : parseMaybeJSON(c.stickers, [])).filter(Boolean);
  const fallbackItems = Array.isArray(items) && items.length ? items : stickers.slice(0, 12).map((v, i) => ({
    type: 'emoji',
    value: v,
    nx: .08 + (i % 4) * .20,
    ny: .12 + Math.floor(i / 4) * .30,
    size: 36,
    rotation: 0
  }));

  const itemHtml = fallbackItems.slice(0, 60).map(item => {
    const type = item.type || 'emoji';
    const pos = galleryItemPosition(item, meta);
    const rot = Number(item.rotation || 0);
    const size = clamp(Number(item.size || 36), 12, 120);
    const defaultScale = clamp(360 / meta.cardW, .42, 1).toFixed(4);
    const color = item.color || '#263447';
    const baseStyle = `left:${pctStyle(pos.nx * 100)};top:${pctStyle(pos.ny * 100)};font-size:calc(var(--gb-scale, ${defaultScale}) * ${size}px);transform:rotate(${rot}deg);`;

    if (type === 'image') {
      const wPct = pctStyle((pos.nw || (Number(item.w || 90) / meta.canvasW)) * 100, 4, 100);
      const hPct = pctStyle((pos.nh || (Number(item.h || 70) / meta.canvasH)) * 100, 4, 100);
      return `<span class="gallery-fallback-image" style="${baseStyle}width:${wPct};height:${hPct};">🖼️</span>`;
    }

    const value = type === 'text' ? escapeHtml(item.value || '') : escapeHtml(item.value || '🌸');
    const cls = type === 'text' ? 'gallery-fallback-text' : 'gallery-fallback-emoji';
    const wStyle = type === 'text' && (pos.nw || item.w) ? `width:${pctStyle((pos.nw || (Number(item.w || 120) / meta.canvasW)) * 100, 8, 100)};` : '';
    return `<span class="${cls}" style="${baseStyle}${wStyle}color:${escapeAttr(color)}">${value}</span>`;
  }).join('');

  const defaultScale = clamp(360 / meta.cardW, .42, 1).toFixed(4);
  const boardVars = [
    `--gb-scale:${defaultScale}`,
    `--gb-left:${pctStyle(meta.canvasLeftPct, 0, 40)}`,
    `--gb-top:${pctStyle(meta.canvasTopPct, 0, 55)}`,
    `--gb-right:${pctStyle(meta.canvasRightPct, 0, 40)}`,
    `--gb-bottom:${pctStyle(meta.canvasBottomPct, 0, 45)}`
  ].join(';');

  return `<div class="gallery-fallback-board" data-card-w="${escapeAttr(meta.cardW)}" style="background:linear-gradient(135deg, ${escapeAttr(base)}, #fff8ec);${boardVars}">
    <div class="gallery-card-static">
      <div class="gallery-fallback-top">MY MOOD BOARD</div>
      <h4>${escapeHtml(c.name || 'Your Name')}</h4>
      <p><b>${escapeHtml(mood)}</b> — ${escapeHtml(c.affirmation || 'วันนี้ฉันอนุญาตให้ตัวเองพักได้')}</p>
      <div class="gallery-fallback-affirm">${escapeHtml(c.affirmation || 'วันนี้ฉันอนุญาตให้ตัวเองพักได้')}</div>
      <div class="gallery-card-deco-a"></div>
      <div class="gallery-card-deco-b">✦</div>
    </div>
    <div class="gallery-fallback-canvas">${itemHtml || '<span class="gallery-fallback-emoji" style="left:42%;top:42%;font-size:calc(var(--gb-scale,.69) * 42px)">🌸</span>'}</div>
  </div>`;
}


function syncGalleryScales(root) {
  const scope = root || document;
  scope.querySelectorAll('.gallery-fallback-board').forEach(board => {
    const metaW = Math.max(1, Number(board.getAttribute('data-card-w') || 520));
    const width = Math.max(1, board.getBoundingClientRect().width || 360);
    board.style.setProperty('--gb-scale', clamp(width / metaW, .38, 1.4).toFixed(4));
  });
  scope.querySelectorAll('.gallery-exact-stage').forEach(stage => {
    const metaW = Math.max(1, Number(stage.getAttribute('data-card-w') || 520));
    const metaH = Math.max(1, Number(stage.getAttribute('data-card-h') || 390));
    const width = Math.max(1, stage.getBoundingClientRect().width || 360);
    const scale = width / metaW;
    stage.style.setProperty('--gallery-scale', scale.toFixed(6));
    stage.style.setProperty('--gallery-meta-ratio', (metaW / metaH).toFixed(6));
  });
}
window.addEventListener('resize', () => syncGalleryScales());

function renderWall(cards) {
  const box = document.getElementById('wallBox');
  currentWallCards = Array.isArray(cards) ? cards.slice() : [];
  if (!currentWallCards.length) { box.innerHTML = '<p class="hint">ยังไม่มีผลงานใน Gallery</p>'; return; }
  box.innerHTML = currentWallCards.map(c => {
    const img = resolveWallImage(c);
    const hasLayout = !!(c.layoutJSON || c.layout || c.LayoutJSON || c.boardMetaJSON || c.boardMeta || (Array.isArray(c.stickers) && c.stickers.length));
    const count = Number(c.likes ?? c.votes ?? 0);
    const liked = likedLocal[c.cardId] ? 'liked' : '';
    const sentAt = c.timestamp ? formatDateTime(c.timestamp) : '-';
    const mood = c.profileShort || profileShortFromLabel(c.profileName) || 'Mood';
    const team = c.team || '-';
    // V37: exact card renderer uses the same DOM geometry as the decorate page.
    // If a board contains uploaded photos, use the saved snapshot when available because the sheet stores photos as placeholders.
    const imagePart = (hasUploadedImageItem(c) && img)
      ? `<div class="wall-image-frame no-crop-board"><img class="wall-image" src="${escapeAttr(img)}" loading="lazy" decoding="async" alt="Mood board card" onclick="openImagePreview('${escapeAttr(img)}')"></div>`
      : (hasLayout
        ? `<div class="wall-image-frame no-crop-board" role="button" tabindex="0">${galleryExactCard(c)}</div>`
        : (img ? `<div class="wall-image-frame no-crop-board"><img class="wall-image" src="${escapeAttr(img)}" loading="lazy" decoding="async" alt="Mood board card" onclick="openImagePreview('${escapeAttr(img)}')"></div>` : `<div class="wall-image-frame no-crop-board">${galleryFallbackCard(c)}</div>`));
    return `<article class="wall-card" data-card-id="${escapeAttr(c.cardId)}">
      <button class="wall-delete-btn" type="button" title="ลบ Mood Board" aria-label="ลบ Mood Board" onclick="requestDeleteCard('${escapeAttr(c.cardId)}')">✕</button>
      ${imagePart}
      ${c.localPending ? '<span class="pending-badge">เพิ่งส่ง</span>' : ''}
      <div class="wall-card-head">
        <h3>${escapeHtml(c.name || 'Anonymous')}</h3>
        <div class="wall-mini-meta">
          <span>${escapeHtml(mood)}</span>
          <span>${escapeHtml(team)}</span>
        </div>
      </div>
      <div class="wall-actions-row">
        <button class="wall-detail-btn" type="button" onclick="openWallDetail('${escapeAttr(c.cardId)}')">ดูรายละเอียด</button>
        <button class="wall-edit-btn" type="button" onclick="editWallCard('${escapeAttr(c.cardId)}')">แก้ไข</button>
      </div>
      <button class="like-btn ${liked}" onclick="likeCard('${escapeAttr(c.cardId)}')">❤️ ชอบ (<span>${count}</span>)</button>
    </article>`;
  }).join('');
  syncGalleryScales(box);
  requestAnimationFrame(() => syncGalleryScales(box));
  box.querySelectorAll('.wall-image').forEach(img => {
    img.addEventListener('error', () => {
      const cardEl = img.closest('.wall-card');
      const cardId = cardEl?.getAttribute('data-card-id');
      const card = (currentWallCards || []).find(c => String(c.cardId) === String(cardId));
      const frame = img.closest('.wall-image-frame');
      if (frame && card) frame.innerHTML = (card.layoutJSON || card.layout || card.LayoutJSON || card.boardMetaJSON || card.boardMeta) ? galleryExactCard(card) : galleryFallbackCard(card);
      if (frame) syncGalleryScales(frame);
    }, { once: true });
  });
}

function getWallCardById(cardId) {
  return (currentWallCards || []).find(c => String(c.cardId) === String(cardId));
}

function openWallDetail(cardId) {
  const card = getWallCardById(cardId);
  if (!card) return showToast('ไม่พบรายละเอียด Mood Board นี้');
  const modal = document.getElementById('resultModal');
  const body = document.getElementById('resultModalContent');
  if (!modal || !body) return;
  const img = resolveWallImage(card);
  const mood = card.profileShort || profileShortFromLabel(card.profileName) || 'Mood';
  const team = card.team || '-';
  const sentAt = card.timestamp ? formatDateTime(card.timestamp) : '-';
  const moodText = card.affirmation || '-';
  const count = Number(card.likes ?? card.votes ?? 0);
  const hasLayout = !!(card.layoutJSON || card.layout || card.LayoutJSON || card.boardMetaJSON || card.boardMeta || (Array.isArray(card.stickers) && card.stickers.length));
  const imagePart = (hasUploadedImageItem(card) && img)
    ? `<div class="wall-detail-preview"><img class="wall-image" src="${escapeAttr(img)}" loading="lazy" decoding="async" alt="Mood board card" onclick="openImagePreview('${escapeAttr(img)}')"></div>`
    : (hasLayout
      ? `<div class="wall-detail-preview no-crop-board">${galleryExactCard(card)}</div>`
      : (img ? `<div class="wall-detail-preview"><img class="wall-image" src="${escapeAttr(img)}" loading="lazy" decoding="async" alt="Mood board card" onclick="openImagePreview('${escapeAttr(img)}')"></div>` : `<div class="wall-detail-preview no-crop-board">${galleryFallbackCard(card)}</div>`));
  body.innerHTML = `
    <div class="wall-detail-modal-body">
      <h3>รายละเอียด Mood Board</h3>
      ${imagePart}
      <div class="wall-detail-list modal-detail-list">
        <div><b>ชื่อ:</b> <span>${escapeHtml(card.name || '-')}</span></div>
        <div><b>ID:</b> <span>${escapeHtml(card.employeeId || '-')}</span></div>
        <div><b>Team:</b> <span>${escapeHtml(team)}</span></div>
        <div><b>ส่งเมื่อ:</b> <span>${escapeHtml(sentAt)}</span></div>
        <div><b>Mood:</b> <span>${escapeHtml(mood)}</span></div>
        <div><b>ถูกใจ:</b> <span>${escapeHtml(String(count))}</span></div>
        <div class="mood-text-row"><b>Mood text:</b> <span>${escapeHtml(moodText)}</span></div>
      </div>
      <div class="button-row center">
        <button class="ghost" onclick="closeResultModal()">ปิด</button>
        <button class="primary" onclick="closeResultModal(); editWallCard('${escapeAttr(card.cardId)}')">แก้ไข Mood Board นี้</button>
      </div>
    </div>`;
  modal.classList.remove('hidden');
  requestAnimationFrame(() => syncGalleryScales(body));
}

function updateSubmitBoardButtonLabel() {
  const btn = document.getElementById('submitBoardBtn');
  if (!btn) return;
  btn.textContent = currentEditingCardId ? '💖 อัปเดต Mood Board + ไปหน้า Gacha' : '💖 ส่ง Mood Board + ไปหมุน Gacha';
}

function editWallCard(cardId) {
  const card = getWallCardById(cardId);
  if (!card) return showToast('ไม่พบ Mood Board ที่ต้องการแก้ไข');

  const profileKey = safeProfileKeyFromCard(card);
  const savedMeta = getGalleryBoardMeta(card);
  const rawItems = parseMaybeJSON(card.layoutJSON || card.layout || card.LayoutJSON, []);
  let skippedImages = 0;

  currentEditingCardId = String(card.cardId || '');
  document.getElementById('nameInput').value = card.name || '';
  document.getElementById('employeeInput').value = card.employeeId || '';
  document.getElementById('teamInput').value = card.team || '';
  document.getElementById('affirmInput').value = card.affirmation || 'วันนี้ฉันอนุญาตให้ตัวเองพักได้';

  quizAnswers = [profileKey, profileKey, profileKey, profileKey, profileKey];
  currentQuiz = 0;
  renderQuiz();
  syncProfileToBoard();

  const metaColor = savedMeta.customColor || parseMaybeJSON(card.boardMetaJSON || card.BoardMetaJSON || '', {}).customColor || '';
  if (metaColor) {
    const input = document.getElementById('customColorInput');
    if (input) input.value = metaColor;
    applyCustomMoodColor();
  } else {
    setTheme(safeThemeIndex(card.themeIndex ?? card.ThemeIndex ?? 0));
  }

  closeResultModal();
  goStep('stepDecorate');
  switchToolTab('decor');

  const liveMeta = collectLiveEditorMetaForEdit(savedMeta);

  boardItems = (Array.isArray(rawItems) ? rawItems : []).map((item, idx) => {
    if (!item || !item.type) return null;
    if (item.type === 'image' && (!item.value || item.value === '[uploaded-image]')) {
      skippedImages += 1;
      return null;
    }
    const px = itemPixelsFromSaved(item, savedMeta);
    const hasNx = Number.isFinite(Number(item.nx));
    const hasNy = Number.isFinite(Number(item.ny));
    const hasNw = Number.isFinite(Number(item.nw));
    const hasNh = Number.isFinite(Number(item.nh));
    const x = hasNx ? Number(item.nx) * liveMeta.canvasW : ((Number(px.x || 0) / Math.max(1, savedMeta.canvasW)) * liveMeta.canvasW);
    const y = hasNy ? Number(item.ny) * liveMeta.canvasH : ((Number(px.y || 0) / Math.max(1, savedMeta.canvasH)) * liveMeta.canvasH);
    const w = item.type === 'image' ? Math.max(40, Math.round((hasNw ? Number(item.nw) * liveMeta.canvasW : ((Number(px.w || 0) / Math.max(1, savedMeta.canvasW)) * liveMeta.canvasW)) || 120)) : (item.w ? Math.max(60, Math.round((hasNw ? Number(item.nw) * liveMeta.canvasW : ((Number(px.w || 0) / Math.max(1, savedMeta.canvasW)) * liveMeta.canvasW)) || Number(item.w))) : undefined);
    const h = item.type === 'image' ? Math.max(40, Math.round((hasNh ? Number(item.nh) * liveMeta.canvasH : ((Number(px.h || 0) / Math.max(1, savedMeta.canvasH)) * liveMeta.canvasH)) || 90)) : (item.h ? Math.max(24, Math.round((hasNh ? Number(item.nh) * liveMeta.canvasH : ((Number(px.h || 0) / Math.max(1, savedMeta.canvasH)) * liveMeta.canvasH)) || Number(item.h))) : undefined);
    const size = scaledEditorFontSize(item, savedMeta, liveMeta);
    return {
      id: item.id || `edit_${Date.now()}_${idx}`,
      type: item.type,
      value: item.value || (item.type === 'emoji' ? '🌸' : ''),
      x: Math.round(x),
      y: Math.round(y),
      w,
      h,
      size,
      rotation: Number(item.rotation || 0),
      color: item.color || '#2f4054',
      fit: item.fit || 'cover'
    };
  }).filter(Boolean);

  selectedItemId = '';
  syncBoardText();
  renderBoardItems();
  updateSubmitBoardButtonLabel();
  if (skippedImages > 0) showToast(`โหลดภาพอัปโหลดกลับมาแก้ไขไม่ได้ ${skippedImages} รูป — แต่ยังแก้ emoji / text / layout อื่น ๆ ได้`);
  else showToast('โหลด Mood Board เข้าหน้าแก้ไขแล้ว');
}

function safeProfileKeyFromCard(card) {
  const fromCard = String(card?.profileKey || '').trim().toLowerCase();
  if (PROFILES[fromCard]) return fromCard;
  const short = String(card?.profileShort || profileShortFromLabel(card?.profileName) || '').trim().toLowerCase();
  if (short.includes('warm bloom')) return 'bloom';
  if (short.includes('focus stone')) return 'focus';
  if (short.includes('fresh spark')) return 'fresh';
  if (short.includes('calm cloud')) return 'calm';
  const label = String(card?.profileName || '').trim().toLowerCase();
  if (label.includes('warm bloom')) return 'bloom';
  if (label.includes('focus stone')) return 'focus';
  if (label.includes('fresh spark')) return 'fresh';
  return 'calm';
}

async function requestDeleteCard(cardId) {
  const card = getWallCardById(cardId);
  if (!card) return showToast('ไม่พบ Mood Board ที่ต้องการลบ');
  const ok = window.confirm(`ต้องการลบ Mood Board ของ ${card.name || 'รายการนี้'} ใช่หรือไม่?`);
  if (!ok) return;

  const oldHtml = document.getElementById('wallBox')?.innerHTML || '';
  const optimisticCards = (currentWallCards || []).filter(c => String(c.cardId) !== String(cardId));
  if (String(currentEditingCardId) === String(cardId)) { currentEditingCardId = ''; updateSubmitBoardButtonLabel(); }
  currentWallCards = optimisticCards;
  submittedLocalCards = submittedLocalCards.filter(c => String(c.cardId) !== String(cardId));
  if (apiCache.wall?.data) apiCache.wall.data = (apiCache.wall.data || []).filter(c => String(c.cardId) !== String(cardId));
  renderWall(mergeLocalCards(apiCache.wall.data || []));
  showLoading('กำลังลบ Mood Board', 'กรุณารอสักครู่');
  try {
    const payload = { cardId, employeeId: card.employeeId || document.getElementById('employeeInput')?.value?.trim() || '' };
    const res = await api('deleteCard', payload, { timeout: 12000 });
    hideLoading();
    if (!res || !res.ok) throw new Error(res?.message || 'ลบไม่สำเร็จ');
    const cards = (res.cards || optimisticCards || []).slice();
    apiCache.wall = { ts: Date.now(), data: cards };
    renderWall(mergeLocalCards(cards));
    showToast('ลบ Mood Board เรียบร้อยแล้ว');
  } catch (err) {
    hideLoading();
    const box = document.getElementById('wallBox');
    if (box && oldHtml) box.innerHTML = oldHtml;
    refreshWall(false, true);
    showToast(err?.message || 'ลบ Mood Board ไม่สำเร็จ');
  }
}

function openImagePreview(src) {
  if (!src) return;
  const modal = document.getElementById('resultModal');
  const body = document.getElementById('resultModalContent');
  if (!modal || !body) return window.open(src, '_blank');
  body.innerHTML = `
    <div class="image-preview-modal">
      <img src="${escapeAttr(src)}" alt="Mood board preview">
      <div class="button-row center">
        <button class="ghost" onclick="closeResultModal()">ปิด</button>
      </div>
    </div>`;
  modal.classList.remove('hidden');
}

function likeCard(cardId) {
  const cardEl = document.querySelector(`[data-card-id="${cssEscape(cardId)}"]`);
  const btn = cardEl?.querySelector('.like-btn');
  if (btn && !likedLocal[cardId]) {
    const span = btn.querySelector('span');
    span.textContent = String(Number(span.textContent || 0) + 1);
    btn.classList.add('liked');
  }
  likedLocal[cardId] = true; saveLikedState();
  const voterKey = document.getElementById('employeeInput').value.trim() || localStorage.getItem('colorStressVisitorKey') || getVisitorKey();
  api('likeCard', { cardId, voterKey }, { timeout: 8000 }).then(res => {
    if (res && res.cards) { apiCache.wall = { ts: Date.now(), data: res.cards }; renderWall(mergeLocalCards(res.cards)); }
  }).catch(() => {});
}
function getVisitorKey() { const k = `VISITOR-${Math.random().toString(36).slice(2)}-${Date.now().toString(36)}`; localStorage.setItem('colorStressVisitorKey', k); return k; }
function formatDateTime(v) { try { return new Date(v).toString() !== 'Invalid Date' ? new Date(v).toLocaleString('th-TH') : String(v || ''); } catch (e) { return String(v || ''); } }
function profileShortFromLabel(label) { return String(label || '').split('—')[0].trim(); }

function checkConnection() {
  const badge = document.getElementById('apiStatus');
  if (!isLiveMode()) {
    badge.innerHTML = '<span class="api-dot off"></span><span>กรุณาใส่ Apps Script URL /exec ใน config.js</span>';
    return;
  }
  badge.innerHTML = '<span class="api-dot demo"></span><span>กำลังเชื่อมต่อ Google Sheets...</span>';
  api('ping', {}, { timeout: 12000 }).then(res => {
    if (res && res.ok) {
      badge.innerHTML = '<span class="api-dot live"></span><span>Live: Google Sheets connected</span>';
    } else {
      badge.innerHTML = '<span class="api-dot off"></span><span>Connection error: Deploy Apps Script เป็น Web app /exec อีกครั้ง</span>';
      console.warn('Ping failed:', res);
    }
  }).catch(err => {
    badge.innerHTML = '<span class="api-dot off"></span><span>Connection error: ตรวจ Apps Script URL / Deploy Anyone</span>';
    console.warn('Apps Script ping error:', err);
  });
}
function api(action, payload, opts = {}) { return isLiveMode() ? jsonp(action, payload, opts) : demoApi(action, payload); }

function jsonp(action, payload, opts = {}) {
  const key = `${action}:${JSON.stringify(payload || {}).slice(0, 160)}`;
  if (inFlight[key]) return inFlight[key];
  const cfg = config();

  const p = new Promise((resolve, reject) => {
    if (!cfg.GAS_WEBAPP_URL || !/^https:\/\/script\.google\.com\/macros\/s\/.+\/exec/i.test(cfg.GAS_WEBAPP_URL)) {
      reject(new Error('Apps Script URL ต้องเป็นลิงก์ /exec'));
      return;
    }

    const callback = `cb_${Date.now()}_${Math.random().toString(16).slice(2)}`;
    const script = document.createElement('script');
    let done = false;

    const cleanup = () => {
      try { delete window[callback]; } catch (e) { window[callback] = undefined; }
      try { script.remove(); } catch (e) {}
      delete inFlight[key];
    };

    window[callback] = data => {
      if (done) return;
      done = true;
      cleanup();
      resolve(data);
    };

    try {
      const url = new URL(cfg.GAS_WEBAPP_URL);
      url.searchParams.set('action', action);
      url.searchParams.set('callback', callback);
      url.searchParams.set('_', String(Date.now()));
      url.searchParams.set('payload', JSON.stringify(payload || {}));
      script.src = url.toString();
    } catch (e) {
      cleanup();
      reject(new Error('Apps Script URL ไม่ถูกต้อง'));
      return;
    }

    script.async = true;
    script.referrerPolicy = 'no-referrer';
    script.onerror = () => {
      if (done) return;
      done = true;
      cleanup();
      reject(new Error('ไม่สามารถเชื่อมต่อ Apps Script ได้'));
    };

    (document.head || document.body || document.documentElement).appendChild(script);
    setTimeout(() => {
      if (done) return;
      done = true;
      cleanup();
      reject(new Error(isLineBrowser() ? 'LINE Browser เชื่อมต่อ Apps Script ช้าเกินไป' : 'Apps Script response timeout'));
    }, lineSafeTimeout(opts.timeout || 18000));
  });

  inFlight[key] = p;
  return p;
}

function postNoCors(action, payload) {
  const cfg = config();
  if (!cfg.GAS_WEBAPP_URL) return false;
  try {
    fetch(cfg.GAS_WEBAPP_URL, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-store',
      keepalive: true,
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action, payload: payload || {} })
    });
    return true;
  } catch (e) {
    return false;
  }
}

async function apiWrite(action, payload, opts = {}) {
  try {
    return await api(action, payload, opts);
  } catch (err) {
    if (isLineBrowser() || /timeout|เชื่อมต่อ|URL/i.test(String(err.message || err))) {
      postNoCors(action, payload);
      return { ok: true, fallback: true, cardId: payload?.cardId, message: 'POST fallback sent' };
    }
    throw err;
  }
}

function uploadBoardImageNoCors(cardId, participantKey, boardImage, thumbImage) {
  const cfg = config();
  if (!cfg.GAS_WEBAPP_URL || !boardImage) return;
  // V34 based on V31: LINE Browser often blocks large image POST; Gallery can reconstruct from LayoutJSON.
  if (isLineBrowser()) return;
  try {
    fetch(cfg.GAS_WEBAPP_URL, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-store',
      keepalive: true,
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action: 'saveBoardImage', cardId, participantKey, boardImage, thumbImage: thumbImage || '' })
    });
  } catch (e) {}
}

async function createBoardSnapshot(width = 720, height = 540, quality = .78) {
  const card = document.getElementById('cooldownCard');
  const canvas = document.createElement('canvas'); canvas.width = width; canvas.height = height;
  const ctx = canvas.getContext('2d');
  // V24: fill the full canvas first so JPEG gallery thumbnails never show black corners.
  ctx.fillStyle = '#fffaf3';
  ctx.fillRect(0, 0, width, height);
  const bg = ctx.createLinearGradient(0, 0, width, height); bg.addColorStop(0, customThemeColor || THEME_COLORS[selectedTheme] || '#ffe1e7'); bg.addColorStop(1, '#fff8ec');
  ctx.fillStyle = bg; roundRect(ctx, 0, 0, width, height, 44); ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,.45)'; ctx.beginPath(); ctx.arc(width * .88, height * .83, width * .12, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#607087'; ctx.font = 'bold 16px Arial, sans-serif'; ctx.fillText('MY MOOD BOARD', 42, 52);
  ctx.fillStyle = '#263447'; ctx.font = 'bold 42px Arial, sans-serif'; ctx.fillText((document.getElementById('nameInput').value.trim() || 'Your Name').slice(0, 24), 42, 112);
  const profile = getProfile();
  ctx.fillStyle = '#607087';
  ctx.font = 'bold 20px Arial, sans-serif';
  ctx.fillText((profile.short || 'Mood Profile') + ' —', 42, 154);
  ctx.font = '18px Arial, sans-serif';
  wrapText(ctx, profile.meaning || profile.label, 42, 182, width - 84, 24, 2);
  const boardRect = document.getElementById('boardCanvas').getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  const scaleX = width / cardRect.width, scaleY = height / cardRect.height;
  const offsetX = (boardRect.left - cardRect.left) * scaleX, offsetY = (boardRect.top - cardRect.top) * scaleY;
  for (const item of boardItems) {
    const x = offsetX + item.x * scaleX, y = offsetY + item.y * scaleY;
    ctx.save(); ctx.translate(x, y); ctx.rotate((item.rotation || 0) * Math.PI / 180);
    if (item.type === 'image') {
      const img = await loadImage(item.value); const w = (item.w || 120) * scaleX, h = (item.h || 90) * scaleY;
      ctx.save(); roundRect(ctx, 0, 0, w, h, 16); ctx.clip(); drawImageFit(ctx, img, 0, 0, w, h, item.fit || 'cover'); ctx.restore();
    } else if (item.type === 'text') {
      const size = (item.size || 24) * scaleX; ctx.font = `bold ${size}px Arial, sans-serif`; const metrics = ctx.measureText(item.value);
      ctx.fillStyle = 'rgba(255,255,255,.65)'; roundRect(ctx, -8, -size, metrics.width + 16, size + 14, 14); ctx.fill(); ctx.fillStyle = item.color || '#2f4054'; ctx.fillText(item.value, 0, 0);
    } else { ctx.font = `${(item.size || 36) * scaleX}px Arial, sans-serif`; ctx.fillText(item.value, 0, 0); }
    ctx.restore();
  }
  ctx.fillStyle = '#506071'; ctx.font = '20px Arial, sans-serif'; wrapText(ctx, document.getElementById('affirmInput').value.trim() || 'วันนี้ฉันอนุญาตให้ตัวเองพักได้', 42, height - 58, width - 84, 26);
  return canvas.toDataURL('image/jpeg', quality);
}
function downloadBoardImage() { createBoardSnapshot(1000,750,.82).then(dataUrl => { const a = document.createElement('a'); a.href = dataUrl; a.download = `Color_Your_Stress_Mood_Board_${Date.now()}.jpg`; a.click(); }).catch(() => showToast('บันทึกรูปไม่สำเร็จ')); }
function loadImage(src) { return new Promise((resolve, reject) => { const img = new Image(); img.onload = () => resolve(img); img.onerror = reject; img.src = src; }); }
function drawImageFit(ctx, img, x, y, w, h, fit = 'cover') {
  if (fit === 'contain') {
    const r = Math.min(w / img.width, h / img.height);
    const nw = img.width * r, nh = img.height * r;
    ctx.fillStyle = 'rgba(255,255,255,.45)'; ctx.fillRect(x,y,w,h);
    ctx.drawImage(img, x + (w - nw)/2, y + (h - nh)/2, nw, nh);
    return;
  }
  const r = Math.max(w / img.width, h / img.height);
  const nw = img.width * r, nh = img.height * r;
  ctx.drawImage(img, (img.width - w / r) / 2, (img.height - h / r) / 2, w / r, h / r, x, y, w, h);
}
function roundRect(ctx, x, y, w, h, r) { const radius = Math.min(r, w/2, h/2); ctx.beginPath(); ctx.moveTo(x+radius,y); ctx.arcTo(x+w,y,x+w,y+h,radius); ctx.arcTo(x+w,y+h,x,y+h,radius); ctx.arcTo(x,y+h,x,y,radius); ctx.arcTo(x,y,x+w,y,radius); ctx.closePath(); }
function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 3) {
  const raw = String(text || '');
  const words = raw.indexOf(' ') >= 0 ? raw.split(' ') : raw.split('');
  let line = '';
  let lines = 0;
  for (let n = 0; n < words.length; n++) {
    const add = raw.indexOf(' ') >= 0 ? words[n] + ' ' : words[n];
    const test = line + add;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines += 1;
      if (lines >= maxLines) {
        ctx.fillText(line.trim() + '…', x, y);
        return;
      }
      ctx.fillText(line, x, y);
      line = add;
      y += lineHeight;
    } else {
      line = test;
    }
  }
  if (line && lines < maxLines) ctx.fillText(line, x, y);
}

function demoApi(action, payload) {
  return new Promise(resolve => setTimeout(async () => {
    if (action === 'ping') return resolve({ ok:true, demo:true });
    if (action === 'getPrizeStatus') return resolve({ ok:true, total: buildDemoPrizePool().length, totalRemaining: demoAvailablePrizes().length, giftRemaining: demoAvailablePrizes().filter(x=>x.type==='Gacha Gift').length, couponRemaining: demoAvailablePrizes().filter(x=>x.type==='Wellness Coupon').length, recent: localDemo.history.slice(0,8) });
    if (action === 'getWall') return resolve({ ok:true, cards: localDemo.cards });
    if (action === 'submitCard') return resolve({ ok:true, cardId: payload.cardId || `DEMO-CARD-${Date.now().toString(36)}` });
    if (action === 'likeCard' || action === 'voteCard') { const c = localDemo.cards.find(x => x.cardId === payload.cardId); if (c) c.likes = (c.likes || 0) + 1; saveDemoState(); return resolve({ ok:true, cards: localDemo.cards }); }
    if (action === 'submitAndSpin' || action === 'spinGacha') {
      const key = normalizeKey(payload.employeeId || payload.emailOrId || payload.name); const existing = localDemo.participants.find(p => p.key === key);
      if (existing) return resolve({ ok:true, duplicate:true, profileName: existing.profileName, cardId: existing.cardId, prize: existing.prize, prizeStatus:{total: buildDemoPrizePool().length, totalRemaining: demoAvailablePrizes().length, giftRemaining: demoAvailablePrizes().filter(x=>x.type==='Gacha Gift').length, couponRemaining: demoAvailablePrizes().filter(x=>x.type==='Wellness Coupon').length, recent:localDemo.history.slice(0,8)} });
      const available = demoAvailablePrizes(); const prize = available[Math.floor(Math.random()*available.length)] || { prizeId:'WAITLIST', name:'รางวัลสำรอง', type:'Waitlist', budget:0 };
      localDemo.claimed.push(prize.prizeId); const boardImage = await createBoardSnapshot().catch(()=> ''); const cardId = payload.cardId || `DEMO-${Date.now().toString(36)}`;
      localDemo.participants.push({ key, name: payload.name, profileName: payload.profileName, cardId, prize });
      localDemo.cards.unshift({ cardId, name: payload.name, team: payload.team, profileName: payload.profileName, profileShort: payload.profileShort, affirmation: payload.affirmation, boardImage, likes: 0 });
      localDemo.history.unshift({ timestamp: new Date().toLocaleString('th-TH'), prizeType: prize.type }); saveDemoState();
      return resolve({ ok:true, profileName: payload.profileName, cardId, prize, prizeStatus:{total: buildDemoPrizePool().length, totalRemaining: demoAvailablePrizes().length, giftRemaining: demoAvailablePrizes().filter(x=>x.type==='Gacha Gift').length, couponRemaining: demoAvailablePrizes().filter(x=>x.type==='Wellness Coupon').length, recent: localDemo.history.slice(0,8)} });
    }
    resolve({ ok:false, message:'Unknown demo action' });
  }, 240));
}
function buildDemoPrizePool() { const rows=[]; let n=1; const add=(type,name,budget,qty)=>{ for(let i=0;i<qty;i++) rows.push({prizeId:`P${String(n++).padStart(3,'0')}`,type,name,budget}); }; add('Gacha Gift','Starbuck Gift Card 500 บาท',500,2); add('Gacha Gift','Starbuck Gift Card 300 บาท',300,4); add('Gacha Gift','Starbuck Gift Card 200 บาท',200,4); add('Gacha Gift','Starbuck Gift Card 100 บาท',100,20); add('Wellness Coupon','คูปองขยายเวลาพักเที่ยง 15 นาที',0,10); add('Wellness Coupon','คูปองพักงีบ / พักสายตา 15 นาที',0,10); add('Wellness Coupon','พลาดรางวัลไปนิดเดียวเอง! แต่ไม่เป็นไรนะ วันนี้ลุยงานมาทั้งวัน ทำได้ดีมากแล้วครับ',0,10); add('Wellness Coupon','น่าเสียดายจัง คราวนี้ยังไม่ได้รางวัล แต่วันนี้คุณเก่งมากแล้วนะ! พักผ่อนเยอะๆ แล้วลุยกันใหม่',0,5); add('Wellness Coupon','วันนี้ทำดีแล้วนะ! ขอส่งรอยยิ้มและกำลังใจให้แทนรางวัลครับ 😊',0,5); add('Wellness Coupon','วันนี้พักดีแล้วนะ! ขอส่งรอยยิ้มและกำลังใจให้แทนรางวัลครับ 😊',0,10); return rows; }
function demoAvailablePrizes() { return buildDemoPrizePool().filter(p => !localDemo.claimed.includes(p.prizeId)); }
function loadDemoState() { try { return JSON.parse(localStorage.getItem('colorStressDemoV35')) || { claimed:[], participants:[], cards:[], history:[] }; } catch(e){ return { claimed:[], participants:[], cards:[], history:[] }; } }
function saveDemoState() { localStorage.setItem('colorStressDemoV35', JSON.stringify(localDemo)); }
function loadLikedState() { try { return JSON.parse(localStorage.getItem('colorStressLikedV35')) || {}; } catch(e){ return {}; } }
function saveLikedState() { localStorage.setItem('colorStressLikedV35', JSON.stringify(likedLocal)); }
function showLoading(title, text) { document.getElementById('loadingTitle').textContent = title || 'กำลังโหลด'; document.getElementById('loadingText').textContent = text || 'กรุณารอสักครู่...'; document.getElementById('loadingOverlay').classList.remove('hidden'); }
function hideLoading() { document.getElementById('loadingOverlay').classList.add('hidden'); }
function clamp(v, min, max) { return Math.min(max, Math.max(min, v)); }
function normalizeKey(v) { return String(v || '').trim().toLowerCase().replace(/\s+/g, '_'); }
function cssEscape(v) { return String(v).replace(/(["'\\.#:[\],>+~*^$()=!|])/g, '\\$1'); }
function escapeHtml(v) { return String(v ?? '').replace(/[&<>"]/g, s => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;' }[s])); }
function escapeAttr(v) { return escapeHtml(v).replace(/'/g, '&#39;'); }
let toastTimer = null;
function showToast(message) { const toast = document.getElementById('toast'); toast.textContent = message; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 3200); }


// V12 Rechecked Fix: toolbox tab switcher was referenced by index.html but missing in app.js.
function switchToolTab(tab) {
  const safeTab = ['decor', 'text', 'info'].includes(tab) ? tab : 'decor';
  document.querySelectorAll('.mini-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === safeTab);
  });
  document.querySelectorAll('.tool-tab').forEach(panel => {
    panel.classList.toggle('active', panel.id === `tool-${safeTab}`);
  });
}
