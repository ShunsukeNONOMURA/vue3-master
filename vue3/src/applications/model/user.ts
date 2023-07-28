export class User {
  userId: string
  userName: string
  userRole: string
  userCreationDatetime: Date
  constructor(props: any) {
    this.userId = props.userId
    this.userName = props.userName
    this.userRole = props.userRole
    this.userCreationDatetime = props.userCreationDatetime
  }
}
