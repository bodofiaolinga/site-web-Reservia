const liens = document.querySelectorAll('.navigation a');
const bar = document.querySelector('.navigation .bar');

function deplacerBar(element) {
  const lienRect = element.getBoundingClientRect();
  const navRect = element.closest('.navigation').getBoundingClientRect();


  bar.style.width = Math.round(lienRect.width) + "px";
  bar.style.left = Math.round(lienRect.left - navRect.left) + "px";
}

// placer la barre sur le lien actif
const lienActif = document.querySelector('.navigation a.active');
if (lienActif) deplacerBar(lienActif);

// Déplacer la barre au clic
liens.forEach(l => {
  l.addEventListener('click', function(e) {
    e.preventDefault();
    liens.forEach(lk => lk.classList.remove('active'));
    this.classList.add('active');
    deplacerBar(this);
  });
});


    