var queen = require('../eight-queen').queen;
var assert = require('assert');


function print(q, N) {
    for (var i = 0; i < q.length; ++i) {
        var matrix = q[i];
        for (var m = 0; m < N; ++m) {
            var line = '';
            for (var n = 0; n < N; ++n) {
                if (matrix[n] === m) {
                    line += ' Q';
                } else {
                    line += ' *';
                }
            }
            console.log(line);
        }
        console.log('\n');
    }
}

describe('queen', function () {
    describe('illegal', function () {
        it('shoud throw error', function () {
            assert.throws(function () {
                queen(-1);
            });
        });
    });
    describe('calculate', function () {
        it('N=1 should get 1 results', function () {
            var q = queen(1);
            assert.deepEqual(q.length, 1);
        });
        it('N=2 should get 0 results', function () {
            var q = queen(2);
            assert.deepEqual(q.length, 0);
        });
        it('N=3 should get 0 results', function () {
            var q = queen(3);
            assert.deepEqual(q.length, 0);
        });
        it('N=4 should get 2 results', function () {
            var q = queen(4);
            assert.deepEqual(q.length, 2);
        });
        it('N=8 should get 92 results', function () {
            var q = queen(8);
            assert.deepEqual(q.length, 92);
        });
    });
});