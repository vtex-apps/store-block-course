# Conectando back-end e front-end

## Introdução
Já temos nossa componente React que irá renderizar gifs. O que precisamos fazer agora é criar uma query para ser executada pelo resolver que criamos nos steps nos anteriores. Para realizar queries GraphQL em react, utilizamos o *apollo-client*, uma biblioteca de gerenciamento de estado que facilita a integração de uma API GraphQL com a aplicação front-end.

O time do *apollo-graphql* disponibiliza uma integração nativa com React, por meio de hooks. Dessa forma, realizar uma query significa escrever um hook que não só realizará as queries e fará o fetch dos dados, mas também proverá cache e atualização do estado do UI. Essa integração, chamada *react-apollo* já está declarada no `package.json`.

## Query de Gifs
1. Crie o arquivo `Gif.tsx` na pasta `/react`; seu formato é muito semelhante ao presente em `Title.tsx`, mas com as modificações necessárias. Vale ressaltar que o texto a ser exibido é um *placeholder*, logo, pode ser qualquer coisa dentro de uma `div` que utilize os estilos já mostrados anteriormente.

    > Encorajamos que você tente fazer esse item sozinho, mas se precisar de ajuda, o esqueleto do código está logo abaixo.

    ```tsx
    import React from 'react'

    import { useCssHandles } from 'vtex.css-handles'
    import {} from './graphql/Gif.gql'
    const CSS_HANDLES = ['gif'] as const

    const Gif: StorefrontFunctionComponent<GifProps> = ({ }) => {
        const handles = useCssHandles(CSS_HANDLES)
        const { data, loading, error } = useQuery(query)
        return (
            <div className={`${handles.gif} t-heading-2 fw3 w-100 c-muted-1 db tc`}>
                Vou ser um GIF em breve...
            </div>
        )
    }

    interface GifProps {

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

    Lembrando que o que está definido no *schema* é referente às *strings* internacionalizadas presentes no *Site Editor*.


2.  Agora que temos o esqueleto do nosso bloco gif, precisamos adicionar a interface equivalente a ele, como fizemos para o contador e para o título. Vá ao arquivo `interfaces.json`, na pasta `/store` e adicione a interface equivale ao bloco que você acabou de criar. Não se esqueça de que o campo `component` deve ter o mesmo nome do componente React em si.

3. Por fim, precisamos adicionar nosso bloco ao tema, através da *home* da loja. Para isso, vamos ao `store-theme`, na pasta `/store/blocks/home` e, no arquivo `home.jsonc`, adicionamos o bloco `gif`.

O resultado esperado nesse passo é:

![image](https://user-images.githubusercontent.com/19495917/75887546-b9500580-5e08-11ea-95c4-4aaf442bb2ee.png)