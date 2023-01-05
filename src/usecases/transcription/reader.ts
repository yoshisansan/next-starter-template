// // 一覧取得
// type UserGetListResponse = { users: User[] }
// export const useUserList = (query: UserListQuery) => {
//   const repository = useUserRepository()

//   return useSWR<UserGetListResponse>(
//     userCacheKeyGenerator.generateListKey({ query }),
//     () => repository.getList(query),
//   )
// }

// // 詳細取得
// export type UserGetItemResponse = { user: User }
// export const useUserItem = (query: { id: User['id'] }) => {
//   const repository = useUserRepository()

//   return useSWR<UserGetItemResponse>(
//     userCacheKeyGenerator.generateItemKey(query),
//     () => repository.getItem(query),
//   )
// }
