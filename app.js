// ==================== 餐廳資料 ====================
// 已依 2026/02/10-02/14 行程（自理用餐日：D1、D4）整理
const restaurants = [
    {
        "id": 1,
        "name": "黑亭拉麵 上通店",
        "category": "拉麵",
        "area": "上通",
        "hours": "週日-五 10:30-21:00、週六 10:30-23:30",
        "recommendations": "焦香豚骨拉麵、叉燒拉麵、玉子入拉麵",
        "highlight": "熊本代表性的黑麻油豚骨拉麵，湯頭濃郁香醇，麵條Q彈有勁，焦香風味令人難忘。",
        "note": "D1晚餐首選，招牌玉子入拉麵淋上自製焦蒜油超香",
        "googleMapsQuery": "黑亭ラーメン 上通店",
        "source": "https://gogojp.tw/kokutei-kumamoto/"
    },
    {
        "id": 2,
        "name": "桂花拉麵 本店",
        "category": "拉麵",
        "area": "下通周邊",
        "hours": "",
        "recommendations": "太肉麵、熊本拉麵",
        "highlight": "創業超過60年的老字號，以濃厚蒜香豚骨湯底聞名，招牌太肉麵份量十足。",
        "note": "老字號蒜香豚骨，適合喜愛濃郁湯頭者",
        "googleMapsQuery": "桂花ラーメン 本店",
        "source": "既有店家"
    },
    {
        "id": 3,
        "name": "一蘭拉麵 熊本店",
        "category": "拉麵",
        "area": "市區",
        "hours": "深夜營業",
        "recommendations": "天然豚骨拉麵",
        "highlight": "知名連鎖拉麵，個人隔間式座位，可依個人喜好調整濃度與辣度，深夜營業。",
        "note": "D4晚餐/宵夜好選擇，深夜也能吃",
        "googleMapsQuery": "一蘭 熊本店",
        "source": "既有店家"
    },
    {
        "id": 4,
        "name": "菅乃屋 上通店",
        "category": "馬肉料理",
        "area": "銀座通（上通周邊）",
        "hours": "11:30-14:30、17:00-22:00",
        "recommendations": "馬肉刺身、馬肉壽喜燒、清正公會席",
        "highlight": "熊本頂級馬肉專門店，肉質鮮嫩甘甜，生馬肉入口即化，是體驗熊本飲食文化的必訪之地。",
        "note": "D1晚餐推薦，多家分店（銀座通、新市街、熊本站、機場）",
        "googleMapsQuery": "菅乃屋 銀座通店",
        "source": "https://matcha-jp.com/tw/20814"
    },
    {
        "id": 5,
        "name": "馬櫻 下通店",
        "category": "馬肉料理",
        "area": "下通",
        "hours": "週末有午間套餐",
        "recommendations": "櫻肉握壽司、馬肉涮涮鍋、馬肉壽喜燒",
        "highlight": "平價享受高品質馬肉，午間套餐CP值極高，環境舒適適合初次嘗試馬肉的旅客。",
        "note": "D4晚餐推薦，週末與國定假日有午間套餐，建議預約",
        "googleMapsQuery": "馬桜 下通店",
        "source": "https://matcha-jp.com/tw/20814"
    },
    {
        "id": 6,
        "name": "天外天",
        "category": "居酒屋",
        "area": "市區",
        "hours": "",
        "recommendations": "馬肉串燒、辛子蓮藕",
        "highlight": "在地人推薦的居酒屋，供應熊本鄉土料理，氛圍熱鬧，適合體驗日式居酒屋文化。",
        "note": "D4晚餐/宵夜推薦，在地人愛店",
        "googleMapsQuery": "天外天 熊本",
        "source": "既有店家"
    },
    {
        "id": 7,
        "name": "風之森",
        "category": "居酒屋",
        "area": "市區",
        "hours": "",
        "recommendations": "熊本地酒、季節性刺身拼盤",
        "highlight": "精選熊本地產食材，日本酒種類豐富，店內氛圍溫馨，適合小酌放鬆。",
        "note": "適合想品嘗熊本地酒者",
        "googleMapsQuery": "風の森 熊本",
        "source": "既有店家"
    },
    {
        "id": 8,
        "name": "居酒屋感",
        "category": "居酒屋",
        "area": "下通/西銀座通",
        "hours": "17:00-23:00",
        "recommendations": "國產馬肉創意料理、中華料理、熊本鄉土料理",
        "highlight": "馬櫻姊妹店，提供超過100種九州燒酒和熊本地酒，多國語言平板點餐，不懂日語也能輕鬆享用。",
        "note": "D1晚餐/宵夜推薦，多國語言點餐方便",
        "googleMapsQuery": "居酒屋感 熊本",
        "source": "https://matcha-jp.com/tw/20814"
    },
    {
        "id": 9,
        "name": "惠比壽門",
        "category": "居酒屋",
        "area": "下通",
        "hours": "17:00-23:00（早鳥時段優惠至17:00）",
        "recommendations": "天草直送鮮魚、辛子蓮藕、赤牛、生肉丸、活蝦刺身",
        "highlight": "天草直送新鮮海產，有活魚池，現炸辛子蓮藕，每天現做生肉丸是招牌，早鳥時段優惠。",
        "note": "適合喜愛海鮮與熊本鄉土料理者，早鳥優惠划算",
        "googleMapsQuery": "惠比壽門 熊本",
        "source": "https://matcha-jp.com/tw/20814"
    },
    {
        "id": 10,
        "name": "勝烈亭",
        "category": "其他",
        "area": "新市街",
        "hours": "11:30-21:30",
        "recommendations": "黑豚炸豬排定食、炸蝦定食、厚揚六白黑豚腰內肉",
        "highlight": "選用九州產六白黑豚，外酥內嫩，搭配特製醬汁與高麗菜絲，定食附白飯與味噌湯可無限續。",
        "note": "D1晚餐推薦，熊本人氣豬排必吃",
        "googleMapsQuery": "勝烈亭 熊本",
        "source": "https://gogojp.tw/kumamoto-shimotoori/"
    },
    {
        "id": 11,
        "name": "紅蘭亭 上通店",
        "category": "其他",
        "area": "下通",
        "hours": "11:00-21:00",
        "recommendations": "太平燕（熊本風春雨湯）、中華料理",
        "highlight": "熊本獨特的中華料理，太平燕是必點招牌，清爽健康，深受在地人喜愛。",
        "note": "D1晚餐推薦，體驗熊本特有太平燕文化",
        "googleMapsQuery": "紅蘭亭 下通店",
        "source": "https://gogojp.tw/kumamoto-shimotoori/"
    },
    {
        "id": 12,
        "name": "天草海鮮市場 直營店",
        "category": "其他",
        "area": "市區",
        "hours": "",
        "recommendations": "海鮮丼、生蠔",
        "highlight": "天草直送新鮮海產，海鮮丼料多實在，生蠔鮮甜肥美，喜愛海鮮者不可錯過。",
        "note": "適合午餐或晚餐，海鮮愛好者必訪",
        "googleMapsQuery": "天草海鮮市場 熊本",
        "source": "既有店家"
    },
    {
        "id": 13,
        "name": "褐火 總本店",
        "category": "燒肉",
        "area": "下通/銀座通",
        "hours": "17:00-23:00",
        "recommendations": "阿蘇赤牛稀有部位、上級套餐、頂級套餐、整條牛舌",
        "highlight": "獨立包廂燒肉店，整頭購買阿蘇放牧赤牛，提供平常難見的稀有部位，上級套餐含11種品項。",
        "note": "D4晚餐推薦，體驗頂級阿蘇赤牛燒肉",
        "googleMapsQuery": "褐火総本店 熊本",
        "source": "https://matcha-jp.com/tw/20814"
    },
    {
        "id": 14,
        "name": "大眾燒肉 Horumonman",
        "category": "燒肉",
        "area": "下通巷內",
        "hours": "17:00-翌日1:00",
        "recommendations": "阿蘇紅牛、黑毛和牛、內臟燒肉",
        "highlight": "平價燒肉專門店，嚴選優質阿蘇紅牛、黑毛和牛，以量制價不傷荷包，1000円可任選3杯飲料。",
        "note": "D4晚餐/宵夜推薦，有早鳥特價和吃到飽方案",
        "googleMapsQuery": "ホルモンマン 熊本",
        "source": "https://gogojp.tw/kumamoto-shimotoori/"
    },
    {
        "id": 15,
        "name": "Sweets Bank",
        "category": "甜點",
        "area": "市區",
        "hours": "",
        "recommendations": "熊本熊甜點、草莓蛋糕",
        "highlight": "熊本最具人氣的甜點店，造型可愛精緻，使用熊本產水果製作，IG打卡必訪。",
        "note": "D4下午茶推薦，熊本熊造型超可愛",
        "googleMapsQuery": "スイーツバンク 熊本",
        "source": "既有店家"
    },
    {
        "id": 16,
        "name": "Patisserie Amour",
        "category": "甜點",
        "area": "市區",
        "hours": "",
        "recommendations": "蒙布朗、季節限定塔類",
        "highlight": "法式甜點工藝精湛，栗子蒙布朗綿密細緻，店內裝潢優雅適合下午茶。",
        "note": "適合優雅下午茶時光",
        "googleMapsQuery": "パティスリー アムール 熊本",
        "source": "既有店家"
    },
    {
        "id": 17,
        "name": "蜂樂饅頭",
        "category": "甜點",
        "area": "上通",
        "hours": "10:00-19:00（週二定休）",
        "recommendations": "紅豆饅頭、白鳳豆饅頭",
        "highlight": "熊本起家創業70年，像台灣紅豆餅，一個只要110円，可內用還有免費奉茶。",
        "note": "D1逛街點心推薦，平價懷舊好滋味",
        "googleMapsQuery": "蜂楽饅頭 熊本",
        "source": "https://gogojp.tw/kumamoto-shimotoori/"
    },
    {
        "id": 18,
        "name": "星乃咖啡",
        "category": "甜點",
        "area": "下通",
        "hours": "週日-四 9:00-22:00、週五-六 9:00-23:00",
        "recommendations": "舒芙蕾鬆餅、咖啡",
        "highlight": "日式連鎖咖啡廳，招牌舒芙蕾鬆餅綿密輕盈，環境舒適，可以慢慢享用下午茶時光。",
        "note": "D4下午茶/咖啡推薦，還能賞車",
        "googleMapsQuery": "星乃珈琲店 熊本",
        "source": "https://gogojp.tw/kumamoto-shimotoori/"
    },
    {
        "id": 19,
        "name": "鯛吉鯛魚燒",
        "category": "甜點",
        "area": "上通",
        "hours": "10:00-20:00",
        "recommendations": "熊本熊造型鯛魚燒、冰涼涼鯛魚燒",
        "highlight": "可愛的熊本熊造型鯛魚燒，有現烤和冰的兩種選擇，邊走邊吃的最佳小點心。",
        "note": "D1逛街點心推薦，熊本熊造型超萌",
        "googleMapsQuery": "たい吉 熊本",
        "source": "https://gogojp.tw/kumamoto-shimotoori/"
    }
];
// ==================== 全域變數 ====================
let currentCategory = 'all';
let currentDayFilter = 'all';

