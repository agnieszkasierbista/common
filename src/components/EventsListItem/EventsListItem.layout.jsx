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

export function EventsListItem({event, theme, from, renderRemove, Link}) {

    return (
        <>
            <StyledLink>
                <Link to={`/details/${event.creationDate}`}>
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
                </Link>
            </StyledLink>
            <StyledRemoveContainer>
                {renderRemove(from, event.creationDate)}
            </StyledRemoveContainer>
        </>
    )
}