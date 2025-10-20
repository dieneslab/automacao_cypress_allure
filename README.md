# 🌟 Cypress + Allure Report Project

Bem-vindo ao projeto de automação de testes **Cypress + Allure**, que integra a execução de testes end-to-end com geração de relatórios dinâmicos e interativos através do **Allure Framework**. 🚀

---

## 📌 Sobre o Projeto

Este projeto foi criado para demonstrar a integração entre o **Cypress** e o **Allure**, gerando relatórios visuais e detalhados que auxiliam no monitoramento da qualidade do software durante o ciclo de desenvolvimento.

---

## 🛠️ Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) — Framework de testes E2E
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) — Linguagem utilizada
- [Allure Framework](https://docs.qameta.io/allure/) — Relatórios de testes interativos
- [Mocha](https://mochajs.org/) & [Chai](https://www.chaijs.com/) — Estrutura de assertions
- [GitHub Actions](https://github.com/features/actions) — Integração contínua (CI/CD)

---

## 📂 Estrutura do Projeto

```sh
📦 automacao_cypress_allure
├── 📂 allure_reports      # Relatórios Allure gerados após a execução
├── 📂 allure_results      # Resultados Allure gerados após a execução
├── 📂 cypress
│   ├── 📂 e2e             # Testes automatizados (API, Front e Cucumber)
│   ├── 📂 fixtures        # Mocks e dados de teste
│   ├── 📂 support         # Comandos customizados e configurações globais
├── 📜 cypress.config.js   # Configuração principal do Cypress
├── 📜 LICENSE             # Licença do projeto
├── 📜 package.json        # Dependências e scripts
├── 📜 README.md           # Documentação do projeto
```

---

## ⚙️ Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) — versão 18 ou superior  
- [npm](https://www.npmjs.com/) — geralmente vem junto com o Node  
- [Java](https://www.java.com/) — necessário para o Allure CLI  

Verifique a instalação do Java com:

```bash
java -version
```

---

## 🚀 Instalação e Execução Local

1. **Clone o repositório**
```bash
git clone https://github.com/dieneslab/automacao_cypress_allure.git
cd automacao_cypress_allure
```

2. **Instale as dependências**
```bash
npm install cypress --save-dev
npm install -D @shelex/cypress-allure-plugin allure-commandline
```

3. **Abra o Cypress (modo interativo)**
```bash
npm run cy:open
```

4. **Execute os testes no modo headless**
```bash
npm run test
```

5. **Gere o relatório Allure**
```bash
npm run allure:generate
```

6. **Abra o relatório no navegador**
```bash
npm run allure:open
```

Após a execução, o relatório será aberto no navegador, mostrando métricas como status dos testes, tempo de execução e histórico.

---

## 🤖 Execução em Pipeline (CI/CD)

O projeto pode ser configurado para execução automática via **GitHub Actions**.  
A pipeline executa os testes, gera os relatórios e pode publicar os resultados como artefatos.

---

## 🧾 Scripts Disponíveis

| Comando | Descrição |
|----------|------------|
| `npm run cy:open` | Abre o Cypress em modo interativo |
| `npm run test` | Executa todos os testes em modo headless |
| `npm run allure:generate` | Gera o relatório Allure baseado nos resultados |
| `npm run allure:open` | Abre o relatório Allure no navegador |
| `npm run clean:allure` | Remove relatórios antigos do diretório `allure-results` |

---

## 📈 Relatório Allure

O relatório inclui gráficos, métricas e histórico de execuções.  
Ele pode ser consultado pelo [**LINK**](https://dieneslab.github.io/automacao_cypress_allure/).

---

## 🤝 Contribuindo

Sinta-se à vontade para abrir issues, sugerir melhorias ou enviar PRs.  
Toda contribuição é bem-vinda! 💡

---

## 📜 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido com 💻 por [**Dienes Stein**](https://github.com/dieneslab) ✨
