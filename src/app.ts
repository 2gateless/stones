interface RockMineral {
  name: string;
  percent: number;
}

interface RockChemistry {
  component: string;
  percent: string;
}

interface RockCharacteristics {
  color: string;
  hardness: string;
  texture: string;
  luster: string;
  origin: string;
}

interface RockClassification {
  rock_type: string;
  sub_type: string;
  use: string;
}

interface LocationCompare {
  region_name: string;
  regional_rocks: string[];
  geology_summary: string;
  match_percent: number;
  match_level: string;
  comparison_desc: string;
}

interface RockData {
  name_ko: string;
  name_en: string;
  description: string;
  minerals: RockMineral[];
  chemistry: RockChemistry[];
  characteristics: RockCharacteristics;
  classification: RockClassification;
  distribution: string[];
  location_compare: LocationCompare | null;
  savedAt?: string;
}

interface UserLocation {
  lat: number;
  lon: number;
  address: string | null;
}

const OFFLINE_ROCKS: Record<string, RockData> = {
  "화강암": {
    "name_ko": "화강암",
    "name_en": "Granite",
    "description": "지하 깊은 곳에서 마그마가 천천히 식어 굳어진 대표적인 조립질 화성암(심성암)입니다. 석영, 장석, 흑운모가 주성분이며 입자가 크고 뚜렷합니다.",
    "minerals": [{"name": "장석", "percent": 60}, {"name": "석영", "percent": 25}, {"name": "흑운모", "percent": 10}, {"name": "기타", "percent": 5}],
    "chemistry": [{"component": "SiO₂", "percent": "72%"}, {"component": "Al₂O₃", "percent": "14%"}, {"component": "K₂O", "percent": "4%"}, {"component": "Na₂O", "percent": "4%"}, {"component": "기타", "percent": "6%"}],
    "characteristics": {"color": "밝은 회색, 분홍색 분점", "hardness": "6 ~ 7 (매우 단단함)", "texture": "조립질 (등립상 조직)", "luster": "유리 광택", "origin": "대륙 지각 깊은 곳에서 마그마의 서서히 냉각"},
    "classification": {"rock_type": "화성암 (심성암)", "sub_type": "산성 심성암", "use": "건축 외장재, 석조 미술품, 축대"},
    "distribution": ["서울 북한산", "설악산", "오대산", "금강산"],
    "location_compare": null
  },
  "현무암": {
    "name_ko": "현무암",
    "name_en": "Basalt",
    "description": "지표 밖으로 분출된 용암이 빠르게 식어 형성된 세립질 화성암(화산암)입니다. 가스가 빠져나간 미세한 구멍이 많으며 휘석과 사장석이 주성분입니다.",
    "minerals": [{"name": "사장석", "percent": 45}, {"name": "휘석", "percent": 40}, {"name": "감람석", "percent": 10}, {"name": "기타", "percent": 5}],
    "chemistry": [{"component": "SiO₂", "percent": "49%"}, {"component": "Al₂O₃", "percent": "16%"}, {"component": "CaO", "percent": "10%"}, {"component": "FeO", "percent": "11%"}, {"component": "기타", "percent": "14%"}],
    "characteristics": {"color": "암회색 내지 검은색", "hardness": "6 (단단함)", "texture": "세립질 (다공질 또는 미정질)", "luster": "무광/둔한 광택", "origin": "화산 분출 시 지표면에서 마그마의 급격한 냉각"},
    "classification": {"rock_type": "화성암 (화산암)", "sub_type": "염기성 화산암", "use": "맷돌, 조경석, 도로 포장재"},
    "distribution": ["제주도 전역", "철원 평야", "울릉도/독도"],
    "location_compare": null
  },
  "편마암": {
    "name_ko": "편마암",
    "name_en": "Gneiss",
    "description": "기존의 암석이 매우 높은 온도와 압력을 받아 광물이 재결정화되어 뚜렷한 줄무늬(편마 구조)를 띠는 대표적인 변성암입니다.",
    "minerals": [{"name": "장석", "percent": 40}, {"name": "석영", "percent": 35}, {"name": "흑운모", "percent": 15}, {"name": "각섬석", "percent": 10}],
    "chemistry": [{"component": "SiO₂", "percent": "68%"}, {"component": "Al₂O₃", "percent": "15%"}, {"component": "Fe₂O₃", "percent": "4%"}, {"component": "기타", "percent": "13%"}],
    "characteristics": {"color": "밝고 어두운 줄무늬 (교대 배열)", "hardness": "6 (단단함)", "texture": "엽리상 (편마 구조)", "luster": "비단 또는 유리 광택", "origin": "기반암이 깊은 지하에서 광역 변성 작용을 받음"},
    "classification": {"rock_type": "변성암", "sub_type": "엽리상 변성암", "use": "디딤돌, 정원석, 석재"},
    "distribution": ["지리산", "경기 편마암 복합체", "영남 육괴"],
    "location_compare": null
  },
  "사암": {
    "name_ko": "사암",
    "name_en": "Sandstone",
    "description": "주로 모래 크기(0.06~2mm)의 입자들이 퇴적되어 다져지고 굳어진 대표적인 쇄설성 퇴적암입니다. 석영 입자가 주를 이룹니다.",
    "minerals": [{"name": "석영", "percent": 70}, {"name": "장석", "percent": 15}, {"name": "점토 광물", "percent": 10}, {"name": "기타", "percent": 5}],
    "chemistry": [{"component": "SiO₂", "percent": "78%"}, {"component": "Al₂O₃", "percent": "10%"}, {"component": "기타", "percent": "12%"}],
    "characteristics": {"color": "황갈색, 붉은색, 회색", "hardness": "5.5 ~ 6", "texture": "쇄설성 (모래 입자감)", "luster": "둔한 광택", "origin": "강가, 사구, 연안 등 모래 퇴적 및 교결 작용"},
    "classification": {"rock_type": "퇴적암", "sub_type": "쇄설성 퇴적암", "use": "건축 자재, 숯돌, 공예재"},
    "distribution": ["경상 분지 일대", "태백산 분지"],
    "location_compare": null
  },
  "셰일": {
    "name_ko": "셰일",
    "name_en": "Shale",
    "description": "점토나 진흙 등 매우 미세한 점토 광물 입자가 쌓여 층리(층상 구조)를 이루며 평행하게 쪼개지는 쇄설성 퇴적암입니다.",
    "minerals": [{"name": "점토광물", "percent": 60}, {"name": "석영", "percent": 25}, {"name": "장석", "percent": 10}, {"name": "유기물/철산화물", "percent": 5}],
    "chemistry": [{"component": "SiO₂", "percent": "58%"}, {"component": "Al₂O₃", "percent": "18%"}, {"component": "Fe₂O₃", "percent": "6%"}, {"component": "기타", "percent": "18%"}],
    "characteristics": {"color": "검은색, 회색, 적색", "hardness": "3 ~ 4 (약함, 쉽게 긁힘)", "texture": "미립질 (평행 층리 구조)", "luster": "무광택", "origin": "호수나 깊은 바다 등 잔잔한 물속에서 점토의 누적 및 다짐"},
    "classification": {"rock_type": "퇴적암", "sub_type": "쇄설성 퇴적암", "use": "벽돌 원료, 시멘트 배합용, 도자기 원료"},
    "distribution": ["경상북도 채석강 주변", "강원도 태백시"],
    "location_compare": null
  },
  "역암": {
    "name_ko": "역암",
    "name_en": "Conglomerate",
    "description": "자갈(2mm 이상)을 주성분으로 하며, 자갈 사이사이에 모래나 진흙이 채워져 다져지고 굳어진 거친 쇄설성 퇴적암입니다.",
    "minerals": [{"name": "다양한 암석 자갈", "percent": 55}, {"name": "모래/석영", "percent": 25}, {"name": "점토/교결제", "percent": 20}],
    "chemistry": [{"component": "SiO₂", "percent": "65%"}, {"component": "Al₂O₃", "percent": "12%"}, {"component": "기타", "percent": "23%"}],
    "characteristics": {"color": "자갈 색상에 따라 잡색", "hardness": "4 ~ 6 (자갈 종류에 따라 다양)", "texture": "쇄설성 (자갈 입자 뚜렷)", "luster": "무광택", "origin": "선상지, 강 상류 등 유속이 빠른 곳에서 큰 입자 퇴적"},
    "classification": {"rock_type": "퇴적암", "sub_type": "쇄설성 퇴적암", "use": "자갈 수급용, 콘크리트 골재, 정원석"},
    "distribution": ["경상남도 고성군 지층", "마이산 일대"],
    "location_compare": null
  }
};

