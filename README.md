## Descrição:

Este código é uma aplicação web desenvolvida em [React](https://react.dev) que permite aos usuários visualizarem e cadastrar skins do jogo [Fortnite](https://www.fortnite.com/?lang=pt-BR). A aplicação possui funcionalidades para buscar skins por nome e raridade, além de permitir a criação e edição de skins personalizadas.

Mas primeiro, para que este código funcione sem erros, você deverá usar os seguintes comandos no seu terminal:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Além disso, você deverá usar esses comandos de bibliotecas de ícones para que o código seja executado sem nenhum problema.
``` bash 
npm install react-icons --save
```

``` bash 
npm install react-spinners --save
```

## Componentes Principais

1. Header e Footer:
- Header: O componente Header é responsável por exibir o cabeçalho da página.
- Footer: O componente Footer é responsável por exibir o rodapé da página.

2. Componente de Skin:
- Skin: O componente Skin é responsável por exibir uma skin do Fortnite. Ele recebe uma skin como propriedade e permite que o usuário clique para ver mais detalhes.

3. Componente de InfoCard:
- InfoCard: O componente InfoCard é usado para exibir informações detalhadas sobre uma skin, incluindo opções para edição, remoção e fechamento do card. Ele recebe uma skin como propriedade e funções de manipulação como callbacks.

4. Componente de PopUpCadastro
- PopUpCadastro: O componente PopUpCadastro é um formulário pop-up que permite aos usuários cadastrar ou editar skins. Ele recebe callbacks para adicionar ou editar skins e uma lista de skins existentes como propriedades.
Estado do Componente
- listaFinal: Armazena a lista final de skins a serem exibidas na página.
- apiData: Armazena os dados da API de skins do Fortnite.
- listaSkin: Armazena os detalhes da skin selecionada para exibição no InfoCard.
- exibirPopUp: Controla a exibição do pop-up de cadastro/edição.
- tipoPopUp: Indica o tipo de operação a ser realizada no pop-up (cadastro ou edição).
- on: Controla a exibição do botão "Crie sua própria skin!!!".
- edited: Armazena os detalhes da skin a ser editada.
- busca: Armazena o termo de busca para filtrar skins por nome.
- rarity: Armazena as raridades únicas das skins disponíveis.
- search: Armazena o filtro de busca por raridade.

## Funções Principais:

1. handleCadastro
Parâmetros: nome, descricao, rarity, data, capitulo, temporada, imagem
Descrição: Adiciona uma nova skin à lista de skins e à instância da classe Roupas.

2. handleCadastroEdit
Parâmetros: nome, descricao, rarity, data, capitulo, temporada, imagem, id
Descrição: Edita uma skin existente na lista de skins e na instância da classe Roupas com base no ID fornecido.

3. removeSkin
Parâmetros: list
Descrição: Remove uma skin da lista de skins e da instância da classe Roupas com base no ID fornecido.

4. editSkin
Parâmetros: list
Descrição: Prepara uma skin existente para edição com base no ID fornecido.

5. handlePopUp
Parâmetros: tipo
Descrição: Controla a exibição do pop-up de cadastro/edição e define o tipo de operação a ser realizada (cadastro ou edição).

6. exit
Descrição: Fecha o pop-up de cadastro/edição.

7. handleSkin
Parâmetros: list
Descrição: Prepara os detalhes de uma skin para exibição no InfoCard.

8. handleClose
Descrição: Fecha o InfoCard exibindo os detalhes da skin.

9. useEffect (1)
Descrição: Busca dados da API de skins do Fortnite e filtra as raridades únicas para exibição no menu suspenso de seleção de raridade.

10. useEffect (2)
Descrição: Carrega dados da API de skins do Fortnite e inicializa a lista de skins se estiver vazia.

11. useEffect (3)
Descrição: Filtra a lista de skins com base nos termos de busca (por nome ou raridade) e atualiza a lista de skins a serem exibidas na página.

## Membros da Classe

1. constructor()
Descrição: Construtor da classe Roupas. Inicializa a propriedade roupas como uma lista vazia.

2. addRoupa(roupa)
Parâmetros: roupa (objeto de skin)
Descrição: Adiciona uma nova skin à lista de skins (roupas).

3. getRoupas()
Descrição: Retorna a lista de skins armazenada na instância da classe.

4. getRemoveRoupaById(lista)
Parâmetros: lista (objeto de skin)
Descrição: Remove uma skin da lista com base no ID fornecido.

5. getEditRoupaById(nome, descricao, rarity, data, capitulo, temporada, imagem, id)
Parâmetros:
- nome (string) - Novo nome da skin.
- descricao (string) - Nova descrição da skin.
- rarity (string) - Nova raridade da skin.
- data (string) - Nova data de lançamento da skin.
- capitulo (string) - Novo capítulo da skin.
- temporada (string) - Nova temporada da skin.
- imagem (string) - Nova URL da imagem da skin.
- id (string) - ID da skin a ser editada.
Descrição: Edita uma skin existente na lista com base no ID fornecido, atualizando suas propriedades com os valores fornecidos.

## Uso da Classe

Importação:

``` bash
import Roupas from './caminho/do/arquivo/Roupas';
```
Instanciação:
``` bash
const listaRoupas = new Roupas();
```
Adição de uma Nova Skin:

``` bash
const novaSkin = { id: 'uniqueId', nome: 'Nome da Skin', /* outras propriedades */ };
listaRoupas.addRoupa(novaSkin);
```
Obtenção da Lista de Skins:

``` bash
const skins = listaRoupas.getRoupas();
```
Remoção de uma Skin por ID:

``` bash
const skinParaRemover = { id: 'uniqueId', /* outras propriedades */ };
listaRoupas.getRemoveRoupaById(skinParaRemover);
```
Edição de uma Skin por ID:

``` bash
const idDaSkin = 'uniqueId';
const novosDetalhes = {
  nome: 'Novo Nome',
  descricao: 'Nova Descrição',
  rarity: 'Nova Raridade',
  /* outras propriedades */
};
listaRoupas.getEditRoupaById(idDaSkin, ...Object.values(novosDetalhes));
```


## Estilos e Interface do Usuário:
O componente possui elementos HTML para entrada de texto, seleção de raridade e botões de ação.
Estilos CSS são aplicados usando classes para controlar a aparência dos elementos na página.

## Considerações Finais:
Este código React fornece uma interface interativa para visualizar, cadastrar, editar e remover skins do Fortnite. Ele utiliza uma [API de skins do Fortnite](https://fortnite-api.com) para carregar dados iniciais e oferece uma funcionalidade de pesquisa para facilitar a navegação pelos diferentes skins disponíveis. O pop-up de cadastro/edição permite aos usuários personalizar skins com detalhes específicos antes de adicioná-las à lista principal. Alem disso o usa da classe Roupas fornece uma estrutura organizada para gerenciar uma lista de skins do Fortnite no contexto da aplicação React. Ela encapsula as operações relacionadas a skins, como adição, remoção e edição, facilitando a manipulação eficiente dos dados dentro da aplicação.

Créditos para a importação dos ícones dos sites [React Icons](https://react-icons.github.io/react-icons/) e [REACT SPINNERS by David Hu](https://www.davidhu.io/react-spinners/), respectivamente."