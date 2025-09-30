// Importa os dados dos casos
import { casesData } from './cases.js';

// Função para renderizar os cards dos workshops
function renderWorkshopCards() {
    const grid = document.querySelector('.cases__grid');
    
    // Limpa o conteúdo atual
    grid.innerHTML = '';
    
    // Cria um card para cada workshop
    Object.entries(casesData).forEach(([id, workshop]) => {
        const card = document.createElement('a');
        card.href = `pages/case.html?id=${id}`;
        card.className = 'case-card';
        
        card.innerHTML = `
            <div class="case-card__content">
                <h2 class="case-card__title">${workshop.title}</h2>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Executa quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', renderWorkshopCards);