# Conectando *back-end* e *front-end*

## Introdução
Já temos nossa componente React que irá renderizar GIFs. O que precisamos fazer agora é criar uma *query* para ser executada pelo *resolver* que criamos nos steps nos anteriores. Para realizar queries GraphQL em React, utilizamos o `apollo-client`, uma biblioteca de gerenciamento de estado que facilita a integração de uma API GraphQL com a aplicação front-end.

O time do *apollo-graphql* disponibiliza uma integração nativa com React, por meio de *hooks*. Dessa forma, realizar uma *query* significa escrever um *hook* que não só realizará as *queries* e fará o *fetch* dos dados, mas também proverá cache e atualização do estado do UI. Essa integração, chamada `react-apollo` já está declarada no `package.json`.

## Query de Gifs
1. Crie o arquivo `Gif.tsx` na pasta `/react`; seu formato é muito semelhante ao presente em `Title.tsx`, mas com as modificações necessárias. Vale ressaltar que o texto a ser exibido é um *placeholder*, logo, pode ser qualquer coisa dentro de uma `div` que utilize os estilos já mostrados anteriormente.

2. Crie uma pasta `react/queries` e nela adicione um arquivo `gifs.gql` que irá conter a *query* a ser feita. Em particular, essa *query* irá receber um termo, que será a palavra-chave a ser utilizada para procurar GIFs no Giphy. Ela chamará o *resolver* `gif`, implementado e testado no GraphiQL no passo anterior.
    ```
    query getGif ($term: String) {
        gif(term:$term)
    }
    ```
3. Defina a *prop* term na interface `GifProps` e a utilize como *prop* do componente React Gif. Não se esqueça de atribuir um valor padrão para ela.

4. Agora, precisamos importar o método `useQuery` e utilizá-lo para fazer a *query* que irá nos retornar o URL de um GIF. Além disso, também precisamos importar nossa *query* em si, definida anteriormente, que se encontra no arquivo `gifs.gql`.
    ```diff
    // react/Gif.tsx
    import React from 'react'
    +import { useQuery } from 'react-apollo'

    import { useCssHandles } from 'vtex.css-handles'

    +import getGif from './queries/gifs.gql'
    ```


5. Em um primeiro momento, vamos verificar se nossa *query* está funcionando através de `console.log(data)`, que deve nos mostrar um objeto `gif` com um par de chave-valor, onde a chave é `url` e o valor é a URL em si.

6. Para vermos nosso GIF na *home* da loja, precisamos adicionar uma imagem que possua como *source* `src` o valor desse objeto, ou seja, `data.gif`.
    ```tsx
    // react/Gif.tsx
    const Gif: StorefrontFunctionComponent<GifProps> = ({ term = 'VTEX' }) => {
        const handles = useCssHandles(CSS_HANDLES)
        const { data, loading, error } = useQuery(query, {
          variables: { term }
        })
        return (
            <div className={`${handles.gif} t-heading-2 fw3 w-100 c-muted-1 db tc`}>
                <img src={data.gif} />
            </div>
        )
    }
    ```

7. Por fim, vamos alterar nosso *schema* para adicionarmos o campo de `term` no *Site Editor* e, como feito anteriormente na etapa de internacionalização, defina as *strings* necessárias nos arquivos dentro da pasta `messages/`
    ```js
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