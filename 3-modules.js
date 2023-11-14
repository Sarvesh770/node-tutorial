// node uses commonJS in which every file is Module (by default)
// encapsulated code (share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
console.log(data);
//console.log(names);

require('./7-mind-grenade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)