// Service Worker 등록
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('ServiceWorker registered', reg))
      .catch(err => console.error('ServiceWorker failed', err));
  });
}

// 온라인/오프라인 상태 관리
function updateOnlineStatus() {
  const banner = document.getElementById('offlineBanner');
  if (banner) {
    if (navigator.onLine) banner.classList.add('hidden');
    else banner.classList.remove('hidden');
  }
}
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);
window.addEventListener('DOMContentLoaded', () => {
  updateOnlineStatus();
  updateHistoryBtnText();
});

// 분석 기록 관리
function getHistory(): RockData[] {
  try {
    return JSON.parse(localStorage.getItem('rock_history') || '[]');
  } catch (e) {
    return [];
  }
}

function saveToHistory(rockData: RockData) {
  const history = getHistory();
  const filtered = history.filter(h => h.name_ko !== rockData.name_ko);
  const newItem: RockData = {
    ...rockData,
    savedAt: new Date().toLocaleDateString('ko-KR', { hour: '2-digit', minute: '2-digit' })
  };
  filtered.unshift(newItem);
  if (filtered.length > 15) filtered.pop();
  localStorage.setItem('rock_history', JSON.stringify(filtered));
  updateHistoryBtnText();
}

function updateHistoryBtnText() {
  const btn = document.getElementById('historyTabBtn');
  if (btn) {
    btn.textContent = `📜 분석 기록 (${getHistory().length})`;
  }
}

let activeTab: 'history' | 'dict' | null = null;

function toggleHistoryList() {
  const area = document.getElementById('localListArea');
  if (!area) return;
  if (activeTab === 'history') {
    area.classList.add('hidden');
    activeTab = null;
    return;
  }
  activeTab = 'history';
  area.classList.remove('hidden');
  
  const history = getHistory();
  if (history.length === 0) {
    area.innerHTML = '<div style="font-size:12px;color:#aaa;text-align:center;padding:12px;">이전 분석 기록이 없습니다.</div>';
    return;
  }
  
  let html = '';
  history.forEach((h, idx) => {
    html += `
      <div class="history-item" onclick="loadHistoryItem(${idx})">
        <span class="history-name">${h.name_ko} <small style="font-weight:normal;color:#888;">(${h.classification?.rock_type || '암석'})</small></span>
        <span class="history-date">${h.savedAt || ''}</span>
      </div>
    `;
  });
  area.innerHTML = html;
}

function toggleOfflineDict() {
  const area = document.getElementById('localListArea');
  if (!area) return;
  if (activeTab === 'dict') {
    area.classList.add('hidden');
    activeTab = null;
    return;
  }
  activeTab = 'dict';
  area.classList.remove('hidden');
  
  let html = '';
  Object.keys(OFFLINE_ROCKS).forEach((key) => {
    const r = OFFLINE_ROCKS[key];
    html += `
      <div class="history-item" onclick="loadDictItem('${key}')">
        <span class="history-name">📖 ${r.name_ko} <small style="font-weight:normal;color:#888;">(${r.name_en})</small></span>
        <span class="history-date" style="color:#8B6914;font-weight:bold;">열람</span>
      </div>
    `;
  });
  area.innerHTML = html;
}

function loadHistoryItem(idx: number) {
  const history = getHistory();
  if (history[idx]) {
    showResult(history[idx]);
  }
}

function loadDictItem(key: string) {
  if (OFFLINE_ROCKS[key]) {
    const data = JSON.parse(JSON.stringify(OFFLINE_ROCKS[key])) as RockData;
    if (userLocation) {
      data.location_compare = {
        region_name: userLocation.address || "현재 분석 위치",
        regional_rocks: [data.name_ko, "편마암", "화강암"],
        geology_summary: `${userLocation.address || '현재 위치'} 주변의 지질 상태입니다. (오프라인 가상 지질 정보)`,
        match_percent: 75,
        match_level: "보통",
        comparison_desc: "오프라인 상태에서는 해당 지역과의 상세 데이터 비교를 위해 네트워크 연결이 필요합니다. 암석의 기본적인 조암 구조를 검토해 보세요."
      };
    }
    showResult(data);
  }
}

let imgB64: string | null = null;
let stream: MediaStream | null = null;
let userLocation: UserLocation | null = null;

