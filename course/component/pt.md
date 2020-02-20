### Introdução
Para desenvolver uma *app*, o VTEX suporta o React com hooks. Dessa forma, para compreender como começar a implementação de uma *app*, alguns conceitos básicos serão apresentados, bem como o que é necessário para desenvolver um componente. No fim dessa etapa, você será capaz de ver uma pequena aplicação na home da loja.

### O Componente *Countdown*
O que um componente React precisa para começar o desenvolvimento de uma *app*?

* O Hook

    Hooks são funções que permitem que você se "ligue" aos recursos de ciclo de vida e *states* do React. Eles não funcionam dentro de classes e permitem o uso do React utilizar classes propriamente ditas.
    
    Exemplo de uso:
    ```
    const [timeRemaining, setTime] = useState<TimeSplit>({})
    ```

* Interface para definir as *props*
    
    Define as *props* e também os tipos associados.
    ```
    interface CountdownProps {
        targetDate: string,
        title: string
    }
    ```

* Definição das configurações de um componente
    
    Para que o seu bloco possa aceitar configurações do usuárioO JSON *schema* irá gerar um formulário para o *Site Editor*. Abaixo é possível ver um exemplo de *schema*:
    ```
    Countdown.schema = {
        title: 'editor.countdown.title',
        description: 'editor.countdown.description',
        type: 'object',
        properties: {
            targetDate: {
            },
        },
    }
    ```
    Tal *schema* é responsável, inclusive por definir os textos presentes no formulário em si.

### Atividades
Agora vamos linkar a *app* no nosso tema. Em primeiro lugar, para a *app* ser utilizada no tema, precisamos adicioná-la às suas dependências, que como visto anteriormente, ficam no `manifest.json`.

Adicione ao manifesto do tema `"vtex.countdown"` como dependência. A versão dela está definida no manifesto da *app*, no nosso caso, `0.0.1`. Feito isso, o JSON terá mais uma linha, como mostrado abaixo:

```
{
    ...
    "dependencies": {
        ...
        "vtex.countdown": "0.x",
        ...
    },
    ...
}
```
Agora precisamos adicionar o bloco na nossa loja. Dentro do arquivo `home.jsonc`, declare um bloco chamado `"countdown"` e o defina com sua *prop* de `targetDate` através de uma máscara de data, como por exemplo `2020-03-19T21:24:24.175Z`. 

Feito isso, é necessário fazer o *link* para o ambiente de desenvolvimento. Para isso, tanto no diretório da *app* quanto no diretório do tema, execute o comando `vtex link`. Após o login, o resultado esperado é encontrar na home um contador decrescente.

