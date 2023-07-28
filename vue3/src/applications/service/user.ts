import { User } from '@/applications/model/user'

export class UserService {
  userList: Array<User>
  constructor() {
    const len = 5
    this.userList = [...new Array(len).keys()].map((number) => {
      return new User({
        userId: `${number}`,
        userName: 'name_' + number,
        userRole: 'guest',
        userCreationDatetime: new Date(),
      })
    })
  }
  create(props: any) {
    props.userRole = 'guest'
    props.userCreationDatetime = new Date()
    return new User(props)
  }
  find(userId: string) {
    const users = this.userList.filter((tUser) => {
      return tUser.userId == userId
    })
    return users[0]
    // return ?? null;
  }
  search(query: any) {
    console.log('on search')
    console.log(query)
    const userId = query.q ?? ''
    if (userId == '') return this.userList
    const users = this.userList.filter((tUser) => {
      return (
        tUser.userId.includes(query.q ?? '') ||
        tUser.userName.includes(query.q ?? '') ||
        tUser.userRole.includes(query.q ?? '')
      )
    })
    console.log(users)
    return users
  }
  listing() {
    return this.userList
  }
  store(user: User) {
    this.userList.push(user)
    this.userList = this.userList.slice(0, this.userList.length)
  }
  delete(user: User) {
    this.userList = this.userList.filter((tUser) => {
      return tUser.userId != user.userId
    })
  }
}
