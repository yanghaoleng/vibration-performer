const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const namesA = ["月光", "蓝鲸", "乌梅", "云朵", "银杏", "山茶", "海盐", "琥珀", "橙雨", "松风"];
const namesB = ["轻拍", "回声", "脉冲", "小鼓", "涟漪", "闪烁", "尾音", "心跳", "低语", "星轨"];

const messages = {
  zh: {
    htmlLang: "zh-CN",
    pageTitle: "震动演奏机",
    appTitle: "震动演奏机",
    modeLabel: "模式",
    speedLabel: "录制速度",
    levelLabel: "当前振幅",
    touchSlider: "触摸滑块",
    wheelInput: "鼠标滚轮",
    performanceEyebrow: "Performance",
    performanceTitle: "演奏",
    ready: "待录制",
    recording: "录制中",
    paused: "已暂停",
    finished: "已完成",
    playingState: "播放中",
    inputModeGroup: "选择输入方式",
    inputAuto: "智能",
    inputTouch: "触屏",
    inputJoystick: "摇杆",
    inputKeyboard: "键盘",
    inputAutoTitle: "根据接入设备和最近操作自动选择",
    inputTouchTitle: "使用触屏滑块控制振幅",
    inputJoystickTitle: "使用摇杆、鼠标滚轮或拖动面板控制振幅",
    inputKeyboardTitle: "使用键盘 1 到 4 控制振幅",
    autoMode: "智能",
    wheelControl: "鼠标滚轮控制震动振幅",
    wheelHelp: "拖动圆盘或滚动鼠标滚轮",
    keyboardControl: "键盘 1 到 4 控制震动振幅",
    amplitudeLabel: "震动振幅",
    startRecord: "开始录制",
    pauseRecord: "暂停",
    resumeRecord: "继续",
    stop: "停止",
    clear: "清空",
    curveEyebrow: "Curve Editor",
    curveTitle: "曲线",
    smooth: "平滑",
    curveHint: "拖动曲线上的点来手动调整振幅",
    takesEyebrow: "Takes",
    takesTitle: "片段",
    exportJson: "导出 JSON",
    exported: "已导出",
    play: "播放",
    stopPlayback: "停止播放",
    noTake: "还没有录制",
    jsonPlaceholder: "录制完成后这里会生成 JSON",
    jsonOutputLabel: "JSON 导出内容",
    themeMenu: "选择主题模式",
    themeSystem: "跟随系统",
    themeLight: "亮色",
    themeDark: "暗色",
    shortcutRecord: "空格开始/暂停，回车开始/停止",
    shortcutStop: "回车停止录制，Esc 停止当前动作",
    shortcutClear: "Delete 清空当前片段",
    shortcutSmooth: "S 平滑曲线",
    shortcutExport: "E 或 Cmd/Ctrl+E 导出 JSON",
    shortcutPlay: "K 播放/停止",
    shortcutStopPlayback: "K 停止播放",
  },
  en: {
    htmlLang: "en",
    pageTitle: "Vibration Performer",
    appTitle: "Vibration Performer",
    modeLabel: "Input",
    speedLabel: "Record speed",
    levelLabel: "Amplitude",
    touchSlider: "Touch slider",
    wheelInput: "Mouse wheel",
    performanceEyebrow: "Performance",
    performanceTitle: "Play",
    ready: "Ready",
    recording: "Recording",
    paused: "Paused",
    finished: "Finished",
    playingState: "Playing",
    inputModeGroup: "Choose input mode",
    inputAuto: "Auto",
    inputTouch: "Touch",
    inputJoystick: "Joystick",
    inputKeyboard: "Keys",
    inputAutoTitle: "Choose automatically from connected devices and recent input",
    inputTouchTitle: "Use the touch slider to control amplitude",
    inputJoystickTitle: "Use a joystick, mouse wheel, or drag pad to control amplitude",
    inputKeyboardTitle: "Use keyboard keys 1 to 4 to control amplitude",
    autoMode: "Auto",
    wheelControl: "Control vibration amplitude with the mouse wheel",
    wheelHelp: "Drag the dial or scroll here",
    keyboardControl: "Control vibration amplitude with keys 1 to 4",
    amplitudeLabel: "Vibration amplitude",
    startRecord: "Record",
    pauseRecord: "Pause",
    resumeRecord: "Resume",
    stop: "Stop",
    clear: "Clear",
    curveEyebrow: "Curve Editor",
    curveTitle: "Curve",
    smooth: "Smooth",
    curveHint: "Drag points on the curve to adjust amplitude",
    takesEyebrow: "Takes",
    takesTitle: "Take",
    exportJson: "Export JSON",
    exported: "Exported",
    play: "Play",
    stopPlayback: "Stop Playback",
    noTake: "No take yet",
    jsonPlaceholder: "Recorded JSON will appear here",
    jsonOutputLabel: "JSON export content",
    themeMenu: "Choose theme mode",
    themeSystem: "System",
    themeLight: "Light",
    themeDark: "Dark",
    shortcutRecord: "Space starts/pauses, Enter starts/stops recording",
    shortcutStop: "Enter stops recording, Esc stops the current action",
    shortcutClear: "Delete clears the current take",
    shortcutSmooth: "S smooths the curve",
    shortcutExport: "E or Cmd/Ctrl+E exports JSON",
    shortcutPlay: "K plays/stops",
    shortcutStopPlayback: "K stops playback",
  },
  ja: {
    htmlLang: "ja",
    pageTitle: "振動パフォーマー",
    appTitle: "振動パフォーマー",
    modeLabel: "入力",
    speedLabel: "録音速度",
    levelLabel: "振幅",
    touchSlider: "タッチスライダー",
    wheelInput: "マウスホイール",
    performanceEyebrow: "Performance",
    performanceTitle: "演奏",
    ready: "待機中",
    recording: "録音中",
    paused: "一時停止",
    finished: "完了",
    playingState: "再生中",
    inputModeGroup: "入力方法を選択",
    inputAuto: "自動",
    inputTouch: "タッチ",
    inputJoystick: "ジョイスティック",
    inputKeyboard: "キー",
    inputAutoTitle: "接続デバイスと直近の操作から自動選択",
    inputTouchTitle: "タッチスライダーで振幅を操作",
    inputJoystickTitle: "ジョイスティック、マウスホイール、ドラッグで振幅を操作",
    inputKeyboardTitle: "キーボードの 1 から 4 で振幅を操作",
    autoMode: "自動",
    wheelControl: "マウスホイールで振動の振幅を調整",
    wheelHelp: "ダイヤルをドラッグ、またはスクロール",
    keyboardControl: "キーボードの 1 から 4 で振幅を操作",
    amplitudeLabel: "振動の振幅",
    startRecord: "録音",
    pauseRecord: "一時停止",
    resumeRecord: "再開",
    stop: "停止",
    clear: "クリア",
    curveEyebrow: "Curve Editor",
    curveTitle: "カーブ",
    smooth: "スムーズ",
    curveHint: "カーブ上の点をドラッグして振幅を調整",
    takesEyebrow: "Takes",
    takesTitle: "テイク",
    exportJson: "JSON書き出し",
    exported: "書き出し済み",
    play: "再生",
    stopPlayback: "再生停止",
    noTake: "まだ録音なし",
    jsonPlaceholder: "録音後、JSON がここに表示されます",
    jsonOutputLabel: "JSON 書き出し内容",
    themeMenu: "テーマを選択",
    themeSystem: "システム",
    themeLight: "ライト",
    themeDark: "ダーク",
    shortcutRecord: "Space で開始/一時停止、Enter で開始/停止",
    shortcutStop: "Enter で録音停止、Esc で現在の操作を停止",
    shortcutClear: "Delete でテイクをクリア",
    shortcutSmooth: "S でカーブをスムーズ化",
    shortcutExport: "E または Cmd/Ctrl+E で JSON 書き出し",
    shortcutPlay: "K で再生/停止",
    shortcutStopPlayback: "K で再生停止",
  },
};

