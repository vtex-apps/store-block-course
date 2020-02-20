### Introdução
Antes de começar, é necessário relembrar alguns conceitos importantes para uma maior compreensão do fluxo lógico ao desenvolver uma *app*.

#### Manifesto

* O campo de *vendor* 

    Define o nome da companhia. O vendor pode ser `vtex`, geralmente utilizado em casos de utulização de serviços nativos. Além disso, pode ser de parceiro ou de cliente. No caso de parceiro, geralmente são *apps* de distribuição, onde há alguns clientes, não necessarimente todos, interessados em consumir um produto. Por fim, no caso de clientes, o foco está em construir algo específico para o seu negócio.

* O campo de *name*
    
    Identifica o nome da aplicação.

* O campo de *version* 
 
    Identifica a versão atual da *app* e, no momento que o deploy é feito, há um *worker* chamado *housekeeper* responsável por atualizar a versão automaticamente para todas as contas. O formato do versionamento é bem definido, com o uso de *patches*, *minors* e *majors*.

    *Patches* e *minors* estão relacionados com correção de bugs e pequenas alterações, a atualização é feita automaticamente pelo *worker*. Já atualizações de *majors* geralmente estão relacionadas com mudanças de API e a retrocompatibilidade não é garantida, por isso o *housekeeper* não atua, sendo necessária uma atualização manual. 

* O campo de *builders*

    Define o comportamento de uma *app*. Para cada *builder*, um código correspondente é enviado e o *builder* transforma os arquivos de forma que eles sejam interpretáveis para outro serviço usá-los como configuração.

* O campo de *dependencies*

    Uma *app* pode depender de outras aplicações. Esse campo lista todas as dependências necessárias para o correto funcionamento da *app* em desenvolvimento.

No exemplo da estrutura do `manifest.json` abaixo, é possível observar características mencionadas acima. Em particular, a versão é `0.0.1`, onde os números são, respectivamente, *major*, *minor* e *patch*. 

```
{
  "vendor": "vtex",
  "name": "countdown",
  "version": "0.0.1",
  "title": "Countdown",
  "description": "Countdown component",
  "defaultLocale": "pt-BR",
  "builders": {
    "messages": "1.x",
    "store": "0.x",
    "react": "3.x"
  },
  "mustUpdateAt": "2019-04-02",
  "scripts": {
    "postreleasy": "vtex publish --verbose"
  },
  "dependencies": {
    "vtex.styleguide": "9.x",
    "vtex.css-handles": "0.x"
  },
  "$schema": "https://raw.githubusercontent.com/vtex/node-vtex-a pi/master/gen/manifest.schema"
}
```
<!-- 
### Atividade

1. No arquivo `manifest.json`, troque o nome do *vendor* por `appliancetheme`
2. Altere o campo de *name* para o nome da aplicação em questão. -->

