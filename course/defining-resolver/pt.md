# Definindo um resolver GraphQL

## Introdução
Agora que já certificamos que o tipo foi configurado corretamente, vamos definir a **função que resolve nossa query**. Em GraphQL, podemos definir _resolvers_ para qualquer campo do _schema_ e também para tipos. Para saber mais, leia [aqui](https://graphql.org/learn/execution/).

Definiremos a **função resolver** para o nosso campo `giphy` no serviço _node_ da nossa aplicação. Esta função será, propriamente, a implementação da funcionalidade que estamos criando.

No arquivo `node/resolvers/index.ts` você verá que já há um resolver definido para o campo `helloWorld`, faremos algo semelhante. A assinatura de uma função resolver é a seguinte:

```javascript
const resolver = (parent, args, context) => {};
```

| Nome      | Descrição                                                                                                                           |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `parent`  | O último objeto que foi resolvido (o parente de tal elemento no grafo do schema). Não é muito útil para queries principais          |
| `args`    | O objeto de argumentos que foram passados para aquela query                                                                         |
| `context` | Um valor de contexto provido para todo resolver. Aqui você poderá ler informações sobre a requisição, ou usar algum serviço da VTEX |

## Atividade

No arquivo `node/index.ts`, há uym objeto exportado com as funções *resolvers*, adicione um campo chamado `giphy`, **este nome deve ser igual ao nome do campo definido no `schema.graphql`**.

```diff
export default new Service<Clients, {}>({
  clients,
  graphql: {
    resolvers: {
      Query: {
+       giphy: (_, { term }, ctx) => {
+	        return `it works`
+	      }
      },
    },
  },
})
```

Após isso, **salve o arquivo** e veja o output do `vtex link`. Caso seu GraphiQL já esteja aberto, você poderá refazer a query e verificar se o resultado esperado foi obtido.

É importante notar que **o tipo de dado** retornado pelo seu _resolver_ deve casar com o **tipo definido no schema.graphql**, senão o GraphQL não vai retornar o valor corretamente. Como nosso campo `giphy` está tipado para retornar uma `String` e retornamos `'it works!'`, está tudo bem!
