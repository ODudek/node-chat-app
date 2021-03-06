const socket = io()
const $form = document.querySelector('#message-form')
const $messages = document.querySelector('#messages')

function scrollToBottom () {
  $messages.scrollTop = $messages.scrollHeight - $messages.clientHeight
}

socket.on('connect', () => {
  let convertUrl = new UrlParser(window.location.search)
  let params = convertUrl.convertToObject()

  socket.emit('join', params, (err) => {
    if (err) {
      window.location.href = '/'
      console.error(err)
    } else {
    }
  })
  socket.emit('createMessage', () => {
  })
})

socket.on('disconnect', () => {
  console.log('disconnected')
})

socket.on('updateUserList', (users) => {
  let $users = document.querySelector('#users')
  $users.innerHTML = ''    

  users.forEach((user) => {
    let $li = document.createElement('li')
    $li.innerHTML = user
    $users.append($li)
  })
})

socket.on('newMessage', (message) => {
  if (message.from || message.text) {
    const template = document.querySelector('#message-template').innerHTML
    const formattedTime = moment(message.createdAt).format('HH:mm')
    const messageData = {
      from: message.from,
      text: message.text,
      createdAt: formattedTime
    }
    let html = new HtmlParser(template, $messages, messageData)
    scrollToBottom()
  }
})

$form.addEventListener('submit', (e) => {
  e.preventDefault()
  let $message = document.querySelector('[name=message]')

  socket.emit('createMessage', {
    text: $message.value
  }, function () {
    $message.value = ''
  })
})
