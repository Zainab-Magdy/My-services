document.addEventListener('DOMContentLoaded', function () {
    const bars_btn = document.querySelector('.toggle-btn');
    const bars_icon = document.querySelector('.toggle-btn i');
    const dropMenue = document.querySelector('.dropdown');

    if (bars_btn && bars_icon && dropMenue) {
        bars_btn.onclick = function () {
            dropMenue.classList.toggle('open');
            const isOpen = dropMenue.classList.contains('open');
            console.log(isOpen);
            bars_icon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
            console.log(bars_icon.className);

        };
    } else {
        console.error('Some elements are not found in the DOM');
    }
});

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ 
      behavior: "smooth"  // حركة ناعمة
    });
  }

  
function changeStyle(id){
    let attr = document.getElementById(id);
    attr.style.backgroundColor="#b3aaaa";
}
document.getElementById("to-first-para").onclick = function() {
    changeStyle("first-para");
};
// function toggleMenu() {
//     const navLinks = document.querySelector('.nav-links');
//     navLinks.classList.toggle('active');
//   }
  


