var events = require('events')
var em = new events.EventEmitter()
function record(req, res, next){
    var output=[],reqFrom
    if (req.headers.referer) {
      reqFrom = req.headers.referer
    }
    else{
      reqFrom = req.headers.origin
    }
    let data = {
      reqFrom: reqFrom,
      reqTo: req.protocol + '://' + req.get('host') + req.originalUrl,
      time: Date.now()
    }
    output.push(data)
    em.emit('data', output);
  next()
}
function get(cb){
  em.on('data', (data)=>{
    cb(data)
  })
}
module.exports = { get, record }
