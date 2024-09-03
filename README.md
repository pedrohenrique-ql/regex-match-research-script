# Regex Match - Roteiro de Pesquisa

Este é um roteiro de pesquisa para a extensão [Regex Match](https://marketplace.visualstudio.com/items?itemName=pedrohenrique-ql.regex-match) do Visual Studio Code. A pesquisa tem como objetivo identificar a eficácia, usabilidade e benefícios da ferramenta Regex Match no cotidiano dos desenvolvedores.

## Cenário

O participante lida com um sistema de rastreamento de produtos que usa códigos de produto em um formato específico, mas com variações conforme o tipo e a região. O participante possui [um arquivo de texto](./product-codes.txt) que possui códigos de produtos e seus nomes. O objetivo é usar a extensão do VS Code para capturar esses códigos e nomes para análise posterior.

### 1 - Criação de uma regex

O participante deve criar uma regex para detectar todos os **códigos dos produtos** e seus **nomes** usando o arquivo de teste da extensão. O padrão é formado pela **região** (P, Q ou R), seguida de um **hífen**, seguida da **identificação** do produto, que é composta por **3 números**, um **divisor** (hífen, barra ou ponto), e **3 letras maiúsculas**. Após o código, há um espaço e o nome do produto.

Exemplos de códigos de produto:

```
P-123-ABC Product A
Q-456/DEF Product B
R-789.GHI Product C
```

### 2 - Captura de partes relevantes

A análise requer a extração do **nome do produto** e das partes relevantes dos códigos: a **região** e a **identificação**. O participante deve adicionar grupos de captura na regex criada anteriormente e verificar se a extensão consegue capturar essas partes corretamente.

### 3 - Teste de variações

Os produtos da região P e R possuem alguns códigos com variações. No final do código do produto da região P, pode haver o tipo `RGX` ou `MTCH` e, na região R, pode haver o tipo `RPLC` ou `FIND`. O participante deseja fazer uma análise específica para esses códigos diferentes e deve criar uma regex para cada uma das duas regiões, testando as variações no mesmo arquivo de teste, sem apagar o teste da regex anterior. Considere que a regex deve extrair o **tipo do produto** e o **nome do produto**.

Exemplos de códigos de produto com variação:

```
P-123-ABC-RGX Product D
P-456/DEF-MTCH Product E

R-789.GHI-RPLC Product E
R-012-JKL-FIND Product F
```

### 4- Regex do código-fonte

Em [xptoProductCode](./src/xptoProductCode.js), há uma expressão regular que foi projetada para identificar códigos de produto do tipo `XPTO`. Cada código de produto segue um padrão particular:

- A parte **numérica** do código deve começar com um número **par** e terminar com um número **ímpar**.
- A parte **alfabética** do código deve conter apenas letras **vogais**.

No entanto, a regex atual não está capturando todos os códigos de produto desejados corretamente. O participante deve usar a funcionalidade de code lens da extensão para testar a regex no arquivo de teste e corrigi-la para capturar todos os produtos desejados.
