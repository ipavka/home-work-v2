const initState = {
  themeId: 1,
}
type InitialStateType = typeof initState
export const themeReducer = (state: InitialStateType = initState, action: TypeThemeIdAC): InitialStateType => {
  switch (action.type) {
    case "SET_THEME_ID": {
      return {...state, themeId: action.id}
    }
    default:
      return state
  }
}
type TypeThemeIdAC = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number) => ({type: 'SET_THEME_ID', id} as const)

