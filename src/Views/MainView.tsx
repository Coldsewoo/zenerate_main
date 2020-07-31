import React, { useState, useEffect } from 'react'
import { Footer } from '../Components'
import { SelectInput, Item } from '../Components/inputs/SelectInput'

import { RouteComponentProps, withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface Props extends RouteComponentProps {}
type selectedProjectType = {
  [key: string]: boolean
}

const MainView: React.FC<Props> = ({ match, history, location }) => {
  const [__isInitialized, setInitial] = useState(true)

  const [t, i18n] = useTranslation('lang', { useSuspense: false })
  const [hovered, setHover] = useState<number | null>(null)
  const changeHover = (idx: number | null) => setHover(idx)

  const [clicked, setClick] = useState<number>(0)
  const changeClick = (idx: number) => setClick(idx)

  const [items, setItems] = useState<Item[]>([])

  const wait = async () => await new Promise((r, j) => setTimeout(() => {r()}, 5000))

  // useEffect(() => {
  //   ;(async function () {
  //     setItems([
  //       {
  //         id: 0,
  //         value: '1',
  //       },
  //       {
  //         id: 1,
  //         value: '2',
  //       },
  //     ])
  //     await wait()
  //     setInitial(true)
  //   })()
  // }, [])

  const makeLi = (tab: number, num: number): JSX.Element[] =>
    [...Array(num)].map((_, i) => (
      <li key={i}>{t(`main.tab${tab}.li${i + 1}`)}</li>
    ))

  return (
    <>
      {!__isInitialized && <div className="section"></div>}
      {__isInitialized && (
        <>
          <div className="section section-main-1">
            <div className="wrapper noselect">
              <div className="main-image">
                <img src="/img/zenerate_main.gif" alt="" />
              </div>
              <ul className="main-text">{makeLi(1, 5)}</ul>
            </div>
          </div>
          <div className="section section-main-2">
            <div className="wrapper">
              <div className="left-image">
                <img src="/img/final_color.gif" alt="" />
              </div>
              <div className="right-text">
                <ul>{makeLi(2, 11)}</ul>
              </div>
            </div>
          </div>
          <div className="section section-main-3">
            <div className="wrapper">
              <div className="icons-wrapper">
                <div
                  className={`icon-wrapper ${
                    hovered === 0 || clicked === 0 ? 'active' : ''
                  }`}>
                  <div
                    className="hover-pointer"
                    onMouseEnter={() => changeHover(0)}
                    onMouseLeave={() => changeHover(null)}
                    onClick={() => changeClick(0)}>
                    <img
                      src={`/img/about_client${
                        hovered === 0 || clicked === 0 ? '_dark' : ''
                      }.svg`}
                      alt=""
                    />
                    <span className="icon-title">Client Meeting</span>
                  </div>

                  <div className="icon-index">
                    <span>1</span>
                    <div className="spacer"></div>
                  </div>
                </div>
                <div
                  className={`icon-wrapper ${
                    hovered === 1 || clicked === 1 ? 'active' : ''
                  }`}>
                  <div
                    className="hover-pointer"
                    onMouseEnter={() => changeHover(1)}
                    onMouseLeave={() => changeHover(null)}
                    onClick={() => changeClick(1)}>
                    <img
                      src={`/img/about_process${
                        hovered === 1 || clicked === 1 ? '_dark' : ''
                      }.svg`}
                      alt=""
                    />
                    <span className="icon-title">Processing</span>
                  </div>

                  <div className="icon-index">
                    <span>2</span>
                    <div className="spacer"></div>
                  </div>
                </div>
                <div
                  className={`icon-wrapper ${
                    hovered === 2 || clicked === 2 ? 'active' : ''
                  }`}>
                  <div
                    className="hover-pointer"
                    onMouseEnter={() => changeHover(2)}
                    onMouseLeave={() => changeHover(null)}
                    onClick={() => changeClick(2)}>
                    <img
                      src={`/img/about_delivery${
                        hovered === 2 || clicked === 2 ? '_dark' : ''
                      }.svg`}
                      alt=""
                    />
                    <span className="icon-title">Delivery</span>
                  </div>

                  <div className="icon-index">
                    <span>3</span>
                  </div>
                </div>
              </div>
              <div className="bottom-text">
                <span>{t(`main.tab3.index${clicked + 1}.span1`)}</span>
                <br />
                <span>{t(`main.tab3.index${clicked + 1}.span2`)}</span>
              </div>
            </div>
          </div>
          <div className="section section-main-4">
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
          </div>
          <div className="section section-main-5">
            <div className="wrapper">
              <div className="left-title">
                <span>Feel Free to Contact Us!</span>
              </div>
              <div className="right-form">
                <div className="label-text">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="label-text">
                  <input type="text" placeholder="Email" />
                </div>
                <div className="label-text">
                  <input type="text" placeholder="Category" />
                </div>
                <div className="label-textarea">
                  <textarea name="message" rows={6} placeholder="Message" />
                </div>
                <SelectInput
                  title="title"
                  placeholder="placeholder"
                  items={items}
                />
                <div className="form-send">
                  <span className="hover-pointer">SEND</span>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default MainView
