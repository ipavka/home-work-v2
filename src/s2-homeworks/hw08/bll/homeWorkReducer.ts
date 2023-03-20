import {UserType} from '../HW8'

type ActionType =
  | { type: 'sort'; payload: 'up' | 'down' }
  | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
  switch (action.type) {
    case 'sort': { // by name
      return [...state].sort((a, b) => {
        // return action.payload === 'up' ? a.name < b.name ? -1 : 1 : a.name > b.name ? -1 : 1
        return action.payload === 'up' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      })
    }
    case 'check': {
      return state.filter(el => el.age >= action.payload)
    }
    default:
      return state
  }
}
