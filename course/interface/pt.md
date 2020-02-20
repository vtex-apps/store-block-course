### Introdução

### Interface
Uma interface é formada por um conjunto de blocos e funciona como um contrato, com restrições bem definidas de como os blocos funcionarão juntos. Ao definir a *app* na interface, a propriedade `component` é responsável por definir o componente React que será chamado. É importante ressaltar que o nome do componente declarado no `interfaces.json` tem que ser **exatamente** igual ao nome do componente React.

Exemplo de `interfaces.json`:
```
{
  "countdown": {
    "component": "Countdown"
  }
}
```

### Atividade
