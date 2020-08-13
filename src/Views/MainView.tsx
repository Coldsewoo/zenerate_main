import React, { useState, useEffect } from 'react'
import { Footer } from '../Components'
import { SelectInput, Item } from '../Components/inputs/SelectInput'

import { RouteComponentProps, withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import ApiService from '../Service/api'

interface Props extends RouteComponentProps {}
type selectedProjectType = {
  [key: string]: boolean
}

type emailForm = {
  name: string
  email: string
  purpose: string
  message: string
}

const MainView: React.FC<Props> = ({ match, history, location }) => {
  const t = useTranslation('lang', { useSuspense: false })[0]
  const [hovered, setHover] = useState<number | null>(0)
  const changeHover = (idx: number | null) => setHover(idx)

  const [formSending, setFormSending] = useState<boolean>(false)
  const [formSent, setFormSent] = useState<boolean>(false)

  const [emailForm, setEmailForm] = useState<emailForm>({
    name: '',
    email: '',
    purpose: '',
    message: '',
  })

  const changeForm = (tag: string, v: string) => {
    setEmailForm({
      ...emailForm,
      [tag]: v,
    })
  }
  const items: Item[] = [
    {
      id: 0,
      value: t('form.purpose.business'),
    },
    {
      id: 1,
      value: t('form.purpose.marketing'),
    },
    {
      id: 2,
      value: t('form.purpose.research'),
    },
    {
      id: 3,
      value: t('form.purpose.career'),
    },
    {
      id: 4,
      value: t('form.purpose.feedback'),
    },
  ]

  const sendForm = () => {
    if (!formSending) {
      setFormSending(true)
      ApiService.sendEmail({ data: emailForm })
        .then((res) => {
          setEmailForm({
            name: '',
            email: '',
            purpose: '',
            message: '',
          })
          setFormSent(true)
          setFormSending(false)
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <>
      <div className="section section-main-1">
        <div className="wrapper noselect">
          <div className="main-image">
            <img src="/img/zenerate_main.gif" alt="" />
          </div>
          <ul className="main-text">
            <li style={{ width: 467 }}>{t('main.tab1.li1')}</li>
          </ul>
        </div>
      </div>
      <div className="section section-main-2">
        <div className="wrapper">
          <div className="left-image">
            <img src="/img/final_color.gif" alt="" />
          </div>
          <div className="right-text">
            <ul>
              <li>{t('main.tab2.li1')}</li>
              <li>{t('main.tab2.li2')}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="section section-main-3">
        <div className="wrapper">
          <div className="icons-wrapper">
            <div className={`icon-wrapper ${hovered === 0 ? 'active' : ''}`}>
              <div
                className="hover-pointer"
                onMouseEnter={() => changeHover(0)}>
                <img src={`/img/about_client.svg`} alt="" />
                <span className="icon-title">Client Meeting</span>
              </div>

              <div className="icon-index">
                <div className="icon">
                  <span>1</span>
                </div>
                <div className="spacer"></div>
              </div>
              <div className="icon-text">
                {hovered === 0 && <span className="hyphenate">{t(`main.tab3.index1.span1`)}</span>}
              </div>
            </div>
            <div className={`icon-wrapper ${hovered === 1 ? 'active' : ''}`}>
              <div
                className="hover-pointer"
                onMouseEnter={() => changeHover(1)}>
                <img src={`/img/about_process.svg`} alt="" />
                <span className="icon-title">Processing</span>
              </div>

              <div className="icon-index">
                <div className="icon">
                  <span>2</span>
                </div>

                <div className="spacer"></div>
              </div>
              <div className="icon-text">
                {hovered === 1 && <span className="hyphenate">{t(`main.tab3.index2.span1`)}</span>}
              </div>
            </div>
            <div className={`icon-wrapper ${hovered === 2 ? 'active' : ''}`}>
              <div
                className="hover-pointer"
                onMouseEnter={() => changeHover(2)}>
                <img src={`/img/about_delivery.svg`} alt="" />
                <span className="icon-title">Delivery</span>
              </div>

              <div className="icon-index">
                <div className="icon">
                  <span>3</span>
                </div>
              </div>
              <div className="icon-text">
                {hovered === 2 && <span className="hyphenate">{t(`main.tab3.index3.span1`)}</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="section section-main-4">
        <div className="wrapper">
          <div className="title">Projects</div>
          <div className="projects-wrapper">
            <div className="project hover-pointer">
              <img src="/img/tower.gif" alt="" />
            </div>
            <div className="project hover-pointer">
              <img src="/img/o2r.gif" alt="" />
            </div>
            <div className="project hover-pointer">
              <img src="/img/hotel.gif" alt="" />
            </div>
            <div className="project hover-pointer"></div>
            <div className="project hover-pointer"></div>
            <div className="project hover-pointer"></div>
          </div>
        </div>
      </div> */}
      <div className="section section-main-5">
        <div className="wrapper">
          <div className="left-title">
            <span>Feel Free to Contact Us!</span>
          </div>
          <div className="right-form">
            <div className="label-text">
              <input
                type="text"
                placeholder={t('form.name')}
                value={emailForm.name}
                onChange={($evt) => changeForm('name', $evt.target.value)}
              />
            </div>
            <div className="label-text">
              <input
                type="text"
                placeholder={t('form.email')}
                value={emailForm.email}
                onChange={($evt) => changeForm('email', $evt.target.value)}
              />
            </div>
            <SelectInput
              placeholder={t('form.purpos')}
              items={items}
              selected={emailForm.purpose}
              onSelect={(v) => changeForm('purpose', v)}
            />
            <div className="label-textarea">
              <textarea
                name="message"
                rows={6}
                placeholder={t('form.message')}
                value={emailForm.message}
                onChange={($evt) => changeForm('message', $evt.target.value)}
              />
            </div>
            <div className="form-send">
              <span className="hover-pointer" onClick={() => sendForm()}>
                {t('form.send')}
              </span>
              <br />
              {formSent && <span className="sent">{t('form.sent')}</span>}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default MainView
