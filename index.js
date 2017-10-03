/* eslint-env node */
'use strict';

const UnwatchedDir = require('broccoli-source').UnwatchedDir;
const mergeTrees = require('broccoli-merge-trees');
const funnel = require('broccoli-funnel');
const path = require('path');

module.exports = {
  name: 'ember-dc',

  included() {
    this._super(...arguments);
    this.d3Node = new UnwatchedDir(path.dirname(require.resolve('d3')));
    this.d3TipNode = new UnwatchedDir(path.dirname(require.resolve('d3-tip')));
    this.dcNode = new UnwatchedDir(path.dirname(require.resolve('dc')));
    this.crossfilterNode = new UnwatchedDir(path.dirname(require.resolve('crossfilter')));
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

    this.import('vendor/d3-shim.js');
    this.import('vendor/dc-shim.js');
    this.import('vendor/crossfilter-shim.js');
    this.import('vendor/d3-tip/index.js');
  },

  treeForVendor() {
    let trees = [];

    trees.push(
      funnel(this.d3Node, {
        destDir: 'd3',
        files: ['d3.js', 'd3.min.js']
      })
    );

    trees.push(
      funnel(this.d3TipNode, {
        destDir: 'd3-tip',
        files: ['index.js']
      })
    );

    trees.push(
      funnel(this.dcNode, {
        destDir: 'dc',
        files: ['dc.js', 'dc.min.js', 'dc.js.map']
      })
    );

    trees.push(
      funnel(this.crossfilterNode, {
        destDir: 'crossfilter',
        files: ['crossfilter.js', 'crossfilter.min.js']
      })
    );

    return mergeTrees(trees);
  }
};
