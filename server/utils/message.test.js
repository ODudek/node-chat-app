const except = require('expect')

const {generateMessage} = require('./message')

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    let from = 'Me'
    let text = 'Test message'
    let message = generateMessage(from, text)

    except(message).toInclude({from, text})
  })
})
