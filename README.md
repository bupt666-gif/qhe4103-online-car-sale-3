# AutoSphere - QHE4103 Online Car Sale 🏎️

This repository contains the Next.js (App Router) frontend architecture for our **Online Car Sale Platform**. 
It features a premium, Apple-like dark mode UI, smooth scrolling (Lenis), and GSAP-driven 3D scroll animations.

> **Member 1 (wangchaoyu):** I have completed the global layout, navigation, footer, smooth scrolling engine, and the main Awwwards-style homepage. Please read the following guidelines before you start building your features.

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
我们使用的是 **Next.js App Router** 范式，所以所有的页面路由都在 `src/app/` 目录下。我已经为每个人建好了初始的 `page.js` 文件：

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

**这意味什么？**
你在开发你的 `page.js` 时，**绝对不需要**操心全局导航、页面头部和底部的引入，也不需要自己写 `<nav>` 或 `<footer>`。直接把你的页面当做主体内容（`children`）去写就好了，Next.js 会自动将你的页面注入到 Navbar 和 Footer 之间。

### 3. "use client" 指令 (至关重要)
Next.js App Router 默认所有组件都是 **Server Components (服务端组件)**。
如果你在开发中需要使用到以下特性：
- React Hooks（如 `useState`, `useEffect`, `useRef` 等）
- DOM 浏览器 API（如 `window`, `document`）
- 客户端事件监听器（如 `onClick`, `onChange`, 表单的 `onSubmit`）

**你必须在你的 `page.js` 文件的第一行（最顶部）加上 `"use client";`**。
例如：
```jsx
"use client";

import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  // ...
}
```

### 4. 公共目录规范说明
我已经清理和规范化了 `src` 下的目录架构，如果你要创建或引入新模块，请遵循以下约定：
- `src/components/ui/` 👉 用于存放原子级别的通用 UI 组件，如 `Button`, `Input`, `Card` 等。大家共用的组件请放这里。
- `src/components/layout/` 👉 存放如 `Navbar`, `Footer`, `SmoothScroll` 这样决定全局结构的组件。
- `src/components/home/` 👉 存放首页专属的复杂组件（如 `Hero`, `BentoBox` 等），其他人一般不需要碰这里。
- `src/utils/` 👉 存放公共工具函数（比如日期格式化、通用的 GSAP 动画 Hook 等）。
- `src/lib/` 👉 存放第三方库的初始化实例或全局配置常量（如封装好的 API axios 实例等）。

---

*Happy Coding! Let's get an A+ on this project!* ✨
