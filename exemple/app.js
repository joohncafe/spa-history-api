// carrega um componente por url digitada pelo usuário
window.onload = function() {
  let path = pathRender(window.location.pathname);
  getComponent(path);
};

//links da aplicação SPA
const links = document.querySelectorAll(".link");

function render(event) {
  event.preventDefault();
  const pathName = pathRender(event.target.pathname);

  getComponent(pathName);

  window.history.pushState(null, null, pathName[0].name);
}

//pegar o nome da rota e o path para renderizar no getComponent
function pathRender(pathName) {
  const path = routes.filter(item => {
    return item.name == pathName;
  });

  if (!path.length) {
    console.log("Rota não registrada no sistema");
  } else {
    return path;
  }
}

// Pega o componente para ser renderizado
async function getComponent(pathName) {
  const dirDefault = "components/";
  const pathComponent = dirDefault + pathName[0].path;

  const getHtml = await fetch(pathComponent);
  const textHtml = await getHtml.text();

  const createHtml = document.createElement("div");

  createHtml.innerHTML = textHtml;

  const app = document.querySelector("#app");

  app.innerHTML = createHtml.innerHTML;
}
//
links.forEach(link => {
  link.addEventListener("click", render);
});

//Carrega o componente caso o usuário use a navegação de historico do navegador
window.addEventListener("popstate", () => {
  let path = pathRender(window.location.pathname);
  getComponent(path);
});
