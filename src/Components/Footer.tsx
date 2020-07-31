import React, { useState } from 'react'

interface Props {}

const Footer: React.FC<Props> = () => {
  const [hovered, setHover] = useState(false)
  const [clicked, setClick] = useState(false)

  const handleClick = (
    $evt: React.MouseEvent<HTMLElement, MouseEvent>,
    flag: boolean
  ): void => {
    $evt.stopPropagation()
    setClick(flag)
  }

  return (
    <div className="footer-wrapper">
      <div className="spacer" />
      <div className="inner">
        <div className="inner-left">
          <div className="footer-text">
            <span>Zenerate Inc.</span>
          </div>
          <div className="footer-text">
            <span>CEO: BongJai Shin</span>
          </div>
          <div className="footer-text">
            <span>
              27 Dongil-ro 174-gil, Nowon-gu, 01849, Seoul, Republic of Korea
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
              hovered || clicked ? 'active' : ''
            } ${clicked ? 'expanded' : 'hover-pointer'}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
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
