# Portfólio — João Vitor

Site pessoal desenvolvido com Next.js App Router, React e CSS. O projeto usa a estrutura e as configurações de um app criado com `create-next-app`, adaptadas para JavaScript e CSS sem Tailwind.

## Requisitos

- Node.js 20.9 ou superior
- npm

## Executar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

Para gerar e executar a versão de produção:

```bash
npm run build
npm start
```

Para verificar o código com ESLint:

```bash
npm run lint
```

## Páginas

- `/` — apresentação
- `/sobre` — trajetória e tecnologias
- `/academico` — formação e competências
- `/profissional` — experiência profissional e residência tecnológica
- `/projetos` — projetos em destaque e repositórios do GitHub

Os repositórios são carregados no servidor pela GitHub REST API. Se a API estiver indisponível, a página mostra uma mensagem no lugar da lista.

## Estrutura

```text
src/
  app/
    academico/page.jsx
    profissional/page.jsx
    projetos/page.jsx
    sobre/page.jsx
    globals.css
    layout.jsx
    page.jsx
  components/
    Footer.jsx
    Navbar.jsx
```
