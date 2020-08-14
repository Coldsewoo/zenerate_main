import React from 'react'
import { withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const AboutView: React.FC = () => {
  const t = useTranslation('lang', { useSuspense: false })[0]

  return (
    <>
      <div className="section section-about-1">
        <div className="wrapper">
          <div className="title">
            <span>Our Story</span>
          </div>
          <div className="text">
            <span>{t('about.intro')}</span>
          </div>
        </div>
      </div>
      <div className="section section-about-2">
        <div className="wrapper">
          <div className="title">
            <span>Our Team</span>
          </div>
          <div className="team-wrapper">
            <div className="member">
              <div className="avatar">
                <img src="/img/about_bj.gif" alt="BJ" />
              </div>
              <div className="name">
                <span className="ceo">CEO</span>
                <br />
                <span className="namet">{t('about.shin_name')}</span>
              </div>
              <div className="intro">
                <span>{t('about.shin.1')}</span>
              </div>
            </div>
            <div className="member">
              <div className="avatar">
                <img src="/img/about_gh.gif" alt="GH" />
              </div>
              <div className="name">
                <span className="ceo">CTO</span>
                <br />
                <span className="namet">{t('about.jeong_name')}</span>
              </div>
              <div className="intro">
                <span>{t('about.jeong')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section-about-mobile mobile">
        <div className="mobile-wrapper">
          <div className="first contents-padding">
            <div className="title-wrapper">
              <span>Our Story</span>
            </div>
            <div className="text-wrapper">
              <span>{t('about.intro')}</span>
            </div>
          </div>
          <div className="second contents-padding">
            <div className="title-wrapper">
              <span>Our Team</span>
            </div>
            <div className="team-wrapper">
              <div className="member">
                <div className="avatar">
                  <img src="/img/about_bj.gif" alt="BJ" />
                </div>
                <div className="name">
                  <span className="ceo">CEO</span>
                  <br />
                  <span className="namet">{t('about.shin_name')}</span>
                </div>
                <div className="intro">
                  <span>{t('about.shin.1')}</span>
                </div>
              </div>
              <div className="member">
                <div className="avatar">
                  <img src="/img/about_gh.gif" alt="GH" />
                </div>
                <div className="name">
                  <span className="ceo">CTO</span>
                  <br />
                  <span className="namet">{t('about.jeong_name')}</span>
                </div>
                <div className="intro">
                  <span>{t('about.jeong')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default withRouter(AboutView)