// ==================== 初始化 ====================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Day filters (All/D1/D3/D4) will sync itinerary + restaurants list
    renderItineraryAll();
    setupDayFilters();
    setupItineraryTabs();

    renderRestaurants(currentCategory);
    setupCategoryFilters();
    setupBackToTop();
    setupSmoothScroll();
    
    // Initialize travel checklist
    setupTravelChecklist();
}

// ==================== 自理用餐行程（依 PDF 行程） ====================
const itinerary = {
    D1: {
        title: 'D1 熊本｜上通・下通（晚餐自理）',
        base: '主要點：通町筋站／上通下通／鶴屋百貨／熊本城前（多為步行可達）',
        picks: [4, 1, 11, 10, 17, 8] // 菅乃屋、黑亭、紅蘭亭、勝烈亭、蜂樂饅頭、居酒屋感
    },
    D4: {
        title: 'D4 熊本｜回熊本（晚餐自理）',
        base: '主要點：下通・銀座通・新市街（多為步行可達）',
        picks: [13, 14, 5, 6, 3, 18] // 褐火、Horumonman、馬櫻、天外天、一蘭、星乃咖啡
    },
    D3: {
        title: 'D3 福岡｜天神（午/晚餐自理）',
        base: '主要點：天神地下街／百貨周邊（走路解決最省力）',
        links: [
            { name: '一蘭 天神', note: '午餐快速不踩雷（拉麵）', url: 'https://www.google.com/maps/search/?api=1&query=%E4%B8%80%E8%98%AD%20%E5%A4%A9%E7%A5%9E' },
            { name: '博多らーめん ShinShin（天神）', note: '福岡人氣豚骨', url: 'https://www.google.com/maps/search/?api=1&query=%E5%8D%9A%E5%A4%9A%E3%82%89%E3%83%BC%E3%82%81%E3%82%93%20ShinShin%20%E5%A4%A9%E7%A5%9E' },
            { name: 'もつ鍋 やま中（天神）', note: '福岡代表：牛腸鍋（建議訂位）', url: 'https://www.google.com/maps/search/?api=1&query=%E3%82%82%E3%81%A4%E9%8D%8B%20%E3%82%84%E3%81%BE%E4%B8%AD%20%E5%A4%A9%E7%A5%9E' },
            { name: '水炊き（天神/福岡）', note: '清爽派：水炊鍋', url: 'https://www.google.com/maps/search/?api=1&query=%E6%B0%B4%E7%82%8A%E3%81%8D%20%E5%A4%A9%E7%A5%9E%20%E7%A6%8F%E5%B2%A1' },
            { name: '天神 屋台', note: '晚餐/續攤：屋台氛圍', url: 'https://www.google.com/maps/search/?api=1&query=%E5%A4%A9%E7%A5%9E%20%E5%B1%8B%E5%8F%B0%20%E7%A6%8F%E5%B2%A1' }
        ]
    }
};

