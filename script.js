const structureTP = [
    { 
        id: "tp1", 
        exercices: [
            { nom: "exercice1", comm: "Connaissances utilisées : J’ai travaillé sur la structure et la signification des tableaux en HTML.\nNiveau de difficulté : Très élevé.\nIntérêt : Utile pour bien comprendre la balise table.\nQualité : Le rendu correspond à l’exemple, mais c’était assez difficile." },
            { nom: "exercice2", comm: "Connaissances utilisées : Box model, marges et positionnement CSS.\nNiveau de difficulté : Compliqué, le rendu se décalait souvent.\nIntérêt : Maîtriser les mises en page.\nQualité : J'ai fait de mon mieux pour coller à l'exemple." }
        ] 
    },
    { 
        id: "tp2", 
        exercices: [
            { nom: "Exercice2", comm: "Connaissances utilisées : Variables JS, événements et DOM.\nNiveau de difficulté : Très difficile (gestion d'événements).\nIntérêt : Essentiel pour l'interactivité.\nQualité : Fonctionne après plusieurs corrections." },
            { nom: "Exercice3", comm: "Connaissances utilisées : Structure HTML et intégration d'images.\nNiveau de difficulté : Très difficile à cause de la mise en forme.\nIntérêt : Bon rappel des balises de base.\nQualité : Amélioré grâce aux corrections de l'exercice précédent." }
        ] 
    },
    { 
        id: "tp3", 
        exercices: [
            { nom: "exercice 1", comm: "Connaissances utilisées : Media queries et responsive design.\nNiveau de difficulté : Compliqué pour le changement de couleur au resize.\nIntérêt : Adapter l'interface aux écrans.\nQualité : Amusant à tester." },
            { nom: "Exercice3", comm: "Connaissances utilisées : Menu responsive, transitions CSS et toggle JS.\nNiveau de difficulté : Difficile (bugs sur le menu hamburger).\nIntérêt : Comprendre l'UX mobile.\nQualité : Fonctionnel mais perfectible sur petits écrans." }
        ] 
    },
    { 
        id: "tp4", 
        exercices: [
            { nom: "exercice1", comm: "Connaissances utilisées : Association couleurs et éléments interactifs.\nNiveau de difficulté : Simple malgré quelques bugs de propagation de couleur.\nIntérêt : Réflexion sur la création numérique.\nQualité : Simple et efficace." },
            { nom: "exercice3", comm: "Connaissances utilisées : Sélecteurs CSS et stylisation de tableaux.\nNiveau de difficulté : Difficile pour la stylisation du tableau.\nIntérêt : Maîtriser les sélecteurs avancés.\nQualité : Satisfaisant après plusieurs essais." }
        ] 
    },
    { 
        id: "tp5", 
        exercices: [
            { nom: "exercice 2", comm: "Connaissances utilisées : Manipulation du DOM et événements de scroll.\nNiveau de difficulté : Difficile (création d'un dégradé progressif au scroll).\nIntérêt : Comprendre le comportement dynamique.\nQualité : Fonctionnel." },
            { nom: "exercice 6", comm: "Connaissances utilisées : Effets parallax et transformations CSS/JS.\nNiveau de difficulté : Facile à moyen.\nIntérêt : Apprendre les animations simples.\nQualité : Très satisfaisant, correspond parfaitement à la demande." }
        ] 
    },
    { 
        id: "tp6", 
        exercices: [
            { nom: "ex3", comm: "Connaissances utilisées : Animations JS et calculs de position.\nNiveau de difficulté : Difficile (problème de placement de l'hélice).\nIntérêt : Contrôler le rendu par le code.\nQualité : Pas entièrement satisfait, manque de réalisme." },
            { nom: "exercice 5", comm: "Connaissances utilisées : Logique JS avancée et fonctions réutilisables.\nNiveau de difficulté : Difficile (création d'une bannière avec effet néon).\nIntérêt : Apprendre à structurer un projet sans outils de création.\nQualité : Fonctionnel et beau." }
        ] 
    },
    { 
        id: "tp7", 
        exercices: [
            { nom: "Exo3", comm: "Connaissances utilisées : Fonctions et gestion des inputs.\nNiveau de difficulté : Difficile (problème de cumul des changements).\nIntérêt : Structurer l'interactivité.\nQualité : Fonctionnel mais code à simplifier." },
            { nom: "exo5", comm: "Connaissances utilisées : Manipulation du DOM et modification d'images.\nNiveau de difficulté : Moyen (gestion des dimensions).\nIntérêt : Travailler le visuel et l'interaction.\nQualité : Correct après quelques essais." }
        ] 
    },
    { 
        id: "tp8", 
        exercices: [
            { nom: "exo1", comm: "Connaissances utilisées : Scripts simples et logique JS de base.\nNiveau de difficulté : Très difficile (limites de la carte et animations).\nIntérêt : Création de jeux simples / Pixel 2D.\nQualité : Le personnage tourne comme une toupie !" },
            { nom: "exo2", comm: "Connaissances utilisées : Événements, timers et animations simples.\nNiveau de difficulté : Mixte (facile pour le défilement, dur pour le centrage de Mario).\nIntérêt : Comprendre le timing.\nQualité : Fonctionnel, mais Mario flotte encore un peu." }
        ] 
    }
];

const allCards = [];
structureTP.forEach(tp => {
    tp.exercices.forEach(exo => {
        allCards.push({
            titre: `${tp.id.toUpperCase()} - ${exo.nom}`,
            commentaire: exo.comm,
            lien: `${tp.id}/${exo.nom}/index.html`
        });
    });
});

const container = document.getElementById('tp-container');
const modal = document.getElementById('tp-modal');
const closeModal = document.querySelector('.close-modal');

function displayCards() {
    if (!container) return;
    container.innerHTML = "";

    allCards.forEach(cardData => {
        const card = document.createElement('div');
        card.className = 'tp-card';
        card.innerHTML = `
            <h3>${cardData.titre}</h3>
            <button class="btn-open-modal">Détails & Accès</button>
        `;

        card.querySelector('.btn-open-modal').addEventListener('click', () => {
            document.getElementById('modal-title').innerText = cardData.titre;
            document.getElementById('modal-comment').innerText = cardData.commentaire;
            document.getElementById('modal-link').href = cardData.lien;
            modal.style.display = "block";
        });

        container.appendChild(card);
    });
}

if (closeModal) {
    closeModal.onclick = () => modal.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
};

document.addEventListener('DOMContentLoaded', displayCards);