async function getGPSLocation() {
  const btn = document.getElementById('gpsBtn');
  const status = document.getElementById('gpsStatus');
  if (!btn || !status) return;
  
  if (!navigator.geolocation) {
    status.textContent = '⚠️ 이 브라우저는 GPS를 지원하지 않습니다.';
    status.classList.remove('hidden');
    return;
  }
  
  btn.textContent = '📍 위치 가져오는 중...';
  (btn as HTMLButtonElement).disabled = true;
  status.classList.add('hidden');
  
  navigator.geolocation.getCurrentPosition(async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    userLocation = { lat, lon, address: null };
    
    status.innerHTML = `<div><strong>위도:</strong> ${lat.toFixed(4)}, <strong>경도:</strong> ${lon.toFixed(4)}</div><div style="font-size:11px;color:#8a6a3a;margin-top:4px;">지역명을 불러오는 중...</div>`;
    status.classList.remove('hidden');
    
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=14`, {
        headers: { 'Accept-Language': 'ko' }
      });
      if (res.ok) {
        const data = await res.json();
        const address = data.display_name || data.address?.road || data.address?.suburb || data.address?.city || '';
        userLocation.address = address;
        status.innerHTML = `<div><strong>위치:</strong> ${address}</div><div style="font-size:11px;color:#8a6a3a;margin-top:4px;">(위도: ${lat.toFixed(4)}, 경도: ${lon.toFixed(4)})</div>`;
      } else {
        throw new Error();
      }
    } catch (e) {
      status.innerHTML = `<div><strong>위치 획득 성공 (지역명 로드 실패)</strong></div><div style="font-size:11px;color:#8a6a3a;margin-top:4px;">(위도: ${lat.toFixed(4)}, 경도: ${lon.toFixed(4)})</div>`;
    }
    btn.textContent = '📍 위치 업데이트 완료';
    (btn as HTMLButtonElement).disabled = false;
  }, (err) => {
    status.textContent = '⚠️ 위치 정보를 가져오지 못했습니다: ' + (err.message || '권한 거부');
    status.classList.remove('hidden');
    btn.textContent = '📍 현재 위치 가져오기';
    (btn as HTMLButtonElement).disabled = false;
    userLocation = null;
  }, { timeout: 10000 });
}

function saveKey() {
  const input = document.getElementById('apiKeyInput') as HTMLInputElement;
  const status = document.getElementById('keyStatus');
  if (!input || !status) return;
  const k = input.value.trim();
  if(!k.startsWith('AIzaSy')) { status.textContent='⚠️ AIzaSy 로 시작하는 Gemini 키를 입력해 주세요.'; return; }
  localStorage.setItem('rock_api_key', k);
  status.textContent='✅ 저장되었습니다.';
  input.value='••••••••••••••••••••';
}

// 저장된 키 복원
window.addEventListener('DOMContentLoaded', () => {
  const k = localStorage.getItem('rock_api_key');
  const input = document.getElementById('apiKeyInput') as HTMLInputElement;
  const status = document.getElementById('keyStatus');
  if(k && input && status) {
    input.value='••••••••••••••••••••';
    status.textContent='✅ 저장된 키가 있습니다.';
  }
});

// ── 이미지 압축 공통 함수 ──────────────────────────────────────
const MAX_PX = 640;
const QUALITY = 0.65;

function compressImage(srcDataUrl: string, callback: (compressed: string) => void) {
  const tmpImg = new Image();
  tmpImg.onload = () => {
    let w = tmpImg.naturalWidth, h = tmpImg.naturalHeight;
    if (w > MAX_PX || h > MAX_PX) {
      if (w >= h) { h = Math.round(h * MAX_PX / w); w = MAX_PX; }
      else        { w = Math.round(w * MAX_PX / h); h = MAX_PX; }
    }
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    const ctx = c.getContext('2d');
    if (ctx) {
      ctx.drawImage(tmpImg, 0, 0, w, h);
    }
    const compressed = c.toDataURL('image/jpeg', QUALITY);
    callback(compressed);
  };
  tmpImg.src = srcDataUrl;
}

// 파일 업로드
const uploadBox = document.getElementById('uploadBox');
const fileInput = document.getElementById('fileInput') as HTMLInputElement;
if (uploadBox && fileInput) {
  uploadBox.onclick = () => fileInput.click();
  fileInput.onchange = (e) => {
    const target = e.target as HTMLInputElement;
    const f = target.files?.[0]; if(!f) return;
    const r = new FileReader();
    r.onload = ev => {
      if (ev.target?.result) {
        compressImage(ev.target.result as string, compressed => {
          imgB64 = compressed.split(',')[1];
          const placeholder = document.getElementById('uploadPlaceholder');
          if (placeholder) placeholder.classList.add('hidden');
          const img = document.getElementById('uploadPreview') as HTMLImageElement;
          if (img) {
            img.src = compressed; img.classList.remove('hidden');
          }
        });
      }
    };
    r.readAsDataURL(f);
  };
}

// 엔터키
const rockInput = document.getElementById('rockInput');
if (rockInput) {
  rockInput.addEventListener('keydown', e => {
    if((e as KeyboardEvent).key==='Enter') analyze();
  });
}

// 카메라
let videoTrack: MediaStreamTrack | null = null;

async function startCam() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment', width: {ideal: 1280}, height: {ideal: 720}}});
    const camOff = document.getElementById('camOff');
    const camOn = document.getElementById('camOn');
    if (camOff && camOn) {
      camOff.classList.add('hidden');
      camOn.classList.remove('hidden');
    }
    
    const video = document.getElementById('video') as HTMLVideoElement;
    if (video) video.srcObject = stream;
    
    videoTrack = stream.getVideoTracks()[0];
    
    setTimeout(() => {
      try {
        if (!videoTrack) return;
        const capabilities = videoTrack.getCapabilities() as any;
        const slider = document.getElementById('zoomSlider') as HTMLInputElement;
        
        if (capabilities.zoom && slider) {
          slider.min = String(capabilities.zoom.min || 1);
          slider.max = String(capabilities.zoom.max || 5);
          slider.step = String(capabilities.zoom.step || 0.1);
          slider.value = String((videoTrack.getConstraints() as any).zoom || 1);
          const zoomVal = document.getElementById('zoomVal');
          if (zoomVal) {
            zoomVal.textContent = parseFloat(slider.value).toFixed(1) + 'x';
          }
        } else if (slider) {
          slider.min = "1";
          slider.max = "3";
          slider.step = "0.1";
          slider.value = "1";
        }
        
        if (capabilities.focusMode && capabilities.focusMode.includes('continuous')) {
          (videoTrack as any).applyConstraints({advanced: [{focusMode: 'continuous'}]}).catch(()=>{});
        }
      } catch (e) {
        console.log("Zoom/Focus capabilities check bypassed:", e);
      }
    }, 1000);
    
  } catch(e) { showErr('카메라 접근 권한이 필요하거나 후면 카메라를 활성화할 수 없습니다.'); }
}

function setZoom(val: string) {
  const zoomVal = document.getElementById('zoomVal');
  if (zoomVal) {
    zoomVal.textContent = parseFloat(val).toFixed(1) + 'x';
  }
  if (videoTrack) {
    try {
      const caps = videoTrack.getCapabilities() as any;
      if (caps.zoom) {
        videoTrack.applyConstraints({
          advanced: [{ zoom: parseFloat(val) }]
        } as any).catch(err => console.warn("applyConstraints zoom error", err));
      } else {
        const video = document.getElementById('video');
        if (video) {
          video.style.transform = `scale(${val})`;
          video.style.transformOrigin = 'center center';
        }
      }
    } catch (e) {
      const video = document.getElementById('video');
      if (video) {
        video.style.transform = `scale(${val})`;
        video.style.transformOrigin = 'center center';
      }
    }
  }
}

function stopCam() {
  if (videoTrack) {
    videoTrack = null;
  }
  if(stream) {
    stream.getTracks().forEach(t=>t.stop());
  }
  const video = document.getElementById('video');
  if (video) video.style.transform = 'none';
  const slider = document.getElementById('zoomSlider') as HTMLInputElement;
  if (slider) slider.value = "1";
  const zoomVal = document.getElementById('zoomVal');
  if (zoomVal) zoomVal.textContent = '1.0x';

  const camOff = document.getElementById('camOff');
  const camOn = document.getElementById('camOn');
  if (camOff && camOn) {
    camOff.classList.remove('hidden');
    camOn.classList.add('hidden');
  }
}

function capture() {
  const v = document.getElementById('video') as HTMLVideoElement;
  const c = document.getElementById('canvas') as HTMLCanvasElement;
  const slider = document.getElementById('zoomSlider') as HTMLInputElement;
  if (!v || !c || !slider) return;
  const zoomVal = parseFloat(slider.value) || 1.0;
  
  c.width = v.videoWidth; c.height = v.videoHeight;
  const ctx = c.getContext('2d');
  if (!ctx) return;
  
  let isHardwareZoom = false;
  if (videoTrack) {
    try {
      const caps = videoTrack.getCapabilities() as any;
      if (caps.zoom) isHardwareZoom = true;
    } catch(e){}
  }
  
  if (!isHardwareZoom && zoomVal > 1.0) {
    const sw = v.videoWidth / zoomVal;
    const sh = v.videoHeight / zoomVal;
    const sx = (v.videoWidth - sw) / 2;
    const sy = (v.videoHeight - sh) / 2;
    ctx.drawImage(v, sx, sy, sw, sh, 0, 0, v.videoWidth, v.videoHeight);
  } else {
    ctx.drawImage(v, 0, 0);
  }
  
  const raw = c.toDataURL('image/jpeg', 1.0);
  compressImage(raw, compressed => {
    imgB64 = compressed.split(',')[1];
    const placeholder = document.getElementById('uploadPlaceholder');
    if (placeholder) placeholder.classList.add('hidden');
    const img = document.getElementById('uploadPreview') as HTMLImageElement;
    if (img) {
      img.src = compressed; img.classList.remove('hidden');
    }
  });
  stopCam();
}

function showErr(msg: string) {
  const b = document.getElementById('errBox');
  if (b) {
    b.textContent = msg; b.classList.remove('hidden');
  }
}

function hideErr() {
  const b = document.getElementById('errBox');
  if (b) b.classList.add('hidden');
}

// 분석
async function analyze() {
  const rockInputEl = document.getElementById('rockInput') as HTMLInputElement;
  if (!rockInputEl) return;
  const name = rockInputEl.value.trim();
  if(!name && !imgB64) { showErr('암석 이름을 입력하거나 이미지를 제공해 주세요.'); return; }
  hideErr();
  const btn = document.getElementById('analyzeBtn') as HTMLButtonElement;
  if (btn) {
    btn.textContent='🔍 분석 중...'; btn.disabled=true;
  }

  // 스켈레톤 로딩 UI 출력 및 화면 전환
  const skeletonHtml = `
    <div class="skeleton-header">
      <div class="skeleton-shimmer" style="width: 130px; height: 24px; border-radius: 6px;"></div>
      <div class="skeleton-shimmer" style="width: 80px; height: 14px; border-radius: 6px;"></div>
      <div class="skeleton-shimmer skeleton-circle"></div>
    </div>
    <div class="skeleton-card">
      <div class="skeleton-shimmer skeleton-title" style="width: 30%;"></div>
      <div class="skeleton-shimmer skeleton-line"></div>
      <div class="skeleton-shimmer skeleton-line"></div>
      <div class="skeleton-shimmer skeleton-line short"></div>
    </div>
    ${userLocation ? `
    <div class="skeleton-card">
      <div class="skeleton-shimmer skeleton-title" style="width: 45%;"></div>
      <div class="skeleton-shimmer skeleton-line"></div>
      <div class="skeleton-shimmer skeleton-line"></div>
      <div class="skeleton-shimmer skeleton-line short"></div>
    </div>` : ''}
    <div class="skeleton-card">
      <div class="skeleton-shimmer skeleton-title" style="width: 35%;"></div>
      <div style="height: 160px; border-radius: 10px;" class="skeleton-shimmer"></div>
    </div>
  `;
  const inputView = document.getElementById('inputView');
  const rv = document.getElementById('resultView');
  if (inputView && rv) {
    inputView.classList.add('hidden');
    rv.innerHTML = skeletonHtml;
    rv.classList.remove('hidden');
  }
  window.scrollTo(0,0);

  // 오프라인 검색 폴백 헬퍼
  const tryOfflineFallback = (nameInput: string): RockData | null => {
    if (!nameInput) return null;
    const query = nameInput.replace(/\s+/g, '');
    for (const key of Object.keys(OFFLINE_ROCKS)) {
      if (key.includes(query) || query.includes(key) || OFFLINE_ROCKS[key].name_en.toLowerCase().includes(query.toLowerCase())) {
        return OFFLINE_ROCKS[key];
      }
    }
    return null;
  };

  // 1. 오프라인 모드일 때 로컬 도감 검색
  if (!navigator.onLine) {
    const localRock = tryOfflineFallback(name);
    if (localRock) {
      const data = JSON.parse(JSON.stringify(localRock)) as RockData;
      if (userLocation) {
        data.location_compare = {
          region_name: userLocation.address || "현재 분석 위치",
          regional_rocks: [data.name_ko, "편마암", "화강암"],
          geology_summary: `${userLocation.address || '현재 위치'} 주변의 지질 상태입니다. (오프라인 가상 지질 정보)`,
          match_percent: 75,
          match_level: "보통",
          comparison_desc: "오프라인 상태에서는 해당 지역과의 정밀 지질 비교를 수행하기 위해 인터넷 연결이 필요합니다. 기본적인 암석 특징 및 조암광물 구조를 참고하세요."
        };
      }
      showResult(data);
      saveToHistory(data);
      if (btn) {
        btn.textContent='🔍 암석 분석하기'; btn.disabled=false;
      }
      return;
    } else {
      if (rv && inputView) {
        rv.classList.add('hidden');
        inputView.classList.remove('hidden');
      }
      showErr('현재 오프라인 상태입니다. "화강암, 현무암, 편마암, 사암, 셰일, 역암" 등 기본 암석 이름을 입력하시면 오프라인 도감을 볼 수 있습니다.');
      if (btn) {
        btn.textContent='🔍 암석 분석하기'; btn.disabled=false;
      }
      return;
    }
  }

  let locPrompt = '';
  if (userLocation) {
    locPrompt = `\n\n[사용자 GPS 위치 정보]\n위도: ${userLocation.lat.toFixed(6)}, 경도: ${userLocation.lon.toFixed(6)}${userLocation.address ? `, 행정구역/지역명: ${userLocation.address}` : ''}\n이 위치 정보를 바탕으로 해당 지역의 지질학적 특징을 파악하고, 주로 발견되는 대표적인 암석 유형들을 분석한 뒤, 현재 분석 대상인 암석이 이 지역에서 발견될 확률/연관성(match_percent, match_level) 및 상세 비교 분석 정보(comparison_desc)를 포함해 주세요.`;
  }

  const prompt = `${name?`암석 이름: ${name}`:'첨부된 이미지의 암석을 식별해 주세요.'}${locPrompt}

다음 정보를 JSON으로만 응답하세요 (마크다운 없이):
{"name_ko":"한글이름","name_en":"English name","minerals":[{"name":"장석","percent":40},{"name":"석영","percent":30},{"name":"흑운모","percent":15},{"name":"휘석","percent":5},{"name":"감람석","percent":3}],"chemistry":[{"component":"SiO₂","percent":"72%"},{"component":"Al₂O₃","percent":"14%"},{"component":"K₂O","percent":"5%"},{"component":"Na₂O","percent":"4%"},{"component":"CaO","percent":"2%"},{"component":"Fe₂O₃","percent":"2%"}],"characteristics":{"color":"색상","hardness":"경도(모스)","texture":"조직","luster":"광택","origin":"생성환경"},"classification":{"rock_type":"화성암/퇴적암/변성암","sub_type":"세부분류","use":"용도별 분류"},"distribution":["분포지1","분포지2","분포지3"],"description":"설명 2-3문장"${userLocation ? ',"location_compare":{"region_name":"지역명 또는 산 이름","regional_rocks":["암석1","암석2"],"geology_summary":"지질학적 특징 요약","match_percent":85,"match_level":"매우 높음/보통/낮음","comparison_desc":"현재 암석과의 비교 및 발견 가능성에 대한 지질학적 설명"}' : ''}}`;

  const contents: any[] = [{
    parts: [{ text: prompt }]
  }];

  if(imgB64) {
    contents[0].parts.push({
      inline_data: {
        mime_type: "image/jpeg",
        data: imgB64
      }
    });
  }

  try {
    const apiKey = localStorage.getItem('rock_api_key');
    if(!apiKey) { 
      if (rv && inputView) {
        rv.classList.add('hidden');
        inputView.classList.remove('hidden');
      }
      showErr('API 키를 먼저 입력하고 저장해 주세요.'); 
      if (btn) {
        btn.textContent='🔍 암석 분석하기'; btn.disabled=false; 
      }
      return; 
    }

    let modelName = localStorage.getItem('rock_model_name');
    if (!modelName) {
      const mRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
      if (!mRes.ok) throw new Error('API 키 검증 실패 또는 모델 목록을 가져올 수 없습니다.');
      const mData = await mRes.json();
      const models = (mData.models || []).map((m: any) => m.name.replace('models/', ''));
      
      const preferred = [
        'gemini-2.5-flash-lite',
        'gemini-2.0-flash-lite',
        'gemini-2.0-flash',
        'gemini-1.5-flash',
        'gemini-1.5-flash-latest',
        'gemini-1.5-pro',
        'gemini-1.0-pro-vision'
      ];
      for (const p of preferred) {
        if (models.includes(p)) { modelName = p; break; }
      }
      if (!modelName) modelName = models.find((m: string) => m.includes('vision') || m.includes('1.5')) || models.find((m: string) => m.includes('gemini'));
      if (!modelName) throw new Error('지원되는 Gemini 모델이 없습니다. 허용된 모델: ' + models.join(', '));
      
      localStorage.setItem('rock_model_name', modelName);
    }

    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents })
    });

    if(!res.ok){
      if (res.status === 404) localStorage.removeItem('rock_model_name');
      const e=await res.json().catch(()=>({}));
      throw new Error((e?.error?.message||`HTTP ${res.status}`) + ` (선택된 모델: ${modelName})`);
    }
    const data=await res.json();
    const txt=data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const d=JSON.parse(txt.replace(/```json|```/g,'').trim()) as RockData;
    showResult(d);
    saveToHistory(d);
  } catch(e: any) { 
    const localRock = tryOfflineFallback(name);
    if (localRock) {
      const data = JSON.parse(JSON.stringify(localRock)) as RockData;
      showResult(data);
      saveToHistory(data);
      showErr('API 분석이 실패하여 오프라인 도감 데이터로 대체 표시합니다. (원인: ' + e.message + ')');
    } else {
      if (rv && inputView) {
        rv.classList.add('hidden');
        inputView.classList.remove('hidden');
      }
      showErr('분석 오류: ' + e.message); 
    }
  }
  if (btn) {
    btn.textContent='🔍 암석 분석하기'; btn.disabled=false;
  }
}

// SVG 파이차트 (외부 라이브러리 없이)
function svgPie(minerals: RockMineral[]) {
  const W=300,H=220,cx=110,cy=110,R=85;
  const COLORS=["#8B6914","#A0A0A0","#2D2D2D","#5C3A1E","#4A7C59","#C4A35A","#7B68EE"];
  const total=minerals.reduce((s,m)=>s+m.percent,0);
  let angle=-Math.PI/2, paths='', labels='', legend='';
  minerals.forEach((m,i)=>{
    const ratio=m.percent/total, sweep=ratio*2*Math.PI;
    const x1=cx+R*Math.cos(angle), y1=cy+R*Math.sin(angle);
    const x2=cx+R*Math.cos(angle+sweep), y2=cy+R*Math.sin(angle+sweep);
    const large=sweep>Math.PI?1:0;
    const mx=cx+(R+28)*Math.cos(angle+sweep/2), my=cy+(R+28)*Math.sin(angle+sweep/2);
    paths+=`<path d="M${cx},${cy} L${x1},${y1} A${R},${R} 0 ${large},1 ${x2},${y2} Z" fill="${COLORS[i%COLORS.length]}" opacity="0.88"/>`;
    labels+=`<text x="${mx}" y="${my}" text-anchor="${mx>cx?'start':'end'}" dominant-baseline="central" font-size="9.5" fill="#4a2c0a" font-weight="600">${m.name} ${m.percent}%</text>`;
    legend+=`<rect x="${W-110}" y="${12+i*22}" width="13" height="13" rx="3" fill="${COLORS[i%COLORS.length]}"/>
    <text x="${W-93}" y="${22+i*22}" font-size="11" fill="#333">${m.name}: ${m.percent}%</text>`;
    angle+=sweep;
  });
  return `<svg viewBox="0 0 ${W} ${H}" width="100%" style="display:block">${paths}${labels}${legend}</svg>`;
}

// SVG 막대그래프
function svgBar(minerals: RockMineral[]) {
  const COLORS=["#8B6914","#A0A0A0","#2D2D2D","#5C3A1E","#4A7C59","#C4A35A","#7B68EE"];
  const W=300,H=150,pad=30,bw=32,gap=8;
  const max=Math.max(...minerals.map(m=>m.percent));
  let bars='',texts='';
  minerals.forEach((m,i)=>{
    const bh=(m.percent/max)*(H-50);
    const x=pad+i*(bw+gap);
    const y=H-25-bh;
    bars+=`<rect x="${x}" y="${y}" width="${bw}" height="${bh}" rx="3" fill="${COLORS[i%COLORS.length]}" opacity="0.88"/>`;
    texts+=`<text x="${x+bw/2}" y="${H-12}" text-anchor="middle" font-size="9" fill="#4a2c0a">${m.name}</text>`;
    texts+=`<text x="${x+bw/2}" y="${y-4}" text-anchor="middle" font-size="9" fill="#555">${m.percent}%</text>`;
  });
  return `<svg viewBox="0 0 ${W} ${H}" width="100%" style="display:block">${bars}${texts}</svg>`;
}

// SVG 결합구조도
function svgBond(d: RockData) {
  const rockType = d.classification?.rock_type || '';
  const subType = d.classification?.sub_type || '';
  const texture = d.characteristics?.texture || '';
  const origin = d.characteristics?.origin || '';
  const minerals = d.minerals || [];

  const W=300, H=200, cx=W/2, cy=H/2;
  const COLORS=["#8B6914","#A0A0A0","#2D2D2D","#5C3A1E","#4A7C59","#C4A35A","#7B68EE"];

  const isI = rockType.includes('화성');
  const isM = rockType.includes('변성');
  const isS = rockType.includes('퇴적');

  // 입자 크기(Grain Size) 유추
  let grainSize = 'medium';
  let sizeLabel = '중립질';
  let coolingLabel = '';
  
  if (isI) {
    if (subType.includes('심성') || texture.includes('조립') || origin.includes('지하 깊은') || origin.includes('느리게') || d.name_ko.includes('화강암') || d.name_ko.includes('반려암') || d.name_ko.includes('섬록암')) {
      grainSize = 'coarse';
      sizeLabel = '조립질 (대형 결정)';
      coolingLabel = '냉각 속도: 매우 느림 (지하 깊은 지하심성)';
    } else {
      grainSize = 'fine';
      sizeLabel = '세립질/유리질 (미세 결정)';
      coolingLabel = '냉각 속도: 매우 빠름 (지표 급랭)';
    }
  } else if (isM) {
    if (texture.includes('조립') || subType.includes('편마암') || texture.includes('안구상') || d.name_ko.includes('편마암')) {
      grainSize = 'coarse';
      sizeLabel = '조립질 (고온 재결정화)';
      coolingLabel = '변성 환경: 광역 변성 (고온 고압)';
    } else {
      grainSize = 'fine';
      sizeLabel = '세립질 구조';
      coolingLabel = '변성 환경: 접촉 변성 또는 저온 고압';
    }
  } else if (isS) {
    if (subType.includes('역암') || texture.includes('자갈') || d.name_ko.includes('역암')) {
      grainSize = 'coarse';
      sizeLabel = '쇄설성 조립질 (자갈 크기)';
      coolingLabel = '퇴적 환경: 유속이 매우 빠른 환경';
    } else if (subType.includes('셰일') || subType.includes('이암') || texture.includes('진흙') || texture.includes('점토') || d.name_ko.includes('셰일') || d.name_ko.includes('이암')) {
      grainSize = 'fine';
      sizeLabel = '쇄설성 미립질 (진흙/점토)';
      coolingLabel = '퇴적 환경: 매우 잔잔한 물속 (하류/호수)';
    } else {
      grainSize = 'medium';
      sizeLabel = '쇄설성 중립질 (모래)';
      coolingLabel = '퇴적 환경: 완만한 흐름 (강가/연안)';
    }
  }

  // 입자 크기에 따른 반지름 가중치 및 스타일 설정
  let sizeScale = 1.0;
  let lineDash = '';
  let lineWidth = 1.5;
  if (grainSize === 'coarse') {
    sizeScale = 1.35;
    lineWidth = 2.5;
  } else if (grainSize === 'fine') {
    sizeScale = 0.65;
    lineWidth = 1.0;
    lineDash = '2 2';
  }

  const top = minerals.slice(0, 5);
  const nodes = top.map((m, i) => {
    const a = (2 * Math.PI * i) / top.length - Math.PI / 2;
    let rx = 68 * Math.cos(a);
    let ry = 68 * Math.sin(a);
    if (isM) {
      ry = ry * 0.5;
    }
    return { x: cx + rx, y: cy + ry, ...m };
  });

  let lines = '';
  if (isI) {
    nodes.forEach((_, i) => nodes.forEach((_, j) => {
      if (i < j) {
        lines += `<line x1="${nodes[i].x}" y1="${nodes[i].y}" x2="${nodes[j].x}" y2="${nodes[j].y}" stroke="#c4a06a" stroke-width="${lineWidth}" stroke-dasharray="${lineDash}" opacity="0.6"/>`;
      }
    }));
  } else if (isM) {
    nodes.forEach((_, i) => {
      if (i < nodes.length - 1) {
        lines += `<line x1="${nodes[i].x}" y1="${nodes[i].y}" x2="${nodes[i+1].x}" y2="${nodes[i+1].y}" stroke="#a08050" stroke-width="${lineWidth}" opacity="0.7"/>`;
      }
    });
    if (nodes.length > 2) {
      lines += `<line x1="${nodes[0].x}" y1="${nodes[0].y}" x2="${nodes[nodes.length-1].x}" y2="${nodes[nodes.length-1].y}" stroke="#a08050" stroke-width="${lineWidth}" opacity="0.7"/>`;
    }
    lines += `
      <path d="M ${cx},34 L ${cx},46 M ${cx},46 L ${cx-4},41 M ${cx},46 L ${cx+4},41" stroke="#c0392b" stroke-width="2" fill="none" opacity="0.75"/>
      <path d="M ${cx},166 L ${cx},154 M ${cx},154 L ${cx-4},159 M ${cx},154 L ${cx+4},159" stroke="#c0392b" stroke-width="2" fill="none" opacity="0.75"/>
      <text x="${cx + 8}" y="43" font-size="8.5" fill="#c0392b" font-weight="bold" opacity="0.85">압력</text>
    `;
  } else {
    nodes.forEach((_, i) => {
      if (i < nodes.length - 1) {
        lines += `<line x1="${nodes[i].x}" y1="${nodes[i].y}" x2="${nodes[i+1].x}" y2="${nodes[i+1].y}" stroke="#c4a06a" stroke-width="${lineWidth}" stroke-dasharray="3 3" opacity="0.6"/>`;
      }
    });
  }

  let circles = '';
  nodes.forEach((n, i) => {
    const baseR = Math.max(10, Math.min(20, (n.percent || 10) / 3 + 10));
    const r = baseR * sizeScale;
    
    if (isM) {
      const rx = r * 1.35;
      const ry = r * 0.7;
      circles += `
        <ellipse cx="${n.x}" cy="${n.y}" rx="${rx}" ry="${ry}" fill="${COLORS[i%COLORS.length]}" opacity="0.85"/>
        <text x="${n.x}" y="${n.y-ry-4}" text-anchor="middle" font-size="9.5" fill="#4a2c0a" font-weight="700">${n.name}</text>
        <text x="${n.x}" y="${n.y+3}" text-anchor="middle" font-size="8.5" fill="#fff" font-weight="700">${n.percent}%</text>
      `;
    } else {
      circles += `
        <circle cx="${n.x}" cy="${n.y}" r="${r}" fill="${COLORS[i%COLORS.length]}" opacity="0.85"/>
        <text x="${n.x}" y="${n.y-r-3}" text-anchor="middle" font-size="9.5" fill="#4a2c0a" font-weight="700">${n.name}</text>
        <text x="${n.x}" y="${n.y+4}" text-anchor="middle" font-size="8.5" fill="#fff" font-weight="700">${n.percent}%</text>
      `;
    }
  });

  const label = isI 
    ? `화성암 구조 (${sizeLabel})` 
    : isM 
      ? `변성암 구조 (엽리 및 ${sizeLabel})` 
      : `퇴적암 구조 (${sizeLabel})`;

  return `<svg viewBox="0 0 ${W} ${H}" width="100%" style="display:block;background:#fdf8f0;border-radius:10px">
    <text x="${cx}" y="16" text-anchor="middle" font-size="11" fill="#4a2c0a" font-weight="700">${label}</text>
    ${coolingLabel ? `<text x="${cx}" y="28" text-anchor="middle" font-size="9" fill="#8a6a3a" font-weight="600">${coolingLabel}</text>` : ''}
    ${lines}
    <circle cx="${cx}" cy="${cy}" r="22" fill="#8B6914" opacity="0.12"/>
    <circle cx="${cx}" cy="${cy}" r="14" fill="#8B6914" opacity="0.25"/>
    ${circles}
    <text x="${cx}" y="${H-6}" text-anchor="middle" font-size="8.5" fill="#b8944a">● 원 크기 = 광물 비율 및 입자 크기  |  선 = 결합 관계 및 지질 작용</text>
  </svg>`;
}

function card(title: string, html: string) {
  return `<div class="card"><div class="card-title">${title}</div>${html}</div>`;
}

function showResult(d: RockData) {
  const inputView = document.getElementById('inputView');
  if (inputView) inputView.classList.add('hidden');
  const prev = document.getElementById('uploadPreview') as HTMLImageElement;
  const thumbHtml = (prev && !prev.classList.contains('hidden')) ? `<img src="${prev.src}" class="thumb"/>` : '';

  let html = `<div class="result-hdr">
    <div style="font-size:13px;opacity:.8;margin-bottom:4px">식별된 암석</div>
    <div class="rname">${d.name_ko||''}</div>
    <div class="ename">${d.name_en||''}</div>
    ${thumbHtml}
  </div>`;

  if(d.description) html+=card('📝 설명',`<p style="font-size:13px;color:#444;line-height:1.7">${d.description}</p>`);

  if(d.location_compare) {
    const regionalTags = (d.location_compare.regional_rocks || []).map(r => `<span class="dist-tag">${r}</span>`).join('');
    const matchPercent = d.location_compare.match_percent || 0;
    const matchLevel = d.location_compare.match_level || '알 수 없음';
    
    const locationCardHtml = `
      <div style="font-size: 13px; color: #444; line-height: 1.6;">
        <div style="margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
          <span style="font-size: 18px;">📍</span>
          <strong>분석 지역:</strong> <span>${d.location_compare.region_name || '알 수 없음'}</span>
        </div>
        <div style="margin-bottom: 12px;">
          <strong>주변 주요 암석:</strong>
          <div class="dist-wrap" style="margin-top: 6px;">${regionalTags || '<span style="color:#999;font-size:12px;">정보 없음</span>'}</div>
        </div>
        <div style="margin-bottom: 12px;">
          <div class="gauge-label">
            <span>지역 일치도 및 발견 가능성</span>
            <span style="color:#8B6914;">${matchPercent}% (${matchLevel})</span>
          </div>
          <div class="gauge-container">
            <div class="gauge-bar" style="width: ${matchPercent}%"></div>
          </div>
        </div>
        ${d.location_compare.geology_summary ? `
        <div style="background: #fdf8f0; border: 1px solid #ede0c8; border-radius: 8px; padding: 10px; margin-bottom: 10px;">
          <strong style="color: #6b4c1e; font-size: 12.5px; display: block; margin-bottom: 4px;">지질학적 특징</strong>
          <p style="font-size: 12.5px; color: #555;">${d.location_compare.geology_summary}</p>
        </div>` : ''}
        ${d.location_compare.comparison_desc ? `
        <div style="background: #f5ead6; border: 1px solid #ede0c8; border-radius: 8px; padding: 10px;">
          <strong style="color: #6b4c1e; font-size: 12.5px; display: block; margin-bottom: 4px;">분석 암석 비교</strong>
          <p style="font-size: 12.5px; color: #555;">${d.location_compare.comparison_desc}</p>
        </div>` : ''}
      </div>
    `;
    html += card('📍 위치 기반 지질 비교', locationCardHtml);
  }

  if(d.minerals) html+=card('🔬 조암광물 비율', svgPie(d.minerals)+svgBar(d.minerals));

  if(d.chemistry){
    const rows=d.chemistry.map(c=>`<div class="chem-item"><span class="chem-k">${c.component}</span><span class="chem-v">${c.percent}</span></div>`).join('');
    html+=card('🧪 주요 화학 성분',`<div class="chem-grid">${rows}</div>`);
  }

  if(d.minerals) html+=card('🔗 결합구조도', svgBond(d)+`<p style="font-size:11px;color:#8a6a3a;margin-top:8px;text-align:center">주요 조암광물 간의 결합 관계 및 비율 시각화</p>`);

  if(d.characteristics){
    const charItems = [
      { key: '색상', val: d.characteristics.color, icon: '🎨' },
      { key: '경도 (모스)', val: d.characteristics.hardness, icon: '🔨' },
      { key: '조직', val: d.characteristics.texture, icon: '🔍' },
      { key: '광택', val: d.characteristics.luster, icon: '✨' },
      { key: '생성 환경', val: d.characteristics.origin, icon: '⛰️' }
    ].filter(item => item.val);

    const cardsHtml = charItems.map(item => `
      <div style="background: #fdfaf5; border: 1.5px solid #ede0c8; border-radius: 10px; padding: 12px; display: flex; align-items: flex-start; gap: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
        <div style="font-size: 20px; line-height: 1; margin-top: 1px;">${item.icon}</div>
        <div>
          <div style="font-size: 11px; font-weight: 700; color: #8a6a3a; margin-bottom: 2px;">${item.key}</div>
          <div style="font-size: 13px; font-weight: 600; color: #333; line-height: 1.3;">${item.val}</div>
        </div>
      </div>
    `).join('');

    html += card('⚙️ 암석 특성', `<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">${cardsHtml}</div>`);
  }

  if(d.classification){
    const classItems = [
      { key: '암석 종류', val: d.classification.rock_type, icon: '🗂️' },
      { key: '세부 분류', val: d.classification.sub_type, icon: '📐' },
      { key: '용도별 분류', val: d.classification.use, icon: '🛠️' }
    ].filter(item => item.val);

    const cardsHtml = classItems.map(item => `
      <div style="background: #fcfbf7; border: 1px solid #e2d8c5; border-radius: 8px; padding: 10px; display: flex; align-items: center; gap: 10px;">
        <span style="font-size: 16px;">${item.icon}</span>
        <span style="font-size: 12.5px; font-weight: 700; color: #6b4c1e; width: 80px; flex-shrink: 0;">${item.key}</span>
        <span style="font-size: 12.5px; font-weight: 600; color: #444;">${item.val}</span>
      </div>
    `).join('');

    html += card('🗂️ 분류', `<div style="display: flex; flex-direction: column; gap: 6px;">${cardsHtml}</div>`);
  }

  if(d.distribution?.length){
    const tags=d.distribution.map(t=>`<span class="dist-tag"><span style="margin-right:3px;">📍</span>${t}</span>`).join('');
    html+=card('🗺️ 주요 분포지',`<div class="dist-wrap">${tags}</div>`);
  }

  html+=`<button class="btn btn-reset" onclick="resetApp()">🔄 새 암석 탐구하기</button>`;

  const rv=document.getElementById('resultView');
  if (rv) {
    rv.innerHTML=html; rv.classList.remove('hidden');
  }
}

