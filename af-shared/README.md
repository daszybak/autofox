# Af-shared

Shared repository for af-web and af-admin

## Installation

1. Have `yarn` installed
2. Clone the repo on the same level with `af-web` or `af-admin`
3. Run `yarn install`
4. Run vscode task `docker-compose`.

## Vscode extentions:

1. Docker: https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker
2. Prettier: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
3. Task Explorer: https://marketplace.visualstudio.com/items?itemName=spmeesseman.vscode-taskexplorer
4. ESLint: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

# Compile TS to ES6

### Rebuild dist folder

1. To generate ES6 run `yarn build`
2. Files can be found in lib folder

### Live compilation of TS

1. To start live compilation run `tsc --watch`

# Components and UI library

## Components

The **components** folder will include common components which are less abstract such as the ad component.

Inside of the **UI** folder **components**, such as button, container, link can be found (https://github.com/vercel/commerce/tree/main/site/components/ui).

The **common** folder consists of a combination of components from the UI folder. For example, the ad component.

The **container** folder contains a combination of common components.

Adding classNames using cx, which is return by useStyles(). For example, https://github.com/vercel/commerce/blob/main/site/components/ui/Container/Container.tsx

**Utils** folder contains utility functions, regex, datetime etc.

**hooks** folder contains commonly used hooks.

**types** folder contains types and interfaces.

## Mantine

# Graphql

1. Config file can be found in codegen.yml. The file is configured for the apollo client. To start the graphql code generator `yarn generate`. (https://www.graphql-code-generator.com/)
2. To add more operations add them in operations folder for a certain type(user, ad, category).
3. To use the client import the hook useApollo into your \_app.tsx
   ```
   export default function App({ Component, pageProps }) {
   const apolloClient = useApollo(pageProps)
    return (
        <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
        </ApolloProvider>
        )
    }
   ```
4. The apollo client will be configured for CSR, SSR, and SSG.
5. Import the hooks you want to use in your components from graphql-generated.
6. Official version of the code https://github.com/vercel/next.js/blob/canary/examples/with-apollo/pages/_app.js

## Auth and apollo providers

It is possible to add both apollo and auth providers to the app by using the ApolloAuthProvider component from the layout.
