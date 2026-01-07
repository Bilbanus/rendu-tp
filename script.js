const structureTP = [
    { id: "tp1", exercices: ["exercice1", "exercice2"] },
    { id: "tp2", exercices: ["Exercice2", "Exercice3"] }, 
    { id: "tp3", exercices: ["exercice 1", "Exercice3"] },
    { id: "tp4", exercices: ["exercice1", "exercice3"] },
    { id: "tp5", exercices: ["exercice 2", "exercice 6"] },
    { id: "tp6", exercices: ["ex3", "exercice 5"] },
    { id: "tp7", exercices: ["Exo3", "exo5"] },
    { id: "tp8", exercices: ["exo1", "exo2"] }
];
const allCards = [];
structureTP.forEach(tp => {
    tp.exercices.forEach(exo => {
        allCards.push({
            titre: `${tp.id.toUpperCase()} - ${exo}`,
            commentaire: `Commentaire pour l'exercice ${exo} du ${tp.id}.`,
            lien: `${tp.id}/${exo}/index.html`
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