function resetApp() {
  imgB64=null;
  userLocation=null;
  const gpsBtn = document.getElementById('gpsBtn');
  if(gpsBtn) {
    gpsBtn.textContent = '📍 현재 위치 가져오기';
    (gpsBtn as HTMLButtonElement).disabled = false;
  }
  const gpsStatus = document.getElementById('gpsStatus');
  if(gpsStatus) {
    gpsStatus.innerHTML = '';
    gpsStatus.classList.add('hidden');
  }
  const rockInputEl = document.getElementById('rockInput') as HTMLInputElement;
  if (rockInputEl) rockInputEl.value = '';
  const uploadPreview = document.getElementById('uploadPreview');
  if (uploadPreview) {
    uploadPreview.classList.add('hidden');
    (uploadPreview as HTMLImageElement).src = '';
  }
  const uploadPlaceholder = document.getElementById('uploadPlaceholder');
  if (uploadPlaceholder) uploadPlaceholder.classList.remove('hidden');
  const fileInputEl = document.getElementById('fileInput') as HTMLInputElement;
  if (fileInputEl) fileInputEl.value = '';
  hideErr();
  const resultView = document.getElementById('resultView');
  if (resultView) resultView.classList.add('hidden');
  const inputView = document.getElementById('inputView');
  if (inputView) inputView.classList.remove('hidden');
  window.scrollTo(0,0);
}

// 글로벌 API 바인딩
(window as any).getGPSLocation = getGPSLocation;
(window as any).saveKey = saveKey;
(window as any).analyze = analyze;
(window as any).resetApp = resetApp;
(window as any).toggleHistoryList = toggleHistoryList;
(window as any).toggleOfflineDict = toggleOfflineDict;
(window as any).loadHistoryItem = loadHistoryItem;
(window as any).loadDictItem = loadDictItem;
(window as any).setZoom = setZoom;
(window as any).startCam = startCam;
(window as any).stopCam = stopCam;
(window as any).capture = capture;