function getRestaurantById(id) {
    return restaurants.find(r => r.id === id);
}

function getDayTagsFromRestaurant(r) {
    const note = (r && r.note) ? String(r.note) : '';
    const tags = [];
    if (/\bD1\b/i.test(note)) tags.push('D1');
    if (/\bD4\b/i.test(note)) tags.push('D4');
    // D3 是福岡天神，restaurants 清單（熊本）預設不標
    return tags;
}

function computeWalkFromTomachisuMin(r) {
    // 寫死 OK：用 area 關鍵字粗估「通町筋站」步行時間（分鐘）
    const area = (r && r.area) ? String(r.area) : '';
    if (!area) return null;

    const rules = [
        [/通町筋|上通/, 4],
        [/銀座通/, 5],
        [/下通/, 6],
        [/新市街/, 7],
        [/熊本城前/, 10],
        [/市區/, 8]
    ];

    for (const [re, min] of rules) {
        if (re.test(area)) return min;
    }
    return 8;
}

function formatWalkText(min) {
    if (!min) return '';
    return `通町筋站步行約 ${min} 分`;
}

function renderItineraryAll() {
    // 依序渲染 D1 → D3 → D4（全部模式）
    const grid = document.getElementById('itineraryGrid');
    if (!grid) return;
    grid.innerHTML = '';

    ['D1', 'D3', 'D4'].forEach(day => {
        const header = document.createElement('div');
        header.style.gridColumn = '1 / -1';
        header.style.marginTop = '0.5rem';
        header.innerHTML = `<div class="card-header" style="border-radius:12px;">
            <span class="card-category">行程</span>
            <h3 class="card-title" style="margin:0;">${itinerary[day].title}</h3>
            <div class="card-text" style="color: var(--text-secondary); margin-top: .5rem;">${itinerary[day].base}</div>
        </div>`;
        grid.appendChild(header);

        renderItinerary(day, { append: true });
    });
}

