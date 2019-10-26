# Anatomy of webpack configuration

This readme contains details of every single piece present within a webpack.config.js file.

### What's is webpack?

Webpack is configuration based asset bundler which includes javascript, css.

### webpack.config.js

This is a javascript file which is a module and exports a object that contains the configuration that webpack needs.

#### entry

This field tells webpack that the entry point to a module based application.

### output

This field maps to an object that contains the following fields

1. `path` - The path to spit the bundle
2. `filename` - The name of the bundle

### mode

You can change the mode on command line by using

```
npm run build -- --mode development

Options for mode is development and production
1. `development` - This mode tells webpack to avoid uglifying and minimizing the code.
2. `production` - This mode tells webpack to uglify and minimize the code .

### Transpiling ES6 to ES5 using babel
The different packages used in this process are

1. @babel/core
2. @babel/cli
3. @babel/preset-env - This is a set of rules that babel uses while
4. babel/preset-react - This is a set of rules that babel uses while
transpiling react
#### New stuff ### Adding new proposals

```

Neat shorthand command \$(npm bin)/babel is equivalent to node_modules/.bin/babel

Command to transpile by passing in the preset-env
\$(npm bin)/babel ./src/webpack-tutorial/greet.js --presets=@babel/preset-env

````

### module

Use this configure a loader. It is mapped to an object.

#### rules

This is an array of rules that has
1. test field for file pattern
2. loader for the loader
3. excludes - exclude transpiling of node_modules
4. options - for passing in options to the loader.
5. plugins - for new proposals in js.


### Plugins

Allows webpack to do something more than just bundling.

#### Create index.HTML file using html-webpack-plugin

This plugin helps in creating a dynamic html file that'd have the bundle file already added to the html file. To do,

1. Create a template file in `src` and provide to html-webpack-plugin using the below syntax

```javascript
plugins: [new HtmlWebpackPlugin({
    template:'./src/index.html'
})]
``

### Developement Mode

1. Use --watch and --mode development for webpack to watch for file changes.
2. webpack-dev-server -

#### Options
1. devServer - port
2. --open flag allows to open browser automatically

#### Seperating config and using webpack-merge

As config gets complicated overriding will get complicated as well. So webpack-merge helps in combining different configs

#### Inline source maps

Map our source code to what is actually running in the browser.

#### Loading css

Do the same as js.
1. Add a new rule and check for the pattern .css using test field
2. Use the `use` to provide the loaders. Care must be taken as to which loader comes first


### React HotLoader

Needs this for maintaining the state.
1. Install react-hot-loader
2. Add another plugin to babel-loader react-hot-loader/babel
3. Add in code the following
```javascript
import {hot} from "react-hot-loader";

...Your component App
export default hot(module)(App)
````

Code is sent to the browser using websockets.

### Keeping check of bundles using webpack-bundle-analyzer

Parsed size is what browser parses
Gzipped is what gets transferred over the network.

If a library bloats it we can check it.

analyzerMode : static prevents it from loading it a server
openAnalyzer : false, prevents the report from opening.
`reportFileNmae`: <some name>

### Externalize libraries

Use Externals key and load react and react-dom from cdn

### Target Browsers to ensure polyfill loads missing features

Update the presets and targets and useBuiltIns. This will remove not required polyfills.

Target multiple browser using browserslist

`npx browserslist "last 2 versions"`

### Async loading of a component

1. Use React.lazy to load the component
2. React.Suspsense syntax to use the lazy loaded component.
3. Dynamic import using import.

Load small bundle initially and then load only when required.

### Run test using Jest

1. Setup Jest to render a react component using react-testing-library and jest-dom
2. Use cleanup-after-each to clean up state, jest-dom/extend-expect
3. babel-core 7 bridge resolves discrepancy between 6 and 7

### Use globals in react test

1. use jest.config.js

```
module.exports = {
    setupFilesAfterEnv: ['<rootDir>/testSetup.js']
}
```

2. testSetup.js will contain the common imports used in test

#### Prettyfy code using prettier and pretty-quick

npx prettier --write "\*_/_.js"

#### Adding eslint react

"lint": "eslint ./"

"extends": "eslint:recommended",

use babel-eslint as parser in eslint

"plugin:react/recommended" helps in resolving react related issues.

jest: true wil solve issue with describe and it

### Finding accessibility issues using eslint-plugin-jsx-ally

Add it in eslintrc in plugins and extended.

extended is basically use to use recommended rules.
Can't use image text in alt

### Using husky and githook

```
pretty-quick --staged
```

allows to do formatting on staged files only.

#### Dealing with deprecated react api

UNSAFE_componentWillMount instead.

Browse will complain in the console when using React.StrictMode

#### Create an Error Bounday for a REact App

Basically a wrapper component that returns an error or the children

`getDerivedStateFromError` returns the state when error occurred.

### Proptypes error

requires all props to have a type.

children: propTypes.node.isRequired says the children should be a react node.

#### Finding accessibilty issues in browser using react-axe only in development mode

For example, breaking semantics by using h3 after h1 instead of h2.

Import react-axe using require and invoke it with React, ReactDOM and sometime generally a second.

#### Cloning the boilerplate

git clone --depth=1 <git repo> <new-repo>
