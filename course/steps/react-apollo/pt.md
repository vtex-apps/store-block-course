# Conectando *back-end* e *front-end*

## Introdução

O componente React que irá renderizar GIFs já foi feito. O que é preciso fazer agora é criar uma *query* para ser executada pelo *resolver* que foi criado nos passos anteriores. Para realizar queries GraphQL em React, é utilizado o **Apollo Client**, uma biblioteca de gerenciamento de estado que facilita a integração de uma API GraphQL com a aplicação *front-end*.

O time do **Apollo Client** disponibiliza uma integração nativa com React, por meio de *hooks*. Dessa forma, realizar uma *query* significa usar um *hook* que não só realizará as *queries* e fará o *fetch* dos dados, mas também proverá cache e atualização do estado da UI. Essa integração, chamada `react-apollo` já está declarada no `package.json`.

## Query de Gifs

1. Crie uma pasta `react/queries` e nela adicione um arquivo `gifs.gql` que irá conter a *query* a ser feita. Em particular, essa *query* irá receber um termo, que será a palavra-chave a ser utilizada para procurar GIFs no Giphy. Ela chamará o *resolver* `gif`, implementado e testado no GraphiQL no passo anterior.
    ```
    query getGif ($term: String) {
      gif(term:$term)
    }
    ```

2. Defina a *prop* `term` na interface `GifProps` e a utilize como *prop* do componente React `Gif.tsx`. Não se esqueça de atribuir um valor padrão.

3. Agora, é necessário importar o método `useQuery` e utilizá-lo para fazer a *query* que retornará a URL de um GIF. Além disso, também é preciso importar a *query*, definida anteriormente, que se encontra no arquivo `gifs.gql`.
    ```diff
    // react/Gif.tsx
    import React from 'react'
    +import { useQuery } from 'react-apollo'

    import { useCssHandles } from 'vtex.css-handles'

    +import getGif from './queries/gifs.gql'
    ```

4. Defina a query usando o `getGif` importado e o `useQuery`:

    ```diff
    + const { data, loading, error } = useQuery(getGif, {
    +   variables: { term }
    + })
    ```
5. Em um primeiro momento, verifique se a *query* está funcionando através de `console.log(data)`, que deve mostrar a URL do `gif`.

    ```ts
    {
      data: {
        gif: "https://media2.giphy.com/media/3o72EX5QZ9N9d51dqo/giphy.gif?cid=96678fa42d14d68f9c3ebdfaff64b84de51f012598e0a2e9&rid=giphy.gif"
      }
    }
    ```

6. Para ver o GIF na *home* da loja, é necessário adicionar uma imagem que possua como  `src` o valor retornado em `data.gif`.
    ```tsx
    // react/Gif.tsx
    const Gif: StorefrontFunctionComponent<GifProps> = ({ term = 'VTEX' }) => {
      const handles = useCssHandles(CSS_HANDLES)
      const { data, loading, error } = useQuery(getGif, {
        variables: { term }
      })
      return (
        <div className={`${handles.gif} t-heading-2 fw3 w-100 c-muted-1 db tc`}>
          <img src={data.gif} />
        </div>
      )
    }
    ```

7. Por fim, altere o *schema* para adicionar o campo de `term` no *Site Editor* e, como feito anteriormente na etapa de internacionalização, defina as *strings* necessárias nos arquivos dentro da pasta `messages/`
    ```ts
    // react/Gif.tsx
    Gif.schema = {
      title: 'admin/gif.title',
      description: 'admin/gif.description',
      type: 'object',
      properties: {
        term: {
          title: 'admin/gif.term.title',
          description: 'admin/gif.term.description',
          type: 'string',
          default: null,
        },
      },
    }
    ```

Resultado na *home*:

![image](https://user-images.githubusercontent.com/19495917/76253010-99657b00-6228-11ea-8766-bdd5882c1a49.gif)

Resultado no *Site Editor*:

![image](https://user-images.githubusercontent.com/19495917/76253108-cdd93700-6228-11ea-964c-2c238edc1afe.png)