function renderItinerary(day, opts = {}) {
    const grid = document.getElementById('itineraryGrid');
    if (!grid) return;

    const plan = itinerary[day];
    if (!plan) return;

    if (!opts.append) grid.innerHTML = '';

    // D3: 直接用連結卡
    if (day === 'D3') {
        plan.links.forEach((item, idx) => {
            const card = document.createElement('div');
            card.className = 'restaurant-card';
            card.style.animationDelay = `${idx * 0.05}s`;
            card.innerHTML = `
                <div class="card-header">
                    <span class="card-category">福岡・天神</span>
                    <h3 class="card-title">${item.name}</h3>
                </div>
                <div class="card-body">
                    <div class="card-section">
                        <div class="card-label">建議</div>
                        <div class="card-text">${item.note}</div>
                    </div>
                </div>
                <div class="card-footer" style="display:flex; gap:10px; flex-wrap:wrap; align-items:center;">
                    <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="map-btn">Google 地圖</a>
                </div>
            `;
            grid.appendChild(card);
        });
        return;
    }

    // D1/D4: 從 restaurants 取 6 家
    const items = (plan.picks || []).map(getRestaurantById).filter(Boolean);

    items.forEach((r, idx) => {
        const card = document.createElement('div');
        card.className = 'restaurant-card';
        card.style.animationDelay = `${idx * 0.05}s`;

        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.googleMapsQuery)}`;
        const sourceUrl = (r.source && /^https?:\/\//.test(r.source)) ? r.source : mapsUrl;

        const hoursText = r.hours ? r.hours : '—';
        const areaText = r.area ? r.area : '—';
        const noteText = r.note ? r.note : '';
        const walkMin = computeWalkFromTomachisuMin(r);
        const walkText = formatWalkText(walkMin);

        card.innerHTML = `
            <div class="card-header">
                <span class="card-category">${r.category}</span>
                <h3 class="card-title">${r.name}</h3>
            </div>
            <div class="card-body">
                <div class="card-section">
                    <div class="card-label">區域 / 營業時間</div>
                    <div class="card-text">${areaText} ・ ${hoursText}</div>
                </div>
                ${walkText ? `
                <div class="card-section">
                    <div class="card-label">步行時間</div>
                    <div class="card-text">${walkText}</div>
                </div>
                ` : ''}
                <div class="card-section">
                    <div class="card-label">推薦品項</div>
                    <div class="card-text">${r.recommendations}</div>
                </div>
                <div class="card-section">
                    <div class="card-label">為什麼推薦</div>
                    <div class="card-highlight">${r.highlight}</div>
                </div>
                ${noteText ? `
                <div class="card-section">
                    <div class="card-label">行程建議</div>
                    <div class="card-text">${noteText}</div>
                </div>
                ` : ''}
            </div>
            <div class="card-footer" style="display:flex; gap:10px; flex-wrap:wrap; align-items:center;">
                <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" class="map-btn">Google 地圖</a>
                <a href="${sourceUrl}" target="_blank" rel="noopener noreferrer" class="map-btn" style="background: rgba(212,165,116,0.12); border: 1px solid rgba(212,165,116,0.35);">來源</a>
            </div>
        `;

        grid.appendChild(card);
    });
}

function setItineraryTabActive(day) {
    const buttons = document.querySelectorAll('.itinerary-tabs .filter-btn');
    buttons.forEach(b => b.classList.remove('active'));
    const target = document.querySelector(`.itinerary-tabs .filter-btn[data-day="${day}"]`);
    if (target) target.classList.add('active');
}

function setupDayFilters() {
    const buttons = document.querySelectorAll('.day-filter-btn');
    if (!buttons.length) return;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const day = btn.dataset.dayfilter;
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            currentDayFilter = day;

            // itinerary: all 顯示三段；其餘顯示單日
            if (day === 'all') {
                renderItineraryAll();
            } else {
                setItineraryTabActive(day);
                renderItinerary(day);
            }

            // restaurants: 同步只顯示該日可用（D3 則提示）
            renderRestaurants(currentCategory);
        });
    });
}

function setupItineraryTabs() {
    const buttons = document.querySelectorAll('.itinerary-tabs .filter-btn');
    if (!buttons.length) return;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const day = btn.dataset.day;
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 若目前是 all，切 tab 不改 day filter；若不是 all，點 tab 就同步 day filter
            if (currentDayFilter !== 'all') {
                // sync day filter pills
                const dayBtns = document.querySelectorAll('.day-filter-btn');
                dayBtns.forEach(b => b.classList.remove('active'));
                const pill = document.querySelector(`.day-filter-btn[data-dayfilter="${day}"]`);
                if (pill) pill.classList.add('active');
                currentDayFilter = day;
            }

            renderItinerary(day);
            renderRestaurants(currentCategory);
        });
    });
}

// ==================== 渲染餐廳卡片 ====================
function renderRestaurants(category) {
    const grid = document.getElementById('restaurantsGrid');
    
    // 先依分類篩選
    let filtered = category === 'all'
        ? restaurants
        : restaurants.filter(r => r.category === category);

    // 再依天數（All/D1/D3/D4）同步篩選
    const hint = document.getElementById('dayFilterHint');

    if (currentDayFilter === 'D3') {
        // D3 在福岡：下方熊本餐廳清單先不顯示，避免混淆
        filtered = [];
        if (hint) {
            hint.style.display = 'block';
            hint.innerHTML = '你目前選的是 <b>D3（福岡天神）</b>。下方「美食清單」是熊本（上通/下通）店家資料，因此此模式先隱藏清單，請到上方 <b>自理用餐行程</b> 看天神的午/晚餐連結。';
        }
    } else if (currentDayFilter === 'D1' || currentDayFilter === 'D4') {
        filtered = filtered.filter(r => getDayTagsFromRestaurant(r).includes(currentDayFilter));
        if (hint) {
            hint.style.display = 'block';
            hint.innerHTML = `目前只顯示 <b>${currentDayFilter}</b> 推薦/適用的店家（同步自理用餐行程）。切回「全部」可看完整清單。`;
        }
    } else {
        if (hint) hint.style.display = 'none';
    }
    
    // 清空容器
    grid.innerHTML = '';
    
    // 如果沒有結果
    if (filtered.length === 0) {
        grid.innerHTML = '<p style="text-align: center; color: var(--text-secondary); grid-column: 1/-1;">目前此分類尚無店家資料</p>';
        return;
    }
    
    // 生成卡片
    filtered.forEach((restaurant, index) => {
        const card = createRestaurantCard(restaurant, index);
        grid.appendChild(card);
    });
}

// ==================== 建立餐廳卡片 ====================
function createRestaurantCard(restaurant, index) {
    const card = document.createElement('div');
    card.className = 'restaurant-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    // Google Maps 搜尋 URL
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.googleMapsQuery)}`;
    
    // 資料來源：若 restaurant.source 是 URL 就用它，否則退回 Google Maps
    const sourceUrl = (restaurant.source && /^https?:\/\//.test(restaurant.source)) ? restaurant.source : mapsUrl;
    const hoursText = restaurant.hours ? restaurant.hours : '—';
    const areaText = restaurant.area ? restaurant.area : '—';
    const noteText = restaurant.note ? restaurant.note : '';

    // 步行時間（只做熊本：通町筋站）
    const walkMin = computeWalkFromTomachisuMin(restaurant);
    const walkText = formatWalkText(walkMin);

    card.innerHTML = `
        <div class="card-header">
            <span class="card-category">${restaurant.category}</span>
            <h3 class="card-title">${restaurant.name}</h3>
        </div>
        <div class="card-body">
            <div class="card-section">
                <div class="card-label">區域 / 營業時間</div>
                <div class="card-text">${areaText} ・ ${hoursText}</div>
            </div>
            ${walkText ? `
            <div class="card-section">
                <div class="card-label">步行時間</div>
                <div class="card-text">${walkText}</div>
            </div>
            ` : ''}
            <div class="card-section">
                <div class="card-label">推薦品項</div>
                <div class="card-text">${restaurant.recommendations}</div>
            </div>
            <div class="card-section">
                <div class="card-highlight">${restaurant.highlight}</div>
            </div>
            ${noteText ? `
            <div class="card-section">
                <div class="card-label">行程建議</div>
                <div class="card-text">${noteText}</div>
            </div>
            ` : ''}
        </div>
        <div class="card-footer" style="display:flex; gap:10px; flex-wrap:wrap; align-items:center;">
            <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" class="map-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Google 地圖
            </a>
            <a href="${sourceUrl}" target="_blank" rel="noopener noreferrer" class="map-btn" style="background: rgba(212,165,116,0.12); border: 1px solid rgba(212,165,116,0.35);">
                來源
            </a>
        </div>
    `;
    
    return card;
}

// ==================== 分類篩選 ====================
function setupCategoryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            
            // 更新按鈕狀態
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // 更新當前分類並重新渲染
            currentCategory = category;
            renderRestaurants(category);
        });
    });
}

