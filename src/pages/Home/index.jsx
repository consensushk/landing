import * as React from 'react'
import _bindAll from 'lodash/bindAll'
import classNames from 'classnames/bind'

import 'particles.js'
import particlesConfig from './config/particles.js'

import User from '~/utils/api/User'

import styles from './Home.css'
import '~/styles/global/global.css'

const cx = classNames.bind(styles)
class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: ''
    }

    _bindAll(this, [
      'handleEmailInput',
      'onSubmit'
    ])
  }

  componentDidMount () {
    User.Info.get('foo').then(data => {
      this.setState({ user: data })
    })

    if (window.particlesJS) {
      window.particlesJS('particles-js', particlesConfig)
    }
  }

  handleEmailInput (e) {
    const email = e.target.value
    this.setState({ email })
  }

  onSubmit () {
    console.log(this.state.email)
  }

  render () {
    return (
      <div className={styles.container}>
        <div id="particles-js" />

        <div className={styles.slogan}>
          DECENTRALIZED <br />
          TOMORROW <br />
          IS <br />
          TODAY
        </div>

        <div className={styles.logo}>
          CONSENSUS HK
        </div>

        <div className={styles.mail}>
          Join our mailing list for exclusive Ethereum news and first hint of ConsensusHK updates.

          <div className={styles.newsletter}>
            <input
              type="email"
              name="EMAIL"
              className={styles.formControl}
              placeholder="Your email address"
              onChange={this.handleEmailInput}
            />
            <button
              onClick={this.onSubmit}
              className={cx('button', 'newsletterButton')}>
              Submit
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
