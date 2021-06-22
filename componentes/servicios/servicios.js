const fetchServicios = () => {
  const objeto = fetch(
    "https://cdn.contentful.com/spaces/klsh1ousmgqk/environments/master/entries?access_token=PsqukxDDRrKqkclysjqplgnhf7IU_KJEWDp8N1vEu_0&content_type=misServicios"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return createObjData(data);
    });
  return objeto;
};
const createObjData = (data) => {
  const imagenes = data.includes.Asset.map((item) => {
    return item.fields.file;
  });
  const objServicios = data.items.map((item, i) => {
    const objetoServicios = {
      img: imagenes[i],
      titulo: item.fields.titulo,
      texto: item.fields.texto,
    };
    return objetoServicios;
  });
  return objServicios;
};

const serviciosComponent = (element) => {
  fetchServicios().then((obj) => {
    obj.forEach((item) => {
      const containerServicios = document.createElement("div");
      containerServicios.classList.add("mis-servicios__card");
      containerServicios.innerHTML = `
     
          <img  class="mis-servicios__img" src="${item.img.url}" alt="" />
          <h4  class="mis-servicios__subt"" >${item.titulo}</h4>
          <p class="mis-servicios__text" >${item.texto}</p>
          `;
      element.appendChild(containerServicios);
    });
  });
};
