# Práticas de internacionalização no VTEX IO

## Introdução
Agora que já renderizamos nossos componentes customizados na loja, devemos aprender a **internacionalizar** o conteúdo que apresentamos. 

É importante lembrar que os blocos devem sempre seguir boas práticas de localização, e **não devem mostrar strings _hardcoded_**, mas sim sensíveis a linguagem que a loja opera.

Não se preocupe, você não precisará adicionar traduções de todos os textos para as variadas linguagens nas quais o Store Framework é usado. Portanto, nessa etapa, serão apresentados conceitos acerca da internacionalização de *apps* e como fazê-la. 

## As *Messages*
O conceito de *messages* facilita a adição de novos idiomas a serem configurados para funcionarem como uma opção de idioma para os temas. Considerando isso, todas as *apps* precisam estar alinhadas em termos de línguas disponíveis, para evitar inconsistências na tradução.

As *messages* centralizam todos os serviços de tradução na plataforma. Dada um texto a ser traduzido, *Messages* irá primeiramente checar o contexto definido pelo usuário para, em seguida, checar as traduções das *apps* e, por fim, passa pelo sistema de tradução automática.

De forma a utilizar tais definições, os campos de `string` do *schema* passam a definidos através de valores de chave de um JSON que estão presentes em todos os arquivos mencionados anteriormente, utilizando a versão correta de acordo com a língua configurada.

Na estrutura do diretório, é possível observar que há uma pasta chamada `messages`, que apresenta três arquivos principais: `pt.json`, `en.json` e `es.json`, cada um responsável pelas devidas traduções: português, inglês e espanhol, respectivamente. Além disso, a fim de fornecer traduções automáticas melhores, utilizamos o arquivo `context.json`, responsável por evitar ambiguidades.

>O arquivo `context.json` é necessário e precisa conter todas as chaves de tradução para as *strings* de tradução.

## Atividade
Você já deve ter aprendido a usar o nosso **builder _messages_**, e também será através dele que adicionaremos strings internacionalizadas em nossos componentes. O primeiro passo para isso é, **na pasta _messages_**, adicionarmos as mensagens que queremos exibir nos arquivos das linguagens que existe lá. Vamos, agora, adicionar uma mensagem de **título para nosso componente**:

`messages/pt.json`
```diff
{
	...,
+	"countdown.title": "Contagem Regressiva"
}
```
`messages/en.json`
```diff
{
	...,
+	"countdown.title": "Countdown"
}
```
`messages/es.json`
```diff
{
	...,
+	"countdown.title": "Cuenta Regresiva"
}
```
`messages/context.json`
```diff
{
	...,
+	"countdown.title": "Countdown"
}
```

Após isso, para **renderizar nosso título** devemos usar o componente `FormattedMessage` da biblioteca [react-intl](https://github.com/formatjs/react-intl). Não é preciso se preocupar com a configuração da biblioteca, tudo isso é feito pelo nosso *framework* :
> A biblioteca _react-intl_ dá suporte a várias maneiras de configuração e internacionalização, vale a pena verificá-las

1. Adicione a biblioteca usando `yarn add react-intl` na pasta *react*
2. No código do seu componente `Countdown.tsx` **importe o FormattedMessage**
    ```diff
    +	import { FormattedMessage } from 'react-intl'
    ```
3. Adicione uma constante que será o seu título:
    ```tsx
    const titleText = title || <FormattedMessage id="countdown.title"/>
    ```
4. Agora, vamos juntar o título e o contador para renderizá-los. Para isso, vamos definir um container por fora. Além disso, o texto do título será passado através da *prop* `title`:
    ```tsx
    const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ title, targetDate }) => {
      const [
        timeRemaining, 
        setTime
      ] = useState<TimeSplit>({
        hours: '00', 
        minutes: '00', 
        seconds: '00'
      })
      
      const titleText = title || <FormattedMessage id="countdown.title" /> 
      const handles = useCssHandles(CSS_HANDLES)

      tick(targetDate, setTime)

      return (
        <Fragment>
          <div className={`${handles.container} t-heading-2 fw3 w-100 c-muted-1`}>
            <div className={`${handles.title} db tc`}>
              { titleText }
            </div>
            <div className={`${handles.countdown} db tc`}>
              {`${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}`}
            </div>
          </div>
        </Fragment>
      )
    }
    ```
    Note que utilizamos três handles: *container*, *countdown* e *title*. Dessa forma, lembre-se de declará-los na constante `CSS_HANDLES`, vista na etapa anterior:
    ```tsx
    const CSS_HANDLES = ['container', 'countdown', 'title']
    ```

    Por fim, precisamos adicionar a *prop* de `title` no *schema*:
    ```diff
    Countdown.schema = {
      title: 'editor.countdown.title',
      description: 'editor.countdown.description',
      type: 'object',
      properties: {
    +    title: {
    +      title: 'Sou um título',
    +      type: 'string',
    +      default: null,
    +    },
        targetDate: {
          title: 'Sou um título',
          description: 'Sou uma descrição',
          type: 'string',
          default: null,
        },
      },
    }
    ```

    Pronto! Agora, para testar sua loja em outros idiomas basta adicionar a *query string* `/?cultureInfo=pt-br` na URL, por exemplo. Ao utilizar tal URL, o resultado esperado é esse aqui:

    ![image](https://user-images.githubusercontent.com/19495917/75484759-23d7f000-5988-11ea-8b0a-63a5fce4ea7e.png)


