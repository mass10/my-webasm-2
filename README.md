# About

はじめての WebAssembly (2021-05-08)

# Original source

* https://github.com/rustwasm/rust-webpack-template

# プロジェクトの作り方

```CMD
npm init rust-webpack my-wasm-example-1
CD my-wasm-example-1
npm install
```

# debug mode で webpack dev server を起動する

```sh
# Builds the project and opens it in a new browser tab. Auto-reloads when the project changes.
npm start
```

# release mode でビルドする

```sh
# Builds the project and places it into the `dist` folder.
npm run build
```

# unit tests

```sh
# Runs tests in Firefox
npm test -- --firefox

# Runs tests in Chrome
npm test -- --chrome

# Runs tests in Safari
npm test -- --safari
```

# Find details on

https://github.com/rustwasm/rust-webpack-template
