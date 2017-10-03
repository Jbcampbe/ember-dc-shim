import { test, module } from 'qunit';
import d3 from 'd3';
import crossfilter from 'crossfilter';
import dc from 'dc';

module('Unit | shim works');

test('d3 exports', (assert) => {
    assert.ok(d3, 'd3 exports an object');
});

test('d3-tip exports', (assert) => {
    assert.ok(d3.tip, 'd3-tip exports a function');
});

test('dc exports', (assert) => {
    assert.ok(crossfilter, 'crossfilter exports an object');
});

test('crossfilter exports', (assert) => {
    assert.ok(dc, 'dc exports an object');
});