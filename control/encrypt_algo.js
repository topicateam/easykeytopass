const md5 = require('md5')

const Config = require('../config/Config.js')
const config = new Config()

const md5length = 32
exports.encryptPassword = function(blockID, keyword) {
  var upKeyPos = blockID.length % md5length
  var seed = config.encryptingSeed(blockID)
  var maxLoop = 1;
  for (var i = 0; i < md5length; i++) {
    maxLoop += seed.charCodeAt(i)
  }
  maxLoop = maxLoop % md5length
  var encryptedPassword = ''
  for (var ele in keyword) {
      for (var k = 0; k < maxLoop; k++) {
      encryptedPassword += keyword[ele]
    }
    encryptedPassword = md5(encryptedPassword)
  }
  var result = ''
  var countLetter = 0
  for(var upkeypos = 0; upkeypos < md5length; upkeypos++) {
    var currentLetter = encryptedPassword.charAt(upkeypos)
    if(currentLetter >= 'a' && currentLetter < 'z') {
      if(countLetter === 0) {
        countLetter++
        result += encryptedPassword.charAt(upkeypos).toUpperCase()
      } else {
        countLetter = 0
        result += encryptedPassword.charAt(upkeypos)
      }
    } else {
      result += encryptedPassword.charAt(upkeypos)
    }
  }
  return result
}
