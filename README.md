# Digital-business-card

Developed a responsive personal digital business card website using HTML, CSS, JavaScript, and AI-assisted programming tools. Implemented personal branding, project showcase, and contact modules while utilizing AI for rapid development, debugging, and interface optimization.

利用HTML、CSS、JavaScript以及AI辅助编程工具(Codex)，开发了一个响应式个人数字名片网站。在开发过程中，实现了个人品牌展示、项目展示和联系方式模块，并借助AI技术加速了开发、调试及界面优化工作。

The project is a purely static single-page site featuring a cartoon avatar, a personal profile, keywords, contact details and multiple theme options.
Live Demo:[https://chiligarlic768.github.io/Digital-business-card/]
Live URL: [https://song-shukai-namecard.netlify.app](https://song-shukai-namecard.netlify.app)
![网页展示](./S.png)
## Features

- A minimalist personal business card page in the style of Apple’s official website
- Responsive layout, optimised for desktop, tablet and mobile devices
- 4 theme options: Light, Dark, Industrial, Energy
- Theme preferences saved via `localStorage`
- GitHub link, email link and ‘Copy Email’ button
- Built-in avatar resources; no reliance on remote images

## File Structure

```text
.
├── index.html
├── styles.css
├── script.js
└── assets/
    └── avatar-song-shukai.png
```

## Local Preview

Simply open `index.html` directly in your browser.

Alternatively, you can use any static server to serve the files, for example:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Modification Guide

- Page content: Edit `index.html`
- Visual styles and theme colours: Edit `styles.css`
- Theme switching and email copying logic: Edit `script.js`
- Profile picture: Replace `assets/avatar-song-shukai.png`

Theme storage key:

```js
song-shukai-card-theme
```

## Deployment

The site is currently deployed to Netlify:

```text
https://song-shukai-namecard.netlify.app
```

To redeploy, simply upload the following files from the project root directory:

- `index.html`
- `styles.css`
- `script.js`
- `assets/avatar-song-shukai.png`

No npm dependencies need to be installed, and no build commands are required.
