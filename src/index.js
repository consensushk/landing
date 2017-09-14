import * as React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import { BrowserRouter as Router, StaticRouter } from 'react-router-dom'

// import Routes from './routes'

import App from './App'

/* Client render */
if (typeof document !== 'undefined') {
  ReactDOM.render(
    <Router>
      <App />
    </Router>
    , document.getElementById('root')
  )
}

/* Exported static site renderer */
export default (locals, callback) => {
  const context = {}

  const markup = ReactDOMServer.renderToString(
    <StaticRouter
      location={locals.path}
      context={context}
    >
      <App/>
    </StaticRouter>
  )

  callback(null, markup)
}
