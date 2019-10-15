const express = require('express')
const Redis = require('../control/redis.js')

const redis = new Redis()
const router = express.Router()

router.post('/', (req, res, next) => {
  var blockname = req.body.blockname
  var hintsBlock = req.body['hint[]']
  if(blockname !== 'defaultblock') {
      redis.createNewBlock(blockname, hintsBlock)
    .then((reply) => {
      res.status(200).json({OK: {msg: 'Create new block susscessfully! ' + reply}})
    }).catch((err) => {
      res.status(200).json({err: {msg: 'Cannot create new block due to:  ' + err}})
    })
  } else {
    res.status(200).json({err: {msg: 'This "defaultblock" cannot be used'}})
  }

})

router.get('/getAllBlockNames', (req, res, next) => {
  redis.getAllBlockNames()
    .then((blocknames) => {
      res.status(200).json({OK: {msg: blocknames}})
    }).catch((err) => {
      res.status(200).json({err: {msg: 'Cannot get all blocks due to:  ' + err}})
    })
})

router.post('/getHintsOfABlock', (req, res, next) => {
  var blockname = req.body.blockname
  redis.getHintsOfABlock(blockname)
    .then((hints) => {
      res.status(200).json({OK: {msg: hints}})
    }).catch((err) => {
      res.status(200).json({err: {msg: 'Cannot get hints from block '+ blockname + ' due to:  ' + err}})
    })
})

// router.post('/deleteAllBlock', (req, res, next) => {
//   redis.deleteAllBlock()
//   .then((suscess) => {
//     res.status(200).json({OK: {msg: suscess}})
//   }).catch((err) => {
//     res.status(200).json({err: {msg: err}})
//   })
// })

module.exports = router
