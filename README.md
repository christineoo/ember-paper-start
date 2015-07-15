# Ember-paper-start

This sample application aims to serve as a skeleton appplication for a typical web application written using <a href="http://emberjs.com/">EmberJS</a> with <a href="https://github.com/miguelcobain/ember-paper">Ember Paper</a>.

This sample application consists of a sidenav and a content area. The sidenav will be auto hidden when the webpage is resize.

Checkout [Ember Paper](http://miguelcobain.github.io/ember-paper/) for more Material Design components that you can use in your web application!

This project is generated using ember-cli version 1.13.1.

### Project Structure

    app/
        components/            --> contains the component source files (none for this project)
        controllers/           --> contains the controller source files for this project
            application.js
            home.js
            sign-up.js
        helpers/
        models/
        routes/
            application.js
            home.js
            index.js
        styles/
            app.scss
        templates/             --> contains the template files for each of the available routes
            components/        --> contains the component templace files (none for this project)
            application.hbs
            home.hbs
            projects.hbs
            sign-up.hbs
        views/
            application.js
        app.js
        index.html
        router.js
        

### Demo

Check out the [demo](http://christineoo.github.io/ember-paper-start/#/home) page. This page is hosted using GitHub Pages. Check out [this ember cli addon](https://github.com/poetic/ember-cli-github-pages?) that lets you easily manage GitHub Pages.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/christineoo/ember-paper-start.git` this repository
* `cd ember-paper-start`
* `npm install && bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200/](http://localhost:4200/).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`


### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

