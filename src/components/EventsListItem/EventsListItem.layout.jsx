import React from "react";
import {
    StyledDateAndTime,
    StyledEventData,
    StyledLink,
    StyledListDetails,
    StyledRemoveContainer
} from "./EventsLIstItem.styled";
import {Bookmark} from "../icons/Bookmark/Bookmark.layout";
import {Calendar} from "../icons/Calendar/Calendar.layout";
import {Clock} from "../icons/Clock/Clock.layout";
import {AlertCircle} from "../icons/AlertCircle/AlertCircle.layout";

export function EventsListItem({event, theme, from, renderRemove, Link, to, linkStyles}) {

    return (
        <>
            <StyledLink
                linkStyles={linkStyles}>
                <Link to={to}>
                    <StyledListDetails>
                        <AlertCircle color={event.color}/>
                        <Bookmark
                            color={event.bookmarkColor}
                        />
                        <StyledDateAndTime>
                            {event.date ? <div><Calendar color={theme.colors.c4}/> {event.date}</div> : null}
                            {event.time ? <div><Clock color={theme.colors.c4}/> {event.time}</div> : null}
                        </StyledDateAndTime>
                    </StyledListDetails>
                    <StyledEventData>{event.title}</StyledEventData>
                </Link>
            </StyledLink>
            <StyledRemoveContainer>
                {renderRemove(from, event.creationDate)}
            </StyledRemoveContainer>
        </>
    )
}