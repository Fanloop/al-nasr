let navbarlinks = document.querySelectorAll("nav ul li a");

function navbarlinksActive() {
   navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY + 200;

      if (
         position >= section.offsetTop &&
         position <= section.offsetTop + section.offsetHeight
      ) {
         navbarlink.classList.add("text-yellow");
      } else {
         navbarlink.classList.remove("text-yellow");
      }
   });
}
window.addEventListener("load", navbarlinksActive);
document.addEventListener("scroll", navbarlinksActive);
