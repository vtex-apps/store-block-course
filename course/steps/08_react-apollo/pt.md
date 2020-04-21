
# Conectando *backend* e *frontend*

## Introdução

Agora aprenderemos como recuperar dados do *backend* e exibí-los na interface. O VTEX IO utiliza [GraphQL](https://graphql.org/) como linguagem/tecnologia para transferência de dados, o que torna a programação dos nossos componentes bastante simples. Iremos modificar o nosso componente Countdown para buscar o *targetDate* do **campo `releaseDate` de um produto da VTEX**. Para realizar queries GraphQL em React, é utilizado o **Apollo Client**, uma biblioteca de gerenciamento de estado que facilita a integração de uma API GraphQL com a aplicação *front-end*.

A biblioteca **Apollo Client** disponibiliza uma integração nativa com React, por meio de *hooks*. Dessa forma, realizar uma *query* significa usar um *hook* que não só realizará as *queries* e fará o *fetch* dos dados, mas também proverá cache e atualização do estado da UI. Essa integração, chamada `react-apollo` já está declarada no `package.json`.

## Preparação
- Para implementar esta funcionalidade, precisamos **adicionar o nosso bloco `countdown` na página de produto**, e também faremos nossos testes nessa página também. Para isso, faça o seguinte:
1. Em seu tema clonado (`store-theme`) acesse o arquivo `store/blocks/product.jsonc` e, no bloco `flex-layout.col#right-col` adicione o bloco `countdown`, logo antes do `buy-button`:
	```diff
	    "product-gifts",
	+	"countdown",
	    "flex-layout.row#buy-button",
	    "availability-subscriber",
	```
2. Rode `vtex link` em seu tema novamente (caso o processo já não esteja sendo executado).
3. Pronto, agora o nosso bloco está na página de produto. Acesse alguma destas páginas e veja o componente `Countdown` renderizado.

## Query de Release Date

1. Crie uma pasta `react/queries` e nela adicione um arquivo `productReleaseDate.graphqql` que irá conter a *query* a ser feita. Em particular, essa *query* irá receber um termo, que será **o slug do produto a ser recuperado a data de lançamento**. Ela chamará o *resolver* `product`, já disponível pela app `vtex.search-graphql`, e recuperaremos apenas o campo que precisamos.
    ```
    query productReleaseDate($slug: String){
		  product(slug: $slug) {
			    releaseDate
		  }
	}
    ```
    > Perceba que a query precisará do *slug* do produto que buscamos. Para isso, **recuperaremos esta informação do contexto de Produto da VTEX**.
2. Para utilizar essa query, é necessário **adicionar a app `vtex.search-graphql` como dependência em sua app.** Também precisaremos utilizar o hook `useProduct`, exportado pela app `vtex.product-context`, para recuperar o slug do produto que está carregado na página. Para isso, no `manifest.json` de sua app, adicione em `dependencies`:
    ```
    "vtex.search-graphql": "0.x",
    "vtex.product-context": "0.x"
    ```
4. Agora, é necessário importar os hook `useQuery`, para fazer a *query* que retornará o dado que descrevemos, e `useProduct`, para nos dar a informação sobre o slug do produto atual. Além disso, também é preciso importar a *query*, definida anteriormente, que se encontra no arquivo `productReleaseDate.graphqql`.
    ```diff
    // react/Countdown.tsx
    import React from 'react'
    +import { useQuery } from 'react-apollo'
    +import useProduct from 'vtex.product-context/useProduct'

    import { useCssHandles } from 'vtex.css-handles'

    +import productReleaseDateQuery from './graphql/productReleaseDate.graphql'
    ```

5. Defina a query usando o `productReleaseDateQuery` importado e o `useQuery`, usando os dados do `useProduct()`:

    ```diff
    +const { product: { linkText } } = useProduct()
    +const { data, loading, error } = useQuery(productReleaseDateQuery, {
    +   variables: { 
    +  		slug: linkText
    +   }
    + })
    ```
> `linkText` será igual a `'red-front-loading-washer'`, por exemplo, quando o seu componente for renderizado na página deste produto.
6. Após enviar as modificações, acesse uma página de produto e verifique se a *query* está funcionando através de um `console.log({data})` após a chamada do `useQuery`, que deve mostrar algo como isso:

    ```ts
    {
      data: {
        product: {
	     releaseDate: '2019-01-01T00:00:00"',
	     __typename:  "Product"
        }
      }
    }
    ```

7. Para fazer com que o Countdown marque as horas para o `releaseDate` do produto, mude o parâmetro da função `tick`. Você também pode remover as `props` recebidas no componente, já que não serão mais usadas.
    ```diff
    -tick(targetDate, setTime)
    +tick(data?.product?.releaseDate || DEFAULT_TARGET_DATE, setTime)
    ```

Resultado no produto *Red Front-Loading Washer*:

![image](https://user-images.githubusercontent.com/18706156/79596495-0fc28c00-80b7-11ea-8361-35075dba3bd5.png)
