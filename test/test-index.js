var queen = require('../eight-queen').queen;
var assert = require('assert');

describe('construct', function() {
  describe('case', function() {
    it('desc', function() {
      var q = queen(8);
      console.log(q);
      for (var i = 0; i < 8; ++i) {
        var matrix = q[i];
        for (var m = 0; m < 8; ++m) {
          var line = '';
          for (var n = 0; n < 8; ++n) {
            if (matrix[n] === m) {
              line += ' *';
            } else {
              line += ' -';
            }
          }
          console.log(line);
        }
        console.log('\n');
      }
    //assert.deepEqual(dist.construct(1, 2), [1, 2]);
    });
  });
});