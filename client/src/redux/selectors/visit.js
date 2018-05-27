import {createSelector} from 'reselect'
import _ from 'lodash'

export const getVisit = state => state.visit.content

export const getVisitEvents = createSelector(
  getVisit,
  visit => {
    return {
      visitOnly: visit.events,
      visitIp: visit.visit_ip_events,
      visitUser: visit.visit_user_events
    }
  }
)

export const getVisitEventDays = createSelector(
  getVisit,
  visit => {
    // ensure dates are sorted on the frontend
    return _.sortBy(
      visit.event_days, function(o) { return Date.parse(o) }
    )
  }
)

export const getVisitEventLinks = state => state.visit.content.event_links

export const getVisitNameMappings = createSelector(
  getVisit,
  visit => {
    return (visit.id === 0 ?
      { visitIp: 'AllNonUserVisits', visitUser: 'AllUserVisits' } :
      { visitIp: 'CurrentVisitIp', visitUser: 'VisitsUser' }
    )
  }
)
