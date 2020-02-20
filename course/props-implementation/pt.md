# Implementação das *props*

## Introdução
Agora que temos um *header*, podemos utilizá-lo para mostrar informações que dependam de uma *prop* do componente. Para isso, alguns conceitos serão apresentados, já que são necessários para desenvolver uma aplicação.

## Conceitos
* O Hook

    Hooks são funções que permitem que você se "ligue" aos recursos de ciclo de vida e *states* do React. Eles não funcionam dentro de classes e permitem o uso do React utilizar classes propriamente ditas.
    
    Exemplo de uso:
    ```
    const [count, setCount] = useState(0);
    ```

* Interface para definir as *props*
    
    Define as *props* e também os tipos associados.
    ```
    interface CountdownProps {}
    ```

* Definição das configurações de um componente
    
    Para que o seu bloco possa aceitar configurações do usuárioO JSON *schema* irá gerar um formulário para o *Site Editor*. Abaixo é possível ver um exemplo de *schema*:
    ```
    Countdown.schema = {
        title: 'editor.countdown.title',
        description: 'editor.countdown.description',
        type: 'object',
        properties: {},
    }
    ```
    Tal *schema* é responsável, inclusive por definir os textos presentes no formulário em si.

## Atividade

Na interface definida no `Countdown.tsx`, adicione uma *prop* chamada `targetDate`, ela é do tipo *string*. Com isso, estamos definindo uma *prop* do componente que será utilizada para inicializar o contador.

A definição da *prop* em si é feita através da declaração dela na interface `CountdownProps` no arquivo `Countdown.tsx`, mostrada anteriormente. Assim, adicione uma linha que defina uma *prop* chamada `targetDate`, do tipo *string*. O seu código deve, agora, conter uma nova linha, como essa abaixo:
```diff
interface CountdownProps {
+   targetDate: string    
}
```
Feito isso, precisamos utilizá-la no componente para efetuar o *render*, substituindo o texto de antes, "Teste Countdown" por um outro texto, através do *Site Editor*. No futuro, esse targetDate será utilizado para definir a data de término para o contador. Porém, por enquanto, esse campo pode ser genérico.

Vamos, primeiramente, alterar o componente para utilizar a *prop* `targetDate` definida anteriormente. Para isso, é preciso adicionar dentro do componente React a variável a ser utilizada no *header*. Você lembra do bloco de código do componente na etapa anterior? Vamos utilizá-lo novamente para fazer as devidas alterações.

O componente era definido da seguinte forma: 
```
const Countdown: StorefrontFunctionComponent<CountdownProps> = ({}) => {
    return (
        <Fragment>
           { <h1>Teste Countdown</h1> }
        </Fragment>
    )
}
```
Precisamos adicionar `targetDate` como parâmetro e o utilize dentro da *tag* `h1`, como mostrado abaixo:

```
const Countdown: StorefrontFunctionComponent<CountdownProps> = ({targetDate}) => {
  return (
    <Fragment>
      {
        <h1>{targetDate}</h1>  
      }
    </Fragment>
  ) 
}
```

Além disso, para alterar essa propriedade através do *Site Editor*, é necessário adicionar essa mesma *prop* ao *schema*. Isso é feito através da adição de um objeto com chave `targetDate` dentro do objeto `properties` no *schema*. Ou seja:
```diff
Countdown.schema = {
    title: 'editor.countdown.title',
    description: 'editor.countdown.description',
    type: 'object',
    properties: {
+        targetDate: {
+            title: 'Sou um título',
+            description: 'Sou uma descrição',
+            type: 'string',
+            default: null,
+        },
    },
}
```  
Pronto! Agora você pode alterar o conteúdo do *header* através do *Site Editor*. Vamos ver como ficou? Vá até o *Site Editor* e clique em `Countdown` no menu lateral, isso abrirá o menu de edição da *app*, que será como a imagem abaixo.
![image](https://user-images.githubusercontent.com/19495917/74963531-a09b2500-53f0-11ea-84a4-85a27bb752f4.png)

Agora, no campo abaixo do título, digite alguma coisa e veja a alteração no *header*, que passará a exibir o texto que você digitou. 

![image](https://user-images.githubusercontent.com/19495917/74963805-1acba980-53f1-11ea-8091-d05cea1341ea.png)

