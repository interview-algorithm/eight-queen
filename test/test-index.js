var queen = require('../eight-queen').queen;
var assert = require('assert');

describe('queen', function() {
  describe('8', function() {
    it('should get 92 results', function() {
      var q = queen(8);
      for (var i = 0; i < q.length; ++i) {
        var matrix = q[i];
        for (var m = 0; m < 8; ++m) {
          var line = '';
          for (var n = 0; n < 8; ++n) {
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
      assert.deepEqual(q.length, 92);
    });
  });
});