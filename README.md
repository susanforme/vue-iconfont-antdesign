# vue-iconfont-antdesign

## 安装

```
yarn add vue-iconfont-antdesign

npm install vue-iconfont-antdesign

```

## 全局引入

```JavaScript

import IconFont from 'vue-iconfont-antdesign'
//配置对象可以传递name属性,配置组件名
Vue.use(IconFont,{name:"VueIcon"})

```

## 属性

| 属性      | 含义                      |
| --------- | ------------------------- |
| name      | 图标名字                  |
| className | 类名                      |
| color     | 颜色,优先级高于 class     |
| size      | 字体大小,优先级高于 class |
| styleData | 字体样式                  |
