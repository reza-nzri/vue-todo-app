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

```bash
tree /F /A > folder-structure.md
tree --gitignore > folder-structure.txt

# Run the tree command and exclude the directories manually
tree /F | Out-File -FilePath folder-structure.md

# Run the tree command excluding specific directories (using `findstr` to filter out lines)
tree /F | findstr /V /C:".idea" /C:"venv" /C:\Users\reza.nazari\Desktop\WorkDesk\GitLab\develop\python-image-comparison\lfw" > folder-structure.md
```

# Prop Drilling

## ❓🤔 Questions

1. Verwendung von Classes and Modules
2. wird `<script>` unten oder oben von code benutz?

![Giphy Todolist](https://media.giphy.com/media/B7o99rIuystY4/giphy.gif)
