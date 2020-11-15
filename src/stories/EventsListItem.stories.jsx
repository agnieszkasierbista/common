import React from 'react';
import {EventsListItem} from "../components/EventsListItem/EventsListItem.layout";
import {BrowserRouter as Router} from "react-router-dom";
import {StyledEvent} from "../components/EventsListItem/EventsLIstItem.styled";


export default {
    title: 'EventsListItem',
    component: EventsListItem,
    argTypes: {
        event: {},
        theme: {}
    },
};

const Template = (args) => {

    return (
        <Router>
            <StyledEvent
                style={{ width: 400 }}
                theme={args.theme}>
            <EventsListItem
                event={args.event}
                theme={args.theme}
                from="RemovedEventsList"
                renderRemove={(from, eventCreationDate) => {

                    return (
                        <button
                            data-event-creation-date={eventCreationDate}
                            data-from={from}>
                            x
                        </button>
                    )
                }}
            />
            </StyledEvent>
        </Router>
    );
};

export const Standard = Template;

Standard.args = {
    event: {
        color: 'blue',
        title: 'title',
        time: '22:56',
        date: '2020-11-18',
        creationDate: 1605466397120
    },
    theme: {colors: {c2: 'lightyellow', c1: 'red', c4: 'aqua'}}
};

