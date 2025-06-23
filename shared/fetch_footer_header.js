
  fetch("../shared/headder.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector(".header-placeholder").innerHTML = data;
    });

  fetch("../shared/footer.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector(".footer-placeholder").innerHTML = data;
    });