const state = {
  isRecording: false,
  isRecordingPaused: false,
  isPlaying: false,
  level: 0,
  samples: [],
  startAt: 0,
  recordedElapsed: 0,
  take: null,
  dragIndex: -1,
  isUsingJoystick: false,
  gamepadIndex: null,
  audio: null,
  playTimers: [],
  statusKey: "ready",
  lang: localStorage.getItem("vibe-lang") || "ja",
  themePreference: localStorage.getItem("vibe-theme") || "system",
  inputPreference: localStorage.getItem("vibe-input") || "auto",
  activeInput: "touch",
  history: [],
  redoStack: [],
};

const els = {
  inputMode: $("#inputMode"),
  levelReadout: $("#levelReadout"),
  slider: $("#intensitySlider"),
  sliderGlow: $("#sliderGlow"),
  sliderWrap: $("#sliderWrap"),
  wheelPad: $("#wheelPad"),
  wheelValue: $("#wheelValue"),
  keyboardPad: $("#keyboardPad"),
  recordBtn: $("#recordBtn"),
  stopBtn: $("#stopBtn"),
  clearBtn: $("#clearBtn"),
  smoothBtn: $("#smoothBtn"),
  playBtn: $("#playBtn"),
  pauseBtn: $("#pauseBtn"),
  exportBtn: $("#exportBtn"),
  recordState: $("#recordState"),
  canvas: $("#curveCanvas"),
  currentTake: $("#currentTake"),
  jsonOutput: $("#jsonOutput"),
  themeToggle: $("#themeToggle"),
  themeMenu: $("#themeMenu"),
  inputToggle: $("#inputToggle"),
  inputMenu: $("#inputMenu"),
};

