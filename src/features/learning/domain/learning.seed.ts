import type { WeeklyPlan } from "./learning.types";

export const sixtyDayBlueprint: WeeklyPlan[] = [
  {
    week: 1,
    title: "Week 1 - 打底與定位",
    objective: "盤點能力缺口，建立可持續輸出節奏",
    dayRange: [1, 7],
    nodes: [
      { day: 1, label: "起點盤點", description: "定義 60 天主題與衡量指標" },
      { day: 4, label: "首輪輸出", description: "完成第一份學習摘要" },
      { day: 7, label: "週回顧", description: "整理阻礙與下週調整" },
    ],
  },
  {
    week: 2,
    title: "Week 2 - 核心概念",
    objective: "完成核心知識地圖並建立題庫",
    dayRange: [8, 14],
    nodes: [
      { day: 8, label: "概念地圖", description: "建立主題心智圖" },
      { day: 11, label: "題庫啟動", description: "新增 20 張複習卡" },
      { day: 14, label: "週測驗", description: "完成一次自測" },
    ],
  },
  {
    week: 3,
    title: "Week 3 - 專題拆解",
    objective: "拆成可執行子任務並安排節奏",
    dayRange: [15, 21],
    nodes: [
      { day: 15, label: "拆解專題", description: "定義里程碑" },
      { day: 18, label: "中段檢查", description: "確認產出品質" },
      { day: 21, label: "Demo v1", description: "提交第一版成果" },
    ],
  },
  {
    week: 4,
    title: "Week 4 - 反覆練習",
    objective: "透過刻意練習提升速度與正確率",
    dayRange: [22, 28],
    nodes: [
      { day: 22, label: "速度訓練", description: "設定限時任務" },
      { day: 25, label: "錯題修正", description: "整理錯誤模式" },
      { day: 28, label: "週成果", description: "產出週報" },
    ],
  },
  {
    week: 5,
    title: "Week 5 - 情境應用",
    objective: "將知識轉成情境案例",
    dayRange: [29, 35],
    nodes: [
      { day: 29, label: "案例收集", description: "蒐集 5 個真實場景" },
      { day: 32, label: "案例實作", description: "完成 2 個實戰演練" },
      { day: 35, label: "復盤", description: "記錄可優化流程" },
    ],
  },
  {
    week: 6,
    title: "Week 6 - 進階整合",
    objective: "串聯多個能力點形成完整流程",
    dayRange: [36, 42],
    nodes: [
      { day: 36, label: "流程圖", description: "定義端到端步驟" },
      { day: 39, label: "中型任務", description: "完成一次整合演練" },
      { day: 42, label: "品質檢查", description: "補齊薄弱區塊" },
    ],
  },
  {
    week: 7,
    title: "Week 7 - 強化輸出",
    objective: "提高穩定輸出與教學能力",
    dayRange: [43, 49],
    nodes: [
      { day: 43, label: "公開分享", description: "發佈教學內容" },
      { day: 46, label: "回饋迭代", description: "依回饋調整內容" },
      { day: 49, label: "週總結", description: "歸納高價值方法" },
    ],
  },
  {
    week: 8,
    title: "Week 8 - 衝刺收尾",
    objective: "完成最終成果與 Day 57-60 衝刺節點",
    dayRange: [50, 56],
    nodes: [
      { day: 50, label: "最終專題啟動", description: "確認交付範圍" },
      { day: 53, label: "預演", description: "完成一次全流程演練" },
      { day: 56, label: "上線準備", description: "整理素材與發表稿" },
      { day: 57, label: "Day 57 檢核", description: "完成最終清單第一輪" },
      { day: 58, label: "Day 58 補強", description: "針對弱點加強" },
      { day: 59, label: "Day 59 預發佈", description: "發表前最後驗證" },
      { day: 60, label: "Day 60 發佈", description: "交付成果並做回顧" },
    ],
  },
];
