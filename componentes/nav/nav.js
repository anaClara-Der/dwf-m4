const navComponent = (element) => {
  const navEl = document.createElement("nav");
  navEl.classList.add("nav");
  navEl.innerHTML = `
  <a href="./index.html">
    <img class="nav__img" src="./imgs/book.svg" alt=""/>
  </a>
  <div class="nav__burguer">
    <div class="nav__linea"></div>
    <div class="nav__linea"></div>
    <div class="nav__linea"></div>
  </div>

  <div class="nav__links">
    <a href="./portfolio.html" class="nav__link">Portfolio</a>
    <a href="./servicios.html" class="nav__link">Servicios</a>
    <a href="./contacto.html" class="nav__link">Contacto</a>
  </div>
  `;
  element.appendChild(navEl);

  const menuDesplegable = document.createElement("div");
  menuDesplegable.classList.add("nav__desplegable");

  menuDesplegable.innerHTML = `
    <div class="nav__container-cerrar">
      <div class ="nav__linea-cerrar  nav__cerrar--uno"></div>
      <div class ="nav__linea-cerrar nav__cerrar--dos"></div>
    </div>
    <div class= "nav__container-links">
      <a href ="./portfolio.html" class ="nav__desplegable-link">Portfolio</a>
      <a href ="./servicios.html" class ="nav__desplegable-link">Servicios</a>
      <a href ="./contacto.html" class ="nav__desplegable-link">Contacto</a>
    </div>
  `;
  element.appendChild(menuDesplegable);

  let btnAbrir = navEl.querySelector(".nav__burguer");
  let btnCerrar = menuDesplegable.querySelector(".nav__container-cerrar");
  btnAbrir.addEventListener("click", () => {
    menuDesplegable.style.display = "inherit";
  });
  btnCerrar.addEventListener("click", () => {
    menuDesplegable.style.display = "";
  });
};
