# <span style="color:#4f3">Table of Contents:</span>
- [Table of Contents:](#table-of-contents)
- [About Wisdom Vault](#about-wisdom-vault)
- [Glossary](#glossary)
- [Git](#git)
  - [git flow and tag](#git-flow-and-tag)
  - [Create a .nvmrc Version File](#create-a-nvmrc-version-file)
  - [Versonization | Semantic Versioning](#versonization--semantic-versioning)
  - [Bump Version](#bump-version)
  - [git tags (for release)](#git-tags-for-release)
    - [From the command line](#from-the-command-line)
- [Absolute \& Relative Paths](#absolute--relative-paths)
  - [Absolute Paths](#absolute-paths)
    - [Example:](#example)
  - [Relative Paths](#relative-paths)
    - [Example:](#example-1)
    - [Going Up a Directory:](#going-up-a-directory)
- [Definition of API](#definition-of-api)
  - [Restaurant-Menü-Beispiel:](#restaurant-menü-beispiel)
- [jQuery](#jquery)
  - [Hauptvorteile](#hauptvorteile)
- [AJAX](#ajax)
  - [Einfache Erklärung:](#einfache-erklärung)
  - [Hauptpunkte:](#hauptpunkte)
- [DOM](#dom)
  - [Hauptpunkte des DOM:](#hauptpunkte-des-dom)
  - [Beispiel:](#beispiel)
  - [Arbeiten mit dem DOM:](#arbeiten-mit-dem-dom)
    - [Zugriff auf Elemente:](#zugriff-auf-elemente)
      - [Manipulation von Elementen:](#manipulation-von-elementen)
      - [Hinzufügen neuer Elemente:](#hinzufügen-neuer-elemente)
      - [Entfernen von Elementen:](#entfernen-von-elementen)
    - [Vorteile des DOM:](#vorteile-des-dom)
- [DAM](#dam)
    - [Key Features of DAM:](#key-features-of-dam)
    - [Example of a DAM System:](#example-of-a-dam-system)
    - [Use Cases:](#use-cases)
    - [Conclusion:](#conclusion)
- [XML](#xml)
- [asynchronous](#asynchronous)
  - [Advantages](#advantages)
- [Razor](#razor)
  - [Example](#example-2)
- [jsx](#jsx)
- [FirstSpirit Content Management System CMS](#firstspirit-content-management-system-cms)
  - [Key Features](#key-features)
  - [Popular CMS Platforms](#popular-cms-platforms)
  - [Headless-CMS](#headless-cms)
    - [Benefits of Using](#benefits-of-using)
- [option api vs composition api](#option-api-vs-composition-api)
  - [option api](#option-api)
    - [Example](#example-3)
    - [Disadvantages:](#disadvantages)
  - [Composition API](#composition-api)
    - [Example](#example-4)
    - [Advantages](#advantages-1)
- [Gulp](#gulp)
    - [Key Features](#key-features-1)
- [Handlebars](#handlebars)
  - [**Key Features:**](#key-features-2)
  - [Use Cases](#use-cases-1)
- [Sass](#sass)
- [BEM Structur](#bem-structur)
  - [BEM](#bem)
  - [Examples](#examples)
    - [Basic Structure](#basic-structure)
    - [Nested Blocks](#nested-blocks)
- [Server/Client-Prinzip](#serverclient-prinzip)
  - [Grundlegende Konzepte](#grundlegende-konzepte)
    - [Server](#server)
    - [Client](#client)
  - [Funktionsweise](#funktionsweise)
- [TypeScript](#typescript)
  - [Key Features](#key-features-3)
- [Lighthouse](#lighthouse)
  - [Benefits](#benefits)
- [CTO](#cto)
- [Frontent-Build-Frameworks](#frontent-build-frameworks)
- [MongoDB](#mongodb)
  - [Use Cases](#use-cases-2)
- [Docker](#docker)
  - [Einfache Erklärung:](#einfache-erklärung-1)
  - [Vorteile](#vorteile)
- [Jira](#jira)
- [WSL windows subsystem for linux](#wsl-windows-subsystem-for-linux)
    - [NTLM Authentifikationsproxy (CNTLM)](#ntlm-authentifikationsproxy-cntlm)
    - [Windows New Technology (NT)](#windows-new-technology-nt)
    - [Windows NT Local Area Network Manager (NTLM)](#windows-nt-local-area-network-manager-ntlm)
- [Convolutional Neural Network (CNN)](#convolutional-neural-network-cnn)
- [virtual DOM](#virtual-dom)
- [LF (Line Feed) vs CRLF (Carriage Return Line Feed)](#lf-line-feed-vs-crlf-carriage-return-line-feed)
- [PyCharm](#pycharm)
- [Integrated Development Environment (IDE)](#integrated-development-environment-ide)
  - [Emmet](#emmet)
  - [operators](#operators)
- [Set up a virtual environment in Python](#set-up-a-virtual-environment-in-python)
  - [Package Manager in \`Virtual Environment (venv.)](#package-manager-in-virtual-environment-venv)
- [Useful Commands](#useful-commands)
  - [In Linux](#in-linux)
    - [Open vs code](#open-vs-code)
    - [open Safari](#open-safari)
    - [Vue Composition](#vue-composition)
    - [Customize and Configure the Bash shell Environment](#customize-and-configure-the-bash-shell-environment)
- [Useful Links](#useful-links)
- [What I learned so far...](#what-i-learned-so-far)
- [To Do List (Daily Disscusion)](#to-do-list-daily-disscusion)
- [Questions](#questions)





# About <span style="color:#f16">Wisdom Vault</span> 
`Wisdom Vault`, as the name suggests, is a repository of knowledge where all the insights and skills that Reza Nazari acquired during his internship at Intentive are documented. This serves as a learning guide or glossary.



# <span style="color:#8f0">Glossary</span>  
a `list` of **terms** and **definitions** related to a specific subject, field, or area of knowledge. `/ˈɡlɑː.sɚ.i/`





# Git
```bash
cd existing_repo
git remote add origin [repo/link]
git branch -M main
git push -uf origin main
```


## git flow and tag
```bash
git flow init 

git checkout main 

git push --tags

git branch --list
```


1. **Create a new branch:** `git checkout -b <branch-name>`
2. **Publish the branch:** `git push -u origin <branch-name>`
3. **Start a new feature:** `git flow feature start <feature-name>`
4. **Add changes and commit:** `git add .` => `git commit -m "Description of changes"`
5. **Push changes to the remote repository:** `git push -u origin <feature-name>`
6. **After development is complete:** `git flow feature finish <feature-name>` >> This merges the feature branch into the develop branch.
7. **Start a new release:** `git flow release start <0.1.0>` >> Note: git flow automatically creates a tag without `git tag`.
8. **Update the version number in the following files:** `package.json`, `package-lock.json` and `README.md`
9. **Commit the changes:** `git add .` => `git commit -m "Bump version"`
10. **Finish the release branch:** `git flow release finish <0.1.0>` >> This merges the release branch into main and develop, creates a tag, and closes the branch.
11. **Push branches and tags:** `git push origin develop` =>  `git push origin main` =>  `git push origin --tags`





## Create a .nvmrc Version File 
To stores the current Node.js version in the `.nvmrc` file, which can be used by `nvm` (Node Version Manager) to load the correct Node version for your project.

```sh
node --version > .nvmrc
```




## Versonization | [Semantic Versioning](https://semver.org/)
MAJOR.MINOR.PATCH `v0.1.0`

1. **MAJOR** version when you make `incompatible API changes`
2. **MINOR** version when you `add functionality` in a backward compatible manner
3. **PATCH** version when you make backward compatible `bug fixes`




## Bump Version
* It means to **increment** the version number to a new, unique value.\
* to manage software version numbers\
* **After creating a new branch** and **switching to it** \
`bring up my post` 😁 `v1.2.3`



## git tags (for release) 
### From the command line
> git tag v0.1.0 \

Push your tags upstream with `git push origin --tags`.



# Absolute & Relative Paths
## Absolute Paths
An absolute path describes the full URL or file path from the root directory. It always starts with a `/`.

### Example:

```html
<a href="/base_project_app/index.html">Home</a>
```

This link points to the `index.html` file located in the `base_project_app` directory at the root level of the server.

## Relative Paths

A relative path describes the location of a file relative to the current document's directory. It does not start with a `/`.

### Example:

```html
<a href="./index.html">Home</a>
```

This link points to the `index.html` file located in the same directory as the current document.

### Going Up a Directory:

```html
<a href="../index.html">Home</a>
```

This link points to the `index.html` file located one level up from the current document's directory.


# Definition of API
Ein API (Application Programming Interface) ist eine Schnittstelle, die es verschiedenen Softwareprogrammen ermöglicht, miteinander zu kommunizieren und Daten auszutauschen. Einfach gesagt, ein API definiert eine Reihe von Regeln und Protokollen, die bestimmen, wie ein Programm mit einem anderen interagieren kann.

## Restaurant-Menü-Beispiel:

Stell dir vor, du bist in einem Restaurant und möchtest etwas bestellen. Das Menü ist das API. Es enthält eine Liste von Gerichten (Funktionen), die du bestellen kannst. Du wählst aus dem Menü aus, was du möchtest, und der Kellner (das API) nimmt deine Bestellung entgegen und bringt dir dein Essen. Du musst nicht wissen, wie das Essen zubereitet wird, sondern nur, was du bestellen kannst und wie.

# jQuery
Eine schnelle, kleine und funktionsreiche `JavaScript-Bibliothek`. Sie vereinfacht Dinge wie HTML-Dokument-Durchlauf und -Manipulation, Ereignisbehandlung, Animation und Ajax stark, mit einer benutzerfreundlichen **API**, die in einer Vielzahl von Browsern funktioniert.

Stell dir vor, JavaScript ist wie das Werkzeug, das du verwendest, um Dinge auf einer Webseite zu ändern oder zu steuern. jQuery ist wie eine **Sammlung von superpraktischen Werkzeugen**, die dir dabei helfen, diese Änderungen viel einfacher und schneller durchzuführen. Es macht das Schreiben von JavaScript-Code **kürzer** und **leichter**.

## Hauptvorteile
1. **Einfacher Zugriff auf DOM-Elemente:**
    * jQuery macht es sehr einfach, HTML-Elemente auf einer Webseite auszuwählen und zu manipulieren.
    * Beispiel: ` $('#myElement').hide(); ` versteckt das Element mit der ID `myElement`.
2. **Animationen:**
    * jQuery bietet einfache Methoden, um Animationen und Effekte hinzuzufügen.
    * Beispiel: `$('#myElement').fadeOut();` lässt ein Element sanft verschwinden.


# AJAX 
`Asynchronous JavaScript And XML` ist eine `Technik`, mit der Webanwendungen Daten vom Server **asynchron** abrufen können, ohne die gesamte Seite neu zu laden. Dies ermöglicht eine dynamischere und reaktionsschnellere Benutzererfahrung.\
AJAX ermöglicht es Webentwicklern, interaktive und dynamische Webseiten zu erstellen, die schnell auf Benutzereingaben reagieren, indem sie nur die erforderlichen Daten vom Server laden und anzeigen.

## Einfache Erklärung:
Stell dir vor, du bist auf einer Webseite und möchtest neue Informationen sehen, z.B. neue Nachrichten oder Daten, `ohne die gesamte Seite neu laden zu müssen`. Mit AJAX kann die Webseite nur die benötigten Daten vom Server holen und die Webseite entsprechend aktualisieren, ohne dass du merkst, dass eine Serveranfrage stattgefunden hat.

## Hauptpunkte:
1. Asynchronität:
    * Die Seite bleibt interaktiv und der Benutzer kann weiterarbeiten, während die Daten im Hintergrund geladen werden.
2. Datenübertragung:
    * Daten können in verschiedenen Formaten wie JSON, XML, HTML oder nur als Text übertragen werden.
3. Teilladen der Seite:
    * Nur bestimmte Teile der Webseite werden aktualisiert, was zu einer schnelleren und benutzerfreundlicheren Erfahrung führt.



# DOM 
Das `Document Object Model` ist eine **Programmierschnittstelle**, die HTML- und XML-Dokumente als **strukturierte `Baumstrukturen` darstellt**. Es ermöglicht den **Zugriff** auf und die **Manipulation** von **Dokumenten**, indem es jede Komponente des Dokuments (wie Elemente, Attribute und Texte) als Objekte darstellt, die über Programmiersprachen wie JavaScript angesprochen und verändert werden können.

## Hauptpunkte des DOM: 
1. **Strukturierte Baumdarstellung:**  
    - Das DOM stellt **das Dokument als `hierarchische Baumstruktur`** dar, wobei der oberste Knoten das `document`-Objekt ist. **Jedes Element im Dokument** ist ein `Knoten` in diesem Baum. 
2. **Knoten (Nodes):** 
    - Knoten im DOM können verschiedene Typen haben, einschließlich Elementknoten, Attributknoten, Textknoten, Kommentarknoten usw. 
3. **Zugriff und Manipulation:** 
    - Das DOM bietet eine Reihe von Methoden und Eigenschaften, um auf die *Struktur* und **den Inhalt des Dokuments** zuzugreifen und sie zu manipulieren.

## Beispiel:

Betrachten wir ein einfaches HTML-Dokument:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Beispiel</title>
</head>
<body>
    <h1>Hallo Welt</h1>
    <p>Dies ist ein Absatz.</p>
</body>
</html>
```

Die DOM-Struktur für dieses Dokument sieht wie folgt aus: 
- `document` 
    - `html` 
        - `head` 
            - `title` 
    - `body` 
        - `h1` 
        - `p`

## Arbeiten mit dem DOM:
### Zugriff auf Elemente:

```javascript
// Zugriff auf das <h1> Element
let heading = document.querySelector('h1');

// Zugriff auf das <p> Element
let paragraph = document.querySelector('p');
```


#### Manipulation von Elementen:

```javascript
// Ändern des Inhalts des <h1> Elements
heading.textContent = 'Hallo DOM';

// Ändern des Stils des <p> Elements
paragraph.style.color = 'blue';
```


#### Hinzufügen neuer Elemente:

```javascript
// Erstellen eines neuen <div> Elements
let newDiv = document.createElement('div');
newDiv.textContent = 'Dies ist ein neuer Div';

// Hinzufügen des neuen Elements zum <body>
document.body.appendChild(newDiv);
```


#### Entfernen von Elementen:

```javascript
// Entfernen des <h1> Elements
heading.remove();
```


### Vorteile des DOM: 
1. **Interaktivität:** 
    - Das DOM ermöglicht die Erstellung **interaktiver Webseiten**, indem es Entwicklern erlaubt, **dynamisch** Inhalte zu ändern und **auf Benutzereingaben zu reagieren**. 



# DAM
`Digital Asset Management` refers to a **system** or **software** that enables organizations to store, organize, manage, retrieve, and distribute digital assets. \
`Digital assets` can include a wide range of files such as images, videos, documents, audio files, presentations, and other types of media. DAM systems are used to centralize these assets, making them **easily accessible** and **manageable**.

### Key Features of DAM: 
1. **Centralized Repository:** 
    - All digital assets are **stored in a single, centralized location**, making it easier to manage and retrieve files. 
2. **Metadata Management:** 
    - DAM systems allow users to `add metadata` to assets, such as **tags**, **descriptions**, and **keywords**, to facilitate easy searching and organization. 
3. **Version Control:** 
    - The system keeps **`track` of different versions of a file**, allowing users to manage revisions and access previous versions. 
4. **Access Control:** 
    - `Permissions` and `access rights` can be set to control who can view, edit, or distribute specific assets. 
5. **Search and Retrieval:** 
    - `Advanced search functionalities` enable users to **quickly find** and `retrieve` assets based on various criteria such as metadata, file type, or content. 
6. **Workflow Management:** 
    - DAM systems can integrate with other tools and support workflows for the approval, editing, and distribution of assets. 
7. **Integration:** 
    - DAM systems often integrate with other software and platforms such as `content management systems (CMS)`, `project management tools`, and `marketing automation systems`.


### Example of a DAM System:

One popular DAM system is Adobe Experience Manager (AEM). It provides a wide range of functionalities, including:
- Centralized storage for all digital assets.
- Advanced search capabilities using metadata and keywords.
- Integration with Adobe Creative Cloud and other Adobe tools.
- Workflow management for asset approval and distribution.
- Access control and permissions management.
### Use Cases: 
1. **Marketing:** 
- Marketers use DAM systems to manage campaign assets, ensuring consistent and quick distribution of materials across various channels. 
2. **Media and Entertainment:** 
- Media companies manage large volumes of video and audio files, making them easily accessible for editing and distribution. 
3. **Retail:** 
- Retailers use DAM to manage product images and descriptions, ensuring consistent and accurate information across e-commerce platforms and catalogs.
### Conclusion:

Digital Asset Management (DAM) is a crucial system for organizations that deal with large volumes of digital content. By centralizing, organizing, and managing digital assets efficiently, DAM systems enhance productivity, ensure brand consistency, and improve collaboration across teams.



# XML
`Extensible Application Markup Language` ist eine deklarative **Markup-Sprache**, die hauptsächlich für die **Definition** und **Initialisierung** von <span style="color:#f42">**Benutzeroberflächen (UI)**</span> in `.NET-Anwendungen` verwendet wird. Sie wird häufig in Verbindung mit `WPF (Windows Presentation Foundation)`, `UWP (Universal Windows Platform)` und `Xamarin.Forms` verwendet.

# asynchronous
In programming, the term "asynchronous" refers to the **ability** to perform operations **without blocking the execution of other operations**. This allows a program to initiate a task and then continue **executing other tasks while waiting** for the initial task to complete. Asynchronous programming is particularly useful for tasks that involve **waiting**, such as I/O operations (like reading from a disk or network), where blocking the entire program would lead to inefficiency and poor performance.

## Advantages
1. Non-Blockingcms 
2. Concurrency
3. Callbacks, Promises, and Async/Await

# Razor
Razor is **not a standalone programming language** but rather a `view engine used in ASP.NET` for **creating dynamic web pages** with a combination of **HTML markup** and **server-side code**. It is part of the ASP.NET Core and ASP.NET MVC frameworks, enabling developers to **embed** ``server-side logic`` **into their HTML markup** <span style="color:#f42">using C#</span> or VB.NET.

## Example
```html
@{
    ViewBag.Title = "Home Page";
}

<!DOCTYPE html>
<html>
<head>
    <title>@ViewBag.Title</title>
</head>
<body>
    <h1>Welcome to @ViewBag.Title</h1>
    <p>The current date and time is @DateTime.Now</p>
    
    @if (User.Identity.IsAuthenticated)
    {
        <p>Hello, @User.Identity.Name!</p>
    }
    else
    {
        <p>Please <a href="/Account/Login">log in</a>.</p>
    }
</body>
</html>
```


# jsx
`JavaScript XML` is a **syntax extension** <ins>for JavaScript</ins> commonly used with **React**, a popular **JavaScript library** **for building user interfaces**. JSX allows developers to write HTML-like code within JavaScript, making it easier to **create** and *manage* `UI components`.


# FirstSpirit Content Management System CMS
It is a **software application** that allows users to `create`, `manage`, `modify`, and `publish` **digital content** in an **easy-to-use interface**, typically **without needing specialized technical knowledge**. CMS platforms are widely used for **managing websites**, blogs, and other digital content repositories.

## Key Features
1. Tools for writing and formatting text, adding images and videos, and creating links.
2. **Content Organization:** Systems for categorizing and tagging content to keep it organized and easily searchable.
3. **Templates and Themes:** Pre-designed templates and themes to ensure consistent design and layout across the website.
4. **Publishing and Scheduling:** Options to publish content immediately or schedule it for future publication.
5. **SEO Tools:** Features to **optimize content for search engines**, including **metadata management** and SEO-friendly URLs.
6. **Managing Users:** Add new users and assign them roles, such as contributor or editor, to collaborate on the blog.

## Popular CMS Platforms
- WordPress
- Joomla
- Drupal
- Shopify
- Wix


## Headless-CMS
It is a `backend-only` content management system that allows you to manage content `without a connected front-end` or `presentation layer`. This decoupling of the back-end (where content is created and managed) from the front-end (where content is displayed) provides **greater flexibility** and **allows content to be delivered to any device** or **platform** ``via APIs``.

### Benefits of Using 
1. **Flexibility:** `Front-end developers` can `use their preferred tools and frameworks` (like React, Vue.js, Angular) **without** `being tied` to the **CMS's templating engine**.







# option api vs composition api
## option api
The traditional way of writing `Vue components` and has been used **since Vue 2**. It organizes component logic into different options **(object properties)** such as `data`, `methods`, `computed`, `watch`, etc.

### Example
```js
export default {
  data() {
    return {
      message: 'Hello, World!'
    };
  },
  methods: {
    greet() {
      console.log(this.message);
    }
  },
  computed: {
    uppercaseMessage() {
      return this.message.toUpperCase();
    }
  }
};
```

### Disadvantages:
* **Scalability:** For larger components, the Options API can become difficult to manage and maintain as **related logic** is spread across different options.
* **TypeScript Support:** While it supports TypeScript, **the integration** is **less seamless** compared to the Composition API.




## Composition API
It was introduced in **Vue 3** **to address** some of the **limitations of the Options API**, especially **for larger** and **more complex components**. It allows you to **organize** and **reuse code** more effectively by composing logic using reactive APIs.

### Example
```js
import { ref, computed } from 'vue';

export default {
  setup() {
    const message = ref('Hello, World!');
    const greet = () => {
      console.log(message.value);
    };
    const uppercaseMessage = computed(() => message.value.toUpperCase());

    return {
      message,
      greet,
      uppercaseMessage
    };
  }
};
```

### Advantages
* **TypeScript Integration:** Provides better TypeScript support with improved type inference.
* **Scalability:** Better suited for large-scale applications where components have complex logic.







# [Gulp](https://gulpjs.com/)
A `task runner` that helps developers **automate time-consuming tasks** such as minification, compilation, unit testing, linting, and many others. It uses `Node.js` and `JavaScript` **to define tasks**, making it a powerful tool for streamlining and enhancing the efficiency of the build process in web development.

### Key Features
* **Plugins:** There is a vast ecosystem of plugins available for Gulp that can handle almost any task you might need, such as file concatenation, image optimization, CSS preprocessing, and more.






# [Handlebars](https://handlebarsjs.com/guide/)
A popular `templating engine` for **JavaScript** that helps developers **create dynamic HTML** content **by separating the HTML structure** `from the data` that populates it. \
This **separation** makes it **easier to manage** and **update web applications**. Handlebars is an **extension** of the `Mustache templating language` and provides additional features and functionality.

## **Key Features:**
1. **Reusable Components:** Handlebars allows the creation of reusable components, which helps in **maintaining** and **scaling the code**.
2. **Partials:** Handlebars allows the use of partials, which are template fragments that can be **included in other templates**. This is useful for **reusing** common pieces of HTML.

Handlebars templates are written using `double curly` braces `{{}}`. 
```js
const source = '<h1>{{title}}</h1><p>{{body}}</p>';
const template = Handlebars.compile(source);
const context = {
  title: 'Hello, Handlebars!',
  body: 'This is a simple Handlebars template example.'
};
const html = template(context);

console.log(html);
```

## Use Cases
- **Rendering server-side templates** : Often used in web applications to render **dynamic HTML content** on the **server**. 
- **Client-side templating** : Useful in single-page applications (SPAs) to **dynamically update parts** of the web page **without refreshing**. 
- **Static site generation** : Can be used to **generate static HTML files** from templates and data.








# [Sass](https://sass-lang.com/)
Most mature, stable, and powerful professional grade `CSS extension languag`e in the world












# [BEM Structur](https://en.bem.info/methodology/quick-start/)
`Block Element Modifier` ist eine beliebte Namenskonvention, die für Klarheit und Modularität sorgt.

## [BEM](https://getbem.com/) 

## Examples
### Basic Structure
```html
<div class="menu">
  <div class="menu__item menu__item--active">
    <a href="#" class="menu__link">Home</a>
  </div>
  <div class="menu__item">
    <a href="#" class="menu__link">About</a>
  </div>
  <div class="menu__item">
    <a href="#" class="menu__link">Contact</a>
  </div>
</div>
```

### Nested Blocks
```html
<div class="card">
  <div class="card__header">
    <h2 class="card__title">Card Title</h2>
  </div>
  <div class="card__body">
    <p class="card__text">Some text inside the card.</p>
  </div>
  <div class="card__footer">
    <button class="button card__button">Click me</button>
  </div>
</div>
```









# Server/Client-Prinzip
ein grundlegendes Konzept in der Netzwerkarchitektur und beschreibt die Beziehung zwischen zwei Parteien: dem Server und dem Client. Dieses Modell wird in vielen Bereichen der Informationstechnologie angewendet, insbesondere in der Webentwicklung, bei Datenbanken und bei verteilten Systemen.

## Grundlegende Konzepte
### Server

Ein Server ist ein System, das Ressourcen, Dienste oder Daten bereitstellt, die von Clients angefordert werden können. Server sind darauf ausgelegt, auf Anfragen von Clients zu warten und darauf zu reagieren. Ein Server kann mehrere Anfragen von verschiedenen Clients gleichzeitig bearbeiten. 
- **Webserver** : Hosten und Bereitstellen von Webseiten (z.B. Apache, Nginx). 
- **Datenbankserver** : Verwaltung und Bereitstellung von Daten (z.B. MySQL, PostgreSQL). 
- **Mailserver** : Verwaltung und Zustellung von E-Mails (z.B. Microsoft Exchange, Postfix).
### Client

Ein Client ist ein System oder eine Anwendung, die Dienste oder Daten von einem Server anfordert. Clients sind normalerweise Endnutzergeräte oder Programme, die mit einem Server kommunizieren, um Informationen zu erhalten oder zu senden. 
- **Webbrowser** : Fordert Webseiten von einem Webserver an (z.B. Chrome, Firefox). 
- **E-Mail-Client** : Sendet und empfängt E-Mails über einen Mailserver (z.B. Outlook, Thunderbird). 
- **Datenbank-Client** : Greift auf Datenbanken zu, um Daten zu lesen oder zu schreiben (z.B. MySQL Workbench, pgAdmin).
## Funktionsweise

Das Server/Client-Prinzip funktioniert in der Regel nach dem Anfrage-Antwort-Muster: 
1. **Anfrage (Request)** : Der Client sendet eine Anfrage an den Server, um eine bestimmte Ressource oder einen Dienst anzufordern. Diese Anfrage enthält oft Parameter oder Daten, die der Server benötigt, um die Anfrage zu bearbeiten. 
2. **Bearbeitung (Processing)** : Der Server empfängt die Anfrage, verarbeitet sie und führt die erforderlichen Operationen aus. Dies kann das Abrufen von Daten, die Ausführung von Berechnungen oder das Bereitstellen einer Datei umfassen. 
3. **Antwort (Response)** : Der Server sendet eine Antwort zurück an den Client, die das Ergebnis der Anfrage enthält. Dies kann die angeforderten Daten, eine Bestätigung der erfolgreichen Bearbeitung oder eine Fehlermeldung sein.









# [TypeScript](https://www.typescriptlang.org/)
A strongly `typed superset` of JavaScript that adds static typing to the language. Developed and maintained by Microsoft, TypeScript builds on JavaScript by providing optional static types, which can help developers `catch errors early` in the development process and write more robust and maintainable code.

## Key Features 
1. **Static Typing** : Allows developers to `define variable types`, which helps catch **type-related errors** during development.  
2. **Classes and Inheritance** : Adds features from `object-oriented programming`, such as **classes**, **inheritance**, and **access modifiers**. 
3. **Modules** : Supports **modular code** through the use of `import` and `export` statements. 








# Lighthouse
An **open-source**, **automated tool developed** by Google for improving the quality of web pages. It can be run as a **Chrome extension**, from the **command line**, or **directly in Chrome DevTools**. Lighthouse performs audits for performance, accessibility, progressive web apps, **SEO**, and more, providing detailed reports and recommendations to help developers improve their websites.


## Benefits 
1. **Comprehensive Audits** : Provides a holistic view of your website's performance, accessibility, best practices, SEO, and PWA compliance. 
2. **Actionable Insights** : Offers specific recommendations and guidance to improve your website. 
3. **Integration** : Can be integrated into development workflows, CI/CD pipelines, and other automation processes. 
4. **Open Source** : Being open-source, it is continuously improved by the community and Google, ensuring up-to-date best practices and features.




# CTO 
Ein `Chief Technology Officer` ist ein **leitender Geschäftsführer**, der für die **technologische** Ausrichtung eines Unternehmens verantwortlich ist. Er entwickelt und implementiert **Strategien**, um sicherzustellen, dass die Technologie des Unternehmens die Geschäftsziele unterstützt. Der CTO **überwacht** die Entwicklung neuer Technologien, führt das technische Team und sorgt dafür, dass die **IT-Systeme** `sicher` und `effizient` sind.







# Frontent-Build-Frameworks
Frontend build frameworks and **tools** like `Webpack`, `Parcel`, `Gulp`, `Grunt`, and `Vite` play a crucial role in **modern web development**. They automate tasks, optimize performance, and provide a structured environment for managing codebases.








# MongoDB 
open-source, `NoSQL database management system` that stores data in flexible, `JSON-like documents`. It is designed for scalability, high availability, and performance in handling unstructured, semi-structured, and structured data. MongoDB uses a **document-oriented data model**, which means each `record (document)` is a `schema-less JSON object`, allowing for dynamic and flexible data schemas.


## Use Cases
- **Content Management** : Storing content for **blogs**, **forums**, and **websites**.
 
- **Big Data** : Handling large volumes of data and high throughput applications.
 
- **Real-Time Analytics** : Processing real-time data for analytics and reporting.
 
- **Mobile Applications** : Storing data for mobile apps **with offline support**.
 
- **IoT (Internet of Things)** : Managing and analyzing data from connected devices.











# Docker 
Eine **Plattform**, die es Entwicklern ermöglicht, **Anwendungen** in sogenannten `containers` zu erstellen, zu verwalten und auszuführen. \
Container sind eigenständige, isolierte `Umgebungen`, die alle notwendigen Softwarekomponenten einer Anwendung enthalten, wie z.B. Code, Bibliotheken und Abhängigkeiten. Diese Container sind leichtgewichtig und portabel, was bedeutet, dass sie auf verschiedenen Systemen und in verschiedenen Umgebungen konsistent laufen können.

## Einfache Erklärung:
Stellen wir uns Docker wie einen **virtuellen Behälter** vor, in dem eine Anwendung und alles, **was sie zum Laufen braucht**, `verpackt` ist. Diese Behälter sind standardisiert und können **überall ausgeführt** werden, egal ob auf einem **Laptop**, **Server** oder **in der Cloud**. Docker hilft Entwicklern, ihre Anwendungen einfacher zu erstellen, zu testen und zu verteilen, indem es die Komplexität der Umgebungsabhängigkeiten reduziert und die Bereitstellung von Software beschleunigt.

## Vorteile
* **Isolation:** Container bieten eine gewisse Isolation zwischen `Anwendungen` und `Prozessen` **auf demselben Host**, was **Sicherheit** und **Stabilität** fördert.







# Jira
a `project management tool` developed by Atlan Corporation. It is primarily used to **track bugs** and **issues** in software development, as well as to **manage** and prioritize work in agile and scrum methodologies.




# WSL windows subsystem for linux
a compatibility layer developed by Microsoft that enables Windows users to run a native Linux environment directly on Windows without the need for a virtual machine or dual-boot setup. 



### NTLM Authentifikationsproxy (CNTLM)
Ein lokaler Proxy-Server, der NTLM-Authentifizierung  unterstützt und es ermöglicht, über einen Unternehmensproxy auf das Internet zuzugreifen.

### Windows New Technology (NT)
Eine Familie von Microsoft-Betriebssystemen für **Stabilität**, **Sicherheit**, **Netzwerkfähigkeiten**, **Multitasking und Multithreading** und **32-Bit-Architektur**.


### Windows NT Local Area Network Manager (NTLM) 
Ein `Authentifizierungsprotokoll`, das ursprünglich von Microsoft für die **Sicherung von Benutzeranmeldungen** und den **Zugriff auf Netzwerkressourcen in lokalen Netzwerken** entwickelt wurde. 









# Convolutional Neural Network (CNN)
Ein spezieller Typ von künstlichem neuronalen Netzwerk, der für die **Verarbeitung** von **strukturierten Daten** wie <u>Bildern</u> verwendet wird und eine Hierarchie von Merkmalen lernt

a **type** of **deep learning algorithm** specifically designed for **processing structured grid data** such as **images**. CNNs are particularly effective in tasks like *image recognition*, *object detection*, and various other *computer vision applications*. 






# virtual DOM 
It allows Vue to **efficiently update** the `UI` **by comparing the virtual DOM** with the actual DOM and only **updating the parts that have changed**. This makes Vue.js faster and more efficient than traditional DOM manipulation methods. 








# LF (Line Feed) vs CRLF (Carriage Return Line Feed) 
they are both `character sets` used **to indicate the end of a line in text data**. \
LF represents **only the line feed character** `\r\n` to denote the newline character, while CRLF represents a **combination** of a **carriage return** and a **line feed** `\n`. CRLF is typically used in Windows-based systems, while LF is commonly used in **Unix- and Linux-based** systems. When working with text data that contains a mixture of LF and CRLF line endings, it may be necessary to use software or scripts to convert one to the other before processing the data.







# PyCharm
Eine `integrierte Entwicklungsumgebung (IDE)` speziell für die Programmiersprache Python. Es wurde von der Firma `JetBrains` entwickelt





# Integrated Development Environment (IDE)
A s`oftware application` that provides comprehensive facilities to computer programmers for software development.




## [Emmet](https://docs.emmet.io/)
Abbreviation syntax for HTML and CSS

## operators
1. **Child**: `>` (selects the immediate child of an element)
2. **Sibling**: `+` (selects the next sibling element)
3. **Climb-up**: `^` (moves up to the parent element)
4. **Multiplication**: `*` (repeats an element)
5. **Grouping**: `()` (groups elements together)
6. **ID and CLASS**: `elem#id` (for IDs) and `elem.class` (for classes)
7. `{write a paragraph}`
8. **Custom attributes**: `[]`
9. **Item numbering:** `$`








# Set up a virtual environment in Python
## Package Manager in `Virtual Environment (venv.)




# Useful Commands 
## In Linux
### Open vs code
> code .


### open Safari
> epiphany 



### Vue Composition 
```bash

nvm i 12
nvm list
nvm use 22
node -v

```

### Customize and Configure the Bash shell Environment
In Linux, `~/.bashrc` refers to a **hidden file** located in the **user's home directory (~)**. This file is specifically used to customize and configure the Bash shell environment **for each user**.

```bash
code ~/.bashrc
```






# Useful Links
- [GitLab Intentive](https://git2.intentive.de/)
- [git-flow Spickzettel - erstellt von Daniel Kummer](https://danielkummer.github.io/git-flow-cheatsheet/index.de_DE.html)
- [nvm Node Version Manager - GitHub](https://github.com/nvm-sh/nvm)




# What I learned so far...
- Accordion 
- Docstation



# To Do List (Daily Disscusion)
- [ ] Recherche Intentive und create a `About my Internship Company` Page (Firmenstruktur, Kunden, eingesetzte Produkte..)
- [ ] Glossary Page
- [ ] Vue-App: To Do List




# Questions
- [ ] 1. nothing :)

