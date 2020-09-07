import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ApiService from '../Service/api'

interface Props {
  classProp?: string
  init: boolean
  dismissable?: boolean
  handleDismiss?: (boolean) => void
}

const Newsletter: React.FC<Props> = ({
  classProp,
  init,
  dismissable = false,
  handleDismiss = () => {},
}) => {
  const [clicked, setClick] = useState<boolean>(init)
  const [subscribed, setSubscribed] = useState<boolean>(false)

  const [email, setEmail] = useState<string>('')

  const handleClick = (
    $evt: React.MouseEvent<HTMLElement, MouseEvent>,
    flag: boolean
  ): void => {
    $evt.stopPropagation()
    setClick(flag)
  }

  const subscribe = async ($evt): Promise<any> => {
    $evt.stopPropagation()
    await ApiService.subscribe(email)
    setEmail('')
    setClick(false)
    setSubscribed(true)
  }

  const handleClose = ($evt, flag) => {
    $evt.stopPropagation()
    if (dismissable) handleDismiss(flag)
    else setClick(false)
  }

  const t = useTranslation('lang', { useSuspense: false })[0]

  return (
    <div className={`newsletter-wrapper ${classProp}`}>
      <div
        className={`newsletter-button  ${
          clicked || subscribed ? 'expanded' : 'hover-pointer'
        }`}
        onClick={($evt) => handleClick($evt, true)}>
        {clicked ? (
          <div className="expanded-inner">
            <button
              className="close"
              onClick={($evt) => {
                handleClose($evt, false)
              }}>
              <i className="material-icons">close</i>
            </button>
            <span>{t('footer.newsletter.context1')}</span>
            <br />
            <span className="margin-8">{t('footer.newsletter.context2')}</span>
            <input
              type="text"
              placeholder="Email"
              onChange={($evt) => setEmail($evt.target.value)}
            />
            <div className="button-send">
              <span
                onClick={($evt) => subscribe($evt)}
                className="hover-pointer">
                {t('footer.newsletter.submit')}
              </span>
            </div>
          </div>
        ) : subscribed ? (
          <div className="expanded-inner">
            <span style={{ fontSize: '28px' }}>Thank you</span>
            <br />
            <span style={{ fontSize: '28px' }}>For Subscribing!</span>
            <br />
            <div
              style={{
                width: '100%',
                textAlign: 'right',
                marginTop: '32px',
              }}>
              <span
                className="hover-pointer"
                style={{ textDecoration: 'underline', fontSize: '20px' }}
                onClick={($evt) => {
                  handleClose($evt, false)
                  setSubscribed(false)
                }}>
                close
              </span>
            </div>
          </div>
        ) : (
          <span>{t('footer.newsletter.subscription')}</span>
        )}
      </div>
    </div>
  )
}

export default Newsletter
