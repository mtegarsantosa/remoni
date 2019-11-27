'use strict';
var events = require('events')
var em = new events.EventEmitter()
var output=[]
function record(req, res, next){
    var reqFrom
    if (req.headers.referer) reqFrom = req.headers.referer
    else reqFrom = req.headers.origin
    if (reqFrom) {
      let data = {
        reqFrom: reqFrom,
        reqTo: req.protocol + '://' + req.get('host') + req.originalUrl,
        method: req.method,
        status:res.statusCode,
        time: Date.now(),
      }
      output.push(data)
      em.emit('data', output);
    }
  next()
}
function get(cb){
  em.on('data', (data)=>{
    cb(data.slice(-1)[0])
  })
}
module.exports = { get, record }
