# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```

<!-- Melhorias v2.0 -->

[] - Loja Virtual

- Ao abrir pacotes, dependendo do pokémon que vier, ganhará uma quantia de moeda
  - Ao receber um shiny, será o dobro de moedas
- Nessa loja, será possível comprar pacotes com pokemons comuns, raros ou temáticos
  - Pacotes temáticos como somente água, fogo, luta e etc.
- Poderá comprar boosters - Esse recurso pode não vir nessa versão ainda
  - Booster ajudará a encontrar pokémons mais raros
  - Booster shiny

[] - Melhoria no sistema de peso de pokémon
[] - Adição do recurso de obter moedas por pokémon
[] - Melhorias visuais
[] - Adicionar a 2a geração
#   p o k e - c a r d s  
 