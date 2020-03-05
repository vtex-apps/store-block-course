# Linkando uma app e utilizando-a no tema da loja

## Introdução
Para desenvolver um bloco de frente de loja, similar aos que oferecemos nativamente no Store Framework, utilizamos a biblioteca de desenvolvimento de UIs `react`.

### Um pouco sobre tecnologias
É um consenso que criar componentes que manipulem estado em `react` ficou muito mais fácil após o lançamento da API de *hooks*. É uma forma menos verbosa e mais fácil de manter do que *class components*, portanto, nesse curso iremos utilizar sempre *function components* e *hooks* e recomendamos que você faça o mesmo sempre que vá começar um projeto novo em `react`.

No time do VTEX IO, adotamos o `typescript` como linguagem default para todos os novos projetos que normalmente iriam utilizar `javascript`. Apesar de você ter que aprender algumas sintaxes novas, para o utilizar `typescript`, acreditamos que o esforço se paga muito rapidamente. Ao utilizar `typescript`, você ganha *code-completion*, checagem estática de código e outros benefícios que te ajudam a escrever código com menos bugs. Nesse curso, utilizaremos somente `typescript`. Caso você não tenha familiaridade, será uma excelente oportunidade de experimentar essa linguagem. E com `react` não é diferente, em vez de escrevermos arquivos com extensão `.jsx`, iremos escrever arquivos com extensão `.tsx`.

### Objetivo dessa Etapa
Como você já tem familiaridade com o `store framework`, já sabe que montamos páginas na nossa loja ao compor blocos em JSON, como `shelf` e  `sku-selector`. Nesta etapa você irá criar um bloco muito parecido com esses blocos nativos oferecidos pela VTEX e irá utilizar ele em seu tema na home page da sua loja.

## O Componente *Countdown*
Quais são os passos necessários para começar o desenvolvimento de uma componente?
Quando você estiver desenvolvendo sua própria componente, você pode começar por nosso template de [react](https://github.com/vtex-apps/react-app-template).

Segue o *boilerplate* necessário para a atividade:

```tsx
const Countdown: StorefrontFunctionComponent<CountdownProps> = ({}) => {
    return <Fragment></Fragment>
}
```

## Atividade
Agora vamos adicionar uma tag `h1` dentro do nosso componente e declarar o bloco linkar a *app* no nosso tema.

No código mostrado acima, remova o `Fragment` e adicione um `h1`, como mostrado abaixo:
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

Para vermos o nosso componente funcionando na loja, precisamos linkar a *app* no nosso tema. Em primeiro lugar, será necessário ter um tema para adicionarmos a *app*, para isso, será necessário cloná-lo do *Github*. Nesse curso, utilizaremos o `store-theme`. Para clonar o repositório, basta executar o seguinte comando:

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
Por fim, precisamos adicionar o bloco na nossa loja. Dentro do arquivo `home.jsonc`, declare um bloco chamado `"countdown"`. Feito isso, é necessário fazer o *link* para o ambiente de desenvolvimento. Para isso, tanto no diretório da *app* quanto no diretório do tema, execute o comando `vtex link`. Após o login, o resultado esperado é encontrar um *header* na home da sua loja, como a imagem abaixo:
![image](https://user-images.githubusercontent.com/19495917/74960422-11d7d980-53eb-11ea-9d32-f0aa1340f0af.png)

