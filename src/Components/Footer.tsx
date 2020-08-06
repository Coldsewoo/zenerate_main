import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface Props {}

const Footer: React.FC<Props> = () => {
  const [clicked, setClick] = useState(false)

  const handleClick = (
    $evt: React.MouseEvent<HTMLElement, MouseEvent>,
    flag: boolean
  ): void => {
    $evt.stopPropagation()
    setClick(flag)
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
              clicked ? 'expanded' : 'hover-pointer'
            }`}
            onClick={($evt) => handleClick($evt, true)}>
            {clicked ? (
              <div className="expanded-inner">
                <span>Sign up to subscribe</span>
                <br />
                <span className="margin-8">Zenerate Newsletter!</span>
                <input type="text" placeholder="Email" />
                <div className="button-send">
                  <span
                    onClick={($evt) => handleClick($evt, false)}
                    className="hover-pointer">
                    SUBMIT
                  </span>
                </div>
              </div>
            ) : (
              <span>Newsletter Subscription</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
