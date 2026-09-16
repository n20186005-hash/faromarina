// Weather advice engine for Faro Marina.
// Pure, framework-agnostic logic + a trilingual dictionary, intended to run
// both on the server (for SSR fallback) and in the browser (client-side fetch).
//
// Data source: Open-Meteo (forecast + marine) — free, no API key, CORS-enabled.
// The engine turns normalized weather into *actionable* advice grouped into
// three tourist-facing tabs (outfit / activities / items) plus a red risk block.

export type Lang = 'pt' | 'en' | 'zh';

export type WeatherCategory =
  | 'clear'
  | 'cloudy'
  | 'fog'
  | 'lightRain'
  | 'rain'
  | 'heavyRain'
  | 'thunder'
  | 'snow';

export interface TodayWeather {
  tempCurrent?: number;
  tempMax: number;
  tempMin: number;
  precipProb: number; // 0-100, today's max
  category: WeatherCategory;
  isDay: boolean;
  windKmh: number; // today's max
  windBeaufort: number;
  uvMax: number;
  humidity?: number;
  waveHeight?: number; // metres (marine)
  seaTemp?: number; // °C (marine)
}

export interface Advice {
  risk: string[];
  outfit: string[];
  activities: string[];
  items: string[];
  alert: boolean;
}

export interface TideEvent {
  hour: string; // local "HH:MM"
  date: string; // local "YYYY-MM-DD"
  day: 'today' | 'tomorrow' | 'later';
  height: number; // metres, above mean sea level
  type: 'high' | 'low';
}

// ---------------------------------------------------------------------------
// WMO weather code → category
// ---------------------------------------------------------------------------
export function categoryFromCode(code: number): WeatherCategory {
  if (code === 0) return 'clear';
  if (code === 1) return 'clear';
  if (code === 2 || code === 3) return 'cloudy';
  if (code === 45 || code === 48) return 'fog';
  if (code >= 51 && code <= 57) return 'lightRain';
  if (code === 61 || code === 80 || code === 81 || code === 66 || code === 67) return 'rain';
  if (code === 63 || code === 65 || code === 82) return 'heavyRain';
  if (code >= 71 && code <= 77) return 'snow';
  if (code === 85 || code === 86) return 'snow';
  if (code >= 95) return 'thunder';
  return 'cloudy';
}

// ---------------------------------------------------------------------------
// Wind speed (km/h) → Beaufort scale
// ---------------------------------------------------------------------------
export function beaufortFromKmh(kmh: number): number {
  if (kmh < 1) return 0;
  if (kmh < 6) return 1;
  if (kmh < 12) return 2;
  if (kmh < 20) return 3;
  if (kmh < 29) return 4;
  if (kmh < 39) return 5;
  if (kmh < 50) return 6;
  if (kmh < 62) return 7;
  if (kmh < 75) return 8;
  if (kmh < 89) return 9;
  if (kmh < 103) return 10;
  if (kmh < 118) return 11;
  return 12;
}

// ---------------------------------------------------------------------------
// Trilingual dictionary
// ---------------------------------------------------------------------------
type Dict = Record<string, string>;

