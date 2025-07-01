// // Header laden
// let headerPath = "../shared/headder.html";
// if (window.location.pathname.includes("index.html")) {
//   headerPath = "./shared/headder.html";
// }
// fetch(headerPath)
//   .then(response => response.text())
//   .then(data => {
//     document.querySelector(".header-placeholder").innerHTML = data;
//   });

// // Footer laden
// let footerPath = "../shared/footer.html";
// if (window.location.pathname.includes("index.html")) {
//   footerPath = "./shared/footer.html";
// }
// fetch(footerPath)
//   .then(response => response.text())
//   .then(data => {
//     document.querySelector(".footer-placeholder").innerHTML = data;
//   });

//   // Beispiel für dynamischen Pfad im Header nach dem Laden:
// document.querySelectorAll('img.logo').forEach(img => {
//   if (window.location.pathname.includes("index.html")) {
//     img.src = "./" + img.src;
//   } else {
//     img.src = "../" + img.src;
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  loadHeader();
  loadFooter();
});

function loadHeader() {
  let header = document.querySelector(".header-placeholder");
  if (window.location.pathname.includes("index.html")) {
    header.innerHTML += `
        <div class="head">
            <a href="./index.html"><img class="logo" src="./assets/img/logo.png" alt="Kochwelt Logo">
            </a>
                        
             <input type="checkbox" id="burger-toggle" class="burger-toggle">
            <label for="burger-toggle" class="burger-label">
        <span class="bar top-bar"></span>
        <span class="bar middle-bar"></span>
        <span class="bar bottom-bar"></span>
    </label>

            
           <nav class="burger-nav">
            <ul>
            <li><a href="./index.html">Startseite</a></li>
            <li><a href="./recipe/spätzle-mit-hähnchen.html.html">Rezept des Tages</a></li>
            <li><a href="./contact/contact-form.html">Kontakt</a></li>
            <li><a href="./Impressum_und_Datenschutz/Impressum.html">Über uns</a></li>
            </ul>
            </nav>

            <div class="div_links">
                <a class="link" href="./index.html">Start</a>
                <a class="link active" href="./recipe/spätzle-mit-hähnchen.html">Rezept des Tages</a> 
                <a class="link" href="./contact/contact-form.html">Kontakt</a>
                <a class="link" href="./Impressum_und_Datenschutz/Impressum.html">Impressum</a>
            </div>
        </div>`;
    console.log("Header loaded for index.html");
  } else {
    header.innerHTML += `
        <div class="head">
            <a href="../index.html"><img class="logo" src="../assets/img/logo.png" alt="Kochwelt Logo">
            </a>
                        
             <input type="checkbox" id="burger-toggle" class="burger-toggle">
            <label for="burger-toggle" class="burger-label">
        <span class="bar top-bar"></span>
        <span class="bar middle-bar"></span>
        <span class="bar bottom-bar"></span>
    </label>

            
           <nav class="burger-nav">
            <ul>
            <li><a href="../index.html">Startseite</a></li>
            <li><a href="../recipe/spätzle-mit-hähnchen.html">Rezept des Tages</a></li>
            <li><a href="../contact/contact-form.html">Kontakt</a></li>
            <li><a href="../Impressum_und_Datenschutz/Impressum.html">Über uns</a></li>
            </ul>
            </nav>

            <div class="div_links">
                <a class="link" href="../index.html">Start</a>
                <a class="link active" href="../recipe/spätzle-mit-hähnchen.html">Rezept des Tages</a> 
                <a class="link" href="../contact/contact-form.html">Kontakt</a>
                <a class="link" href="../Impressum_und_Datenschutz/Impressum.html">Impressum</a>
            </div>
        </div>`;
    console.log("Header loaded for other pages");
  }
}

function loadFooter() {
  let footer = document.querySelector(".footer-placeholder");
  if (window.location.pathname.includes("index.html")) {
    footer.innerHTML += `    <div class="footer">
        
        <div class="socials-container">
            <a href="https://www.facebook.com/?locale=de_DE" class="socials"><img src="./assets/img/facebook.png" alt="Facebook"></a>
            <a href="https://www.instagram.com/" class="socials"><img src="./assets/img/instagram.png" alt="Instagram"></a>
            <a href="https://de.pinterest.com/" class="socials"><img src="./assets/img/pinterest.png" alt="Pinterest"></a>
            <a href="https://www.youtube.com/" class="socials"><img src="./assets/img/youtube.png" alt="YouTube"></a>
        </div>
        <div class="links-container">
            <a href="./Impressum_und_Datenschutz/Datenschutz.html" target="_parent" class="footer-links">Datenschutz</a> |
            <a href="./contact/contact-form.html" target="_parent" class="footer-links">Kontakt</a> |
            <a href="./Impressum_und_Datenschutz/Impressum.html" target="_parent" class="footer-links">Impressum</a>
        </div>
        <div>© 2025 Kochwelt</div>
    </div>`;
  } else {
    footer.innerHTML += `<div class="footer">
        
        <div class="socials-container">
            <a href="https://www.facebook.com/?locale=de_DE" class="socials"><img src="../assets/img/facebook.png" alt="Facebook"></a>
            <a href="https://www.instagram.com/" class="socials"><img src="../assets/img/instagram.png" alt="Instagram"></a>
            <a href="https://de.pinterest.com/" class="socials"><img src="../assets/img/pinterest.png" alt="Pinterest"></a>
            <a href="https://www.youtube.com/" class="socials"><img src="../assets/img/youtube.png" alt="YouTube"></a>
        </div>
        <div class="links-container">
            <a href="../Impressum_und_Datenschutz/Datenschutz.html" target="_parent" class="footer-links">Datenschutz</a> |
            <a href="../contact/contact-form.html" target="_parent" class="footer-links">Kontakt</a> |
            <a href="../Impressum_und_Datenschutz/Impressum.html" target="_parent" class="footer-links">Impressum</a>
        </div>
        <div>© 2025 Kochwelt</div>
    </div>`;
  }
}
