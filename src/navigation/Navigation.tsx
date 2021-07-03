import React, { FC, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import routes from './routes'

const Home = lazy(() => import('#pages/Home'))

const Navigation: FC = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <Router>
      <Switch>
        <Route path={routes.HOME} exact component={Home} />
      </Switch>
    </Router>
  </Suspense>
)

export default Navigation
