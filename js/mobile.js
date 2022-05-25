let mobileBtn = document.getElementById("mobileToggle");
let closeToggle = document.getElementById("closeToggle");

mobileBtn.addEventListener("click",()=>{
    let mobileNav = document.getElementById("mobileNav");
    mobileNav.classList.add("active");

    let bgblack = document.getElementById("bg-black");
    bgblack.classList.add("active");
  
    if(mobileNav.classList.contains("active")){
        closeToggle.addEventListener("click", () => {
            mobileBtn.classList.remove("active");
            mobileNav.classList.remove("active");
            bgblack.classList.remove("active");
        })
    }
})