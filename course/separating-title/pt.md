# Separando o título

## Introdução
Nessa etapa, temos em nossa *app* dois pedaços: o título e o contador. Porém, para obter uma maior flexibilidade em termos de posicionamento, customização e etc., é interessante que nós as separemos em dois componentes distinos. Para isso, precisamos apresentar brevemente o conceito de interfaces para, em seguida, desenvolvermos um novo componente `Title`.

## Interface
Uma interface é formada por um conjunto de blocos e funciona como um contrato, com restrições bem definidas de como os blocos funcionarão juntos. É definida como a maneira de expor o componente desenvolvido para um bloco. 

Ao definir a *app* na interface, a propriedade `component` é responsável por definir o componente React que será chamado. É importante ressaltar que o nome do `component` tem que ser igual ao nome do arquivo do componente dentro da pasta `react/`.

Exemplo de `interfaces.json`:
```
{
  "countdown": {
    "component": "Countdown"
  }
}
```

## Atividade
Crie um novo arquivo dentro da pasta `/react`, chamado `Title.tsx`, ele será o novo componente do título.