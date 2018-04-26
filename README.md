# prototype-pentia

Pentia Frontend Assignment. This Landing Page is created with ES6 and SCSS with a flat HTML file using webpack. 

## Requirements

Node.js is required

## Install

  * `git clone https://github.com/hintzmann/prototype.git prototype-pentia`

  * `cd prototype-pentia`

  * `npm install`

  * If rimraf is not installed, then `npm install rimraf -g`

## Run

This webpack have 2 runs, development and production.

* `npm run dev` - runs webpack with the `--watch` command.
* `npm run prod` - runs webpack in production which will minify all of the output and include hashes. 

In both cases the webpacked bundle will be available in `/dist`. Just open `/dist/index.html` in a browser.
View stats about the bundle in `/dist/stats.html`.

## Webpack

This webpack includes:

* ES6
* SCSS
* Webpack Bundle Analyzer
* Inline SVG
* PurgeCSS 

## Dependencies

* `hamburgers` - CSS-animated hamburger icons
* `bulma` - Small and simple CSS flexbox framework
* `bulma-material-form` - This did not work as expected !!! But it should have looked like this https://codepen.io/dbtek/pen/BQbaXr

## SVG

This webpack uses a plugin to optimize and inline SVGs into the HTML. 

This would reduce the number of HTTP requests, for faster first time visits. (Drawback SVGs is not cached !!!)

With inline SVGs it is possible to make CSS3 transitions (Try mouseover logo)

For transitions to work I have striped `style` from the SVGs.

## ES6

This webpack uses ES6 for demonstration purpose of simply opening and closing the Off-Canvas Menu. 
