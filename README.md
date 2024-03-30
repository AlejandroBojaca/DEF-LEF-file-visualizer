# DEF-visualizer

This project is a web application built using Vue.js Compositional CLI that parses DEF (Design Exchange Format) and LEF (Library Exchange Format) files and generates a circuit representation using RaphaelJS on a canvas.

What are DEF and LEF files?

DEF and LEF files are industry-standard file formats used in the semiconductor industry for integrated circuit (IC) design and physical implementation. These files contain essential information about the design layout, cell libraries, and physical constraints.

    DEF (Design Exchange Format) files describe the physical layout of an IC design, including the placement of components (cells), pins, and interconnections (nets).
    LEF (Library Exchange Format) files define the physical and electrical properties of standard cell libraries used in the IC design process. They provide details about cell dimensions, pin locations, and other parameters.

By parsing and interpreting these files, designers can visualize and analyze the circuit layout, enabling efficient design exploration, verification, and optimization.

Circuit Representation

This application takes DEF and LEF files as input and uses regular expressions to parse their content. The parsed data is then utilized to generate a visual representation of the circuit layout on an HTML canvas using the RaphaelJS library.

The circuit representation displays various components, such as standard cells, pins, and interconnections, based on the information extracted from the DEF and LEF files. This visual representation aids in understanding the circuit design, identifying potential issues, and facilitating communication among design teams.

Key Features

    Parse and interpret DEF and LEF files using regular expressions
    Generate a circuit representation on an HTML canvas using RaphaelJS
    Visualize standard cells, pins, and interconnections
    Explore and analyze the circuit layout interactively


## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
