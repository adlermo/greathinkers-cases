# Great Thinkers Cases

Uma aplicação web para visualização de casos de estudo de grandes pensadores, com design minimalista e responsivo.

## 📱 Layout

- **Lista de Casos**: Grid 3x3 responsiva que se adapta a diferentes tamanhos de tela
- **Detalhes do Caso**: Visualização individual com navegação intuitiva
- **Design**: Interface minimalista seguindo princípios de UI/UX modernos

## 🚀 Tecnologias

- HTML5 semântico
- CSS moderno
  - CSS Grid para layouts responsivos
  - Flexbox para alinhamentos
  - Variáveis CSS para consistência
  - BEM (Block Element Modifier) para nomenclatura de classes
- Design responsivo mobile-first

## 📁 Estrutura do Projeto

```
greathinkers-cases/
├── index.html              # Página principal com grid de casos
├── pages/                  # Templates HTML adicionais
│   └── case.html           # Template para detalhes do caso
├── assets/                 # Recursos estáticos
│   ├── css/                # Estilos
│   │   ├── normalize.css   # Reset CSS
│   │   ├── variables.css   # Variáveis CSS
│   │   └── main.css        # Estilos principais
│   ├── images/             # Imagens e recursos visuais
│   └── js/                 # JavaScript (futuras implementações)
└── README.md               # Esta documentação
```

## 🚦 Começando

1. Clone o repositório
```bash
git clone https://github.com/adlermo/greathinkers-cases.git
cd greathinkers-cases
```

2. Para desenvolvimento:
   - Use o Live Server do VS Code ou qualquer servidor HTTP local
   - Abra `index.html` no navegador

## 📦 Deploy

O projeto está configurado para deploy automático no GitHub Pages:

1. No repositório, vá em Settings > Pages
2. Em "Source", selecione a branch `main`
3. O site estará disponível em: `https://adlermo.github.io/greathinkers-cases/`

## 🎯 Features

- [x] Layout responsivo
- [x] Grid de casos
- [x] Página de detalhes
- [x] Navegação entre páginas
- [ ] Conteúdo dinâmico dos casos
- [ ] Animações de transição
- [ ] Modo escuro

## 👨‍💻 Autor

- [@adlermo](https://github.com/adlermo)

---

Feito com ❤️ e código limpo.