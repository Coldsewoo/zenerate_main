import React, { useEffect, useState } from 'react'
import {
  useScrollIndexState,
  useScrollIndexDispatch,
  // @ts-ignore
} from '../Context/Scroll.context.tsx'
// @ts-ignore
import { useLangDispatch, useLangState } from '../Context/I18n.context.tsx'
import {
  useToggleModalDispatch,
  useToggleModalState,
  //@ts-ignore
} from '../Context/Modal.context.tsx'
import { useTranslation } from 'react-i18next'
import { THEME } from '../Config/theme'
import { Link, withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router-dom'

interface Props extends RouteComponentProps {}

const Header: React.FC<Props> = ({ history, match }: Props) => {
  const scroll = useScrollIndexState()
  const setScroll = useScrollIndexDispatch()
  const lang = useLangState()
  const dispatchLang = useLangDispatch()

  const ToggleModal = useToggleModalState()
  const dispatchToggleModal = useToggleModalDispatch()

  const [t, i18n] = useTranslation('lang', { useSuspense: false })

  const handleLanguageChange = () => {
    dispatchLang({ type: 'CHANGE', lang: i18n.language === 'ko' ? 'en' : 'ko' })
  }
  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [i18n, lang])

  useEffect(() => {
    setScroll({ type: 'ROUTE', data: { page: match.path } })
  }, [setScroll, match])

  return (
    <>
      <section
        className="header"
        style={{
          zIndex: ToggleModal ? 0 : 1000,
        }}>
        <div className="header-pc">
          <div
            className={`header-wrapper ${
              THEME[scroll.page][scroll.index].header
            }`}>
            <div className="header-logo noselect hover-pointer">
              <Link to="/">
                <img src={THEME[scroll.page][scroll.index].logo} alt="" />
              </Link>
            </div>
            <div className="header-nav">
              <ul>
                <li>
          <Link to="/about">{t('header.nav.about')}</Link>
                </li>
                {/* <li>PROJECTS</li> */}
                <li>
                  <Link to="/news">{t('header.nav.news')}</Link>
                </li>
                <li>
                  <Link to="/contact">{t('header.nav.contact')}</Link>
                </li>
              </ul>
            </div>
            <div className="header-lang" onClick={handleLanguageChange}>
              <button>{i18n.language === 'ko' ? 'ENG' : 'KOR'}</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default withRouter(Header)
