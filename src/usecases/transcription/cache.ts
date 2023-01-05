// // Cache Key Generator
// export const userCacheKeyGenerator = {
//   generateListKey: ({ query = {}, includeAllQuery }: { query?: UserListQuery, includeAllQuery?: boolean }) => {
//     return ['USER', 'LIST', ...(includeAllQuery ? [] : [query])] as const
//   },
//   generateItemKey: ({ id }: { id: User['id'] }) => {
//     return ['USER', 'ITEM', id] as const
//   },
// }

// // Cache Mutator
// export const useUserCacheMutator = () => {
//   const { mutate, mutateMany } = useMutate()

//   return React.useMemo(
//     () => ({
//       mutateList: () =>
//         mutateMany(userCacheKeyGenerator.generateListKey({ includeAllQuery: true })),
//       mutateItem: (
//         { id }: { id: User['id'] },
//         newData?: UserGetItemResponse,
//         revalidate?: boolean,
//       ) => mutate(userCacheKeyGenerator.generateItemKey({ id }), newData, revalidate),
//     }),
//     [mutate, mutateMany],
//   )
// }
