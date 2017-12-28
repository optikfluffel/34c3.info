# [34c3.info](http://34c3.info)

## 📚 Dependencies

_Make sure you have [Node.js installed](https://nodejs.org)._

To get all of the npm the dependencies run:

```sh
npm install
```


## 🚧 Development Server

* To start the development server and open up [localhost:3000](http://localhost:3000) automagically run:

```sh
npm start
```


## 📦 Build

_This [runs on Travis](https://travis-ci.org/optikfluffel/34c3.info), every time something gets pushed to `master`._

* To build the content of `./src` and put the resulting files into `./docs` run:

```sh
npm run build
```

## 🔍 Where is stuff?

* __The content__ mainly lives in `src/harp.json`.
* __Templates and stylesheets__ are inside the `src/public` directory.
  * Templates are [written in `Jade`](http://jade-lang.com)
  * Stylesheets are [written in `SCSS`](http://sass-lang.com/guide)
