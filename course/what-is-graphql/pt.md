# O que é GraphQL

## Introdução
GraphQL é uma linguagem de query para APIs e uma aplicação server-side que executa queries a partir de um sistema de tipagens que você define para os seus dados. Não é uma tecnologia amarrada a nenhum banco de dados ou Storage.

Um serviço GraphQL funciona a partir de um *schema* que  contém tipos que o desenvolvedor define e campos contidos nesses tipos. O desenvolvedor define que funções vão responder cada um dos tipos. Exemplo: um serviço GraphQL hipotético que diz qual o usuário está logado, assim como os pedidos daquele usuário poderia ser feito dessa forma:

```graphql
type Query {
  loggedUser: User
}

type User {
  id: ID
  orders: [Order]
}

type Order {
  id: ID
  totalValue: Float
}
```

```js
const queryLoggedUser = (request) => request.auth.user

const userOrders = (user) => user.getOrders()
```

### GraphQL no VTEX IO
Conforme vimos anteriormente, no VTEX IO, builders são usados para abstrair configurações e complexidades no uso de tecnologias chave. No caso de aplicações back-end, assim como no caso de React, utilizamos [TypeScript](https://www.typescriptlang.org/) e oferecemos builders de `node` e `graphql` que são utilizados em conjunto.

O builder de `graphql` é utilizado para criar o *schema* com seus respectivos tipos e campos. E o de `node` para criar as funções que resolvem os tipos e campos definidos no schema.
Nessa etapa do curso veremos um exemplo de como esses dois builders se conectam.


## Definição de *Schema*

Falando de forma simplificada, um *schema* GraphQL é composto de dois tipos básicos `Query` e `Mutation`. Convencionou-se que **queries** são utilizadas para realização de *fetching* de dados. Enquanto as **mutations** são utilizadas em casos que ocorrem efeitos colaterais ao realizar uma operação, por exemplo alterar algum campo em um banco de dados ou escrever em alguma API.

Para o escopo desse curso, só iremos construir queries, mas o conceito é exatamente o mesmo. O que muda é a semântica da função que resolve o campo.

## Definição de *Resolver*
  *Resolvers* são funções responsáveis por "resolver" um pedido e devolver o dado solicitado. Vale ressaltar que o retorno de um *resolver* é uma *promise*, ou seja, o GraphQL espera a resolução dessa promessa para devolver os resultados obtidos.

## Atividade

Para começar vamos adicionar um campo no tipo `Query` chamado `helloWorld` que será do tipo `String`.

```diff
type Query {
   giphy(term: String): String
+  helloWorld: String
}
```
Ao linkar sua app, você terá acesso a uma URL contendo um link para uma IDE de GraphQL chamada [GraphiQL](https://graphql.org/swapi-graphql), esse ambiente permite que você teste seu schema de forma rápida, sem precisar desenvolver um cliente em código (pense nele como um Postman GraphQL)

Esse campo precisa ter uma função que irá resolvê-lo na pasta `node`. É o que iremos fazer agora.

Na pasta `node`, vá na pasta `resolvers` e crie um novo arquivo `helloWorld.ts`. Nesse arquivo iremos criar a função que resolverá o campo `helloWorld` que adicionemos anteriormente no tipo `Query`.

```ts
export const helloWorld = () => 'Hello World'
```

Agora, se você acessar novamente o GraphiQL e realizar a query abaixo, verá que o GraphiQL retorna o Hello World.

```json
{
  helloWorld
}
```
