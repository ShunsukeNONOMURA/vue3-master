// Utilities
import { defineStore } from 'pinia'
import { ref, Ref } from 'vue'

import { User } from '@/applications/model/user'
import {
  UserFactory,
  UserRepository,
} from '@/applications/service/user-repository'

const userFactory = new UserFactory()
const userRepository = new UserRepository()

export const useAppStore = defineStore('app', () => {
  const userRoleItems = ref(['guest', 'admin'])
  const users: Ref<User[]> = ref([])
  const tUser: Ref<User> = ref(userFactory.create({}))

  function updateUserList() {
    users.value = userRepository.listing()
  }

  function updateUserRoleList() {
    userRoleItems.value = ['guest', 'admin']
  }

  function findUser(userId: string) {
    return userRepository.find(userId as string)
  }

  function userAppend() {
    const user = findUser(tUser.value.userId)
    if (user != null) {
      console.log(`${user.userId} is existed`)
      return
    }
    userRepository.store(tUser.value)
    // 入力欄初期化
    tUser.value = userFactory.create({})
    // 一覧
    users.value = userRepository.listing()
  }

  function onDelete(user: User) {
    // 削除実行
    userRepository.delete(user)
    // 一覧
    users.value = userRepository.listing()
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
  }
})
