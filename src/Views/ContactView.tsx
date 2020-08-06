import React, { useState, useEffect } from 'react'
import { Footer } from '../Components'
import { SelectInput, Item } from '../Components/inputs/SelectInput'

import { RouteComponentProps } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface Props extends RouteComponentProps {}

type emailForm = {
  name: string
  email: string
  purpose: string
  message: string
}

const ContactView: React.FC<Props> = ({ match, history, location }) => {
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

  const t = useTranslation('lang', { useSuspense: false })[0]

  const items: Item[] = [
    {
      id: 0,
      value: t('purpose.business'),
    },
    {
      id: 1,
      value: t('purpose.marketing'),
    },
    {
      id: 2,
      value: t('purpose.research'),
    },
    {
      id: 3,
      value: t('purpose.career'),
    },
    {
      id: 4,
      value: t('purpose.feedback'),
    },
  ]

  return (
    <>
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
              <span className="hover-pointer">{t('form.send')}</span>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default ContactView
