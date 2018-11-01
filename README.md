ember-dc-shim [![Build Status](https://travis-ci.org/Jbcampbe/ember-dc-shim.svg?branch=master)](https://travis-ci.org/Jbcampbe/ember-dc-shim)
==============================================================================

Shim for making [dc.js](http://dc-js.github.io/dc.js/), [d3.js](https://d3js.org/), [crossfilter](http://crossfilter.github.io/crossfilter/), and [d3-tip](http://labratrevenge.com/d3-tip/) available in your ember apps as es6 modules

Installation
------------------------------------------------------------------------------

```
ember install ember-dc-shim
```


Usage
------------------------------------------------------------------------------

```javascript
import d3 from 'd3';
import crossfilter from 'crossfilter';
import dc from 'dc';
```

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone https://github.com/Jbcampbe/ember-dc-shim.git`
* `cd ember-dc-shim`
* `yarn`

### Linting

* `yarn lint:hbs`
* `yarn lint:js`
* `yarn lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