const UI: Record<Lang, Dict> = {
  zh: {
    title: '实时天气与 7 日预报',
    subtitle: '基于实时数据，直接告诉你今天该怎么穿、怎么玩、带什么',
    loading: '正在获取天气数据…',
    error: '天气数据暂时无法加载，请稍后重试。',
    current: '当前',
    forecast: '7 日预报',
    tabOutfit: '出行穿搭',
    tabActivity: '游玩安排',
    tabItems: '随身物品',
    riskTitle: '风险提醒',
    noAlert: '当前无气象预警',
    noAlertSub: '天气条件正常，按个人体感安排即可',
    precip: '降水概率',
    wind: '风力',
    uv: '紫外线',
    humidity: '湿度',
    wave: '浪高',
    seaTemp: '海水温度',
    feels: '体感',
    retry: '重试',
    tideTitle: '潮汐',
    tideHigh: '高潮',
    tideLow: '低潮',
    tideTomorrow: '明日',
    tideLowTip: '低潮前后滩涂露出，适合赶海、海边徒步与观鸟',
    tideHighTip: '高潮前后水位较高，适合下海戏水、乘船出海',
  },
  en: {
    title: 'Live Weather & 7-Day Forecast',
    subtitle: 'Real-time data that tells you what to wear, do and pack today',
    loading: 'Loading weather data…',
    error: 'Weather data could not be loaded right now. Please try again.',
    current: 'Now',
    forecast: '7-Day Forecast',
    tabOutfit: 'What to Wear',
    tabActivity: 'Things to Do',
    tabItems: 'What to Bring',
    riskTitle: 'Safety Alert',
    noAlert: 'No weather alerts',
    noAlertSub: 'Conditions are normal — plan as you like',
    precip: 'Rain chance',
    wind: 'Wind',
    uv: 'UV',
    humidity: 'Humidity',
    wave: 'Waves',
    seaTemp: 'Sea temp',
    feels: 'Feels like',
    retry: 'Retry',
    tideTitle: 'Tides',
    tideHigh: 'High',
    tideLow: 'Low',
    tideTomorrow: 'Tomorrow',
    tideLowTip: 'Around low tide the flats are exposed — great for beachcombing, shore walks and birdwatching',
    tideHighTip: 'Around high tide the water is deeper — great for swimming and boat trips',
  },
  pt: {
    title: 'Tempo ao Vivo e Previsão de 7 Dias',
    subtitle: 'Dados em tempo real que dizem o que vestir, fazer e levar hoje',
    loading: 'A carregar dados do tempo…',
    error: 'Não foi possível carregar o tempo agora. Tente novamente.',
    current: 'Agora',
    forecast: 'Previsão de 7 Dias',
    tabOutfit: 'O que Vestir',
    tabActivity: 'O que Fazer',
    tabItems: 'O que Levar',
    riskTitle: 'Aviso de Segurança',
    noAlert: 'Sem alertas meteorológicos',
    noAlertSub: 'Condições normais — planeie como preferir',
    precip: 'Prob. chuva',
    wind: 'Vento',
    uv: 'UV',
    humidity: 'Humidade',
    wave: 'Ondas',
    seaTemp: 'Temp. mar',
    feels: 'Sensação',
    retry: 'Repetir',
    tideTitle: 'Marés',
    tideHigh: 'Maré alta',
    tideLow: 'Maré baixa',
    tideTomorrow: 'Amanhã',
    tideLowTip: 'Perto da baixa-mar os areais ficam expostos — ideal para recolher conchas, caminhar na praia e observar aves',
    tideHighTip: 'Perto da preia-mar a água está mais alta — ideal para nadar e passeios de barco',
  },
};

const WMO: Record<Lang, Record<WeatherCategory, { label: string; emoji: string }>> = {
  zh: {
    clear: { label: '晴', emoji: '☀️' },
    cloudy: { label: '多云', emoji: '⛅' },
    fog: { label: '雾', emoji: '🌫️' },
    lightRain: { label: '小雨', emoji: '🌦️' },
    rain: { label: '中雨', emoji: '🌧️' },
    heavyRain: { label: '大雨', emoji: '⛈️' },
    thunder: { label: '雷雨', emoji: '⛈️' },
    snow: { label: '雪', emoji: '❄️' },
  },
  en: {
    clear: { label: 'Clear', emoji: '☀️' },
    cloudy: { label: 'Cloudy', emoji: '⛅' },
    fog: { label: 'Fog', emoji: '🌫️' },
    lightRain: { label: 'Light rain', emoji: '🌦️' },
    rain: { label: 'Rain', emoji: '🌧️' },
    heavyRain: { label: 'Heavy rain', emoji: '⛈️' },
    thunder: { label: 'Thunderstorm', emoji: '⛈️' },
    snow: { label: 'Snow', emoji: '❄️' },
  },
  pt: {
    clear: { label: 'Céu limpo', emoji: '☀️' },
    cloudy: { label: 'Nublado', emoji: '⛅' },
    fog: { label: 'Neblina', emoji: '🌫️' },
    lightRain: { label: 'Chuva fraca', emoji: '🌦️' },
    rain: { label: 'Chuva', emoji: '🌧️' },
    heavyRain: { label: 'Chuva forte', emoji: '⛈️' },
    thunder: { label: 'Trovoada', emoji: '⛈️' },
    snow: { label: 'Neve', emoji: '❄️' },
  },
};

const WIND: Record<Lang, string[]> = {
  // index by beaufort 0..12 (groups handled by helper)
  zh: ['无风', '微风', '轻风', '微风', '和风', '清风', '强风', '疾风', '大风', '烈风', '狂风', '暴风', '飓风'],
  en: ['Calm', 'Calm', 'Light air', 'Light breeze', 'Moderate breeze', 'Fresh breeze', 'Strong breeze', 'Near gale', 'Gale', 'Strong gale', 'Storm', 'Violent storm', 'Hurricane'],
  pt: ['Calmo', 'Calmo', 'Vento fraco', 'Brisa ligeira', 'Brisa moderada', 'Brisa fresca', 'Brisa forte', 'Vento forte', 'Temporal', 'Temporal forte', 'Tempestade', 'Tempestade violenta', 'Furacão'],
};

const UV: Record<Lang, string[]> = {
  // index by level 0..4
  zh: ['弱', '弱', '中等', '强', '极强'],
  en: ['Low', 'Low', 'Moderate', 'High', 'Extreme'],
  pt: ['Baixo', 'Baixo', 'Moderado', 'Alto', 'Extremo'],
};

