import {createSelector} from 'reselect'
import _ from 'lodash'

export const getVisit = state => state.visit

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

export const getVisitEventDays = state => state.visit.event_days
