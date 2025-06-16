readme_md = """
# Projeto Angular 19 - Cadastro de Usuários com Busca ViaCEP

Este projeto é um exemplo de cadastro de usuários com formulário reativo, integração com API ViaCEP para busca automática de endereço pelo CEP, máscaras de campos e lista de usuários.

---

## Pré-requisitos

- Node.js (versão 18 ou superior recomendada)  
- npm (vem com o Node.js)  
- Angular CLI (recomendado, mas opcional para este projeto standalone)

---

## Como rodar o projeto

1. **Clone o repositório**

git clone https://github.com/seu-usuario/seu-projeto.git
cd seu-projeto
## 
2. **Clone o repositório**
- npm install

##
3 . **Rodar a aplicação localmente**
- npm start 

Ou (caso não tenha npm start configurado, rode:)

- npx ng serve
## 
4 Acesse no navegador
 - Abra http://localhost:4200

## Rodar testes unitários
Para rodar os testes unitários (incluindo o teste do serviço ViaCepService):
- npm test ou npx ng test

## Pacotes principais usados
- Angular 19
- @angular/forms (Reactive Forms)
- @angular/router
- ngx-mask (para máscaras em campos de formulário)
- HttpClientModule (para chamadas HTTP na API ViaCEP)

## Estrutura
- src/app/components/cadastro - Componente cadastro de usuário com validações
- src/app/components/lista-usuarios - Componente para exibir lista de usuários
- src/app/services/via-cep.service.ts - Serviço para consumir API ViaCEP
- src/app/services/usuario.service.ts - Serviço para gerenciar usuários (em memória)

## Observações
- O projeto usa componentes standalone do Angular 19.
- A lista de usuários é mantida em memória (sem backend persistente).
- A API ViaCEP é usada para buscar endereço via CEP.