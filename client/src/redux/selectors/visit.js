import {createSelector} from 'reselect'

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

export const getVisitEventDays = state => state.visit.content.event_days

export const getVisitEventLinks = state => state.visit.content.event_links
