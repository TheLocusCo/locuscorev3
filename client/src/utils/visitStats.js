import _ from 'lodash'

export const countVisitsForXAxis = (visitEvents, hover) => {
  if(hover) {
    switch (Object.keys(hover)[0]) {
      case "links":
        return countVisitsForLink(visitEvents, hover.links)
      default:
        return countVisitsForDay(visitEvents, hover.days)
    }
  } else {
    return countVisitsForDay(visitEvents, null)
  }
}

export const countVisitsForDay = (visitEvents, day) => {
  if (!day) {
    return visitEvents.length
  } else if (Array.isArray(day)) {
    return _.reject(
      visitEvents,
      function(o) { return !_.includes(day, o.created_at_date) }
    ).length
  } else {
    return _.reject(
      visitEvents,
      function(o) { return o.created_at_date !== day }
    ).length
  }
}

export const countVisitsForLink = (visitEvents, lnk) => {
  if (!lnk) {
    return 0
  } else if (Array.isArray(lnk)) {
    return _.reject(
      visitEvents,
      function(o) { return !_.includes(lnk, o.page) }
    ).length
  } else {
    return _.reject(
      visitEvents,
      function(o) { return o.page !== lnk }
    ).length
  }
}
