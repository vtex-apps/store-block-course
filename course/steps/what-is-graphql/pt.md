# O que é GraphQL?

## Introdução
GraphQL é uma linguagem de query tipada para APIs. Com ele é possível ter uma completa descrição dos dados de uma API além de oferecer ao cliente total controle sobre o que deseja consumir. GraphQL não está relacionado a nenhuma tecnologia de storage ou banco de dados.

Um serviço GraphQL funciona a partir de um *schema*, que representa uma árvore de tipos em que as raízes são sempre uma `Query` ou `Mutation`. O desenvolvedor define que funções vão responder cada um dos tipos. Exemplo: um serviço GraphQL hipotético que diz qual o usuário está logado, assim como os pedidos daquele usuário poderia ser feito dessa forma:

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
Conforme visto anteriormente, no VTEX IO, builders são usados para abstrair configurações e complexidades no uso de tecnologias chave. No caso de aplicações back-end, assim como no caso de React, utiliza-se [TypeScript](https://www.typescriptlang.org/) e são oferecidos *builders* de `node` e `graphql`, utilizados em conjunto.

O *builder* de `graphql` é utilizado para criar o *schema* com seus respectivos tipos e campos. Já o de `node` para criar as funções que resolvem os tipos e campos definidos no schema.
Nesta etapa do curso será visto um exemplo de como esses dois *builders* se conectam.

## Definição de *Schema*

Como dito anteriormente, em um *schema* GraphQL existem dois tipos básicos: `Query` e `Mutation`. Convencionou-se que **queries** são utilizadas para busca de dados (seria equivalente ao verbo HTTP GET). Enquanto as **mutations** são utilizadas em casos que ocorrem efeitos colaterais ao realizar uma operação, por exemplo alterar algum campo em um banco de dados ou escrever em alguma API (seria equivalente aos verbos HTTP: POST, PUT, PATCH, DELETE).

Para o escopo desse curso, só serão construídas queries, mas o conceito é exatamente o mesmo. O que muda é a semântica da função que resolve o campo.

Vamos adicionar um campo no tipo `Query` chamado `helloWorld` que será do tipo `String` no *Schema*. Vá até a pasta `graphql` e, no arquivo `schema.graphql`, adicione a *query* abaixo:

```diff
+type Query {
+  helloWorld: String
+}
```

Para que isso funcione, é preciso adicionar os *builders* de `graphql` e `node`. Vá ao `manifest.json` e adicione esses builders, como mostrado abaixo:

```diff
{
  "vendor": "vtex",
  "name": "countdown",
  ...
  "builders": {
    "messages": "1.x",
    "store": "0.x",
    "react": "3.x"
+   "node": "4.x",
+   "graphql": "1.x"
  },
  ...
}
```

Ao linkar sua app, você terá acesso a uma URL contendo um link para uma IDE de GraphQL (pode ser visto na imagem abaixo) chamada [GraphiQL](https://graphql.org/swapi-graphql), esse ambiente permite que você teste seu schema de forma rápida, sem precisar desenvolver um cliente em código (pense nele como um Postman GraphQL)

![image](https://user-images.githubusercontent.com/19495917/76249814-daf32780-6222-11ea-8bd7-a2838ab5ecc2.png)

Esse campo precisa ter uma função que irá resolvê-lo na pasta `node`. É o que iremos fazer agora.

## Definição de *Resolver*
*Resolvers* são funções responsáveis por "resolver" uma query e devolver o dado solicitado. Vale ressaltar que o retorno de um *resolver* é uma *promise*, ou seja, o GraphQL espera a resolução dessa promessa para devolver os resultados obtidos.

Na pasta `node`, vá para a pasta `resolvers` e, dentro dela, crie um arquivo `helloWorld.ts`. Nesse arquivo iremos criar a função que resolverá o campo `helloWorld` que adicionamos anteriormente no tipo `Query`.

```ts
export const helloWorld = () => 'Hello World'
```

Agora, se você acessar novamente o GraphiQL e realizar a query abaixo, verá que o GraphiQL retorna o Hello World, conforme o esperado.

```
{
  helloWorld
}
```

## Atividade

Agora, nos voltaremos à nossa aplicação de countdown com gif. 

1. Crie o campo `gif` no schema GraphQL. Esse campo receberá como argumento um `term` do tipo `String` que irá em uma atividade futura ser utilizado para realizar uma busca na API do `gif` pelo termo passado como argumento.

```diff
//
type Query {
   helloWorld: String
+  gif(term: String): String
}
```

![image](https://user-images.githubusercontent.com/19495917/76251927-a71a0100-6226-11ea-98bc-7780cf485826.png)




