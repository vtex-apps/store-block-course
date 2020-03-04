# Conectando back-end e front-end

## Introdução
Já temos nossa componente React que irá renderizar gifs. O que precisamos fazer agora é criar uma query para ser executada pelo resolver que criamos nos steps nos anteriores. Para realizar queries GraphQL em react, utilizamos o *apollo-client*, uma biblioteca de gerenciamento de estado que facilita a integração de uma API GraphQL com a aplicação front-end.

O time do *apollo-graphql* disponibiliza uma integração nativa com React, por meio de hooks. Dessa forma, realizar uma query significa escrever um hook que não só realizará as queries e fará o fetch dos dados, mas também proverá cache e atualização do estado do UI. Essa integração, chamada *react-apollo* já está declarada no `package.json`.

## Query de Gifs
1. Crie o arquivo `Gif.tsx` na pasta `/react`; seu formato é muito semelhante ao presente em `Title.tsx`, mas com as modificações necessárias. Vale ressaltar que o texto a ser exibido é um *placeholder*, logo, pode ser qualquer coisa dentro de uma `div` que utilize os estilos já mostrados anteriormente.

<!-- TODOS Explicar + definir-->
- Adicionar arquivo com query na pasta queries
- Definir o term na interface GitProps e usar como prop na componente Gif (não esquecer de valor default)
- import and use `useQuery` using the query
- linkar e ver funcionando com console.log(data)
- Definir img com src={url}
- Adicionar no site editor a query
- Ver funcionando



    > Encorajamos que você tente fazer esse item sozinho, mas se precisar de ajuda, o esqueleto do código está logo abaixo.

    ```tsx
    import React from 'react'

    import { useCssHandles } from 'vtex.css-handles'
    import { search } from './graphql/Gif.gql'
    const CSS_HANDLES = ['gif'] as const

    const Gif: StorefrontFunctionComponent<GifProps> = ({ term = 'VTEX' }) => {
        const handles = useCssHandles(CSS_HANDLES)
        const { data, loading, error } = useQuery(query, {
          variables: { term }
        })
        return (
            <div className={`${handles.gif} t-heading-2 fw3 w-100 c-muted-1 db tc`}>
                Vou ser um GIF em breve...
            </div>
        )
    }

    interface GifProps {
      term: String
    }

    Gif.schema = {
        title: 'editor.countdown-gif.title',
        description: 'editor.countdown-gif.description',
        type: 'object',
        properties: {
        }
    }

    export default Gif

    ```