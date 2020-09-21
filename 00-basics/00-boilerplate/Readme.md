# 01 Setup React

In this sample we will create our first react component and connect it with the DOM via react-dom.

We will take a startup point sample _00-Boilerplate_.

Summary steps:

- Install react and react-dom libraries.
- Install react and react-dom typescript definitions.
- Update the index.html to create a placeholder for the react components.
- Create a simple react component.
- Wire up this component by using react-dom.

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (v8.9.4 or higher) if they are not already installed on your computer.

> Verify that you are running at least node v8.x.x and npm 5.x.x by running `node -v` and `npm -v`
> in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Let's initialize the project

```bash
npm init
```

- Let's install the following dev dependencies:

```bash
npm install @babel/cli @babel/core @babel/preset-env @babel/preset-typescript @babel/preset-react babel-loader file-loader html-loader html-webpack-plugin npm-run-all rimraf typescript webpack webpack-cli webpack-dev-server --save-dev
```

- Let's install the following dependecies:

```bash
npm install react react-dom regenerator-runtime --save
```

- And the follwing typings:

```bash
npm install @types/react @types/react-dom --save-dev
```

- Let's add babelrc configuration:

_.babelrc_

```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-typescript",
    "@babel/preset-react"
  ]
}
```

- Let's create TypeScript configuration:

_./tsconfig.json_

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "es6",
    "moduleResolution": "node",
    "declaration": false,
    "noImplicitAny": false,
    "sourceMap": true,
    "jsx": "react",
    "noLib": false,
    "allowJs": true,
    "suppressImplicitAnyIndexErrors": true,
    "skipLibCheck": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

- Let's add a _webpack.config.js_ basic config.

_./webpack.config.js_

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const basePath = __dirname;

module.exports = {
  context: path.join(basePath, "src"),
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  entry: {
    app: ["regenerator-runtime/runtime", "./index.tsx"],
  },
  devtool: "eval-source-map",
  stats: "errors-only",
  output: {
    filename: "[name].[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        loader: "file-loader",
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: "index.html", //Name of file in ./dist/
      template: "index.html", //Name of template in ./src
    }),
  ],
};
```

- Let's create an index.html file under the src folder

_./src/index.html_

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
  </head>
  <body>
    <div class="well">
      <div id="root"></div>
    </div>
  </body>
</html>
```

- Create a simple react component (let's create it within a new file called `hello.tsx` in `src`folder).

_./src/hello.tsx_

```javascript
import * as React from "react";

export const HelloComponent = () => {
  return <h2>Hello component !</h2>;
};
```

- Wire up this component by using `react-dom` under [./src/index.tsx](./src/index.tsx) (we have to rename
  this file extension from `ts` to `tsx` and replace the content), and remove _main.tsx_.

_[./src/index.tsx](./src/index.tsx)_

```tsx
import * as React from "react";
import * as ReactDOM from "react-dom";

import { HelloComponent } from "./hello";

ReactDOM.render(<HelloComponent />, document.getElementById("root"));
```

- Let's start the commands to start and build this application:

_./package.json_

```diff
  "scripts": {
+    "start": "run-p -l type-check:watch start:dev",
+    "type-check": "tsc --noEmit",
+    "type-check:watch": "npm run type-check -- --watch",
+    "start:dev": "webpack-dev-server --mode development --open",
+    "build": "rimraf dist && webpack --mode development"
-    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

- Execute the example:

```bash
npm start
```

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
