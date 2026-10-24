# Teste Econverse: Vaga Desenvolvedor Front-End

Home de e-commerce com vitrine de produtos e modal de detalhes, feita com **React + TypeScript + Vite** e **Sass**,
sem bibliotecas de UI.

## O que precisa estar instalado

| Ferramenta | Versão recomendada | Como conferir     |
| ---------- | ------------------ | ----------------- |
| Node.js    | 20.19+ ou 22.12+   | `node -v`         |
| npm        | 10+ (vem com o Node) | `npm -v`        |
| Git        | qualquer versão recente | `git --version` |
| Navegador  | Chrome, Edge, Firefox ou Safari atualizados | — |

Download do Node.js: https://nodejs.org

## Como rodar localmente

```bash
# 1. Clonar o repositório e entrar na pasta do projeto
git clone https://github.com/davi011205/teste-front-end-econverse.git
cd econverse

# 2. Instalar as dependências
npm install

# 3. Instalar o pré-processador Sass (caso ainda não esteja no package.json)
npm install -D sass

# 4. Iniciar o servidor de desenvolvimento
npm run dev
```

Abra **http://localhost:5173** no navegador.

## Consumo da API (CORS)

O `produtos.json` da Econverse não libera CORS para `localhost`. Por isso o `vite.config.ts` tem um **proxy** que
redireciona `/api/econverse/*` para o servidor da Econverse, e o serviço de produtos chama `/api/econverse/produtos.json`.
O proxy funciona com `npm run dev` e `npm run preview`. Se alterar o `vite.config.ts`, reinicie o servidor.

## Estrutura

```
src/
├── assets/          # ícones e imagens importadas pelo código
├── components/      # cada componente tem .tsx e .scss na própria pasta
├── hooks/           # useProducts
├── pages/Home/      # composição da página
├── services/        # productService (consome o produtos.json)
├── styles/          # variáveis, mixins e estilos globais (apenas o necessário)
├── types/           # tipos dos produtos
└── utils/           # formatCurrency
```