const RULES: Record<Lang, Dict> = {
  zh: {
    riskHeavyRain: '降雨较强，避开山谷、低洼地带；游船、缆车可能停运',
    riskThunder: '谨防雷电，不要登山、海边戏水、树下避雨；水上项目大概率关闭',
    riskWindStrong: '大风天气，远离广告牌、海边礁石；户外海上项目大概率关闭',
    riskFog: '能见度差，轮渡、航班容易延误；不适合观景看海看山',
    riskBigWaves: '浪高较大，海边戏水需谨慎，儿童与老人远离礁石',

    actIndoorRain: '大概率会下雨，优先选择室内场馆；户外爬山、海边游玩建议延后',
    actLightRain: '有小雨，路面湿滑，露天项目体验较差',
    actAvoidOutdoorRain: '不建议长时间户外游玩，游船可能受天气影响',
    actAvoidOutdoorHeavyRain: '不建议户外游玩，游船、缆车可能停运',
    actWaterClosedThunder: '水上项目大概率关闭，请勿下海戏水',
    actAvoidNoonHeat: '气温较高，尽量避开正午外出，缩短户外游玩时间',
    actBoatMayStopWind: '风力偏大，海边游船、部分露天游乐项目可能停航停运',
    actClearOutdoor: '天气晴好，适合户外游览，看日出日落风景',
    actCloudyPhoto: '光线柔和，很适合拍照；无暴晒，适合长时间户外逛游',
    actFogNoView: '能见度低，不适合观景看海看山',
    actBeachGood: '海况平稳、天气舒适，适合海边散步、赶海与下海戏水',
    actBeachAvoidWaves: '浪高偏大，下海戏水需谨慎，留意安全警示',
    actBeachSwimWarm: '海水温暖，适合下海游泳、戏水，注意防晒',
    actBeachSwimCool: '海水偏凉，下海注意保暖，儿童与体弱者请谨慎',
    actBeachSwimCold: '海水较冷，不宜长时间下水，岸边观景更舒适',

    outLightBreathable: '建议穿轻薄透气衣物，注意防暑',
    outNonSlip: '穿防滑鞋，路面湿滑',
    outWindHat: '帽子容易被吹落，不建议穿宽松长裙',
    outTempDiffCoat: '昼夜温差大，建议备一件外套，方便增减衣物',
    outColdCoat: '气温偏低，注意保暖，建议厚外套',
    outSunnyLight: '天气晴好，适合轻装出行',

    itemUmbrellaProb: '雨伞 / 雨衣',
    itemFoldUmbrella: '折叠伞',
    itemRaincoat: '雨衣（风大，不建议长柄伞）',
    itemHeatProtect: '防晒、充足饮用水、防暑用品',
    itemSunUV: '防晒霜、墨镜、遮阳帽',
    itemColdGear: '厚外套、围巾',
    itemMask: '口罩',
    itemSunnyProtect: '记得防晒',
  },
  en: {
    riskHeavyRain: 'Heavy rain — avoid valleys and low-lying areas; boat trips and cable cars may be suspended',
    riskThunder: 'Lightning risk — do not climb mountains, swim near the shore, or shelter under trees; water activities are likely closed',
    riskWindStrong: 'Strong wind — stay away from billboards and coastal rocks; offshore activities are likely closed',
    riskFog: 'Poor visibility — ferries and flights may be delayed; not a good day for sea or mountain views',
    riskBigWaves: 'High waves — be careful near the water; keep children and the elderly away from rocks',

    actIndoorRain: 'Likely to rain — prefer indoor venues; postpone mountain hikes and seaside plans',
    actLightRain: 'Light rain — surfaces are slippery and open-air activities are less enjoyable',
    actAvoidOutdoorRain: 'Avoid long outdoor activities; boat trips may be affected by the weather',
    actAvoidOutdoorHeavyRain: 'Avoid outdoor activities; boat trips and cable cars may be suspended',
    actWaterClosedThunder: 'Water activities are likely closed — do not enter the sea',
    actAvoidNoonHeat: 'High temperatures — avoid going out at noon and keep outdoor time short',
    actBoatMayStopWind: 'Breezy — seaside boat trips and some open-air rides may be suspended',
    actClearOutdoor: 'Clear skies — great for outdoor sightseeing and sunrise/sunset views',
    actCloudyPhoto: 'Soft light — great for photos and long outdoor strolls without harsh sun',
    actFogNoView: 'Low visibility — not a good day for sea or mountain views',
    actBeachGood: 'Calm seas and pleasant weather — good for a seaside walk, beachcombing and a swim',
    actBeachAvoidWaves: 'Choppy seas — be cautious if entering the water and watch for safety flags',
    actBeachSwimWarm: 'The sea is warm — good for swimming and a dip; mind the sun',
    actBeachSwimCool: 'The sea is cool — take care if you swim; caution for children and the less resilient',
    actBeachSwimCold: 'The sea is cold — avoid long swims; enjoy the view from shore',

    outLightBreathable: 'Wear light, breathable clothing and guard against heat',
    outNonSlip: 'Wear non-slip shoes — surfaces are slippery',
    outWindHat: 'Hats blow away easily — avoid loose long dresses',
    outTempDiffCoat: 'Big day–night temperature swing — bring a light jacket you can add or remove',
    outColdCoat: 'It is cold — keep warm with a thick coat',
    outSunnyLight: 'Clear weather — light clothing is fine',

    itemUmbrellaProb: 'Umbrella / raincoat',
    itemFoldUmbrella: 'Foldable umbrella',
    itemRaincoat: 'Raincoat (windy — avoid long umbrellas)',
    itemHeatProtect: 'Sun protection, plenty of water, heat-relief items',
    itemSunUV: 'Sunscreen, sunglasses, sun hat',
    itemColdGear: 'Thick coat, scarf',
    itemMask: 'Face mask',
    itemSunnyProtect: "Don't forget sun protection",
  },
  pt: {
    riskHeavyRain: 'Chuva forte — evite vales e zonas baixas; passeios de barco e teleféricos podem estar suspensos',
    riskThunder: 'Risco de trovoada — não suba à serra, não se banhe perto da costa nem se abrigue sob árvores; atividades aquáticas provavelmente encerradas',
    riskWindStrong: 'Vento forte — afaste-se de placards e rochas costeiras; atividades marítimas provavelmente encerradas',
    riskFog: 'Visibilidade reduzida — barcos e voos podem atrasar; não é bom dia para vistas de mar ou serra',
    riskBigWaves: 'Ondas altas — tenha cuidado perto da água; mantenha crianças e idosos longe das rochas',

    actIndoorRain: 'Provável chuva — prefira espaços cobertos; adie caminhadas na serra e planos à beira-mar',
    actLightRain: 'Chuva fraca — o piso fica escorregadio e atividades ao ar livre são menos agradáveis',
    actAvoidOutdoorRain: 'Evite atividades prolongadas ao ar livre; passeios de barco podem ser afetados',
    actAvoidOutdoorHeavyRain: 'Evite atividades ao ar livre; passeios de barco e teleféricos podem estar suspensos',
    actWaterClosedThunder: 'Atividades aquáticas provavelmente encerradas — não entre no mar',
    actAvoidNoonHeat: 'Temperaturas elevadas — evite sair ao meio-dia e encurte o tempo ao ar livre',
    actBoatMayStopWind: 'Vento moderado — passeios de barco e alguns brinquedos ao ar livre podem parar',
    actClearOutdoor: 'Céu limpo — ideal para passeios ao ar livre e vistas de nascer/pôr do sol',
    actCloudyPhoto: 'Luz suave — ótimo para fotos e longos passeios sem sol forte',
    actFogNoView: 'Visibilidade baixa — não é bom dia para vistas de mar ou serra',
    actBeachGood: 'Mar calmo e tempo agradável — bom para caminhar na praia, recolher conchas e nadar',
    actBeachAvoidWaves: 'Mar agitado — tenha cuidado se entrar na água e observe os avisos de segurança',
    actBeachSwimWarm: 'O mar está quente — bom para nadar e mergulhar; cuide do sol',
    actBeachSwimCool: 'O mar está fresco — tenha cuidado ao nadar; cautela com crianças e pessoas sensíveis',
    actBeachSwimCold: 'O mar está frio — evite banhos prolongados; aprecie a vista da margem',

    outLightBreathable: 'Use roupa leve e arejada e proteja-se do calor',
    outNonSlip: 'Use calçado antiderrapante — o piso está escorregadio',
    outWindHat: 'Chapéus voam com o vento — evite vestidos largos e compridos',
    outTempDiffCoat: 'Grande amplitude térmica — leve um casaco leve para vestir ou tirar',
    outColdCoat: 'Frio — mantenha-se aquecido com um casaco grosso',
    outSunnyLight: 'Céu limpo — roupa leve é suficiente',

    itemUmbrellaProb: 'Guarda-chuva / capa de chuva',
    itemFoldUmbrella: 'Guarda-chuva compacto',
    itemRaincoat: 'Capa de chuva (vento — evite guarda-chuvas compridos)',
    itemHeatProtect: 'Proteção solar, água abundante, itens anti-calor',
    itemSunUV: 'Protetor solar, óculos de sol, chapéu',
    itemColdGear: 'Casaco grosso, cachecol',
    itemMask: 'Máscara',
    itemSunnyProtect: 'Não se esqueça da proteção solar',
  },
};

