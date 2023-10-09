import { getEventById,eventType } from "@/dummy-data"
import { useRouter } from "next/router"
import {Fragment} from "react"
import EventSummary from "@/components/event-detail/event-summary"
import EventLogistics from "@/components/event-detail/event-logistics"
import EventContent from "@/components/event-detail/event-content"

function EventDetailPage(){
    const router = useRouter()
    const eventId = router.query.eventId 
    const event : eventType | undefined = getEventById(eventId as string) ;
    if (!event){
        return <p>No event found!</p>
    }
    return (
        <Fragment>
            <EventSummary title={event.title}/>
            <EventLogistics event={event} />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    )
}
export default EventDetailPage