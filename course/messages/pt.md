### Introdução
De forma a tornar os temas e as *apps* internacionalizadas, há um *build* para messages, que são responsáveis por manter os textos dos componentes, entre outras coisas, de acordo com o escolhido pelo usuário. Para isso, todas as *apps*  precisam seguir essa mesma estrutura. Portanto, nessa etapa, serão apresentados conceitos acerca da internacionalização de *apps* e como fazê-la. 

### As Messages
O conceito de *messages* facilita a adição de novos idiomas a serem configurados para funcionarem como uma opção de idioma para os temas. Considerando isso, todas as *apps* precisam estar alinhadas em termos de línguas disponíveis, para evitar inconsistências na tradução.

Na estrutura do diretório, é possível observar que há uma pasta chamada `messages`, que apresenta três arquivos principais: `pt.json`, `en.json` e `es.json`, cada um responsável pelas devidas traduções: português, inglês e espanhol, respectivamente.

De forma a utilizar tais definições, os campos de `string` do *schema* passam a definidos através de valores de chave de um JSON que estão presentes em todos os arquivos mencionados anteriormente, utilizando a versão correta de acordo com a língua configurada.

Um exemplo: o título da *app*, definido no schema principal como a chave `'editor.countdown.title'` e em cada arquivo ele é definido numa língua diferente:

* `pt.json`
    ```
    {
        ...
        "editor.countdown.title": "Contagem regressiva",
        ...
    }
    ```

* `en.json`
    ```
    {
        ...
        "editor.countdown.title": "Countdown",
        ...
    }
    ```

* `es.json`
    ```
    {
        ...
        "editor.countdown.title": "Cuenta regresiva",
        ...
    }
    ```

### Atividade