export function ui(lang: Lang): Dict {
  return UI[lang] ?? UI.en;
}
export function ruleText(lang: Lang, id: string): string {
  return (RULES[lang] ?? RULES.en)[id] ?? '';
}
export function wmoInfo(lang: Lang, cat: WeatherCategory) {
  return (WMO[lang] ?? WMO.en)[cat];
}
export function windName(lang: Lang, beaufort: number): string {
  const arr = WIND[lang] ?? WIND.en;
  const i = Math.max(0, Math.min(12, beaufort));
  return arr[i];
}
export function uvLevel(lang: Lang, uv: number): string {
  const arr = UV[lang] ?? UV.en;
  let i = 0;
  if (uv < 3) i = uv < 1 ? 0 : 1;
  else if (uv <= 5) i = 2;
  else if (uv <= 7) i = 3;
  else i = 4;
  return arr[i];
}

// ---------------------------------------------------------------------------
// Tides — derived from Open-Meteo Marine `sea_level_height_msl` (embeds the
// ocean-tide signal). We smooth the hourly series, find alternating high/low
// extrema, and keep only real swings (amplitude >= 0.3 m) to drop model noise.
// Times are returned as the location's local wall-clock (the API already
// reports local time with timezone=auto).
// ---------------------------------------------------------------------------
function fmtLocal(ms: number): string {
  const d = new Date(ms);
  const p = (x: number) => String(x).padStart(2, '0');
  return `${d.getUTCFullYear()}-${p(d.getUTCMonth() + 1)}-${p(d.getUTCDate())}T${p(d.getUTCHours())}:${p(d.getUTCMinutes())}`;
}

