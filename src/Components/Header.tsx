import React, { useEffect, useState } from 'react'
import {
  useScrollIndexState,
  useScrollIndexDispatch,
  // @ts-ignore
} from '../Context/Scroll.context.tsx'
// @ts-ignore
import { useLangDispatch, useLangState } from '../Context/I18n.context.tsx'
import {
  useToggleModalState,
  //@ts-ignore
} from '../Context/Modal.context.tsx'
import { useTranslation } from 'react-i18next'
import { THEME } from '../Config/theme'
import { Link, withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router-dom'

import Newsletter from './Newsletter'

interface Props extends RouteComponentProps {}

const Header: React.FC<Props> = ({ history, match }: Props) => {
  const scroll = useScrollIndexState()
  const setScroll = useScrollIndexDispatch()
  const lang = useLangState()
  const dispatchLang = useLangDispatch()

  const ToggleModal = useToggleModalState()

  const [openDrawer, setOpenDrawer] = useState(false)

  const [t, i18n] = useTranslation('lang', { useSuspense: false })

  const handleLanguageChange = () => {
    dispatchLang({ type: 'CHANGE', lang: i18n.language === 'ko' ? 'en' : 'ko' })
  }

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer)
  }

  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [i18n, lang])

  useEffect(() => {
    setOpenDrawer(false)
    setScroll({ type: 'ROUTE', data: { page: match.path } })
  }, [setScroll, match])

  return (
    <>
      <section
        className="header"
        style={{
          zIndex: ToggleModal ? 0 : 1000,
        }}>
        <div className="header-pc pc">
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
                  <Link to="/about">{t(`header.nav.about`)}</Link>
                </li>
                {/* <li>PROJECTS</li> */}
                <li>
                  <Link to="/news">{t(`header.nav.news`)}</Link>
                </li>
                <li>
                  <Link to="/contact">{t(`header.nav.contact`)}</Link>
                </li>
              </ul>
            </div>
            <div className="header-lang" onClick={handleLanguageChange}>
              <button>{i18n.language === 'ko' ? 'ENG' : 'KOR'}</button>
            </div>
          </div>
        </div>
        <div className="header-mobile mobile">
          <div className="header-wrapper">
            <div className="header-logo noselect hover-pointer">
              <Link to="/">
                <img src="/img/Zenerate_Logo_color.png" alt="" />
              </Link>
            </div>

            <div
              className="header-drawer hover-pointer"
              style={{ marginLeft: 'auto' }}
              onClick={() => toggleDrawer()}>
              <i className="material-icons">menu</i>
            </div>
            <div className="header-lang">
              <button onClick={handleLanguageChange}>
                {i18n.language === 'ko' ? 'ENG' : 'KOR'}
              </button>
            </div>
          </div>
        </div>
        {openDrawer && (
          <div className="modal-menu">
            <div className="menu-title">
              <div className="menu-title-text">
                <i
                  className="material-icons hover-pointer"
                  onClick={() => toggleDrawer()}>
                  menu
                </i>
                <span>MENU</span>
              </div>
              <div className="menu-title-close">
                <i
                  className="material-icons hover-pointer"
                  onClick={() => toggleDrawer()}>
                  close
                </i>
              </div>
            </div>
            <div className="menu-nav">
              <ul>
                <li className="hover-pointer" onClick={() => history.push('/')}>
                  <span>{t(`header.nav.home`)}</span>
                </li>
                <li
                  className="hover-pointer"
                  onClick={() => history.push('/about')}>
                  <span>{t(`header.nav.about`)}</span>
                </li>
                <li
                  className="hover-pointer"
                  onClick={() => history.push('/news')}>
                  <span>{t(`header.nav.news`)}</span>
                </li>
                <li
                  className="hover-pointer"
                  onClick={() => history.push('/contact')}>
                  <span>{t(`header.nav.contact`)}</span>
                </li>
              </ul>
            </div>
          </div>
        )}
        <Newsletter classProp="header-newsletter" init={true} />
      </section>
    </>
  )
}

export default withRouter(Header)
