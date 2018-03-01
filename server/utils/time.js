const moment = require('moment')

let createdAt = 1519921534070
let date = moment(createdAt)
console.log(date.format('YYYY-MM-DD HH:mm:ss'))
