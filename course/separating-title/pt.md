# Separando o título

## Introdução
Nessa etapa, temos em nossa *app* dois pedaços: o título e o contador. Porém, para obter uma maior flexibilidade em termos de posicionamento, customização e etc., é interessante que nós as separemos em dois componentes distinos. Para isso, precisamos apresentar brevemente o conceito de interfaces para, em seguida, desenvolvermos um novo componente `Title`. Um exemplo de customização em termos de posicionamento, que será abordada nessa etapa, é: e se quiséssemos que nosso título estivesse embaixo do contador?

Um conceito muito importante para efetuar essa mudança é a interface. Por isso, vamos apresentar brevemente o que são as interfaces para, em seguida, fazermos nossa atividade.

## Interface
Uma interface é formada por um conjunto de blocos e funciona como um contrato, com restrições bem definidas de como os blocos funcionarão juntos. É definida como a maneira de expor o componente desenvolvido para um bloco. 

Ao definir a *app* na interface, a propriedade `component` é responsável por definir o componente React que será chamado. É importante ressaltar que o nome do `component` tem que ser igual ao nome do arquivo do componente dentro da pasta `react/`.

Exemplo de `interfaces.json`:
```json
{
  "countdown": {
    "component": "Countdown"
  }
}
```

## Atividade
Nessa atividade, vamos separar o título e adicionado à nossa loja embaixo do contador. Vamos lá?
### Criando um novo componente
Crie um novo arquivo dentro da pasta `/react`, chamado `Title.tsx`, ele será o novo componente do título. Nele, alguns *imports* precisam ser feitos. A estrutura básica do código é muito similar a do componente `Countdown`.

No arquivo `Countdown.tsx`, é preciso remover as linhas de código relacionadas ao título, ou seja, *imports* utilizados, interface do *title*, o *render* do elemento em si entre outros.

1. Vamos remover os *imports*, o `title` da interface e alterar a constante do CSS *handles*:
    ```diff
    import React, { Fragment, useState } from 'react'
    import { TimeSplit } from './typings/global'
    import { tick } from './utils/time'
    import { useCssHandles } from 'vtex.css-handles'
    -import { FormattedMessage } from 'react-intl'

    interface CountdownProps {
      targetDate: string,
    -  title: string
    }

    const DEFAULT_TARGET_DATE = (new Date('2020-03-02')).toISOString()
    -const CSS_HANDLES = ['container', 'countdown', 'title']
    +const CSS_HANDLES = ['countdown']
    ```
2. Agora, no componente React em si, precisamos retirar o `title` como *prop* recebida e a constante do texto do título, além de alterar o que é renderizá-lo em sim:
    ```diff
    -const Countdown: StorefrontFunctionComponent<CountdownProps> = ({title, targetDate = DEFAULT_TARGET_DATE}) => {
    +const Countdown: StorefrontFunctionComponent<CountdownProps> = ({targetDate = DEFAULT_TARGET_DATE}) => {
      const [
        timeRemaining, 
        setTime
      ] = useState<TimeSplit>({
        hours: '00', 
        minutes: '00', 
        seconds: '00'
      })
      
    -  const titleText = title || <FormattedMessage id="countdown.title" /> 
      const handles = useCssHandles(CSS_HANDLES)

      tick(targetDate, setTime)

      return (
        <Fragment>
    -      <div className={`${handles.container} t-heading-2 fw3 w-100 pt7 pb6 c-muted-1`}>
    -        <div className={`${handles.title} db tc`}>
    -          {titleText}
    -        </div>
            <div className={`db tc`}>
              {`${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}`}
            </div>
    -      </div>
        </Fragment>
      )
    }
    ```
3. Por fim, vamos retirar o título do *schema*:
    ```diff
    Countdown.schema = {
      title: 'editor.countdown.title',
      description: 'editor.countdown.description',
      type: 'object',
      properties: {
    -    title: { 
    -      title: 'editor.countdown.title.title',
    -      type: 'string',
    -      default: null,
    -    },
        targetDate: {
          title: 'editor.countdown.targetDate.title',
          description: 'editor.countdown.targetDate.description',
          type: 'string',
          default: null,
        },
      },
    }
    ```

Agora, vamos colocar a mão na massa e criar nosso novo componente! Em um primeiro momento, vamos começar com o esqueleto no `Title.tsx`:

1. Os *imports* necessários e a constante do CSS *handles*:
    ```tsx
    import React from 'react'
    import { FormattedMessage } from 'react-intl'
    import { useCssHandles } from 'vtex.css-handles'

    const CSS_HANDLES = ['title'] as const 
    ```
2. O componente em si:
    ```tsx
    const Title: StorefrontFunctionComponent<TitleProps> = ({title}) => {
      const handles = useCssHandles(CSS_HANDLES)
      const titleText = title || <FormattedMessage id="countdown.title" /> 

      return (
        <div className={`${handles.title} t-heading-2 fw3 w-100 c-muted-1 db tc`}>
          {titleText}
        </div> 
      )
    }
    ```
3. A interface, o *schema* e o *export*:
    ```tsx
    interface TitleProps {
      title: string
    }
      
    Title.schema = {
      title: 'editor.countdown-title.title',
      description: 'editor.countdown-title.description',
      type: 'object',
      properties: {
        title: { 
          title: 'editor.countdown.title.title',
          type: 'string',
          default: null,
        }
      }
    }
      
    export default Title
    ```

### Alterando o arquivo `interfaces.json`
  Nessa altura, temos dois componentes em uma *app*: o título e o contador em si. Porém, como fica o arquivo `interfaces.json` mencionado anteriormente? Agora que possuímos dois componentes, precisamos declará-las separadamente. No início, nossa interface tinha apenas o `Countdown`. Precisamos adicionar nosso outro componente:
  ```diff
  {
    "countdown": {
      "component": "Countdown"
    },
+    "countdown.title": {
+      "component": "Title"
+    }
  }
  ```

### Adicionando internacionalização

Precisamos também adicionar ao *Messages* as traduções cujas chaves são as *strings* do *schema* que incluímos no arquivo `Title.tsx` logo acima. Como visto na etapa de *Messages*, precisamos ir à pasta `/messages` e adicionar em cada um dos arquivos as traduções necessárias. Vamos dar o exemplo para o caso do arquivo `en.json`:
```diff
{
+  "countdown.title": "Countdown",
  "editor.countdown.title": "Countdown",
  "editor.countdown.description": "Countdown component"
}
```

### Adicionando o novo bloco na home da loja
Por fim, para finalmente vermos nossas mudanças, basta adicionar a *home* nosso título! Assim como feito para o contador, precisamos adicionar o `countdown.title` como um bloco no arquivo `home.jsonc` do store-theme.
```diff
{
  "store.home": {
    "blocks": [
      "countdown",
+      "countdown.title",
      ...
    ]
  },
  ...
}     
```

Pronto! Agora vamos ver como deve ser o resultado:
![image](https://user-images.githubusercontent.com/19495917/75560163-6d294d80-5a23-11ea-859d-35a8239ddfad.png)
