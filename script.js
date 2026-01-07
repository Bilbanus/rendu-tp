const tps = [
    { titre: "TP 01 : Structure HTML5", commentaire: "Structure très propre, l'utilisation de la balise <main> est bien comprise.", lien: "tps/tp1/index.html" },
    { titre: "TP 02 : Mise en forme CSS", commentaire: "Bon choix de palette de couleurs. Attention aux marges externes.", lien: "tps/tp2/index.html" },
    { titre: "TP 03 : Flexbox Layout", commentaire: "Le centrage vertical est parfaitement maîtrisé ici.", lien: "tps/tp3/index.html" },
    { titre: "TP 04 : Formulaires Web", commentaire: "Les messages d'erreurs sont clairs et bien placés.", lien: "tps/tp4/index.html" },
    { titre: "TP 05 : CSS Grid", commentaire: "Excellente gestion des zones (grid-template-areas).", lien: "tps/tp5/index.html" },
    { titre: "TP 06 : Animations CSS", commentaire: "Les animations sont fluides et n'alourdissent pas la navigation.", lien: "tps/tp6/index.html" },
    { titre: "TP 07 : Introduction JavaScript", commentaire: "Logique de calcul correcte. Code bien structuré.", lien: "tps/tp7/index.html" },
    { titre: "TP 08 : Événements JS", commentaire: "Le passage du mode clair au mode sombre fonctionne parfaitement.", lien: "tps/tp8/index.html" },
    { titre: "TP 09 : Manipulation du DOM", commentaire: "Très bonne utilisation de document.createElement().", lien: "tps/tp9/index.html" },
    { titre: "TP 10 : Tableaux et Objets", commentaire: "L'utilisation de la méthode .filter() est efficace.", lien: "tps/tp10/index.html" },
    { titre: "TP 11 : API Fetch", commentaire: "La gestion de l'asynchrone (async/await) est impeccable.", lien: "tps/tp11/index.html" },
    { titre: "TP 12 : LocalStorage", commentaire: "Les données sont bien conservées même après rafraîchissement.", lien: "tps/tp12/index.html" },
    { titre: "TP 13 : Responsive Design", commentaire: "Les Media Queries sont bien ciblées pour tous les formats.", lien: "tps/tp13/index.html" },
    { titre: "TP 14 : Librairies Tierces", commentaire: "L'intégration de la carte est fluide et fonctionnelle.", lien: "tps/tp14/index.html" },
    { titre: "TP 15 : Programmation Orientée Objet", commentaire: "Bonne utilisation des classes et de l'héritage.", lien: "tps/tp15/index.html" },
    { titre: "TP 16 : Projet Final", commentaire: "Un projet complet qui démontre une grande autonomie.", lien: "tps/tp16/index.html" }
];

const container = document.getElementById('tp-container');
const modal = document.getElementById('tp-modal');
const closeModal = document.querySelector('.close-modal');

function displayTPs() {
    if(!container) return; // Sécurité si on est sur la page index

    tps.forEach(tp => {
        const card = document.createElement('div');
        card.className = 'tp-card';
        card.innerHTML = `
            <h3>${tp.titre}</h3>
            <button class="btn-open-modal" style="width:100%; padding:10px; cursor:pointer; background:#6366f1; color:white; border:none; border-radius:5px;">
                Détails & Accès
            </button>
        `;

        // Au clic sur le bouton de la carte
        card.querySelector('.btn-open-modal').addEventListener('click', () => {
            document.getElementById('modal-title').innerText = tp.titre;
            document.getElementById('modal-comment').innerText = tp.commentaire;
            document.getElementById('modal-link').href = tp.lien;
            modal.style.display = "block";
        });

        container.appendChild(card);
    });
}

// Fermer la modale
if(closeModal) {
    closeModal.onclick = () => modal.style.display = "none";
}

// Fermer si on clique à côté de la modale
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
}

document.addEventListener('DOMContentLoaded', displayTPs);