# 🎲 D&D RPG Sheet Creator

> Uma aplicação moderna para criar e gerenciar fichas de personagem de Dungeons & Dragons, desenvolvida para tornar suas aventuras ainda mais épicas! ⚔️✨

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Nuxt](https://img.shields.io/badge/Nuxt-3-blue.svg)](https://nuxt.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 🎯 Sobre o Projeto

O **D&D RPG Sheet Creator** é uma aplicação web moderna que permite aos jogadores criar, gerenciar e visualizar suas fichas de personagem de Dungeons & Dragons de forma intuitiva e responsiva. Desenvolvida com tecnologias modernas, oferece uma experiência fluida para suas sessões de RPG.

### ✨ Características Principais

- 🎭 **12 Classes Disponíveis** - Todas as classes principais do D&D 5e
- 📝 **Criação Intuitiva** - Interface amigável para criar personagens
- 🔐 **Sistema de Autenticação** - Login e cadastro seguros
- 📱 **Design Responsivo** - Funciona perfeitamente em desktop e mobile
- ⚡ **Performance Otimizada** - Carregamento rápido e experiência fluida

---

## 🚀 Começando

### 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **[Node.js](https://nodejs.org/)** (versão 18 ou superior)
- **[Yarn](https://yarnpkg.com/)** (gerenciador de pacotes)

### 🔧 Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/dndsheet.git
   cd dndsheet
   ```

2. **Instale as dependências**
   ```bash
   yarn install
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   cp .env.example .env
   # Edite o arquivo .env com suas configurações
   ```

4. **Inicie o servidor de desenvolvimento**
   ```bash
   yarn dev
   ```

5. **Acesse a aplicação**
   
   Abra seu navegador e acesse: **http://localhost:3000**

---

## 🎮 Como Usar

### 🔐 Primeiro Acesso

1. **Acesse a página inicial** em `http://localhost:3000`
2. **Faça login** com suas credenciais ou **crie uma nova conta**
3. **Navegue até `/cadastro`** para novos usuários

### 🛡️ Criando seu Personagem

1. **Escolha uma classe** entre as 12 disponíveis
2. **Preencha os dados básicos:**
   - Nome do personagem
   - Raça
   - Nível
   - Atributos (Força, Destreza, Constituição, etc.)
3. **Salve sua ficha** e comece sua aventura!

### 📚 Gerenciando Fichas

- **Visualizar fichas:** Acesse `/fichas` para ver todas as suas fichas
- **Editar personagem:** Clique em qualquer ficha para editar
- **Excluir personagem:** Use o botão de exclusão quando necessário

---

## 🛠️ Tecnologias Utilizadas

- **[Nuxt 3](https://nuxt.com/)** - Framework Vue.js para aplicações universais
- **[TypeScript](https://www.typescriptlang.org/)** - Linguagem de programação tipada
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Vue 3](https://vuejs.org/)** - Framework JavaScript progressivo
- **[Yarn](https://yarnpkg.com/)** - Gerenciador de pacotes rápido e seguro

---

## 📁 Estrutura do Projeto

```
dndsheet/
├── app.vue                 # Componente principal da aplicação
├── assets/                 # Recursos estáticos (CSS, imagens)
├── components/             # Componentes Vue reutilizáveis
├── pages/                  # Páginas da aplicação (roteamento automático)
│   ├── cadastro/          # Página de cadastro
│   ├── ficha/             # Páginas de fichas de personagem
│   └── fichas/            # Lista de fichas
├── server/                # API do servidor
│   └── api/               # Endpoints da API
├── types/                 # Definições de tipos TypeScript
└── nuxt.config.ts         # Configuração do Nuxt
```

---

## 🎵 Playlist de Aventura

Enquanto desenvolve ou joga, ouça nossa playlist especial **[Uma Verdade](https://open.spotify.com)** no Spotify para mergulhar no clima épico das suas partidas! 🎶

---

## 🤝 Contribuindo

Este projeto foi criado com 💖 para a comunidade de RPG. Contribuições são sempre bem-vindas!

### Como Contribuir

1. **Fork o projeto**
2. **Crie uma branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit suas mudanças** (`git commit -m 'Add some AmazingFeature'`)
4. **Push para a branch** (`git push origin feature/AmazingFeature`)
5. **Abra um Pull Request**

### 🐛 Reportando Bugs

Se encontrar algum bug ou tiver sugestões:

1. Verifique se o problema já foi reportado
2. Crie uma nova issue com detalhes claros
3. Inclua passos para reproduzir o problema
4. Adicione screenshots se relevante

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🙏 Agradecimentos

- **Wizards of the Coast** - Por criar o universo incrível de D&D
- **Comunidade de RPG** - Por inspirar este projeto
- **Todos os aventureiros** - Que testaram e deram feedback

---

<div align="center">

**🧙‍♂️ Que suas aventuras sejam épicas e seus dados sempre críticos! 🎲**

*Desenvolvido com 💖 para a comunidade de RPG*

</div>