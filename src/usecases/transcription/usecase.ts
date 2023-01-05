// ユーザーのwrite処理（キャッシュを伴わない処理）

// export const useUserUsecase = () => {
//   const repository = useUserRepository()  // 前述のRepository
//   const mutator = useUserCacheMutator()   // 前述のCache Mutator
//   const { addToast } = useToastMutators() // Global StateのMutator

//   return React.useMemo(
//     () => createUserUsecase({ repository, mutator, addToast }),
//     [repository, activityRepository, mutator, addToast],
//   )
// }

// export const createUserUsecase = ({ repository, mutator, addToast }: {
//   repository: UserRepository
//   mutator: ReturnType<typeof useUserCacheMutator>
//   addToast: ReturnType<typeof useToastMutators>['addToast']
// }) => ({
//   // 作成
//   async createUser(seed: UserCreateSeed) {
//     try {
//       const { user } = await repository.createItem(seed)
//       // ユーザーが増えたので既存の一覧のキャッシュデータをクリア
//       mutator.mutateList()
//       // 画面にToast UIを表示して通知
//       addToast('ユーザーを作成しました')
//       return { user }
//     } catch (error) {
//       // 想定内エラーのハンドリング
//       if (error instanceof HTTPError && error.statusCode === 409) {
//         throw new ApplicationError('同じユーザーが既に存在しています')
//       }
//       // 想定外エラーのハンドリング
//       // - エラー監視ツールへ生エラーを通知
//       reportException(error)
//       // - 画面へ表示する用の汎用エラーをthrow
//       const errorMessage = '予期せぬエラーが発生しました。再度お試しください。'
//       throw new Error(errorMessage)
//     }
//   },

//   // ...ほか更新や削除など
// }
