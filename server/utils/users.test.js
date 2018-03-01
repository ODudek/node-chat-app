const except = require('expect')
const {Users} = require('./users')

describe('Users', () => {
  let users

  beforeEach(() => {
    users = new Users()
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }]
  })
  it('should add new user', () => {
    users = new Users()      
    let user = {
      id: '123',
      name: 'Andrew',
      room: 'The Office Fans'
    }
    let resUser = users.addUser(user.id, user.name, user.room)

    except(users.users).toEqual([user])
  })

  it('should remove a user', () => {
    let userId = '1'
    let user = users.removeUser(userId)

    except(user.id).toBe(userId)
    except(users.users.length).toBe(2)
  })

  it('should not remove a user', () => {
    let userId = '99'
    let user = users.removeUser(userId)

    except(user).toNotExist()
    except(users.users.length).toBe(3)
  })

  it('should find user', () => {
    let userId = '2'
    let user = users.getUser(userId)
    
    except(user.id).toBe(userId)
  })

  it('should not find user', () => {
    let userId = '99'
    let user = users.getUser(userId)

    except(user).toNotExist()
  })

  it('should return names for node course', () => {
    let userList = users.getUserList('Node Course')

    except(userList).toEqual(['Mike', 'Julie'])
  })
  it('should return names for react course', () => {
    let userList = users.getUserList('React Course')

    except(userList).toEqual(['Jen'])
  })
})
