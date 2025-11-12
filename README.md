# Idle Fantasy｜奇幻策略放置链游 - 限时预售开启

本项目是 Idle Fantasy 的静态宣传落地页，包含首屏主视觉、游戏简介与区块链玩法、礼包预售、社区与白皮书四大模块。页面采用浅蓝、金白、橙金为主色，风格明亮梦幻，兼容移动端与桌面端。

## 已完成功能
- 响应式导航栏：半透明白背景，滚动变浅金；锚点跳转与移动端折叠菜单
- 首屏主视觉：固定背景/轻视差，左侧标题与按钮；右下角“猫耳币系统”信息卡
- 游戏简介区：区块链玩法要点说明 + 猫耳币小图标
- 轮播组件：自动播放、手动点击、触摸滑动、指示点
- 礼包预售区：三档礼包卡片（基础/精英/传奇），价格、限量、特权说明
- 社区：社群按钮，底部联系方式与法务链接（底部“猫耳币经济白皮书”已移除）
- 动效与细节：CTA 渐变金按钮、悬浮高亮、滚动提示浮动动画

## 页面入口与锚点
- `/index.html`
  - `#section-hero` 首屏主视觉
  - `#section-game-intro` 游戏介绍（内含区块链玩法要点）
  - `#section-chain-feature` 区块链玩法跳转锚（位于介绍段落之后）
  - `#section-presale` 礼包预售
  - `#section-community` 社区与白皮书

## 尚未实现
- 真实购买/支付流程（需要后端或第三方支付，不在静态站点能力范围内）
- 白皮书与社群实际链接（当前占位为 #）
- 数据统计/报名表单（可用 RESTful Table API 追加）

## 建议下一步
1. 提供白皮书 PDF/网页链接，并替换占位链接
2. 配置 Discord/Telegram/Twitter 实际链接
3. 使用 RESTful Table API 新增“预售登记”表单，收集邮箱/礼包意向
4. 为礼包卡片加入阶段性价格展示与倒计时
5. 增加多语言（中文/英文）切换

## 公开 URL
- 站点：发布后由平台生成
- 图片资源：
  - 品牌图标（1）：https://page.gensparksite.com/v1/base64_upload/fe7a287b0c966b00807d3e2c0a01feac
  - 首屏背景（2）：https://page.gensparksite.com/v1/base64_upload/4eadf5eec75935d7350ce4bb3d754eba
  - 猫耳币图标（3）：https://page.gensparksite.com/v1/base64_upload/47f3258fb55c06f102ee2f7788f55d69
  - 轮播 1-5（4-8）：
    - https://page.gensparksite.com/v1/base64_upload/304b5dc208133cad0c0cab93ffdf7cc2
    - https://page.gensparksite.com/v1/base64_upload/ff42572e065b9a7e6a7500a25473746c
    - https://page.gensparksite.com/v1/base64_upload/3249c204018d4dad1b79f16253e87001
    - https://page.gensparksite.com/v1/base64_upload/d4cb267addf68959851e977dbd37388c
    - https://page.gensparksite.com/v1/base64_upload/9ebd4219e37c424517377569c1d52651

## 数据模型与服务
当前未使用数据存储。若需添加表单/统计，可通过 RESTful Table API 新建表：
- `presale_signups`：id, email(text), pack(text), created_at(datetime)

## 部署
要将网站发布上线，请前往 Publish（发布）标签，一键发布。本平台会自动完成部署并提供公开访问 URL。
