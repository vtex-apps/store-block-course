# Criando um bloco GIF

## Introdução
Agora, será criado um bloco que irá ser utilizado com um GIF. Porém, como ainda não foi feita a conexão para fazer uma *query* e, portanto, uma conexão com o *back-end*, esse bloco terá um *placeholder* no lugar do GIF (não se preocupe, o GIF será adicionado na próxima etapa!).

A maioria dos conceitos abordados nessa etapa já foram vistos anteriormente, como a criação de um novo componente React, a adição de uma interface e a mudança do tema.

## Atividade

1. Crie o arquivo `Gif.tsx` na pasta `/react`; seu formato é muito semelhante ao presente em `Title.tsx`, mas com as modificações necessárias. Vale ressaltar que o texto a ser exibido é um *placeholder*, logo, pode ser qualquer coisa dentro de uma `div` que utilize os estilos já mostrados anteriormente.
    
    > É encorajado que você tente fazer esse item sozinho, mas se precisar de ajuda, o esqueleto do código está logo abaixo. 
    
    ```tsx
    import React from 'react'

    import { useCssHandles } from 'vtex.css-handles'

    const CSS_HANDLES = ['gif'] as const 

    const Gif: StorefrontFunctionComponent<GifProps> = ({ }) => {
        const handles = useCssHandles(CSS_HANDLES)
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


2.  Agora que tem-se o esqueleto do bloco gif, é preciso adicionar a interface equivalente, como foi feito para o contador e para o título. Vá ao arquivo `interfaces.json`, na pasta `/store` e adicione a interface do bloco que você acabou de criar. Não se esqueça de que o campo `component` deve ter o mesmo nome do arquivo React (`Gif.tsx`).

3. Por fim, é necessário adicionar o bloco ao tema, na *home* da loja. Para isso, vá ao `store-theme`, na pasta `/store/blocks/home` e, no arquivo `home.jsonc`, adicione o bloco `gif`. 

O resultado esperado nesse passo é:

![image](https://user-images.githubusercontent.com/19495917/75887546-b9500580-5e08-11ea-95c4-4aaf442bb2ee.png)