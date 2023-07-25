import { User } from '@/applications/model/user'

export class UserFactory {
  create(props: any) {
    props.userRole = 'guest'
    return new User(props)
  }
}

export class UserRepository {
  userList: Array<User>
  constructor() {
    const len = 10
    this.userList = [...new Array(len).keys()].map((number) => {
      return new User({
        userId: `${number}`,
        userName: 'name_' + number,
        userRole: 'guest',
      })
    })
  }
  find(userId: string) {
    const users = this.userList.filter((tUser) => {
      return tUser.userId == userId
    })
    return users[0]
    // return ?? null;
  }
  listing() {
    // const len = 10
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
