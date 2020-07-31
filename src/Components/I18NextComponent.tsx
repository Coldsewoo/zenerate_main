import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLangDispatch, useLangState } from '../Context/I18n.context'

interface Props {}

export const I18NextComponent: React.FC<Props> = () => {
  const lang = useLangState()
  const changeLang = useLangDispatch()

  const [t, i18n] = useTranslation('lang', { useSuspense: false })
  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [])

  const handleChangeLang = (lang: string): void => {
    changeLang({ type: 'CHANGE', lang: lang })
  }

  return (
    <div>
      <button onClick={($evt) => handleChangeLang('ko')}>Kor</button>
      <button onClick={($evt) => handleChangeLang('en')}>Eng</button>
      <p>{t('hello')}</p>
      <p>{t('post.title')}</p>
      <p>{t('post.name')}</p>
    </div>
  )
}
