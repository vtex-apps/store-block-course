# Linkando uma app e utilizando-a no tema da loja

## Introdução
Para desenvolver um bloco de frente de loja, similar aos que oferecemos nativamente no Store Framework, utilizamos a biblioteca de desenvolvimento de UIs `react`.

### Um pouco sobre tecnologias
É sabido que criar componentes que manipulem estado em `react` melhora a performance e tende a ser mais fácil, por ser menos verboso que *class components*. Portanto, nesse curso iremos utilizar sempre *function components* e *hooks* e recomendamos que você faça o mesmo sempre que vá começar um projeto novo em `react`

No VTEX IO, adotamos o `typescript` como linguagem *default* para projetos que normalmente utilizariam `javascript`. Apesar de ser necessário aprender sintaxes novas, acredita-se que o esforço é rapidamente recompensado. Ao utilizar `typescript`, ganha-se alta previsibilidade de *bugs*, por oferecer tipagem estática. Além disso, com as IDEs certas, é possível aumentar a velocidade de implementação através de um *code completion* mais esperto, com a tipagem de objetos no código.

Neste curso, utilizaremos somente `typescript`. Caso você não tenha familiaridade, será uma excelente oportunidade de experimentar essa linguagem.

### Objetivo dessa Etapa
Como você já tem familiaridade com o Store Framework, já sabe que montamos páginas na nossa loja ao compor blocos em JSON, como `shelf` e  `sku-selector`. Nesta etapa você irá criar um bloco que será utilizado no tema da *home page* de sua loja.

## *Boilerplate*
Quando você estiver desenvolvendo seu próprio bloco, você pode começar por nosso template de [react](https://github.com/vtex-apps/react-app-template).

## Atividade
1. No *template* clonado, vá para o arquivo `Countdown.tsx`:

    ```tsx
    //react/Countdown.tsx
    import React, { Fragment } from 'react'

    interface CountdownProps {}

    const Countdown: StorefrontFunctionComponent<CountdownProps> = ({}) => {
    return <Fragment></Fragment>
    }

    Countdown.schema = {
    title: 'editor.countdown.title',
    description: 'editor.countdown.description',
    type: 'object',
    properties: {},
    }

    export default Countdown

    ```

2. Adicione uma *tag* `h1` dentro do nosso componente e declarar o bloco linkar a *app* no nosso tema.
    ```diff
    const Countdown: StorefrontFunctionComponent<CountdownProps> = ({}) => {
    -    return <Fragment></Fragment>
    +    return (
    +      <Fragment>
    +        <h1>Teste Countdown</h1>
    +      </Fragment>
    +    )
    }
    ```

    >Para que o componente seja visto funcionando na loja, é preciso linkar a *app* no tema. Em primeiro lugar, será necessário ter um tema para adicionar a *app*, para isso, será necessário cloná-lo do *Github*. Nesse curso, o `store-theme` será utilizado. Para clonar o repositório, basta executar o seguinte comando:

    ```
    git clone https://github.com/vtex-apps/store-theme.git
    ```

3. Com o repositório já clonado, vá até a pasta com `cd store-theme`; linke a *app* no seu *workspace*. Em primeiro lugar, para a *app* ser utilizada no tema, é preciso adicioná-la às suas dependências, que como visto anteriormente, ficam no `manifest.json`.
    ```
    vtex link
    ```
4. Adicione ao manifesto do tema `"vtex.countdown"` como dependência. A versão dela está definida no manifesto da *app* (`0.0.1`). Feito isso, o JSON terá mais uma linha, como mostrado abaixo:
    ```diff
    {
        ...
        "dependencies": {
            ...
    +        "vtex.countdown": "0.x",
            ...
        },
        ...
    }
    ```
5. Por fim, é preciso adicionar o bloco na loja. Dentro do arquivo `home.jsonc`, declare um bloco chamado `"countdown"`. 
    ```
    {
        "store.home": {
            "blocks": [
                "countdown",
                ...
            ]
            ...
        }
        ...
    }
    ```
Após o login, o resultado esperado é encontrar um *header* na home da sua loja, como a imagem abaixo:

![image](https://user-images.githubusercontent.com/19495917/74960422-11d7d980-53eb-11ea-9d32-f0aa1340f0af.png)

