const headerComponent = () => {
  const containerHaeder = document.querySelector(".header");
  navComponent(containerHaeder);
  welcomeComponent(containerHaeder);
};

const formComponent = () => {
  const containerForm = document.querySelector(".escribime__container");
  formularioCoponent(containerForm);
};

const componentes = () => {
  headerComponent();
  servComp();
  formComponent();
  footerComp();
};

const main = () => {
  componentes();
  fetchPresent(); //en la carpeta scripts
};

main();
