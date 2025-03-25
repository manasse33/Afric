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

    const showtext =document.getElementById('showtext');
    const hiddentext =document.getElementById('hiddentext');
    showtext.addEventListener('click',function(event){
        event.preventDefault();
        if (hiddentext.style.display ==="none" || hiddentext.style.display ==="") {
            hiddentext.style.display = "block",
            hiddentext.style.animation ="fadeInUp 2s ease-out forwards"
        }
        else{
            hiddentext.style.display ="none"
              hiddentext.style.animation ="fadeInUp 2s ease-out forwards"
        }
    }
);
    const Fiabilite =document.getElementById('Fiabilite');
    const hiddenFiabilite =document.getElementById('hiddentextFiabilite');
    Fiabilite.addEventListener('click',function(event){
        event.preventDefault();
        if (hiddentextFiabilite.style.display ==="none" || hiddentextFiabilite.style.display ==="") {
            hiddentextFiabilite.style.display = "block",
            hiddentextFiabilite.style.animation ="fadeInUp 2s ease-out forwards"
        }
        else{
            hiddentextFiabilite.style.display ="none"
            hiddentextFiabilite.style.animation ="fadeInUp 2s ease-out forwards"
        }
    }
);
    const Accessibilite =document.getElementById('Accessibilite');
    const hiddentextAccessibilite =document.getElementById('hiddentextAccessibilite');
    Accessibilite.addEventListener('click',function(event){
        event.preventDefault();
        if (hiddentextAccessibilite.style.display ==="none" || hiddentextAccessibilite.style.display ==="") {
            hiddentextAccessibilite.style.display = "block",
            hiddentextAccessibilite.style.animation ="fadeInUp 2s ease-out forwards"
        }
        else{
            hiddentextAccessibilite.style.display ="none"
            hiddentextAccessibilite.style.animation ="fadeInUp 2s ease-out forwards"
        }
    }
);
    const Engagement =document.getElementById('Engagement');
    const hiddenEngagement =document.getElementById('hiddentextEngagement');
    Engagement.addEventListener('click',function(event){
        event.preventDefault();
        if (hiddentextEngagement.style.display ==="none" || hiddentextEngagement.style.display ==="") {
            hiddentextEngagement.style.display = "block",
            hiddentextEngagement.style.animation ="fadeInUp 2s ease-out forwards"
        }
        else{
            hiddentextEngagement.style.display ="none"
            hiddentextEngagement.style.animation ="fadeInUp 2s ease-out forwards"
        }
    }
);
function toggleMenu(){
const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('active');
}