// ==================== 回頂部按鈕 ====================
function setupBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    // 監聽滾動事件
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // 點擊回頂部
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== 平滑滾動 ====================
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('.sticky-nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==================== 導航列滾動效果 ====================
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.sticky-nav');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.08)';
    }
    
    lastScroll = currentScroll;
});

// ==================== 工具函數：新增餐廳資料 ====================
// 供您之後填入真實資料使用
function addRestaurant(restaurantData) {
    /*
    使用範例：
    addRestaurant({
        name: "店家名稱",
        category: "拉麵", // 或 "馬肉料理", "居酒屋", "甜點", "其他"
        recommendations: "推薦品項1、推薦品項2",
        highlight: "店家特色與亮點描述",
        googleMapsQuery: "店家名稱 熊本" // 用於 Google Maps 搜尋
    });
    */
    
    const newId = restaurants.length > 0 
        ? Math.max(...restaurants.map(r => r.id)) + 1 
        : 1;
    
    restaurants.push({
        id: newId,
        ...restaurantData
    });
    
    // 重新渲染
    renderRestaurants(currentCategory);
    
    console.log(`✅ 已新增餐廳：${restaurantData.name}`);
}

// ==================== 工具函數：批次匯入餐廳 ====================
function importRestaurants(restaurantsArray) {
    /*
    使用範例：
    importRestaurants([
        { name: "...", category: "...", ... },
        { name: "...", category: "...", ... }
    ]);
    */
    
    restaurantsArray.forEach(data => {
        const newId = restaurants.length > 0 
            ? Math.max(...restaurants.map(r => r.id)) + 1 
            : 1;
        
        restaurants.push({
            id: newId,
            ...data
        });
    });
    
    renderRestaurants(currentCategory);
    console.log(`✅ 已批次匯入 ${restaurantsArray.length} 筆餐廳資料`);
}

