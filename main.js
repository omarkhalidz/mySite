let tabLinks = document.querySelectorAll(".tab-links");
let tabContents = document.querySelectorAll(".tab-contents");
let sideMenue = document.querySelector("#sidemenu");

function openMenu() {
  sideMenue.style.width = "200px";
}
function closeMenu() {
  sideMenue.style.width = "0";
}

function openTab(tabName) {
  for (let tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (let tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}
