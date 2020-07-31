import React, { createContext, Dispatch, useReducer, useContext } from 'react'

type ScrollData = {
  index: number | null | string
  isFirst: boolean
  isLast: boolean
}

export type ScrollIndex = ScrollData & { page: string }

type ScrollIndexState = ScrollIndex

const ScrollIndexStateContext = createContext<ScrollIndexState | undefined>(
  undefined
)

type Action =
  | { type: 'INIT' }
  | { type: 'INDEX'; data: ScrollData }
  | { type: 'ROUTE'; data: { page: string } }

type ScrollIndexDispatch = Dispatch<Action>

const ScrollIndexDispatchContext = createContext<
  ScrollIndexDispatch | undefined
>(undefined)

const scrollIndexReducer = (state: ScrollIndexState, action: Action) => {
  switch (action.type) {
    case 'INIT':
      return {
        index: 'init',
        isFirst: true,
        isLast: false,
        page: '/',
      }
    case 'INDEX':
      const page = state.page
      return {
        ...action.data,
        page,
      }
    case 'ROUTE':
      return {
        index: 'init',
        isFirst: true,
        isLast: false,
        page: action.data.page,
      }
    default:
      throw new Error('Unknown Action Type for ScrollIndexReducer')
  }
}

export const ScrollIndexContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [scroll, dispatch] = useReducer(scrollIndexReducer, {
    index: 'init',
    isFirst: true,
    isLast: false,
    page: '/',
  })

  return (
    <ScrollIndexDispatchContext.Provider value={dispatch}>
      <ScrollIndexStateContext.Provider value={scroll}>
        {children}
      </ScrollIndexStateContext.Provider>
    </ScrollIndexDispatchContext.Provider>
  )
}

export const useScrollIndexState = () => {
  const state = useContext(ScrollIndexStateContext)
  if (!state) throw new Error('ScrollIndexProvider not found')
  return state
}

export const useScrollIndexDispatch = () => {
  const dispatch = useContext(ScrollIndexDispatchContext)
  if (!dispatch) throw new Error('ScrollIndexProvider not found')
  return dispatch
}
