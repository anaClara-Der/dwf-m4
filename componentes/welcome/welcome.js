const fetchPedidoWelcome = () => {
  const bienvenida = fetch(
    "https://cdn.contentful.com/spaces/klsh1ousmgqk/environments/master/entries?access_token=PsqukxDDRrKqkclysjqplgnhf7IU_KJEWDp8N1vEu_0&content_type=bienvenida"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.items[0].fields;
    });
  return bienvenida;
};

const welcomeComponent = (element) => {
  fetchPedidoWelcome().then((json) => {
    const welcomeEl = document.createElement("div");
    welcomeEl.classList.add("welcome");
    welcomeEl.innerHTML = `
    
          <h2 class= "welcome__hello">${json.saludo}</h2>
          <h2 class= "welcome__name">${json.nombre}</h2>
     
      `;

    element.appendChild(welcomeEl);
  });
};
