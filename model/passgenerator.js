const express = require('express')
const encryptAlgo = require('../control/encrypt_algo.js')
const router = express.Router()

router.post('/', (req, res, next) => {
  var keyword = req.body['keyword[]']
  var blockid = req.body.blockname
  var encryptedPassword
  try {
    encryptedPassword = encryptAlgo.encryptPassword(blockid, keyword)
  } catch(err) {
  	console.log(err)
    res.status(200).json({err: {msg: err}})
    return
  }
  res.status(200).json({OK: {msg: encryptedPassword}})
})

module.exports = router
