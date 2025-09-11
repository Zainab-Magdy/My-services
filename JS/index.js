let dropMenue;   // تعريف فوق عشان تبقى global
let bars_icon;
let bars_btn;

document.addEventListener('DOMContentLoaded', function () {
    bars_btn = document.querySelector('.toggle-btn');
    bars_icon = document.querySelector('.toggle-btn i');
    dropMenue = document.querySelector('.dropdown');

    if (bars_btn && bars_icon && dropMenue) {
        bars_btn.onclick = function (e) {
            e.stopPropagation(); // يمنع اعتباره كـ click خارج
            dropMenue.classList.toggle('open');
            const isOpen = dropMenue.classList.contains('open');
            bars_icon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
        };

        // إغلاق القائمة عند الضغط خارجها
        document.addEventListener('click', function (e) {
            if (dropMenue.classList.contains('open') && 
                !dropMenue.contains(e.target) && 
                !bars_btn.contains(e.target)) {
                closeMenu();
            }
        });
    } else {
        console.error('Some elements are not found in the DOM');
    }
});

// scroll ناعم
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ 
        behavior: "smooth"
    });
}

// function عامة لغلق القائمة
window.closeMenu = function () {
    if (dropMenue && bars_icon) {
        dropMenue.classList.remove('open');
        bars_icon.className = 'fas fa-bars';
    }
};
function goTo(id){
    document.getElementById(id).style.display='block';
}
function changeStyle(id){
    let attr = document.getElementById(id);
    attr.style.backgroundColor="#b3aaaa";
}
// function toggleMenu() {
//     const navLinks = document.querySelector('.nav-links');
//     navLinks.classList.toggle('active');
//   }
  


