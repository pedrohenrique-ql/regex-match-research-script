# Regex Match - Roteiro de Pesquisa

Este é um roteiro de pesquisa para a extensão Regex Match do Visual Studio Code. A pesquisa tem como objetivo identificar a eficácia, usabilidade e benefícios da ferramenta Regex Match no cotidiano dos desenvolvedores.

## Cenário

O participante lida com um sistema de rastreamento de produtos que usa códigos de produto em um formato específico, mas com variações conforme o tipo e a região. O participante possui um arquivo de texto que lista códigos de produtos e seus nomes. O objetivo é usar a extensão do VS Code para capturar esses códigos e nomes para análise posterior.

### 1 - Criação de uma regex

O participante deve criar uma regex para detectar todos os códigos dos produtos e seus nomes no arquivo de teste da extensão. O padrão é formado pela região (P, Q ou R), seguida de um hífen e a identificação do produto que é composta por 3 números, um divisor (hífen, barra ou ponto), e 3 letras maiúsculas. Após o código, há um espaço e o nome do produto.

Exemplo de linhas no arquivo:

```
Lorem ipsum P-123-ABC Product A
Q-456/DEF Product B Aenean feugiat
cursus ac nisl R-789.GHI Product C Praesent id
```

### 2 - Captura de partes relevantes

A análise requer a extração do nome do produto e das partes relevantes dos códigos: a região e a identificação. O participante deve adicionar grupos de captura na regex criada anteriormente e verificar se a extensão consegue capturar essas partes corretamente.

### 3 - Teste de variações

Os produtos da região P e R possuem alguns códigos com variações. No final do código do produto da região P, pode haver o tipo "RGX" ou "MTCH" e, na região R, pode haver o tipo "RPLC" ou "FIND".

O participante deseja fazer uma análise específica para esses códigos diferentes e deve criar uma regex para cada uma das duas regiões, testando as variações no mesmo arquivo de teste, sem apagar o teste da regex anterior.

Exemplo de código de produto com variação:

```
P-123-ABC-RGX Product D
P-456/DEF-MTCH Product E

R-789.GHI-RPLC Product E
R-012-JKL-FIND Product F
```