// ==================== 出國旅遊必備 Checklist ==================== 
const travelChecklistData = {
    '3-months': {
        title: '3個月前 - 預劃階段',
        items: [
            { title: '護照確認', desc: '檢查護照有效期限是否 ≥ 6 個月；如需更新，儘早申辦' },
            { title: '訂機票', desc: '早鳥票便宜，建議提前 2-3 個月訂購' },
            { title: '辦簽證（如需）', desc: '臺灣護照赴日免簽，但確認最新規定' },
            { title: '預訂飯店', desc: '特別是日本黃金周（4月-5月）或假期，提早預訂避免滿房' },
            { title: '購買旅遊保險', desc: '涵蓋醫療、行李延誤等，出國必備' },
            { title: '檢查疫苗', desc: '確認接種狀況，如需更新疫苗提前計畫' }
        ]
    },
    '1-month': {
        title: '1個月前 - 準備階段',
        items: [
            { title: '預訂餐廳訂位', desc: '熊本知名店家（馬肉料理、居酒屋）建議線上預約' },
            { title: '兌換日幣', desc: '提前到銀行或線上兌換，避免臨時匯率不佳；ATM 也可提領' },
            { title: '申辦/確認信用卡', desc: '確保有效期限足夠，並通知銀行將赴日；備用卡很重要' },
            { title: '確認行動網路方案', desc: '租用 WiFi egg、購買 SIM 卡，或申辦國際漫遊；下載 Google Maps' },
            { title: '購買必需品', desc: '備用眼鏡/隱形眼鏡、常用藥物、必需保養品等' },
            { title: '安排接送', desc: '預訂機場接送、停車位或共乘服務' }
        ]
    },
    '1-week': {
        title: '1週前 - 檢查階段',
        items: [
            { title: '打包行李', desc: '先列清單，避免超重；托運 23kg、隨身 10kg 內' },
            { title: '檢查禁帶物品', desc: '刀具、液體、打火機等嚴禁；電源供應器可隨身' },
            { title: '確認機票與飯店預訂', desc: '列印或存檔 E-ticket、飯店確認單；電話號碼記下來' },
            { title: '設定行程表', desc: '儲存在手機；重要地址、餐廳電話、緊急聯絡方式備份' },
            { title: '購買景點門票（選）', desc: '如有特殊景點（熊本城、黑川溫泉）可提前網購優惠票' },
            { title: '檢查天氣預報', desc: '決定穿著；日本冬季（12月-2月）寒冷，備好保暖衣物' }
        ]
    },
    '1-day': {
        title: '前一天 - 最後檢查',
        items: [
            { title: '檢查液體和固體分類', desc: '液體放托運；大於 100ml 需托運；隨身液體放透明夾鍊袋' },
            { title: '確認行李重量', desc: '用家裡體重計量，避免機場額外付費；超重物品臨時取出' },
            { title: '檢查證件', desc: '護照、身份證、機票、簽證紙本备份放在不同地方' },
            { title: '通知銀行與家人', desc: '銀行通知出國時間；家人知道行程與聯絡方式' },
            { title: '設定鬧鐘', desc: '確認出發時間，設置多個鬧鐘避免遲到' },
            { title: '檢查電子產品', desc: '手機、充電器、行動電源充滿電；帶上轉接插頭' }
        ]
    },
    'departure-day': {
        title: '出發當天',
        items: [
            { title: '提前 3 小時到機場', desc: '國際班機一般需提前 2-3 小時報到；走廊可能擁擠' },
            { title: '備好護照與機票', desc: '放在隨身包內最容易取出的位置' },
            { title: '過安檢時準備好液體袋', desc: '將液體夾鍊袋、電子產品、金屬物品提前準備，加快安檢速度' },
            { title: '確認登機門號', desc: '安檢後尋找電子看板，確認登機時間與登機門；勿錯過廣播' },
            { title: '在免稅店購物（可選）', desc: '安檢後可購買液體、零食等；若時間不足可略過' },
            { title: '登機前檢查一次', desc: '護照、行李、隨身物品確認無誤後登機；祝您旅途愉快！' }
        ]
    }
};

