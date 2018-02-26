import * as React from 'react'
import _bindAll from 'lodash/bindAll'

import Particles from 'react-particles-js'
import particlesConfig from './config/particles.js'
import Button from '~/components/Button'
import LogoIcon from '~/assets/icons/logo.svg'

import styles from './Home.css'
import '~/styles/global/global.css'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: ''
    }

    _bindAll(this, [
      'onSubscribeClick'
    ])
  }

  onSubscribeClick () {
    if (typeof window !== 'undefined') {
      window.open('http://eepurl.com/c3sFAD')
    }
  }

  render () {
    return (
      <div className={styles.container}>
        <Particles
          params={particlesConfig}
        />

        <div className={styles.slogan}>
          DECENTRALIZED <br />
          TOMORROW <br />
          IS <br />
          TODAY
        </div>

        <div className={styles.logo}>
          <LogoIcon />
        </div>

        <div className={styles.mail}>
          Join our mailing list for exclusive Ethereum news and first hint of ConsensusHK updates.

          <div className={styles.newsletter}>
            <Button
              content={'Subscribe'}
              size='small'
              onClick={this.onSubscribeClick}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
