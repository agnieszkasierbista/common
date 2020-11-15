import React from "react";
import {
    StyledDateAndTime,
    StyledEventData,
    StyledLink,
    StyledListDetails,
    StyledRemoveContainer
} from "./EventsLIstItem.styled";
import {Bookmark} from "../common/Bookmark/Bookmark.layout";
import {Calendar} from "../common/Calendar/Calendar.layout";
import {Clock} from "../common/Clock/Clock.layout";
import {AlertCircle} from "../common/AlertCircle/AlertCircle.layout";

export function EventsListItem({event, theme, from, renderRemove}) {

    return (
        <>
            <StyledLink to={`/details/${event.creationDate}`}>
                <StyledListDetails>
                    {
                        event.color !== "blue"
                            ? <AlertCircle color={event.color}/>
                            : null
                    }

                    <Bookmark
                        color={event.bookmarkColor}
                    />
                    <StyledDateAndTime>
                        {event.date ? <><Calendar color={theme.colors.c4}/> {event.date}</> : null}
                        {" "}
                        {event.time ? <><Clock color={theme.colors.c4}/> {event.time}</> : null}
                    </StyledDateAndTime>
                </StyledListDetails>
                <StyledEventData>{event.title}</StyledEventData>
            </StyledLink>
            <StyledRemoveContainer>
                {renderRemove(from, event.creationDate)}
            </StyledRemoveContainer>
        </>
    )
}