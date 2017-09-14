import { getDefaultLanguage } from '~/utils'
import cn from './CN'
import hk from './HK'
import en from './EN'

const dictionaryMap = {
  'cn': cn,
  'hk': hk,
  'en': en
}

const locale = getDefaultLanguage()

const Localization = dictionaryMap[locale]

export const trans = (str, ...args) => {
  if (!str) {
    return str
  }
  (args || []).forEach(arg => {
    str = str.replace('%s', arg)
  })
  return str
}

export default Localization
