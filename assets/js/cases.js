// Dados dos casos
export const casesData = {
    1: {
        title: "Super Apresentações",
        content: `Workshop focado em revolucionar a forma como você se apresenta, combinando psicologia e 
        neurociência com as técnicas modernas de storytelling.

        Neste treinamento, os participantes aprendem como:
        - Utilizar técnicas avançadas de storytelling para criar apresentações memoráveis
        - Aplicar princípios de neurociência para melhorar o engajamento da audiência
        - Desenvolver uma presença mais impactante durante apresentações
        - Estruturar apresentações de forma mais efetiva e envolvente
        
        O workshop aborda a psicologia por trás das apresentações eficazes e como a metodologia 
        de storytelling pode transformar dados e informações em narrativas cativantes. Os participantes 
        saem com ferramentas práticas para criar e entregar apresentações que realmente conectam com 
        sua audiência.

        Após este treinamento, suas apresentações nunca mais serão as mesmas. Você aprenderá a 
        combinar técnica e arte para criar momentos memoráveis e impactantes em suas comunicações.`
    },
    2: {
        title: "O Código das Pessoas",
        content: `Um workshop transformador focado em relacionamento interpessoal e comunicação efetiva, 
        projetado para melhorar tanto sua vida profissional quanto pessoal.

        Este treinamento abrange:
        - Fundamentos da comunicação interpessoal efetiva
        - Técnicas para melhorar o relacionamento no ambiente profissional
        - Estratégias para construir conexões mais significativas
        - Métodos práticos para resolver conflitos e melhorar o diálogo

        O programa oferece uma abordagem prática e comprovada para entender melhor as pessoas e 
        construir relacionamentos mais fortes. Os participantes aprendem a identificar padrões de 
        comunicação e desenvolver estratégias para melhorar suas interações em todos os níveis.

        O resultado é uma comunicação mais clara, relacionamentos mais saudáveis e um ambiente de 
        trabalho mais produtivo e harmonioso. As ferramentas apresentadas podem ser aplicadas 
        imediatamente tanto no contexto profissional quanto pessoal.`
    },
    3: {
        title: "Train the Trainer",
        content: `Um programa avançado que combina as técnicas da Andragogia com modernas metodologias 
        de apresentação para formar facilitadores internos excepcionais.

        O treinamento aborda:
        - Princípios fundamentais da Andragogia (educação de adultos)
        - Técnicas modernas de facilitação e apresentação
        - Desenvolvimento de habilidades de coaching e mentoria
        - Métodos para criar e conduzir workshops efetivos

        Este programa é especialmente projetado para transformar profissionais em multiplicadores 
        internos altamente eficazes. Combinando teoria e prática, os participantes desenvolvem as 
        habilidades necessárias para facilitar aprendizados significativos e duradouros.

        A metodologia única combina o melhor da Andragogia com técnicas contemporâneas de 
        apresentação, criando facilitadores capazes de entregar treinamentos verdadeiramente 
        transformadores.`
    },
    4: {
        title: "Liderança Situacional",
        content: `Baseado na metodologia de Paul Hersey e Ken Blanchard, este workshop ensina líderes 
        a adaptarem seu estilo de liderança de acordo com as diferentes situações e pessoas.

        O programa explora:
        - Os quatro estilos básicos de liderança
        - Como avaliar a maturidade e prontidão dos liderados
        - Técnicas para adaptar seu estilo de liderança
        - Estratégias para desenvolvimento de equipes

        A Liderança Situacional reconhece que não existe um estilo único de liderança eficaz para 
        todas as situações. Os participantes aprendem a identificar o nível de desenvolvimento de 
        seus liderados e adaptar seu estilo de liderança de acordo.

        Este modelo prático e comprovado ajuda líderes a melhorarem sua eficácia através da 
        flexibilidade e adaptabilidade em seu estilo de liderança, resultando em equipes mais 
        engajadas e produtivas.`
    },
    5: {
        title: "The Collaborative Way",
        content: `Workshop focado em criar uma cultura de colaboração e respeito que gera resultados 
        extraordinários para a organização.

        O treinamento aborda:
        - Princípios fundamentais da colaboração efetiva
        - Construção de uma cultura de respeito mútuo
        - Alinhamento entre valores pessoais e organizacionais
        - Técnicas para potencializar resultados através da colaboração

        Este programa único ensina como criar um ambiente onde a colaboração genuína prospera, 
        levando a resultados superiores e sustentáveis. Os participantes aprendem como transformar 
        comportamentos individuais em uma cultura coletiva de excelência.

        O foco está em criar uma mentalidade colaborativa que vai além das ferramentas e técnicas, 
        estabelecendo uma base sólida para o sucesso organizacional a longo prazo.`
    },
    6: {
        title: "Conversas Decisivas",
        content: `Um workshop transformador que ensina como lidar com situações de alta complexidade 
        emocional e stakes elevados de forma construtiva e eficaz.

        O programa cobre:
        - Técnicas para gerenciar emoções em conversas difíceis
        - Métodos para lidar com opiniões divergentes
        - Estratégias para manter o diálogo produtivo
        - Ferramentas para alcançar resultados positivos em situações desafiadoras

        Os participantes aprendem a transformar conversas potencialmente conflituosas em diálogos 
        construtivos. O workshop fornece um framework prático para abordar temas sensíveis e 
        situações de alto impacto emocional.

        Esta metodologia comprovada ajuda a mudar permanentemente a maneira como as pessoas 
        lidam com conversas difíceis, criando um ambiente mais aberto e produtivo para o diálogo.`
    }
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