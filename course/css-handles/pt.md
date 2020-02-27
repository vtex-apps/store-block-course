# Customizando sua *app*

## Introdução
Agora que temos uma app funcional, que tal adicionarmos um pouco de customização? Nessa etapa, você irá aprender conceitos básicos a respeito de CSS *handles* e Tachyons para, em seguida, customizar sua *app*. Vamos lá?


## CSS Handles

Os *handles* de CSS são utilizados para customizar os componentes da sua loja através de classes de CSS no código do tema. Todas essas configurações são definidas no arquivo `styles.json`, responsável por declarar todas as customizações genéricas para a sua loja.

Se você der uma olhada na sua loja, perceberá que os componentes tem estilos similares, mesmo sem aplicar nenhum tipo de customização. Isso acontece pois todos compartilhando estilos previamente definidos para fontes, cores de *background*, formato dos botões e etc. 

Todas essas definições podem ser alteradas, de forma que sua loja passe a ter um estilo mais customizado. Para isso, basta definir um arquivo JSON na pasta `styles/configs`; essas informações podem ser encontradas de forma mais detalhada em: [Build a store using VTEX IO - Customizing styles](https://help.vtex.com/tracks/build-a-store-using-vtex-io--5qJr8BIQXAKec9CpBWrTNv/6L2qQHU5kwbmTSiYl4MCuD).  

## Tachyons
O Tachyons é um *framework* para CSS funcional.

> A ideia do CSS funcional é que, ao invés de escrever grandes classes, você escreve pequenas. Essas pequenas classes possuem propriedades únicas e imutáveis, podendo ser combinadas para formar componentes maiores no HTML.

## Atividade
Em primeiro lugar, precisamos importar o `useCssHandles`. Para isso, volte ao `Countdown.tsx` e faça o *import*:

```tsx
import { useCssHandles } from 'vtex.css-handles'
```

Além disso, precisamos definir a macro do estilo que iremos puxar do handles. No nosso caso, o `countdown`:

```tsx
const CSS_HANDLES = [ 'countdown' ]
```

Por fim, utilizamos o `useCssHandles` no nosso componente `Countdown` para pegarmos o estilo que precisamos do `countdown` e, além disso, trocando o `Fragment` por uma *tag* de `div`:

```diff
const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ targetDate = DEFAULT_TARGET_DATE }) => {
    const [timeRemaining, setTime] = useState<TimeSplit>({
        hours: '00',
        minutes: '00',
        seconds: '00'
    })

+    const handles = useCssHandles(CSS_HANDLES)

    tick(targetDate, setTime)

    return (
        <Fragment>
            <h1>
                { `${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}` }
            </h1>
        </Fragment>
    )
}
```

Por fim, precisamos utilizar tais estilos no nosso componente a fim de vermos a customização. Para isso, é necessário utilizar a prop `className` com as classes a serem utilizadas e o VTEX Tachyons, para os estilos globais. Além disso, também é necessário remover o `Fragment` importado do React para evitar erros no build.

```diff
const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ targetDate = DEFAULT_TARGET_DATE }) => {
    const [timeRemaining, setTime] = useState<TimeSplit>({
        hours: '00',
        minutes: '00',
        seconds: '00'
    })

    const handles = useCssHandles(CSS_HANDLES)

    tick(targetDate, setTime)

    return (
        <Fragment>
+           <div className={`${handles.countdown} t-heading-2 fw3 w-100 c-muted-1 db tc`}>
+                {`${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}`}
+           </div>
        </Fragment>
    )
}
```
Vamos ver o resultado?

![image](https://user-images.githubusercontent.com/19495917/75475280-457cab80-5977-11ea-938e-d3c2b532e891.png)

<img src="https://user-images.githubusercontent.com/19495917/75475388-7a88fe00-5977-11ea-9d35-c13482f1e61c.gif" width="500" height="400"/>
