import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ApiService from '../Service/api'

interface Props {}

const Footer: React.FC<Props> = () => {
  const [clicked, setClick] = useState<boolean>(false)
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

  const t = useTranslation('lang', { useSuspense: false })[0]

  return (
    <div className="footer-wrapper">
      <div className="spacer" />
      <div className="inner">
        <div className="inner-left">
          <div className="footer-text">
            <span>{t('footer.company')}</span>
          </div>
          <div className="footer-text">
            <span>{t('footer.ceo')}</span>
          </div>
          <div className="footer-text">
            <span>
              <span>{t('footer.addr')}</span>
            </span>
          </div>
          <div className="footer-text">
            <span>bshin@zenerate.ai</span>
          </div>
          <div className="footer-text">
            <span>COPYRIGHT © Zenerate Inc.</span>
          </div>
        </div>
        <div className="inner-right">
          <div
            className={`newsletter-button  ${
              clicked || subscribed ? 'expanded' : 'hover-pointer'
            }`}
            onClick={($evt) => handleClick($evt, true)}>
            {clicked ? (
              <div className="expanded-inner">
                <span>{t('footer.newsletter.context1')}</span>
                <br />
                <span className="margin-8">
                  {t('footer.newsletter.context2')}
                </span>
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
                <span style={{ fontSize: '36px' }}>Thank you</span>
                <br />
                <span style={{ fontSize: '36px' }}>For Subscribing!</span>
                <br />
                <div
                  style={{
                    width: '100%',
                    textAlign: 'right',
                    marginTop: '16px',
                  }}>
                  <span
                    className="hover-pointer"
                    style={{ textDecoration: 'underline', fontSize: '20px' }}
                    onClick={($evt) => {
                      $evt.stopPropagation()
                      setClick(false)
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
      </div>
    </div>
  )
}

export default Footer
