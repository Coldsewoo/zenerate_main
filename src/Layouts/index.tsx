import React, {
  isValidElement,
  cloneElement,
  Children,
  useState,
  useEffect,
} from 'react'
import { Header } from '../Components'
import ReactFullpage from '@fullpage/react-fullpage'
import {
  useScrollIndexState,
  useScrollIndexDispatch,
  // @ts-ignore
} from '../Context/Scroll.context.tsx'

import { RouteComponentProps, RouteProps } from 'react-router-dom'

interface Props extends RouteProps {
  
}

const DefaultLayout: React.FC<Props> = ({
  children,
  ...props
}) => {
  const dispatch = useScrollIndexDispatch()
  const onChangeIndex = ({ destination }) => {
    dispatch({
      type: 'INDEX',
      data: destination,
    })
  }

  return (
    <div className="body">
      <Header {...props}></Header>
      <section className="section-wrapper">
        <ReactFullpage
          //fullpage options
          licenseKey="OPEN-SOURCE-GPLV3-LIC    ENSE"
          scrollingSpeed={600} /* Options here */
          onLeave={(origin, destination, direction) => {
            onChangeIndex({ destination })
          }}
          key={props.location.key}
          navigation={true}
          lazyloading
          refresh
          keyboardScrolling
          scrollOverflow
          navigationPosition={'right'}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <>
                  {Children.map(children, (child) => {
                    if (isValidElement(child)) {
                      return cloneElement(child, {})
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
