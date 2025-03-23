    // Fonction pour ajouter ou enlever la classe 'scrolled' à l'header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 0) { // Si l'utilisateur fait défiler la page
            header.classList.add('scrolled');
        } else { // Si l'utilisateur est tout en haut de la page
            header.classList.remove('scrolled');
        }
    });




    document.querySelectorAll('.faq-question').forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentElement;
            parent.classList.toggle('active'); // Toggle the active state for the FAQ item
        });
    });
    