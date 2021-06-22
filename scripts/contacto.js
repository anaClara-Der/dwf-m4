const form = () => {
  const containerForm = document.querySelector(".escribime__container");
  formularioCoponent(containerForm);
};

const main = () => {
  navComp();
  form();
  footerComp();
};

main();
