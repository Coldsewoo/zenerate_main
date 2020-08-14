// import '../Assets/css/disable.scss'
// @ts-ignore
import { useToggleModalDispatch } from '../Context/Modal.context'

import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { CSSTransition } from 'react-transition-group'

interface Props {
  state: any
}

const NewsView: React.FC<Props> = ({ state }) => {
  const [newsScrollIndex, setNewsScrollIndex] = useState(0)
  const [newsModalIndex, setNewsModalIndex] = useState<number | null>(null)
  const t = useTranslation('lang', { useSuspense: false })[0]
  const newsLen = 3
  const handleIndex = (inc: number) => {
    setNewsScrollIndex(newsScrollIndex + inc)
  }
  const dispatch = useToggleModalDispatch()

  const handleModalIndex = (
    $evt: React.MouseEvent<HTMLElement, MouseEvent>,
    idx: number | null
  ) => {
    $evt.stopPropagation()
    dispatch({
      type: 'TOGGLE',
      flag: typeof idx === 'number',
    })
    setNewsModalIndex(idx)
  }

  return (
    <>
      <div className="section section-news-1">
        <div className="wrapper">
          <div className="news-wrapper">
            {newsScrollIndex > 0 && (
              <div
                className="news-nav prev"
                onClick={() => handleIndex(-1)}></div>
            )}
            {newsScrollIndex === 0 && (
              <div className="news-nav prev placeholder"></div>
            )}
            {[...new Array(newsLen)].map((_, i) => (
              <div
                key={i}
                className="news-item-wrapper hover-pointer noselect"
                onClick={($evt) => handleModalIndex($evt, newsScrollIndex + i)}>
                <div className="news-item-date">
                  <span>
                    {t(`news.news${newsScrollIndex + i}.created_date`)}
                  </span>
                </div>
                <div className="news-item-title">
                  <span>{t(`news.news${newsScrollIndex + i}.title`)}</span>
                </div>
              </div>
            ))}

            {newsScrollIndex < newsLen - 3 && (
              <div
                className="news-nav next"
                onClick={() => handleIndex(1)}></div>
            )}
            {newsScrollIndex === newsLen - 3 && (
              <div className="news-nav next placeholder"></div>
            )}
          </div>
        </div>
      </div>
      <div className="section-news-mobile mobile">
          <div className="news-wrapper contents-padding">
            {[...new Array(newsLen)].map((_, i) => (
              <div
                key={i}
                className="news-item-wrapper hover-pointer noselect"
                onClick={($evt) => handleModalIndex($evt, newsScrollIndex + i)}>
                <div className="news-item-date">
                  <span>
                    {t(`news.news${newsScrollIndex + i}.created_date`)}
                  </span>
                </div>
                <div className="news-item-title">
                  <span>{t(`news.news${newsScrollIndex + i}.title`)}</span>
                </div>
              </div>
            ))}
          </div>
      </div>
      <CSSTransition
        in={newsModalIndex !== null}
        timeout={200}
        classNames="fade"
        unmountOnExit>
        <section
          className={`news-modal`}
          onClick={($evt) => handleModalIndex($evt, null)}>
          <CSSTransition
            in={newsModalIndex !== null}
            timeout={200}
            classNames="slide-right"
            unmountOnExit>
            <div
              className="news-modal-wrapper"
              onClick={($evt) => $evt.stopPropagation()}>
              <div
                className="news-modal-item close hover-pointer"
                onClick={($evt) => handleModalIndex($evt, null)}>
                <i className="material-icons">close</i>
              </div>
              {newsModalIndex !== null && (
                <>
                  <div className="news-modal-item date">
                    <span>{t(`news.news${newsModalIndex}.created_date`)}</span>
                  </div>
                  <div className="news-modal-item title">
                    <span>{t(`news.news${newsModalIndex}.title`)}</span>
                  </div>
                  <div className="news-modal-item content">
                    <span>{t(`news.news${newsModalIndex}.contents`)}</span>
                  </div>
                  <div className="news-modal-item links">
                    <span>{t(`news.news${newsModalIndex}.linkTitle`)}</span>
                    <ul>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={t(`news.news${newsModalIndex}.link1`)}>
                          {t(`news.news${newsModalIndex}.link1`)}
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={t(`news.news${newsModalIndex}.link2`)}>
                          {t(`news.news${newsModalIndex}.link2`)}
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={t(`news.news${newsModalIndex}.link3`)}>
                          {t(`news.news${newsModalIndex}.link3`)}
                        </a>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </CSSTransition>
        </section>
      </CSSTransition>
    </>
  )
}

export default NewsView
