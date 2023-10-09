import { eventType, getAllEvents } from "@/dummy-data"
import EventList from "@/components/events/event-list"
import EventSearch from "@/components/events/events-search"
import { useRouter } from "next/router"

function AllEventsPage() {
  const events: eventType[] = getAllEvents()
  const router = useRouter()
  function findEventsHandler(year:string,month:string){
    const fullPath = `/events/${year}/${month}`
    return router.push(fullPath)
  }

  return (
    <div>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  )
}
export default AllEventsPage