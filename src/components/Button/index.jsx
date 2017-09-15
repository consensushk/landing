import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './Button.css'

const cx = classNames.bind(styles)
const Button = ({
  variant = 'default',
  size = 'small',
  content, onClick, disabled
}) => {
  const classnames = cx(
    'base',
    {'fullwidth': size === 'fullwidth'},
    {'sm': size === 'small'},
    {'md': size === 'middle'},
    {'default': variant === 'default'},
    {'inverted': variant === 'inverted'},
    {'disable': disabled}
  )

  return (
    <button
      className={classnames}
      onClick={onClick} disabled={disabled}>
      {content}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.string, // 'default', 'inverted'
  size: PropTypes.string, // 'small', 'middle', 'fullwidth'
  content: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
}

export default Button