export function extractTides(times: string[], values: any[], offsetSec: number): TideEvent[] {
  const n = Math.min(times.length, values.length);
  if (n < 5) return [];
  const vals: number[] = values.map((x) => (typeof x === 'number' && !isNaN(x) ? x : NaN));

  const sm: number[] = new Array(n);
  for (let i = 0; i < n; i++) {
    let s = 0, c = 0;
    for (let j = i - 1; j <= i + 1; j++) {
      if (j >= 0 && j < n && !isNaN(vals[j])) { s += vals[j]; c++; }
    }
    sm[i] = c ? s / c : NaN;
  }

  const ext: { i: number; type: 'high' | 'low' }[] = [];
  for (let i = 1; i < n - 1; i++) {
    if (isNaN(sm[i]) || isNaN(sm[i - 1]) || isNaN(sm[i + 1])) continue;
    if (sm[i] > sm[i - 1] && sm[i] >= sm[i + 1]) ext.push({ i, type: 'high' });
    else if (sm[i] < sm[i - 1] && sm[i] <= sm[i + 1]) ext.push({ i, type: 'low' });
  }

  const kept: { i: number; type: 'high' | 'low'; v: number }[] = [];
  let last: { i: number; type: 'high' | 'low'; v: number } | null = null;
  for (const e of ext) {
    const v = vals[e.i];
    if (isNaN(v)) continue;
    if (!last) { last = { ...e, v }; kept.push({ ...e, v }); continue; }
    if (Math.abs(v - last.v) >= 0.3) { kept.push({ ...e, v }); last = { ...e, v }; }
  }

  const nowMs = Date.now() + offsetSec * 1000;
  const fromStr = fmtLocal(nowMs - 2 * 3600 * 1000);
  const toStr = fmtLocal(nowMs + 30 * 3600 * 1000);
  const todayStr = fmtLocal(nowMs).slice(0, 10);
  const tomorrowStr = fmtLocal(nowMs + 24 * 3600 * 1000).slice(0, 10);

  const out: TideEvent[] = [];
  for (const e of kept) {
    const ts = times[e.i]; // "YYYY-MM-DDTHH:MM"
    if (ts < fromStr || ts > toStr) continue;
    const day = ts.slice(0, 10) === todayStr ? 'today' : ts.slice(0, 10) === tomorrowStr ? 'tomorrow' : 'later';
    out.push({ date: ts.slice(0, 10), hour: ts.slice(11, 16), day, height: Math.round(e.v * 100) / 100, type: e.type });
  }
  out.sort((a, b) => (a.date + a.hour).localeCompare(b.date + b.hour));
  return out.slice(0, 4);
}

// ---------------------------------------------------------------------------
// "Current conditions" one-liner, e.g. "晴 24–33℃ · 紫外线强 · 微风"
// ---------------------------------------------------------------------------
export function formatCurrent(w: TodayWeather, lang: Lang): string {
  const u = ui(lang);
  const info = wmoInfo(lang, w.category);
  const range = `${Math.round(w.tempMin)}–${Math.round(w.tempMax)}℃`;
  const uv = `${u.uv} ${uvLevel(lang, w.uvMax)}`;
  const wind = `${u.wind} ${windName(lang, w.windBeaufort)}`;
  return `${info.emoji} ${info.label} ${range} · ${uv} · ${wind}`;
}

