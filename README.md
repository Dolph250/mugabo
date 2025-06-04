
  

# 📘 Markdown Report: Personal Blog Website

  

## 📝 Project Description

  

This project is a **Personal Blog Website** developed using **React.js**. It allows integration of markdown content, resume embedding, and a responsive design.

  

---

  

<h2>⚙️ Tools and Frameworks Used</h2>

<table>
  <thead>
    <tr>
      <th>Tool/Framework</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>React.js</strong></td>
      <td>Frontend library used for building the dynamic UI</td>
    </tr>
    <tr>
      <td><strong>React Router</strong></td>
      <td>For routing different components like Resume, Assignment, and Home</td>
    </tr>
    <tr>
      <td><strong>React Markdown</strong></td>
      <td>To parse and display .md (Markdown) files in a clean HTML format</td>
    </tr>
    <tr>
      <td><strong>Git &amp; GitLab and GitHub for hosting</strong></td>
      <td>Version control and repository hosting</td>
    </tr>
    <tr>
      <td><strong>GitHub Pages</strong></td>
      <td>Deployment platform for the static site</td>
    </tr>
  </tbody>
</table>

  

**Why React.js?**

React is component-based, fast, and widely supported. It makes the project modular and easy to maintain or scale. For a static blog with interactive content, React was a perfect fit.

  

---

  

## 💻 Local Setup Instructions

  

### 1. Clone the Repository

```bash

git  clone  http://10.61.2.24:2025/LS2425229/myblog.git

``` 

or  clone the following repo
```bash

git  clone  https://github.com/Dolph250/mugabo.git

``` 

```bash
cd  myblog

```

### 2. Install Dependencies

```bash

npm  install

```

  

### 3. Run the Development Server

```bash

npm  start

```

  

Open your browser and navigate to:

📍 `http://localhost:3000/`

  

## 🔁 Git Workflow and Commit Strategy

  

### Branches Used:

  

-  **main**: Primary development and deployment branch.

-  **master (deprecated)**: Previously used for development (used for testing branch creation only).

  

### Commit Rationale:

  

Each commit includes a meaningful message that reflects:

  

- Initial React Set up (`This commit was for initial react setup`)

- Added homepage and about pages (`Styled homepage and added about page`)

- Conflict resolutions (`Resolve merge conflicts on main`)

  

- Linked with previous assignment (`Add link to the blog to resurrect to the markdown of previous assignment`)

- Deployment preparation 

  

**Why so?**

This ensures traceability, easy debugging, and easy to track changes as well as tracing project progress.

  
  
  

## 🔁 Git Workflow and Commit Strategy

  

### Branches Used:

  

-  **main**: Primary development and deployment branch.

-  **master (deprecated)**: Previously used for development.

-  **protected**: Backup or restricted branch (as per institutional settings).

  

### Git Commands in Practice:

`git init #performed only once to initialise git`

  

`git checkout -b main # Switching from master branch to main branch`

  

`git add . # Stage changes, by adding all changed files and directories`

  

`git add . # Stage changes, by adding all changed files and directories`

  

`git config --global user.name "LS2425229" # to set my account default identity`

  

`git config --global user.email "ls2425229@example.com" # to set my account default identity`

  

`git status # to keep track of recently change files/directories`

  

For syncing across multiple machines (I've been using couple of computers for pushing):

`git pull origin main # Pull the latest updates`

  

For pushing to main branch

  

`git push origin main # pushing to main branch`

  


## 🚀 Deployment Using GitHub Pages

To deploy this React project on **GitHub Pages**, I followed these steps:

### 1. Set the `homepage` in `package.json`

I added the following line to `package.json` file:
```json
"homepage": "https://dolph250.github.io/mugabo"
```

### 2. Install the `gh-pages` package

`npm install gh-pages --save-dev`
  
### 3. Add the following scripts to `package.json`

`"scripts":  {  "predeploy":  "npm run build",  "deploy":  "gh-pages -d build"  }`

### 4. Deployment

`npm run deploy`

### 5. Accessing

To access my blog, kindly visit:

[My blog](https://dolph250.github.io/mugabo)


## 📦 Future Improvements

  

- Enhance User Interface

- Add feature to toggle dark mode or light mode

- Linking future assignments to the current blog site

  

## 📷 Screenshot

![My Blog Preview](https://raw.githubusercontent.com/Dolph250/mugabo/refs/heads/main/public/Assets/screenshot.JPG?ref_type=heads)