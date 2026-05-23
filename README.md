# 1142-ML-finalproject
some kind of Warehouse Management System
# Google Sheets 倉儲零件管理系統

## 專案簡介
本專題為一套基於 Google 生態系統所建構的「倉儲零件管理系統」，  
透過 Google Form、Google Sheets、Google Colab 與 Google Apps Script，完成零件借出、歸還、上架與報廢的數位化管理。
系統可自動更新庫存資訊，並同步顯示目前倉儲狀態，降低人工管理成本與紀錄錯誤。

---

## 專案目標
- 建立低成本且易維護的倉儲管理系統
- 自動化更新庫存資料
- 提供即時倉儲資訊查詢
- 降低人工記錄錯誤率
- 建立可擴充的智慧化管理架構

---

## 系統架構
```text
Google Form
    ↓
Google Sheets（儲存借還紀錄）
    ↓
Google Colab（庫存運算）
    ↓
更新 inventory 資料
    ↓
寫回 Google Sheets（E1）
    ↓
Google Apps Script
    ↓
同步更新 Google Form Description
```

---

## 使用技術
| 技術 | 用途 |
|------|------|
| Google Form | 使用者資料輸入 |
| Google Sheets | 借還資料儲存 |
| Python | 庫存邏輯運算 |
| Google Colab | Python 執行環境 |
| gspread | Google Sheets 操作 |
| Google Apps Script | Google Form 同步更新 |

---

## 系統功能
### 零件借出
- 扣除庫存數量
- 防止庫存不足

### 零件歸還
- 自動增加庫存

### 零件上架
- 增加既有零件數量
- 新增全新品項

### 零件報廢
- 扣除損壞或淘汰零件

### 即時庫存同步
- 自動更新倉儲狀態
- 同步顯示於 Google Form

---

## 表單輸入格式
輸入格式：
```text
類別-品項-數量
```

範例：
```text
馬達-IG-32PGM-2
電控-ESP32-1
Gear-40T-2
皮帶-420w15-1
```
---

## 安裝方
### 1. 複製 Google Form
建立零件借還表單。

### 2. 建立 Google Sheets
作為借還資料與庫存資訊儲存。

### 3. 開啟 Google Colab

安裝必要套件：
```bash
pip install gspread google-auth
```

### 4. 設定 Google Sheet ID
修改程式中的：
```python
sheet_id = "YOUR_SHEET_ID"
```

### 5. 設定 Apps Script
將 Apps Script 綁定至 Google Sheets 並執行同步功能。

---

## 專案檔案架構
```text
project/
│
├── inventory_system.ipynb      # Colab 倉儲系統程式
├── apps_script.js              # Google Apps Script
├── README.md
│
└── Google Sheets
      ├── 借還紀錄
      └── 即時庫存(E1)
```

---

## 系統特色
- 雲端化管理
- 即時同步
- 自動更新庫存
- 多人共同使用
- 可擴充架構
- 低成本部署

---

## 未來規劃

### Web 化管理介面
建立完整倉儲後台系統。

### QR Code / Barcode 掃描
提升借還效率並降低輸入錯誤。

### 低庫存通知
當庫存不足時自動提醒管理員。


---

## 適用場景
- 機器人團隊倉儲管理
- 實驗室設備管理
- 社團器材借用
- 教學空間器材管理
- 小型倉儲管理

---

## 作者資訊

專題名稱：倉儲零件管理系統

開發工具：
- Python
- Google Colab
- Google Sheets
- Google Apps Script

開發目的：  
建立一套低成本、可擴充且易維護的智慧化倉儲管理系統。
