import React, { createContext, Dispatch, useReducer, useContext } from 'react'

export type ToggleModal = boolean

type ToggleModalState = ToggleModal

const ToggleModalStateContext = createContext<ToggleModalState>(
  false
)



type Action =
  | { type: 'INIT' }
  | { type: 'TOGGLE'; flag: ToggleModal }

type ToggleModalDispatch = Dispatch<Action>

const ToggleModalDispatchContext = createContext<ToggleModalDispatch | undefined>(undefined)

const ToggleModalReducer = (state: ToggleModalState, action: Action) => {
  switch (action.type) {
    case 'INIT':
      return false
    case 'TOGGLE':
      return action.flag;
    default:
      throw new Error('Unknown Action Type for ToggleModalReducer')
  }
}

export const ToggleModalContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [scroll, dispatch] = useReducer(ToggleModalReducer, false)

  return (
    <ToggleModalDispatchContext.Provider value={dispatch}>
      <ToggleModalStateContext.Provider value={scroll}>
        {children}
      </ToggleModalStateContext.Provider>
    </ToggleModalDispatchContext.Provider>
  )
}

export const useToggleModalState = () => {
  const state = useContext(ToggleModalStateContext)
  if (state === undefined) throw new Error('ToggleModalStateContext not found')
  return state
}

export const useToggleModalDispatch = () => {
  const dispatch = useContext(ToggleModalDispatchContext)
  if (!dispatch) throw new Error('ToggleModalDispatchContext not found')
  return dispatch
}
