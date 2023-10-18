let sideBar = document.querySelector(".sideBar");

function listButton() {
  if (!sideBar.classList.contains("mostrarSideBar")) {
    sideBar.classList.add("mostrarSideBar");
  } else {
    sideBar.classList.remove("mostrarSideBar");
  }
}

function closeSideBarLinks() {
  sideBar.classList.remove("mostrarSideBar");
}

function home() {
  location = '../index.html'
}

function homeCurso() {
  location = '../../index.html'
}
