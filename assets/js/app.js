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
            this.selectedCase = id;
            this.currentView = 'case';
            window.history.pushState({ id }, '', `?case=${id}`);
        },

        goHome() {
            this.selectedCase = null;
            this.currentView = 'home';
            window.history.pushState({}, '', './');
        },

        handlePopState() {
            const params = new URLSearchParams(window.location.search);
            const caseId = params.get('case');
            
            if (caseId && this.workshops[caseId]) {
                this.showCase(caseId);
            } else {
                this.goHome();
            }
        }
    }).mount('#app');

    // Configura o handler para o botão voltar do navegador
    window.addEventListener('popstate', () => app.handlePopState());
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