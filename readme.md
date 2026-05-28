# 📋 Automação de Testes de API com Cypress

## 📌 Sobre o Projeto

Este projeto representa uma evolução de uma primeira versão de automação de testes de API desenvolvida anteriormente utilizando Cypress.

Após a construção inicial do CRUD básico, o projeto passou por uma etapa de refatoração e melhorias estruturais com o objetivo de aplicar conceitos mais próximos de cenários reais de automação de APIs.

Nesta nova versão foram implementadas melhorias como:
- reutilização de código através de Custom Commands
- geração dinâmica de dados utilizando Faker.js
- validação de arrays retornados pela API
- rastreamento de alterações em atualizações de recursos
- melhorias na organização e manutenção do código
- validações positivas e negativas dos endpoints
- logs dinâmicos no Cypress

O objetivo dessa evolução foi não apenas automatizar requisições HTTP, mas também demonstrar maior maturidade na estruturação de testes automatizados, organização do projeto e aplicação de boas práticas de automação.

A API utilizada no projeto foi a:

https://restful-api.dev/

---

# 🚀 Tecnologias Utilizadas

- JavaScript
- Cypress
- Faker.js
- API REST
- Node.js

---

# 📂 Estrutura do Projeto

```bash
cypress/
│
├── e2e/
│   ├── atualizar_dispositivo.cy.js
│   ├── buscar_dispositivo.cy.js
│   ├── criar_dispositivo.cy.js
│   └── deletar_dispositivo.cy.js
│
├── support/
│   └── commands.js
```

---

# 🧪 Funcionalidades Implementadas

## ✅ CREATE — Criação de dispositivos

Arquivo:
```bash
criar_dispositivo.cy.js
```

Neste cenário foi implementada a criação de dispositivos através do método POST.

Além da validação do status code da resposta, também foram realizadas validações do:
- nome do dispositivo criado
- ID retornado pela API

---

# 🎲 Utilização do Faker.js

Foi implementada a biblioteca Faker.js para geração dinâmica de dados durante os testes.

## 📌 Por que utilizar o Faker?

A utilização do Faker tem como objetivo:
- evitar dependência de dados fixos
- tornar os testes mais dinâmicos
- reduzir repetição de massa de dados
- simular cenários mais próximos de um ambiente real
- minimizar conflitos de criação de registros repetidos

Exemplo utilizado no projeto:

```javascript
const nomeDispositivo = faker.commerce.productName()
```

A cada execução do teste, um nome diferente é gerado automaticamente.

Isso permite validar que o sistema consegue lidar com diferentes entradas de dados de maneira dinâmica.

---

# 🔄 UPDATE — Atualização de dispositivos

Arquivo:
```bash
atualizar_dispositivo.cy.js
```

Neste cenário foi implementada a atualização de dispositivos através do método PUT.

Além da atualização do dispositivo, o teste também realiza:
- captura do nome antigo do produto
- atualização para um novo nome gerado dinamicamente
- validação do novo nome retornado pela API
- exibição no Cypress do nome antigo e do nome atualizado

---

# 📌 Rastreamento de Alterações

Antes da atualização do dispositivo, é realizado um GET do recurso para capturar o estado anterior do produto.

Após isso, o PUT é executado e o novo estado é validado.

Isso foi implementado para demonstrar:
- rastreabilidade das alterações
- comparação entre estado anterior e estado atualizado
- validação mais rica do fluxo de atualização

Exemplo exibido no Cypress:

```bash
Nome antigo: Apple Mouse
Nome atualizado: Practical Steel Keyboard
```

---

# 🔍 READ — Busca de dispositivos

Arquivo:
```bash
buscar_dispositivo.cy.js
```

Neste arquivo foram implementados diferentes cenários de busca:
- Buscar dispositivo existente
- Buscar dispositivo inexistente
- Buscar dispositivo atualizado
- Buscar dispositivo deletado
- Listar dispositivos com validação de array

---

# 📌 Validação de Cenários Positivos e Negativos

Foram implementados cenários:
- positivos (status 200)
- negativos (status 404)

Objetivo:
validar o comportamento correto da API tanto para recursos válidos quanto inválidos.

---

# 🧩 Validação de Array

Foi implementada uma validação completa da estrutura de array retornada pela API.

Exemplo:

```javascript
expect(resposta.body).to.be.an('array')
```

Além disso, foi utilizada iteração com:

```javascript
forEach()
```

