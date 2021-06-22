/**Pedido para presentación */
const fetchPresent = () => {
  fetch(
    "https://cdn.contentful.com/spaces/klsh1ousmgqk/environments/master/entries?access_token=PsqukxDDRrKqkclysjqplgnhf7IU_KJEWDp8N1vEu_0&content_type=presentacion"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const objtPresent = {
        title: data.items[0].fields.titulo,
        present: data.items[0].fields.presentacion,
        img: data.includes.Asset[0].fields.file.url,
      };
      paintPresent(objtPresent);
    });
};

const paintPresent = (data) => {
  const containerPresent = document.querySelector(".present");
  const templatePresent = document.querySelector(".present__template").content;
  const clone = templatePresent.cloneNode(true);

  clone.querySelector(".present__title").textContent = data.title;
  clone.querySelector(".present__text").textContent = data.present;
  clone.querySelector(".present__img").src = data.img;

  containerPresent.appendChild(clone);
};