// ==================== 設定 Travel Checklist ==================== 
function setupTravelChecklist() {
    const checklistContent = document.getElementById('checklistContent');
    if (!checklistContent) return;

    const timelineStages = document.querySelectorAll('.timeline-stage');
    const firstStage = Array.from(timelineStages)[0];
    
    // 預設選擇第一個時間軸階段
    if (firstStage) {
        firstStage.classList.add('active');
        renderChecklistContent('3-months');
    }

    // 時間軸切換事件
    timelineStages.forEach(stage => {
        stage.addEventListener('click', () => {
            timelineStages.forEach(s => s.classList.remove('active'));
            stage.classList.add('active');
            
            const timelineKey = stage.dataset.timeline;
            renderChecklistContent(timelineKey);
        });
    });
}

// ==================== 渲染 Checklist 內容 ==================== 
function renderChecklistContent(timelineKey) {
    const checklistContent = document.getElementById('checklistContent');
    if (!checklistContent) return;

    const stage = travelChecklistData[timelineKey];
    if (!stage) return;

    let html = `<div class="checklist-stage active">
        <h3 class="checklist-stage-title">${stage.title}</h3>
        <div class="checklist-items">`;

    stage.items.forEach((item, index) => {
        html += `
            <div class="checklist-item" onclick="toggleChecklistCheckbox(this)">
                <div class="checklist-checkbox" data-index="${index}">
                    <span>✓</span>
                </div>
                <div class="checklist-text">
                    <div class="checklist-item-title">${item.title}</div>
                    <div class="checklist-item-desc">${item.desc}</div>
                </div>
            </div>`;
    });

    html += `</div></div>`;
    checklistContent.innerHTML = html;
}

// ==================== Checklist 項目點擊事件 ==================== 
function toggleChecklistCheckbox(element) {
    const checkbox = element.querySelector('.checklist-checkbox');
    checkbox.classList.toggle('checked');
}

// ==================== 匯出到全域供 Console 使用 ====================
window.addRestaurant = addRestaurant;
window.importRestaurants = importRestaurants;
window.restaurantsData = restaurants;

console.log('🍜 熊本美食地圖已載入完成！');
console.log('💡 提示：可透過 Console 使用 addRestaurant() 或 importRestaurants() 新增餐廳資料');
