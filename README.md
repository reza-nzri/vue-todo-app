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
### Development Setup
### Using `Default Tasks json` in Development Mode

To help you get started quickly, we have included a set of default tasks that will be used in `development mode`. Follow the steps below to **set up your environment**:

1. **Clone the Repository**:
```sh
   git clone https://git2.intentive.de/training-and-internship/internship-reza-nazari/vue-todo-app.git
   cd vue-todo-app
```
 
2. **Install Dependencies**:
```sh
npm install
```
 
3. **Set Up Environment Variables**:  
Create a `.env` file in the root directory of your project. You can use the provided `.env.example` file as a template.
```sh
cp .env.example .env
```
 
4. **Ensure `VITE_APP_ENV` is Set to `development`** :
Open the `.env` file and make sure the `VITE_APP_ENV` variable is set to `development`.

```sh
VITE_APP_ENV=development
```
 
5. **Run the Development Server** :
Start the development server to see the default tasks in action.
```sh
npm run dev
```

### Default Tasks 
In development mode, the application will load a set of default tasks defined in `public/dummyTasks.json`. These tasks provide a quick way to see how the application behaves with initial data. If you need to modify the default tasks, you can edit the `public/dummyTasks.json` file.

### Additional Notes 
- Ensure your `.env` file is not committed to the repository by keeping it listed in `.gitignore`.
- For production, you can remove the `VITE_APP_ENV` variable or set it to `production` to disable loading default tasks.


# Markdown Files Contents List
1. [Solve Possible Problems](src/assets/README/01_solve_possibe_problems.md)
2. [Daily Tasks](src/assets/README/02_daily_tasks.md)
3. [CSS Class Names Conventions](src/assets/README/03_css_class_names_conventions.md)
4. [Async vs Await](src/assets/README/04_async_vs_await.md)
5. 



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

## 📂 [Folder Structure](folder-structure.tree)

```bash
tree /F /A > folder-structure.md
tree --gitignore > folder-structure.txt

# Run the tree command and exclude the directories manually
tree /F | Out-File -FilePath folder-structure.md

# Run the tree command excluding specific directories (using `findstr` to filter out lines)
tree /F | findstr /V /C:".idea" /C:"venv" /C:\Users\reza.nazari\Desktop\WorkDesk\GitLab\develop\python-image-comparison\lfw" > folder-structure.md
```

### Use [`structure-codes/cli`](https://github.com/structure-codes/cli) to generate a structure file

```bash
struct -i dist -o folder-structure.tree
```

#### Use this `Tree: CTC.vscode-tree-extension` VS Code Extension

# My personal .vscode configs

## .vscode/extensions.json

```bash
{
  "recommendations": [
    "Vue.volar",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode"
  ]
}
```

## .vscode/settings.json

```bash
{
    "prettier.configPath": "./.prettierrc.json",
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

# My VS Code Extensions

- CSS Tree
- Auto Rename Tag
- Auto Rename Tags
- Material Icon Theme
- WSL
- Git Graph
- Git History
- Auto Import
-

# Prop Drilling

## ❓🤔 Questions

1. Verwendung von Classes and Modules
2. wird `<script>` unten oder oben von code benutz?

![Giphy Todolist](https://media.giphy.com/media/B7o99rIuystY4/giphy.gif)

# Document of the working method

wie kann ich methode oder functions habe damit ich neue task instance object erstellen und alle crude methode such as delete add update get usw haben kann und wo anders sie nutzen kann? z.b. möchte in TopBar wenn man auf auf button add-button clickt dann neue task erstellen kann mit v-model und sollte die prop openDisplay: auf true gesezen werden und deswegen nur die inhalte von diesem task in TaskDetails aufgemacht und angezeigt werden und dabei automatisch die priority: "medium" und neue autoincrement id und subject: immer auf "Enter a new subject..." und description: "Entere a new description " und dueDateTime: immer auf 5 min später als aktuelle datum und completed: auf false setzen.

list-board ist nur für display.
der user darf jeder zeit eine extestierete task aufmachen (nicht gleichzeitig. nur eine ) und dann nur in TaskDetails die task props (nur dieser props: subject, description, dueDateTime, priority) ändern zu können.

die tasks werden in zwei bereiche angezeigt, öffene tasks in tasks-dashboard und fertige tasks in done-dashboard.

wenn man auf checkbox clickt und isChecked true ist, dann muss completed auf true gesezen werden und gliechzeitig dynamic diser entsprechende task in done-dashboard angezeigt werden.
alle tasks in done-dashboard bekommen einen filter gray mit opacity als zeichen für fertig und erledigt.

wenn man in TaskDetails> auf icon="fa-solid fa-calendar-days" clickt dann sollte dieser classic kalender date picker angeigt werden und da kann man date yyyy-mm-dd und Uhrzeit hh:mm:ss auswählen und in dueDateTime: "2023.08.24 - 08:51:30", mit genau diesem format die daten speichern.

man kann mit TaskDetails> priority-dropdown gehen und den priority ändern und in priority: "ausgewählte priority aus drop down menue" speichern.

# Delete Branch

```bash
git branch -d <branch-name>  # Use -D if needed

git push origin --delete <branch-name>    # Delete a Branch Remotely (Optional)

# Push Changes to the Remote Repository
git push origin <branch-name>
```





# Compare Branches

```bash
git diff branch1..branch2

# Viewing Differences
git diff branch1..branch2 -- path/to/file
```



# [Breakpoints](https://getbootstrap.com/docs/5.0/layout/breakpoints/)
 customizable widths that determine how your responsive layout behaves across device or viewport sizes in Bootstrap.



 # CSS Converntions
 Vermeide ID-Selektoren; Wähle eine Konvention und halte dich daran und sag mir die name davon, welche du genommen hast;  Verwende Hilfsklassen wie .text-center, .m-0; Meide übermäßige Verschachtelung: Halte CSS-Selektoren so flach wie möglich; nutze SMACSS, OOCSS, BEM muss auf jeden fall benutzt werden



 # SASS
 Install
 ```bash
npm install -D sass sass-loader@10
 ```