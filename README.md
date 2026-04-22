# AutoSphere - QHE4103 Online Car Sale 🏎️

## Online Car Sale Website
**Group Project Repository**

This project is developed for the **Fundamentals of Web Technology** coursework.  
The goal is to design and implement an **Online Car Sale** website, where sellers can register, log in, and add car advertisements, while buyers can search for cars by model and year.

The project is divided into two phases:
- **Phase A**: Front-end development with HTML, CSS, and JavaScript (Using Next.js App Router, Tailwind CSS, GSAP)
- **Phase B**: Back-end development with PHP, MySQL, and session handling

This repository contains the Next.js (App Router) frontend architecture. It features a premium, Apple-like dark mode UI, smooth scrolling (Lenis), and GSAP-driven 3D scroll animations.

> **Member 1 (wangchaoyu):** I have completed the global layout, navigation, footer, smooth scrolling engine, and the main Awwwards-style homepage. Please read the frontend guidelines below before you start building your features.

---

## 🚀 Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ 前端开发指南 (Next.js 规范) - For Member 2, 3, 4

为了保持项目极高的架构专业感和代码整洁度，我已经为大家规范化了目录结构，并预留了标准的路由入口。请各位在开发时遵循以下协作指南：

### 1. 你的页面在哪里？(路由结构)
我们使用的是 **Next.js App Router** 范式，所有的页面路由都在 `src/app/` 目录下。我已经为每个人建好了初始的 `page.js` 文件：

- **Member 2 (luojingyu)**: 
  - 注册页面 👉 `src/app/register/page.js` (`/register`)
- **Member 3 (juzi)**: 
  - 登录页面 👉 `src/app/login/page.js` (`/login`)
  - 卖家后台 👉 `src/app/seller/page.js` (`/seller`)
- **Member 4 (taogefei)**: 
  - 汽车搜索 👉 `src/app/search/page.js` (`/search`)
  - 添加汽车 👉 `src/app/add-car/page.js` (`/add-car`)
  - 汽车详情页 👉 `src/app/car/[id]/page.js` (`/car/[id]`)

**🚨 注意**：你只需要在你对应的 `page.js` 中编写你自己的业务页面即可。

### 2. 关于全局 Navigation 和 Footer
全局的毛玻璃导航栏 (`Navbar`)、暗黑页脚 (`Footer`) 以及全局的 Lenis 丝滑滚动引擎我已经全部在根布局 `src/app/layout.js` 中集成完毕。

你在开发你的 `page.js` 时，**绝对不需要**操心全局导航、页面头部和底部的引入。直接把你的页面当做主体内容去写就好了，Next.js 会自动将你的页面注入到 Navbar 和 Footer 之间。

### 3. "use client" 指令 (至关重要)
如果你在开发中需要使用 React Hooks（如 `useState`, `useEffect`）、DOM 浏览器 API 或客户端事件监听器（如 `onClick`, 表单的 `onSubmit`），**你必须在你的 `page.js` 文件的第一行（最顶部）加上 `"use client";`**。

### 4. 公共目录规范说明
- `src/components/ui/` 👉 用于存放原子级别的通用 UI 组件，如 `Button`, `Input`, `Card` 等。
- `src/components/layout/` 👉 存放全局结构的组件（`Navbar`, `Footer`, `SmoothScroll`）。
- `src/components/home/` 👉 存放首页专属的复杂组件（`Hero`, `BentoBox` 等）。
- `src/utils/` 👉 存放公共工具函数。
- `src/lib/` 👉 存放第三方库的初始化实例或全局配置常量。

---

## 👥 Team Members

| Member | GitHub Username | Role |
|---|---|---|
| Member 1 | `wangchaoyu` | Project Integration / Public Pages |
| Member 2 | `luojingyu` | Seller Registration Developer |
| Member 3 | `juzi` | Login / Session / Seller Flow Developer |
| Member 4 | `taogefei` | Car Data / Search Developer |

---

## 📋 Task Allocation

### Member 1 - `wangchaoyu`
**Main Responsibility:** Project integration, public pages, and team coordination
**Phase A:** Develop Homepage, build navigation structure, maintain global styles.
**Phase B:** Coordinate project integration, help with database design.

### Member 2 - `luojingyu`
**Main Responsibility:** Seller Registration
**Phase A:** Design Seller Registration UI, client-side validation.
**Phase B:** Maintain sellers table, registration data insertion.

### Member 3 - `juzi`
**Main Responsibility:** Login / Session / Seller Flow
**Phase A:** Design Login page, connect seller flow.
**Phase B:** Login authentication, session handling, access control.

### Member 4 - `taogefei`
**Main Responsibility:** Car Data / Search
**Phase A:** Add Car page, Search page, search result/detail display.
**Phase B:** Maintain cars table, data insertion, search function queries.

---

## 🔄 Collaboration Workflow

This project follows a GitHub collaboration workflow:
- `main` branch: stable and deployable version
- `develop` branch: integration branch
- `feature/*` branches: individual feature development

Each member works on their own feature branch and merges changes into `develop` through pull requests.
