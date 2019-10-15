const redis = require('redis')
const Config = require('../config/Config.js')
const config = new Config()

// const client = redis.createClient(process.env.REDIS_URL)

module.exports = class Redis {
  constructor () {
    this.db = redis.createClient(config.redisDB)
  }

  createNewBlock(blockname, hintsBlock) {
  	var createNewBlock = new Promise((resolve, reject) => {
  		this.db.exists(blockname, (err, isExisted) => {
  			if(!err) {
  				if(isExisted !== 1) {
  					resolve()
  				} else {
  					reject('The blockname exist. Please change the blockname!')
  				}
  			} else {
  				reject('The database seems broken. Please contact admin!')
  			}
  		})
  	})

  		var createNewBlock2 = createNewBlock.then(() => {
  			return new Promise((resolve, reject) => {
		  		this.db.rpush(blockname, hintsBlock, (err, reply) => {
			  		if(!err) {
			  			resolve(reply)
			  		} else {
			  			reject(err)
			  		}
  				})   					
  			})
 			
  		}).catch((err) => {
  			return Promise.reject(err)
  		})

  		return createNewBlock2
  }

  getAllBlockNames() {
  	return new Promise((resolve, reject) => {
  		this.db.keys('*', (err, keys) => {
  			if(!err) {
  				resolve(keys)
  			} else {
  				reject(err)
  			}
  		})
  	})
  }

  getHintsOfABlock(blockname) {
  	return new Promise((resolve, reject) => {
  		this.db.lrange(blockname, 0, -1,(err, hints) => {
  			if(!err) {
  				resolve(hints)
  			} else {
  				reject(err)
  			}
  		})
  	})
  }

    deleteAllBlock() {
    return new Promise((resolve, reject) => {
      this.db.flushdb((err, succeeded) => {
        if(!err) {
          resolve(succeeded)
        } else {
          reject(err)
        }
      })
    })
  }


}
