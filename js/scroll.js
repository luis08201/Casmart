window.addEventListener("scroll", function(){
    const nav = document.getElementById("navDesktop");
    nav.classList.toggle("sticky", window.scrollY > 95);
});

window.addEventListener("scroll", function () {
  const navMobile = document.getElementById("navMobile");
  navMobile.classList.toggle("sticky", window.scrollY > 0);
});

