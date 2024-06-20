document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    function hideSections() {
        sections.forEach(section => section.style.display = 'none');
    }

    function showSection(id) {
        hideSections();
        document.querySelector(id).style.display = 'block';
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const id = this.getAttribute('href');
            showSection(id);
        });
    });

    // Mostrar a primeira seção por padrão
    showSection('#home');
});
