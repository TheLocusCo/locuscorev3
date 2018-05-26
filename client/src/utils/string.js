export const humanize = str => {
  return (str.charAt(0).toUpperCase() + str.slice(1).replace(/_/gi, ' '))
}

export const actualThemeName = str => {
  switch (str) {
    case 'default':
      return 'Light Theme'
    default:
      return humanize(`${str} Theme`)
  }
}

export const humanizeGraphNames = (str, customMaps) => {
  switch (str) {
    case 'visitOnly':
      return 'CurrentVisit'
    case 'visitIp': case 'visitUser':
      return customMaps[str]
    default:
      return humanize(str)
  }
}