para validar dinamicamente todos os itens retornados pela API.

---

# 📌 Por que validar arrays?

A validação de arrays foi implementada para:
- garantir que a API retorna uma coleção válida de objetos
- validar estrutura dos itens retornados
- validar campos obrigatórios dinamicamente
- evitar validações limitadas apenas a itens fixos

---

# 🔁 Utilização do forEach()

Foi utilizado:

```javascript
resposta.body.forEach((item) => {
```

para percorrer todos os dispositivos retornados pela API.

Durante a iteração, foram realizadas validações de:
- ID
- Nome dos dispositivos

Além disso, logs dinâmicos foram adicionados no Cypress:

```javascript
cy.log(`ID: ${item.id} | Nome: ${item.name}`)
```

Isso permite visualizar todos os dados retornados pela API durante a execução dos testes.

---

# 🗑️ DELETE — Exclusão de dispositivos

Arquivo:
```bash
deletar_dispositivo.cy.js
```

Neste cenário foi implementada a exclusão de dispositivos através do método DELETE.

Além da exclusão do recurso, o projeto também realiza:
- captura do nome do produto antes da exclusão
- exibição do nome deletado no Cypress
- validação do status code 200

---

# 📌 Busca Pós DELETE

Após a exclusão do dispositivo, foi implementado um cenário de GET pós DELETE.

Objetivo:
validar que o recurso realmente deixou de existir na API.

Neste cenário:
- o status esperado é 404
- o ID deletado é exibido
- o nome do dispositivo deletado também é exibido

---

# 🧠 Custom Commands (commands.js)

Arquivo:
```bash
cypress/support/commands.js
```

Foi implementada reutilização de código através de Custom Commands do Cypress.

---

# 📌 Por que utilizar Commands?

Os Commands foram implementados para:
- centralizar requisições HTTP
- reduzir duplicidade de código
- melhorar manutenção do projeto
- facilitar escalabilidade futura
- deixar os testes mais limpos e organizados

---

# 📌 Commands Criados

## Buscar dispositivos

```javascript
cy.buscarDispositivos()
```

## Criar dispositivo

```javascript
cy.criarDispositivo()
```

## Atualizar dispositivo

```javascript
cy.atualizarDispositivo()
```

## Deletar dispositivo

```javascript
cy.deletarDispositivo()
```

---

# 📌 Benefícios da Reutilização de Código

Antes da implementação dos Commands:
- cada arquivo possuía seu próprio `cy.request()`

Após a implementação:
- as requisições passaram a ficar centralizadas no `commands.js`

Isso facilita:
- futuras alterações de endpoints
- manutenção do projeto
- reaproveitamento de funções
- organização estrutural

---

# ⚠️ Dependência de Estado Entre os Testes

Durante o desenvolvimento do projeto, foi identificado um comportamento importante relacionado ao fluxo CRUD.

Exemplo:

```bash
CREATE → UPDATE → GET atualizado → DELETE → GET deletado
```

Após a exclusão do dispositivo:
- o recurso deixa de existir
- o cenário de busca do dispositivo atualizado passa a falhar

Por esse motivo, alguns cenários permanecem comentados dependendo da etapa do fluxo executado.

Isso demonstra entendimento sobre:
- persistência de dados
- ciclo de vida dos recursos
- dependência de estado entre testes automatizados

---

# 📌 Aprendizados Técnicos Aplicados

Durante o desenvolvimento deste projeto foram praticados conceitos como:
- Automação de APIs REST
- Métodos HTTP
- CRUD
- Assertions
- Validação de status code
- Validação de estrutura de resposta
- Validação de arrays
- Iteração com forEach
- Geração dinâmica de dados
- Reutilização de código
- Organização de testes
- Rastreamento de alterações
- Cenários positivos e negativos
- Manipulação de respostas da API

---

# ▶️ Como Executar o Projeto

## Instalar dependências

```bash
npm install
```

## Instalar Faker

```bash
npm install @faker-js/faker
```

## Abrir Cypress

```bash
npx cypress open
```

---

# 📌 Considerações Finais

Este projeto foi desenvolvido com foco em aprendizado e evolução prática em automação de testes de API.

Além da simples execução de requisições HTTP, o projeto buscou aplicar conceitos de:
- organização
- reutilização
- validações dinâmicas
- boas práticas
- estruturação de testes automatizados

com o objetivo de simular cenários mais próximos de projetos reais de automação de APIs.