const ctx = els.canvas.getContext("2d");
const systemTheme = matchMedia("(prefers-color-scheme: dark)");

function t(key) {
  return messages[state.lang][key] || messages.zh[key] || key;
}

function lastSample(samples = state.samples) {
  return samples.length ? samples[samples.length - 1] : null;
}

function nowMs() {
  return performance.now();
}

function randomName() {
  return namesA[Math.floor(Math.random() * namesA.length)] + namesB[Math.floor(Math.random() * namesB.length)];
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function pulseElement(element, className = "bump") {
  if (!element) return;
  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
  window.setTimeout(() => element.classList.remove(className), 420);
}

function setText(element, text, animation = "status-swap") {
  if (!element || element.textContent === text) return;
  element.textContent = text;
  pulseElement(element, animation);
}

function setActionLabel(button, key) {
  const label = button.querySelector("[data-i18n]");
  if (label) setText(label, t(key), "status-swap");
}

function renderActionButton(button, icon, labelKey) {
  if (!button || button.dataset.labelKey === labelKey) return;
  button.dataset.labelKey = labelKey;
  button.innerHTML = `<i data-lucide="${icon}" aria-hidden="true"></i><span data-i18n="${labelKey}">${t(labelKey)}</span>`;
  refreshIcons();
}

function isFinePointer() {
  return matchMedia("(hover: hover) and (pointer: fine)").matches && innerWidth > 760 && !("ontouchstart" in window);
}

function hasTouchInput() {
  return navigator.maxTouchPoints > 0 || matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
}

function hasConnectedGamepad() {
  return Boolean(Array.from(navigator.getGamepads?.() || []).find(Boolean));
}

function detectInputMode() {
  if (state.gamepadIndex !== null || hasConnectedGamepad()) return "joystick";
  if (hasTouchInput() && !isFinePointer()) return "touch";
  if (isFinePointer()) return "joystick";
  return "keyboard";
}

function resolveInputMode() {
  return state.inputPreference === "auto" ? state.activeInput || detectInputMode() : state.inputPreference;
}

function setActiveInput(mode, { remember = false } = {}) {
  if (!["auto", "touch", "joystick", "keyboard"].includes(mode)) return;
  if (remember) {
    state.inputPreference = mode;
    localStorage.setItem("vibe-input", mode);
  }
  state.activeInput = mode === "auto" ? detectInputMode() : mode;
  updateInputMode();
}

function markInputActivity(mode) {
  if (!["touch", "joystick", "keyboard"].includes(mode)) return;
  if (state.inputPreference === "auto") setActiveInput(mode);
}

function setLevel(value) {
  const next = Math.max(0, Math.min(100, Math.round(Number(value) || 0)));
  const changed = next !== state.level;
  state.level = next;
  els.slider.value = state.level;
  els.sliderGlow.style.height = `${state.level}%`;
  els.wheelPad.style.setProperty("--level-ring", `${state.level * 0.14}px`);
  setText(els.wheelValue, String(state.level), changed ? "bump" : "");
  setText(els.levelReadout, `${state.level}%`, changed ? "bump" : "");
  if (changed) {
    els.wheelPad.classList.add("is-live");
    window.clearTimeout(state.wheelPulseTimer);
    state.wheelPulseTimer = window.setTimeout(() => els.wheelPad.classList.remove("is-live"), 180);
  }
}

function formatTimecode(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const milli = Math.floor(ms % 1000);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(milli).padStart(3, "0")}`;
}

function cloneSamples(samples = state.samples) {
  return samples.map((sample) => ({ time: sample.time, amplitude: sample.amplitude }));
}

function sameSamples(a, b) {
  if (!a || !b || a.length !== b.length) return false;
  return a.every((sample, index) => sample.time === b[index].time && sample.amplitude === b[index].amplitude);
}

function pushHistory() {
  if (!state.take || !state.samples.length) return;
  const snapshot = cloneSamples();
  const previous = state.history[state.history.length - 1];
  if (sameSamples(snapshot, previous)) return;
  state.history.push(snapshot);
  if (state.history.length > 40) state.history.shift();
  state.redoStack = [];
}

function applySamples(samples) {
  state.samples = cloneSamples(samples);
  if (state.take) {
    state.take.points = cloneSamples(state.samples);
    state.take.duration = lastSample()?.time || 0;
    state.take.timecode = formatTimecode(state.take.duration);
  }
  updateTakeView();
  drawCurve();
}

function undoEdit() {
  if (!state.history.length || !state.take) return;
  state.redoStack.push(cloneSamples());
  applySamples(state.history.pop());
  pulseElement(els.canvas);
}

function redoEdit() {
  if (!state.redoStack.length || !state.take) return;
  state.history.push(cloneSamples());
  applySamples(state.redoStack.pop());
  pulseElement(els.canvas);
}

function smoothSamples(samples) {
  if (samples.length < 5) return samples.slice();
  return samples.map((sample, index) => {
    let sum = 0;
    let weight = 0;
    for (let offset = -3; offset <= 3; offset += 1) {
      const item = samples[index + offset];
      if (!item) continue;
      const w = 4 - Math.abs(offset);
      sum += item.amplitude * w;
      weight += w;
    }
    return { time: sample.time, amplitude: Math.max(0, Math.min(1, sum / weight)) };
  });
}

function decimateSamples(samples) {
  if (samples.length <= 180) return samples;
  const step = Math.ceil(samples.length / 180);
  return samples.filter((_, index) => index % step === 0 || index === samples.length - 1);
}

function renderStatus() {
  const statusMap = {
    ready: "ready",
    recording: "recording",
    paused: "paused",
    finished: "finished",
    playing: "playingState",
  };
  setText(els.recordState, t(statusMap[state.statusKey] || "ready"), "status-swap");
}

function updateInputMode() {
  const mode = resolveInputMode();
  const labelMap = {
    touch: "touchSlider",
    joystick: "inputJoystick",
    keyboard: "inputKeyboard",
  };
  const label = t(labelMap[mode] || "touchSlider");
  setText(els.inputMode, state.inputPreference === "auto" ? `${t("autoMode")}：${label}` : label, "status-swap");
  document.documentElement.dataset.inputMode = mode;
  els.sliderWrap.hidden = mode !== "touch";
  els.wheelPad.hidden = mode !== "joystick";
  els.keyboardPad.hidden = mode !== "keyboard";
  const iconMap = {
    auto: "sparkles",
    touch: "hand",
    joystick: "joystick",
    keyboard: "keyboard",
  };
  const icon = els.inputToggle?.querySelector("i");
  if (icon) icon.setAttribute("data-lucide", iconMap[state.inputPreference] || iconMap[mode] || "sparkles");
  $$("[data-input-choice]").forEach((button) => {
    const active = button.dataset.inputChoice === state.inputPreference;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-checked", String(active));
  });
  refreshIcons();
}

function updateTakeView() {
  if (!state.take) {
    els.currentTake.innerHTML = `<span>${t("noTake")}</span><strong>--:--.---</strong>`;
    els.jsonOutput.value = "";
    return;
  }
  els.currentTake.innerHTML = `<span>${state.take.name}</span><strong>${state.take.timecode}</strong>`;
  els.jsonOutput.value = JSON.stringify(state.take, null, 2);
  pulseElement(els.currentTake, "status-swap");
}

function updateButtons() {
  els.recordBtn.disabled = state.isPlaying;
  els.stopBtn.disabled = !state.isRecording;
  els.playBtn.disabled = state.samples.length === 0 || state.isPlaying || state.isRecording;
  els.pauseBtn.disabled = !state.isPlaying;
  if (!state.isRecording) renderActionButton(els.recordBtn, "circle", "startRecord");
  else if (state.isRecordingPaused) renderActionButton(els.recordBtn, "play", "resumeRecord");
  else renderActionButton(els.recordBtn, "pause", "pauseRecord");
}

function recordingElapsed() {
  if (!state.isRecording || state.isRecordingPaused) return state.recordedElapsed;
  return state.recordedElapsed + (nowMs() - state.startAt) / 3;
}

function recordTick() {
  if (!state.isRecording || state.isRecordingPaused) return;
  const elapsed = Math.round(recordingElapsed());
  state.samples.push({ time: elapsed, amplitude: state.level / 100 });
  drawCurve();
  requestAnimationFrame(recordTick);
}

function startRecording() {
  stopPlayback();
  state.isRecording = true;
  state.isRecordingPaused = false;
  state.samples = [];
  state.take = null;
  state.history = [];
  state.redoStack = [];
  state.recordedElapsed = 0;
  state.startAt = nowMs();
  state.statusKey = "recording";
  updateTakeView();
  renderStatus();
  updateButtons();
  recordTick();
}

function pauseRecording() {
  if (!state.isRecording || state.isRecordingPaused) return;
  state.recordedElapsed = recordingElapsed();
  state.isRecordingPaused = true;
  state.statusKey = "paused";
  state.samples.push({ time: Math.round(state.recordedElapsed), amplitude: state.level / 100 });
  renderStatus();
  updateButtons();
  drawCurve();
}

function resumeRecording() {
  if (!state.isRecording || !state.isRecordingPaused) return;
  state.isRecordingPaused = false;
  state.startAt = nowMs();
  state.statusKey = "recording";
  renderStatus();
  updateButtons();
  recordTick();
}

function toggleRecordingPause() {
  if (!state.isRecording) startRecording();
  else if (state.isRecordingPaused) resumeRecording();
  else pauseRecording();
}

function finishTake() {
  if (!state.isRecording) return;
  if (!state.isRecordingPaused) {
    state.recordedElapsed = recordingElapsed();
  }
  state.isRecording = false;
  state.isRecordingPaused = false;
  state.samples = decimateSamples(smoothSamples(state.samples));
  const duration = lastSample()?.time || 0;
  state.take = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    name: randomName(),
    timecode: formatTimecode(duration),
    duration,
    speed: "1/3",
    points: cloneSamples(),
  };
  state.statusKey = "finished";
  renderStatus();
  updateButtons();
  updateTakeView();
  drawCurve();
}

function clearTake() {
  stopPlayback();
  state.isRecording = false;
  state.isRecordingPaused = false;
  state.samples = [];
  state.take = null;
  state.history = [];
  state.redoStack = [];
  state.recordedElapsed = 0;
  state.statusKey = "ready";
  updateButtons();
  renderStatus();
  updateTakeView();
  drawCurve();
}

function canvasPoint(sample) {
  const width = els.canvas.clientWidth;
  const height = els.canvas.clientHeight;
  const duration = Math.max(1, lastSample()?.time || 1);
  const midY = height / 2;
  const halfHeight = Math.max(1, height / 2 - 22);
  return {
    x: (sample.time / duration) * width,
    y: midY - sample.amplitude * halfHeight,
    midY,
    halfHeight,
  };
}

function drawCurve() {
  const ratio = window.devicePixelRatio || 1;
  const width = els.canvas.clientWidth;
  const height = els.canvas.clientHeight;
  els.canvas.width = width * ratio;
  els.canvas.height = height * ratio;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  ctx.clearRect(0, 0, width, height);

  const styles = getComputedStyle(document.documentElement);
  const gridColor = styles.getPropertyValue("--grid").trim() || "rgba(0,0,0,0.12)";
  const accent = styles.getPropertyValue("--yellow").trim() || "#8e6a08";
  const midY = height / 2;
  const halfHeight = Math.max(1, height / 2 - 22);
  ctx.strokeStyle = gridColor;
  ctx.lineWidth = 1;
  [0.25, 0.5, 0.75, 1].forEach((ratio) => {
    const offset = halfHeight * ratio;
    [midY - offset, midY + offset].forEach((y) => {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    });
  });

  ctx.strokeStyle = accent;
  ctx.globalAlpha = 0.34;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, midY);
  ctx.lineTo(width, midY);
  ctx.stroke();
  ctx.globalAlpha = 1;

  const liveLevel = state.isRecording && !state.samples.length ? [{ time: 0, amplitude: state.level / 100 }] : null;
  const samples = state.samples.length ? state.samples : liveLevel;
  if (!samples?.length) {
    ctx.fillStyle = accent;
    ctx.globalAlpha = 0.16;
    const idleBars = 18;
    for (let i = 0; i < idleBars; i += 1) {
      const x = (width / Math.max(1, idleBars - 1)) * i;
      ctx.fillRect(x - 2, midY - 7, 4, 14);
    }
    ctx.globalAlpha = 1;
    return;
  }

  const duration = Math.max(1, samples[samples.length - 1]?.time || 1);
  const barWidth = Math.max(3, Math.min(9, width / Math.max(24, samples.length * 1.5)));
  ctx.strokeStyle = accent;
  ctx.lineWidth = barWidth;
  ctx.lineCap = "round";
  samples.forEach((sample) => {
    const x = (sample.time / duration) * width;
    const size = Math.max(3, sample.amplitude * halfHeight);
    ctx.beginPath();
    ctx.moveTo(x, midY - size);
    ctx.lineTo(x, midY + size);
    ctx.stroke();
  });
}

function nearestSample(clientX, clientY) {
  const rect = els.canvas.getBoundingClientRect();
  const x = clientX - rect.left;
  const y = clientY - rect.top;
  let nearest = -1;
  let best = 22;
  state.samples.forEach((sample, index) => {
    const point = canvasPoint(sample);
    const distance = Math.hypot(point.x - x, point.y - y);
    if (distance < best) {
      best = distance;
      nearest = index;
    }
  });
  return nearest;
}

function updateDraggedSample(clientY) {
  if (state.dragIndex < 0 || !state.take) return;
  const rect = els.canvas.getBoundingClientRect();
  const y = Math.max(0, Math.min(rect.height, clientY - rect.top));
  const midY = rect.height / 2;
  const halfHeight = Math.max(1, rect.height / 2 - 22);
  state.samples[state.dragIndex].amplitude = Math.max(0, Math.min(1, Math.abs(y - midY) / halfHeight));
  state.take.points = cloneSamples();
  updateTakeView();
  drawCurve();
}

function ensureAudio() {
  if (!state.audio) state.audio = new (window.AudioContext || window.webkitAudioContext)();
  if (state.audio.state === "suspended") state.audio.resume();
  return state.audio;
}

function playSound(amplitude, time) {
  const audio = ensureAudio();
  const osc = audio.createOscillator();
  const gain = audio.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(58 + amplitude * 90, time);
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.03 + amplitude * 0.2, time + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.08);
  osc.connect(gain).connect(audio.destination);
  osc.start(time);
  osc.stop(time + 0.09);
}

function playTake() {
  if (!state.samples.length || state.isRecording) return;
  stopPlayback();
  state.isPlaying = true;
  state.statusKey = "playing";
  renderStatus();
  updateButtons();
  const audio = ensureAudio();
  const start = audio.currentTime + 0.04;
  state.samples.forEach((sample, index) => {
    if (index % 3 !== 0 && sample.amplitude < 0.08) return;
    playSound(sample.amplitude, start + sample.time / 1000);
  });

  if ("vibrate" in navigator) {
    const pattern = state.samples.slice(0, 80).flatMap((sample, index, arr) => {
      const next = arr[index + 1];
      const gap = next ? Math.max(10, next.time - sample.time) : 30;
      return [Math.max(1, Math.round(sample.amplitude * 40)), gap];
    });
    navigator.vibrate(pattern);
  }

  const timer = window.setTimeout(stopPlayback, (lastSample()?.time || 0) + 180);
  state.playTimers.push(timer);
}

function stopPlayback() {
  state.playTimers.forEach((timer) => clearTimeout(timer));
  state.playTimers = [];
  if ("vibrate" in navigator) navigator.vibrate(0);
  state.isPlaying = false;
  state.statusKey = state.take ? "finished" : "ready";
  renderStatus();
  updateButtons();
}

function exportJson() {
  if (!state.take) {
    pulseElement(els.currentTake, "shake-soft");
    return;
  }
  const json = JSON.stringify(state.take, null, 2);
  els.jsonOutput.value = json;
  const safeName = state.take.name.replace(/[^\u4e00-\u9fa5a-zA-Z0-9_-]/g, "");
  const blob = new Blob([json], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${safeName || "vibration"}-${state.take.timecode.replace(/[:.]/g, "-")}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  navigator.clipboard?.writeText(json).catch(() => {});
  setActionLabel(els.exportBtn, "exported");
  window.setTimeout(() => setActionLabel(els.exportBtn, "exportJson"), 1000);
}

function applyThemePreference(preference) {
  state.themePreference = preference;
  localStorage.setItem("vibe-theme", preference);
  const resolved = preference === "system" ? (systemTheme.matches ? "dark" : "light") : preference;
  document.documentElement.dataset.theme = resolved;
  const color = resolved === "dark" ? "#333333" : "#ffffff";
  document.querySelector('meta[name="theme-color"]').setAttribute("content", color);
  els.themeToggle.innerHTML = `<i data-lucide="${preference === "system" ? "monitor" : preference === "dark" ? "moon" : "sun"}" aria-hidden="true"></i>`;
  $$("[data-theme-option]").forEach((button) => {
    button.setAttribute("aria-checked", String(button.dataset.themeOption === preference));
  });
  refreshIcons();
  drawCurve();
}

function toggleThemeMenu(force) {
  const willOpen = typeof force === "boolean" ? force : els.themeMenu.hidden;
  els.themeMenu.hidden = !willOpen;
  els.themeToggle.setAttribute("aria-expanded", String(willOpen));
  if (willOpen) refreshIcons();
}

function toggleInputMenu(force) {
  const willOpen = typeof force === "boolean" ? force : els.inputMenu.hidden;
  els.inputMenu.hidden = !willOpen;
  els.inputToggle.setAttribute("aria-expanded", String(willOpen));
  if (willOpen) refreshIcons();
}

function applyTranslations() {
  const dict = messages[state.lang] || messages.zh;
  document.documentElement.lang = dict.htmlLang;
  document.title = dict.pageTitle;
  $$("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  $$("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  $$("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });
  $$("[data-i18n-title]").forEach((element) => {
    element.title = t(element.dataset.i18nTitle);
  });
  $$("[data-lang]").forEach((button) => {
    const active = button.dataset.lang === state.lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  updateInputMode();
  renderStatus();
  updateTakeView();
  refreshIcons();
}

function setLanguage(lang) {
  state.lang = messages[lang] ? lang : "zh";
  localStorage.setItem("vibe-lang", state.lang);
  applyTranslations();
}

function handleShortcut(event) {
  const target = event.target;
  const editingText = target instanceof HTMLTextAreaElement || target instanceof HTMLInputElement && target.type !== "range";
  if (editingText) return;

  const key = event.key.toLowerCase();
  const code = event.code;
  const isRecordShortcut = key === "enter" || key === " " || code === "Space";
  const focusedCommandButton = target instanceof HTMLButtonElement && target !== els.recordBtn && target !== els.stopBtn;
  if (isRecordShortcut && focusedCommandButton) return;
  const cmd = event.metaKey || event.ctrlKey;
  const shift = event.shiftKey;
  let handled = true;

  if (cmd && key === "z" && shift) redoEdit();
  else if (cmd && key === "z") undoEdit();
  else if (key === " " || code === "Space") {
    if (!event.repeat) toggleRecordingPause();
  } else if (key === "enter") {
    if (!event.repeat) state.isRecording ? finishTake() : startRecording();
  } else if (key === "k") state.isPlaying ? stopPlayback() : playTake();
  else if (key === "r") state.isRecording ? finishTake() : startRecording();
  else if (key === "s") smoothCurrentCurve();
  else if (key === "e") exportJson();
  else if (key === "escape") {
    toggleThemeMenu(false);
    toggleInputMenu(false);
    if (state.isRecording) finishTake();
    else stopPlayback();
  } else if (key === "delete" || key === "backspace") clearTake();
  else if (key === "arrowup" || key === "=" || key === "+") {
    markInputActivity("keyboard");
    setLevel(state.level + (shift ? 10 : 3));
  } else if (key === "arrowdown" || key === "-" || key === "_") {
    markInputActivity("keyboard");
    setLevel(state.level - (shift ? 10 : 3));
  }
  else if (["1", "2", "3", "4"].includes(key)) {
    markInputActivity("keyboard");
    setLevel(Number(key) * 25);
  }
  else if (key === "0") {
    markInputActivity("keyboard");
    setLevel(0);
  }
  else handled = false;

  if (handled) event.preventDefault();
}

function smoothCurrentCurve() {
  if (!state.samples.length) return;
  pushHistory();
  state.samples = smoothSamples(state.samples);
  if (state.take) state.take.points = cloneSamples();
  updateTakeView();
  drawCurve();
  pulseElement(els.canvas);
}

function setLevelFromPad(clientY) {
  const rect = els.wheelPad.getBoundingClientRect();
  const y = Math.max(0, Math.min(rect.height, clientY - rect.top));
  setLevel(100 - (y / rect.height) * 100);
}

function pollGamepad() {
  const pads = Array.from(navigator.getGamepads?.() || []);
  const pad = state.gamepadIndex === null ? pads.find(Boolean) : pads[state.gamepadIndex];
  if (pad) {
    state.gamepadIndex = pad.index;
    if (state.inputPreference === "auto" && resolveInputMode() !== "joystick") setActiveInput("joystick");
    const verticalAxis = Math.abs(pad.axes[1] || 0) >= Math.abs(pad.axes[0] || 0) ? pad.axes[1] || 0 : pad.axes[0] || 0;
    if (Math.abs(verticalAxis) > 0.08) setLevel((1 - verticalAxis) * 50);
    pad.buttons.slice(0, 4).forEach((button, index) => {
      if (button?.pressed) setLevel((index + 1) * 25);
    });
  }
  requestAnimationFrame(pollGamepad);
}

els.slider.addEventListener("pointerdown", () => markInputActivity("touch"));
els.slider.addEventListener("input", (event) => {
  markInputActivity("touch");
  setLevel(event.target.value);
});
els.wheelPad.addEventListener("wheel", (event) => {
  event.preventDefault();
  markInputActivity("joystick");
  setLevel(state.level - event.deltaY * 0.08);
}, { passive: false });
els.wheelPad.addEventListener("pointerdown", (event) => {
  markInputActivity("joystick");
  state.isUsingJoystick = true;
  els.wheelPad.setPointerCapture(event.pointerId);
  setLevelFromPad(event.clientY);
});
els.wheelPad.addEventListener("pointermove", (event) => {
  if (!state.isUsingJoystick) return;
  setLevelFromPad(event.clientY);
});
els.wheelPad.addEventListener("pointerup", () => {
  state.isUsingJoystick = false;
});
els.wheelPad.addEventListener("pointercancel", () => {
  state.isUsingJoystick = false;
});

els.recordBtn.addEventListener("click", toggleRecordingPause);
els.stopBtn.addEventListener("click", finishTake);
els.clearBtn.addEventListener("click", clearTake);
els.smoothBtn.addEventListener("click", smoothCurrentCurve);
els.exportBtn.addEventListener("click", exportJson);
els.playBtn.addEventListener("click", playTake);
els.pauseBtn.addEventListener("click", stopPlayback);
els.inputToggle.addEventListener("click", () => toggleInputMenu());
$$("[data-input-choice]").forEach((button) => {
  button.addEventListener("click", () => {
    setActiveInput(button.dataset.inputChoice, { remember: true });
    toggleInputMenu(false);
  });
});
$$("[data-key-level]").forEach((button) => {
  button.addEventListener("click", () => {
    markInputActivity("keyboard");
    setLevel(button.dataset.keyLevel);
  });
});

els.canvas.addEventListener("pointerdown", (event) => {
  if (!state.samples.length || !state.take) return;
  state.dragIndex = nearestSample(event.clientX, event.clientY);
  if (state.dragIndex >= 0) {
    pushHistory();
    els.canvas.classList.add("is-editing");
    els.canvas.setPointerCapture(event.pointerId);
  }
});
els.canvas.addEventListener("pointermove", (event) => updateDraggedSample(event.clientY));
els.canvas.addEventListener("pointerup", () => {
  state.dragIndex = -1;
  els.canvas.classList.remove("is-editing");
});
els.canvas.addEventListener("pointercancel", () => {
  state.dragIndex = -1;
  els.canvas.classList.remove("is-editing");
});

els.themeToggle.addEventListener("click", () => toggleThemeMenu());
document.querySelector(".theme-menu").addEventListener("click", (event) => event.stopPropagation());
document.querySelector(".input-menu").addEventListener("click", (event) => event.stopPropagation());
$$("[data-theme-option]").forEach((button) => {
  button.addEventListener("click", () => {
    applyThemePreference(button.dataset.themeOption);
    toggleThemeMenu(false);
  });
});

$$("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

document.addEventListener("click", (event) => {
  if (!event.target.closest?.(".theme-menu")) toggleThemeMenu(false);
  if (!event.target.closest?.(".input-menu")) toggleInputMenu(false);
});
document.addEventListener("keydown", handleShortcut);
const onSystemThemeChange = () => {
  if (state.themePreference === "system") applyThemePreference("system");
};
if (systemTheme.addEventListener) systemTheme.addEventListener("change", onSystemThemeChange);
else systemTheme.addListener(onSystemThemeChange);

window.addEventListener("gamepadconnected", (event) => {
  state.gamepadIndex = event.gamepad.index;
  if (state.inputPreference === "auto") setActiveInput("joystick");
});

window.addEventListener("gamepaddisconnected", (event) => {
  if (state.gamepadIndex === event.gamepad.index) {
    state.gamepadIndex = null;
    if (state.inputPreference === "auto") setActiveInput("auto");
  }
});

function replayEntranceAnimation() {
  const elements = document.querySelectorAll('.hero-panel, .panel');
  elements.forEach((el) => {
    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = '';
  });
}

function init() {
  applyThemePreference(state.themePreference);
  applyTranslations();
  setActiveInput(state.inputPreference);
  setLevel(0);
  updateButtons();
  drawCurve();
  pollGamepad();

  const appTitle = document.getElementById('appTitle');
  if (appTitle) {
    appTitle.addEventListener('click', replayEntranceAnimation);
  }
}

window.addEventListener("resize", () => {
  updateInputMode();
  drawCurve();
});

init();
