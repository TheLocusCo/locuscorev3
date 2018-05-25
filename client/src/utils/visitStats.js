import _ from 'lodash'

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
