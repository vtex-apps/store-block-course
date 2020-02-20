### Introdução
Para desenvolver uma *app*, o VTEX suporta o React com hooks. Dessa forma, para compreender como começar a implementação de uma *app*, alguns conceitos básicos serão apresentados, bem como o que é necessário para desenvolver um componente. No fim dessa etapa, você será capaz de ver uma pequena aplicação na home da loja.

### O Componente *Countdown*
O que um componente React precisa para começar o desenvolvimento de uma *app*?

```
const Countdown: StorefrontFunctionComponent<CountdownProps> = ({}) => {
    return <Fragment></Fragment>
}
```


### Atividade
Agora vamos adicionar um *header* dentro do nosso componente e linkar a *app* no nosso tema.

No código mostrado acima, remova o `Fragment` e adicione um `h1`, como mostrado abaixo:
```diff
const Countdown: StorefrontFunctionComponent<CountdownProps> = ({}) => {
-    return <Fragment></Fragment>
+    return (
+        <Fragment>
+           { <h1>Teste Countdown</h1> }
+        </Fragment>
+    )
}
```

Agora, para vermos o nosso componente, precisamos linkar a *app* no nosso tema. Em primeiro lugar, será necessário ter um tema para adicionarmos a *app*, para isso, será necessário cloná-lo do *Github*. Nesse curso, utilizaremos o `store-theme`. Para clonar o repositório, basta executar o seguinte comando:

```
git clone https://github.com/vtex-apps/store-theme.git
```

Com o repositório já clonado, vá até a pasta com `cd store-theme`; agora vamos linkar a *app* no nosso tema. Em primeiro lugar, para a *app* ser utilizada no tema, precisamos adicioná-la às suas dependências, que como visto anteriormente, ficam no `manifest.json`.

Adicione ao manifesto do tema `"vtex.countdown"` como dependência. A versão dela está definida no manifesto da *app*, no nosso caso, `0.0.1`. Feito isso, o JSON terá mais uma linha, como mostrado abaixo:
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
Agora precisamos adicionar o bloco na nossa loja. Dentro do arquivo `home.jsonc`, declare um bloco chamado `"countdown"`. Feito isso, é necessário fazer o *link* para o ambiente de desenvolvimento. Para isso, tanto no diretório da *app* quanto no diretório do tema, execute o comando `vtex link`. Após o login, o resultado esperado é encontrar um *header* na home da sua loja, como a imagem abaixo:
![image](https://user-images.githubusercontent.com/19495917/74960422-11d7d980-53eb-11ea-9d32-f0aa1340f0af.png)

