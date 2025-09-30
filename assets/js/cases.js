// Dados dos casos
const casesData = {
    1: {
        title: "Sócrates e o Método Socrático",
        content: `O método socrático, também conhecido como maiêutica, é uma forma de investigação filosófica 
        desenvolvida por Sócrates. Este método consiste em fazer perguntas provocativas para estimular o 
        pensamento crítico e iluminar ideias.

        Através do diálogo e do questionamento constante, Sócrates levava seus interlocutores a 
        questionarem suas próprias crenças e pressupostos, revelando as contradições em seu pensamento. 
        Este processo de "dar à luz" ao conhecimento (maiêutica) permite que as pessoas descubram 
        a verdade por si mesmas, em vez de simplesmente aceitar o que lhes é dito.

        O impacto deste método na filosofia e educação é duradouro, sendo utilizado até hoje em 
        diversas áreas do conhecimento, desde o ensino até a psicoterapia. A abordagem socrática 
        nos ensina que o verdadeiro conhecimento vem do reconhecimento de nossa própria ignorância 
        e da busca constante pelo saber.`
    },
    2: {
        title: "Platão e o Mito da Caverna",
        content: `O Mito da Caverna, apresentado por Platão em "A República", é uma das alegorias mais 
        influentes da filosofia ocidental. A história retrata prisioneiros acorrentados em uma caverna, 
        que só podem ver sombras projetadas na parede e as consideram como realidade.

        Esta alegoria representa a jornada do conhecimento: da ignorância (as sombras) à iluminação 
        (o mundo fora da caverna). Platão sugere que nosso entendimento do mundo é frequentemente 
        limitado por nossas percepções e preconceitos, e que a verdadeira sabedoria requer um esforço 
        consciente para superar essas limitações.

        O mito também aborda temas como educação, política e a responsabilidade dos filósofos para com 
        a sociedade. A mensagem central é que o conhecimento verdadeiro exige que nos libertemos de 
        nossas "correntes" mentais e busquemos uma compreensão mais profunda da realidade.`
    },
    3: {
        title: "Aristóteles e a Ética",
        content: `Aristóteles desenvolveu uma abordagem única para a ética baseada no conceito de 
        eudaimonia (felicidade ou florescimento humano). Sua obra "Ética a Nicômaco" estabelece que 
        a virtude não é apenas conhecimento, mas um hábito que deve ser cultivado através da prática.

        Para Aristóteles, a virtude está no meio-termo entre dois extremos (a doutrina do meio-termo). 
        Por exemplo, a coragem é o meio-termo entre a covardia e a temeridade. Esta ideia sugere que 
        o comportamento ético não é apenas evitar o mal, mas encontrar o equilíbrio adequado em nossas ações.

        Sua perspectiva sobre a ética continua relevante hoje, influenciando discussões sobre 
        desenvolvimento pessoal, liderança e tomada de decisões éticas no mundo contemporâneo.`
    }
    // Outros casos podem ser adicionados aqui...
};

// Função para carregar os detalhes do caso
function loadCaseDetails() {
    // Pegar o ID do caso da URL
    const urlParams = new URLSearchParams(window.location.search);
    const caseId = urlParams.get('id');
    
    // Verificar se o caso existe
    if (caseId && casesData[caseId]) {
        const caseData = casesData[caseId];
        
        // Atualizar título
        document.querySelector('.case-detail__title').textContent = caseData.title;
        
        // Atualizar conteúdo
        document.querySelector('.case-detail__text').textContent = caseData.content;
    }
}

// Carregar detalhes quando a página carregar
document.addEventListener('DOMContentLoaded', loadCaseDetails);