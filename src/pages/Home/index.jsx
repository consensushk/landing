import * as React from 'react'
import Logo from '~/assets/icons/logo.svg'

import Localization from '~/utils/locales'
import User from '~/utils/api/User'

import Menu from '~/components/Menu'

import styles from './Home.css'
import '~/styles/global/global.css'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: ''
    }
  }

  componentDidMount () {
    User.Info.get('foo').then(data => {
      this.setState({ user: data })
    })
  }

  render () {
    return (
      <main>
        <div className={styles.container}>
          <Menu
            list={
              [{ label: 'Home', to: '/' }, { label: 'About', to: '/about' }]
            }
          />
          <Logo />
          <h2>{Localization.title}</h2>
        </div>
        <p className='global-without-hash'>This is text with global css</p>
        <pre>
          {JSON.stringify(this.state.user, null, 2)}
        </pre>
      </main>
    )
  }
}

export default Home
