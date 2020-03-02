# Implementando o contador

## Introdução
Agora que já sabemos o básico do nosso componente e já o vimos funcionando, é hora de implementar efetivamente o contador. Para isso, precisamos utilizar um *hook* do React, chamado `useState`;


## O *hook* `useState` 

É chamado dentro de um componente funcional para adicionar alguns *states* locais. Além disso, vale ressaltar que o React irá preservar esse *state* entre renderizações. O `useState` retorna um par: o valor do estado atual e uma função para atualizá-lo.

Voltando ao exemplo apresentado na etapa anterior, podemos mostrar na prática os conceitos abordados anteriormente. Para lembrar do exemplo, veja o código abaixo:
```tsx
const [count, setCount] = useState(0);
```
Como mencionado anteriormente, o `useState` retorna um par: `count` é o estado atual e `setCount` é uma função para atualizá-lo. Além disso, `useState(0)` está apenas iniciando o estado com 0.

Agora, apresentados os conceitos, vamos finalmente implementar o contador do nosso componente!

```tsx
const [timeRemaining, setTime] = useState<TimeSplit>({
    hours: '00', 
    minutes: '00', 
    seconds: '00'
  })
```
## Atividades
Em primeiro lugar, precisamos importar algumas coisas necessária e a primeira delas é o *hook* em si. Para isso, no componente, adicione na linha de *import* a função `useState` do React:
```tsx
import React, {Fragment, useState} from 'react'
```
Além disso, precisamos importar o tipo `TimeSplit`:
```tsx
import { TimeSplit } from './typings/global'
```
Por fim, é necessário fazer o *import* da função que utilizar a função retornada do *hook* para a atualização do *state*, que chamamos de `tick` e se encontra na pasta `utils/`. Isso pode ser feito da seguinte forma:
```tsx
import { tick } from './utils/time'
```
Agora, precisamos alterar o componente em si, para adicionar o *hook* e a função que irá atualizar o estado. Voltando ao nosso componente Countdown, vamos adicionar o *hook*:
```diff
const Countdown: StorefrontFunctionComponent<CountdownProps> = ({targetDate}) => {
+    const [timeRemaining, setTime] = useState<TimeSplit>({
+        hours: '00',
+        minutes: '00',
+        seconds: '00'
+    })

    return (
        <Fragment>
            { targetDate }
        </Fragment>
    ) 
}
```
Podemos observar algumas coisas com essa adição: `timeRemaining` é o estado atual, `setTime` é a função de atualização do estado, `TimeSplit` é o tipo e, por fim, o objeto que define as horas, os minutos e os segundos é o estado inicial do componente.

Agora, precisamos adicionar uma `targetDate` padrão para o caso de não haver um valor inicial definido. Para tanto, vamos declarar uma macro que será utilizada como padrão:

```
const DEFAULT_TARGET_DATE = (new Date('2020-03-10')).toISOString()
```

Agora vamos utilizar a função `tick` e a macro `DEFAULT_TARGET_DATE` importada para fazermos o contador:
```diff
const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ targetDate = DEFAULT_TARGET_DATE }) => {
    const [timeRemaining, setTime] = useState<TimeSplit>({
        hours: '00',
        minutes: '00',
        seconds: '00'
    })

+   tick(targetDate, setTime)

    return (
        <Fragment>
            {targetDate}
        </Fragment>
    ) 
}
```

Por fim, vamos alterar o *header* para que ele exiba o contador que criamos. Para isso, precisamos utilizar o estado atual `timeRemaining`:
```diff
const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ targetDate = DEFAULT_TARGET_DATE }) => {
    const [timeRemaining, setTime] = useState<TimeSplit>({
        hours: '00',
        minutes: '00',
        seconds: '00'
    })

   tick(targetDate, setTime)

    return (
        <Fragment>   
-            <h1>{ targetDate }</h1>
+            <h1>{ `${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}` }</h1>
        </Fragment>
    ) 
}
```
> A formatação da *string* do contador está no formato `HH:MM:SS`, feita através do *split* em `hours`, `minutes` e `seconds`.

Assim, com essas alterações, veremos a atualização em tempo real do contador! O resultado na *home* é esse aqui:

![image](https://user-images.githubusercontent.com/19495917/75474406-b3c06e80-5975-11ea-82ec-89ab27504873.png)


E veja nosso contador funcionando:

<img src="https://user-images.githubusercontent.com/19495917/75474511-e0748600-5975-11ea-825d-7e9a20f95362.gif" width="500" height="320"/>


