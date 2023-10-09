import { eventType, getAllEvents } from "@/dummy-data"
import EventList from "@/components/events/event-list"
import EventSearch from "@/components/events/events-search"

function AllEventsPage(){
  const events : eventType[] = getAllEvents()
    return (
      <div>
        <EventSearch/>
        <EventList items={events}/>
      </div>
    )
  }
  export default AllEventsPage