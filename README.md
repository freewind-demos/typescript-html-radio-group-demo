TypeScript HTML Radio Group Demo
===========================

一个简单的HTML Radio Group示例，使用TypeScript和Vite构建。

## Radio Group原理

Radio Group是HTML中实现单选功能的一种机制。其核心原理是：

1. **name属性决定分组**：
   - 所有具有相同`name`属性的radio input会自动形成一个组
   - 例如本例中的`name="fruit"`让所有选项都属于同一个水果选择组
   - 浏览器会自动确保同一个`name`下只有一个radio能被选中

2. **互斥机制**：
   - 当用户选择组内的一个radio时，同组的其他radio会自动取消选中
   - 这个互斥行为是由浏览器原生实现的，不需要JavaScript代码
   - 一旦设置了相同的`name`，这个互斥行为就会自动生效

3. **label的作用**：
   - 将radio input包裹在label标签中
   - 这样点击文本时也能触发选择
   - 提升了用户体验，增加了可点击区域

示例代码：
```html
<label>
    <input type="radio" name="fruit" value="apple">
    苹果
</label>
```

## 功能
- 展示了一个简单的单选按钮组
- 使用TypeScript处理用户交互
- 实时显示用户的选择

## 技术栈
- TypeScript
- Vite
- HTML/CSS

## 运行方法

```bash
pnpm install    # 安装依赖
pnpm dev        # 启动开发服务器
```

然后在浏览器中打开 http://localhost:5173

## 构建

```bash
pnpm build      # 构建生产版本
pnpm preview    # 预览构建结果
```

Note:

`esModuleInterop` is recommended to set to `true`,
since we can have consistent importing syntax with babel,
always use:

```javascript
import some from 'some'
```
