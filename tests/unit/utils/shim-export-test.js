import { test, module } from 'qunit';
import d3 from 'ember-dc';
import crossfilter from 'ember-dc';
import dc from 'ember-dc';

module('Unit | shim works');

test('d3 exports', (assert) => {
    assert.ok(d3, 'd3 exports an object');
});

test('dc exports', (assert) => {
    assert.ok(crossfilter, 'crossfilter exports an object');
});

test('crossfilter exports', (assert) => {
    assert.ok(dc, 'dc exports an object');
});