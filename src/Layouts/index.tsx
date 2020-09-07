import React, {
  isValidElement,
  cloneElement,
  Children,
  useEffect,
  useState,
} from 'react'
import { Header } from '../Components'
import ReactFullpage from '@fullpage/react-fullpage'
import {
  useScrollIndexDispatch,
  // @ts-ignore
} from '../Context/Scroll.context.tsx'

import {
  useLangState,
  // @ts-ignore
} from '../Context/I18n.context.tsx'

import {
  useToggleModalState,
  //@ts-ignore
} from '../Context/Modal.context.tsx'

import { RouteProps } from 'react-router-dom'

interface Props extends RouteProps {}

const DefaultLayout: React.FC<Props> = ({ children, ...props }) => {
  const dispatch = useScrollIndexDispatch()
  const onChangeIndex = ({ destination }) => {
    dispatch({
      type: 'INDEX',
      data: destination,
    })
  }
  const langState = useLangState()
  const modalState = useToggleModalState()

  const [position, setPosition] = useState<'fixed' | 'static'>('static')
  const [top, setTop] = useState<number>(0)

  useEffect(() => {
    if (modalState) {
      const scrollTop =
        window.pageYOffset !== undefined
          ? window.pageYOffset
          : (
              document.documentElement ||
              (document.body.parentNode as any) ||
              document.body
            ).scrollTop
      setPosition('fixed')
      setTop(scrollTop)
    } else {
      setPosition('static')
      setTimeout(() => {
        window.scroll(0, top)
      }, 0)
    }
  }, [modalState])

  return (
    <div
      className="body"
      style={{
        fontFamily:
          langState === 'ko'
            ? 'source-han-sans-korean'
            : 'neue-haas-grotesk-text',
        position,
      }}>
      <Header {...props}></Header>
      <section className="section-wrapper">
        <ReactFullpage
          //fullpage options
          licenseKey="CE108429-34644C5A-BD3748C3-5A35CACF"
          scrollingSpeed={600} /* Options here */
          onLeave={(origin, destination, direction) => {
            onChangeIndex({ destination })
          }}
          key={props.location.key}
          navigation={true}
          lazyloading
          responsiveWidth={1279}
          keyboardScrolling
          scrollOverflow
          navigationPosition={'right'}
          render={({ state, fullpageApi }) => {
            if (state.sectionCount === 1) {
              document
                .querySelector('#fp-nav')
                .setAttribute('style', 'display:none;')
            }
            return (
              <ReactFullpage.Wrapper>
                <>
                  {Children.map(children, (child) => {
                    if (isValidElement(child)) {
                      return cloneElement(child, { state })
                    }
                    return child
                  })}
                </>
              </ReactFullpage.Wrapper>
            )
          }}
        />
      </section>
    </div>
  )
}

export default DefaultLayout
