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
      })
    })
  }
  create(props: any) {
    props.userRole = 'guest'
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
    // const len = 10
    return []
    return this.userList.filter((tUser) => {
      return tUser.userId == query.q ?? ''
    })
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

