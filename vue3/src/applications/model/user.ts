export class User {
  userId: string
  userName: string
  userRole: string
  constructor(props: any) {
    this.userId = props.userId
    this.userName = props.userName
    this.userRole = props.userRole
  }
}
