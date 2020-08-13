import React, { isValidElement, cloneElement, Children } from 'react'
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

  return (
    <div
      className="body"
      style={{
        fontFamily:
          langState === 'ko'
            ? 'source-han-sans-korean'
            : 'neue-haas-grotesk-text',
      }}>
      <Header {...props}></Header>
      <section className="section-wrapper">
        <ReactFullpage
          //fullpage options
          licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
          scrollingSpeed={600} /* Options here */
          onLeave={(origin, destination, direction) => {
            onChangeIndex({ destination })
          }}
          key={props.location.key}
          navigation={true}
          lazyloading
          responsiveWidth={1279}
          refresh
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
