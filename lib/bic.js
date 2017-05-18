/**
 * BIC (Business Identifier Code)
 * @constructor
 * @returns {BIC}
 */
function BIC() {

  if( !(this instanceof BIC) ) {
    return new BIC()
  }

  this.institution = 'XXXX'
  this.country = 'XX'
  this.location = 'XX'
  this.branch = 'XXX'

}

/**
 * Regular expression pattern
 * @type {RegExp}
 */
BIC.pattern = /^([A-Z]{4})([A-Z]{2})([A-Z0-9]{2})([A-Z0-9]{3})?$/i

/**
 * Check whether a given BIC is valid
 * @param {String} value
 * @return {Boolean}
 */
BIC.isValid = function( value ) {
  return BIC.pattern.test( value )
}

/**
 * Parse a BIC
 * @param {String} value
 * @param {Number} [offset=0]
 * @return {BIC}
 */
BIC.parse = function( value, offset ) {
  return new BIC().parse( value, offset )
}

/**
 * BIC prototype
 * @ignore
 */
BIC.prototype = {

  constructor: BIC,

  /**
   * Check whether this BIC is valid
   * @return {Boolean}
   */
  isValid() {
    return BIC.pattern.test( this.toString() )
  },

  /**
   * Parse a BIC
   * @param {String} value
   * @param {Number} [offset=0]
   * @return {BIC}
   */
  parse( value, offset ) {

    offset = offset || 0

    var match = ( value + '' ).toUpperCase()
      .slice( offset, offset + 11 )
      .match( BIC.pattern )

    if( match == null ) {
      throw new Error( `Invalid BIC: "${value}"` )
    }

    this.institution = match[1]
    this.country = match[2]
    this.location = match[3]
    this.branch = match[4] || 'XXX'

    return this

  },

  /**
   * Format the BIC as a string
   * @return {String}
   */
  toString() {

    var bic = this.institution + this.country +
      this.location + this.branch

    return bic.toUpperCase()

  },

}

// Exports
module.exports = BIC
