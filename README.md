# Cypress + Allure

Este projeto contém testes Cypress com integração ao Allure para geração de relatórios.

## Requisitos

- Node.js (versão 18 ou superior)
- npm (geralmente instalado junto com o Node)
- Java (necessário para o Allure CLI)

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/dieneslab/automacao_cypress_allure.git
cd <seu-repositorio>
```

2. Instale as dependências:
```bash
npm install cypress --save-dev
npm install -D @shelex/cypress-allure-plugin allure-commandline
```

3. Abra o Cypress de forma interativa (opcional):
```bash
npm run cy:open
```

4. Execute os testes em modo headless:
```bash
npm run cy
```

5. Gere o relatório Allure:
```bash
npm run allure:generate
```

6. Abra o relatório no navegador:
```bash
npm run allure:open
```

Pronto! Todos os testes e relatórios devem funcionar localmente.

