# Gonçalves & Co. - Website Corporativo

## 📋 Sobre o Projeto

Site corporativo moderno da **Gonçalves & Co.**, empresa de consultoria especializada em comércio, gestão e logística, estrategicamente localizada no centro de São Paulo.

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Estilos modernos com animações e efeitos visuais
- **JavaScript** - Interatividade e efeitos dinâmicos
- **Bootstrap 5.3.2** - Framework CSS responsivo
- **Bootstrap Icons** - Ícones vetoriais
- **Google Fonts** - Tipografia (Poppins e Sirin Stencil)

## 🎨 Características do Design

### Efeitos Visuais e Luminosos
- ✨ Animações de fade-in e slide-up
- 🌟 Efeitos de brilho (glow) em botões
- 🎭 Hover effects em cards e elementos interativos
- 🌊 Efeitos de parallax
- ⚡ Animações de loading
- 🎯 Cursor personalizado
- 💫 Efeitos de partículas
- 🔄 Animações de scroll suaves

### Layout Responsivo
- 📱 Design mobile-first
- 💻 Adaptação para tablets e desktops
- 🎯 Navegação intuitiva
- 🎨 Interface moderna e profissional

## 📁 Estrutura do Projeto

```
Site_prototipo_Goncalves&co/
├── homepage.html          # Página inicial
├── sobrenos.html         # Sobre a empresa
├── nossosservicos.html   # Serviços oferecidos
├── contato.html          # Formulário de contato
├── style.css             # Estilos principais
├── script.js             # JavaScript interativo
├── staticwebapp.config.json # Configuração Azure
├── .gitignore            # Arquivos ignorados pelo Git
├── README.md             # Documentação
└── imagens/              # Assets de imagem
    ├── Untitled_logo_5_free-file-removebg-preview.png
    ├── pexels-weekendplayer-187041.jpg
    ├── pexels-pixabay-163726.jpg
    └── pexels-n-voitkevich-6120249.jpg
```

## 🌐 Deploy no Azure Static Web Apps

### Pré-requisitos
- Conta no [GitHub](https://github.com)
- Conta no [Azure](https://azure.microsoft.com)
- [Git](https://git-scm.com/) instalado

### Passo a Passo

#### 1. Preparar o Repositório GitHub

```bash
# Inicializar repositório Git
git init

# Adicionar arquivos
git add .

# Fazer commit inicial
git commit -m "Initial commit: Gonçalves & Co. website"

# Adicionar repositório remoto (substitua pela sua URL)
git remote add origin https://github.com/SEU_USUARIO/goncalves-co-website.git

# Enviar para GitHub
git push -u origin main
```

#### 2. Criar Azure Static Web App

1. Acesse o [Portal do Azure](https://portal.azure.com)
2. Clique em "Criar um recurso"
3. Procure por "Static Web Apps"
4. Clique em "Criar"
5. Preencha as informações:
   - **Subscription**: Sua assinatura
   - **Resource Group**: Crie um novo ou use existente
   - **Name**: `goncalves-co-website`
   - **Plan type**: Free
   - **Region**: East US 2 (ou mais próxima)
   - **Source**: GitHub
   - **Organization**: Sua organização GitHub
   - **Repository**: Seu repositório
   - **Branch**: main
   - **Build Presets**: Custom
   - **App location**: `/`
   - **Output location**: `/`

6. Clique em "Review + create" e depois "Create"

#### 3. Configuração Automática

O Azure criará automaticamente:
- Um workflow GitHub Actions (`.github/workflows/azure-static-web-apps-*.yml`)
- Deploy automático a cada push na branch main
- URL pública para o site

#### 4. Verificar Deploy

1. Vá para o recurso criado no Azure
2. Clique em "Browse" para ver o site
3. A URL será algo como: `https://goncalves-co-website.azurestaticapps.net`

## 🔧 Desenvolvimento Local

### Executar Localmente

```bash
# Clonar o repositório
git clone https://github.com/SEU_USUARIO/goncalves-co-website.git

# Entrar no diretório
cd goncalves-co-website

# Abrir com Live Server (VS Code) ou servir com Python
python -m http.server 8000

# Ou usar Node.js
npx serve .
```

### Estrutura de URLs

- **Homepage**: `/` ou `/home`
- **Sobre Nós**: `/sobre-nos`
- **Serviços**: `/servicos`
- **Contato**: `/contato`

## 📱 Funcionalidades

### Página Inicial (Homepage)
- Hero section com call-to-action
- Prévia dos serviços
- Seção sobre a empresa
- Estatísticas animadas

### Sobre Nós
- História da empresa
- Missão, visão e valores
- Equipe e localização

### Nossos Serviços
- 6 serviços principais detalhados
- Processo de trabalho em 4 etapas
- Call-to-action para contato

### Contato
- Formulário interativo
- Informações de contato
- Mapa de localização
- Horários de atendimento

## 🎯 SEO e Performance

- ✅ Meta tags otimizadas
- ✅ Estrutura semântica HTML5
- ✅ Imagens otimizadas
- ✅ Loading assíncrono de recursos
- ✅ Cache configurado
- ✅ Compressão de assets

## 🔄 Atualizações e Manutenção

### Para fazer alterações:

1. Edite os arquivos localmente
2. Teste as mudanças
3. Faça commit e push:

```bash
git add .
git commit -m "Descrição da alteração"
git push origin main
```

4. O deploy será automático via GitHub Actions

## 📞 Suporte

Para dúvidas ou suporte técnico:
- **Email**: contato@goncalvesco.com.br
- **Telefone**: +55 (11) 99999-9999

## 📊 Status do Deploy

✅ Repositório configurado  
✅ Workflow GitHub Actions ativo  
✅ Azure Static Web Apps conectado  
🔄 Deploy em andamento...

## 📄 Licença

© 2024 - Gonçalves & Co. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para Gonçalves & Co.**