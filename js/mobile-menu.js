document.addEventListener("DOMContentLoaded", () => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const navListRef = document.querySelector(".p-m-navigation-list");
  const headerRef = document.querySelector(".p-m-header");
  const navigationRef = document.querySelector(".p-m-navigation");

  menuBtnRef.addEventListener("click", () => {
    menuBtnRef.classList.toggle("is-open");
    navListRef.classList.toggle("is-open");
    headerRef.classList.toggle("is-open");
    navigationRef.classList.toggle("is-open");
  });

  document.querySelectorAll(".p-m-navigation-link").forEach((n) =>
    n.addEventListener("click", () => {
      navListRef.classList.remove("is-open");
      menuBtnRef.classList.remove("is-open");
      headerRef.classList.remove("is-open");
      navigationRef.classList.remove("is-open");
    }),
  );
});
