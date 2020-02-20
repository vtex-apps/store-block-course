### Introdução

### Controlando o componente Countdown

O JSON *schema*, como apresentado nas etapas anteriores, tem um papel importante na estrutura do formulário dentro do `site-editor`, como definição de campos de texto, títulos e descrições. Voltando ao exemplo apresentado anteriormente:
```
Countdown.schema = {
        title: 'editor.countdown.title',
        description: 'editor.countdown.description',
        type: 'object',
        properties: {
            targetDate: {
                title: 'Esse é um título',
                description: 'Essa é uma data',
                type: 'string',
                default: null,
            },
        },
    }
```
Primeiramente, é possível observar que o título da *app* e sua descrição não apresentam nomes que sejam, a princípio intuitivos. Isso se deve ao fato de que os textos são definidos pelo idioma configurado no tema. Essas definições serão abordadas na próxima etapa.

Além disso, ao navegar até o site-editor, será possível selecionar a *app* Countdown. Ao fazer isso, abre-se o formulário, que pode ser visto na imagem abaixo:

![image](https://user-images.githubusercontent.com/19495917/74866647-f957b880-5331-11ea-9c5a-0458df554c89.png)

Você consegue ver a ligação? Por exemplo, o título e a descrição foram definidos pelo *schema*.

Por exemplo, se você mudar o `title` no *schema* de `'editor.countdown.title'` para `'foo'`, o texto do título da *app* no site-editor irá mudar, como pode ser visto nas imagens abaixo, tanto do menu de *apps*, quanto do menu interno da *app* Countdown:

![](https://user-images.githubusercontent.com/19495917/74851334-da4d2c80-5319-11ea-9135-8c1f8f154017.png)

![](https://user-images.githubusercontent.com/19495917/74851461-0799da80-531a-11ea-9454-1f5685cdb13d.png)

### Atividades