// ---------------------------------------------------------------------------
// Advice engine
// ---------------------------------------------------------------------------
export function getAdvice(w: TodayWeather): Advice {
  const risk: string[] = [];
  const outfit: string[] = [];
  const activities: string[] = [];
  const items: string[] = [];

  const tempDiff = w.tempMax - w.tempMin;

  // ---- RISK (red, top priority) ----
  if (w.category === 'heavyRain') risk.push('riskHeavyRain');
  if (w.category === 'thunder') risk.push('riskThunder');
  if (w.windBeaufort >= 7) risk.push('riskWindStrong');
  if (w.category === 'fog') risk.push('riskFog');
  if (typeof w.waveHeight === 'number' && w.waveHeight >= 1.5 && w.windBeaufort >= 5) {
    risk.push('riskBigWaves');
  }
  const severe = risk.length > 0;

  // ---- PRECIPITATION ----
  if (w.precipProb >= 60 && w.category !== 'thunder' && w.category !== 'heavyRain' && w.category !== 'rain') {
    activities.push('actIndoorRain');
    items.push('itemUmbrellaProb');
  }
  if (w.category === 'lightRain') {
    outfit.push('outNonSlip');
    activities.push('actLightRain');
    items.push('itemFoldUmbrella');
  }
  if (w.category === 'rain') {
    activities.push('actAvoidOutdoorRain');
    items.push('itemRaincoat');
  }
  if (w.category === 'heavyRain') {
    activities.push('actAvoidOutdoorHeavyRain');
    items.push('itemRaincoat');
  }
  if (w.category === 'thunder') {
    activities.push('actWaterClosedThunder');
  }

  // ---- HEAT / UV ----
  if (w.tempMax >= 32) {
    outfit.push('outLightBreathable');
    activities.push('actAvoidNoonHeat');
    items.push('itemHeatProtect');
  }
  if (w.uvMax >= 5) {
    items.push('itemSunUV');
  }

  // ---- COLD ----
  if (tempDiff > 8) outfit.push('outTempDiffCoat');
  if (w.tempMax <= 10) {
    outfit.push('outColdCoat');
    items.push('itemColdGear');
  }

  // ---- WIND ----
  if (w.windBeaufort >= 5 && w.windBeaufort < 7) {
    outfit.push('outWindHat');
    activities.push('actBoatMayStopWind');
  }

  // ---- CLEAR / CLOUDY ----
  if (w.category === 'clear' && w.isDay) {
    activities.push('actClearOutdoor');
    outfit.push('outSunnyLight');
    items.push('itemSunnyProtect');
  }
  if (w.category === 'cloudy') {
    activities.push('actCloudyPhoto');
  }
  if (w.category === 'fog') {
    activities.push('actFogNoView');
    items.push('itemMask');
  }

  // ---- BEACH / MARINA scenario (seaside-specific) ----
  // Only surface relaxed beach tips when conditions are not already severe.
  if (!severe) {
    const calmSea = w.windBeaufort <= 4 && (w.category === 'clear' || w.category === 'cloudy');
    if (calmSea && w.tempMax >= 15) activities.push('actBeachGood');
    if (typeof w.seaTemp === 'number') {
      if (w.seaTemp >= 20) activities.push('actBeachSwimWarm');
      else if (w.seaTemp >= 16) activities.push('actBeachSwimCool');
      else activities.push('actBeachSwimCold');
    }
  }
  if (typeof w.waveHeight === 'number' && w.waveHeight >= 1.2) {
    activities.push('actBeachAvoidWaves');
  }

  const uniq = (a: string[]) => Array.from(new Set(a));
  return {
    risk: uniq(risk),
    outfit: uniq(outfit),
    activities: uniq(activities),
    items: uniq(items),
    alert: risk.length > 0,
  };
}

// ---------------------------------------------------------------------------
// Server + client data fetching (works in Node/Astro at build time and in the
// browser). Returns normalized data, or null on any failure so callers can
// gracefully fall back to a client-side refresh.
// ---------------------------------------------------------------------------
export interface WeatherData {
  today: TodayWeather;
  daily: any;
  tides: TideEvent[];
}

