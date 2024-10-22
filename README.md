# Fashion store

Here's a code challenge focused on using React frameworks and other tools to enhance delivery quality.

## Installation

Run from the terminal

```shell
npm install
```

### Developer mode

Run from the terminal

```shell
npm run dev
```

And open the browser as suggested URL appears on the terminal.

### Build and deploy application

The command to build Javascript bundle is:

```shell
npm run build
```

The command to see the compilation code is:

```shell
npm run preview
```

User the URL suggested output terminal.

## Timeline building

### Setup

1. Start creating this file.
2. Added the respective suggestion on VS code settings file.
3. Installation of [Vite.dev](https://vite.dev/guide/ssr#setting-up-the-dev-server) as a [SSR](https://github.com/bluwy/create-vite-extra/tree/master/template-ssr-react).
4. Setup the SCSS using vite compiler.

    4.1 Installed the library sass-embedded following this command `npm install -D sass-embedded`

5. Setup vite-plugin-vercel

    5.1 Following this [steps](https://vercel.com/docs/frameworks/vite#vite-plugin-vercel)
    5.2 Installed library using this command `npm i -D vite-plugin-vercel`
    5.3 Preview URL it is available on <https://fashion-app-lyart.vercel.app/>

6. Setup typescript
    6.1 Command line: `npm install --save-dev typescript @types/react @types/react-dom`
    6.2 `npx tsc --init`
    6.3 `npm install --save-dev vite-plugin-svgr`

7. Setup React Query
    7.1 Installed the library using the command `npm i @tanstack/react-query`
    7.2 Installed the library using the command `npm i @tanstack/react-query-devtools`
