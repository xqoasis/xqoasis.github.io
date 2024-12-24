---
title: "徒步记录：{{ page.trail_name }}"
date: YYYY-MM-DD
categories:
  - 徒步
tags:
  - {{ page.location }}
  - 徒步
header:
  image: /assets/images/hikes/{{ page.trail_name | slugify }}/header.jpg
  caption: "徒步地点：{{ page.location }}"
toc: true
toc_sticky: true

# 徒步信息
trail_info:
  name: "路线名称"
  location: "具体地点"
  distance: "总距离"
  elevation_gain: "累计爬升"
  difficulty: "难度级别"
  duration: "用时"
  date: "徒步日期"
---

<div class="hiking-stats">
  <div class="stat-grid">
    <div class="stat-item">
      <div class="stat-value">{{ page.trail_info.distance }}</div>
      <div class="stat-label">总距离</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">{{ page.trail_info.elevation_gain }}</div>
      <div class="stat-label">累计爬升</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">{{ page.trail_info.difficulty }}</div>
      <div class="stat-label">难度级别</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">{{ page.trail_info.duration }}</div>
      <div class="stat-label">总用时</div>
    </div>
  </div>
</div>

## 路线概览

[在这里描述路线的基本情况，包括起点、终点、路线特点等]

## 准备工作

### 装备清单
- 徒步鞋
- 登山杖
- 背包
- 水和食物
- 急救包
- 导航设备

### 交通信息
[描述如何到达起点，停车信息等]

## 徒步过程

### 第一段：起点到XX点
[详细描述这段路程的情况，配上照片]

{% include figure image_path="/assets/images/hikes/trail-section-1.jpg" caption="第一段路程的风景" %}

### 第二段：XX点到XX点
[继续描述...]

## 摄影记录

{% include gallery caption="徒步过程的精彩瞬间" %}

## 个人感受与建议

### 最佳时间
[什么季节最适合徒步这条路线]

### 难度分析
[详细说明路线的困难之处和注意事项]

### 个人感受
[分享个人体验和建议]

## 实用信息

### 路线GPS信息
[可以插入GPS轨迹或链接]

### 相关链接
- [官方网站]()
- [天气预报]()
- [停车信息]()