export async function fetchWeather(lat: number, lng: number, timeoutMs = 4500): Promise<WeatherData | null> {
  const F =
    'https://api.open-meteo.com/v1/forecast?latitude=' + lat + '&longitude=' + lng +
    '&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_gusts_10m,is_day,uv_index' +
    '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,uv_index_max' +
    '&timezone=auto&forecast_days=7';
  const M =
    'https://marine-api.open-meteo.com/v1/marine?latitude=' + lat + '&longitude=' + lng +
    '&current=wave_height,sea_surface_temperature&hourly=sea_level_height_msl&forecast_days=2&timezone=auto';

  const ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
  const timer = ctrl ? setTimeout(() => ctrl.abort(), timeoutMs) : null;
  try {
    const [fcRes, mcRes] = await Promise.all([
      fetch(F, { signal: ctrl ? ctrl.signal : undefined, cache: 'force-cache' }),
      fetch(M, { signal: ctrl ? ctrl.signal : undefined, cache: 'force-cache' }).catch(() => null),
    ]);
    if (timer) clearTimeout(timer);
    if (!fcRes.ok) return null;
    const fc = await fcRes.json();
    const mc = mcRes && mcRes.ok ? await mcRes.json() : null;

    const c = fc.current;
    const d = fc.daily;
    const category = categoryFromCode(c.weather_code);
    const windB = beaufortFromKmh(Math.max(c.wind_speed_10m ?? 0, d.wind_speed_10m_max?.[0] ?? 0));
    const today: TodayWeather = {
      tempCurrent: c.temperature_2m,
      tempMax: d.temperature_2m_max[0],
      tempMin: d.temperature_2m_min[0],
      precipProb: d.precipitation_probability_max?.[0] ?? 0,
      category,
      isDay: c.is_day === 1,
      windKmh: d.wind_speed_10m_max?.[0] ?? c.wind_speed_10m ?? 0,
      windBeaufort: windB,
      uvMax: d.uv_index_max?.[0] ?? c.uv_index ?? 0,
      humidity: c.relative_humidity_2m,
    };
    let tides: TideEvent[] = [];
    if (mc && mc.hourly && Array.isArray(mc.hourly.time) && Array.isArray(mc.hourly.sea_level_height_msl)) {
      const offset = mc.utc_offset_seconds ?? fc.utc_offset_seconds ?? 0;
      tides = extractTides(mc.hourly.time, mc.hourly.sea_level_height_msl, offset);
    }
    if (mc && mc.current) {
      if (mc.current.wave_height != null) today.waveHeight = mc.current.wave_height;
      if (mc.current.sea_surface_temperature != null) today.seaTemp = mc.current.sea_surface_temperature;
    }
    return { today, daily: d, tides };
  } catch {
    if (timer) clearTimeout(timer);
    return null;
  }
}

// ---------------------------------------------------------------------------
// HTML rendering — shared by the server (build-time snapshot) and the client
// (live refresh), so the markup stays identical and only the data changes.
// ---------------------------------------------------------------------------
function esc(s: string): string {
  return s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] as string));
}

function weatherChip(label: string, value: string): string {
  return `<div class="rounded-xl px-3 py-2 text-center" style="background: var(--section-alt); border:1px solid var(--border-color);">
    <div class="text-[11px] uppercase tracking-wide" style="color: var(--text-muted);">${esc(label)}</div>
    <div class="text-sm font-semibold" style="color: var(--text-primary);">${esc(value)}</div>
  </div>`;
}

function ruleList(ids: string[], lang: Lang, icon: string): string {
  return ids
    .map((id) => `<li class="flex items-start gap-2"><span aria-hidden="true">${icon}</span><span>${esc(ruleText(lang, id))}</span></li>`)
    .join('');
}

function weekdayLabel(dateStr: string, lang: Lang): string {
  try {
    const d = new Date(dateStr + 'T00:00');
    return new Intl.DateTimeFormat(lang === 'zh' ? 'zh-CN' : lang === 'pt' ? 'pt-PT' : 'en-US', { weekday: 'short' }).format(d);
  } catch {
    return '';
  }
}

function forecastBlock(daily: any, lang: Lang): string {
  const u = ui(lang);
  const n = Math.min(7, daily.time.length);
  let cards = '';
  for (let i = 0; i < n; i++) {
    const cat = categoryFromCode(daily.weather_code[i]);
    const info = wmoInfo(lang, cat);
    const tmax = Math.round(daily.temperature_2m_max[i]);
    const tmin = Math.round(daily.temperature_2m_min[i]);
    const pop = daily.precipitation_probability_max[i];
    const popTxt = pop == null ? '–' : pop + '%';
    const b = beaufortFromKmh(daily.wind_speed_10m_max[i] ?? 0);
    cards += `<div class="rounded-2xl p-3 text-center" style="background: var(--section-alt); border:1px solid var(--border-color);">
      <div class="text-xs font-medium" style="color: var(--text-secondary);">${esc(weekdayLabel(daily.time[i], lang))}</div>
      <div class="text-2xl my-1" aria-hidden="true">${info.emoji}</div>
      <div class="text-[11px] mb-1" style="color: var(--text-muted);">${esc(info.label)}</div>
      <div class="text-sm font-semibold" style="color: var(--text-primary);">${tmax}° / ${tmin}°</div>
      <div class="mt-1 text-[11px]" style="color: var(--text-secondary);">💧 ${popTxt}</div>
      <div class="text-[11px]" style="color: var(--text-secondary);">💨 ${esc(windName(lang, b))}</div>
    </div>`;
  }
  return `<div class="mt-8">
    <h3 class="font-semibold mb-3" style="color: var(--text-primary);">${esc(u.forecast)}</h3>
    <div class="grid grid-cols-3 sm:grid-cols-7 gap-2">${cards}</div>
  </div>`;
}

