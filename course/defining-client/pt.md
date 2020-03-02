# Definindo um *client* no VTEX IO

## Introdução
Já vimos como criamos um _resolver_ GraphQL, e agora iremos continuar com o desenvolvimento da nossa funcionalidade. Comumente, a implementação de uma funcionalidade em nossa *app* requere a **comunicação com outros serviços**, sejam externos ou internos (outras *apps* VTEX), e, para realizar essa comunicação, deveremos **criar um *client***. Um *client* é uma entidade em nosso serviço encarregado de **realizar requisições**, e ele é criado reutilizando *clients* exportados pelo [`node-vtex-api`](https://github.com/vtex/node-vtex-api).

Você pode ver um exemplo de um *client* criado para se comunicar com um serviço externo na app [`service-example`](https://github.com/vtex-apps/service-example/blob/ffd7a86f928f9931a9353215eebb764cb3150695/node/clients/status.ts).

Além de **External *Clients***, como este de exemplo, você pode criar **[App Clients](https://github.com/vtex/node-vtex-api/blob/d273aac28702a5bad6ebac4df9ddee69aba61350/src/clients/apps/AppClient.ts)**, para comunicação HTTP com outras apps dentro da conta VTEX IO, **[App GraphQL Clients](https://github.com/vtex/node-vtex-api/blob/d273aac28702a5bad6ebac4df9ddee69aba61350/src/clients/apps/AppGraphQLClient.ts)**, para comunicação através de GraphQL com outras apps também do IO, e **[Infra Clients](https://github.com/vtex/node-vtex-api/blob/d273aac28702a5bad6ebac4df9ddee69aba61350/src/clients/infra/InfraClient.ts)** para comunicação com serviços de Infra do VTEX IO.

Após a criação de um *client*, é necessário **adicioná-lo na exportação do Service**. Após isso, todos os *clients* padrão e os que você criou estarão disponívels no `ctx` de cada requisição.

## Atividade

1. Crie um arquivo em `node/clients` chamado `giphy.ts`.
2. A partir do [*client* de exemplo](https://github.com/vtex-apps/service-example/blob/ffd7a86f928f9931a9353215eebb764cb3150695/node/clients/status.ts), crie um `GiphyClient` que se comunica com a API do Giphy na URL https://api.giphy.com/v1/gifs/
3. O *client* precisa ter apenas um método chamado `translate` que aceita um `term: string` e retornará uma URL de GIF. Este método deverá chamar o _endpoint_ [translate](https://developers.giphy.com/docs/api/endpoint#translate) da API.
4. Após criar (e exportar) o *client* em `giphy.ts`, em `node/clients/index.ts` importe `GiphyClient from './giphy'` e adicione na classe `Clients`:
    ```
    public get giphy() {
        return this.getOrSet('giphy', Giphy)
    }
    ```
5. Agora, voltando ao *resolver*, podemos utilizar `ctx.giphy.translate` para finalizar a implementação da funcionalidade. Retorne a chamada deste método, informando o termo passado como parâmetro para o _resolver_.
6. Teste no _GraphiQL_ sua modificação!

**P.S:** Use a `api_key` `dp2scGnUcDee5yLRI1qJMTRTAAJey9Tl` para testar seu _client_.

