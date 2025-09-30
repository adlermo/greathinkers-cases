import { casesData } from './cases.js';

// Aguarda o Petite-Vue estar disponível
function initApp() {
    const { createApp } = window.PetiteVue;

    createApp({
        // Estado inicial
        $delimiters: ['{{', '}}'],
        currentView: 'home',
        selectedCase: null,
        workshops: casesData,

        // Métodos
        showCase(id) {
            if (this.workshops[id]) {
                this.selectedCase = id;
                this.currentView = 'case';
            }
        },

        goHome() {
            this.selectedCase = null;
            this.currentView = 'home';
        }
    }).mount('#app');
}

// Verifica se o Petite-Vue já está carregado
if (window.PetiteVue) {
    initApp();
} else {
    // Aguarda o Petite-Vue carregar
    document.addEventListener('DOMContentLoaded', () => {
        if (window.PetiteVue) {
            initApp();
        } else {
            console.error('Petite-Vue não foi carregado corretamente');
        }
    });
}