function tideBlock(tides: TideEvent[], lang: Lang): string {
  if (!tides || tides.length === 0) return '';
  const u = ui(lang);
  const cards = tides
    .map((t) => {
      const isHigh = t.type === 'high';
      const label = isHigh ? u.tideHigh : u.tideLow;
      const dayTag = t.day === 'tomorrow' ? ` · ${esc(u.tideTomorrow)}` : '';
      return `<div class="rounded-xl px-3 py-2 text-center" style="background: var(--section-alt); border:1px solid var(--border-color);">
        <div class="text-[11px] uppercase tracking-wide" style="color: var(--text-muted);">${isHigh ? '↑' : '↓'} ${esc(label)}${dayTag}</div>
        <div class="text-base font-semibold" style="color: var(--text-primary);">${esc(t.hour)}</div>
        <div class="text-[11px]" style="color: var(--text-secondary);">${t.height.toFixed(1)} m</div>
      </div>`;
    })
    .join('');
  const next = tides[0];
  const tip = next.type === 'low' ? u.tideLowTip : u.tideHighTip;
  return `<div class="mt-5">
    <h3 class="font-semibold mb-3" style="color: var(--text-primary);">🌊 ${esc(u.tideTitle)}</h3>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">${cards}</div>
    <p class="mt-3 text-sm flex items-start gap-2" style="color: var(--text-secondary);"><span aria-hidden="true">💡</span><span>${esc(tip)}</span></p>
  </div>`;
}

export function renderWeatherHtml(w: TodayWeather, daily: any, lang: Lang, tides: TideEvent[] = []): string {
  const u = ui(lang);
  const advice = getAdvice(w);

  const curTemp = w.tempCurrent != null ? Math.round(w.tempCurrent) + '°' : '';
  let stats = '';
  stats += weatherChip(u.precip, (w.precipProb ?? 0) + '%');
  stats += weatherChip(u.wind, `${windName(lang, w.windBeaufort)} (${w.windBeaufort})`);
  stats += weatherChip(u.uv, uvLevel(lang, w.uvMax));
  if (w.waveHeight != null) stats += weatherChip(u.wave, w.waveHeight.toFixed(1) + ' m');
  if (w.seaTemp != null) stats += weatherChip(u.seaTemp, Math.round(w.seaTemp) + '°');

  const riskBlock = advice.alert
    ? `<div class="rounded-2xl p-5 mb-5" style="background: color-mix(in srgb, #dc2626 10%, transparent); border:1px solid #dc2626;">
         <div class="flex items-center gap-2 font-semibold mb-2" style="color:#dc2626;">
           <span aria-hidden="true">⚠️</span><span>${esc(u.riskTitle)}</span>
         </div>
         <ul class="space-y-1 text-sm" style="color: var(--text-primary);">${ruleList(advice.risk, lang, '⚠️')}</ul>
       </div>`
    : `<div class="rounded-2xl p-4 mb-5 flex items-center gap-2 text-sm" style="background: color-mix(in srgb, #16a34a 10%, transparent); border:1px solid #16a34a; color:#15803d;">
         <span aria-hidden="true">✅</span><span><strong>${esc(u.noAlert)}</strong> · ${esc(u.noAlertSub)}</span>
       </div>`;

  const tideHtml = tideBlock(tides, lang);

  const tabs: { key: string; label: string; ids: string[] }[] = [
    { key: 'outfit', label: u.tabOutfit, ids: advice.outfit },
    { key: 'activities', label: u.tabActivity, ids: advice.activities },
    { key: 'items', label: u.tabItems, ids: advice.items },
  ].filter((t) => t.ids.length > 0);

  const tabBtns = tabs
    .map(
      (t, i) =>
        `<button type="button" class="weather-tab flex-1 rounded-xl px-3 py-2 text-sm font-medium" data-key="${t.key}" style="${
          i === 0
            ? 'background: var(--color-ocean-600, #0369a1); color:#fff; border:1px solid var(--color-ocean-600, #0369a1);'
            : 'background: var(--card-bg); color: var(--text-secondary); border:1px solid var(--border-color);'
        }">${esc(t.label)}</button>`
    )
    .join('');

  const panels = tabs
    .map(
      (t) =>
        `<div class="weather-panel" data-key="${t.key}">
           <ul class="space-y-2 text-sm" style="color: var(--text-secondary);">${ruleList(t.ids, lang, '✓')}</ul>
         </div>`
    )
    .join('');

  const tabsBlock = tabs.length
    ? `<div class="mt-5">
         <div class="flex gap-2 mb-4">${tabBtns}</div>
         ${panels}
       </div>`
    : '';

  return `
    <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
      <div>
        <div class="text-4xl font-display font-bold" style="color: var(--color-ocean-600, #0369a1);">${curTemp}</div>
        <div class="text-sm mt-1" style="color: var(--text-primary);">${esc(formatCurrent(w, lang))}</div>
      </div>
    </div>
    <div class="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-5">${stats}</div>
    ${riskBlock}
    ${tideHtml}
    ${tabsBlock}
    ${forecastBlock(daily, lang)}
  `;
}
