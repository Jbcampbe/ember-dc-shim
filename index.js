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
        development: 'vendor/dc/dc.js',
        production: 'vendor/dc/dc.min.js'
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
  },

  treeForVendor() {
    let trees = [];

    trees.push(
      funnel(this.d3Node, {
        destDir: 'd3',
        include: [new RegExp(/\.js$/)],
        exclude: ['tests', 'ender', 'package'].map(key => new RegExp(key + '\.js$'))
      })
    );

    trees.push(
      funnel(this.dcNode, {
        destDir: 'dc',
        include: [new RegExp(/\.js$/), new RegExp(/\.js.map$/)],
        exclude: ['tests', 'ender', 'package'].map(key => new RegExp(key + '\.js$'))
      })
    );

    trees.push(
      funnel(this.crossfilterNode, {
        destDir: 'crossfilter',
        include: [new RegExp(/\.js$/)],
        exclude: ['tests', 'ender', 'package'].map(key => new RegExp(key + '\.js$'))
      })
    );

    return mergeTrees(trees);
  }
};
