# DESIGN.md — 达富财务官网 (Dafu Finance)

## Product Goal and Audience

- **Goal**: 综合型企业官网 — 建立信任、展示财税服务与资质、引导电话/微信咨询（获客）。
- **Audience**: 珠三角（深圳/广州/东莞/佛山等）中小创业者、小微企业主、需要财税外包的企业。
- **Company**: 深圳市达富财务咨询有限公司（品牌：达富财务）。
- **Slogan**: 为每个创业者提供最专业的财税服务。
- **Core services**: 注册公司、记账报税；另有 16 项配套财税业务（共 18 项）。

## Visual Direction

现代简约 + 品牌「橙红渐变」点缀的动感企业风。以 Logo 的速度线几何语言贯穿全站（Hero 装饰、分隔元素、图标风格），实景照片（前台、晚宴、宣传单）建立真实感。白色为主、暖灰分区，橙色为交互强调色，专业不失亲和。

## Reference Sources

- `vendor/open-design/adapter/STATIC_POLICY.md` — 静态资源使用界限。
- `vendor/open-design/upstream/design-systems/corporate/DESIGN.md` — 选定 Corporate 专业基线。
- `vendor/open-design/upstream/design-systems/corporate/tokens.css` — 排版/间距/圆角/阴影 token 来源。
- `vendor/open-design/upstream/design-systems/corporate/components.html` — 组件密度与交互反馈依据（panel/metric/btn 模式）。
- `vendor/open-design/upstream/craft/anti-ai-slop.md` — 防 AI 同质化检查。
- `vendor/open-design/upstream/craft/typography-hierarchy.md` — 排版层级参考。
- 用户素材（4 张实拍图 + 宣传单）作为品牌事实与实景来源。

## Vendor Grounding

- **Applies to**: 新站视觉系统（本契约）。
- **Selected baseline**: `corporate`（结构化网格、信任优先层级），主色由保守蓝覆盖为品牌橙红渐变。
- **Token source**: `corporate/tokens.css` 的 spacing/type/radius/shadow 体系，色板整体替换为品牌色。
- **Component fixture**: `corporate/components.html` 的 btn/panel/metric/field 模式。
- **Anti-ai-slop checks**: 无默认 indigo/紫色渐变（主色为品牌橙红）；无 emoji 图标（lucide 线稿 SVG）；无虚构指标（仅使用宣传单真实事实：18 项业务、6 城覆盖、代理记账许可资质、2020 守合同重信用企业）；无 lorem/占位文案；Hero 避免「信任感双色渐变」模板，改用白底 + 品牌速度线几何装饰。
- **Intentional deviations**: 
  1. 主色从 corporate 蓝改为品牌橙红渐变（品牌资产要求）。
  2. 子代理 Image Manifest 中的 2 张 Unsplash 图与 1 张 AI 生成图被取消 — 用户实拍素材已足够，Hero 用纯 CSS/SVG 品牌几何替代（避免外部图源脆弱性）。
  3. logo-reference.jpg（Logo 照片）不上站，以 SVG 还原品牌标识。

## Design Tokens

