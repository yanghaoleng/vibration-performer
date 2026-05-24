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
    finished: "已完成",
    playingState: "播放中",
    wheelControl: "鼠标滚轮控制震动振幅",
    wheelHelp: "桌面端在这里滚动鼠标滚轮",
    amplitudeLabel: "震动振幅",
    startRecord: "开始录制",
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
    shortcutRecord: "R 开始或停止录制",
    shortcutStop: "Esc 停止当前动作",
    shortcutClear: "Delete 清空当前片段",
    shortcutSmooth: "S 平滑曲线",
    shortcutExport: "E 或 Cmd/Ctrl+E 导出 JSON",
    shortcutPlay: "Space 或 K 播放/停止",
    shortcutStopPlayback: "Space 或 K 停止播放",
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
    finished: "Finished",
    playingState: "Playing",
    wheelControl: "Control vibration amplitude with the mouse wheel",
    wheelHelp: "Scroll here on desktop",
    amplitudeLabel: "Vibration amplitude",
    startRecord: "Record",
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
    shortcutRecord: "R starts or stops recording",
    shortcutStop: "Esc stops the current action",
    shortcutClear: "Delete clears the current take",
    shortcutSmooth: "S smooths the curve",
    shortcutExport: "E or Cmd/Ctrl+E exports JSON",
    shortcutPlay: "Space or K plays/stops",
    shortcutStopPlayback: "Space or K stops playback",
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
    finished: "完了",
    playingState: "再生中",
    wheelControl: "マウスホイールで振動の振幅を調整",
    wheelHelp: "デスクトップではここでスクロール",
    amplitudeLabel: "振動の振幅",
    startRecord: "録音",
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
    shortcutRecord: "R で録音開始/停止",
    shortcutStop: "Esc で現在の操作を停止",
    shortcutClear: "Delete でテイクをクリア",
    shortcutSmooth: "S でカーブをスムーズ化",
    shortcutExport: "E または Cmd/Ctrl+E で JSON 書き出し",
    shortcutPlay: "Space または K で再生/停止",
    shortcutStopPlayback: "Space または K で再生停止",
  },
};

const state = {
  isRecording: false,
  isPlaying: false,
  level: 0,
  samples: [],
  startAt: 0,
  take: null,
  dragIndex: -1,
  audio: null,
  playTimers: [],
  statusKey: "ready",
  lang: localStorage.getItem("vibe-lang") || "zh",
  themePreference: localStorage.getItem("vibe-theme") || "system",
  history: [],
  redoStack: [],
};

const els = {
  inputMode: $("#inputMode"),
  levelReadout: $("#levelReadout"),
  slider: $("#intensitySlider"),
  sliderGlow: $("#sliderGlow"),
  wheelPad: $("#wheelPad"),
  wheelValue: $("#wheelValue"),
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

function isFinePointer() {
  return matchMedia("(hover: hover) and (pointer: fine)").matches && innerWidth > 760 && !("ontouchstart" in window);
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
    finished: "finished",
    playing: "playingState",
  };
  setText(els.recordState, t(statusMap[state.statusKey] || "ready"), "status-swap");
}

function updateInputMode() {
  setText(els.inputMode, isFinePointer() ? t("wheelInput") : t("touchSlider"), "status-swap");
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
  els.recordBtn.disabled = state.isRecording;
  els.stopBtn.disabled = !state.isRecording;
  els.playBtn.disabled = state.samples.length === 0 || state.isPlaying || state.isRecording;
  els.pauseBtn.disabled = !state.isPlaying;
}

function recordTick() {
  if (!state.isRecording) return;
  const elapsed = Math.round((nowMs() - state.startAt) / 3);
  state.samples.push({ time: elapsed, amplitude: state.level / 100 });
  drawCurve();
  requestAnimationFrame(recordTick);
}

function startRecording() {
  stopPlayback();
  state.isRecording = true;
  state.samples = [];
  state.take = null;
  state.history = [];
  state.redoStack = [];
  state.startAt = nowMs();
  state.statusKey = "recording";
  updateTakeView();
  renderStatus();
  updateButtons();
  recordTick();
}

function finishTake() {
  if (!state.isRecording) return;
  state.isRecording = false;
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
  state.samples = [];
  state.take = null;
  state.history = [];
  state.redoStack = [];
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
  return {
    x: (sample.time / duration) * width,
    y: height - sample.amplitude * height,
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
  ctx.strokeStyle = styles.getPropertyValue("--grid").trim() || "rgba(0,0,0,0.12)";
  ctx.lineWidth = 1;
  for (let i = 1; i < 5; i += 1) {
    const y = (height / 5) * i;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  if (state.samples.length < 2) return;
  ctx.strokeStyle = styles.getPropertyValue("--yellow").trim() || "#8e6a08";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  state.samples.forEach((sample, index) => {
    const point = canvasPoint(sample);
    if (index === 0) ctx.moveTo(point.x, point.y);
    else ctx.lineTo(point.x, point.y);
  });
  ctx.stroke();

  ctx.fillStyle = ctx.strokeStyle;
  const step = Math.max(1, Math.floor(state.samples.length / 26));
  state.samples.forEach((sample, index) => {
    if (index % step !== 0 && index !== state.samples.length - 1) return;
    const point = canvasPoint(sample);
    ctx.beginPath();
    ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
    ctx.fill();
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
  state.samples[state.dragIndex].amplitude = 1 - y / rect.height;
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
  const color = resolved === "dark" ? "#1e1e1e" : "#f9f9f9";
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
  const cmd = event.metaKey || event.ctrlKey;
  const shift = event.shiftKey;
  let handled = true;

  if (cmd && key === "z" && shift) redoEdit();
  else if (cmd && key === "z") undoEdit();
  else if (key === " " || key === "k") state.isPlaying ? stopPlayback() : playTake();
  else if (key === "r") state.isRecording ? finishTake() : startRecording();
  else if (key === "s") smoothCurrentCurve();
  else if (key === "e") exportJson();
  else if (key === "escape") {
    toggleThemeMenu(false);
    if (state.isRecording) finishTake();
    else stopPlayback();
  } else if (key === "delete" || key === "backspace") clearTake();
  else if (key === "arrowup" || key === "=" || key === "+") setLevel(state.level + (shift ? 10 : 3));
  else if (key === "arrowdown" || key === "-" || key === "_") setLevel(state.level - (shift ? 10 : 3));
  else if (key === "0") setLevel(0);
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

els.slider.addEventListener("input", (event) => setLevel(event.target.value));
els.wheelPad.addEventListener("wheel", (event) => {
  event.preventDefault();
  setLevel(state.level - event.deltaY * 0.08);
}, { passive: false });

els.recordBtn.addEventListener("click", startRecording);
els.stopBtn.addEventListener("click", finishTake);
els.clearBtn.addEventListener("click", clearTake);
els.smoothBtn.addEventListener("click", smoothCurrentCurve);
els.exportBtn.addEventListener("click", exportJson);
els.playBtn.addEventListener("click", playTake);
els.pauseBtn.addEventListener("click", stopPlayback);

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
});
document.addEventListener("keydown", handleShortcut);
const onSystemThemeChange = () => {
  if (state.themePreference === "system") applyThemePreference("system");
};
if (systemTheme.addEventListener) systemTheme.addEventListener("change", onSystemThemeChange);
else systemTheme.addListener(onSystemThemeChange);

function init() {
  applyThemePreference(state.themePreference);
  applyTranslations();
  setLevel(0);
  updateButtons();
  drawCurve();
}

window.addEventListener("resize", () => {
  updateInputMode();
  drawCurve();
});

init();
