![alt text](https://travis-ci.org/ersenal/react-webpack-gulp-starter.svg?branch=master "Travis Build")

**react-webpack-gulp-starter** - One of the billion other custom starters out there.

**Features**

- [Gulp](https://github.com/gulpjs/gulp) handles [development](#dev) and [release](#release)
- ES6 support through [Babel](https://github.com/babel/babel)
- Test support with [Jest](https://facebook.github.io/jest/)

**Setup**

1. Clone (or download)
2. Install Gulp globally `npm install -g gulp` (may require admin rights)
2. Under project root, run `npm install`
3. That's it!

Note: Your desired **Flux** implementation can be easily mixed in (using [martyjs](http://martyjs.org/) as an example):

    npm install --save marty

**Structure**
```
root
├──package.json - Contains the Jest configuration, dev and production dependencies
├──gulpfile.js - Loads tasks inside /tasks
├──src
│  ├──index.html
│  ├──index.js - Application main
│  └──assets
├──tests
│  └──preprocessor.js - Preprocessor for tests
└──tasks
   └──webpack
      └──webpack.config.js - Webpack configuration
```

**Tests**

Have a look at `package.json.jest` for the Jest config. Put your tests inside `/tests` and run `npm test`.

*Note: The test preprocessor `/tests/preprocessor.js` is set up to process the files with the .js and .jsx extension and ignore .css files.*

<a name="dev"></a>**Development**

Run `npm run dev`. This command creates a `/dist` folder containing:

- `/src/index.html`
- All the assets under `/src/assets`

It also runs [webpack-dev-server](http://webpack.github.io/docs/webpack-dev-server.html) on [localhost:3000](http://localhost:3000) with [react-hot-loader](https://github.com/gaearon/react-hot-loader)

*Note: babel-loader `/tasks/webpack/webpack.config.js` is set up to process the files with the .js and .jsx extension.*

<a name="release"></a>**Release**

Run `npm run release`. This puts a `/dist` folder containing:

- `/src/index.html`
- All the assets under `/src/assets`
- Minified and bundled `bundle.js` and `bundle.css`

**License**

Licensed under WTFPL V2.