```css
/* Colors */
--color-brand-1: #FF8A00;            /* 渐变起点（Logo 黄橙） */
--color-brand-2: #FF2D00;            /* 渐变终点（Logo 红橙） */
--gradient-brand: linear-gradient(100deg, #FF8A00 0%, #FF2D00 100%);
--color-accent: #FF3D00;             /* 主操作强调 */
--color-accent-soft: rgba(255, 61, 0, 0.06);
--color-bg: #FFFFFF;
--color-surface: #FFF8F3;            /* 暖灰分区 */
--color-text: #1E293B;
--color-text-muted: #64748B;
--color-border: #EDE4DC;
--color-gold: #B7791F;               /* 资质/荣誉点缀 */

/* Typography (中文系统字体栈，无外部字体) */
--font-display: 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Noto Sans SC', system-ui, sans-serif;
--font-body: same as display;
--text-h1: clamp(2.1rem, 5.5vw, 3.5rem);
--text-h2: clamp(1.6rem, 3.4vw, 2.3rem);
--text-h3: 1.25rem;

/* Spacing (corporate 8pt 体系) */
--space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
--space-5: 20px; --space-6: 24px; --space-8: 32px; --space-12: 48px; --space-16: 64px;
--section-y: 96px (desktop) / 68px (tablet) / 48px (phone)

/* Radius */
--radius-sm: 10px; --radius-md: 16px; --radius-lg: 24px; --radius-pill: 9999px;

/* Shadow / Focus / Motion */
--elev-raised: 0 20px 52px rgba(16, 24, 40, 0.10);
--focus-ring: 0 0 0 4px rgba(255, 61, 0, 0.22);
--motion-fast: 150ms; --motion-base: 240ms;
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
--container-max: 1180px;
```

## Component Inventory

| Component | data-component | 说明 |
|---|---|---|
| Navbar | `navbar` | 吸顶导航，滚动加白底阴影；Logo + 锚点 + 电话 CTA；移动端汉堡菜单 |
| Hero | `hero` | 左文案右 Logo 视觉；品牌速度线装饰；CTA 拨号 + 锚点；资质徽章 |
| Stats | `stats` | 真实事实指标带：18 项业务 / 6 城覆盖 / 代理记账许可 / 守合同重信用 |
| CoreServices | `core-services` | 注册公司、记账报税 两大卡片 |
| ServiceMatrix | `service-matrix` | 18 项业务网格（lucide 线稿图标） |
| Advantages | `trust-factors` | 6 大优势（正规/专业/务实/全面/低成本/便捷）+ 资质证书卡 |
| About | `about` | 公司简介 + 前台实景图 |
| Gallery | `atmosphere` | 活动晚宴 + 宣传单 实景画廊 |
| Contact | `contact-section` | 电话/地址/城市 + 微信二维码 |
| Footer | `footer` | 公司信息、导航、城市、版权 |
| FloatingCTA | `floating-cta` | 移动端底部常驻「电话咨询 / 微信咨询」 |

## Page Structure

单页锚点导航（首页）：Hero → Stats → CoreServices → ServiceMatrix → Advantages → About → Gallery → Contact → Footer。

## Responsive Rules

- Mobile（<768px）：单列；汉堡菜单；Hero 文案堆叠；服务矩阵 2 列；FloatingCTA 常驻底部。
- Tablet（768–1023px）：2–3 列网格；导航压缩。
- Desktop（≥1024px）：标准容器 1180px；服务矩阵 6 列；Hero 左右分栏。

## Interaction and Motion

- 悬停：卡片轻微上浮 + 品牌渐变边框/背景（--color-accent-soft）；按钮按下 2px 下沉。
- 滚动：区块经 IntersectionObserver 添加 `is-visible` 淡入上移（CSS transition，一次性）。
- 所有链接焦点态使用 --focus-ring。
- 电话号码使用 `tel:` 协议，可直接拨打。

## Image Manifest

| Local Path | Source | Usage |
|---|---|---|
| `/assets/images/reception-desk.jpg` | 用户提供（img2 前台实景） | About 区块 — 办公实景 |
| `/assets/images/brand-dinner.jpg` | 用户提供（img1 723 财税创新晚宴） | Gallery 区块 — 公司活动 |
| `/assets/images/flyer-info.jpg` | 用户提供（img4 宣传单） | Gallery 区块 — 公司宣传物料 |
| `/assets/images/qr-wechat.jpg` | 用户提供（img4 二维码裁剪） | Contact 区块 — 微信咨询二维码 |

注：logo-reference.jpg（img3）不参与站点展示，Logo 以 SVG 组件还原（`src/components/Logo.jsx`）。模板默认 `public/assets/images/placeholder.svg` 未使用，已删除。
