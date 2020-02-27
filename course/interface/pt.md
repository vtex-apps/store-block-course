# As Interfaces

## Introdução

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
