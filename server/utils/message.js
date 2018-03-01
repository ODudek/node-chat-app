const moment = require('moment')

let generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: moment()
  }
}

module.exports = {generateMessage}
