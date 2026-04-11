# PokeList

Um jogo de cartas colecionáveis de Pokémon onde você abre pacotes, coleciona figurinhas e expande sua Pokédex.

## Sobre o projeto

PokeList é um jogo frontend onde o jogador ganha moedas, compra pacotes e abre cartas com Pokémon aleatórios. Cada carta possui raridade própria (Comum, Incomum, Raro, Lendário ou Místico) e pode ser Shiny — uma versão especial e mais difícil de conseguir.

## Funcionalidades

- **Abrir pacotes** — compre e abra pacotes para receber 5 cartas aleatórias
- **Coleção** — visualize todos os Pokémon que você já coletou
- **Loja** — gaste suas moedas em novos pacotes
- **Inventário** — gerencie seus pacotes comprados
- **Sistema de raridade** — Comum, Incomum, Raro, Lendário e Místico
- **Shiny** — cartas especiais com visual exclusivo
- **Moedas** — moeda do jogo para comprar pacotes

## Tecnologias

- [React](https://react.dev/) — interface e componentes
- [React Router](https://reactrouter.com/) — navegação entre páginas
- [Framer Motion](https://www.framer.com/motion/) — animações das cartas
- [Tailwind CSS](https://tailwindcss.com/) — estilização
- [Lucide React](https://lucide.dev/) — ícones
- [PokéAPI](https://pokeapi.co/) — dados e sprites dos Pokémon

## Como rodar

**Pré-requisitos:** Node.js 18+

```bash
# Clone o repositório
git clone https://github.com/pedrohenriiz/poke-cards.git
cd pokelist

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.
