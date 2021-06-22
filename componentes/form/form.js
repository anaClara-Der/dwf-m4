const formularioCoponent = (elemento) => {
  const form = document.createElement("div");

  form.innerHTML = `
  <form class= "form">
  <label>
  <span class="form__texto">NOMBRE</span>
  <input class="form__input" type="text" name="nombre" />
</label>
<label>
  <span class="form__texto">EMAIL</span>
  <input class="form__input" type="email" name="email" />
</label>
<label>
  <span class="form__texto">MENSAJE</span>
  <textarea class="from__textarea" name="mensaje"></textarea>
</label>
<button class="form__button">Enviar</button> 
</form>`;

  elemento.appendChild(form);
  enviarForm(form);
};

const enviarForm = (formulario) => {
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    let mensaje = `Nombre: ${value.nombre} , Mail:${value.email} , Mensaje: ${value.mensaje} `;
    const objeto = {
      to: value.email,
      message: mensaje,
    };
    const url = "https://apx-api.vercel.app/api/utils/dwf ";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(objeto),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  });
};
