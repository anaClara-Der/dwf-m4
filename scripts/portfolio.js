const fetchPortfolio = () => {
  fetch(
    "https://cdn.contentful.com/spaces/klsh1ousmgqk/environments/master/entries?access_token=PsqukxDDRrKqkclysjqplgnhf7IU_KJEWDp8N1vEu_0&content_type=work"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      createObjPort(data);
    });
};

createObjPort = (data) => {
  const objPortfolio = data.items.map((item) => {
    const objetoPortfolio = {
      titulo: item.fields.titulo,
      texto: item.fields.descripcion,
      url: item.fields.url,
      imgID: item.fields.imagen.sys.id,
      imagenIncludes: data.includes.Asset,
    };
    return objetoPortfolio;
  });
  objPortfolio.forEach((id) => {
    let idEcnontrado = encontrarIdImg(id.imgID, id.imagenIncludes);
    id.imagen = idEcnontrado.fields.file.url;
  });
  paintCard(objPortfolio);
};

const encontrarIdImg = (asset, includes) => {
  const idEncontrado = includes.find((item) => {
    return item.sys.id == asset;
  });
  return idEncontrado;
};

const paintCard = (objeto) => {
  const containerCard = document.querySelector(".cards__container");
  const templateCard = document.querySelector(".card__template").content;

  objeto.forEach((item) => {
    const clone = templateCard.cloneNode(true);
    clone.querySelector(".card__img").src = item.imagen;
    clone.querySelector(".card__title").textContent = item.titulo;
    clone.querySelector(".card__text").textContent = item.texto;
    clone.querySelector(".card__link").setAttribute("href", item.url);
    containerCard.appendChild(clone);
  });
};

const components = () => {
  navComp();
  footerComp();
};

const main = () => {
  fetchPortfolio();
  components();
};

main();
