# 几何电竞官网设计构思

## 选定方案：暗黑电竞美学（Dark Esports Aesthetic）

**Design Movement**: 暗黑电竞 × 奢华黑金（Dark Esports × Luxury Black-Gold）

**Core Principles**:
1. 深黑底色（#0A0A0A / #111111）+ 金色强调（#D4AF37 / #F0C040），营造高端电竞俱乐部氛围
2. 细金线条、发光描边、光晕效果作为视觉分隔和层次感
3. 移动端优先，单页长滚动，分区锚点导航
4. 图片卡片为主要内容载体，点击放大预览

**Color Philosophy**:
- 背景：#0A0A0A（极深黑）、#111111（深黑卡片背景）
- 主色：#D4AF37（哑光金）、#F0C040（亮金高光）
- 文字：#FFFFFF（主文本）、#CCCCCC（次级文本）、#888888（辅助文本）
- 边框/线条：rgba(212,175,55,0.3)（半透明金）

**Layout Paradigm**:
- 顶部固定导航栏（黑底金字）
- 首屏 Hero：全宽背景图 + 品牌名 + 核心卖点 + CTA 按钮
- 游戏专区导航：横向滚动标签
- 各专区：2列卡片网格（移动端1列），卡片有金色边框悬停效果
- 底部：客服信息 + 版权

**Signature Elements**:
1. 金色细线分隔符（1px，带渐变透明）
2. 卡片悬停时金色发光边框（box-shadow: 0 0 15px rgba(212,175,55,0.4)）
3. 品牌名"几何电竞"用大号字体 + 金色渐变文字效果

**Interaction Philosophy**:
- 图片卡片点击后全屏弹窗预览
- 导航点击平滑滚动到对应区块
- 底部悬浮"添加客服"按钮，始终可见

**Animation**:
- 页面滚动时区块淡入（opacity 0→1，translateY 20px→0，200ms ease-out）
- 卡片悬停：border-color 金色发光，scale(1.02)，150ms
- 弹窗：scale(0.95)→scale(1) + opacity，200ms

**Typography System**:
- 中文：Noto Sans SC（400/700）
- 英文/数字标题：Rajdhani（600/700）
- 品牌名：Rajdhani 700 + 金色渐变
