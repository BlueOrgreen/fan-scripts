# 🧩 fan-scripts-monorepo

### 项目概况 

`fan-scripts-monorepo` 使用 `pnpm workspaces` 和 `TurboRepo` 进行项目管理和构建优化，统一维护多个子包：


### 💡 项目理念

该项目旨在构建一套 `统一但灵活` 的前端基础设施，为团队成员提供：

- 开箱即用 的开发体验
- 零配置 的最佳实践整合
- 渐进增强 的定制能力

### 📁 已发布子包列表

| 包名                  | 描述                        |
| ------------------- | ------------------------- |
| `@fan-scripts/code` | 统一的 ESLint、Prettier、TS 配置 |
| `@fan-scripts/utils` | 构建 CLI 工具、处理文件系统、进行网络请求、实现终端交互 等工具库 |
| `@fan-scripts/dev-scripts`  | 发包脚本         |
| `@fan-scripts/cli`  | 脚手架 CLI 工具（开发中）           |
| ...                 | 更多工具包持续开发中...             |


### 📦 发布说明（发布某个子包）

`pnpm run ci-publish` [子包]/[版本号]


```bash

pnpm run ci-publish @fan-scripts/code@1.0.6 

pnpm run ci-publish @fan-scripts/utils@1.0.0
```


<br />



## @fan-scripts/code

📦 `@fan-scripts/code` 是一个包含了团队内部统一代码规范的工具包，支持 ESLint、Prettier、TypeScript、Stylelint 等工具的共享配置，适用于前端工程项目中的代码质量统一管理

### 📦 安装

```bash
pnpm add -D @fan-scripts/code

或者

npm install --save-dev @fan-scripts/code
```

### 🛠 使用方法


`使用 ESLint 配置`

```js
// .eslintrc.js

// 使用 react eslint 配置
module.exports = {
  extends: ['@fan-scripts/code/eslint/react'],
};

// 使用 next eslint 配置
module.exports = {
  extends: ['@fan-scripts/code/eslint/next'],
};

```


### 📂 文件结构说明


```bash
@fan-scripts/code/
├── dist/
│   ├── cjs/       # CommonJS 构建产物
│   └── esm/       # ESM 构建产物
├── src/           # 源代码目录
├── package.json
└── README.md

```

