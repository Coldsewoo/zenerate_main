import React from 'react'
import { useTranslation } from 'react-i18next'
import Newsletter from './Newsletter'

interface Props {}

const Footer: React.FC<Props> = () => {
  const t = useTranslation('lang', { useSuspense: false })[0]

  return (
    <div className="footer-wrapper contents-padding">
      <div className="spacer" />
      <div className="inner">
        <Newsletter classProp="mobile" />
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
        <Newsletter classProp="pc" />
      </div>
    </div>
  )
}

export default Footer
