# 💻 Sistema de estoque para produtos

## 📌 Descrição

Este projeto foi desenvolvido com o objetivo de **aprofundar conhecimentos Tanstack router para rotas**, **Tanstack query para requisições** e **arquitetura em camadas no backend**.

O sistema conta com:
- **Login e cadastro de loja**
- **Página principal com dashboard para informações dos produtos com gráficos**
- **Seção para visualisar os produtos com busca e filtro por categoria, preço e quantidade**

A autenticação é baseada em JSON Web Tokens (JWT), armazenados em cookies HTTP-only, garantindo maior segurança na comunicação entre frontend e backend.

---

## ⚙️ Instalação Frontend (Vite)

```bash
npm install 
```

```bash
npm run dev
```
## ⚙️ Instalação BackEnd em Node.js

```bash
npm install
```

### .env

```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
JWT_PASSWORD=sua_chave_secreta
