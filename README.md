# Tecboard com React

Aplicação web para cadastro e exibição de eventos organizados por tema, construída como projeto de estudos em React.

> Projeto desenvolvido durante meus estudos em Frontend, com foco em fixar os fundamentos do React (componentização, props, estado, formulários) antes de avançar para tópicos mais complexos.

## 🚀 Tecnologias

- **React** - biblioteca para construção de interfaces
- **Vite** - bundler e ambiente de desenvolvimento
- **JavaScript (JSX)**
- **CSS** - um arquivo de estilos por componente
- **ESLint** - padronização e qualidade de código
- **Git/GitHub** - versionamento (fluxo com branch `feat/React-jsx-componentes`, commits e push)

## 📁 Estrutura do projeto

```
src/
├── assets/
├── componentes/
│   ├── Banner/
│   ├── Botao/
│   ├── CampoDeEntrada/
│   ├── CampoDeFormulario/
│   ├── CardEvento/
│   ├── FormularioDeEvento/
│   ├── Label/
│   ├── ListaSuspensa/
│   ├── Tema/
│   └── TituloFormulario/
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

Cada componente tem sua própria pasta com `index.jsx` e um arquivo de CSS próprio (ex: `banner.estilos.css`, `card-evento.estilos.css`), mantendo os estilos isolados por responsabilidade.

## 🧩 Componentes

| Componente | Responsabilidade |
|---|---|
| `Banner` | Exibe a imagem de destaque no topo da página |
| `Botao` | Botão reutilizável, recebe o texto via `children` |
| `Label` | Rótulo de formulário reutilizável, recebe `htmlFor` e `children` |
| `CampoDeEntrada` | Input genérico que repassa qualquer prop recebida (`{...props}`) |
| `CampoDeFormulario` | Agrupa label + campo dentro de um `<fieldset>` |
| `ListaSuspensa` | Select reutilizável, monta as `<option>` a partir de uma lista (`items`) |
| `TituloFormulario` | Título do formulário, recebe o texto via `children` |
| `FormularioDeEvento` | Formulário completo de criação de evento (nome, capa, data, tema) |
| `Tema` | Exibe o nome de um tema |
| `CardEvento` | Card com capa, tema, data (formatada em `pt-BR`) e título do evento |

## 💡 Conceitos que pratiquei

- **Componentização**: dividir a interface em componentes pequenos, reutilizáveis e com uma única responsabilidade (ex: `Botao`, `Label`, `CampoDeEntrada` são usados em vários lugares do formulário)
- **Props e `children`**: passar dados entre componentes e usar `children` para tornar componentes como `Botao` e `Label` flexíveis quanto ao conteúdo
- **Spread de props**: em `CampoDeEntrada`, uso `{...props}` para repassar qualquer atributo HTML (`type`, `id`, `name`, `placeholder`) sem precisar declarar cada um manualmente
- **`useState`**: gerenciamento de estado em `App.jsx` para a lista de `temas` e a lista de `eventos`
- **Levantamento de estado (lifting state up)**: o formulário (`FormularioDeEvento`) não guarda o evento criado, ele avisa o componente pai via a prop `aoSubmeter`, e é o `App` quem atualiza a lista de eventos
- **Formulários não controlados com `FormData`**: em vez de um `useState` para cada campo, uso o atributo `action` do `<form>` com uma função que recebe `FormData` e extrai os valores com `.get()`
- **Renderização de listas com `.map()`**: tanto para gerar as `<option>` da `ListaSuspensa` quanto para listar os temas e os eventos na tela
- **Métodos de array (`find`, `some`, `filter`)**:
  - `find` para localizar o tema selecionado a partir do `id` escolhido no formulário
  - `some` para verificar se existe algum evento vinculado a um tema (e não renderizar temas vazios)
  - `filter` para exibir, dentro de cada tema, apenas os eventos daquele tema
- **Renderização condicional**: retornar `null` para não exibir seções de tema sem eventos cadastrados
- **Manipulação de datas**: uso de `new Date()` e `toLocaleDateString('pt-BR')` para formatar a data do evento no padrão brasileiro
- **Organização de CSS por componente**: cada componente importa seu próprio arquivo de estilos, evitando que uma classe de um componente afete outro
- **Boas práticas de acessibilidade em formulários**: uso de `<label htmlFor>` associado ao `id` dos campos
- **Fluxo de Git**: trabalho em branch de feature (`feat/React-jsx-componentes`), commits descritivos e push para o repositório remoto

---

Projeto feito para fins de estudo e portfólio.
