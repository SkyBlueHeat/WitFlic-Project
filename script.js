const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", ()=> {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
    }))


     // Sınıf adı ile butonları seç
 document.querySelector('.hamburger')
 .addEventListener('click', function() {
     // Body'ye scroll-down sınıfını ekle veya kaldır
     document.body.style.transform('translateY(-100px)');
 });