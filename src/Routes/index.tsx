import React, { ReactElement } from 'react'
import {
  Route,
  Switch,
  Redirect,
  withRouter,
  RouteComponentProps,
  RouteProps,
} from 'react-router-dom'
import { MainView, ProjectView, NotFoundView } from '../Views'
import DefaultLayout from '../Layouts'
import { WithRouterStatics } from 'react-router'
// interface Props {}

interface iRouter extends RouteProps {
  component:
    | (React.ComponentClass<Pick<Props, never>, any> &
        WithRouterStatics<React.FC<Props>>)
    | React.FC<any>
  layout: React.FC<any>
}

const DefaultRoute: React.FC<iRouter> = ({
  component: Component,
  layout: Layout,
  ...rest
}): ReactElement<any, any> | null => (
  <Route
    {...rest}
    render={(props) => (
      <Layout {...rest}>
        <Component {...props} />
      </Layout>
    )}></Route>
)

interface Props {}

export const DefaultRouter: React.FC<Props> = () => {
  return (
    <Switch>
      <DefaultRoute
        exact
        path="/"
        layout={DefaultLayout}
        component={MainView}
      />
      <DefaultRoute
        exact
        path="/project"
        layout={DefaultLayout}
        component={ProjectView}
      />
      <DefaultRoute
        exact
        path="/404"
        layout={DefaultLayout}
        component={NotFoundView}
      />
      <Redirect to="/" />
    </Switch>
  )
}
