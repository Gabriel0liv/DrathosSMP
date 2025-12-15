# Drathos Website (Em desenvolvimento)

[![React](https://img.shields.io/badge/React-19.0-blue?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

Website oficial do servidor **Drathos SMP**, desenvolvido para apresentar o rico universo e recursos do servidor.

> 🤝 **Projeto Comunitário**: Este site nasceu da iniciativa de um grupo de amigos com gostos em comum, desenvolvido com carinho para celebrar e expandir a experiência do servidor que tanto gostamos.

## Sobre o Projeto

Este projeto é uma Single Page Application (SPA) construída com tecnologias web modernas para oferecer uma experiência de navegação fluida e visualmente imersiva. O site serve como um hub central de informações para os jogadores, contendo detalhes sobre panteões, regras (domus) e mecânicas do servidor.

## Funcionalidades

- **Navegação Interativa**: Sistema de roteamento interno fluido para transição entre seções.
- **Panteão dos Deuses**: Páginas detalhadas para cada divindade com lore, habilidades e informações visuais.
- **Sistema de Domus**: Apresentação das casas e suas características.
- **Lore e História**: Seções dedicadas à narrativa do servidor.
- **Design Responsivo**: Layout adaptável para desktop e dispositivos móveis.
- **Animações**: Integração com Framer Motion para uma experiência de usuário dinâmica.

## Tecnologias

O projeto foi desenvolvido utilizando uma stack moderna focada em performance e experiência de desenvolvimento:

- **[React 19](https://react.dev/)**: Biblioteca principal para construção da interface.
- **[Vite](https://vitejs.dev/)**: Build tool ultrarrápida para desenvolvimento frontend.
- **[TypeScript](https://www.typescriptlang.org/)**: Superconjunto de JavaScript que adiciona tipagem estática.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de CSS utilitário para estilização ágil.
- **[Framer Motion](https://www.framer.com/motion/)**: Biblioteca de animações para React.
- **[Lucide React](https://lucide.dev/)**: Coleção de ícones consistente e leve.

## Instalação e Uso

Pré-requisitos: Você precisa ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/drathos-website.git
   cd drathos-website
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```
   O site estará acessível em `http://localhost:5173`.

4. **Build para produção**
   Para gerar a versão otimizada para deploy:
   ```bash
   npm run build
   ```

## Estrutura do Projeto

A estrutura de arquivos principal está organizada da seguinte forma:

```
src/
├── components/      # Componentes React reutilizáveis (Header, Footer, Seções)
├── data/           # Arquivos de dados estáticos (ex: godsData.ts)
├── assets/         # Imagens, fontes e outros recursos estáticos
├── styles/         # Estilos globais e customizações
├── App.tsx         # Componente principal e gerenciamento de rotas/estado
└── main.tsx        # Ponto de entrada da aplicação
```

## Licença

Este projeto é de uso exclusivo do servidor Drathos SMP.
