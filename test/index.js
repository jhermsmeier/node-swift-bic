var assert = require( 'assert' )
var BIC = require( '..' )

describe( 'BIC', function() {

  specify( 'parses a BIC', function() {
    var bic = BIC.parse( 'HELADEF1JEN' )
    assert.ok( bic instanceof BIC )
    assert.deepEqual( bic, {
      institution: 'HELA',
      country: 'DE',
      location: 'F1',
      branch: 'JEN',
    })
  })

  specify( 'parses a BIC without a branch', function() {
    var bic = BIC.parse( 'HELADEF1' )
    assert.ok( bic instanceof BIC )
    assert.deepEqual( bic, {
      institution: 'HELA',
      country: 'DE',
      location: 'F1',
      branch: 'XXX',
    })
  })

})
