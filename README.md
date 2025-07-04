
<img align="left" src="https://github.com/c-bakis/Kochwelt/blob/main/public/assets/img/logo_small.png" width="100" alt="logo"/> 
<br/>

# Kochwelt
\
\
This is the first group project I am undertaking as part of my advanced training at the Developer Akademie.
\
\
[Try Kochwelt online](https://deluxe-granita-d4d27e.netlify.app/)
<br>
<br>
<br clear="left"/>

## Features


  
<img align="left" src="https://github.com/c-bakis/Kochwelt/blob/main/public/assets/img/readme-img/kochwelt-main-light.png" alt="main page light mode" width="430"/>
<img align="right" src="https://github.com/c-bakis/Kochwelt/blob/main/public/assets/img/readme-img/kochwelt-main-dark.png" alt="main page dark mode" width="430"/>

<br clear="left">
<br clear="right">

<p align="center">Light mode by default - Dark mode if the user has enabled dark mode in their browser</p>
<br/>
<br/>
<br/>

<img align="left" src="https://github.com/c-bakis/Kochwelt/blob/main/public/assets/img/readme-img/contact-form.png" alt="training page" width="200"/>
<p align="center"></p>
<img align="right" src="https://github.com/c-bakis/Kochwelt/blob/main/public/assets/img/readme-img/burger-menu-open.png" alt="list page" width="250px"/>
<br clear="right"/> <br clear="left"/> <br clear="center"
<br/>

## My Process 

### Built with

 - HTML 5
 - CSS 3
 - Vanilla JavaScript

### Learnin experience
```bash
function loadHeader() {
  let header = document.querySelector(".header-placeholder");
  if (window.location.pathname.includes("index.html")) {
    header.innerHTML += `
        <div class="head">
            <a href="./index.html"><img class="logo" src="./assets/img/logo.png" alt="Kochwelt Logo">
            </a>
        <nav class="burger-nav">
            <ul>
            <li><a href="./index.html">Startseite</a></li>
            <li><a href="./recipe/spätzle-mit-hähnchen.html">Rezept des Tages</a></li>
            <li><a href="./contact/contact-form.html">Kontakt</a></li>
            <li><a href="./Impressum_und_Datenschutz/Impressum.html">Impressum</a></li>
            </ul>
        </nav>
} else {
    header.innerHTML += `
        <div class="head">
            <a href="../index.html"><img class="logo" src="../assets/img/logo.png" alt="Kochwelt Logo">
            </a>
        <nav class="burger-nav">
          <ul>
            <li><a href="../index.html">Startseite</a></li>
            <li><a href="../recipe/spätzle-mit-hähnchen.html">Rezept des Tages</a></li>
            <li><a href="../contact/contact-form.html">Kontakt</a></li>
            <li><a href="../Impressum_und_Datenschutz/Impressum.html">Impressum</a></li>
          </ul>
        </nav>`;
```
<br/>

## Installation

clone repository:
```bash
git clone https://github.com/c-bakis/Kochwelt.git
```

Navigate to the project repository
```bash
cd Kochwelt
```


<br/>

## Contributing

You are welcome to contribute to my project by creating an issure or making a pull request

## Author 

my Profile [ch-bakis](https://github.com/c-bakis)

## License

MIT License
