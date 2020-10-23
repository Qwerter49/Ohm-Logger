import React from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'

export default function CalandarContainer(props) {

    const localizer = momentLocalizer(moment)

    return (
        <div className="calender-container d-flex w-100 vw-100">
            <Calendar
            localizer={localizer}
            events={[]}
            startAccessor="start"
            endAccessor="end"
            className=" w-100 p-4 h-auto"
            />
        </div>
    )
}
