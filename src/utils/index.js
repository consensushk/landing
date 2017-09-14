export const isBrowser = typeof window !== 'undefined'

export const getDefaultLanguage = () => {
  const defaultLanguage = isBrowser
    ? (window.navigator.userLanguage || window.navigator.language)
    : ''

  switch (defaultLanguage.toLowerCase()) {
    case 'zh-cn':
      return 'cn'
    case 'zh-tw':
    case 'zh-hk':
      return 'hk'
    default:
      return 'hk'
  }
}
