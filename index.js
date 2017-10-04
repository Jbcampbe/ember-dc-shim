/* eslint-env node */
'use strict';

const UnwatchedDir = require('broccoli-source').UnwatchedDir;
const mergeTrees = require('broccoli-merge-trees');
const funnel = require('broccoli-funnel');
const path = require('path');

let d3Node;
let d3TipNode;
let dcNode;
let crossfilterNode;

module.exports = {
  name: 'ember-dc',

  included() {
    this._super(...arguments);
    d3Node = new UnwatchedDir(path.dirname(require.resolve('d3')));
    d3TipNode = new UnwatchedDir(path.dirname(require.resolve('d3-tip')));
    dcNode = new UnwatchedDir(path.dirname(require.resolve('dc')));
    crossfilterNode = new UnwatchedDir(path.dirname(require.resolve('crossfilter')));
    this.importDependencies();
  },

  importDependencies() {
    this.import(
      {
        development: 'vendor/d3/d3.js',
        production: 'vendor/d3/d3.min.js'
      },
      {
        prepend: true
      }
    );

    this.import(
      {
        development: 'vendor/crossfilter/crossfilter.js',
        production: 'vendor/crossfilter/crossfilter.min.js'
      },
      {
        prepend: true
      }
    );

    this.import(
      {
        development: 'vendor/dc/dc.js',
        production: 'vendor/dc/dc.min.js'
      }
    );

    this.import('vendor/shims/d3-shim.js');
    this.import('vendor/shims/dc-shim.js');
    this.import('vendor/shims/crossfilter-shim.js');
    this.import('vendor/d3-tip/index.js');
  },

  treeForVendor() {
    let trees = [];

    trees.push(
      funnel(path.join(__dirname, 'vendor', 'shims'), {
        destDir: path.join('shims'),
        files: ['dc-shim.js', 'd3-shim.js', 'crossfilter-shim.js']
      })
    );

    trees.push(
      funnel(d3Node, {
        destDir: 'd3',
        files: ['d3.js', 'd3.min.js']
      })
    );

    trees.push(
      funnel(d3TipNode, {
        destDir: 'd3-tip',
        files: ['index.js']
      })
    );

    trees.push(
      funnel(dcNode, {
        destDir: 'dc',
        files: ['dc.js', 'dc.min.js', 'dc.js.map']
      })
    );

    trees.push(
      funnel(crossfilterNode, {
        destDir: 'crossfilter',
        files: ['crossfilter.js', 'crossfilter.min.js']
      })
    );

    return mergeTrees(trees);
  }
};
