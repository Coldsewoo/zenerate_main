import React, {
  createContext,
  Dispatch,
  useReducer,
  useContext,
  useEffect,
} from 'react'

export type Lang = string

type LangState = Lang
const LangStateContext = createContext<LangState | undefined>(undefined)

type Action = { type: 'INIT' } | { type: 'CHANGE'; lang: Lang }
type LangDispatch = Dispatch<Action>
const LangDispatchContext = createContext<LangDispatch | undefined>(undefined)

const LangReducer = (state: LangState, action: Action) => {
  switch (action.type) {
    case 'INIT':
      return 'en'
    case 'CHANGE':
      return action.lang
    default:
      throw new Error('Unknown Action Type for LangReducer')
  }
}

const initialLang = localStorage.getItem('i18nextLng' as string) || 'en'

export const LangContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [lang, dispatch] = useReducer(LangReducer, initialLang)

  useEffect(() => {
    localStorage.setItem('i18nextLng', lang)
  }, [lang])

  return (
    <LangDispatchContext.Provider value={dispatch}>
      <LangStateContext.Provider value={lang}>
        {children}
      </LangStateContext.Provider>
    </LangDispatchContext.Provider>
  )
}

export const useLangState = () => {
  const state = useContext(LangStateContext)
  if (!state) throw new Error('LangContextProvider not found')
  return state
}

export const useLangDispatch = () => {
  const dispatch = useContext(LangDispatchContext)
  if (!dispatch) throw new Error('LangContextProvider not found')
  return dispatch
}
