const footerComponent = (element) => {
  footerContainer = document.createElement("div");
  footerContainer.classList.add("footer__container-gral");
  footerContainer.innerHTML = `
    <img class="footer__avatar" src="./imgs/book.svg" alt="" />
    <div class="footer__redes-cont-gral">
        <div class="footer__redes-container">
            <a class="footer__link" href="https://www.instagram.com/anaclarader/"  target="_blank"
             ><span class="footer__link-text">Instagram</span>
                <img class="footer__img" src="./imgs/instagram.svg" alt=""
            /></a>
         </div>

        <div class="footer__redes-container">
            <a class="footer__link" href="#"
            ><span class="footer__link-text">Linkedin</span>
            <img class="footer__img" src="./imgs/linkedin.svg" alt=""
            /></a>
        </div>

        <div class="footer__redes-container">
            <a class="footer__link" href="https://github.com/anaClara-Der"  target="_blank">
            <span class="footer__link-text">Github</span>
            <img class="footer__img" src="./imgs/github.svg" alt=""
            /></a>
        </div>
  </div>`;
  element.appendChild(footerContainer);
};
