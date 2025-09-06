

# @fan-scripts/dev-scripts

> 🚀 一款专为 `Monorepo/Polyrepo` 项目设计的自动化发包工具，提供版本管理、依赖管理、CHANGELOG 生成、Git 自动化等功能。

## ✨ 功能特性

### 1. 版本管理与发布

- 支持 `Monorepo` 和 `Polyrepo` 项目
- 自动识别代码变更与依赖更新
- 基于 conventional-changelog 自动生成 CHANGELOG
- 自动提交版本更新、生成 Git tag，并推送到远端

### 2. CLI + 界面化交互

- 基于 `commander` 构建命令行工具

- 使用 `inquirer` 提供交互式界面，避免误操作

- 多轮确认（工作区状态、分支校验、版本号、tag），安全可靠


### 3. 依赖管理

- 在 `Monorepo` 模式下可一键为子包添加依赖
- 检测依赖变动，支持可视化渲染依赖树
- 兼容 Monorepo 与 Polyrepo
- 对 monorepo 子包路径、tag 格式处理

基于 pnpm workspace 实现子包精准依赖安装

### 4. 工程化与可扩展性

- 模块化设计：每个功能独立为脚本模块（如 `releasePackage`, `addPackage`, `gitGkd`）
- 支持二次扩展，


# dev-script

本地执行脚本命令

```bash
pnpm dlx tsx ./src/cli.mts [command]

```