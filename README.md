# 熊本 上通・下通 美食地圖

現代日系風格的單頁美食導覽網站，手機優先響應式設計。

## 📁 檔案結構

```
kumamoto-food-map/
├── index.html      # 主頁面
├── styles.css      # 樣式表
├── app.js          # JavaScript 邏輯
└── README.md       # 說明文件
```

## 🚀 快速開始

1. 直接用瀏覽器開啟 `index.html` 即可預覽
2. 或使用本地伺服器（推薦）：
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (npx)
   npx serve
   ```
3. 在瀏覽器開啟 `http://localhost:8000`

## ✏️ 如何新增/修改餐廳資料

### 方法一：直接編輯 app.js

在 `app.js` 檔案中找到 `restaurants` 陣列（約第 2 行），按照格式新增：

```javascript
const restaurants = [
    {
        id: 1,  // 遞增的唯一 ID
        name: "店家名稱",
        category: "拉麵",  // 可選：拉麵、馬肉料理、居酒屋、甜點、其他
        recommendations: "招牌拉麵、煎餃",
        highlight: "店家特色描述，例如：湯頭濃郁、環境優雅等",
        googleMapsQuery: "店家名稱 熊本"  // 用於 Google Maps 搜尋
    },
    // ... 更多店家
];
```

### 方法二：透過瀏覽器 Console 新增

開啟網頁後，按 F12 開啟開發者工具，在 Console 輸入：

```javascript
// 新增單筆
addRestaurant({
    name: "新店家名稱",
    category: "拉麵",
    recommendations: "推薦品項",
    highlight: "特色描述",
    googleMapsQuery: "新店家名稱 熊本"
});

// 批次匯入多筆
importRestaurants([
    { name: "店家A", category: "拉麵", ... },
    { name: "店家B", category: "甜點", ... }
]);
```

## 🎨 設計特色

- ✅ **現代日系風格**：簡約優雅，使用柔和配色
- ✅ **手機優先響應式**：在各種裝置上完美顯示
- ✅ **粘性頂部導覽**：隨時快速跳轉區塊
- ✅ **分類篩選**：一鍵篩選不同類型美食
- ✅ **Google Maps 整合**：每間店都有導航按鈕
- ✅ **回頂部按鈕**：滾動超過 300px 自動顯示
- ✅ **平滑滾動動畫**：提升使用體驗

## 🎯 區塊說明

1. **Hero** - 視覺吸睛的首屏區塊
2. **簡介** - 介紹上通・下通商圈與統計數據
3. **美食清單** - 可篩選的餐廳卡片網格
4. **行前提醒** - 營業時間、排隊、支付方式等實用資訊

## 🛠️ 自訂修改

### 修改配色

在 `styles.css` 的 `:root` 區塊修改 CSS 變數：

```css
:root {
    --primary: #2c3e50;      /* 主色 */
    --accent: #d4a574;       /* 強調色 */
    --bg-light: #fafafa;     /* 背景色 */
    /* ... */
}
```

### 修改 Hero 背景

在 `styles.css` 的 `.hero` 區塊替換背景漸層或圖片 URL。

### 新增分類

1. 在 HTML 的 `.category-filters` 區塊新增按鈕
2. 新增餐廳時使用對應的 `category` 名稱

## 📱 響應式斷點

- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: ≤ 480px

## 🌐 瀏覽器支援

- Chrome / Edge (推薦)
- Firefox
- Safari
- 現代行動瀏覽器

## 📝 目前資料狀態

目前包含 **12 筆 Placeholder 資料**，涵蓋：
- 拉麵 3 間
- 馬肉料理 2 間
- 居酒屋 2 間
- 甜點 2 間
- 其他 3 間

**請依您的研究資料替換或新增真實店家資訊！**

## 💡 提示

- 所有文字皆為繁體中文
- Google Maps 連結會在新分頁開啟
- 卡片會依據分類自動套用不同的標籤顏色
- 資料儲存在 JavaScript 中，部署前可考慮改用 JSON 檔案或後端 API

---

**製作日期**: 2026-02-07  
**主題**: 熊本 上通・下通 美食地圖  
**風格**: 現代日系高級感
