document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const dropdownMenus = document.querySelectorAll('.dropdown');
dropdownMenus.forEach(dropdown => {
    dropdown.addEventListener('mouseover', function() {
        this.querySelector('.dropdown-menu').style.display = 'block';
    });
    dropdown.addEventListener('mouseout', function() {
        this.querySelector('.dropdown-menu').style.display = 'none';
    });
});

const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#1e7a8c';
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'all 0.3s ease';
    });
    box.addEventListener('mouseout', function() {
        const boxClass = this.classList[1];
        if (boxClass === 'box-patients') {
            this.style.backgroundColor = '#2d9eab';
        } else if (boxClass === 'box-doctors') {
            this.style.backgroundColor = '#3498db';
        } else if (boxClass === 'box-clinics') {
            this.style.backgroundColor = '#e67e22';
        }
        this.style.transform = 'scale(1)';
        this.style.transition = 'all 0.3s ease';
    });
});
