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


