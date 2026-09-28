# 个人博客网页工程

这是根据已确认的 **Sketch Draft 1（修订版）**、**视觉表达卡 v1** 和 Stitch **Vision Draft 1** 制作的桌面网页。页面可以浏览，但姓名、介绍、文章、日期与照片说明目前都是**示例内容**，发布前请替换。

## 本地打开

本机需要 Node.js 20.19+ 或 22.12+。在 `blog-site` 文件夹运行：

```bash
npm install
npm run dev
```

打开命令显示的本地地址；默认是 `http://127.0.0.1:5173/`。本次交付的构建版预览已在 `http://127.0.0.1:4174/` 启动。如果端口被占用，以命令实际显示的地址为准。

## 构建与检查

```bash
npm run typecheck
npm run build
npm run preview
```

`npm run build` 会先检查 TypeScript，再把可部署文件写入 `dist/`。`npm run preview` 用来本地查看这份构建结果。直接双击 `dist/index.html` 不等于运行网页，请使用预览命令。

## 手动部署到 Vercel

1. 在 Vercel 网站新建项目，导入 GitHub 仓库 `Tracy4399/test`。这个仓库的根目录就是网站工程，**Root Directory** 保持默认 `./`。
2. Framework Preset 选 **Vite**；Install Command 为 `npm ci`，Build Command 为 `npm run build`，Output Directory 为 `dist`。第一版不需要环境变量。
3. 在 Vercel 网页上检查设置和预览，再由你手动点击部署。本工程的 `vercel.json` 让文章详情等路径在刷新时仍能打开。

这里没有自动推送、部署命令、数据库或网页内容管理入口。项目内部的 `design-reference/`、根目录 `AGENTS.md` 与 `项目记录.md` 不会进入 `dist/`。

## 内容更新

- 文章、分类、个人介绍、照片分组及说明放在 `src/content.ts`。
- 网站要展示的照片放在 `public/images/`，在 `src/content.ts` 里用 `/images/文件名.jpg` 引用。Vite 会把它们复制到 `dist/images/`。
- 你提供真实内容后，由 AI 更新本地文件，运行本地预览和构建检查，最后由你手动部署新版。
- 当前照片取自已确认 Vision Draft 1 的 Stitch 导出页面，均作示例；其中海港照片自带 Stitch 生成的画面字样，正式使用前需替换。Stitch 导出截图与代码保存在本机 `design-reference/` 供内部核对，不随 Git 提交。

## 目前能体验的路径

首页 → 近期文字 → 文章详情 → 返回；文字页 → 选择三类之一 → 打开文章 → 返回并保留筛选；首页照片入口 → 收集页两组照片 → 打开大图 → 左右切换 → 关闭。大图支持 Esc、方向键和点击遮罩关闭。

页面使用 React、TypeScript、Vite、Tailwind CSS。`1440×900` 是设计参考视口；内容可以向下延伸，较窄桌面窗口会重新排布。
