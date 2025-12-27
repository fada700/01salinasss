

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cierro el menu
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});


function toggleService(index) {
    const details = document.getElementById(`service-${index}`);
    const btn = details.previousElementSibling;
    const isOpen = details.classList.contains('show');
    

    document.querySelectorAll('.service-details').forEach((detail, i) => {
        if (i !== index) {
            detail.classList.remove('show');
            detail.previousElementSibling.classList.remove('active');
            detail.previousElementSibling.querySelector('.expand-text').textContent = 'Ver más detalles';
        }
    });
    
  
    if (isOpen) {
        details.classList.remove('show');
        btn.classList.remove('active');
        btn.querySelector('.expand-text').textContent = 'Ver más detalles';
    } else {
        details.classList.add('show');
        btn.classList.add('active');
        btn.querySelector('.expand-text').textContent = 'Ver menos';
    }
}
