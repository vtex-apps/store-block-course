# O Manifesto

## Introdução
Antes de começar, é necessário relembrar alguns conceitos importantes para uma maior compreensão do fluxo lógico ao desenvolver uma *app*.

## Manifesto

* O campo de *vendor*

    Define o nome da companhia. O vendor pode ser `vtex`, geralmente utilizado em casos de utilização de serviços nativos. Além disso, pode ser de parceiro ou de cliente. No caso de parceiro, geralmente são *apps* de distribuição, onde há alguns clientes, não necessariamente todos, interessados em consumir um produto. Por fim, no caso de clientes, o foco está em construir algo específico para o seu negócio.

* O campo de *name*

    Identifica o nome da aplicação.

* O campo de *version*

    Identifica a versão atual da *app* e, no momento que o deploy é feito, há um *worker* chamado *housekeeper* responsável por atualizar a versão automaticamente para todas as contas. Para versionamento, utilizamos a especificação [Semantic Versioning 2.0.0](https://semver.org/). O formato do versionamento é bem definido, com o uso de *patches*, *minors* e *majors*. Segue um resumo da especificação:

    - *Patches*: você deve criar um *patch* quando está consertando um bug de forma retrocompatível
    - *Minors*: você deve criar uma versão *minor* quando adicionar funcionalidade de forma retrocompatível.
    - *Majors*: você deve criar uma versão *major* quando você realiza mudanças incompatíveis de API (o que costumamos chamar de **breaking changes**)

    No caso de *minors* e *patches*, o *housekeeper* atualiza a app automaticamente em todas as contas, já que as mudanças são retrocompatíveis. Já atualizações de *majors* possuem mudanças sem retrocompatibilidade, por isso o *housekeeper* não atualiza a app em todas as contas, sendo assim a atualização deve ser manual.

    Exemplo: Se uma API que está na versão `2.3.2` e uma nova funcionalidade não tiver breaking changes, você pode atualizar a versão para `2.4.0`.

* O campo de *builders*

    Define o comportamento de uma *app*. Para facilitar o desenvolvimento, abstraimos a configuração de software em diversas tecnologias utilizando o conceito de builders. Exemplo: em vez de criar uma app `react` do zero configurando `webpack` e `babel`, o desenvolvedor utiliza um builder de `react` que realiza todas as configurações de forma transparente para o desenvolvedor.

    Para cada *builder*, ao linkar a sua app, uma pasta correspondente é enviada à infraestrutura do VTEX IO e o *builder* transforma os arquivos de forma que o desenvolvedor só precise se preocupar com programar e não de configurar o servidor, webpack etc.

* O campo de *dependencies*

    Uma *app* pode depender de outras aplicações. Esse campo lista todas as dependências necessárias para o correto funcionamento da *app* em desenvolvimento.

No exemplo da estrutura do `manifest.json` abaixo, é possível observar características mencionadas acima. Em particular, a versão é `0.0.1`, onde os números são, respectivamente, *major*, *minor* e *patch*.

```json
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
