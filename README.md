# Cordova - Phaser - webpack - TypeScript skeleton

-- still under development.

A starting skeleton that combines all these frameworks for easy development. Either fork the repository or follow the manual steps below to create it.

[*Cordova*](https://cordova.apache.org/) - Mobile apps with HTML, CSS & JS. Target multiple platforms with one code base

[*Phaser*](https://phaser.io) - Desktop and Mobile HTML5 game framework. A fast, free and fun open source framework for Canvas and WebGL powered browser games.

[*webpack*](https://webpack.js.org) - webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging 

[*TypeScript*](https://typescriptlang.org) - TypeScript is Typed JavaScript at Any Scale.
TypeScript extends JavaScript by adding types to the language.

## Run
```bash
npm install -g cordova@9.0.0 webpack@4.42.1 webpack-cli@3.3.11
npm install
npm run dev-browser
```

## Manual configuration
### Install packages and configure cordova
```bash
npm install -g cordova@9.0.0 webpack@4.42.1 webpack-cli@3.3.11
```

In your working folder, if we want to make generate a new `game` folder by cordova
```bash
cordova create game
cd game
cordova platform add browser
```

All below commands can all be executed from our current working folder path `game`

Lets add our `package.json dependencies` and `devDependencies`
```bash
npm install phaser@3.22.0
npm install --save-dev webpack@4.42.1 webpack-cli@3.3.11 webpack-dev-server@3.10.3 ts-loader@6.2.2 tslint@6.1.1 typescript@^3.8.3
```

Let's check if everything is working so far
```bash
cordova run browser 
```

### Use cordova with webpack
Install [cordova-plugin-webpack](https://github.com/kotarella1110/cordova-plugin-webpack#readme)
```bash
cordova plugin add cordova-plugin-webpack@1.0.2
```

Make modifications to your previous default cordova installation.
```bash
mkdir src
mv www/js/index.js src/index.js
```

Use the contents of this default [webpack.config.js](https://gist.github.com/jvanderbiest/6a34ab35f8ff90107642561a697a3f13) and put it in your `game` folder as file `webpack.config.js`.

Replace `scripts` in the `index.html` file in the `www` folder. `vendors.app.bundle.js` will not be created yet but we will later.
```javascript
<script src="vendors.app.bundle.js"></script>
<script src="app.bundle.js"></script>
```

In `package.json` add the following line to the `scripts` object:
```bash
"dev-browser": "cordova prepare browser -- --livereload && cordova build browser -- --webpack.config.js && cordova run browser -- --livereload --webpack.config.js",
```

Let's test if cordova is working with webpack
```bash
npm run dev-browser
```

### Add typescript to webpack

In your `src` folder, delete index.js.
Create the following structure:
`
- src\
  - main.ts ([source](https://gist.github.com/jvanderbiest/6a34ab35f8ff90107642561a697a3f13#file-main-ts))
  - bootstrap.ts ([source](https://gist.github.com/jvanderbiest/6a34ab35f8ff90107642561a697a3f13#file-bootstrap-ts))
  - scenes\
    - intro.scene.ts ([source](https://gist.github.com/jvanderbiest/6a34ab35f8ff90107642561a697a3f13#file-intro-scene-ts))


add a typscript configuration file `tsconfig.json` in the `game` root folder with the following [contents](https://gist.github.com/jvanderbiest/6a34ab35f8ff90107642561a697a3f13#file-tsconfig-json)


edit your existing webpack.config.js and use the following [contents](https://gist.github.com/jvanderbiest/6a34ab35f8ff90107642561a697a3f13#file-webpack-ts-config-js)

Let's run everything together
```bash
npm run dev-browser
```