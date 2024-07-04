# Vue Todolist

This is my to-do list application in Vue.

## 🎯 Description

The `vue-todolist` repository is a **task management application**, a productivity tool created to practice and learn the `Vue` Framework.
\
An application that allows you to list your pending tasks, both on a personal level for "shopping" or "reminders" and on a professional level to manage your projects.

## 🏗️ Developed with

[![NPM](https://img.shields.io/badge/npm-CC3534.svg)](https://www.npmjs.com/)
[![Prettier](https://img.shields.io/badge/prettier-F8BC45.svg?logo=prettier&labelColor=1A2B34)](https://prettier.io/)

## 🔖 Changelog | Tags versions `vue-todo-app`

**Sorted by:** latest version on top

### [v0.2.0] - 2024-06-00

#### Added

Uses..

### [v0.1.0] - 2024-06-20

#### Added

Uses Initial Vue Project Creation

## 🚀 Commands

### Run APP

> npm i  
> npm run dev

### Create `.nvmrc` Version File

A configuration file used in Node. js projects to stores the current Node.js version in the `.nvmrc` file (Node Version Manager), which can be used by `nvm` (Node Version Manager) to load the correct Node version for your project.

```sh
node --version > .nvmrc
```

### Create `.pvnr` File

Current used project version number

```sh
echo 0.1.0 > .pvnr
```

### Automating Version Bumps:

# Components .vue

1. AddTaskBoard
   1. TaskSubject
   2. SortDropdown
   3. AddTaskButton
2. TodoListsBoard

   1. ToDosView

      1. TodoList

   2. DoneListView
      1. TodoList

3. TodoList

   1. Checkbox
   2. TaskSubject
   3. TimestampDisplay
   4. PriorityIndicator

4. TaskDetailsBoard
   1. TimestampDisplay
   2. PriorityDropdown
   3. TaskSubject
   4. TaskDescription

## 📂 Folder Structure

Updated: 21.06.2024 13:47

```bash
tree /F /A > folder-structure.md
tree --gitignore > folder-structure.txt

# Run the tree command and exclude the directories manually
tree /F | Out-File -FilePath folder-structure.md

# Run the tree command excluding specific directories (using `findstr` to filter out lines)
tree /F | findstr /V /C:".idea" /C:"venv" /C:\Users\reza.nazari\Desktop\WorkDesk\GitLab\develop\python-image-comparison\lfw" > folder-structure.md
```

```bash
vue-todo-app
├── README.md
├── env.d.ts
├── getVersion.js
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── manifest.json
│   └── user-documents
│       ├── media
│       │   ├── gif
│       │   ├── img
│       │   └── video
│       └── pdf
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── css
│   │   │   ├── base.css
│   │   │   └── noscript.css
│   │   ├── images
│   │   │   ├── backgrounds
│   │   │   └── logos
│   │   │       ├── js-logo.png
│   │   │       ├── logo.ico
│   │   │       ├── logo.svg
│   │   │       └── todolist-logo1.svg
│   │   └── main.css
│   ├── components
│   │   ├── __tests__
│   │   ├── icons
│   │   └── main-page
│   │       ├── Checkbox.vue
│   │       ├── PriorityIndicator.vue
│   │       ├── TaskSubject.vue
│   │       ├── TimestampDisplay.vue
│   │       ├── add-task-board
│   │       │   ├── AddTaskBoard.vue
│   │       │   ├── AddTaskButton.vue
│   │       │   └── SortDropdown.vue
│   │       ├── task-details-board
│   │       │   ├── PriorityDropdown.vue
│   │       │   ├── TaskDescription.vue
│   │       │   └── TaskDetailsBoard.vue
│   │       └── todo-lists-board
│   │           ├── TodoListsBoard.vue
│   │           ├── done-list-view
│   │           │   └── DoneListView.vue
│   │           └── to-dos-view
│   │               └── ToDosView.vue
│   ├── main.ts
│   ├── router
│   │   └── index.ts
│   └── views
│       └── HomeView.vue
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── tsconfig.vitest.json
├── vite.config.ts
└── vitest.config.ts
```

# Prop Drilling

## ❓🤔 Questions

1. Verwendung von Classes and Modules
2. wird `<script>` unten oder oben von code benutz?

![Giphy Todolist](https://media.giphy.com/media/B7o99rIuystY4/giphy.gif)
