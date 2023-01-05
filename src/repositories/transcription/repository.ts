// // 外から使われるのはこのhooks。
// // 必要なhooksを呼び出してその値をfactory関数に渡しrepositoryを生成して返す。
// export const useUserRepository = () => {
//   const apiClient = useApiClient()
//   return React.useMemo(() => createUserRepository(apiClient), [apiClient])
// }

// // repository本体はfactory関数としてhooksから分離してある。
// // テストが書きやすいのと、Reactに依存しないPureな関数として資産にするため。
// export const createUserRepository = (apiClient: ApiClient) => ({
//   // 一覧取得
//   async getList(query: UserListQuery) {
//     const queryData = convertUserListQueryToData(query)
//     const { data } = await apiClient.getUsers(queryData)

//     return {
//       users: data.users.map(convertUserFromData),
//     }
//   },

//   // 詳細取得
//   async getItem({ id }: { id: User['id'] }) {
//     const { data } = await apiClient.getUser({ id })

//     return {
//       user: convertUserFromData(data.user),
//     }
//   },
  
//   // ...ほかUserの作成・更新・削除など
// }