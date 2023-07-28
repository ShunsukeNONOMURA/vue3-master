// Utilities
import { defineStore } from 'pinia'
import { ref, Ref } from 'vue'

import { User } from '@/applications/model/user'
import { UserService } from '@/applications/service/user'

const userService = new UserService()

export const useAppStore = defineStore('app', () => {
  const userRoleItems = ref(['guest', 'admin'])
  const users: Ref<User[]> = ref([])
  const tUser: Ref<User> = ref(userService.create({}))

  function updateUserList() {
    users.value = userService.listing()
  }

  function updateUserRoleList() {
    userRoleItems.value = ['guest', 'admin']
  }

  function findUser(userId: string) {
    return userService.find(userId as string)
  }

  function search(query: any) {
    // return userService.search(query)
    users.value = userService.search(query)
  }

  function userAppend() {
    const user = findUser(tUser.value.userId)
    if (user != null) {
      console.log(`${user.userId} is existed`)
      return
    }
    userService.store(tUser.value)
    // 入力欄初期化
    tUser.value = userService.create({})
    // 一覧
    users.value = userService.listing()
  }

  function onDelete(user: User) {
    // 削除実行
    userService.delete(user)
    // 一覧
    users.value = userService.listing()
  }

  return {
    userRoleItems,
    updateUserRoleList,
    users,
    tUser,
    updateUserList,
    findUser,
    userAppend,
    onDelete,
    search,
  }
})
